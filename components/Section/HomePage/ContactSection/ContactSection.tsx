"use client";
import React, { useEffect, useState } from "react";
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
import { getContactInformation, SocialLink } from "@/service/Contact/contactinformation";

// Define SVG components directly
const FacebookIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const LinkedInIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
  </svg>
);

const TikTokIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.36-4.08-1.1-1.75-1.01-3.06-2.87-3.32-4.91-.04-.5-.06-1-.06-1.5.01-1.39 0-2.78 0-4.17 1.4.01 2.79 0 4.19.01.05 1.11.26 2.27.89 3.18.8 1.23 2.38 1.9 3.85 1.71 1.27-.15 2.42-.95 2.93-2.15.31-.74.39-1.56.35-2.36-.01-4.18 0-8.36 0-12.54z"/>
  </svg>
);

const ContactSection: React.FC<ContactSectionProps> = ({
  badgeText,
  title1,
  title2,
  subtitle,
  showLinks = true,
}) => {
  const [contactData, setContactData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchContactData = async () => {
      try {
        const result = await getContactInformation();
        if (result.success && result.data) {
          console.log('ContactSection - Contact data loaded:', result.data);
          setContactData(result.data);
        }
      } catch (error) {
        console.error('ContactSection - Error fetching contact data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchContactData();
  }, []);

  // Transform API data to social icons format with branding mapping
  const getSocialIcons = () => {
    // Map common social media names to their respective local icons
    const iconMapping: Record<string, string> = {
      facebook: "/assets/FacebookIcon.svg",
      instagram: "/assets/InstagramIcon.svg",
      linkedin: "/assets/linkeninicon.svg",
      tiktok: "/assets/list/icons8-tiktok.svg",
      twitter: "/assets/Xicon.svg",
      x: "/assets/Xicon.svg",
      youtube: "/assets/YouTubeIcon.svg",
      github: "/assets/githupicon.svg",
    };

    if (!contactData?.socialLinks) {
      // Fallback if no API data
      return [
        { id: 1, icon: "/assets/InstagramIcon.svg", label: "Instagram", url: "#" },
      ];
    }

    return contactData.socialLinks.map((link: SocialLink, index: number) => {
      const nameLower = link.name.toLowerCase();
      // Use mapped icon if available, otherwise use API icon or fallback to default
      const iconPath = iconMapping[nameLower] || link.icon || "/assets/Vector.svg";
      
      return {
        id: index + 1,
        icon: iconPath,
        label: link.name.charAt(0).toUpperCase() + link.name.slice(1),
        url: link.url,
      };
    });
  };

  const socialIcons = getSocialIcons();

  return (
    <section id="contact-section" className={styles.ContactSection}>
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

        {/* Contact Info Cards - Using API data */}
        <div className={styles.contactFormWrapper}>
          <ContactInfoCard
            icon="/assets/PhoneIcon.svg"
            label="Phone"
            value={contactData?.phone || "+1 (555) 123-4567"}
            onClick={() => {
              const phoneNumber = contactData?.phone || "+1 (555) 123-4567";
              window.location.href = `tel:${phoneNumber}`;
            }}
          />
          <ContactInfoCard
            icon="/assets/EmailIcon.svg"
            label="Email"
            value={contactData?.emails?.[0]?.email || "contact@company.com"}
            onClick={() => {
              const emailAddress = contactData?.emails?.[0]?.email || "contact@company.com";
              window.open(`mailto:${emailAddress}`, '_blank');
            }}
          />
        </div>

        {/* Social Icons - Using API data */}
        {showLinks && ( 
          <div className={styles.socialIconsContainer}>
            {socialIcons.map((social: any) => (
              <a 
                key={social.id}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
              >
                <SocialIcon
                  icon={social.icon}
                  showLabel={true}
                  alt={social.label}
                />
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default React.memo(ContactSection);