import React from "react";
import styles from './AboutUs.module.css';

import MainSection from "@/components/Section/AboutUs/MainSection/MainSection";
import MissionVisionSection from "@/components/Section/AboutUs/Mission&VisionSection/Mission&VisionSection";
import HistorySection from "@/components/Section/AboutUs/HistorySection/HistorySection";
import WhyUs from "@/components/Section/AboutUs/WhyUsSection/WhyUs";
import SpecialCard from "@/components/UI/Muscles/SpecialCard/SpecialCard";

const AboutUs = () => {
    return (
        <div className={styles.container}>
            <MainSection />
            <MissionVisionSection />
            <HistorySection />
            <WhyUs />
            <SpecialCard />
        </div>
    );
}
export default AboutUs;