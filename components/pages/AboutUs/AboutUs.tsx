'use client';
import React, { useEffect, useState } from 'react';
import styles from './AboutUs.module.css';

import MainSection from "@/components/Section/AboutUs/MainSection/MainSection";
import MissionVisionSection from "@/components/Section/AboutUs/Mission&VisionSection/Mission&VisionSection";
import HistorySection from "@/components/Section/AboutUs/HistorySection/HistorySection";
import WhyUs from "@/components/Section/AboutUs/WhyUsSection/WhyUs";
import SpecialCard from "@/components/UI/Muscles/SpecialCard/SpecialCard";
import OurTeamSection from '@/components/Section/AboutUs/OurTeamSection/OurTeamSection';
import { getHistory } from '@/service/ApoutUs/history';
import { HistoryJourneyData } from '@/types/AboutUsPage/History/JourneyTypes';

const AboutUs = () => {
    const [historyData, setHistoryData] = useState<HistoryJourneyData | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchHistoryData = async () => {
            try {
                setLoading(true);
                const result = await getHistory();
                
                if (result.success && result.data) {
                    console.log('History data loaded:', result.data);
                    setHistoryData(result.data);
                } else {
                    console.error('History API error:', result.error);
                    setError(result.error || 'Failed to load history data');
                }
            } catch (err) {
                console.error('History fetch error:', err);
                setError('An unexpected error occurred while loading history data');
            } finally {
                setLoading(false);
            }
        };

        fetchHistoryData();
    }, []);

    if (loading) {
        return (
            <div className={styles.container}>
                <div className={styles.loading}>Loading About Us page...</div>
            </div>
        );
    }

    if (error) {
        return (
            <div className={styles.container}>
                <div className={styles.error}>{error}</div>
            </div>
        );
    }

    return (
        <div className={styles.container}>
            <MainSection />
            <MissionVisionSection />
            <HistorySection journeyData={historyData || undefined} />
            <WhyUs />
            <OurTeamSection />
            <SpecialCard />
        </div>
    );
};

export default AboutUs;