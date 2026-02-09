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
import { useRouter } from "next/navigation";
import { getHomePartners, PartnerItem } from "@/service/partners/partners";

interface HeroSectionProps {
  title1?: string;
  title2?: string;
  subtitle1?: string;
  subtitle2?: string;
  badgeText?: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  primaryHref?: string;
  secondaryHref?: string;
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

// Cache key for partners
const PARTNERS_CACHE_KEY = 'partners_items_cache';
const PARTNERS_CACHE_TIMESTAMP_KEY = 'partners_items_cache_timestamp';
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes

// Function to get cached partners
const getCachedPartners = (): PartnerItem[] | null => {
  if (typeof window === 'undefined') return null;
  try {
    const cachedData = localStorage.getItem(PARTNERS_CACHE_KEY);
    const cachedTimestamp = localStorage.getItem(PARTNERS_CACHE_TIMESTAMP_KEY);
    if (cachedData && cachedTimestamp) {
      if (Date.now() - parseInt(cachedTimestamp) < CACHE_DURATION) {
        return JSON.parse(cachedData);
      }
    }
  } catch (error) {
    console.error('Error reading partners cache:', error);
  }
  return null;
};

// Function to set cached partners
const setCachedPartners = (items: PartnerItem[]): void => {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(PARTNERS_CACHE_KEY, JSON.stringify(items));
    localStorage.setItem(PARTNERS_CACHE_TIMESTAMP_KEY, Date.now().toString());
  } catch (error) {
    console.error('Error setting partners cache:', error);
  }
};

const HeroSection: React.FC<HeroSectionProps> = ({
  title1 = "Scalable Software. ",
  title2 = "Intelligent Solutions.",
  subtitle1 = "We transform complex business challenges into streamlined digital experiences.",
  subtitle2 = "TRUSTED BY FORWARD-THINKING COMPANIES",
  badgeText = "AVAILABLE FOR NEW PROJECTS",
  primaryButtonText = "Start a Project",
  secondaryButtonText = "View Our Work",
  primaryHref = "#contact-section",
  secondaryHref = "/portfolio",
  height = "100vh",
  showBackgroundDots = true,
  showAnimatedCircles = true,
  showBadge = true,
  showStatusBadge = true,
  showTrustedSection = true,
  showPrimaryButton = true,
  showSecondaryButton = true,
  showEllipseDecorations = true,
  onPrimaryClick,
  onSecondaryClick,
  backgroundType = "Hexagon",
}) => {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [partners, setPartners] = useState<PartnerItem[]>([]);
  const [partnersLoading, setPartnersLoading] = useState(true);

  useEffect(() => {
    setMounted(true);

    // Initial load from cache
    const cached = getCachedPartners();
    if (cached) {
      setPartners(cached);
    }

    // Fetch fresh partners data
    const fetchPartners = async () => {
      try {
        const result = await getHomePartners();
        if (result.success && result.data) {
          const freshPartners = result.data.partners;
          setPartners(freshPartners);
          setCachedPartners(freshPartners);
        }
      } catch (error) {
        console.error('Error fetching partners:', error);
      } finally {
        setPartnersLoading(false);
      }
    };

    fetchPartners();
  }, []);

  // Icon mapping to handle discrepancies between API names and local asset filenames
  const iconMapping: Record<string, string> = {
    'skytech.svg': '/assets/SkyTecIcon.svg',
    'chainblock.svg': '/assets/ChicnBlockIcon.svg',
    'nexuspoint.svg': '/assets/NexusPointIcon.svg',
    'apex.svg': '/assets/AplexIcon.svg',
    'velocity.svg': '/assets/VelocityIcon.svg',
  };

  // Use API data for Trusted Section
  const companiesToShow = partners.map((partner) => {
    const rawIcon = partner.icon || partner.logo || "";
    const apiIcon = rawIcon.toLowerCase();
    let iconSrc = iconMapping[apiIcon];

    if (!iconSrc) {
      iconSrc = rawIcon.startsWith('http') 
        ? rawIcon 
        : `/assets/${rawIcon}`;
    }

    return {
      src: iconSrc,
      alt: partner.name,
      name: partner.name,
      width: 100, // Default width
      href: partner.website.startsWith('http') ? partner.website : `https://${partner.website}`
    };
  });

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
                <StartButton onClick={() => {
                  if (onPrimaryClick) {
                    onPrimaryClick();
                  } else if (primaryHref.startsWith('#')) {
                    const element = document.getElementById(primaryHref.substring(1));
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    } else {
                      router.push(`/${primaryHref}`);
                    }
                  } else {
                    router.push(primaryHref);
                  }
                }}>
                  {primaryButtonText}
                </StartButton>
              )}
              {showSecondaryButton && (
                <ViewButton onClick={() => {
                  if (onSecondaryClick) {
                    onSecondaryClick();
                  } else if (secondaryHref.startsWith('#')) {
                    const element = document.getElementById(secondaryHref.substring(1));
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    } else {
                      router.push(`/${secondaryHref}`);
                    }
                  } else {
                    router.push(secondaryHref);
                  }
                }}>
                  {secondaryButtonText}
                </ViewButton>
              )}

            </div>
          )}
        </div>

        {/* Trusted Section */}
        {showTrustedSection && companiesToShow.length > 0 && (
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
                <a 
                  key={company.name} 
                  href={company.href} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={styles.companyLogo}
                >
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
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default React.memo(HeroSection);