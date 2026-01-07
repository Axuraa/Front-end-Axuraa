// components/EmailSection/EmailSection.tsx
import React from 'react';
import EmailCard from '@/components/UI/Muscles/EmailCard/EmailCard';
import Typography from '@/components/UI/Atoms/Typography/Typography';
import styles from './EmailSection.module.css';

interface ContactData {
  name: string;
  email: string;
  description: string;
  icon: string;
}

interface EmailSectionProps {
  title?: string;
  subtitle?: string;
  contacts: ContactData[];
  className?: string;
}

const EmailSection: React.FC<EmailSectionProps> = ({
  title = 'Contact via email',
  subtitle = 'Choose the appropriate section for your inquiry',
  contacts,
  className = '',
}) => {
  return (
    <section className={`${styles.emailSection} ${className}`}>
      <div className={styles.header}>
        <Typography
          variant="h3"
          component="h3"
           style={{
              textAlign: 'center',
              fontFamily: 'Roboto',
              fontSize: 'var(--font-size-72, 72px)',
              fontStyle: 'normal',
              fontWeight: 900,
              lineHeight: ' 100px',
              letterSpacing: 'var(--letter-spacing--1_8, -1.8px)',
              margin: 0,
              animation: "fadeInUp 0.8s ease-out",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center", // Center content vertically
              alignItems: "center",
            }}
        >
          <span
              style={{
                color: "#FFFFFF",
                fontFamily: "Inter, sans-serif",
                fontSize: "57.684px",
                fontWeight: 900,
                lineHeight: "57.684px",
                letterSpacing: "-1.442px",
              }}
            >
               {title}
            </span>
        </Typography>
        <Typography
          variant="body1"
          className={styles.subtitle}
          color="#a0a0a0"
          align="center"
        >
          {subtitle}
        </Typography>
      </div>

      <div className={styles.cardsGrid}>
        {contacts.map((contact, index) => (
          <EmailCard
            key={`${contact.email}-${index}`}
            name={contact.name}
            email={contact.email}
            description={contact.description}
            icon={contact.icon}
          />
        ))}
      </div>
    </section>
  );
};

export default EmailSection;