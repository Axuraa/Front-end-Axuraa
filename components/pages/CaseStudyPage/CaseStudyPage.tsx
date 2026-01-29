'use client';
import React from 'react';
import { ArrowLeft, ExternalLink, Zap, Star, CreditCard, BarChart3, User, Brain, Shield, Package } from 'lucide-react';
import styles from './CaseStudyPage.module.css';
import ProjectButton from '@/components/UI/Atoms/ProjectButton/ProjectButton';
import Image from 'next/image';
const CaseStudyPage = () => {
  const caseStudy = {
    title: "Custom E-commerce Platform",
    subtitle: "Built To Scale Enterprise Growth & Performance",
    tags: ["Node.js App", "E-commerce", "SaaS", "Cloud", "UI/UX", "Multi-platform"],
    client: "Global Retail Inc.",
    projectManager: "Martha (UX, Admin)",
    timeframe: "6 Months",
    team: "5 dedicated professionals",
    location: "Los Angeles, CA",
    results: [
      { metric: "Growth in online sales for enterprise clients", value: "+25%" },
      { metric: "More efficient order fulfillment processes", value: "+25%" }
    ],
    testimonials: [
      {
        text: "This platform revolutionized our online presence and significantly boosted customer engagement.",
        author: "Marketing Director, Global Retail Inc."
      },
      {
        text: "The team's expertise and dedication delivered a product that exceeded our expectations.",
        author: "CEO, E-commerce Solutions LLC"
      }
    ],
    features: [
      {
        icon: <Package className={styles.featureIcon} />,
        title: "Advanced Inventory Management",
        description: "Real-time tracking and automated stock control"
      },
      {
        icon: <CreditCard className={styles.featureIcon} />,
        title: "Secure Payment Gateways",
        description: "Multiple payment options with enterprise-grade security"
      },
      {
        icon: <BarChart3 className={styles.featureIcon} />,
        title: "Powerful Analytics",
        description: "Deep insights into sales performance and customer behavior"
      },
      {
        icon: <User className={styles.featureIcon} />,
        title: "Personalized Dashboards",
        description: "Custom user experiences tailored to individual preferences"
      },
      {
        icon: <Brain className={styles.featureIcon} />,
        title: "AI Recommendation Engine",
        description: "Smart product suggestions to boost conversions"
      },
      {
        icon: <Shield className={styles.featureIcon} />,
        title: "Fraud Detection",
        description: "ML-powered security to protect your business"
      }
    ]
  };
const projectDetails = [
  { 
    icon: '/assets/ProjectDetailscard/client.svg',
    label: 'Client:',
    value: caseStudy.client
  },
  { 
    icon: '/assets/ProjectDetailscard/client.svg',
    label: 'Project Manager:',
    value: 'Mortha (Lo, Admin)'
  },
  { 
    icon: '/assets/ProjectDetailscard/time.svg',
    label: 'Timeframe:',
    value: caseStudy.timeframe
  },
  { 
    icon: '/assets/ProjectDetailscard/team.svg',
    label: 'Team:',
    value: caseStudy.team
  },
  { 
    icon: '/assets/ProjectDetailscard/location.svg',
    label: 'Location:',
    value: caseStudy.location
  }
];
  return (
    <div className={styles.container}>
     {/* Breadcrumb */}
      <div className={styles.breadcrumb}>
        <div className={styles.breadcrumbContent}>
          <a href="#" className={styles.breadcrumbLink}>Home</a>
          <span className={styles.breadcrumbDivider}>&gt;</span>
          <a href="#" className={styles.breadcrumbLink}>Portfolio</a>
          <span className={styles.breadcrumbDivider}>&gt;</span>
          <span className={styles.currentPage}>Custom E-commerce Platform</span>
        </div>
      </div>

      <main className={styles.main}>
        <div className={styles.grid}>
          {/* Main Content */}
          <div>
            {/* Hero Section */}
            <section className={styles.hero}>
              <h1 className={styles.title}>{caseStudy.title}</h1>
              <p className={styles.subtitle}>{caseStudy.subtitle}</p>
              
              {/* <div className={styles.tags}>
                {caseStudy.tags.map((tag, idx) => (
                  <span key={idx} className={styles.tag}>{tag}</span>
                ))}
              </div> */}

              <div className={styles.tags}>
                    {caseStudy.tags.map((tag, idx) => (
                      <ProjectButton 
                        key={idx} 
                        variant="outline"
                        style={{ 
                          display: 'flex',
                          padding: '2.167px 8.247px 1.464px 10.26px',
                          justifyContent: 'center',
                          alignItems: 'center',
                          borderRadius: '10px',
                          border: '0 solid #E5E7EB',
                          backgroundColor: '#D04A1D',
                          color: '#FFF',
                          fontFamily: 'Roboto',
                          fontSize: '12.667px',
                          fontWeight: 400,
                          lineHeight: '18.297px',
                          margin: 0
                        }}
                      >
                      {tag}
                    </ProjectButton>
                    ))}
              </div>
              <div className={styles.preview}>
              </div>
            </section>

            {/* Overview Section */}
            <section className={styles.section}>
              <div className={styles.sectionHeader}>
                <div className={styles.overviewIconContainer}>
                  <Image
                    src="/assets/OverviewIcon.png"
                    alt="Overview"
                    width={30}
                    height={30}
                    className={styles.overviewIcon}
                  />
                </div>
                <h2 className={styles.sectionTitle}>OVERVIEW</h2>
              </div>
              <p className={styles.sectionText}>
                This custom e-commerce platform delivers an intuitive user experience while integrating advanced functionalities to meet complex business requirements. We've created a solution that not only powers your online sales but transforms how you engage with customers and manage your operations.
              </p>
            </section>

            {/* Key Features */}
            <section className={styles.section2}>
              <div className={styles.sectionHeader2}>
                <div className={styles.overviewIconContainer}>
                  <Image
                    src="/assets/Sparkling.png"
                    alt="Overview"
                    width={30}
                    height={30}
                    className={styles.overviewIcon}
                  />
                </div>
                <h2 className={styles.sectionTitle2}>Key Features</h2>
              </div>
              <p className={styles.sectionText2}>
                A comprehensive suite of features designed to optimize the e-commerce experience for merchants and customers alike.
              </p>
              <div className={styles.featuresGrid}>
                {caseStudy.features.map((feature, idx) => (
                  <div key={idx} className={styles.featureCard}>
                      <div className={styles.featureIcon}>
                        <Image
                          src="/assets/box.png"
                          alt="Overview"
                          width={30}
                          height={30}
                          className={styles.overviewIcon}
                        />
                      </div>
                    <h3 className={styles.featureTitle}>{feature.title}</h3>
                    <p className={styles.featureDescription}>{feature.description}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <aside className={styles.sidebar}>
            {/* Results Card */}
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Case Study Results</h3>
              <div className={styles.results}>
                {caseStudy.results.map((result, idx) => (
                  <div key={idx} className={styles.resultItem}>
                    <div className={styles.resultValue}>{result.value}</div>
                    <div className={styles.resultLabel}>{result.metric}</div>
                  </div>
                ))}
              </div>
              <button className={styles.button}>
                Show prototype <ExternalLink className={styles.buttonIcon} />
              </button>
            </div>

            {/* Consultation Card */}
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Free Project Consultation</h3>
              <p className={styles.freeProjectText}>
                Get a comprehensive evaluation of your project goals and digital strategy with our complimentary assessment.
              </p>
              <button className={styles.button}>
                Schedule Free Assessment <ExternalLink className={styles.buttonIcon} />
              </button>
            </div>

            {/* Testimonials */}
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Client Testimonials</h3>
              <div className={styles.testimonials}>
                {caseStudy.testimonials.map((testimonial, idx) => (
                  <div key={idx} className={styles.testimonial}>
                    <div className={styles.testimonialAvatar}>
                          <Image
                            src="/assets/imsges.png"
                            alt="Overview"
                            width={40}
                            height={40}
                            className={styles.testimonialAvatar}
                      />
                    </div>
                    
                    <div className={styles.testimonialContent}>
                      <p className={styles.testimonialText}>"{testimonial.text}"</p>
                      <p className={styles.testimonialAuthor}>{testimonial.author}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Project Details */}
            <div className={styles.ProjectDetailscard}>
              <h3 className={styles.cardTitle}>Project Details</h3>
              <div className={styles.details}>
                  {projectDetails.map((detail, index) => (
                    <div key={index} className={styles.detailItem}>
                      <Image
                        src={detail.icon}
                        alt=""
                        width={8.488}
                        height={9.701}
                        className={styles.detailIcon}
                      />
                      <span className={styles.detailLabel}>{detail.label}</span>
                      <span className={styles.detailValue}>{detail.value}</span>
                    </div>
                  ))}
                </div>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
};

export default CaseStudyPage;