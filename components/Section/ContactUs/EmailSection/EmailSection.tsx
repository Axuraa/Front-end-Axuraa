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
           className={styles.title}
        >
          <span>
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