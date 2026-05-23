// components/pages/Portfolio/PortfolioPage.tsx
"use client";

import React, { useMemo, useState } from "react";
import HeroSection from "@/components/Layout/HeroSection/HeroSection";
import ProjectsGrid from "@/components/Section/PortfolioPage/ProjectsGrid.tsx/ProjectsGrid";
import styles from "./PortfolioPage.module.css";
import ProjectPageButtons from "@/components/Molecules/ProjectPageButtons/ProjectPageButtons";
import { ProjectItem } from "@/service/Projects/projects";
import { ServiceItem } from "@/service/Services/services";

interface Props {
  projects: ProjectItem[];
  services: ServiceItem[];
  locale: "en" | "ar";
}

const PortfolioPage = ({ projects, services, locale }: Props) => {
  const [activeFilter, setActiveFilter] = useState("All");

  // Build filter list from services
  const filters = useMemo(() => {
    const titles = services
      .map(
        (s) =>
          typeof s.title === "string"
            ? s.title // ← API returns plain string
            : (s.title as any)[locale] || (s.title as any).en, // ← fallback if localized
      )
      .filter((t): t is string => typeof t === "string" && t.trim() !== "");
    return ["All", ...Array.from(new Set(titles))];
  }, [services, locale]);

  console.log("Filters:", filters);
  console.log("Active Filter:", activeFilter);

  // Filter projects by active filter
  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") return projects;

    return projects.filter(
      (project) =>
        project.technology_stack?.includes(activeFilter) ||
        project.status === activeFilter ||
        project.services?.some(
          (s) =>
            s.services_id.title.en === activeFilter ||
            s.services_id.title.ar === activeFilter,
        ),
    );
  }, [activeFilter, projects]);

  // Transform to grid format
  const transformedProjects = useMemo(
    () =>
      filteredProjects.map((project) => {
        const getStr = (field: any) =>
          typeof field === "string"
            ? field
            : field?.[locale] || field?.en || "";

        return {
          id: project._id,
          title: getStr(project.title) || "Untitled",
          category:
            getStr(project.services?.[0]?.services_id?.title) ||
            project.technology_stack?.[0] ||
            "General",
          percentage: project.case_study_results?.[0]?.value || "+50%",
          description:
            getStr(project.case_study_results?.[0]?.description) ||
            "Project description",
          imageUrl: project.main_image_url || "/assets/ProjectImage.png",
        };
      }),
    [filteredProjects, locale],
  );

  return (
    <div className={styles.portfolioPage}>
      <HeroSection
        title1="Architecting the Future of"
        title2="Digital Business."
        subtitle1="At Axuraa, we don't just write code. We build the digital infrastructure that powers the world's most ambitious companies."
        badgeText="INNOVATION IN PROGRESS"
        showBackgroundDots={false}
        showAnimatedCircles={true}
        showBadge={false}
        showTrustedSection={false}
        showPrimaryButton={true}
        showSecondaryButton={false}
        showEllipseDecorations={true}
        showStatusBadge={true}
        backgroundType="Circle"
        height="75vh"
      />

      <div className={styles.projectsSection}>
        <ProjectPageButtons
          activeFilter={activeFilter}
          onFilterChange={setActiveFilter}
          filters={filters}
        />
        <div className={styles.container}>
          {transformedProjects.length === 0 ? (
            <div className={styles.sectionError}>No projects found.</div>
          ) : (
            <ProjectsGrid projects={transformedProjects} locale={locale} />
          )}
        </div>
      </div>
    </div>
  );
};

export default React.memo(PortfolioPage);
