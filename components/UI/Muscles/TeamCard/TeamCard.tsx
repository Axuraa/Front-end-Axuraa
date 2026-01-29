import React from "react";
import styles from "./TeamCard.module.css";
import Typography from "@/components/UI/Atoms/Typography/Typography";

import { TeamCardProps } from "@/types/AboutUsPage/Team/TeamCard";
import Image from "next/image";

const TeamCard: React.FC<TeamCardProps> = ({ name, role, imageUrl }) => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.imageContainer}>
          <Image
            src={imageUrl}
            alt={name}
            layout="fill"
            objectFit="cover"
            className={styles.image}
          />
          <div className={styles.nameOverlay}>
            <Typography variant="h6" color="#ffffff">
              {name}
            </Typography>
          </div>
        </div>
        
      </div>
      <div className={styles.roleSection}>
          <Typography variant="h4" color="#ffffff" className={styles.role}>
            {role}
          </Typography>
        </div>
    </div>
  );
};

export default TeamCard;
