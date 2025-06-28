'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { Home, User, Calculator, Menu, X } from 'lucide-react';
import app from '../../../config'; // 🔧 Adjust this if needed
import { getAuth, onAuthStateChanged, signOut, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import Image from 'next/image';

const NavBar = () => {
  const [user, setUser] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const auth = getAuth(app);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, setUser);
    return () => unsubscribe();
  }, [auth]);

  const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error("Google Sign-In Error:", error);
    }
  };

  const handleAuthClick = () => {
    if (user) {
      signOut(auth).then(() => router.push('/'));
    } else {
      signInWithGoogle();
    }
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navLinks = [
    { path: '/', name: 'Home', icon: <Home size={20} /> },
    { path: '/mortgage-calculator', name: 'Mortgage Calculator', icon: <Calculator size={20} /> },
  ];

  return (
    <nav className="bg-[#1A1A1A] sticky top-0 z-50 border-b border-gray-800 shadow-md">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center" onClick={closeMenu}>
            <Home className="h-8 w-8 text-purple-500" />
            <span className="ml-2 text-xl font-semibold text-white hover:text-purple-500">
              TrendSeer
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                onClick={closeMenu}
                className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 
                  ${pathname === link.path
                    ? 'text-purple-400 bg-[#232323]'
                    : 'text-gray-300 hover:text-purple-400 hover:bg-[#232323]'}
                `}
              >
                {link.icon}
                <span className="ml-2">{link.name}</span>
              </Link>
            ))}

            {/* Login/Logout */}
            <button
              onClick={handleAuthClick}
              className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-purple-400 hover:bg-[#232323] transition"
            >
              <User size={20} />
              <span className="ml-2">{user ? 'Logout' : 'Login / Register'}</span>
            </button>

            {/* Profile Info */}
            {user && (
              <div className="flex items-center ml-4 gap-2">
                <img
                  src={user.photoURL}
                  alt="Profile"
                  className="w-8 h-8 rounded-full border-2 border-purple-500"
                />
                {console.log("👤 PhotoURL:", user?.photoURL)}
                <span className="text-sm text-white font-medium">{user.displayName}</span>
              </div>
            )}
          </div>

          {/* Mobile Menu Button (optional future) */}
          {/* Add responsive logic if you want mobile menu */}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
