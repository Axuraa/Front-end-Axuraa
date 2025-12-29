import React, { CSSProperties } from 'react';
import styles from './Card.module.css';
// Subcomponents
const CardHeader: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
  <div className={`${styles.cardHeader} ${className}`}>
    {children}
  </div>
);

const CardContent: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
  <div className={`${styles.cardContent} ${className}`}>
    {children}
  </div>
);

interface CardMediaProps {
  image?: string;
  alt?: string;
  className?: string;
  overlay?: boolean;
  overlayGradient?: string;
  style?: CSSProperties;
  children?: React.ReactNode;
}

const CardMedia: React.FC<CardMediaProps> = ({
  image,
  alt = '',
  className = '',
  overlay = false,
  overlayGradient = 'linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.7))',
  style,
  children,
}) => {
  const mediaStyle = {
    ...style,
    ...(image && { backgroundImage: `url(${image})` }),
  };

  return (
    <div
      className={`${styles.cardMedia} ${overlay ? styles.mediaWithOverlay : ''} ${className}`}
      style={{ ...mediaStyle, '--overlay-gradient': overlayGradient } as CSSProperties}
    >
      {image && <img src={image} alt={alt} className={styles.cardMediaImage} />}
      {overlay && <div className={styles.mediaOverlay} />}
      {children}
    </div>
  );
};

const CardActions: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
  <div className={`${styles.cardActions} ${className}`}>
    {children}
  </div>
);

interface CardProps {
  children: React.ReactNode;
  className?: string;
  raised?: boolean;
  hoverEffect?: boolean;
  border?: 'none' | 'solid' | 'dashed' | 'dotted';
  borderColor?: string;
  borderWidth?: number;
  hoverScale?: number;
  hoverShadow?: string;
  style?: CSSProperties;
}

const Card: React.FC<CardProps> & {
  Header: typeof CardHeader;
  Content: typeof CardContent;
  Media: typeof CardMedia;
  Actions: typeof CardActions;
} = ({
  children,
  className = '',
  raised = false,
  hoverEffect = false,
  border = 'solid',
  borderColor = '#e0e0e0',
  borderWidth = 1,
  hoverScale = 1.02,
  hoverShadow = '0 8px 24px rgba(0, 0, 0, 0.12)',
  style,
}) => {
  const cardClasses = [
    styles.card,
    raised && styles.raised,
    hoverEffect && styles.hoverEffect,
    className,
  ].filter(Boolean).join(' ');

  const dynamicStyles = {
    ...style,
    '--border-style': border,
    '--border-color': borderColor,
    '--border-width': `${borderWidth}px`,
    '--hover-scale': hoverScale,
    '--hover-shadow': hoverShadow,
  } as CSSProperties;

  return (
    <div className={cardClasses} style={dynamicStyles}>
      {children}
    </div>
  );
};

Card.Header = CardHeader;
Card.Content = CardContent;
Card.Media = CardMedia;
Card.Actions = CardActions;

export default React.memo(Card);
