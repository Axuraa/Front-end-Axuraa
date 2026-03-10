'use client';
import React, { useState, useEffect } from 'react';
import styles from './ServicesSection.module.css';
import Card from '@/components/UI/Atoms/Card/Card';
import Badge  from'@/components/UI/Atoms/Badge/Badge';
import DirectionCard from '@/components/UI/Atoms/Card/DirectionCard';
import SectionHeader from '@/components/Layout/SectionHeader/SectionHeader';
import { getAllServices, ServiceItem } from '@/service/Services/services';
import useClientTranslation from '@/hooks/useClientTranslation';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const ServicesSection = () => {
  const { t, locale } = useClientTranslation('services');
  const [services, setServices] = useState<ServiceItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const badgeText = "Our Services";

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
          // Filter for active services with type "service" and take all for slider
          const filteredServices = result.data
            .filter(service => service.type === 'service' && service.is_active === true);
          
          setServices(filteredServices);
        }
      } catch (error) {
        console.error('Error fetching services:', error);
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
        serviceId: service._id // Store service ID for click handling
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
        {/* <div className={styles.header}>
          <h2 className={styles.title1}>How we help </h2>
          <h2 className={styles.title2}>Businesses Grow?</h2>
          <p className={styles.subtitle}>Discover our comprehensive suite of services designed to elevate your digital presence</p>
        </div> */}

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
                  <Card
                    title={servicesToShow[currentIndex].title}
                    description={servicesToShow[currentIndex].description}
                    iconSrc={servicesToShow[currentIndex].icon}
                    borderRadius="0 68.087px 0 0"
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

export default React.memo(ServicesSection);