import { SectionNav } from "@/shared/components/SectionNav";

export default function AnalyticsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="space-y-6">
      <SectionNav sectionId="analytics" />
      {children}
    </div>
  );
}
