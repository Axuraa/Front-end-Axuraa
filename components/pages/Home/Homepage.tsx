

import React from "react";
import styles from "./Homepage.module.css";
import ContactSection from "@/components/Section/HomePage/ContactSection/ContactSection";
import ServicesSection from "@/components/Section/HomePage/OurServicesSection/ServicesSection";
import BusinessSsection from "@/components/Section/HomePage/BusinessSection/BusinessSsection";
import RatingSection from "@/components/Section/HomePage/RatingSection/RatingSection";
import ProjectSection from "@/components/Section/HomePage/ProjectSection/ProjectSection";
import WorkerSection from "@/components/Section/HomePage/WorkerSection/WorkerSection";
import { ContactData } from "../Contact/Contact";


const Homepage = ({ contactData }: { contactData: ContactData | null }) => {

  return (
    <div className={styles.homePage}>
      <ServicesSection />
      <BusinessSsection />
      <RatingSection
        badgeText="Our Achievements"
        title1="How we help "
        title2="Businesses Grow?"
        subtitle="Discover our comprehensive suite of services designed to elevate your digital presence"
      />
      <ProjectSection
        badgeText="Our Services"
        title1="How we help"
        title2="Businesses Grow?"
        subtitle="Discover our comprehensive suite of services designed to elevate your digital presence"
        seeAllHref="#projects"
        seeAllText="View All Projects"
      />

      <WorkerSection
        badgeText="Our Client"
        title1="Meet Our"
        title2="Expert Team"
        subtitle="Dedicated professionals delivering exceptional results"
        // Workers={workers}
      />

      <ContactSection
        badgeText="Our Team"
        title1="How we help "
        title2="Businesses Grow?"
        subtitle="Discover our comprehensive suite of services designed to elevate your digital presence"
        contactData={contactData}
      />
    </div>
  );
};

export default React.memo(Homepage);
