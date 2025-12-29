'use client';
import React from 'react';
import Typography from '@/components/UI/Typography/Typography';

interface FooterColumnHeaderProps {
  title: string;
}

const FooterColumnHeader: React.FC<FooterColumnHeaderProps> = ({ title }) => {
  return (
    <Typography 
      variant="h3"
      style={{
        color: 'rgba(255, 255, 255, 0.95)',
        fontFamily: 'Roboto',
        fontSize: '24px',
        fontStyle: 'normal',
        fontWeight: 600,
        lineHeight: 'normal',
        margin: '0 0 8px 0',
        position: 'relative',
        display: 'inline-block'
      }}
    >
      {title}
      <span 
        style={{
          position: 'absolute',
          width: '50.909px',
          height: '3.182px',
          left: '20%',
          bottom: '-12.832px',
          backgroundColor: '#D75C37',
          display: 'block'
        }}
      />
    </Typography>
  );
};

export default React.memo(FooterColumnHeader);