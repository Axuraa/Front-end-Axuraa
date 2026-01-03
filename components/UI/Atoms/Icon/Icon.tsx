import React from 'react';
import Image from 'next/image';
import { IconTypes } from '@/types/AboutUsPage/Mission&Vision/iconTypes';
import styles from './Icon.module.css';

interface ExtendedIconTypes extends IconTypes {
  noPadding?: boolean;
  noHover?: boolean;
  animation?:boolean;
}

const Icon: React.FC<ExtendedIconTypes> = ({
  iconSrc,
  icon,
  backgroundColor = 'transparent',
  background_Opacity = 1,
  background_Radius = 'square_corners',
  color = 'currentColor',
  className = '',
  width = 24,
  height = 24,
  alt = 'icon',
  noPadding = false,
  noHover = false,
  animation = false,
}) => {
  // Map background_Radius to CSS class
  const radiusClass = {
    circle: styles.circle,
    rounded: styles.rounded,
    square_rounded: styles.squareRounded,
    square_corners: styles.squareCorners,
  }[background_Radius];

  // Build class names
  const containerClasses = [
    styles.iconContainer,
    radiusClass,
    noPadding ? styles.noPadding : '',
    noHover ? styles.noHover : '',
    className
  ].filter(Boolean).join(' ');

  // Create inline styles for background
  const containerStyle: React.CSSProperties = {
    backgroundColor,
    opacity: background_Opacity,
  };

  // Style for icon color
  const iconStyle: React.CSSProperties = {
    color,
    width: `${width}px`,
    height: `${height}px`,
  };

  return (
    <div
      className={containerClasses}
      style={containerStyle}
    >
      {iconSrc ? (
        <Image
          src={iconSrc}
          alt={alt}
          width={width}
          height={height}
          className={styles.iconImage}
        />
      ) : (
        <div className={styles.iconWrapper} style={iconStyle}>
          {icon}
        </div>
      )}
    </div>
  );
};

export default Icon;