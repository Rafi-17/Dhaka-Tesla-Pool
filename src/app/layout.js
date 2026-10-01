import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Dhaka Tesla Pool | Bullet Dispatch System',
  description: 'Shared 3-seater electric dispatch connecting Banani, Gulshan, and Mohakhali',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="dhakatesla">
      <body className="min-h-screen bg-base-300 text-base-content flex flex-col antialiased selection:bg-primary selection:text-white">
        <Navbar />
        <main className="flex-1 max-w-7xl w-full mx-auto p-4 md:p-6 lg:p-8">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}