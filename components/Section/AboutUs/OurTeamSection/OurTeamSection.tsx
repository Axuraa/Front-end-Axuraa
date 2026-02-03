import React from "react";
import styles from "./OurTeamSection.module.css";
import TeamCard from "@/components/UI/Muscles/TeamCard/TeamCard";
import SectionHeader from "@/components/Layout/SectionHeader/SectionHeader";
import StatusBadge from "@/components/UI/Atoms/StatusBadge/StatusBadge";
import { TeamMember } from "@/service/TeamMembers/TeamMembers";

interface TeamSectionProps {
  teamMembers?: TeamMember[];
}

// Static data for now
const staticTeamMembers: TeamMember[] = [
  {
    _id: "1",
    name: "Bavly Akramy",
    email: "bavly@example.com",
    phone_number: "+1234567890",
    role_id: {
      _id: "1",
      title: "CEO",
      level: 3,
      description: "Chief Executive Officer",
      createdAt: "2020-01-01",
      updatedAt: "2020-01-01",
      __v: 0
    },
    bio: "Visionary leader with 10+ years of experience",
    image_url: "/assets/bavly.jpg",
    status: "active",
    technologies_used: [],
    start_at: "2020-01-01",
    createdAt: "2020-01-01",
    updatedAt: "2020-01-01",
    __v: 0,
    id: "1"
  },
  {
    _id: "2",
    name: "Bavly Akramy",
    email: "bavly2@example.com",
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
    createdAt: "2020-01-01",
    updatedAt: "2020-01-01",
    __v: 0,
    id: "2"
  },
  {
    _id: "3",
    name: "Bavly Akramy",
    email: "bavly3@example.com",
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
    createdAt: "2020-01-01",
    updatedAt: "2020-01-01",
    __v: 0,
    id: "3"
  },
  {
    _id: "4",
    name: "Bavly Akramy",
    email: "bavly4@example.com",
    phone_number: "+1234567893",
    role_id: {
      _id: "4",
      title: "CFO",
      level: 2,
      description: "Chief Financial Officer",
      createdAt: "2020-01-01",
      updatedAt: "2020-01-01",
      __v: 0
    },
    bio: "Financial strategist with proven track record",
    image_url: "/assets/bavly.jpg",
    status: "active",
    technologies_used: [],
    start_at: "2020-04-01",
    createdAt: "2020-01-01",
    updatedAt: "2020-01-01",
    __v: 0,
    id: "4"
  },
  {
    _id: "5",
    name: "Bavly Akramy",
    email: "bavly5@example.com",
    phone_number: "+1234567894",
    role_id: {
      _id: "5",
      title: "CFO",
      level: 2,
      description: "Chief Financial Officer",
      createdAt: "2020-01-01",
      updatedAt: "2020-01-01",
      __v: 0
    },
    bio: "Financial strategist with proven track record",
    image_url: "/assets/bavly.jpg",
    status: "active",
    technologies_used: [],
    start_at: "2020-04-01",
    createdAt: "2020-01-01",
    updatedAt: "2020-01-01",
    __v: 0,
    id: "5"
  },
];

const TeamSection: React.FC<TeamSectionProps> = ({
  teamMembers = staticTeamMembers,
}) => {
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
          {teamMembers.map((member) => (
            <TeamCard
              key={member._id}
              name={member.name}
              role={member.role_id.title}
              imageUrl={member.image_url}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
