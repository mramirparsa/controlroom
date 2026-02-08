import { SectionNav } from "@/shared/components/SectionNav";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="space-y-6">
      <SectionNav sectionId="dashboard" />
      {children}
    </div>
  );
}
