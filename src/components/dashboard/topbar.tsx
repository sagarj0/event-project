import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList } from '@/components/ui/breadcrumb';
import { Separator } from '@/components/ui/separator';
import { SidebarTrigger } from '@/components/ui/sidebar';
import { ModeToggle } from '../theme-related/mode-toggle';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { BellIcon } from 'lucide-react';

export const DashboardTopbar = () => {
  return (
    <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
      <SidebarTrigger className="-ml-1" />
      <Separator orientation="vertical" className="mr-2 data-[orientation=vertical]:h-4" />
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem className="hidden md:block">
            <BreadcrumbLink href="#">Dashboard</BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="ml-auto flex items-center gap-2">
        <ModeToggle />
        <Separator orientation="vertical" className="mr-2 data-[orientation=vertical]:h-4" />
        <BellIcon size={16} />
        <Separator orientation="vertical" className="mx-2 data-[orientation=vertical]:h-4" />
        <div className="flex items-center bg-soft hover:bg-primary-soft rounded-md p-1 gap-1">
          <Avatar>
            <AvatarImage />
            <AvatarFallback>SJ</AvatarFallback>
          </Avatar>
          <p className="">Sagar Joshi</p>
        </div>
      </div>
    </header>
  );
};
