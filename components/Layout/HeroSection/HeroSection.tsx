"use client";
import React, { useEffect, useState } from "react";
import styles from "./HeroSection.module.css";
import Typography from "@/components/UI/Atoms/Typography/Typography";
import StartButton from "@/components/UI/Atoms/Button/StartButton";
import ViewButton from "@/components/UI/Atoms/Button/ViewButton";
import DotsBackground from "@/components/UI/Atoms/DotsBackground/DotsBackground";
import EllipseDecorations from "@/components/UI/EllipseDecorations/EllipseDecorations";
import Badge from "@/components/UI/Atoms/Badge/Badge";
import Image from "next/image";
import StatusBadge from "@/components/UI/Atoms/StatusBadge/StatusBadge";
import AnimatedBackground from "@/components/UI/Muscles/AinmatedBackground/AnimatedBackground";

interface HeroSectionProps {
  title1?: string;
  title2?: string;
  subtitle1?: string;
  subtitle2?: string;
  badgeText?: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  backgroundType: "Hexagon" | "Circle" | "Alphabet";
  height?: string; // NEW: Add height prop
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
  height = "100vh", // NEW: Default height
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
  
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section 
      className={styles.hero}
      style={{ height }} // NEW: Apply dynamic height
    >
      <div className={styles.container}>
        {showAnimatedCircles && (
          <AnimatedBackground
            type={backgroundType}
            className={styles.animatedBackground}
          />
        )}

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
          <Typography
            variant="h1"
            component="h1"
            animation={mounted ? "textUp" : undefined}
            style={{
              textAlign: "center",
              fontFamily: "Inter, sans-serif",
              fontSize: "clamp(32px, 8vw, 57.684px)",
              fontWeight: 900,
              lineHeight: "1.2",
              letterSpacing: "-0.025em",
              margin: 0,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              padding: "0 20px",
            }}
          >
            <span
              style={{
                color: "#FFFFFF",
                fontFamily: "Inter, sans-serif",
                fontSize: "clamp(32px, 8vw, 57.684px)",
                fontWeight: 900,
                lineHeight: "1.2",
                letterSpacing: "-0.025em",
              }}
            >
              {title1}
            </span>
            <span
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "clamp(32px, 8vw, 57.684px)",
                fontWeight: 900,
                lineHeight: "1.2",
                letterSpacing: "-0.025em",
                textAlign: "center",
                marginTop: "0.5rem",
                background: "linear-gradient(90deg, #D04A1D 0%, #902501 100%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                display: "inline-block",
              }}
            >
              {title2}
            </span>
          </Typography>

          {/* Subtitle */}
          <div className={styles.subtitle}>
            <Typography
              variant="body1"
              component="p"
              animation={mounted ? "textUp" : undefined}
              style={{
                color: "var(--color-azure-65, #9CA3AF)",
                textAlign: "center",
                fontFamily: "var(--font-family-Font-1, Inter)",
                fontSize: "clamp(16px, 3vw, 20px)",
                fontWeight: 400,
                lineHeight: "1.6",
                margin: 0,
                width: "100%",
              }}
            >
              {subtitle1}
            </Typography>
          </div>

          {/* CTA Buttons */}
          {showPrimaryButton || showSecondaryButton? (
            <div
            className={`${styles.ctaButtons} ${mounted ? styles.fadeInUp : ""}`}
            style={{
              animationDelay: "0.5s",
            }}
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
          ) : null}
        </div>

        {/* Trusted Section */}
        {showTrustedSection && (
          <div
            className={`${styles.trustedSection} ${mounted ? styles.fadeInUp : ""}`}
            style={{
              animationDelay: "0.7s",
            }}
          >
            <Typography
              variant="body2"
              component="p"
              style={{
                color: "var(--color-grey-46, #6B7280)",
                textAlign: "center",
                fontFamily: "var(--font-family-Font-1, Inter)",
                fontSize: "clamp(12px, 2vw, 14px)",
                fontWeight: 600,
                lineHeight: "1.4",
                letterSpacing: "0.025em",
                margin: 0,
                width: "100%",
              }}
            >
              {subtitle2}
            </Typography>

            <div className={styles.companiesGrid}>
              <div className={styles.companyLogo}>
                <Image
                  src="/assets/SkyTecIcon.svg"
                  alt="SkyTech"
                  width={120}
                  height={24}
                />
                <Typography
                  variant="body1"
                  component="span"
                  style={{
                    color: "var(--color-azure-84, #D1D5DB)",
                    textAlign: "center",
                    fontFamily: "var(--font-family-Font-1, Inter)",
                    fontSize: "var(--line-height-20, 20px)",
                    fontStyle: "normal",
                    fontWeight: "var(--font-weight-700, 700)",
                    lineHeight: "var(--line-height-28, 28px)",
                    marginLeft: "8px",
                  }}
                >
                  SkyTech
                </Typography>
              </div>
              <div className={styles.companyLogo}>
                <Image
                  src="/assets/ChicnBlockIcon.svg"
                  alt="ChainBlock"
                  width={120}
                  height={24}
                />
                <Typography
                  variant="body1"
                  component="span"
                  style={{
                    color: "var(--color-azure-84, #D1D5DB)",
                    textAlign: "center",
                    fontFamily: "var(--font-family-Font-1, Inter)",
                    fontSize: "var(--line-height-20, 20px)",
                    fontStyle: "normal",
                    fontWeight: "var(--font-weight-700, 700)",
                    lineHeight: "var(--line-height-28, 28px)",
                    marginLeft: "8px",
                  }}
                >
                  ChainBlock
                </Typography>
              </div>
              <div className={styles.companyLogo}>
                <Image
                  src="/assets/NexusPointIcon.svg"
                  alt="NexusPoint"
                  width={120}
                  height={24}
                />
                <Typography
                  variant="body1"
                  component="span"
                  style={{
                    color: "var(--color-azure-84, #D1D5DB)",
                    textAlign: "center",
                    fontFamily: "var(--font-family-Font-1, Inter)",
                    fontSize: "var(--line-height-20, 20px)",
                    fontStyle: "normal",
                    fontWeight: "var(--font-weight-700, 700)",
                    lineHeight: "var(--line-height-28, 28px)",
                    marginLeft: "8px",
                  }}
                >
                  NexusPoint
                </Typography>
              </div>
              <div className={styles.companyLogo}>
                <Image
                  src="/assets/AplexIcon.svg"
                  alt="Apex"
                  width={80}
                  height={24}
                />
                <Typography
                  variant="body1"
                  component="span"
                  style={{
                    color: "var(--color-azure-84, #D1D5DB)",
                    textAlign: "center",
                    fontFamily: "var(--font-family-Font-1, Inter)",
                    fontSize: "var(--line-height-20, 20px)",
                    fontStyle: "normal",
                    fontWeight: "var(--font-weight-700, 700)",
                    lineHeight: "var(--line-height-28, 28px)",
                    marginLeft: "8px",
                  }}
                >
                  Apex
                </Typography>
              </div>
              <div className={styles.companyLogo}>
                <Image
                  src="/assets/VelocityIcon.svg"
                  alt="Velocity"
                  width={100}
                  height={24}
                />
                <Typography
                  variant="body1"
                  component="span"
                  style={{
                    color: "var(--color-azure-84, #D1D5DB)",
                    textAlign: "center",
                    fontFamily: "var(--font-family-Font-1, Inter)",
                    fontSize: "var(--line-height-20, 20px)",
                    fontStyle: "normal",
                    fontWeight: "var(--font-weight-700, 700)",
                    lineHeight: "var(--line-height-28, 28px)",
                    marginLeft: "8px",
                  }}
                >
                  Velocity
                </Typography>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default React.memo(HeroSection);