// pages/ServicePage/ServicePage.tsx
import React from 'react';
import styles from './ServicePage.module.css';
import HeroSection from '@/components/Layout/HeroSection/HeroSection';
import TechnologiesUsed from '@/components/Molecules/TechnologiesUsed/TechnologiesUsed';
import FeaturesContainer from '@/components/Molecules/FeaturesContainer/FeaturesContainer';
import OurDevelopmentContainer from '@/components/Molecules/OurDevelopmentContainer.tsx/OurDevelopmentContainer';
import SuccessStoriesContainer from '@/components/Molecules/SuccessStoriesContainer/SuccessStoriesContainer';
import Image from 'next/image';
import ServicePackagesContainer from '@/components/Molecules/ServicePackagesContainer/ServicePackagesContainer';
interface ServicePageProps {
  // Add any props if needed
}

const features = [
  {
    id: 1,
    title: "Responsive Design",
    description: "Fully responsive websites that look great on all devices, from desktops to smartphones.",
    iconUrl: "/assets/Frame.svg" 
  },
  {
    id: 2,
    title: "E-Commerce Solutions",
    description: "Secure and scalable online stores with integrated payment gateways and inventory management.",
    iconUrl: "/assets/Frame.svg" 
  },
  {
    id: 3,
    title: "Web Applications",
    description: "Custom web applications tailored to your specific business needs and requirements.",
    iconUrl: "/assets/Frame.svg" 
  },
  {
    id: 4,
    title: "SEO Optimization",
    description: "Search engine optimized websites to help you rank higher in search results.",
    iconUrl: "/assets/Frame.svg" 
  },
  {
    id: 5,
    title: "Performance Tuning",
    description: "Optimized websites with fast loading times and smooth user experiences.",
    iconUrl: "/assets/Frame.svg" 
  },
  {
    id: 6,
    title: "Ongoing Support",
    description: "Dedicated support and maintenance to keep your website running smoothly.",
    iconUrl: "/assets/Frame.svg" 
  }
];

const developmentProcess = [
  {
    id: 1,
    title: "Discovery",
    description: "We analyze your requirements and create a detailed project plan.",
    icon: "1" // Replace with your icon component or path
  },
  {
    id: 2,
    title: "Design",
    description: "Our designers create wireframes and UI/UX designs for your approval.",
    icon: "2" // Replace with your icon component or path
  },
  {
    id: 3,
    title: "Development",
    description: "Our developers bring the design to life with clean, efficient code.",
    icon: "3" // Replace with your icon component or path
  },
  {
    id: 4,
    title: "Testing",
    description: "We thoroughly test all features to ensure quality and performance.",
    icon: "4" // Replace with your icon component or path
  },
  {
    id: 5,
    title: "Launch & Support",
    description: "We deploy your project and provide ongoing support and maintenance.",
    icon: "5" // Replace with your icon component or path
  }
];

const successStories = [
  {
    title: "E-Commerce Platform",
    description: "Revolutionized online shopping with a 3x increase in conversion rates and 200% revenue growth through a seamless, mobile-first design.",
    iconUrl: "/icons/ecommerce-icon.svg", // Update with your actual icon path
    metrics: [
      { label: "Revenue Growth", value: "200%", valueColor: "#D04A1D" },
      { label: "Page Load", value: "1.2s", valueColor: "#D04A1D" }
    ]
  },
  {
    title: "Healthcare Portal",
    description: "Streamlined patient management with 99.9% uptime, reducing administrative workload by 40% and improving patient satisfaction scores.",
    iconUrl: "/icons/healthcare-icon.svg", // Update with your actual icon path
    metrics: [
      { label: "Efficiency", value: "150%", valueColor: "#D04A1D" },
      { label: "Uptime", value: "99.9%", valueColor: "#D04A1D" }
    ]
  },
  {
    title: "SaaS Application",
    description: "Scaled to handle 1M+ monthly active users with 99.99% reliability and 85% user retention rate.",
    iconUrl: "/icons/saas-icon.svg", // Update with your actual icon path
    metrics: [
      { label: "Active Users", value: "1M+", valueColor: "#D04A1D" },
      { label: "Retention", value: "85%", valueColor: "#D04A1D" }
    ]
  }
];

 const technologies = [
    'React', 'Node.js', 'Django', 'Python', 'PHP', 'Laravel', 'Figma',
    'JavaScript', 'AWS'
  ];

  const servicePackages = [
  {
    title: "Starter Package",
    description: "Perfect for small businesses",
    price: "$99/month",
    features: [
      "5 pages website",
      "Mobile responsive",
      "Basic SEO",
      "Contact form",
      "1 month support",
      "E-commerce integration",
      "Analytics dashboard"
    ],
    isPopular: false,
    hasButtonBackground: false,
    hasShadow: false
  },
  {
    title: "Professional Package",
    description: "Ideal for growing businesses",
    price: "$199/month",
    features: [
      "10 pages website",
      "Mobile responsive",
      "Advanced SEO",
      "Contact form",
      "3 months support",
      "E-commerce integration",
      "Analytics dashboard"
    ],
    isPopular: true,
    hasButtonBackground: true,
     hasShadow: true
  },
  {
    title: "Enterprise Package",
    description: "For large scale businesses",
    price: "$399/month",
    features: [
      "Unlimited pages",
      "Mobile responsive",
      "Premium SEO",
      "Advanced forms",
      "6 months support",
      "E-commerce integration",
      "Analytics dashboard"
    ],
    isPopular: false,
    hasButtonBackground: false
    ,hasShadow: false
  }
];
const ServicePage: React.FC<ServicePageProps> = () => {
  return (
    <div className={styles.servicePage}>
      <HeroSection 
              title1="Architecting the Future of"
              title2="Digital Business."
              subtitle1="At Axuraa, we don't just write code. We build the digital infrastructure that powers the world's most ambitious companies."
              badgeText="INNOVATION IN PROGRESS"
              showBackgroundDots={false}
              showAnimatedCircles={true}
              showBadge={false}
              showTrustedSection={false}
              showPrimaryButton={true}
              showSecondaryButton={false}
              showEllipseDecorations={true}
              showStatusBadge={true}
              backgroundType="Circle"
        />
    
        <div className={styles.contentSection1}>
            <div className={styles.contentSection2}>
                <h1 className={styles.contentSection2Title}>What We Do</h1>
                <p className={styles.contentSection2Description}>Our web development experts build exceptional digital experiences for your brand. We combine strategic design, cutting-edge development technologies, and proven methodologies to deliver high-performance, scalable web solutions that drive business growth.</p>
               <ul className={styles.serviceList}>
                    <li className={styles.serviceItem}>
                        <svg className={styles.serviceIcon} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 1.66675C5.4 1.66675 1.66666 5.40008 1.66666 10.0001C1.66666 14.6001 5.4 18.3334 10 18.3334C14.6 18.3334 18.3333 14.6001 18.3333 10.0001C18.3333 5.40008 14.6 1.66675 10 1.66675ZM8.33333 15L3.33333 10.0001L4.55 8.78341L8.33333 12.5584L15.45 5.44175L16.6667 6.66675L8.33333 15Z" fill="#D04A1D"/>
                        </svg>
                        <span className={styles.serviceContent}>Custom web application and platform development</span>
                    </li>
                    <li className={styles.serviceItem}>
                        <svg className={styles.serviceIcon} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 1.66675C5.4 1.66675 1.66666 5.40008 1.66666 10.0001C1.66666 14.6001 5.4 18.3334 10 18.3334C14.6 18.3334 18.3333 14.6001 18.3333 10.0001C18.3333 5.40008 14.6 1.66675 10 1.66675ZM8.33333 15L3.33333 10.0001L4.55 8.78341L8.33333 12.5584L15.45 5.44175L16.6667 6.66675L8.33333 15Z" fill="#D04A1D"/>
                        </svg>
                        <span className={styles.serviceContent}>E-commerce solutions and online store development</span>
                    </li>
                    <li className={styles.serviceItem}>
                        <svg className={styles.serviceIcon} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 1.66675C5.4 1.66675 1.66666 5.40008 1.66666 10.0001C1.66666 14.6001 5.4 18.3334 10 18.3334C14.6 18.3334 18.3333 14.6001 18.3333 10.0001C18.3333 5.40008 14.6 1.66675 10 1.66675ZM8.33333 15L3.33333 10.0001L4.55 8.78341L8.33333 12.5584L15.45 5.44175L16.6667 6.66675L8.33333 15Z" fill="#D04A1D"/>
                        </svg>
                        <span className={styles.serviceContent}>Progressive Web Apps (PWA) for mobile experiences</span>
                    </li>
                    <li className={styles.serviceItem}>
                        <svg className={styles.serviceIcon} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 1.66675C5.4 1.66675 1.66666 5.40008 1.66666 10.0001C1.66666 14.6001 5.4 18.3334 10 18.3334C14.6 18.3334 18.3333 14.6001 18.3333 10.0001C18.3333 5.40008 14.6 1.66675 10 1.66675ZM8.33333 15L3.33333 10.0001L4.55 8.78341L8.33333 12.5584L15.45 5.44175L16.6667 6.66675L8.33333 15Z" fill="#D04A1D"/>
                        </svg>
                        <span className={styles.serviceContent}>API development and integration services</span>
                    </li>
                    <li className={styles.serviceItem}>
                        <svg className={styles.serviceIcon} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 1.66675C5.4 1.66675 1.66666 5.40008 1.66666 10.0001C1.66666 14.6001 5.4 18.3334 10 18.3334C14.6 18.3334 18.3333 14.6001 18.3333 10.0001C18.3333 5.40008 14.6 1.66675 10 1.66675ZM8.33333 15L3.33333 10.0001L4.55 8.78341L8.33333 12.5584L15.45 5.44175L16.6667 6.66675L8.33333 15Z" fill="#D04A1D"/>
                        </svg>
                        <span className={styles.serviceContent}>Website maintenance and support</span>
                    </li>
               </ul>
            </div>
            <TechnologiesUsed technologies={technologies}/>
        </div>
        {/* FeaturesCapabilities */}
        <div className={styles.FeaturesCapabilities}>
            <div className={styles.FeaturesCapabilitiesContent}>
                <h1 className={styles.FeaturesCapabilitiesTitle}>Features & Capabilities</h1>
                <p className={styles.FeaturesCapabilitiesDescription}>Comprehensive web services designed to design, build, and scale your digital presence from concept to launch.</p>
            </div>
            
            <FeaturesContainer features={features}/>
        </div>
        {/* Our Development Process */}
        <div className={styles.OurDevelopmentProcess}>
            <div className={styles.OurDevelopmentProcessContent}>
                <h1 className={styles.OurDevelopmentProcessTitle}>Our Development Process</h1>
                <p className={styles.OurDevelopmentProcessDescription}>A systematic approach to web development that ensures a high-quality product through discovery, design, implementation, and support.</p>
            </div>
            <div className={styles.OurDevelopmentContainer}>
                <OurDevelopmentContainer steps={developmentProcess}/>
            </div>
        </div>
        {/* Success Stories */}
        <div className={styles.SuccessStories}>
            <div className={styles.SuccessStoriesContent}>
                <h1 className={styles.SuccessStoriesTitle}>Success Stories</h1>
                <p className={styles.SuccessStoriesDescription}>Real results from our web development services across various industries, demonstrating measurable improvements in digital performance.</p>
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
                        "The team completely transformed our online presence. Their design sense is brilliant, and the development process was smooth and transparent. Our new website isn't just beautiful—it's a powerful tool that has doubled our inbound leads."
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
                            <span className={styles.authorName}>Sarah Johnson</span>
                            <span className={styles.authorRole}>CEO, TechStart Inc.</span>
                        </div>  
                    </div>
                </div>
            </div>
        </div>
        {/* Service Packages */}
        <div className={styles.ServicePackages}>
             <div className={styles.ServicePackagesContent}>
                <h1 className={styles.ServicePackagesTitle}>Service Packages</h1>
                <p className={styles.ServicePackagesDescription}>Choose the web development solution that fits your business needs, from essential websites to enterprise-grade web applications.</p>
            </div>
            <div className={styles.ServicePackagesContainer}>
                <ServicePackagesContainer packages={servicePackages}/>
            </div>
           <div className={styles.ctaSection}>
                <div className={styles.ctaText}>
                    <h1 className={styles.ctaText1}>Free Project Consultation</h1>
                    <p className={styles.ctaText2}>Get a comprehensive evaluation of your project goals and digital strategy with our complimentary assessment. No obligations, just expert insights.</p>
                </div>
                <button className={styles.ctaButton}>
                    Schedule Free Assessment
                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
                        <g clipPath="url(#clip0_899_488)">
                            <path d="M8.17383 6.05469H7.56836C7.48807 6.05469 7.41107 6.08658 7.35429 6.14336C7.29752 6.20013 7.26562 6.27713 7.26562 6.35742V8.47656H1.21094V2.42188H3.93555C4.01584 2.42188 4.09284 2.38998 4.14961 2.33321C4.20639 2.27643 4.23828 2.19943 4.23828 2.11914V1.51367C4.23828 1.43338 4.20639 1.35638 4.14961 1.29961C4.09284 1.24283 4.01584 1.21094 3.93555 1.21094H0.908203C0.667333 1.21094 0.436328 1.30662 0.266007 1.47694C0.0956854 1.64727 0 1.87827 0 2.11914L0 8.7793C0 9.02017 0.0956854 9.25117 0.266007 9.42149C0.436328 9.59181 0.667333 9.6875 0.908203 9.6875H7.56836C7.80923 9.6875 8.04023 9.59181 8.21056 9.42149C8.38088 9.25117 8.47656 9.02017 8.47656 8.7793V6.35742C8.47656 6.27713 8.44467 6.20013 8.38789 6.14336C8.33112 6.08658 8.25412 6.05469 8.17383 6.05469ZM9.2334 0H6.81152C6.40718 0 6.20511 0.49024 6.48987 0.775757L7.16591 1.4518L2.55432 6.06169C2.51199 6.10388 2.4784 6.15401 2.45548 6.2092C2.43256 6.2644 2.42076 6.32358 2.42076 6.38334C2.42076 6.44311 2.43256 6.50229 2.45548 6.55748C2.4784 6.61268 2.51199 6.66281 2.55432 6.705L2.98326 7.13318C3.02545 7.17551 3.07558 7.2091 3.13077 7.23202C3.18597 7.25494 3.24515 7.26674 3.30491 7.26674C3.36468 7.26674 3.42386 7.25494 3.47905 7.23202C3.53425 7.2091 3.58438 7.17551 3.62657 7.13318L8.23589 2.52253L8.91174 3.19763C9.19556 3.48145 9.6875 3.28278 9.6875 2.87598V0.454102C9.6875 0.333666 9.63966 0.218164 9.5545 0.133003C9.46934 0.0478427 9.35383 0 9.2334 0Z" fill="#D9D9D9"/>
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

export default ServicePage;