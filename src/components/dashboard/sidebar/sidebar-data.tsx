import { ROUTES } from '@/lib/routes';
import {
  BellDotIcon,
  BellIcon,
  Calendar,
  ChartBar,
  CopyCheckIcon,
  CopyPlusIcon,
  LockIcon,
  LockKeyholeIcon,
  UserIcon,
} from 'lucide-react';
import { usePathname } from 'next/navigation';

type NavData = {
  key: string;
  title?: string;
  url?: string;
  isActive?: boolean;
  items?: NavData[];
  icon?: React.FC;
};

export const useGetSidebarItem = () => {
  const pathname = usePathname();

  const data: NavData[] = [
    {
      key: 'dashboard',
      items: [
        {
          title: 'Dashboard',
          url: 'dashboard',
          key: 'dashboard',
          isActive: pathname === ROUTES.DASHBOARD,
          icon: ChartBar,
        },
      ],
    },
    {
      title: 'Event Mangement',
      key: 'events-manag',
      items: [
        {
          title: 'Active events',
          key: 'events-active',
          icon: CopyCheckIcon,
        },
        {
          title: 'Create Events',
          key: 'create-events',
          icon: CopyPlusIcon,
        },
        {
          title: 'Calender',
          key: 'calender',
          icon: Calendar,
        },
      ],
    },
    {
      title: 'Profile Management',
      key: 'profile-manage',
      items: [
        {
          title: 'Profile',
          key: 'profile',
          icon: UserIcon,
        },
        {
          title: 'Security',
          key: 'sec',
          icon: LockIcon,
        },
      ],
    },
    {
      title: 'Notification Management',
      key: 'notif-manage',
      items: [
        {
          title: 'Notification',
          key: 'notif',
          icon: BellIcon,
        },
        {
          title: 'Bulk Notification',
          key: 'bulk-notif',
          icon: BellDotIcon,
        },
        {
          title: 'Admin notification',
          key: 'admin-notif',
          icon: LockKeyholeIcon,
        },
      ],
    },
  ];

  return data;
};
