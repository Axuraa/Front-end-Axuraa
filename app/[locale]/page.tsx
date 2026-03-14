"use client";

import styles from './page.module.css';
import HeroSection from '@/components/Layout/HeroSection/HeroSection';
import Homepage from '@/components/pages/Home/Homepage';
import useClientTranslation from '@/hooks/useClientTranslation';

export default function Home() {
  const { t, locale } = useClientTranslation('home');

  return (
    <div className={styles.pageContainer}>
      <HeroSection
        title1={t('hero.title1', 'Welcome to Axuraa')}
        title2={t('hero.title2', 'Building Digital Excellence')}
        subtitle1={t('hero.subtitle1', 'Transforming ideas into powerful digital experiences.')}
        badgeText={t('hero.badgeText', 'INNOVATION IN PROGRESS')}
        primaryButtonText={t('hero.cta', 'Start a Project')}
        secondaryButtonText={t('hero.learnMore', 'View Our Work')}
        primaryHref="#contact-section"
        secondaryHref={`/${locale}/portfolio`}
        showBackgroundDots={true}
        showAnimatedCircles={true}
        showBadge={true}
        showTrustedSection={true}
        showPrimaryButton={true}
        showSecondaryButton={true}
        showEllipseDecorations={true}
        showStatusBadge={false}
        backgroundType="Hexagon"
        height="100vh"
      />
      
      <Homepage />
    </div>
  );
}
