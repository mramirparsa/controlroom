"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { getSectionById } from "@/shared/lib/sectionNavigation";

export const SectionNav = ({ sectionId }: { sectionId: string }) => {
  const pathname = usePathname();
  const section = getSectionById(sectionId);

  if (!section) return null;

  return (
    <div className="material-surface rounded-3xl border border-border/60 px-4 py-3">
      <div className="flex flex-wrap gap-2">
        {section.children.map((child, index) => {
          const href = `${section.href}/${child.id}`;
          const isRootFallback =
            index === 0 &&
            pathname.startsWith(section.href) &&
            !section.children.some((entry) => pathname.startsWith(`${section.href}/${entry.id}`));
          const isActive =
            pathname === href ||
            pathname.startsWith(`${href}/`) ||
            (index === 0 && pathname === section.href) ||
            isRootFallback;

          return (
            <Link
              key={child.id}
              href={href}
              className={`rounded-full px-4 py-2 text-sm transition duration-300 motion-smooth ${
                isActive
                  ? "bg-primary text-primary-foreground shadow-[0_8px_30px_rgba(59,130,246,0.3)]"
                  : "bg-foreground/5 text-foreground/70 hover:bg-foreground/10"
              }`}
            >
              {child.label}
            </Link>
          );
        })}
      </div>
    </div>
  );
};
