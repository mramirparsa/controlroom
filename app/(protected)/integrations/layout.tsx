import { SectionNav } from "@/shared/components/SectionNav";

export default function IntegrationsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="space-y-6">
      <SectionNav sectionId="integrations" />
      {children}
    </div>
  );
}
