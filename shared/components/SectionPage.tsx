"use client";

import { SectionTemplate } from "@/shared/components/SectionTemplate";
import { getSectionById, getSectionChild } from "@/shared/lib/sectionNavigation";

export const SectionPage = ({ sectionId, tabId }: { sectionId: string; tabId?: string }) => {
  const section = getSectionById(sectionId);
  const child = tabId ? getSectionChild(sectionId, tabId) : (section?.children[0] ?? null);

  if (!section || !child) return null;

  return (
    <SectionTemplate
      title={`${section.label} · ${child.label}`}
      description={child.description}
      variant={child.variant ?? "metrics"}
      seed={`${section.id}-${child.id}`}
    />
  );
};
