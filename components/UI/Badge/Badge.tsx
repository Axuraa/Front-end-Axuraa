import React from 'react';
import styles from './Badge.module.css';

type BadgeVariant = 'standard' | 'dot';
type BadgeColor = 'primary' | 'secondary' | 'success' | 'error' | 'warning' | 'info' | 'default';

interface BadgeProps {
  count?: number;
  variant?: BadgeVariant;
  color?: BadgeColor;
  max?: number;
  showZero?: boolean;
  invisible?: boolean;
  anchorOrigin?: {
    vertical: 'top' | 'bottom';
    horizontal: 'left' | 'right';
  };
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

const Badge: React.FC<BadgeProps> = ({
  count = 0,
  variant = 'standard',
  color = 'default',
  max = 99,
  showZero = false,
  invisible = false,
  anchorOrigin = { vertical: 'top', horizontal: 'right' },
  children,
  className = '',
  style,
}) => {
  const isZero = count === 0;
  const isInvisible = invisible || (isZero && !showZero);
  const displayCount = count > max ? `${max}+` : count;

  const badgeClasses = [
    styles.badge,
    styles[`badge-${variant}`],
    styles[`badge-${color}`],
    styles[`badge-anchor-${anchorOrigin.vertical}-${anchorOrigin.horizontal}`],
    isInvisible && styles.invisible,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const dynamicStyles = {
    ...style,
    ...(variant === 'standard' && { '--badge-count': `'${displayCount}'` } as React.CSSProperties),
  };

  const badgeElement = <span className={badgeClasses} style={dynamicStyles} />;

  if (!children) {
    return badgeElement;
  }

  return (
    <div className={styles.badgeContainer}>
      {children}
      {badgeElement}
    </div>
  );
};

export default React.memo(Badge);