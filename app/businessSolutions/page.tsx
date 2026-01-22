"use client"
import dynamic from 'next/dynamic';
import { appWithTranslation } from 'next-i18next';


const BusinessSolutions = dynamic(
  () => import("@/components/pages/BusinessSolutions/BusinessSolutions"),
  { ssr: false }
);

function BusinessSolutionsPage() {
  return <BusinessSolutions />;
}

export default appWithTranslation(BusinessSolutionsPage);