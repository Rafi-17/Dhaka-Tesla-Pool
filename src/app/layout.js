import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { AuthProvider } from '@/providers/AuthProvider';
import { Toaster } from 'react-hot-toast';

export const metadata = {
  title: 'Dhaka Tesla Pool | Bullet Dispatch System',
  description: 'Shared 3-seater electric dispatch connecting Banani, Gulshan, and Mohakhali',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="dhakatesla">
      <body className="min-h-screen bg-base-300 text-base-content flex flex-col antialiased selection:bg-primary selection:text-white">
        <Toaster 
          position="top-center" 
          toastOptions={{
            style: {
              background: 'var(--color-base-100)',
              color: 'var(--color-base-content)',
              border: '1px solid var(--color-base-200)'
            }
          }} 
        />
        <AuthProvider>
          <Navbar />
          <main className="flex-1 max-w-7xl w-full mx-auto p-4 md:p-6 lg:p-8">
            {children}
          </main>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}