"use client";

import { useParams } from "next/navigation";
import { SectionPage } from "@/shared/components/SectionPage";

export default function ContentTabPage() {
  const params = useParams();
  const tab = Array.isArray(params.tab) ? params.tab[0] : params.tab;
  return <SectionPage sectionId="content" tabId={String(tab)} />;
}
