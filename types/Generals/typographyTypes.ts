import React , {JSX} from 'react';
export type TypographyVariant = 
  | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' 
  | 'subtitle1' | 'subtitle2' 
  | 'body1' | 'body2' 
  | 'caption' | 'overline';

export interface TypographyProps {
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