import { SectionNav } from "@/shared/components/SectionNav";

export default function SystemLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="space-y-6">
      <SectionNav sectionId="system" />
      {children}
    </div>
  );
}
