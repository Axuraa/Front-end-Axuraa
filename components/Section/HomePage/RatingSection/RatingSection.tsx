'use client';
import React, { useEffect, useState } from 'react';
import styles from './RatingSection.module.css';
import Badge from '@/components/UI/Atoms/Badge/Badge';
import SectionHeader from '@/components/Layout/SectionHeader/SectionHeader';
import Rating from '@/components/UI/Atoms/RatingComponents/Rating';

import { RatingSectionProps, RatingItem } from '@/types/HomePage/ratingTypes';
import { getHomeTrackRecord, TrackRecordItem } from '@/service/TrackRecord/trackrecord';

const RatingSection: React.FC<RatingSectionProps> = ({ 
  badgeText,
  title1,
  title2,
  subtitle,
  ratingItems = []
}) => {
  const [apiRatingItems, setApiRatingItems] = useState<RatingItem[]>(ratingItems);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchTrackRecord = async () => {
      try {
        setLoading(true);
        const result = await getHomeTrackRecord('en');
        
        if (result.success && result.data) {
          // Transform API data to match RatingItem interface
          const transformedItems: RatingItem[] = result.data.records.map((record: TrackRecordItem) => {
            // Handle icon path - use RatingIcon.svg for all items until specific icons are created
            let iconPath = '/assets/RatingIcon.svg'; 
            // TODO: Create individual icon files (projects.svg, clients.svg, awards.svg, team.svg) to use API icons
            // For now, all items use the same RatingIcon.svg

            // Use suffix from backend if available, otherwise calculate
            let suffix: '' | '%' | '+' = '';
            if (record.suffix) {
              suffix = record.suffix as '' | '%' | '+';
            } else {
              // Fallback logic if backend doesn't provide suffix
              if (record.value >= 1000) {
                suffix = '+';
              } else if (record.value === 100) {
                suffix = '%';
              }
            }

            return {
              id: record.id,
              value: record.value,
              label: record.label,
              icon: iconPath,
              showIcon: true, 
              suffix: suffix
            };
          });
          
          setApiRatingItems(transformedItems);
          console.log('Loaded track record from API:', transformedItems);
        }
      } catch (error) {
        console.error('Failed to fetch track record:', error);
        // Keep using props data if API fails
      } finally {
        setLoading(false);
      }
    };

    fetchTrackRecord();
  }, []);

  return (
    <section id="rating-section" className={styles.RatingSection}>
      <Badge text={badgeText} show={true} />
      <SectionHeader
        title1={title1}
        title2={title2}
        subtitle={subtitle}
      />
      {apiRatingItems.length > 0 && (
        <Rating 
          items={apiRatingItems}
          duration={1500}  
          maxValue={100}   
        />
      )}
    </section>
  );
};
export default React.memo(RatingSection);