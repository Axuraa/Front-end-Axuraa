'use client';
import React, { useEffect, useState } from 'react';
import styles from './BusinessSolutions.module.css';
import HeroSection from '@/components/Layout/HeroSection/HeroSection';
import ServiceCard from '@/components/Molecules/ServiceCard/ServiceCard';
import { getAllServices, ServiceItem } from '@/service/Services/services';
import useClientTranslation from '@/hooks/useClientTranslation';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const BusinessSolutions = () => {
  const { t, locale } = useClientTranslation('businessSolutions');
  const [services, setServices] = useState<ServiceItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

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
    title: service.title?.[locale as 'en' | 'ar'] || service.title?.en || '',
    description: service.description?.[locale as 'en' | 'ar'] || service.description?.en || '',
    features: service.what_we_do?.units?.map((unit: any) => unit[locale as 'en' | 'ar'] || unit.en) || [],
    buttonText: t('learnMore', locale === 'ar' ? "تعرف على المزيد" : "Learn More"),
    iconUrl: service.icon || "/assets/Frame.svg"
  }));

  return (
    <div className={styles.BusinessPage}>
      <HeroSection 
              title1={t('hero.title1', 'Architecting Future of')}
              title2={t('hero.title2', 'Digital Business.')}
              subtitle1={t('hero.subtitle1', "At Axuraa, we don't just write code. We build digital infrastructure that powers world's most ambitious companies.")}
              badgeText={t('hero.badgeText', 'INNOVATION IN PROGRESS')}
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
                  <p>{t('loading', 'Loading solutions...')}</p>
                </div>
              ) : error ? (
                <div className={styles.sectionError}>{error}</div>
              ) : (
                <div className={styles.sliderSection}>
                  <div className={styles.sliderContainer}>
                    <div className={styles.navigationButtons}>
                      <button 
                        className={styles.navButton} 
                        onClick={() => setCurrentIndex(prev => prev > 0 ? prev - 1 : transformedServices.length - 1)}
                        aria-label="Previous service"
                      >
                        <ChevronLeft size={24} />
                      </button>
                      <button 
                        className={styles.navButton} 
                        onClick={() => setCurrentIndex(prev => prev < transformedServices.length - 1 ? prev + 1 : 0)}
                        aria-label="Next service"
                      >
                        <ChevronRight size={24} />
                      </button>
                    </div>

                    <div className={styles.sliderContent}>
                      <AnimatePresence mode="wait">
                        {transformedServices.length > 0 && (
                          <motion.div
                            key={currentIndex}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.3 }}
                            className={styles.slideWrapper}
                          >
                            <ServiceCard
                              id={transformedServices[currentIndex].id}
                              title={transformedServices[currentIndex].title}
                              description={transformedServices[currentIndex].description}
                              features={transformedServices[currentIndex].features}
                              buttonText={transformedServices[currentIndex].buttonText}
                              iconUrl={transformedServices[currentIndex].iconUrl}
                            />
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    <div className={styles.pagingContainer}>
                      {transformedServices.map((_, idx) => (
                        <button
                          key={idx}
                          className={`${styles.pagingDot} ${idx === currentIndex ? styles.activeDot : ''}`}
                          onClick={() => setCurrentIndex(idx)}
                          aria-label={`Go to slide ${idx + 1}`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
    </div>
  );
};

export default React.memo(BusinessSolutions);