"use client";

import { useParams } from "next/navigation";
import { SectionPage } from "@/shared/components/SectionPage";

export default function IntegrationsTabPage() {
  const params = useParams();
  const tab = Array.isArray(params.tab) ? params.tab[0] : params.tab;
  return <SectionPage sectionId="integrations" tabId={String(tab)} />;
}
