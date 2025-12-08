import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-[80vh] flex flex-col space-y-6">
      <div>
        <h1>Welcome to KOI Event Tracker</h1>
        <p>Track and manage your events seamlessly.</p>
        <Image src="/long-logo.png" alt="KOI Logo" width={200} height={200} />
      </div>
    </div>
  );
}
