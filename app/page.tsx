// import Card from '@/components/UI/Card/Card';
import styles from './page.module.css';
import HeroSection from '@/components/Layout/HeroSection/HeroSection';
import OurDevelopmentContainer from '@/components/Molecules/OurDevelopmentContainer.tsx/OurDevelopmentContainer';
import ServicePackagesContainer from '@/components/Molecules/ServicePackagesContainer/ServicePackagesContainer';
import OurDevelopmentProcess from '@/components/UI/Atoms/OurDevelopmentProcess/OurDevelopmentProcess';
import ServicePackagesCard from '@/components/UI/Atoms/ServicePackagesCard/ServicePackagesCard';
import Homepage from '@/components/pages/Home/Homepage';


export default function Home() {
  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      category: "Web Development",
      percentage: "+45%",
      description: "Boosted online sales with a modern e-commerce solution.",
      imageUrl: "/assets/ProjectImage.png"
    },
    // Add more projects as needed
  ];


  const developmentSteps = [
  {
    id: 1,
    icon: <span>1</span>,
    title: "Discovery & Strategy",
    description: "Comprehensive analysis of your business goals, target audience, and technical requirements to create a detailed project roadmap"
  },
  {
    id: 2,
    icon: <span>2</span>,
    title: "UI/UX Design",
    description: "Creating intuitive and engaging user interfaces that align with your brand identity and user needs"
  },
  {
    id: 3,
    icon: <span>3</span>,
    title: "Development",
    description: "Building robust and scalable solutions using the latest technologies and best practices"
  },
  {
    id: 4,
    icon: <span>4</span>,
    title: "Testing & QA",
    description: "Rigorous testing to ensure functionality, performance, and security across all devices and platforms"
  },
  {
    id: 5,
    icon: <span>5</span>,
    title: "Deployment & Support",
    description: "Seamless deployment to your live environment, followed by ongoing maintenance and support to ensure your website remains up-to-date and effective."
  }
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
      "1 month support"
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
      "Social media integration"
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
  return (
   <div className={styles.pageContainer}>
      {/* Example 1: Show everything (default) */}
      <HeroSection 
        title1="Welcome to Axuraa"
        title2="Building Digital Excellence"
        subtitle1="Transforming ideas into powerful digital experiences."
        badgeText="INNOVATION IN PROGRESS"
        showBackgroundDots={true}
        showAnimatedCircles={true}
        showBadge={true}
        showTrustedSection={true}
        showPrimaryButton={true}
        showSecondaryButton={true}
        showEllipseDecorations={true}
        showStatusBadge={false}
        backgroundType="Hexagon"
        height="100vh"
      />
       {/* <div className={styles.filexContainer}>
         <Card
            title="Cybersecurity"
            description="Lorems Lorems Lorems Lorems Lorems Lorems Lorems Lorems Lorems Lorems Lorems "
          />
          <Card
            title="Web Development"
            description="Custom web applications built with modern technologies to meet your business needs."
          />

          <Card 
          title="Example" 
          description="This is a card" 
          iconSrc="/assets/CardIcon.svg" 
        />

                <Card 
          title="Example" 
          description="This is a card" 
          iconSrc="/assets/CardIcon.svg"
          borderRadius="0 68.087px 0 0" 
        />
       </div> */}

       <Homepage/>


        {/* <OurDevelopmentProcess
          icon={<span>1</span>} // Replace with your actual icon component
          title="Discovery & Strategy"
          description="Comprehensive analysis of your business goals, target audience, and technical requirements to create a detailed project roadmap"
          className="custom-class"
        /> */}


        {/* <OurDevelopmentContainer steps={developmentSteps} /> */}

       {/* <ServicePackagesCard
          title="Starter Package"
          description="Perfect for small businesses"
          features={["5 pages website", "Mobile responsive", "Basic SEO"]}
          price="$99/month"
          isPopular={true}        // Controls popular styling and badge
          showPopularBadge={true} // Controls badge visibility
          hasShadow={true}        // Controls shadow visibility
          buttonText="Get Started"
          hasButtonBackground={true}
        /> */}


        {/* <ServicePackagesCard
                  title="Starter Package"
                  description="Perfect for small to medium businesses looking for a professional, responsive online presence."
                  features={["5 pages website", "Mobile responsive", "Basic SEO"]}
                  price="$99/month"
                  isPopular={false}        // Controls popular styling and badge
                  showPopularBadge={false} // Controls badge visibility
                  hasShadow={false}        // Controls shadow visibility
                  buttonText="Get Started"
                  hasButtonBackground={false}
                /> */}


        {/* <ServicePackagesContainer packages={servicePackages} /> */}

    </div>

  );
}
