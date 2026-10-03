'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useAuth } from '@/providers/AuthProvider';
import { Eye, EyeOff } from 'lucide-react';
import toast from 'react-hot-toast';

export default function RegisterPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  
  // Consolidating all field errors into a single object
  const [fieldErrors, setFieldErrors] = useState({});  
  const { registerUser, updateUserProfile } = useAuth();
  const router = useRouter();

  const handleRegister = async (e) => {
    e.preventDefault();
    
    // 1. Custom Form Validation
    const errors = {};
    if (!name.trim()) errors.name = 'Full name is required.';
    if (!email.trim()) errors.email = 'Email is required.';
    if (!password) {
      errors.password = 'Password is required.';
    } else if (password.length < 6) {
      errors.password = 'Password must be at least 6 characters long.';
    }

    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      return;
    }
    
    // Clear field errors if validation passes
    setFieldErrors({});
    
    // 2. Firebase Registration
    try {
      await registerUser(email, password);
      await updateUserProfile({ displayName: name });
      toast.success('Account created successfully!'); // Success toast
      router.push('/passenger');
    } catch (err) {
      console.error(err);
      toast.error(
        err.message.includes('email-already-in-use') 
          ? 'This email is already registered.' 
          : 'Failed to create account. Please try again.'
      ); // Error toast
    }
  };

  return (
    <div className="flex items-center justify-center min-h-[70vh] px-4 md:px-0">
      <div className="card w-full max-w-md bg-base-100 shadow-xl border border-base-200">
        <div className="card-body p-6 md:p-8">
          <h2 className="card-title text-2xl font-bold justify-center mb-2 text-primary">
            Create an Account
          </h2>
          <p className="text-center text-sm text-base-content/70 mb-4">
            Join the Dhaka Tesla Pool
          </p>
          

          {/* noValidate stops the default browser tooltips */}
          <form onSubmit={handleRegister} noValidate className="space-y-4">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text font-medium">Full Name</span>
              </label>
              <input 
                type="text" 
                placeholder="Enter your full name" 
                className={`input input-bordered w-full focus:outline-none focus:ring-1 transition-all ${
                  fieldErrors.name ? 'border-error focus:border-error focus:ring-error' : 'focus:border-primary focus:ring-primary'
                }`}
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                  if (fieldErrors.name) setFieldErrors({ ...fieldErrors, name: '' });
                }}
              />
              {fieldErrors.name && (
                <span className="text-error text-xs mt-1.5 font-medium">{fieldErrors.name}</span>
              )}
            </div>

            <div className="form-control w-full">
              <label className="label">
                <span className="label-text font-medium">Email</span>
              </label>
              <input 
                type="email" 
                placeholder="name@example.com" 
                className={`input input-bordered w-full focus:outline-none focus:ring-1 transition-all ${
                  fieldErrors.email ? 'border-error focus:border-error focus:ring-error' : 'focus:border-primary focus:ring-primary'
                }`} 
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (fieldErrors.email) setFieldErrors({ ...fieldErrors, email: '' });
                }}
              />
              {fieldErrors.email && (
                <span className="text-error text-xs mt-1.5 font-medium">{fieldErrors.email}</span>
              )}
            </div>

            <div className="form-control w-full">
              <label className="label">
                <span className="label-text font-medium">Password</span>
              </label>
              <div className="relative">
                <input 
                  type={showPassword ? "text" : "password"} 
                  placeholder="••••••••" 
                  className={`input input-bordered w-full focus:outline-none focus:ring-1 transition-all placeholder:opacity-40 pr-10 ${
                    fieldErrors.password ? 'border-error focus:border-error focus:ring-error' : 'focus:border-primary focus:ring-primary'
                  }`}
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    if (fieldErrors.password) setFieldErrors({ ...fieldErrors, password: '' });
                  }}
                />
                {password.length > 0 && (
                  <button 
                    type="button"
                    onClick={() => setShowPassword(!showPassword)} 
                    className="absolute right-3 top-[12px] text-base-content/50 hover:text-primary focus:outline-none transition-colors"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                )}
              </div>
              {fieldErrors.password && (
                <span className="text-error text-xs mt-1.5 font-medium">{fieldErrors.password}</span>
              )}
            </div>

            <div className="card-actions mt-6">
              <button type="submit" className="btn btn-primary w-full">
                Register
              </button>
            </div>
          </form>

          <div className="text-center mt-4 text-sm">
            <span className="text-base-content/70">Already have an account? </span>
            <Link href="/login" className="text-primary font-semibold hover:underline">
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}