import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: {
    template: '%s | KOI Event Tracker',
    default: 'KOI Event Tracker',
  },
  description: 'KOI Event Tracker',
};

export default function AuthLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <main className="flex flex-col gap-6 items-stretch w-full bg-background justify-center h-screen max-w-[360px] mx-auto relative">
      <Image src="/long-logo.png" alt="KOI Logo" width={120} height={48} className="mx-auto" />
      <div className="absolute top-20">
        <Image src={'/back-decorative-pattern.png'} alt="Decorative Pattern" width={460} height={460} />
      </div>
      {children}
    </main>
  );
}
