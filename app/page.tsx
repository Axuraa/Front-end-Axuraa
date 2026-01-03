// import Card from '@/components/UI/Card/Card';
import styles from './page.module.css';
import HeroSection from '@/components/Layout/HeroSection/HeroSection';
import Homepage from '@/pages/Home/Homepage';


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
        backgroundType="Alphabet"
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

    </div>
  );
}
