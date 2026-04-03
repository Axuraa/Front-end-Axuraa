import React from "react";
import styles from "./WhyUs.module.css";
import Card from "@/components/UI/Muscles/ValueCard/ValueCard";
import SectionHeader from "@/components/Layout/SectionHeader/SectionHeader";
import StatusBadge from "@/components/UI/Atoms/StatusBadge/StatusBadge";
import useClientTranslation from "@/hooks/useClientTranslation";

const WhyUs: React.FC = () => {
  const { t } = useClientTranslation('about');
  
  const values = [
    {
      iconSrc: "/assets/psychology.svg",
      title: t('whyUs.innovation.title', "Innovation First"),
      description: t('whyUs.innovation.description', "We constantly explore new technologies to keep you ahead of the curve."),
    },
    {
      iconSrc: "/assets/shield.svg",
      title: t('whyUs.integrity.title', "Integrity"),
      description: t('whyUs.integrity.description', "Transparency in every step. No hidden costs or surprises, just honest work."),
    },
    {
      iconSrc: "/assets/group.svg",
      title: t('whyUs.partnership.title', "Partnership"),
      description: t('whyUs.partnership.description', "We work with you, not just for you. Your business goals become our goals."),
    },
    {
      iconSrc: "/assets/rocket.svg",
      title: t('whyUs.agile.title', "Agile Execution"),
      description: t('whyUs.agile.description', "Rapid delivery and iterative improvement for faster, better results."),
    },
  ];

  return (
    <section className={styles.whyUsSection} aria-labelledby="why-us-heading">
      <div className={styles.container}>
        {/* Header Section */}
        <div className={styles.header}>
          <StatusBadge text={t('whyUs.badge', "AXURAA")} className={styles.badge} />
          <SectionHeader
            // title1="Why"
            // title2="Axuraa?"
            // title1="Our"
            title2={t('whyUs.title', "WhyAxuraa?")}
            subtitle={t('whyUs.subtitle', "Our culture is built on principles that ensure we deliver not just code, but tangible business value.")}
          />
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
