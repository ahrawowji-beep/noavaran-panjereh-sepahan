'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Phone, Menu, X, ChevronDown, Building2 } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const navLinks = [
    { href: '/', label: 'خانه' },
    { href: '/about', label: 'درباره ما' },
    { href: '/contact', label: 'ارتباط با ما' },
    { href: '/projects', label: 'پروژه‌ها' },
    { href: '/services', label: 'محصولات' },
    { href: '/articles', label: 'مقالات' },
    { href: '/calculator', label: 'خدمات' },
  ];

  return (
    <header className="sticky top-2 z-50 mx-2 sm:mx-4 my-2">
      <div className="bg-[#2B0814]/90 backdrop-blur-md border border-[#521D2C] rounded-xl px-4 sm:px-6 py-3 flex items-center justify-between shadow-2xl">
        
        {/* RIGHT SIDE: Logo & Brand Name */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-[#EFECE8] text-[#2B0814] flex items-center justify-center rounded-lg shadow-md group-hover:scale-105 transition-transform">
            <Building2 className="w-5 h-5 text-[#2B0814]" />
          </div>
          <div className="text-right">
            <span className="text-base font-black text-white block leading-tight tracking-tight">
              نوآوران پنجره سپاهان
            </span>
            <span className="text-[10px] text-[#D4B038] block tracking-widest uppercase font-mono font-bold">
              NOAVARAN WINDOW SEPAHAN
            </span>
          </div>
        </Link>

        {/* CENTER: Desktop Navigation Links (RTL) */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navLinks.map((link) => {
            const active = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3.5 py-1.5 text-xs font-bold rounded-lg transition-all ${
                  active
                    ? 'bg-[#EFECE8] text-[#2B0814] shadow-sm font-black'
                    : 'text-[#D9C7CF] hover:text-white hover:bg-[#380A1A]'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* LEFT SIDE: Quick Contact & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <a
            href="tel:03142740000"
            className="hidden sm:flex items-center gap-2 px-3.5 py-1.5 bg-[#EFECE8] text-[#2B0814] hover:bg-white text-xs font-black rounded-lg transition-colors border border-[#D4B038]"
          >
            <Phone className="w-3.5 h-3.5 text-[#2B0814]" />
            <span>تماس فوری: ۰۳۱-۴۲۷۴۰۰۰۰</span>
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 bg-[#380A1A] text-white hover:bg-[#521D2C] rounded-lg transition-colors border border-[#521D2C]"
            aria-label="منوی اصلی"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {isOpen && (
        <div className="lg:hidden bg-[#2B0814]/95 backdrop-blur-md border border-[#521D2C] rounded-xl p-4 space-y-2 mt-2 shadow-2xl">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`block px-4 py-2.5 text-xs font-bold rounded-lg transition-colors ${
                pathname === link.href
                  ? 'bg-[#EFECE8] text-[#2B0814] font-black'
                  : 'text-[#D9C7CF] hover:bg-[#380A1A] hover:text-white'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-3 border-t border-[#521D2C] flex items-center justify-between">
            <a
              href="tel:03142740000"
              className="w-full text-center py-2 bg-[#EFECE8] text-[#2B0814] text-xs font-black rounded-lg"
            >
              📞 تماس با کارخانه: ۰۳۱-۴۲۷۴۰۰۰۰
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

