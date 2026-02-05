import React, { useEffect, useState } from "react";
import styles from "./OurTeamSection.module.css";
import TeamCard from "@/components/UI/Muscles/TeamCard/TeamCard";
import SectionHeader from "@/components/Layout/SectionHeader/SectionHeader";
import StatusBadge from "@/components/UI/Atoms/StatusBadge/StatusBadge";
import { TeamMember } from "@/service/TeamMembers/TeamMembers";
import { getActiveTeamMembers } from "@/service/TeamMembers/TeamMembers";

interface TeamSectionProps {
  teamMembers?: TeamMember[];
}

// Fallback static data
const staticTeamMembers: TeamMember[] = [
  {
    _id: "1",
    name: "Bavly Akramy",
    email: "bavly@example.com",
    phone_number: "+1234567890",
    role_id: {
      _id: "1",
      title: "CEO & Founder",
      level: 3,
      description: "Chief Executive Officer & Founder",
      createdAt: "2020-01-01",
      updatedAt: "2020-01-01",
      __v: 0
    },
    bio: "Founder and visionary leader with 10+ years of experience",
    image_url: "/assets/bavly.jpg",
    status: "active",
    technologies_used: [],
    start_at: "2020-01-01",
    is_displayed_in_website: true,
    createdAt: "2020-01-01",
    updatedAt: "2020-01-01",
    __v: 0,
    id: "1"
  },
  {
    _id: "2",
    name: "John Doe",
    email: "john@example.com",
    phone_number: "+1234567891",
    role_id: {
      _id: "2",
      title: "CTO",
      level: 2,
      description: "Chief Technology Officer",
      createdAt: "2020-01-01",
      updatedAt: "2020-01-01",
      __v: 0
    },
    bio: "Tech expert passionate about innovation",
    image_url: "/assets/bavly.jpg",
    status: "active",
    technologies_used: [],
    start_at: "2020-02-01",
    is_displayed_in_website: false,
    createdAt: "2020-01-01",
    updatedAt: "2020-01-01",
    __v: 0,
    id: "2"
  },
  {
    _id: "3",
    name: "Jane Smith",
    email: "jane@example.com",
    phone_number: "+1234567892",
    role_id: {
      _id: "3",
      title: "COO",
      level: 2,
      description: "Chief Operating Officer",
      createdAt: "2020-01-01",
      updatedAt: "2020-01-01",
      __v: 0
    },
    bio: "Operations specialist ensuring smooth workflow",
    image_url: "/assets/bavly.jpg",
    status: "active",
    technologies_used: [],
    start_at: "2020-03-01",
    is_displayed_in_website: true,
    createdAt: "2020-01-01",
    updatedAt: "2020-01-01",
    __v: 0,
    id: "3"
  }
];

const TeamSection: React.FC<TeamSectionProps> = ({
  teamMembers = staticTeamMembers,
}) => {
  const [displayedTeamMembers, setDisplayedTeamMembers] = useState<TeamMember[]>(teamMembers);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchTeamMembers = async () => {
      try {
        setLoading(true);
        const result = await getActiveTeamMembers();
        
        if (result.success && result.data) {
          console.log('Team members data loaded:', result.data);
          // Filter only members that should be displayed on website
          const displayedMembers = result.data.filter(member => member.is_displayed_in_website);
          
          // Highlight founder - update role title to include "Founder"
          const membersWithFounderHighlight = displayedMembers.map(member => {
            if (member.role_id.title.toLowerCase().includes('ceo') || member.bio.toLowerCase().includes('founder')) {
              return {
                ...member,
                role_id: {
                  ...member.role_id,
                  title: member.role_id.title.includes('Founder') ? member.role_id.title : `${member.role_id.title} & Founder`
                }
              };
            }
            return member;
          });
          
          setDisplayedTeamMembers(membersWithFounderHighlight);
          console.log('Filtered team members for website display:', membersWithFounderHighlight);
        } else {
          console.error('Team members API error:', result.error);
          setDisplayedTeamMembers(teamMembers);
        }
      } catch (error) {
        console.error('Error fetching team members:', error);
        setDisplayedTeamMembers(teamMembers);
      } finally {
        setLoading(false);
      }
    };

    fetchTeamMembers();
  }, [teamMembers]);

  return (
    <section className={styles.teamSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <StatusBadge text="AXURAA" className={styles.badge} />

          <SectionHeader
            title1="Meet"
            title2="Our Team"
            // subtitle="Discover our comprehensive suite of services designed to elevate your digital presence"
          />
        </div>

        <div className={styles.teamGrid}>
          {displayedTeamMembers.map((member) => (
            <TeamCard
              key={member._id}
              name={member.name}
              role={member.role_id.description || member.role_id.title}
              imageUrl={member.image_url}
              description={member.bio}
            />
          ))}
        </div>
      </div>
    </section>
    
  );
};

export default TeamSection;
