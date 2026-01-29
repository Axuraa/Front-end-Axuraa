import React from "react";
import styles from './MainSection.module.css';

import HeroSection from "@/components/Layout/HeroSection/HeroSection";
import Rating from "@/components/UI/Atoms/RatingComponents/Rating";
import { RatingItem } from "@/types/HomePage/ratingTypes";

const ratingItems: RatingItem[] = [
  { id: 1, value: 8, label: 'Years Experience', icon: '/assets/RatingIcon.svg' , suffix: '+' },
  { id: 2, value: 150, label: 'Projects Launched', icon: '/assets/RatingIcon.svg' , suffix: '+'},
  { id: 3, value: 45, label: 'Team Experts', icon: '/assets/RatingIcon.svg' , suffix: ''},
  { id: 4, value: 98, label: 'Client Retention', icon: '/assets/RatingIcon.svg' , suffix: '%'}
];

const MainSection = () => {
    return (
        <div className={styles.mainSection}>
            <div className={styles.heroWrapper}>
                <HeroSection
                    badgeText="WHO WE ARE"
                    title1="Architecting the Future of"
                    title2="Digital Business"
                    subtitle1="At Axuraa, we don't just write code. We build the digital infrastructure that powers the world's most ambitious companies."
                    subtitle2=""
                    backgroundType="Alphabet"
                    showTrustedSection={false}
                    showPrimaryButton={false}
                    showSecondaryButton={false}
                    showBadge={false}
                    height="100vh"
                />
            </div>
            <div className={styles.ratingWrapper}>
                <Rating items={ratingItems} duration={2000} maxValue={150} />
            </div>
        </div>
    );
}
export default React.memo(MainSection);