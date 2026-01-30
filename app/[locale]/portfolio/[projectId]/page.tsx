import { use } from 'react';
import CaseStudyPage from '@/components/pages/CaseStudyPage/CaseStudyPage';

interface PageProps {
  params: Promise<{
    projectId: string;
    locale: string;
  }>;
}

export default function ProjectPageWrapper({ params }: PageProps) {
  const resolvedParams = use(params);
  return <CaseStudyPage projectId={resolvedParams.projectId} />;
}
