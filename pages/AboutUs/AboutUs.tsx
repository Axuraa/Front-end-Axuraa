import React from "react";
import styles from './AboutUs.module.css';

import MainSection from "@/components/Section/AboutUs/MainSection/MainSection";

const AboutUs = () => {
    return (
        <div className={styles.container}>
            <MainSection />
        </div>
    );
}
export default AboutUs;