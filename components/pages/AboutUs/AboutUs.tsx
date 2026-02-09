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
import { getActiveTeamMembers, TeamMember } from '@/service/TeamMembers/TeamMembers';
import { HistoryJourneyData } from '@/types/AboutUsPage/History/JourneyTypes';

const AboutUs = () => {
    const [historyData, setHistoryData] = useState<HistoryJourneyData | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [teamMembers, setTeamMembers] = useState<TeamMember[] | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                
                // Fetch history data
                const historyResult = await getHistory();
                if (historyResult.success && historyResult.data) {
                    console.log('History data loaded:', historyResult.data);
                    setHistoryData(historyResult.data);
                } else {
                    console.error('History API error:', historyResult.error);
                    setError(historyResult.error || 'Failed to load history data');
                }

                // Fetch team members data
                const teamResult = await getActiveTeamMembers();
                if (teamResult.success && teamResult.data) {
                    console.log('Team members data loaded:', teamResult.data);
                    setTeamMembers(teamResult.data);
                } else {
                    console.error('Team members API error:', teamResult.error);
                    // Don't set error for team members, just log it
                }
                
            } catch (err) {
                console.error('Fetch error:', err);
                setError('An unexpected error occurred while loading data');
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return (
        <div className={styles.container}>
             <MainSection />
            {loading ? (
                <div className={styles.sectionLoading}>
                    <div className={styles.loadingSpinner}></div>
                    <p>Loading About Us page...</p>
                </div>
            ) : (
                <>
                   
                    <MissionVisionSection />
                    <HistorySection journeyData={historyData || undefined} />
                    <WhyUs />
                    <OurTeamSection teamMembers={teamMembers || undefined} />
                    <SpecialCard />
                </>
            )}
        </div>
    );
};

export default AboutUs;