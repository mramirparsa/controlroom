import { SectionNav } from "@/shared/components/SectionNav";

export default function UsersLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="space-y-6">
      <SectionNav sectionId="users" />
      {children}
    </div>
  );
}
