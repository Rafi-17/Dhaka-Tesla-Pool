'use client';

import { useAuth } from '@/providers/AuthProvider';

export default function PassengerDashboard() {
  const { user } = useAuth();

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center space-y-4">
      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
        <span className="text-2xl font-bold text-primary">
          {user?.displayName?.charAt(0).toUpperCase() || 'P'}
        </span>
      </div>
      <h1 className="text-3xl font-bold">
        Welcome, {user?.displayName || 'Passenger'}!
      </h1>
      <p className="text-base-content/70 max-w-md">
        Your authentication flow is completely wired up. The ride request form will be built here.
      </p>
    </div>
  );
}