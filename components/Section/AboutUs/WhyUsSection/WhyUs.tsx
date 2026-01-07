import React from "react";
import styles from "./WhyUs.module.css";
import Card from "@/components/UI/Muscles/ValueCard/ValueCard";
import Typography from "@/components/UI/Atoms/Typography/Typography";

const WhyUs: React.FC = () => {
  const values = [
    {
      iconSrc: "/assets/psychology.svg",
      title: "Innovation First",
      description:
        "We constantly explore new technologies to keep you ahead of the curve.",
    },
    {
      iconSrc: "/assets/shield.svg",
      title: "Integrity",
      description:
        "Transparency in every step. No hidden costs or surprises, just honest work.",
    },
    {
      iconSrc: "/assets/group.svg",
      title: "Partnership",
      description:
        "We work with you, not just for you. Your business goals become our goals.",
    },
    {
      iconSrc: "/assets/rocket.svg",
      title: "Agile Execution",
      description:
        "Rapid delivery and iterative improvement for faster, better results.",
    },
  ];

  return (
    <section className={styles.whyUsSection} aria-labelledby="why-us-heading">
      <div className={styles.container}>
        {/* Header Section */}
        <div className={styles.header}>
          <Typography
            variant="h3"
            component="h3"
            style={{
              textAlign: "center",
              fontFamily: "Roboto",
              fontSize: "var(--font-size-72, 72px)",
              fontStyle: "normal",
              fontWeight: 900,
              lineHeight: " 100px",
              letterSpacing: "var(--letter-spacing--1_8, -1.8px)",
              margin: " 0 0 2rem 0",
              animation: "fadeInUp 0.8s ease-out",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center", // Center content vertically
              alignItems: "center",
            }}
            className={styles.title}
          >
            <span
              style={{
                color: "#FFFFFF",
                fontFamily: "Inter, sans-serif",
                fontSize: "4rem",
                fontWeight: 900,
                lineHeight: "4.5rem",
                letterSpacing: "-1.442px",
              }}
            >
              Why Axuraa?
            </span>
          </Typography>

          <Typography variant="body1" component="p" className={styles.subtitle}>
            Our culture is built on principles that ensure we deliver not just
            code, but tangible business value.
          </Typography>
        </div>

        {/* Cards Grid */}
        <div className={styles.cardsGrid}>
          {values.map((value, index) => (
            <Card
              key={index}
              icon={value.iconSrc}
              title={value.title}
              description={value.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default React.memo(WhyUs);
