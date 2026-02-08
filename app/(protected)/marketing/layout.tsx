import { SectionNav } from "@/shared/components/SectionNav";

export default function MarketingLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="space-y-6">
      <SectionNav sectionId="marketing" />
      {children}
    </div>
  );
}
