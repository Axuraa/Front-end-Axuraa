'use client';
import React, { useEffect, useState } from 'react';
import styles from './BusinessSolutions.module.css';
import HeroSection from '@/components/Layout/HeroSection/HeroSection';
import ServiceCard from '@/components/Molecules/ServiceCard/ServiceCard';
import { getAllServices, ServiceItem } from '@/service/Services/services';
import useClientTranslation from '@/hooks/useClientTranslation';

const BusinessSolutions = () => {
  const { locale } = useClientTranslation('businessSolutions');
  const [services, setServices] = useState<ServiceItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        setLoading(true);
        const result = await getAllServices(locale as 'en' | 'ar');
        
        if (result.success && result.data) {
          // Filter for services with type "solution" and is_active true
          const filteredServices = result.data.filter(
            (service) => service.type === 'solution' && service.is_active === true
          );
          setServices(filteredServices);
        } else {
          setError(result.error || 'Failed to load services');
        }
      } catch (err) {
        setError('An unexpected error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, [locale]);

  // Transform API data to ServiceCard format
  const transformedServices = services.map((service) => ({
    id: service._id,
    title: service.title[locale as 'en' | 'ar'] || service.title.en,
    description: service.description[locale as 'en' | 'ar'] || service.description.en,
    features: service.what_we_do?.units?.map((unit) => unit[locale as 'en' | 'ar'] || unit.en) || [],
    buttonText: "Learn More",
    iconUrl: service.icon || "/assets/Frame.svg"
  }));

  return (
    <div className={styles.BusinessPage}>
      <HeroSection 
              title1="Architecting Future of"
              title2="Digital Business."
              subtitle1="At Axuraa, we don't just write code. We build digital infrastructure that powers world's most ambitious companies."
              badgeText="INNOVATION IN PROGRESS"
              showBackgroundDots={false}
              showAnimatedCircles={true}
              showEllipseDecorations={true}
              showBadge={false}
              showTrustedSection={false}
              showPrimaryButton={true}
              showSecondaryButton={false}
              height='75vh'
              showStatusBadge={true}
              backgroundType='Circle'
            />

            {/* BusinessContainer with loading state */}
            <div className={styles.BusinessContainer}>
              {loading ? (
                <div className={styles.sectionLoading}>
                  <div className={styles.loadingSpinner}></div>
                  <p>Loading solutions...</p>
                </div>
              ) : error ? (
                <div className={styles.sectionError}>{error}</div>
              ) : (
                transformedServices.map((service) => (
                  <ServiceCard
                    key={service.id}
                    title={service.title}
                    description={service.description}
                    features={service.features}
                    buttonText={service.buttonText}
                    id={service.id}
                  />
                ))
              )}
            </div>
    </div>
  );
};

export default React.memo(BusinessSolutions);