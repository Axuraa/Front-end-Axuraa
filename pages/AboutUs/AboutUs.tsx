import React from "react";
import styles from './AboutUs.module.css';

import MainSection from "@/components/Section/AboutUs/MainSection/MainSection";
import MissionVisionSection from "@/components/Section/AboutUs/Mission&VisionSection/Mission&VisionSection";

const AboutUs = () => {
    return (
        <div className={styles.container}>
            <MainSection />
            <MissionVisionSection />
        </div>
    );
}
export default AboutUs;