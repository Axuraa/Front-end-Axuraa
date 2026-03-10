// components/Sections/HistoryJourney/HistoryJourney.tsx
import React from "react";
import styles from "./HistoryJourney.module.css";
import Typography from "@/components/UI/Atoms/Typography/Typography";
import StatusBadge from "@/components/UI/Atoms/StatusBadge/StatusBadge";
import Step from "@/components/UI/Atoms/Step/Step";
import {
  HistoryJourneyProps,
  HistoryJourneyData,
} from "@/types/AboutUsPage/History/JourneyTypes";

import useClientTranslation from "@/hooks/useClientTranslation";

const HistoryJourney: React.FC<HistoryJourneyProps> = ({ data }) => {
  const { t } = useClientTranslation('about');
  
  // Static data - will be replaced with API data in the future
  const defaultData: HistoryJourneyData = {
    title: t('history.title', "A Journey of Continuous Evolution"),
    timeline: [
      {
        year: "2015",
        title: "The Beginning",
        description:
          "Founded by two engineers with a vision to simplify enterprise software.",
      },
      // ... rest of default data
    ],
  };

  const journeyData = data || defaultData;

  return (
    <section className={styles.history_journey}>
      <div className={styles.container}>
        <div className={styles.header}>
          <StatusBadge text={t('history.badge', 'OUR HISTORY')} className={styles.badge} />

          <Typography
            variant="h2"
            component="h2"
            className={styles.title}
            gutterBottom
          >
            {t(`history.items.${journeyData.title}`, journeyData.title)}
          </Typography>
        </div>

        <div className={styles.timeline}>
          {journeyData.timeline.map((item, index) => (
            <Step
              key={`${item.year}-${index}`}
              year={item.year}
              title={t(`history.items.${item.title}`, item.title)}
              description={t(`history.items.${item.description}`, item.description)}
              isLast={index === journeyData.timeline.length - 1}
              isActive={index === 0}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default React.memo(HistoryJourney);
