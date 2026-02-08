import { SectionNav } from "@/shared/components/SectionNav";

export default function CatalogLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="space-y-6">
      <SectionNav sectionId="catalog" />
      {children}
    </div>
  );
}
