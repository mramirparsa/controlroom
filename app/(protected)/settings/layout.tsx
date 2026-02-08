import { SectionNav } from "@/shared/components/SectionNav";

export default function SettingsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="space-y-6">
      <SectionNav sectionId="settings" />
      {children}
    </div>
  );
}
