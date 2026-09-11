import { AdminSidebar } from "@/components/admin/AdminSidebar";

export default function ProtectedAdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col bg-ink-900/[0.02] md:flex-row">
      <AdminSidebar />
      <main className="flex-1 p-6">{children}</main>
    </div>
  );
}
