'use client';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, ExternalLink, Zap, Star, CreditCard, BarChart3, User, Brain, Shield, Package } from 'lucide-react';
import styles from './CaseStudyPage.module.css';
import ProjectButton from '@/components/UI/Atoms/ProjectButton/ProjectButton';
import Image from 'next/image';
import { getProjectById } from '@/service/projectId/projectId';
import { ProjectItem, Testimonial } from '@/service/Projects/projects';

interface CaseStudyPageProps {
  projectId: string;
}

interface TestimonialDisplay {
  text: string;
  author: string;
}

const CaseStudyPage: React.FC<CaseStudyPageProps> = ({ projectId }) => {
  const [project, setProject] = useState<ProjectItem | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const fetchProject = async () => {
      try {
        console.log('Fetching project with ID:', projectId);
        setLoading(true);
        
        // For testing, if it's the test ID, show a mock project
        if (projectId === 'test-project-id') {
          console.log('Using test project data');
          setProject({
            _id: 'test-project-id',
            title: { en: 'Test Project', ar: 'مشروع تجريبي' },
            subTitle: { en: 'Test Subtitle', ar: 'عنوان فرعي تجريبي' },
            overview: { en: 'This is a test project for debugging', ar: 'هذا مشروع تجريبي للتصحيح' },
            technology_stack: ['React', 'Node.js', 'TypeScript'],
            case_study_results: [],
            team_members: [],
            client_id: { _id: '1', name: 'Test Client', image_url: '' },
            features: [],
            services: [],
            status: 'Completed',
            location: 'Test Location',
            start_work: new Date().toISOString(),
            project_manager: 'Test Manager'
          });
          setLoading(false);
          return;
        }
        
        const result = await getProjectById(projectId);
        console.log('Project API result:', result);
        
        if (result.success && result.data) {
          console.log('Project data loaded:', result.data);
          setProject(result.data);
        } else {
          console.log('Project API error:', result.error);
          setError(result.error || 'Failed to load project');
        }
      } catch (err) {
        console.log('Project fetch error:', err);
        setError('An unexpected error occurred');
      } finally {
        setLoading(false);
      }
    };

    if (projectId) {
      fetchProject();
    }
  }, [projectId]);

  const caseStudy = {
    title: project?.title.en,
    subtitle: project?.subTitle?.en || '',
    tags: project?.services?.map(service => service.services_id.title.en) || [],
    client: project?.client_id?.name || 'Client',
    projectManager: project?.project_manager || 'Project Manager',
    timeframe: project?.start_work ? new Date(project.start_work).toLocaleDateString() : 'Timeframe',
    team: `${project?.team_members?.length || 0} team members`,
    location: project?.location || 'Location',
    url_deployment: project?.url_deployment || null,
    results: project?.case_study_results?.map(result => ({
      metric: result.description.en,
      value: result.value
    })) || [],
    testimonials: project?.testimonials?.map((testimonial: Testimonial) => ({
      text: typeof testimonial.message === 'string' ? testimonial.message : testimonial.message?.en || '',
      author: testimonial.client_id?.name || 'Anonymous'
    })) || [],
    features: project?.features?.map(feature => ({
      icon: feature.icon || <Package className={styles.featureIcon} />,
      title: feature.title.en,
      description: feature.description.en
    })) || []
  };

  const handleContactNavigation = () => {
    // Navigate to Contact page
    router.push('en/contact');
  };

  const handlePrototypeNavigation = () => {
    // Navigate to the deployed project URL
    if (caseStudy.url_deployment) {
      window.open(caseStudy.url_deployment, '_blank');
    } else {
      // Fallback to contact page if no deployment URL
      // router.push('/en/contact');
    }
  };

  const handleConcactNavigation = () => {
    // Navigate to Contact page
    window.location.href = '/en/contact/';
  };

  console.log(caseStudy.tags)
  
  const projectDetails = [
    { 
      icon: '/assets/ProjectDetailscard/client.svg',
      label: 'Client:',
      value: caseStudy.client
    },
    { 
      icon: '/assets/ProjectDetailscard/client.svg',
      label: 'Project Manager:',
      value: caseStudy.projectManager
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
          <a href="/" className={styles.breadcrumbLink}>Home</a>
          <span className={styles.breadcrumbDivider}>&gt;</span>
          <a href="/en/portfolio" className={styles.breadcrumbLink}>Portfolio</a>
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
              {loading ? (
                <div className={styles.sectionLoading}>
                  <div className={styles.loadingSpinner}></div>
                  <p>Loading project details...</p>
                </div>
              ) : (
                <>
                  <h1 className={styles.title}>{caseStudy.title}</h1>
                  <p className={styles.subtitle}>{caseStudy.subtitle}</p>
                  
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
                </>
              )}
            </section>

            {/* Overview Section */}
            <section className={styles.section}>
              {loading ? (
                <div className={styles.sectionLoading}>
                  <div className={styles.loadingSpinner}></div>
                  <p>Loading overview...</p>
                </div>
              ) : (
                <>
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
                    {project?.overview?.en || 'This custom e-commerce platform delivers an intuitive user experience while integrating advanced functionalities to meet complex business requirements. We\'ve created a solution that not only powers your online sales but transforms how you engage with customers and manage your operations.'}
                  </p>
                </>
              )}
            </section>

            {/* Key Features */}
            <section className={styles.section2}>
              {loading ? (
                <div className={styles.sectionLoading}>
                  <div className={styles.loadingSpinner}></div>
                  <p>Loading features...</p>
                </div>
              ) : (
                <>
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
                          {typeof feature.icon === 'string' ? (
                            <Image
                              src={ feature.icon || "/assets/box copy.png" }
                              alt="Feature icon"
                              width={30}
                              height={30}
                              
                              className={styles.overviewIcon}
                            />
                          ) : (
                             feature.icon || <Package className={styles.featureIcon} />
                          )}
                        </div>
                        <h3 className={styles.featureTitle}>{feature.title}</h3>
                        <p className={styles.featureDescription}>{feature.description}</p>
                      </div>
                    ))}
                  </div>
                </>
              )}
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
              <button className={styles.button} onClick={handlePrototypeNavigation}>
                Show prototype <ExternalLink className={styles.buttonIcon} />
              </button>
            </div>

            {/* Consultation Card */}
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Free Project Consultation</h3>
              <p className={styles.freeProjectText}>
                Get a comprehensive evaluation of your project goals and digital strategy with our complimentary assessment.
              </p>
              <button className={styles.button} onClick={handleConcactNavigation}>
                Schedule Free Assessment <ExternalLink className={styles.buttonIcon} />
              </button>
            </div>

            {/* Testimonials */}
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Client Testimonials</h3>
              <div className={styles.testimonials}>
                {caseStudy.testimonials.map((testimonial: TestimonialDisplay, idx: number) => (
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

export default React.memo(CaseStudyPage);