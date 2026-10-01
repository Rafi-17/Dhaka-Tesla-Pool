import './globals.css';
import Link from 'next/link';
import { Car, ShieldCheck, Zap } from 'lucide-react';

export const metadata = {
  title: 'Dhaka Tesla Pool | Bullet Dispatch',
  description: 'Shared electric Tesla fleet dispatch service across Dhaka corridors',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="dark">
      <body className="min-h-screen bg-base-300 text-base-content flex flex-col">
        {/* Navigation Bar */}
        <header className="navbar bg-base-100 border-b border-base-200 px-4 md:px-8">
          <div className="flex-1">
            <Link href="/" className="btn btn-ghost text-xl font-bold tracking-wider flex items-center gap-2">
              <Zap className="text-warning w-5 h-5" />
              <span>DHAKA <span className="text-primary">TESLA</span> POOL</span>
            </Link>
          </div>
          <div className="flex-none gap-2">
            <Link href="/passenger" className="btn btn-sm btn-ghost">Passenger</Link>
            <Link href="/driver" className="btn btn-sm btn-outline btn-primary">Driver (Jashim)</Link>
          </div>
        </header>

        {/* Dynamic Content */}
        <main className="flex-1 max-w-7xl w-full mx-auto p-4 md:p-6">
          {children}
        </main>

        {/* Footer */}
        <footer className="footer footer-center p-4 bg-base-200 text-base-content text-xs border-t border-base-100">
          <div>
            <p>Dhaka Tesla Pool — Low-carbon shared dispatch system for Dhaka corridors</p>
          </div>
        </footer>
      </body>
    </html>
  );
}