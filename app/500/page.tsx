import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function ErrorRoutePage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950 text-white">
      <div className="max-w-md text-center">
        <h1 className="text-4xl font-semibold">500</h1>
        <p className="mt-3 text-white/60">Something went wrong. Please try again.</p>
        <div className="mt-6 flex justify-center gap-3">
          <Button asChild variant="secondary">
            <Link href="/dashboard">Back to dashboard</Link>
          </Button>
          <Button asChild variant="outline" className="border-white/10 text-white">
            <Link href="/login">Sign in</Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
