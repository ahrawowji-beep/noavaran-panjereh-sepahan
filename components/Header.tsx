'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Phone, Menu, X, ChevronDown, Building2, Calculator, ShieldCheck, Sparkles } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  const navLinks = [
    { href: '/', label: 'صفحه اصلی' },
    {
      href: '/services',
      label: 'سیستم‌های نما و پنجره',
      isDropdown: true,
      subItems: [
        { href: '/services/curtain-wall-lamella', label: 'نمای کرتین وال (لامل)' },
        { href: '/services/frameless-facade', label: 'نمای شیشه‌ای فریم‌لس' },
        { href: '/services/aluminum-windows-doors', label: 'درب و پنجره ترمال‌بریک' },
        { href: '/services/composite-facade', label: 'نمای کامپوزیت آلومینیوم (ACP)' },
        { href: '/services/thermowood-facade', label: 'نمای چوب طبیعی ترموود' },
        { href: '/services/steel-glass-railings', label: 'نرده شیشه‌ای و حفاظ استیل' },
      ],
    },
    { href: '/projects', label: 'پروژه‌های شاخص' },
    { href: '/videos', label: 'ویدیوها', badge: 'آموزشی' },
    { href: '/calculator', label: 'محاسبه قیمت', isSpecial: true },
    { href: '/articles', label: 'دانشنامه مهندسی' },
    { href: '/about', label: 'درباره ما' },
    { href: '/contact', label: 'تماس با ما' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-charcoal-950/90 backdrop-blur-xl border-b border-charcoal-800 shadow-2xl py-3'
          : 'bg-charcoal-950/70 backdrop-blur-md border-b border-white/5 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-bronze-400 via-bronze-500 to-amber-700 flex items-center justify-center text-charcoal-950 font-black shadow-lg shadow-bronze-500/20 group-hover:scale-105 transition-transform duration-300">
              <Building2 className="w-6 h-6 text-charcoal-950" />
            </div>
            <div>
              <span className="text-lg sm:text-xl font-black tracking-tight text-white block leading-tight">
                نوآوران پنجره <span className="gold-gradient-text">سپاهان</span>
              </span>
              <span className="text-[9px] text-titanium-400 block tracking-widest uppercase font-mono mt-0.5">
                Modern Architectural Glass & Facades
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5">
            {navLinks.map((link) => {
              const active = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
              if (link.isDropdown) {
                return (
                  <div
                    key={link.href}
                    className="relative"
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                  >
                    <button
                      className={`flex items-center gap-1 px-3 py-2 text-xs font-bold rounded-lg transition-all ${
                        active ? 'text-bronze-400 bg-bronze-500/10 border border-bronze-500/20' : 'text-titanium-200 hover:text-white hover:bg-white/5'
                      }`}
                    >
                      {link.label}
                      <ChevronDown className="w-3.5 h-3.5 opacity-70" />
                    </button>

                    {servicesOpen && (
                      <div className="absolute right-0 top-full mt-1.5 w-64 rounded-2xl bg-charcoal-900 border border-charcoal-700 shadow-2xl p-2.5 space-y-1 animate-in fade-in slide-in-from-top-2 duration-150">
                        {link.subItems?.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            className="block px-3 py-2.5 text-xs text-titanium-200 hover:text-bronze-300 hover:bg-charcoal-800 rounded-xl transition-all"
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-2 text-xs font-bold rounded-lg transition-all flex items-center gap-1 relative ${
                    link.isSpecial
                      ? 'bg-gradient-to-r from-bronze-500 to-bronze-600 text-charcoal-950 font-black shadow-md shadow-bronze-500/20 hover:scale-105'
                      : active
                      ? 'text-bronze-400 bg-bronze-500/10 border border-bronze-500/20'
                      : 'text-titanium-200 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.isSpecial && <Calculator className="w-3.5 h-3.5" />}
                  <span>{link.label}</span>
                  {link.badge && (
                    <span className="mr-1 text-[9px] bg-bronze-500/20 text-bronze-300 px-1.5 py-0.5 rounded-full border border-bronze-500/30">
                      {link.badge}
                    </span>
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Hotline Contact Button */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="tel:0314144"
              className="flex items-center gap-2.5 px-4 py-2 rounded-xl bg-charcoal-900 hover:bg-charcoal-850 text-bronze-400 border border-bronze-500/30 shadow-lg transition-all font-mono text-xs tracking-wider group"
              title="تماس مستقیم با واحد فنی (۴۱۴۴-۰۳۱)"
            >
              <div className="w-7 h-7 rounded-lg bg-bronze-500/20 flex items-center justify-center text-bronze-400 group-hover:scale-110 transition-transform">
                <Phone className="w-3.5 h-3.5" />
              </div>
              <div className="text-right">
                <span className="block text-[9px] text-titanium-400 font-sans">خط ویژه اصفهان</span>
                <span className="font-extrabold text-sm text-bronze-400">۰۳۱-۴۱۴۴</span>
              </div>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden flex items-center gap-2">
            <a
              href="tel:0314144"
              className="p-2.5 rounded-xl bg-bronze-500/20 text-bronze-400 border border-bronze-500/30"
              title="تماس تلفنی"
            >
              <Phone className="w-5 h-5" />
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2.5 rounded-xl bg-charcoal-850 text-titanium-200 hover:text-white border border-charcoal-700"
              aria-label="منوی اصلی"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="lg:hidden bg-charcoal-950/95 backdrop-blur-2xl border-b border-charcoal-800 px-5 pt-4 pb-6 space-y-2 animate-in fade-in slide-in-from-top-4 duration-200">
          {navLinks.map((link) => {
            if (link.isDropdown) {
              return (
                <div key={link.href} className="py-2 border-b border-charcoal-850">
                  <div className="text-xs font-black text-bronze-400 uppercase tracking-wider mb-2">
                    {link.label}
                  </div>
                  <div className="pr-3 space-y-1.5 border-r-2 border-bronze-500/40">
                    {link.subItems?.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block px-3 py-2 text-xs text-titanium-300 hover:text-white hover:bg-charcoal-850 rounded-lg"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              );
            }
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`block px-4 py-3 text-xs font-bold rounded-xl transition-all ${
                  link.isSpecial
                    ? 'bg-gradient-to-r from-bronze-500 to-amber-500 text-charcoal-950 font-black text-center shadow-lg'
                    : 'text-titanium-200 hover:text-bronze-400 hover:bg-charcoal-850'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <div className="pt-4 mt-3 border-t border-charcoal-800 flex items-center justify-between">
            <Link
              href="/admin"
              className="text-xs text-titanium-400 hover:text-bronze-400 flex items-center gap-1.5 font-medium"
            >
              <ShieldCheck className="w-4 h-4 text-bronze-400" />
              ورود مدیریت
            </Link>
            <a
              href="tel:0314144"
              className="text-xs text-bronze-400 font-mono font-bold flex items-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5" />
              ۰۳۱-۴۱۴۴
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
