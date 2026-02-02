"use client";
import React, { useEffect, useState } from "react";
import styles from "./HeroSection.module.css";
import Typography from "@/components/UI/Atoms/Typography/Typography";
import StartButton from "@/components/UI/Atoms/Button/StartButton";
import ViewButton from "@/components/UI/Atoms/Button/ViewButton";
import Badge from "@/components/UI/Atoms/Badge/Badge";
import Image from "next/image";
import StatusBadge from "@/components/UI/Atoms/StatusBadge/StatusBadge";
import AnimatedBackground from "@/components/UI/Muscles/AinmatedBackground/AnimatedBackground";
import { getHomePartners, PartnerItem } from "@/service/partners/partners";

interface HeroSectionProps {
  title1?: string;
  title2?: string;
  subtitle1?: string;
  subtitle2?: string;
  badgeText?: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  backgroundType: "Hexagon" | "Circle" | "Alphabet";
  height?: string;
  showBackgroundDots?: boolean;
  showAnimatedCircles?: boolean;
  showBadge?: boolean;
  showStatusBadge?: boolean;
  showTrustedSection?: boolean;
  showPrimaryButton?: boolean;
  showSecondaryButton?: boolean;
  showEllipseDecorations?: boolean;
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title1 = "Scalable Software. ",
  title2 = "Intelligent Solutions.",
  subtitle1 = "We transform complex business challenges into streamlined digital experiences.",
  subtitle2 = "TRUSTED BY FORWARD-THINKING COMPANIES",
  badgeText = "AVAILABLE FOR NEW PROJECTS",
  primaryButtonText = "Start a Project",
  secondaryButtonText = "View Our Work",
  height = "100vh",
  showBackgroundDots = true,
  showAnimatedCircles = true,
  showBadge = true,
  showStatusBadge = true,
  showTrustedSection = true,
  showPrimaryButton = true,
  showSecondaryButton = true,
  showEllipseDecorations = true,
  onPrimaryClick = () => console.log("Primary button clicked"),
  onSecondaryClick = () => console.log("Secondary button clicked"),
  backgroundType = "Hexagon",
}) => {
  const [mounted, setMounted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [partners, setPartners] = useState<PartnerItem[]>([]);
  const [partnersLoading, setPartnersLoading] = useState(true);

  // Default fallback companies
  const defaultCompanies = [
    { src: "/assets/SkyTecIcon.svg", alt: "SkyTech", name: "SkyTech", width: 120 },
    { src: "/assets/ChicnBlockIcon.svg", alt: "ChainBlock", name: "ChainBlock", width: 120 },
    { src: "/assets/NexusPointIcon.svg", alt: "NexusPoint", name: "NexusPoint", width: 120 },
    { src: "/assets/AplexIcon.svg", alt: "Apex", name: "Apex", width: 80 },
    { src: "/assets/VelocityIcon.svg", alt: "Velocity", name: "Velocity", width: 100 },
  ];

  useEffect(() => {
    setMounted(true);

    // Fetch partners data
    const fetchPartners = async () => {
      try {
        const result = await getHomePartners();
        if (result.success && result.data) {
          setPartners(result.data.partners);
        }
      } catch (error) {
        console.error('Error fetching partners:', error);
      } finally {
        setPartnersLoading(false);
      }
    };

    fetchPartners();
  }, []);

  // Merge API data with fallback icons
  const getCompaniesWithFallback = () => {
    if (partners.length === 0) return defaultCompanies;

    return partners.map((partner) => {
      const fallback = defaultCompanies.find(
        (company) => company.name.toLowerCase() === partner.name.toLowerCase()
      );

      return {
        src: fallback ? fallback.src : `/assets/${partner.icon}`,
        alt: partner.name,
        name: partner.name,
        width: fallback ? fallback.width : 100,
      };
    });
  };

  const companiesToShow = getCompaniesWithFallback();

  return (
    <section 
      className={styles.hero}
      style={{ height }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {showAnimatedCircles && (
        <AnimatedBackground
          type={backgroundType}
          className={styles.animatedBackground}
          isHovered={isHovered}
        />
      )}
      
      <div className={styles.container}>
        <div className={styles.content}>
          {/* Badge */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "1rem",
              marginBottom: "1.5rem",
            }}
            className={mounted ? styles.fadeInUp : ""}
          >
            {showBadge && <Badge text={badgeText} show={true} />}
            {showStatusBadge && <StatusBadge text="WHO WE ARE" />}
          </div>

          {/* Title */}
          <div className={styles.titleWrapper}>
            <Typography
              variant="h1"
              component="h1"
              animation={mounted ? "textUp" : undefined}
              align="center"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "0.5rem",
              }}
            >
              <span style={{ color: "#FFFFFF" }}>
                {title1}
              </span>
              <span
                style={{
                  background: "linear-gradient(90deg, #D04A1D 0%, #902501 100%)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  display: "block",
                }}
              >
                {title2}
              </span>
            </Typography>
          </div>

          {/* Subtitle */}
          <div className={styles.subtitle}>
            <Typography
              variant="body1"
              component="p"
              animation={mounted ? "textUp" : undefined}
              color="var(--color-azure-65, #9CA3AF)"
              align="center"
              stagger={1}
            >
              {subtitle1}
            </Typography>
          </div>

          {/* CTA Buttons */}
          {(showPrimaryButton || showSecondaryButton) && (
            <div
              className={`${styles.ctaButtons} ${mounted ? styles.fadeInUp : ""}`}
              style={{ animationDelay: "0.5s" }}
            >
              {showPrimaryButton && (
                <StartButton onClick={onPrimaryClick}>
                  {primaryButtonText}
                </StartButton>
              )}
              {showSecondaryButton && (
                <ViewButton onClick={onSecondaryClick}>
                  {secondaryButtonText}
                </ViewButton>
              )}
            </div>
          )}
        </div>

        {/* Trusted Section */}
        {showTrustedSection && (
          <div
            className={`${styles.trustedSection} ${mounted ? styles.fadeInUp : ""}`}
            style={{ animationDelay: "0.7s" }}
          >
            <Typography
              variant="body2"
              component="p"
              color="var(--color-grey-46, #6B7280)"
              align="center"
              style={{
                fontWeight: 600,
                letterSpacing: "0.025em",
              }}
            >
              {subtitle2}
            </Typography>

            <div className={styles.companiesGrid}>
              {companiesToShow.map((company) => (
                <div key={company.name} className={styles.companyLogo}>
                  <Image
                    src={company.src}
                    alt={company.alt}
                    width={company.width}
                    height={24}
                  />
                  <Typography
                    variant="body1"
                    component="span"
                    color="var(--color-azure-84, #D1D5DB)"
                    style={{
                      fontWeight: 700,
                      marginLeft: "8px",
                    }}
                  >
                    {company.name}
                  </Typography>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default React.memo(HeroSection);