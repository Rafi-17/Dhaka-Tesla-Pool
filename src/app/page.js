import Link from 'next/link';
import { Car, Users, MapPin, ArrowRight } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="space-y-8 py-6">
      {/* Hero Banner */}
      <div className="hero bg-base-200 rounded-2xl p-8 border border-base-100 shadow-sm">
        <div className="hero-content text-center max-w-2xl">
          <div>
            <div className="badge badge-primary badge-outline mb-3">Model 3 Fleet Active</div>
            <h1 className="text-4xl font-extrabold tracking-tight">Dhaka Tesla Fleet Pooling</h1>
            <p className="py-4 text-sm md:text-base opacity-80">
              Shared electric transit connecting Banani, Gulshan, and Mohakhali. Reduce congestion, lower emissions, and cut ride fares automatically through pooled seat sharing.
            </p>
            <div className="flex justify-center gap-4 mt-2">
              <Link href="/passenger" className="btn btn-primary">
                Book a Seat <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
              <Link href="/driver" className="btn btn-secondary btn-outline">
                Driver Dispatch
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Corridor & Character Matrix */}
      <div className="grid md:grid-cols-3 gap-6">
        <div className="card bg-base-100 border border-base-200 shadow-sm">
          <div className="card-body">
            <h2 className="card-title text-base flex items-center gap-2">
              <Car className="w-5 h-5 text-primary" /> Vehicle Bullet
            </h2>
            <p className="text-xs opacity-75">
              Assigned to driver <strong>Jashim</strong>. Dedicated 3-passenger seating capacity servicing North-Central Dhaka corridors.
            </p>
          </div>
        </div>

        <div className="card bg-base-100 border border-base-200 shadow-sm">
          <div className="card-body">
            <h2 className="card-title text-base flex items-center gap-2">
              <MapPin className="w-5 h-5 text-secondary" /> Active Corridor
            </h2>
            <p className="text-xs opacity-75">
              Primary route: <strong>Banani → Mohakhali / Gulshan</strong>. Trips sharing departure zones automatically merge into shared pools.
            </p>
          </div>
        </div>

        <div className="card bg-base-100 border border-base-200 shadow-sm">
          <div className="card-body">
            <h2 className="card-title text-base flex items-center gap-2">
              <Users className="w-5 h-5 text-accent" /> Test Cast
            </h2>
            <p className="text-xs opacity-75">
              Configured with passengers <strong>Nusrat</strong>, <strong>Rafiq</strong>, and <strong>Shirin</strong> for testing 25% pool fare discounts.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}