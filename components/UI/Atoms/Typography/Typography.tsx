import React, { JSX } from 'react';
import styles from './Typography.module.css';

type TypographyVariant = 
  | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' 
  | 'subtitle1' | 'subtitle2' 
  | 'body1' | 'body2' 
  | 'caption' | 'overline';

interface TypographyProps {
  variant?: TypographyVariant;
  component?: keyof JSX.IntrinsicElements;
  className?: string;
  color?: string;
  align?: 'left' | 'center' | 'right' | 'justify';
  gutterBottom?: boolean;
  noWrap?: boolean;
  animation?: string;
  children: React.ReactNode;
  style?: React.CSSProperties;
}

const Typography: React.FC<TypographyProps> = ({
  variant = 'body1',
  component: Component = 'p',
  className = '',
  color,
  align,
  gutterBottom = false,
  noWrap = false,
  animation,
  children,
  style,
  ...props
}) => {
  const classes = [
    styles.typography,
    styles[variant],
    gutterBottom && styles.gutterBottom,
    noWrap && styles.noWrap,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const dynamicStyles = {
    ...style,
    ...(color && { color }),
    ...(align && { textAlign: align }),
    ...(animation && { animation }),
  };

  return (
    <Component className={classes} style={dynamicStyles} {...props}>
      {children}
    </Component>
  );
};

export default React.memo(Typography);