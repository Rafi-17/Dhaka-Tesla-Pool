'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Zap, Car, Users, History, LogIn } from 'lucide-react';

export default function Navbar() {
  const pathname = usePathname();

  const navLinks = [
    { href: '/', label: 'Overview', icon: Zap },
    { href: '/passenger', label: 'Book Ride', icon: Users },
    { href: '/driver', label: 'Driver Portal', icon: Car },
    { href: '/history', label: 'Trip History', icon: History }
  ];

  return (
    <header className="navbar bg-base-100/90 backdrop-blur-md border-b border-base-200/80 px-4 md:px-8 sticky top-0 z-50">
      <div className="flex-1">
        <Link 
          href="/" 
          className="btn btn-ghost px-2 normal-case text-lg md:text-xl font-black tracking-wider flex items-center gap-2"
        >
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-primary-content shadow-md shadow-primary/30">
            <span className="font-mono font-bold text-sm">T</span>
          </div>
          <span>
            DHAKA <span className="text-primary font-mono tracking-tight">TESLA</span> POOL
          </span>
        </Link>
      </div>

      <div className="flex-none hidden md:flex items-center gap-2">
        <div className="flex items-center gap-1 mr-2">
          {navLinks.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`btn btn-sm ${
                  isActive 
                    ? 'btn-primary text-primary-content shadow-sm' 
                    : 'btn-ghost text-base-content/80 hover:text-base-content'
                } flex items-center gap-1.5`}
              >
                <Icon className="w-4 h-4" />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </div>

        <Link href="/login" className="btn btn-sm btn-outline border-base-300 hover:border-primary">
          <LogIn className="w-4 h-4" />
          <span>Sign In</span>
        </Link>
      </div>

      {/* Mobile Dropdown */}
      <div className="dropdown dropdown-end md:hidden">
        <label tabIndex={0} className="btn btn-ghost btn-circle btn-sm">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </label>
        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-50 p-2 shadow-xl bg-base-100 rounded-box w-52 border border-base-200">
          {navLinks.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className={pathname === item.href ? 'active text-primary' : ''}>
                {item.label}
              </Link>
            </li>
          ))}
          <div className="divider my-1"></div>
          <li>
            <Link href="/login" className="text-primary font-medium">
              Sign In
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}