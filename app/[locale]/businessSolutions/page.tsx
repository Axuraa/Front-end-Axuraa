// app/[locale]/business-solutions/page.tsx
import { getAllServices } from "@/service/Services/services";
import BusinessSolutions from "@/components/pages/BusinessSolutions/BusinessSolutions";

interface PageProps {
  params: { locale: string };
}

export default async function BusinessSolutionsPage({ params }: PageProps) {
  const locale = params.locale as "en" | "ar";

  const result = await getAllServices(locale);

  const services =
    result.success && result.data
      ? result.data
          .filter((s) => s.type === "solution" && s.is_active === true)
          .map((service) => ({
            id: service._id,
            title: service.title[locale] || service.title.en,
            description: service.description[locale] || service.description.en,
            features:
              service.what_we_do?.units?.map((u) => u[locale] || u.en) ?? [],
            buttonText: "Learn More",
            iconUrl: service.icon || "/assets/Frame.svg",
          }))
      : [];

  return <BusinessSolutions services={services} locale={locale} />;
}
