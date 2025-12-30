'use client';
import React from 'react';
import styles from './ContactSection.module.css';


import StatusBadge from '@/components/UI/Atoms/StatusBadge/StatusBadge';
import Typography from '@/components/UI/Atoms/Typography/Typography';

import ContactInfoCard from '@/components/UI/Atoms/ContactForm/ContactInfoCard';
import SocialIcon from '@/components/UI/Atoms/SocialIcon/SocialIcon';
import ContactForm from '@/components/UI/Atoms/ContactForm/ContactForm';

import { ContactSectionProps  } from '@/types/HomePage/contactTypes';

const ContactSection: React.FC<ContactSectionProps> = ({
  badgeText,
  title1,
  title2,
  subtitle,
}) => {
  return (
    <section className={styles.ContactSection}>
      {/* <Badge text={badgeText} show={true} />
      <SectionHeader
        title1={title1}
        title2={title2}
        subtitle={subtitle}
      /> */}
      <div className={styles.ContactGrid}>
        <div className={styles.Contantinfo}>
         <StatusBadge 
              text="Contact Us"
              style={{
                width: '130.2456px',
                height: '32.0175px',
                display: 'flex',
                padding: '4.807px 14.421px',
                alignItems: 'center',
                borderRadius: '12016.341px',
                border: '1.202px solid #902501',
                background: 'rgba(208, 74, 29, 0.10)',
                backdropFilter: 'blur(2.403508424758911px)',
                color: '#D04A1D',
                fontFamily: 'Inter, sans-serif',
                fontSize: '14.421px',
                fontStyle: 'normal',
                fontWeight: 700,
                lineHeight: '19.228px',
                letterSpacing: '0.361px',
                textTransform: 'uppercase',
                marginTop: '5px'
              }} 
            />
          {/* Title */}
           <Typography 
            variant="h1"
            component="h1"
            style={{
              // background: 'linear-gradient(90deg, #20cf10ff 0%, #10bee9ff 100%)',
              height: '174px',
              width: '548px',
              padding: '20px', // Added padding for better text visibility
              textAlign: 'start',
              fontFamily: 'Inter, sans-serif',
              fontSize: '57.684px',
              fontStyle: 'normal',
              fontWeight: 900,
              lineHeight: '57.684px',
              letterSpacing: '-1.442px',
              margin: 0,
              animation: 'fadeInUp 0.8s ease-out',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center' // Center content vertically
            }}
          >
            <span style={{ 
              color: '#FFFFFF',
              fontFamily: 'Inter, sans-serif',
              fontSize: '57.684px',
              fontWeight: 900,
              lineHeight: '57.684px',
              letterSpacing: '-1.442px'
            }}>
              Let's build something 
            </span>
            <span style={{
              color: '#D04A1D',
              fontFamily: 'Inter, sans-serif',
              fontSize: '57.684px',
              fontWeight: 900,
              lineHeight: '57.684px',
              letterSpacing: '-1.442px',
              textAlign: 'start',
              marginTop: '0.5rem',
              background: 'linear-gradient(90deg, #D04A1D 0%, #902501 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              extraordinary.
            </span>
          </Typography>
          {/* Subtitle */}
          <div className={styles.subtitle}>
            <Typography 
              variant="body1"
              component="p"
              style={{
                // background: 'linear-gradient(90deg, #f53f08ff 0%, #e99d10ff 100%)',
                color: 'var(--Gray-Chateau, #9CA3AF)',
                fontFamily: 'Inter, sans-serif',
                fontSize: '21.632px',
                fontStyle: 'normal',
                fontWeight: 400,
                lineHeight: '35.151px',
                alignSelf: 'stretch',
                height: '106px',
                width: '548px',
                margin: 0,
                textAlign: 'start'
              }}
            >
              Have a project in mind? We'd love to hear about it. Fill
              out the form or reach out directly to discuss how
              Axuraa can help you achieve your goals.
            </Typography>
          </div>
          <div className={styles.contactFormWrapper}>
            <ContactInfoCard 
              icon="/assets/PhoneIcon.svg"
              label="Phone"
              value="+1 (555) 123-4567"
            />
            <ContactInfoCard 
              icon="/assets/EmailIcon.svg"  // Make sure you have this icon in your public/assets folder
              label="Email"
              value="contact@company.com"
            />
          </div>
          <div className={styles.socialIconsContainer}>
            {[
              { id: 1, icon: '/assets/Vector.svg', label: 'Instagram' },
              { id: 2, icon: '/assets/Vector.svg', label: 'Facebook' },
              { id: 3, icon: '/assets/Vector.svg', label: 'Twitter' },
              { id: 4, icon: '/assets/Vector.svg', label: 'LinkedIn' }
            ].map((social) => (
              <SocialIcon
                key={social.id}
                icon={social.icon}
                showLabel={true}
                alt={social.label}
              />
            ))}
          </div>
        </div>
         <div className={styles.Contantform}>
          <ContactForm />
        </div> 
      </div>
    </section>
  );
};

export default React.memo(ContactSection);