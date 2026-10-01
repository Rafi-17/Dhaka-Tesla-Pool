export default function Footer() {
  return (
    <footer className="footer footer-center p-6 bg-base-200/60 text-base-content/70 text-xs border-t border-base-200">
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-7xl px-4 gap-2">
        <p>
          <strong className="text-base-content">Dhaka Tesla Pool</strong> — Dynamic corridor seat-sharing fleet system.
        </p>
        <div className="flex gap-2">
          <span className="badge badge-sm badge-neutral">Standard Vehicle: 3 Seats Max</span>
          <span className="badge badge-sm badge-outline badge-success">Corridor Active</span>
        </div>
      </div>
    </footer>
  );
}