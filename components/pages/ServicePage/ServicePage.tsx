'use client';
import React, { useEffect, useState } from 'react';
import styles from './ServicePage.module.css';
import HeroSection from '@/components/Layout/HeroSection/HeroSection';
import TechnologiesUsed from '@/components/Molecules/TechnologiesUsed/TechnologiesUsed';
import FeaturesContainer from '@/components/Molecules/FeaturesContainer/FeaturesContainer';
import OurDevelopmentContainer from '@/components/Molecules/OurDevelopmentContainer.tsx/OurDevelopmentContainer';
import SuccessStoriesContainer from '@/components/Molecules/SuccessStoriesContainer/SuccessStoriesContainer';
import Image from 'next/image';
import ServicePackagesContainer from '@/components/Molecules/ServicePackagesContainer/ServicePackagesContainer';
import { getServiceById, ServiceItem } from '@/service/serviceId/serviceId';
import useClientTranslation from '@/hooks/useClientTranslation';

interface ServicePageProps {
  serviceId: string;
}

const ServicePage: React.FC<ServicePageProps> = ({ serviceId }) => {
  const { t, locale, loading: translationsLoading } = useClientTranslation('servicePage');
  const [service, setService] = useState<ServiceItem | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchService = async () => {
      try {
        console.log('Fetching service with ID:', serviceId);
        setLoading(true);
        const result = await getServiceById(serviceId, locale as 'en' | 'ar');
        console.log('API result:', result);
        
        if (result.success && result.data) {
          console.log('Service data loaded:', result.data);
          setService(result.data);
        } else {
          console.log('API error:', result.error);
          setError(result.error || 'Failed to load service');
        }
      } catch (err) {
        console.log('Fetch error:', err);
        setError('An unexpected error occurred');
      } finally {
        setLoading(false);
      }
    };

    if (serviceId) {
      fetchService();
    }
  }, [serviceId, locale]);

  // Transform backend data to component format
  const features = service?.features?.map((feature, index) => ({
    id: index + 1,
    title: feature.title?.[locale as keyof typeof feature.title] || feature.title?.en || '',
    description: feature.description?.[locale as keyof typeof feature.description] || feature.description?.en || '',
    iconUrl: feature.icon || "/assets/Frame.svg"
  })) || [];

  const developmentProcess = [
    {
      id: 1,
      title: t('development.steps.discovery.title'),
      description: t('development.steps.discovery.description'),
      icon: "1"
    },
    {
      id: 2,
      title: t('development.steps.design.title'),
      description: t('development.steps.design.description'),
      icon: "2"
    },
    {
      id: 3,
      title: t('development.steps.development.title'),
      description: t('development.steps.development.description'),
      icon: "3"
    },
    {
      id: 4,
      title: t('development.steps.testing.title'),
      description: t('development.steps.testing.description'),
      icon: "4"
    },
    {
      id: 5,
      title: t('development.steps.launch.title'),
      description: t('development.steps.launch.description'),
      icon: "5"
    }
  ];

  const successStories = service?.projects?.map((project) => ({
    id: project.projects_id._id,
    title: project.projects_id.title?.[locale as keyof typeof project.projects_id.title] || project.projects_id.title?.en || '',
    description: project.projects_id.overview?.[locale as keyof typeof project.projects_id.overview] || project.projects_id.overview?.en || '',
    iconUrl: project.projects_id.main_image_url || "/assets/Frame.svg",
    metrics: project.projects_id.case_study_results?.map(result => ({
      label: result.description?.[locale as keyof typeof result.description] || result.description?.en || '',
      value: result.value,
      valueColor: "#D04A1D"
    })) || []
  })) || [];

  const technologies = service?.technologies_used?.map(tech => tech.name) || [];

  const servicePackages = [
    {
      title: t('packages.starter.title'),
      description: t('packages.starter.description'),
      price: "$99/month",
      features: t('packages.starter.features', []) as string[],
      isPopular: false,
      hasButtonBackground: false,
      hasShadow: false
    },
    {
      title: t('packages.professional.title'),
      description: t('packages.professional.description'),
      price: "$199/month",
      features: t('packages.professional.features', []) as string[],
      isPopular: true,
      hasButtonBackground: true,
      hasShadow: true
    },
    {
      title: t('packages.enterprise.title'),
      description: t('packages.enterprise.description'),
      price: "$399/month",
      features: t('packages.enterprise.features', []) as string[],
      isPopular: false,
      hasButtonBackground: false,
      hasShadow: false
    }
  ];

  if (loading || translationsLoading) {
    return (
      <div className={styles.loading}>
        <div className={styles.loadingSpinner}></div>
        <p>{t('loading', 'Loading service details...')}</p>
      </div>
    );
  }

  if (error || !service) {
    return <div className={styles.error}>{error || t('serviceNotFound')}</div>;
  }

  return (
    <div className={styles.servicePage}>
      <HeroSection 
              statusBadgeText={t('hero.statusBadge', 'WHO WE ARE')}
              title1={service.title?.[locale as 'en' | 'ar'] || service.title?.en || t('serviceNotFound')}
              title2={t('hero.title2', 'Intelligent Solutions.')}
              subtitle1={service.description?.[locale as 'en' | 'ar'] || service.description?.en || t('heroDescription')}
              badgeText={t('hero.badgeText', 'INNOVATION IN PROGRESS')}
              primaryButtonText={t('hero.cta', 'Start a Project')}
              showBackgroundDots={false}
              showAnimatedCircles={true}
              showBadge={false}
              showTrustedSection={false}
              showPrimaryButton={true}
              showSecondaryButton={false}
              showEllipseDecorations={true}
              showStatusBadge={true}
              backgroundType="Circle"
              height='70vh'
        />
    
      <div className={styles.contentSection1}>
          <div className={styles.contentSection2}>
              <h1 className={styles.contentSection2Title}>{t('whatWeDo')}</h1>
              <p className={styles.contentSection2Description}>
                  {service.what_we_do?.description?.[locale as 'en' | 'ar'] || service.what_we_do?.description?.en || t('whatWeDoDescription')}
              </p>
              <ul className={styles.serviceList}>
                  {service.what_we_do?.units?.map((unit: any, index: number) => (
                      <li key={index} className={styles.serviceItem}>
                          <svg className={styles.serviceIcon} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M10 1.66675C5.4 1.66675 1.66666 5.40008 1.66666 10.0001C1.66666 14.6001 5.4 18.3334 10 18.3334C14.6 18.3334 18.3333 14.6001 18.3333 10.0001C18.3333 5.40008 14.6 1.66675 10 1.66675ZM8.33333 15L3.33333 10.0001L4.55 8.78341L8.33333 12.5584L15.45 5.44175L16.6667 6.66675L8.33333 15Z" fill="#D04A1D"/>
                          </svg>
                          <span className={styles.serviceContent}>{unit[locale as 'en' | 'ar'] || unit.en}</span>
                      </li>
                  )) || (
                      // Fallback to hardcoded items if no units data
                      <>
                          <li className={styles.serviceItem}>
                              <svg className={styles.serviceIcon} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M10 1.66675C5.4 1.66675 1.66666 5.40008 1.66666 10.0001C1.66666 14.6001 5.4 18.3334 10 18.3334C14.6 18.3334 18.3333 14.6001 18.3333 10.0001C18.3333 5.40008 14.6 1.66675 10 1.66675ZM8.33333 15L3.33333 10.0001L4.55 8.78341L8.33333 12.5584L15.45 5.44175L16.6667 6.66675L8.33333 15Z" fill="#D04A1D"/>
                              </svg>
                              <span className={styles.serviceContent}>{t('fallbackUnit1')}</span>
                          </li>
                          <li className={styles.serviceItem}>
                              <svg className={styles.serviceIcon} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M10 1.66675C5.4 1.66675 1.66666 5.40008 1.66666 10.0001C1.66666 14.6001 5.4 18.3334 10 18.3334C14.6 18.3334 18.3333 14.6001 18.3333 10.0001C18.3333 5.40008 14.6 1.66675 10 1.66675ZM8.33333 15L3.33333 10.0001L4.55 8.78341L8.33333 12.5584L15.45 5.44175L16.6667 6.66675L8.33333 15Z" fill="#D04A1D"/>
                              </svg>
                              <span className={styles.serviceContent}>{t('fallbackUnit2')}</span>
                          </li>
                      </>
                  )}
              </ul>
          </div>
          <TechnologiesUsed technologies={technologies} title={t('technologiesUsed')}/>
      </div>
      {/* FeaturesCapabilities */}
      <div className={styles.FeaturesCapabilities}>
          <div className={styles.FeaturesCapabilitiesContent}>
              <h1 className={styles.FeaturesCapabilitiesTitle}>{t('featuresCapabilities')}</h1>
              <p className={styles.FeaturesCapabilitiesDescription}>
                  {service.description_features?.[locale as 'en' | 'ar'] || service.description_features?.en || t('featuresDescription')}
              </p>
          </div>
          <div className={styles.FeaturesCapabilitiesContainer}>
            <FeaturesContainer features={features}/>
          </div>
      </div>
      {/* Our Development Process */}
      <div className={styles.OurDevelopmentProcess}>
          <div className={styles.OurDevelopmentProcessContent}>
              <h1 className={styles.OurDevelopmentProcessTitle}>{t('development.title')}</h1>
              <p className={styles.OurDevelopmentProcessDescription}>{t('development.description')}</p>
          </div>
          <div className={styles.OurDevelopmentContainer}>
              <OurDevelopmentContainer steps={developmentProcess}/>
          </div>
      </div>
      {/* Success Stories */}
      <div className={styles.SuccessStories}>
          <div className={styles.SuccessStoriesContent}>
              <h1 className={styles.SuccessStoriesTitle}>{t('successStories.title')}</h1>
              <p className={styles.SuccessStoriesDescription}>
                  {service.description_stories?.[locale as 'en' | 'ar'] || service.description_stories?.en || t('storiesDescription')}
              </p>
          </div>
          <div className={styles.SuccessStoriesContainer}>
              <SuccessStoriesContainer stories={successStories}/>
          </div>
          <div className={styles.testimonialSection}>
              <div className={styles.testimonialContent}>
                  <Image 
                      src='/assets/SuccessStories/AndAnd.svg'
                      alt="And"
                      className={styles.andIcon}
                      width={30}  
                      height={30} 
                  />
                  <p className={styles.testimonialText}>
                      {t('successStories.testimonial.text')}
                  </p>
                  <div className={styles.testimonialAuthor}>
                      <div className={styles.authorIcon}>
                          <Image 
                              src='/assets/SuccessStories/Frame.png'
                              alt="Author"
                              className={styles.authorImage}
                              width={28}  
                              height={28} 
                          />
                      </div>
                      <div className={styles.authorInfo}>
                          <span className={styles.authorName}>{t('successStories.testimonial.author')}</span>
                          <span className={styles.authorRole}>{t('successStories.testimonial.role')}</span>
                      </div>  
                  </div>
              </div>
          </div>
      </div>
      {/* Service Packages */}
      <div className={styles.ServicePackages}>
          <div className={styles.ServicePackagesContent}>
              <h1 className={styles.ServicePackagesTitle}>{t('packages.title')}</h1>
              <p className={styles.ServicePackagesDescription}>{t('packages.description')}</p>
          </div>
          <div className={styles.ServicePackagesContainer}>
              <ServicePackagesContainer 
                  packages={servicePackages} 
                  buttonText={t('packages.getStarted')}
                  mostPopularText={t('packages.mostPopular')}
              />
          </div>
          <div className={styles.ctaSection}>
              <div className={styles.ctaText}>
                  <h1 className={styles.ctaText1}>{t('cta.title')}</h1>
                  <p className={styles.ctaText2}>{t('cta.description')}</p>
              </div>
              <button 
                  className={styles.ctaButton} 
                  onClick={() => window.location.href = `/${locale}/#contact-section`}
                  style={{ cursor: 'pointer' }}
              >
                  {t('cta.button')}
                  <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <g clipPath="url(#clip0_899_488)">
                          <path d="M8.17383 6.05469H7.56836C7.48807 6.05469 7.41107 6.08658 7.35429 6.14336C7.29752 6.20013 7.26562 6.27713 7.26562 6.35742V8.47656H1.21094V2.42188H3.93555C4.01584 2.42188 4.09284 2.38998 4.14961 2.33321C4.20639 2.27643 4.23828 2.19943 4.23828 2.11914V1.51367C4.23828 1.43338 4.20639 1.35638 4.14961 1.29961C4.09284 1.24283 4.01584 1.21094 3.93555 1.21094H0.908203C0.667333 1.21094 0.436328 1.30662 0.266007 1.47694C0.0956854 1.64727 0 1.87827 0 2.11914L0 8.7793C0 9.02017 0.0956854 9.25117 0.266007 9.42149C0.436328 9.59181 0.667333 9.6875 0.908203 9.6875H7.56836C7.80923 9.6875 8.04023 9.59181 8.21056 9.42149C8.38088 9.25117 8.47656 9.02017 8.47656 8.7793V6.35742C8.47656 6.27713 8.44467 6.20013 8.38789 6.14336C8.33112 6.08658 8.25412 6.05469 8.17383 6.05469ZM9.2334 0H6.81152C6.40718 0 6.20511 0.49024 6.48987 0.775757L7.16591 1.4518L2.55432 6.06169C2.51199 6.10388 2.4784 6.15401 2.45548 6.2092C2.43256 6.2644 2.42076 6.32358 2.42076 6.38334C2.42076 6.44311 2.42076 6.50229 2.45548 6.55748C2.4784 6.61268 2.51199 6.66281 2.55432 6.705L2.98326 7.13318C3.02545 7.17551 3.07558 7.2091 3.13077 7.23202C3.18597 7.25494 3.24515 7.26674 3.30491 7.26674C3.36468 7.26674 3.42386 7.25494 3.47905 7.23202C3.53425 7.2091 3.58438 7.17551 3.62657 7.13318L8.23589 2.52253L8.91174 3.19763C9.19556 3.48145 9.6875 3.28278 9.6875 2.87598V0.454102C9.6875 0.333666 9.63966 0.218164 9.5545 0.133003C9.46934 0.0478427 9.35383 0 9.2334 0Z" fill="#D9D9D9"/>
                      </g>
                      <defs>
                          <clipPath id="clip0_899_488">
                              <rect width="9.6875" height="9.6875" fill="white"/>
                          </clipPath>
                      </defs>
                  </svg>
              </button>
          </div>
      </div>
    </div>
  );
};

export default React.memo(ServicePage);