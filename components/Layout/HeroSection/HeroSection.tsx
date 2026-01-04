'use client';
import React, { useEffect, useState } from 'react';
import styles from './HeroSection.module.css';
import Typography from '@/components/UI/Atoms/Typography/Typography';
import StartButton from '@/components/UI/Atoms/Button/StartButton';
import ViewButton from '@/components/UI/Atoms/Button/ViewButton';
import DotsBackground from '@/components/UI/Atoms/DotsBackground/DotsBackground';
import EllipseDecorations from '@/components/UI/EllipseDecorations/EllipseDecorations';
import Badge from '@/components/UI/Atoms/Badge/Badge';
import Image from 'next/image';
import StatusBadge from '@/components/UI/Atoms/StatusBadge/StatusBadge';
import AnimatedBackground from '@/components/UI/Muscles/AinmatedBackground/AnimatedBackground';

interface HeroSectionProps {
  // Content
  title1?: string;
  title2?: string;
  subtitle1?: string;
  subtitle2?: string;
  badgeText?: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  backgroundType: "Hexagon" | "Circle" | "Alphabet" ;
  // Toggle visibility
  showBackgroundDots?: boolean;
  showAnimatedCircles?: boolean;
  showBadge?: boolean;
  showStatusBadge?: boolean;
  showTrustedSection?: boolean;
  showPrimaryButton?: boolean;
  showSecondaryButton?: boolean;
  showEllipseDecorations?:boolean;
  // Event handlers
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  // Content with defaults
  title1 = 'Scalable Software. ',
  title2 = 'Intelligent Solutions.',
  subtitle1 = 'We transform complex business challenges into streamlined digital experiences.',
  subtitle2 = 'TRUSTED BY FORWARD-THINKING COMPANIES',
  badgeText = 'AVAILABLE FOR NEW PROJECTS',
  primaryButtonText = 'Start a Project',
  secondaryButtonText = 'View Our Work',
  
  // Toggle visibility with defaults (all true)
  showBackgroundDots = true,
  showAnimatedCircles = true,
  showBadge = true,
  showStatusBadge = true,
  showTrustedSection = true,
  showPrimaryButton = true,
  showSecondaryButton = true,
  showEllipseDecorations = true,
  // Event handlers
  onPrimaryClick = () => console.log('Primary button clicked'),
  onSecondaryClick = () => console.log('Secondary button clicked'),
  backgroundType = "Hexagon"
}) => {

   const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  return (
    <section className={styles.hero}>
      {/* Background Dots */}
      {/* {showBackgroundDots && (
        <div className={styles.heroDots}>
          <DotsBackground side="both" />
        </div>
      )} */}

      <div className={styles.container}>
        
        {/* EllipseDecorations */}
         {/* {showEllipseDecorations && (

        // <EllipseDecorations 
        //     showTopRight={true} 
        //     showBottomLeft={true} 
        // />
          // <AnimatedBackground type='Hexagon' className={styles.animatedBackground} />
        )} */}

        {showAnimatedCircles && (
          <AnimatedBackground type={backgroundType} className={styles.animatedBackground} />

        )}

        {/* <FloatingIcons  /> */}

        <div className={styles.content}>
          {/* Badge */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '1rem',
            marginBottom: '1.5rem',
            opacity: mounted ? 1 : 0,
            transform: mounted ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.6s ease, transform 0.6s ease',
            transitionDelay: '0.1s'
          }}>
            {showBadge && <Badge text={badgeText} show={true} />}
            {showStatusBadge && <StatusBadge text="WHO WE ARE" />}
          </div>

          {/* Title */}
          <Typography 
            variant="h1"
            component="h1"
            style={{
              textAlign: 'center',
              fontFamily: 'Roboto',
              fontSize: 'var(--font-size-72, 72px)',
              fontStyle: 'normal',
              fontWeight: 900,
              lineHeight: ' 80px',
              letterSpacing: 'var(--letter-spacing--1_8, -1.8px)',
              margin: 0,
              animation: 'fadeInUp 0.8s ease-out',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}
          >
            <span 
                style={{
                    color: 'white',
                    WebkitTextFillColor: 'white',
                    opacity: mounted ? 1 : 0,
                    transform: mounted ? 'translateY(0)' : 'translateY(20px)',
                    transition: 'opacity 0.6s ease, transform 0.6s ease',
                    transitionDelay: '0.1s'
                 }}>
              {title1}
            </span>
            <span style={{
                background: 'linear-gradient(90deg, #D04A1D 0%, #D96A2B 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                marginTop: '0.5rem',
                opacity: mounted ? 1 : 0,
                transform: mounted ? 'translateY(0)' : 'translateY(20px)',
                transition: 'opacity 0.6s ease, transform 0.6s ease',
                transitionDelay: '0.3s'
            }}>
              {title2}
            </span>
          </Typography>

          {/* Subtitle */}
          <div 
            className={styles.subtitle}
            style={{
              opacity: mounted ? 1 : 0,
              transform: mounted ? 'translateY(0)' : 'translateY(20px)',
              transition: 'opacity 0.6s ease, transform 0.6s ease',
              transitionDelay: '0.5s'
            }}
          >
            <Typography 
              variant="body1"
              component="p"
              style={{
                color: 'var(--color-azure-65, #9CA3AF)',
                textAlign: 'center',
                fontFamily: 'var(--font-family-Font-1, Inter)',
                fontSize: 'var(--line-height-20, 20px)',
                fontStyle: 'normal',
                fontWeight: 'var(--font-weight-400, 400)',
                lineHeight: 'var(--line-height-28, 28px)',
                margin: 0,
              }}
            >
              {subtitle1}
            </Typography>
          </div>

          {/* CTA Buttons */}
          <div 
                className={styles.ctaButtons}
                 style={{
              opacity: mounted ? 1 : 0,
              transform: mounted ? 'translateY(0)' : 'translateY(20px)',
              transition: 'opacity 0.6s ease, transform 0.6s ease',
              transitionDelay: '0.7s'
            }} >
            {showPrimaryButton && (
              <StartButton onClick={onPrimaryClick}>
                {primaryButtonText}
              </StartButton>
            )}
            {showSecondaryButton && (
              <ViewButton onClick={onSecondaryClick}>
                {secondaryButtonText}
              </ViewButton>
            )}
          </div>
        </div>

        {/* Trusted Section */}
        {showTrustedSection && (
          <div className={styles.trustedSection}
                style={{
                    opacity: mounted ? 1 : 0,
                    transform: mounted ? 'translateY(0)' : 'translateY(20px)',
                    transition: 'opacity 0.6s ease, transform 0.6s ease',
                    transitionDelay: '0.9s'
                  }}
            >  
            <Typography
              variant="body2"
              component="p"
              style={{
                alignSelf: 'stretch',
                color: 'var(--color-grey-46, #6B7280)',
                textAlign: 'center',
                fontFamily: 'var(--font-family-Font-1, Inter)',
                fontSize: 'var(--font-size-14, 14px)',
                fontStyle: 'normal',
                fontWeight: 'var(--font-weight-600, 600)',
                lineHeight: 'var(--line-height-20, 20px)',
                letterSpacing: 'var(--letter-spacing-0_35, 0.35px)',
                margin: 0
              }}
            >
              {subtitle2}
            </Typography>
            
            <div className={styles.companiesGrid}>
              <div className={styles.companyLogo}>
                    <Image 
                    src="/assets/SkyTecIcon.svg" 
                    alt="SkyTech" 
                    width={120} 
                    height={24} 
                    />
                <Typography
                    variant="body1"
                    component="span"
                    style={{
                        color: 'var(--color-azure-84, #D1D5DB)',
                        textAlign: 'center',
                        fontFamily: 'var(--font-family-Font-1, Inter)',
                        fontSize: 'var(--line-height-20, 20px)',
                        fontStyle: 'normal',
                        fontWeight: 'var(--font-weight-700, 700)',
                        lineHeight: 'var(--line-height-28, 28px)',
                        marginLeft: '8px'
                    }}
                    >
                    SkyTech
                    </Typography>
                </div>
                <div className={styles.companyLogo}>
                    <Image 
                    src="/assets/ChicnBlockIcon.svg" 
                    alt="ChainBlock" 
                    width={120} 
                    height={24} 
                    />
                    <Typography
                    variant="body1"
                    component="span"
                    style={{
                        color: 'var(--color-azure-84, #D1D5DB)',
                        textAlign: 'center',
                        fontFamily: 'var(--font-family-Font-1, Inter)',
                        fontSize: 'var(--line-height-20, 20px)',
                        fontStyle: 'normal',
                        fontWeight: 'var(--font-weight-700, 700)',
                        lineHeight: 'var(--line-height-28, 28px)',
                        marginLeft: '8px'
                    }}
                    >
                        ChainBlock
                    </Typography>
                </div>
                <div className={styles.companyLogo}>
                    <Image 
                    src="/assets/NexusPointIcon.svg" 
                    alt="NexusPoint" 
                    width={120} 
                    height={24} 
                    />
                    <Typography
                    variant="body1"
                    component="span"
                    style={{
                        color: 'var(--color-azure-84, #D1D5DB)',
                        textAlign: 'center',
                        fontFamily: 'var(--font-family-Font-1, Inter)',
                        fontSize: 'var(--line-height-20, 20px)',
                        fontStyle: 'normal',
                        fontWeight: 'var(--font-weight-700, 700)',
                        lineHeight: 'var(--line-height-28, 28px)',
                        marginLeft: '8px'
                    }}
                    >
                    NexusPoint
                    </Typography>
                </div>
                <div className={styles.companyLogo}>
                    <Image 
                    src="/assets/AplexIcon.svg" 
                    alt="Apex" 
                    width={80} 
                    height={24} 
                    />
                    <Typography
                    variant="body1"
                    component="span"
                    style={{
                        color: 'var(--color-azure-84, #D1D5DB)',
                        textAlign: 'center',
                        fontFamily: 'var(--font-family-Font-1, Inter)',
                        fontSize: 'var(--line-height-20, 20px)',
                        fontStyle: 'normal',
                        fontWeight: 'var(--font-weight-700, 700)',
                        lineHeight: 'var(--line-height-28, 28px)',
                        marginLeft: '8px'
                    }}
                    >
                    Apex
                    </Typography>
                </div>
                <div className={styles.companyLogo}>
                    <Image 
                    src="/assets/VelocityIcon.svg" 
                    alt="Velocity" 
                    width={100} 
                    height={24} 
                    />
                    <Typography
                    variant="body1"
                    component="span"
                    style={{
                        color: 'var(--color-azure-84, #D1D5DB)',
                        textAlign: 'center',
                        fontFamily: 'var(--font-family-Font-1, Inter)',
                        fontSize: 'var(--line-height-20, 20px)',
                        fontStyle: 'normal',
                        fontWeight: 'var(--font-weight-700, 700)',
                        lineHeight: 'var(--line-height-28, 28px)',
                        marginLeft: '8px'
                    }}
                    >
                    Velocity
                    </Typography>
                </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default React.memo(HeroSection);