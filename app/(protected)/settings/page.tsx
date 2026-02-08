import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function SettingsPage() {
  return (
    <Card className="border-white/10 bg-white/5">
      <CardHeader>
        <CardTitle>Settings</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-white/60">Manage profile, security, and organization preferences.</p>
        <div className="flex flex-wrap gap-3">
          <Button asChild variant="outline" className="border-white/10 text-white">
            <Link href="/settings/profile">Profile</Link>
          </Button>
          <Button asChild variant="outline" className="border-white/10 text-white">
            <Link href="/settings/security">Security</Link>
          </Button>
          <Button asChild variant="outline" className="border-white/10 text-white">
            <Link href="/settings/organization">Organization</Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
