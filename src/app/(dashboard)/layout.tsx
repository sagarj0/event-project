import { DashboardSidebar } from '@/components/dashboard/sidebar';
import { DashboardTopbar } from '@/components/dashboard/topbar';
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'KOI Event Tracker Dashboard',
  description: 'KOI Event Tracker Dashboard',
};

export default function DashboardLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <SidebarProvider>
        <DashboardSidebar />
        <SidebarInset>
          <DashboardTopbar />
          <main className="flex flex-col items-stretch gap-4 overflow-y-auto p-4">{children}</main>
        </SidebarInset>
      </SidebarProvider>
    </>
  );
}
