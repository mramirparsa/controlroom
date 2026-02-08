import { SectionNav } from "@/shared/components/SectionNav";

export default function OrdersLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="space-y-6">
      <SectionNav sectionId="orders" />
      {children}
    </div>
  );
}
