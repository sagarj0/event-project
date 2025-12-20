import { SidebarMenu, SidebarMenuItem } from '@/components/ui/sidebar';
import Image from 'next/image';

export function SidebarLogo() {
  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <Image src="/long-logo.png" alt="KOI Logo" width={110} height={64} className="ml-2" />
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
