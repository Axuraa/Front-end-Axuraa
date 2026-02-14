// app/service/page.tsx
import ServicePage from "@/components/pages/ServicePage/ServicePage";
import { use } from "react";

interface PageProps {
  params: Promise<{
    serviceId: string;
    locale: string;
  }>;
}

export default function ServicePageWrapper({ params }: PageProps) {
  const resolvedParams = use(params);
  return <ServicePage serviceId={resolvedParams.serviceId} />;
}