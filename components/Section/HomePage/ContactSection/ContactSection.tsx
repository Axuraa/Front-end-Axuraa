"use client";
import React from "react";
import styles from "./ContactSection.module.css";
import Badge from "@/components/UI/Atoms/Badge/Badge";
import SectionHeader from "@/components/Layout/SectionHeader/SectionHeader";
import DevolpercCard from "@/components/UI/Atoms/DevoleperCard/DevolpercCard";
import { HorizontalScroll } from "@/components/UI/Atoms/ScrollComponents/ScrollComponents";
import StatusBadge from "@/components/UI/Atoms/StatusBadge/StatusBadge";
import Typography from "@/components/UI/Atoms/Typography/Typography";
import { ContactIcon } from "lucide-react";
import ContactInfoCard from "@/components/UI/Atoms/ContactForm/ContactInfoCard";
import SocialIcon from "@/components/UI/Atoms/SocialIcon/SocialIcon";
import ContactForm from "@/components/UI/Atoms/ContactForm/ContactForm";
import { ContactSectionProps } from "@/types/HomePage/contactTypes";

const ContactSection: React.FC<ContactSectionProps> = ({
  badgeText,
  title1,
  title2,
  subtitle,
  showLinks = true,
}) => {
  return (
    <section className={styles.ContactSection}>
      <div className={styles.ContactGrid}>
        {/* Contact Info - Title and Subtitle only */}
        <div className={styles.Contantinfo}>
          <StatusBadge
            text="Contact Us"
            style={{
              width: "130.2456px",
              height: "32.0175px",
              display: "flex",
              padding: "4.807px 14.421px",
              alignItems: "center",
              borderRadius: "12016.341px",
              border: "1.202px solid #902501",
              background: "rgba(208, 74, 29, 0.10)",
              backdropFilter: "blur(2.403508424758911px)",
              color: "#D04A1D",
              fontFamily: "Inter, sans-serif",
              fontSize: "14.421px",
              fontStyle: "normal",
              fontWeight: 700,
              lineHeight: "19.228px",
              letterSpacing: "0.361px",
              textTransform: "uppercase",
              marginTop: "5px",
              paddingBlock: "10px",
            }}
          />
          
          {/* Title */}
          <Typography
            variant="h1"
            component="h1"
            className={`${styles.title} ${styles.mainTitle}`}
          >
            <span
              style={{
                color: "#FFFFFF",
              }}
            >
              Let's build something
            </span>
            <span
              style={{
                color: "#D04A1D",
                textAlign: "start",
                marginTop: "0.5rem",
                marginBottom: "0.5rem",
                background: "linear-gradient(90deg, #D04A1D 0%, #902501 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              extraordinary.
            </span>
          </Typography>
          
          {/* Subtitle */}
          <div className={styles.subtitle}>
            <Typography
              variant="body1"
              component="p"
              className={styles.subtitle}
            >
              Have a project in mind? We'd love to hear about it. Fill out the
              form or reach out directly to discuss how Axuraa can help you
              achieve your goals.
            </Typography>
          </div>
        </div>

        {/* Contact Form */}
        <div className={styles.Contantform}>
          <ContactForm />
        </div>

        {/* Contact Info Cards - Separated */}
        <div className={styles.contactFormWrapper}>
          <ContactInfoCard
            icon="/assets/PhoneIcon.svg"
            label="Phone"
            value="+1 (555) 123-4567"
          />
          <ContactInfoCard
            icon="/assets/EmailIcon.svg"
            label="Email"
            value="contact@company.com"
          />
        </div>

        {/* Social Icons */}
        {showLinks && (
          <div className={styles.socialIconsContainer}>
            {[
              { id: 1, icon: "/assets/Vector.svg", label: "Instagram" },
              { id: 2, icon: "/assets/Vector.svg", label: "Facebook" },
              { id: 3, icon: "/assets/Vector.svg", label: "Twitter" },
              { id: 4, icon: "/assets/Vector.svg", label: "LinkedIn" },
            ].map((social) => (
              <SocialIcon
                key={social.id}
                icon={social.icon}
                showLabel={true}
                alt={social.label}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default React.memo(ContactSection);