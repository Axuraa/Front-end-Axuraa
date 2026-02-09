'use client';
import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import styles from './ServicesPage.module.css';
import HeroSection from '@/components/Layout/HeroSection/HeroSection';
import ServiceCard from '@/components/Molecules/ServiceCard/ServiceCard';
import { getAllServices, ServiceItem } from '@/service/Services/services';

const ServicesPage: React.FC = () => {
  const [services, setServices] = useState<ServiceItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const params = useParams() as { locale?: string };
  const currentLang: 'en' | 'ar' = params.locale === 'ar' ? 'ar' : 'en';

  useEffect(() => {
    const fetchServices = async () => {
      try {
        setLoading(true);
        setError(null);

        const result = await getAllServices(currentLang);
        const filteredServices = result.data?.filter((service: ServiceItem) => service.type === "service" && service.is_active) || [];

        if (!result.success) {
          throw new Error(result.error || 'Failed to load services');
        }
        console.log('SERVICES RESULT', result);
        
        setServices(filteredServices);

      } catch (err: any) {
        setError(err.message ?? 'Failed to load services');
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, [currentLang]);

  return (
    <div className={styles.servicesPage}>
      <HeroSection
        title1="Architecting the Future of"
        title2="Digital Business."
        subtitle1="At Axuraa, we don't just write code. We build the digital infrastructure that powers the world's most ambitious companies."
        badgeText="INNOVATION IN PROGRESS"
        showBackgroundDots={false}
        showAnimatedCircles={true}
        showEllipseDecorations={true}
        showBadge={false}
        showTrustedSection={false}
        showPrimaryButton={true}
        showSecondaryButton={false}
        backgroundType="Circle"
        showStatusBadge={true}
        height="70vh"
      />

      <div className={styles.servicesContainer}>
        {loading && <p>Loading services...</p>}

        {error && !loading && <p>{error}</p>}

        {!loading &&
          !error && (
            <>
              {console.log('SERVICES STATE', services, currentLang)}
              {services.map((service) => {
                const title = service.title?.[currentLang] ?? '';
                const description = service.description?.[currentLang] ?? '';

                const features = service.what_we_do?.units
                  ? service.what_we_do.units
                      .map((u) => u[currentLang])
                      .filter(Boolean)
                  : [];

                return (
                  <ServiceCard
                    key={service._id}
                    id={service._id}
                    title={title}
                    description={description}
                    features={features}
                    buttonText={
                    currentLang === 'ar' ? 'عرض التفاصيل' : 'Learn More'
                    }
                  />
                );
              })}
            </>
          )}
      </div>
    </div>
  );
};

export default React.memo(ServicesPage);