import React from 'react';
import Link from 'next/link';
import { 
  Building2, 
  ArrowLeft, 
  CheckCircle2, 
  Calculator, 
  Layers, 
  Grid, 
  Maximize, 
  Box, 
  ShieldCheck, 
  Wrench, 
  BookOpen, 
  Clock, 
  HardHat, 
  Sparkles,
  Phone
} from 'lucide-react';
import { getServices, getProjects, getArticles, getSettings } from '@/lib/db';

export default async function HomePage() {
  const services = await getServices();
  const allProjects = await getProjects();
  const completedProjects = allProjects.slice(0, 4);
  const ongoingProjects = allProjects.slice(4, 8).length > 0 ? allProjects.slice(4, 8) : allProjects.slice(0, 4);
  const articles = await getArticles();
  const recentArticles = articles.slice(0, 4);
  const settings = await getSettings();

  return (
    <div className="space-y-16 pb-20 overflow-x-hidden bg-[#F5F5F5] text-[#18191a]">
      {/* 
        ====================================================
        1. HERO SECTION (صفحه اول)
        Very stylish, ultra-luxurious photograph of a real glass facade project
        Minimalist, dignified, heavy, chic
        ====================================================
      */}
      <section className="relative mx-2 sm:mx-3 my-2 border border-[#b5b8b5] subtle-soft-shadow overflow-hidden bg-[#18191a]">
        <div className="relative h-[75vh] sm:h-[82vh] w-full overflow-hidden">
          {/* High resolution luxury glass facade image */}
          <img
            src="https://arvinpanjereh.com/upload/service/742b5647-017c-4a6e-b416-a184adf97dcc.webp"
            alt="نوآوران پنجره سپاهان - نماهای مدرن شیشه‌ای"
            className="w-full h-full object-cover opacity-85 scale-105 transition-transform duration-1000"
          />
          {/* Subtle Dark Gradient Overlay for High Contrast */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#000000]/90 via-[#000000]/40 to-[#000000]/20" />

          {/* Hero Content Overlay */}
          <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-12 max-w-5xl">
            <div className="space-y-4">
              <span className="inline-block px-3 py-1 bg-[#cbcccb] text-[#18191a] text-xs font-black uppercase tracking-wider rounded-none shadow-sm">
                مهندسی نما و پنجره‌های صنعتی دوجداره
              </span>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white text-shadow-strong leading-tight">
                نوآوران پنجره سپاهان
              </h1>
              <p className="text-sm sm:text-lg text-[#f0f2f0] text-shadow-subtle max-w-2xl font-medium leading-relaxed">
                طراحی محاسباتی، تولید صنعتی در کارخانه ۱۵۰۰ متری مجهز و اجرای تراز اول سیستم‌های کرتین‌وال، لامل، فریم‌لس و پنجره‌های ترمال‌بریک با ۱۰ سال گارانتی کتبی.
              </p>

              <div className="pt-4 flex flex-wrap gap-3">
                <Link
                  href="/calculator"
                  className="px-6 py-3.5 bg-[#cbcccb] hover:bg-[#b8bab8] text-[#18191a] font-black text-xs sm:text-sm rounded-none shadow-md transition-all flex items-center gap-2 border border-[#b5b8b5]"
                >
                  <Calculator className="w-4 h-4 text-[#18191a]" />
                  <span>محاسبه‌گر آنلاین پیش‌فاکتور</span>
                </Link>

                <Link
                  href="/projects"
                  className="px-6 py-3.5 bg-[#18191a]/90 hover:bg-[#18191a] text-white font-bold text-xs sm:text-sm rounded-none border border-white/20 transition-all backdrop-blur-md flex items-center gap-2"
                >
                  <span>مشاهده پروژه‌ها</span>
                  <ArrowLeft className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 
        ====================================================
        2. PAGE 2 / SECTION 2 (چهار بخش اصلی)
        ۱. نمونه‌های پروفیل موجود
        ۲. نمونه کارهای انجام شده
        ۳. پروژه‌های درحال ساخت
        ۴. مقاله‌ها
        Matching Header Aluminum Texture (#cbcccb), White overlay text with dark shadows
        ====================================================
      */}
      <section className="max-w-7xl mx-auto px-3 sm:px-6">
        <div className="text-right mb-8">
          <h2 className="text-xl sm:text-2xl font-black text-[#18191a] tracking-tight">
            بخش‌های اصلی پرتال مهندسی
          </h2>
          <p className="text-xs text-[#55595e] font-bold mt-1">
            مشاهده پروفیل‌های آلومینیومی، نمونه‌کارها، پروژه‌های فعال و مقالات آموزشی
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          
          {/* CARD 1: نمونه‌های پروفیل موجود */}
          <Link
            href="/services"
            className="group relative h-96 overflow-hidden border border-[#b5b8b5] subtle-soft-shadow bg-[#18191a] flex flex-col justify-between"
          >
            <img
              src="https://arvinpanjereh.com/upload/service/0faef799-a472-46be-83bf-7cf42bbfaaa3.webp"
              alt="نمونه‌های پروفیل موجود"
              className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#000000]/90 via-[#000000]/40 to-transparent" />
            
            {/* Header Tag with Aluminum Texture */}
            <div className="relative z-10 p-3">
              <span className="aluminum-header px-3 py-1.5 text-[11px] font-black text-[#18191a] inline-block shadow-sm">
                ۱. نمونه‌های پروفیل موجود
              </span>
            </div>

            {/* Text Overlay */}
            <div className="relative z-10 p-5 space-y-2">
              <h3 className="text-lg font-black text-white text-shadow-strong group-hover:underline">
                پروفیل‌های ترمال‌بریک و کرتین‌وال
              </h3>
              <p className="text-xs text-[#f0f2f0] text-shadow-subtle leading-relaxed line-clamp-2">
                مشاهده مقاطع آلومینیومی، آنادایز شامپاینی و مشکی، سیستم‌های کشویی لیفت اند اسلاید و فریم‌لس.
              </p>
              <div className="pt-2 flex items-center gap-1.5 text-xs font-bold text-white text-shadow-strong">
                <span>ورود به کاتالوگ پروفیل‌ها</span>
                <ArrowLeft className="w-3.5 h-3.5" />
              </div>
            </div>
          </Link>

          {/* CARD 2: نمونه کارهای انجام شده */}
          <Link
            href="/projects"
            className="group relative h-96 overflow-hidden border border-[#b5b8b5] subtle-soft-shadow bg-[#18191a] flex flex-col justify-between"
          >
            <img
              src="https://arvinpanjereh.com/upload/service/742b5647-017c-4a6e-b416-a184adf97dcc.webp"
              alt="نمونه کارهای انجام شده"
              className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#000000]/90 via-[#000000]/40 to-transparent" />

            {/* Header Tag with Aluminum Texture */}
            <div className="relative z-10 p-3">
              <span className="aluminum-header px-3 py-1.5 text-[11px] font-black text-[#18191a] inline-block shadow-sm">
                ۲. نمونه کارهای انجام شده
              </span>
            </div>

            {/* Text Overlay */}
            <div className="relative z-10 p-5 space-y-2">
              <h3 className="text-lg font-black text-white text-shadow-strong group-hover:underline">
                پروژه‌های تحویل‌شده و رزومه ۵۰+
              </h3>
              <p className="text-xs text-[#f0f2f0] text-shadow-subtle leading-relaxed line-clamp-2">
                نمایش پروژه‌های اداری، تجاری و ویلایی اجراشده در اصفهان و سراسر کشور همراه با تصاویر فازهای تکمیلی.
              </p>
              <div className="pt-2 flex items-center gap-1.5 text-xs font-bold text-white text-shadow-strong">
                <span>مشاهده آرشیو پروژه‌ها</span>
                <ArrowLeft className="w-3.5 h-3.5" />
              </div>
            </div>
          </Link>

          {/* CARD 3: پروژه‌های در حال ساخت */}
          <Link
            href="/projects?status=ongoing"
            className="group relative h-96 overflow-hidden border border-[#b5b8b5] subtle-soft-shadow bg-[#18191a] flex flex-col justify-between"
          >
            <img
              src="https://arvinpanjereh.com/upload/service/2f5bb5ed-60bb-49e5-9003-8be94921ad5e.webp"
              alt="پروژه‌های درحال ساخت"
              className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#000000]/90 via-[#000000]/40 to-transparent" />

            {/* Header Tag with Aluminum Texture */}
            <div className="relative z-10 p-3">
              <span className="aluminum-header px-3 py-1.5 text-[11px] font-black text-[#18191a] inline-block shadow-sm">
                ۳. پروژه‌های درحال ساخت
              </span>
            </div>

            {/* Text Overlay */}
            <div className="relative z-10 p-5 space-y-2">
              <h3 className="text-lg font-black text-white text-shadow-strong group-hover:underline">
                کارگاه‌های فعال و نصب نما
              </h3>
              <p className="text-xs text-[#f0f2f0] text-shadow-subtle leading-relaxed line-clamp-2">
                بررسی روند مونتاژ لامل‌های کرتین‌وال، نصب شیشه‌های دو و سه‌جداره و اجرا در کارگاه‌های میدانی.
              </p>
              <div className="pt-2 flex items-center gap-1.5 text-xs font-bold text-white text-shadow-strong">
                <span>مشاهده کارگاه‌های فعال</span>
                <ArrowLeft className="w-3.5 h-3.5" />
              </div>
            </div>
          </Link>

          {/* CARD 4: مقاله‌ها */}
          <Link
            href="/articles"
            className="group relative h-96 overflow-hidden border border-[#b5b8b5] subtle-soft-shadow bg-[#18191a] flex flex-col justify-between"
          >
            <img
              src="https://arvinpanjereh.com/upload/service/4eb9bebe-fbcf-49b0-bc35-12e0b62e49c7.webp"
              alt="مقاله‌ها"
              className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#000000]/90 via-[#000000]/40 to-transparent" />

            {/* Header Tag with Aluminum Texture */}
            <div className="relative z-10 p-3">
              <span className="aluminum-header px-3 py-1.5 text-[11px] font-black text-[#18191a] inline-block shadow-sm">
                ۴. مقاله‌ها و دانشنامه فنی
              </span>
            </div>

            {/* Text Overlay */}
            <div className="relative z-10 p-5 space-y-2">
              <h3 className="text-lg font-black text-white text-shadow-strong group-hover:underline">
                استناد به استانداردهای ساختمانی
              </h3>
              <p className="text-xs text-[#f0f2f0] text-shadow-subtle leading-relaxed line-clamp-2">
                راهنماهای خرید پنجره دوجداره، تست‌های ممان اینرسی، مقایسه لیفت‌اسلاید با کشویی عادی و افت دسی‌بل صدا.
              </p>
              <div className="pt-2 flex items-center gap-1.5 text-xs font-bold text-white text-shadow-strong">
                <span>مطالعه مقالات مهندسی</span>
                <ArrowLeft className="w-3.5 h-3.5" />
              </div>
            </div>
          </Link>

        </div>
      </section>

      {/* 
        ====================================================
        3. FACTORY & CREDIBILITY BANNER
        ====================================================
      */}
      <section className="max-w-7xl mx-auto px-3 sm:px-6">
        <div className="aluminum-card p-6 sm:p-10 border border-[#b5b8b5] subtle-soft-shadow flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-right">
            <span className="text-xs font-black text-[#18191a] uppercase">کارخانه صنعتی ۱۵۰۰ متری</span>
            <h2 className="text-xl sm:text-2xl font-black text-[#18191a]">
              ظرفیت تولید متراژ بالا و تجهیزات اختصاصی برش آلومینیوم
            </h2>
            <p className="text-xs text-[#484c50] max-w-3xl leading-relaxed">
              تولید با تجهیزات دقیق ماشین‌کاری، مونتاژ لاستیک‌های EPDM و تزریق گاز آرگون با تست‌های فشار سنجش عایق.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <Link
              href="/about"
              className="px-6 py-3.5 bg-[#18191a] hover:bg-[#2c2e30] text-white font-bold text-xs rounded-none transition-colors border border-[#18191a]"
            >
              اطلاعات کامل کارخانه و اعتبار
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
