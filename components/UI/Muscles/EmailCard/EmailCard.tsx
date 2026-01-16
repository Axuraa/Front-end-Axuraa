// components/EmailCard/EmailCard.tsx
import React from 'react';
import Icon from '@/components/UI/Atoms/Icon/Icon';
import Typography from '@/components/UI/Atoms/Typography/Typography';
import styles from './EmailCard.module.css';

interface EmailCardProps {
  name: string;
  email: string;
  description: string;
  icon: string;
  className?: string;
}

const EmailCard: React.FC<EmailCardProps> = ({
  name,
  email,
  description,
  icon,
  className = '',
}) => {
  const getIconPath = (iconName: string) => {
    return `/assets/conection/${iconName}.svg`;
  };

  return (
    <div className={`${styles.emailCard} ${className}`}>
      <div className={styles.leftSection}>
        <Icon
          iconSrc={getIconPath(icon)}
          backgroundColor="var(--color-orange-6010, rgba(255, 107, 53, 0.10))"
          background_Radius="rounded"
          color="#D04A1D"
          width={24}
          height={24}
          alt={name}
          noHover={true}
          className="iconContainer"
        />
        <div className={styles.textContainer}>
          <Typography
            variant="h6"
            className={styles.title}
            color="#ffffff"
          >
            {name}
          </Typography>
          <Typography
            variant="body2"
            className={styles.email}
            color="#d04a1d"
          >
            {email}
          </Typography>
        </div>
      </div>

      <div className={styles.rightSection}>
        <Typography
          variant="body2"
          className={styles.description}
          color="var(--white-75, var(--color-white-75, rgba(255, 255, 255, 0.75)))"
          align="right"
          style={{
            textAlign:'right'
          }}
        >
          {description}
        </Typography>
      </div>
    </div>
  );
};

export default EmailCard;