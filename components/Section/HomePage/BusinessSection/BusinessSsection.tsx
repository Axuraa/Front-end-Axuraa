'use client';
import React, { useState, useEffect } from 'react';
import styles from './BusinessSsection.module.css';
import Card from '@/components/UI/Atoms/Card/Card';
import Badge  from'@/components/UI/Atoms/Badge/Badge';
import DirectionCard from '@/components/UI/Atoms/Card/DirectionCard';
import SectionHeader from '@/components/Layout/SectionHeader/SectionHeader';
import { getAllServices, ServiceItem } from '@/service/Services/services';
import useClientTranslation from '@/hooks/useClientTranslation';
import ServiceCard from '@/components/Molecules/ServiceCard/ServiceCard';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const BusinessSection = () => {
  const { t, locale } = useClientTranslation('services');
  const [services, setServices] = useState<ServiceItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const badgeText = "Business solutions";

  // Default fallback services
  const defaultServices = [
    {
      title: "Cybersecurity",
      description: "Protect your digital assets with our comprehensive cybersecurity solutions.",
      icon: "/assets/CardIcon.svg",
      serviceId: null // No service ID for fallback services
    },
    {
      title: "Web Development",
      description: "Custom web applications built with modern technologies to meet your business needs.",
      icon: "/assets/CardIcon.svg",
      serviceId: null // No service ID for fallback services
    },
    {
      title: "IT Consulting",
      description: "Expert advice to optimize your IT infrastructure and strategy.",
      icon: "/assets/CardIcon.svg",
      serviceId: null // No service ID for fallback services
    },
  ];

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const result = await getAllServices(locale as 'en' | 'ar');
        if (result.success && result.data) {
          // Filter for active services with type "solution" and take more for slider
          const filteredServices = result.data
            .filter(service => service.type === 'solution' && service.is_active === true);
          
          setServices(filteredServices);
        }
      } catch (error) {
        console.error('Error fetching business solutions:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, [locale]);

  // Transform API data to match Card component props
  const getServicesToShow = () => {
    if (services.length === 0) return defaultServices;

    return services.map((service) => {
      let iconSrc = "/assets/CardIcon.svg"; // Default fallback
      
      if (service.icon) {
        // Handle different icon formats from API
        if (service.icon.startsWith('http')) {
          // Full URL (Cloudinary) - use as is
          iconSrc = service.icon;
        } else if (service.icon.startsWith('/')) {
          // Already has /assets prefix
          iconSrc = service.icon;
        } else {
          // Just filename - add /assets prefix
          iconSrc = `/assets/${service.icon}`;
        }
      }
      
      return {
        title: service.title[locale as 'en' | 'ar'],
        description: service.description[locale as 'en' | 'ar'],
        icon: iconSrc,
        serviceId: service._id, // Store service ID for click handling
        features: service.what_we_do?.units?.map((unit: any) => unit[locale as 'en' | 'ar'] || unit.en) || []
      };
    });
  };

  const servicesToShow = getServicesToShow();

  return (
    <section className={styles.servicesSection}>
        <Badge text={badgeText} show={true}  />
        <SectionHeader
            title1="How we help"
            title2="Businesses Grow?"
            subtitle="Discover our comprehensive suite of services designed to elevate your digital presence"
        />
        <div className={styles.sliderContainer}>
          <div className={styles.navigationButtons}>
            <button 
              className={styles.navButton} 
              onClick={() => setCurrentIndex(prev => prev > 0 ? prev - 1 : servicesToShow.length - 1)}
              aria-label="Previous service"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              className={styles.navButton} 
              onClick={() => setCurrentIndex(prev => prev < servicesToShow.length - 1 ? prev + 1 : 0)}
              aria-label="Next service"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          <div className={styles.sliderContent}>
            <AnimatePresence mode="wait">
              {servicesToShow.length > 0 && (
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className={styles.slideWrapper}
                >
                  <ServiceCard
                    id={servicesToShow[currentIndex].serviceId || ""}
                    title={servicesToShow[currentIndex].title}
                    description={servicesToShow[currentIndex].description}
                    features={servicesToShow[currentIndex].features || []}
                    iconUrl={servicesToShow[currentIndex].icon}
                    buttonText={locale === 'ar' ? 'تعرف على المزيد' : 'Learn More'}
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className={styles.pagingContainer}>
            {servicesToShow.map((_, idx) => (
              <button
                key={idx}
                className={`${styles.pagingDot} ${idx === currentIndex ? styles.activeDot : ''}`}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
    </section>
  );
};

export default React.memo(BusinessSection);