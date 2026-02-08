import { SectionNav } from "@/shared/components/SectionNav";

export default function ContentLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="space-y-6">
      <SectionNav sectionId="content" />
      {children}
    </div>
  );
}
