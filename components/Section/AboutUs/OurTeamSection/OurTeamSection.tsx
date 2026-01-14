import React from "react";
import styles from "./OurTeamSection.module.css";
import TeamCard from "@/components/UI/Muscles/TeamCard/TeamCard";
import SectionHeader from "@/components/Layout/SectionHeader/SectionHeader";
import StatusBadge from "@/components/UI/Atoms/StatusBadge/StatusBadge";

// Types matching backend response
interface TeamMember {
  _id: string;
  name: string;
  email: string;
  phone_number: string;
  role_id: string;
  bio: string;
  image_url: string;
  status: string;
  technologies_used: string[];
  start_at: string;
}

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
    role_id: "CEO",
    bio: "Visionary leader with 10+ years of experience",
    image_url: "/assets/bavly.jpg",

    status: "active",
    technologies_used: [],
    start_at: "2020-01-01",
  },
  {
    _id: "2",
    name: "Bavly Akramy",
    email: "bavly2@example.com",
    phone_number: "+1234567891",
    role_id: "CTO",
    bio: "Tech expert passionate about innovation",
    image_url: "/assets/bavly.jpg",

    status: "active",
    technologies_used: [],
    start_at: "2020-02-01",
  },
  {
    _id: "3",
    name: "Bavly Akramy",
    email: "bavly3@example.com",
    phone_number: "+1234567892",
    role_id: "COO",
    bio: "Operations specialist ensuring smooth workflow",
    image_url: "/assets/bavly.jpg",
    status: "active",
    technologies_used: [],
    start_at: "2020-03-01",
  },
  {
    _id: "4",
    name: "Bavly Akramy",
    email: "bavly4@example.com",
    phone_number: "+1234567893",
    role_id: "CFO",
    bio: "Financial strategist with proven track record",
    image_url: "/assets/bavly.jpg",

    status: "active",
    technologies_used: [],
    start_at: "2020-04-01",
  },
  {
    _id: "5",
    name: "Bavly Akramy",
    email: "bavly4@example.com",
    phone_number: "+1234567893",
    role_id: "CFO",
    bio: "Financial strategist with proven track record",
    image_url: "/assets/bavly.jpg",

    status: "active",
    technologies_used: [],
    start_at: "2020-04-01",
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
              role={member.role_id}
              imageUrl={member.image_url}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
