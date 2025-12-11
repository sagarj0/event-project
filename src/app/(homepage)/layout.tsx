import { Footer } from '@/components/layout-related/footer';
import { Navbar } from '@/components/layout-related/navbar';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'KOI Event Tracker',
  description: 'KOI Event Tracker',
};

export default function HomeLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Navbar />
      <main className="flex flex-col items-stretch gap-4 overflow-y-auto">{children}</main>
      <Footer />
    </>
  );
}
