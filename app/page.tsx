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
  Phone,
  MapPin,
  Mail,
  Clock,
  Download,
  Award,
  Sparkles,
  ChevronLeft
} from 'lucide-react';
import { getServices, getProjects, getArticles } from '@/lib/db';

export default async function HomePage() {
  const services = await getServices();
  const projects = await getProjects();
  const articles = await getArticles();

  return (
    <div className="space-y-16 pb-20 text-white selection:bg-[#D4B038] selection:text-[#1F1419]">
      
      {/* 
        ====================================================
        01. HERO SECTION (Desktop 1440px RTL)
        ====================================================
      */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pt-4">
        <div className="bg-gradient-to-br from-[#2B0814] via-[#380A1A] to-[#1A040C] border border-[#521D2C] rounded-2xl p-6 sm:p-10 lg:p-12 shadow-2xl overflow-hidden relative">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* HERO LEFT: Featured Architectural Facade Visual */}
            <div className="lg:col-span-6 relative h-[380px] sm:h-[480px] rounded-xl overflow-hidden border-2 border-[#521D2C] shadow-2xl group">
              <img
                src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1000&q=80"
                alt="نمای کرتین‌وال و پنجره‌های آلومینیومی نوآوران پنجره سپاهان"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1F050E]/90 via-transparent to-transparent" />
              <div className="absolute bottom-4 right-4 left-4 p-3 bg-[#2B0814]/85 backdrop-blur-md rounded-lg border border-[#521D2C]">
                <div className="text-xs font-bold text-[#D4B038]">🏢 پروژه شاخص برج مسکونی سپاهان</div>
                <div className="text-[11px] text-[#D9C7CF]">اجرای کامل نمای کرتین‌وال و پنجره‌های لیفت‌اند‌اسلاید</div>
              </div>
            </div>

            {/* HERO RIGHT: Persian Typography & CTAs (RTL) */}
            <div className="lg:col-span-6 space-y-5 text-right">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#EFECE8] text-[#2B0814] rounded-full text-xs font-black shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-[#D4B038]" />
                <span>پنجره، درب و سیستم‌های تخصصی آلومینیومی</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
                نوآوران پنجره سپاهان
              </h1>

              <p className="text-sm sm:text-base text-[#D9C7CF] font-medium leading-relaxed max-w-xl">
                تولیدکننده پیشرفته‌ترین سیستم‌های درب و پنجره دوجداره آلومینیوم ترمال‌بریک، سیستم‌های کشویی لیفت اند اسلاید و نماهای مدرن کرتین‌وال با بالاترین استانداردهای مهندسی ساختمان در اصفهان و نجف‌آباد.
              </p>

              {/* CTAs */}
              <div className="pt-2 flex flex-wrap gap-4">
                <Link
                  href="/calculator"
                  className="px-6 py-3.5 bg-[#EFECE8] hover:bg-white text-[#1F1419] font-black text-sm rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5 flex items-center gap-2 border border-[#D4B038]"
                >
                  <Calculator className="w-4 h-4 text-[#2B0814]" />
                  <span>استعلام قیمت آنلاین</span>
                </Link>

                <Link
                  href="/services"
                  className="px-6 py-3.5 bg-transparent hover:bg-[#380A1A] text-white font-bold text-sm rounded-lg border-2 border-white/80 transition-all flex items-center gap-2"
                >
                  <Download className="w-4 h-4 text-[#D4B038]" />
                  <span>کاتالوگ مقاطع آلومینیوم</span>
                </Link>
              </div>

              {/* Badges */}
              <div className="pt-4 grid grid-cols-3 gap-3 border-t border-[#521D2C]">
                <div className="text-center p-2 bg-[#380A1A]/70 rounded-lg">
                  <div className="text-lg font-black text-[#D4B038]">۱۵+ سال</div>
                  <div className="text-[10px] text-[#D9C7CF]">سابقه درخشان</div>
                </div>
                <div className="text-center p-2 bg-[#380A1A]/70 rounded-lg">
                  <div className="text-lg font-black text-[#D4B038]">۱۰۰٪</div>
                  <div className="text-[10px] text-[#D9C7CF]">شمش خالص 6063</div>
                </div>
                <div className="text-center p-2 bg-[#380A1A]/70 rounded-lg">
                  <div className="text-lg font-black text-[#D4B038]">۵۰+</div>
                  <div className="text-[10px] text-[#D9C7CF]">پروژه ملی شاخص</div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>


      {/* 
        ====================================================
        02. DISTRIBUTION SECTION (توزیع سراسری)
        ====================================================
      */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-[#2B0814] border border-[#521D2C] rounded-2xl p-8 sm:p-12 text-center shadow-xl">
          <span className="text-xs font-black tracking-widest text-[#D4B038] uppercase">DISTRIBUTION</span>
          <h2 className="text-2xl sm:text-3xl font-black text-white mt-1 mb-3">
            شبکه توزیع و ارسال مستقیم از کارخانه نجف‌آباد به سراسر ایران
          </h2>
          <p className="text-xs sm:text-sm text-[#D9C7CF] max-w-2xl mx-auto mb-8">
            مرکز اصلی تولید در قطب صنعتی اصفهان همراه با تیم‌های مهندسی نصب و تحویل در کلیه استان‌ها.
          </p>

          <div className="bg-[#380A1A] border border-[#521D2C] rounded-xl p-6 sm:p-8 max-w-4xl mx-auto">
            <div className="inline-block px-5 py-2 bg-[#D4B038] text-[#1F1419] font-black text-sm rounded-full mb-6 shadow-md">
              📍 مرکز اصلی کارخانه و خطوط مونتاژ: اصفهان / شهرک صنعتی نجف‌آباد
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
              <div className="p-4 bg-[#2B0814] rounded-lg border border-[#521D2C]">
                <div className="text-sm font-bold text-white">تهران و البرز</div>
                <div className="text-[11px] text-[#D9C7CF] mt-1">دفتر مهندسی و ارسال روزانه</div>
              </div>
              <div className="p-4 bg-[#2B0814] rounded-lg border border-[#521D2C]">
                <div className="text-sm font-bold text-white">مشهد و شمال‌شرق</div>
                <div className="text-[11px] text-[#D9C7CF] mt-1">عاملیت فروش و تحویل در محل</div>
              </div>
              <div className="p-4 bg-[#2B0814] rounded-lg border border-[#521D2C]">
                <div className="text-sm font-bold text-white">شیراز و جنوب کشور</div>
                <div className="text-[11px] text-[#D9C7CF] mt-1">پروژه‌های ویلایی و برج‌ها</div>
              </div>
              <div className="p-4 bg-[#2B0814] rounded-lg border border-[#521D2C]">
                <div className="text-sm font-bold text-white">تبریز و شمال‌غرب</div>
                <div className="text-[11px] text-[#D9C7CF] mt-1">سیستم‌های ترمال‌بریک مقاوم سرما</div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* 
        ====================================================
        03. SERVICES SECTION (2x2 Numbered Grid 01-04)
        ====================================================
      */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-[#2B0814] border border-[#521D2C] rounded-2xl p-8 sm:p-12 shadow-xl">
          <div className="text-center mb-10">
            <span className="text-xs font-black tracking-widest text-[#D4B038] uppercase">SERVICES</span>
            <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">
              خدمات تخصصی مهندسی نما و پنجره
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* 01 */}
            <div className="bg-[#EFECE8] text-[#1F1419] p-8 rounded-xl flex flex-col justify-between min-h-[220px] shadow-md hover:-translate-y-1 transition-transform">
              <div className="text-4xl sm:text-5xl font-black text-[#2B0814]">01</div>
              <div className="space-y-2 mt-4 text-right">
                <h3 className="text-lg sm:text-xl font-black text-[#1F1419]">
                  طراحی و تولید پنجره و درب آلومینیومی اختصاصی
                </h3>
                <p className="text-xs sm:text-sm text-[#736166] leading-relaxed">
                  برش و مونتاژ تمام‌اتوماتیک با مدرن‌ترین خطوط CNC و آلیاژ 6063-T6 درجه یک.
                </p>
              </div>
            </div>

            {/* 02 */}
            <div className="bg-[#EFECE8] text-[#1F1419] p-8 rounded-xl flex flex-col justify-between min-h-[220px] shadow-md hover:-translate-y-1 transition-transform">
              <div className="text-4xl sm:text-5xl font-black text-[#2B0814]">02</div>
              <div className="space-y-2 mt-4 text-right">
                <h3 className="text-lg sm:text-xl font-black text-[#1F1419]">
                  سیستم‌های پیشرفته ترمال‌بریک و عایق حرارت
                </h3>
                <p className="text-xs sm:text-sm text-[#736166] leading-relaxed">
                  تیغه‌های پلی‌آمید اصل ۲۴ میلی‌متری ضدحرارت و جلوگیری از اتلاف انرژی تا ۵۰٪.
                </p>
              </div>
            </div>

            {/* 03 */}
            <div className="bg-[#EFECE8] text-[#1F1419] p-8 rounded-xl flex flex-col justify-between min-h-[220px] shadow-md hover:-translate-y-1 transition-transform">
              <div className="text-4xl sm:text-5xl font-black text-[#2B0814]">03</div>
              <div className="space-y-2 mt-4 text-right">
                <h3 className="text-lg sm:text-xl font-black text-[#1F1419]">
                  طراحی و اجرای نمای شیشه‌ای کرتین‌وال
                </h3>
                <p className="text-xs sm:text-sm text-[#736166] leading-relaxed">
                  سیستم‌های لامل، فریم‌لس و سمی‌فریم‌لس همراه با محاسبات استاتیکی بارهای باد و زلزله.
                </p>
              </div>
            </div>

            {/* 04 */}
            <div className="bg-[#EFECE8] text-[#1F1419] p-8 rounded-xl flex flex-col justify-between min-h-[220px] shadow-md hover:-translate-y-1 transition-transform">
              <div className="text-4xl sm:text-5xl font-black text-[#2B0814]">04</div>
              <div className="space-y-2 mt-4 text-right">
                <h3 className="text-lg sm:text-xl font-black text-[#1F1419]">
                  سیستم‌های کشویی و لیفت اند اسلاید دهانه‌های عریض
                </h3>
                <p className="text-xs sm:text-sm text-[#736166] leading-relaxed">
                  حرکت بی‌صدا و روان لنگه‌های فوق سنگین تا وزن ۴۰۰ کیلوگرم با یراق‌آلات آلمانی.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* 
        ====================================================
        04. PRODUCTS SECTION (3-Column Grid)
        ====================================================
      */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-[#2B0814] border border-[#521D2C] rounded-2xl p-8 sm:p-12 shadow-xl">
          <div className="text-center mb-10">
            <span className="text-xs font-black tracking-widest text-[#D4B038] uppercase">PRODUCTS</span>
            <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">
              محصولات و سیستم‌های تخصصی
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Product 1 */}
            <div className="bg-[#EFECE8] rounded-xl p-4 text-center flex flex-col justify-between shadow-md">
              <div className="h-44 rounded-lg overflow-hidden mb-3 bg-[#ccc]">
                <img
                  src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=600&q=80"
                  alt="پنجره لولایی ترمال‌بریک"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-base font-black text-[#1F1419] mb-3">پنجره لولایی دوحالته سپنتا</h3>
              <Link
                href="/calculator"
                className="w-full py-2.5 bg-[#2B0814] text-white hover:bg-[#380A1A] font-bold text-xs rounded-lg transition-colors"
              >
                استعلام قیمت آنلاین
              </Link>
            </div>

            {/* Product 2 */}
            <div className="bg-[#EFECE8] rounded-xl p-4 text-center flex flex-col justify-between shadow-md">
              <div className="h-44 rounded-lg overflow-hidden mb-3 bg-[#ccc]">
                <img
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80"
                  alt="پنجره کشویی مونوریل"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-base font-black text-[#1F1419] mb-3">پنجره کشویی مونوریل و جفت‌ریل</h3>
              <Link
                href="/calculator"
                className="w-full py-2.5 bg-[#2B0814] text-white hover:bg-[#380A1A] font-bold text-xs rounded-lg transition-colors"
              >
                استعلام قیمت آنلاین
              </Link>
            </div>

            {/* Product 3 */}
            <div className="bg-[#EFECE8] rounded-xl p-4 text-center flex flex-col justify-between shadow-md">
              <div className="h-44 rounded-lg overflow-hidden mb-3 bg-[#ccc]">
                <img
                  src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=600&q=80"
                  alt="پنجره لیفت اند اسلاید"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-base font-black text-[#1F1419] mb-3">پنجره لیفت اند اسلاید سنگین</h3>
              <Link
                href="/calculator"
                className="w-full py-2.5 bg-[#2B0814] text-white hover:bg-[#380A1A] font-bold text-xs rounded-lg transition-colors"
              >
                استعلام قیمت آنلاین
              </Link>
            </div>

            {/* Product 4 */}
            <div className="bg-[#EFECE8] rounded-xl p-4 text-center flex flex-col justify-between shadow-md">
              <div className="h-44 rounded-lg overflow-hidden mb-3 bg-[#ccc]">
                <img
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80"
                  alt="نمای کرتین‌وال لامل"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-base font-black text-[#1F1419] mb-3">نمای کرتین‌وال لامل و فریم‌لس</h3>
              <Link
                href="/calculator"
                className="w-full py-2.5 bg-[#2B0814] text-white hover:bg-[#380A1A] font-bold text-xs rounded-lg transition-colors"
              >
                استعلام قیمت آنلاین
              </Link>
            </div>

            {/* Product 5 */}
            <div className="bg-[#EFECE8] rounded-xl p-4 text-center flex flex-col justify-between shadow-md">
              <div className="h-44 rounded-lg overflow-hidden mb-3 bg-[#ccc]">
                <img
                  src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=600&q=80"
                  alt="درب ورودی پیوت آلومینیومی"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-base font-black text-[#1F1419] mb-3">درب ورودی پیوت (محور وسط) لوکس</h3>
              <Link
                href="/calculator"
                className="w-full py-2.5 bg-[#2B0814] text-white hover:bg-[#380A1A] font-bold text-xs rounded-lg transition-colors"
              >
                استعلام قیمت آنلاین
              </Link>
            </div>

            {/* Product 6 */}
            <div className="bg-[#EFECE8] rounded-xl p-4 text-center flex flex-col justify-between shadow-md">
              <div className="h-44 rounded-lg overflow-hidden mb-3 bg-[#ccc]">
                <img
                  src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=600&q=80"
                  alt="اسکای‌لایت و سقف شیشه‌ای"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-base font-black text-[#1F1419] mb-3">اسکای‌لایت و نورگیر شیشه‌ای</h3>
              <Link
                href="/calculator"
                className="w-full py-2.5 bg-[#2B0814] text-white hover:bg-[#380A1A] font-bold text-xs rounded-lg transition-colors"
              >
                استعلام قیمت آنلاین
              </Link>
            </div>

          </div>
        </div>
      </section>


      {/* 
        ====================================================
        05. PRODUCT DETAIL SECTION (Technical Specs Table)
        ====================================================
      */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-[#2B0814] border border-[#521D2C] rounded-2xl p-8 sm:p-12 shadow-xl">
          <div className="text-center mb-8">
            <span className="text-xs font-black tracking-widest text-[#D4B038] uppercase">PRODUCT DETAIL</span>
            <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">
              مشخصات فنی سیستم Lift & Slide سری سپنتا
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Visual Box */}
            <div className="lg:col-span-6 h-[400px] rounded-xl overflow-hidden border border-[#521D2C]">
              <img
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80"
                alt="پنجره کشویی لیفت اند اسلاید"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Specs Table */}
            <div className="lg:col-span-6 bg-[#EFECE8] rounded-xl p-6 sm:p-8 text-[#1F1419] space-y-3">
              <h3 className="text-lg font-black text-[#2B0814] mb-2">جدول مشخصات مهندسی مقطع</h3>

              <div className="flex justify-between items-center p-3 bg-white rounded-lg text-xs sm:text-sm">
                <span className="font-bold">نوع آلیاژ آلومینیوم:</span>
                <span className="text-[#736166]">6063-T6 درجه یک صادراتی</span>
              </div>

              <div className="flex justify-between items-center p-3 bg-white rounded-lg text-xs sm:text-sm">
                <span className="font-bold">تیغه حرارتی عایق:</span>
                <span className="text-[#736166]">پلی‌آمید ۲۴ میلی‌متر تقویت‌شده GF25</span>
              </div>

              <div className="flex justify-between items-center p-3 bg-white rounded-lg text-xs sm:text-sm">
                <span className="font-bold">ضخامت شیشه خور:</span>
                <span className="text-[#736166]">دوجداره و سه‌جداره تا ۳۸ میلی‌متر</span>
              </div>

              <div className="flex justify-between items-center p-3 bg-white rounded-lg text-xs sm:text-sm">
                <span className="font-bold">تحمل وزن هر لنگه:</span>
                <span className="text-[#736166]">تا ۴۰۰ کیلوگرم با یراق‌آلات آلمانی</span>
              </div>

              <div className="flex justify-between items-center p-3 bg-white rounded-lg text-xs sm:text-sm">
                <span className="font-bold">پوشش سطح و رنگ:</span>
                <span className="text-[#736166]">آنادایزینگ مات و براق / رنگ الکترواستاتیک</span>
              </div>

              <Link
                href="/calculator"
                className="block w-full text-center py-3.5 mt-4 bg-[#2B0814] hover:bg-[#380A1A] text-white font-bold text-sm rounded-lg transition-colors"
              >
                ثبت استعلام قیمت این سیستم
              </Link>
            </div>

          </div>
        </div>
      </section>


      {/* 
        ====================================================
        06. ARTICLES SECTION (3-Col Knowledge Base)
        ====================================================
      */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-[#2B0814] border border-[#521D2C] rounded-2xl p-8 sm:p-12 shadow-xl">
          <div className="text-center mb-10">
            <span className="text-xs font-black tracking-widest text-[#D4B038] uppercase">ARTICLES</span>
            <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">
              مقالات و دانش فنی آلومینیوم ساختمانی
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="bg-[#EFECE8] rounded-xl p-5 text-[#1F1419] flex flex-col justify-between shadow-md">
              <div className="h-44 rounded-lg overflow-hidden mb-3 bg-[#ccc]">
                <img
                  src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=600&q=80"
                  alt="مقاله پنجره ترمال‌بریک"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="space-y-2 text-right">
                <div className="text-[11px] text-[#736166]">۱۵ مهر ۱۴۰۳ | مهندسی نما</div>
                <h3 className="text-base font-black text-[#1F1419] leading-snug">
                  مزایای پنجره آلومینیومی ترمال‌بریک در اقلیم گرم و خشک
                </h3>
                <p className="text-xs text-[#736166] line-clamp-2">
                  تحلیل عملکرد حرارتی پلی‌آمید و جلوگیری از اتلاف سرما و گرما در برج‌های مسکونی...
                </p>
                <Link href="/articles" className="inline-block pt-2 text-xs font-bold text-[#2B0814]">
                  ← مطالعه کامل مقاله (Read More)
                </Link>
              </div>
            </div>

            <div className="bg-[#EFECE8] rounded-xl p-5 text-[#1F1419] flex flex-col justify-between shadow-md">
              <div className="h-44 rounded-lg overflow-hidden mb-3 bg-[#ccc]">
                <img
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80"
                  alt="مقاله کرتین‌وال"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="space-y-2 text-right">
                <div className="text-[11px] text-[#736166]">۲۸ شهریور ۱۴۰۳ | سازه و نما</div>
                <h3 className="text-base font-black text-[#1F1419] leading-snug">
                  مقایسه فنی نمای کرتین‌وال فریم‌لس با سیستم‌های سنتی
                </h3>
                <p className="text-xs text-[#736166] line-clamp-2">
                  بررسی ممان اینرسی لامل‌ها، تحمل بار باد و سرعت اجرای نماهای شیشه‌ای مرتفع...
                </p>
                <Link href="/articles" className="inline-block pt-2 text-xs font-bold text-[#2B0814]">
                  ← مطالعه کامل مقاله (Read More)
                </Link>
              </div>
            </div>

            <div className="bg-[#EFECE8] rounded-xl p-5 text-[#1F1419] flex flex-col justify-between shadow-md">
              <div className="h-44 rounded-lg overflow-hidden mb-3 bg-[#ccc]">
                <img
                  src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=600&q=80"
                  alt="راهنمای شیشه دوجداره"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="space-y-2 text-right">
                <div className="text-[11px] text-[#736166]">۱۰ مرداد ۱۴۰۳ | شیشه و عایق</div>
                <h3 className="text-base font-black text-[#1F1419] leading-snug">
                  راهنمای انتخاب شیشه دوجداره Low-E و کنترل تابش خورشید
                </h3>
                <p className="text-xs text-[#736166] line-clamp-2">
                  تاثیر لایه‌های پوشش نقره‌ای و گاز آرگون در کاهش مصرف برق سیستم‌های سرمایشی...
                </p>
                <Link href="/articles" className="inline-block pt-2 text-xs font-bold text-[#2B0814]">
                  ← مطالعه کامل مقاله (Read More)
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* 
        ====================================================
        07. PROJECTS SECTION (Filterable Showcase)
        ====================================================
      */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-[#2B0814] border border-[#521D2C] rounded-2xl p-8 sm:p-12 shadow-xl">
          <div className="text-center mb-8">
            <span className="text-xs font-black tracking-widest text-[#D4B038] uppercase">PROJECTS</span>
            <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">
              پروژه‌های شاخص اجرا شده
            </h2>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2.5 mb-8">
            <button className="px-5 py-2 rounded-full bg-[#EFECE8] text-[#1F1419] font-black text-xs shadow-md">
              همه پروژه‌ها
            </button>
            <button className="px-5 py-2 rounded-full bg-[#380A1A] text-[#D9C7CF] hover:text-white border border-[#521D2C] text-xs font-medium">
              مسکونی لوکس
            </button>
            <button className="px-5 py-2 rounded-full bg-[#380A1A] text-[#D9C7CF] hover:text-white border border-[#521D2C] text-xs font-medium">
              برج‌های تجاری و اداری
            </button>
            <button className="px-5 py-2 rounded-full bg-[#380A1A] text-[#D9C7CF] hover:text-white border border-[#521D2C] text-xs font-medium">
              ویلایی و مدرن
            </button>
            <button className="px-5 py-2 rounded-full bg-[#380A1A] text-[#D9C7CF] hover:text-white border border-[#521D2C] text-xs font-medium">
              نماهای کرتین‌وال
            </button>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            
            <div className="bg-[#380A1A] border border-[#521D2C] rounded-xl p-3.5 shadow-md">
              <div className="h-60 rounded-lg overflow-hidden mb-3">
                <img
                  src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=600&q=80"
                  alt="برج مسکونی نگین"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-right space-y-1">
                <h3 className="text-base font-black text-white">برج مسکونی نگین زاینده‌رود</h3>
                <div className="text-xs text-[#D4B038]">📍 موقعیت: اصفهان - بیشه حبیب</div>
                <div className="text-[11px] text-[#D9C7CF]">⚙️ سیستم: کرتین‌وال + پنجره‌های لیفت‌اند‌اسلاید</div>
              </div>
            </div>

            <div className="bg-[#380A1A] border border-[#521D2C] rounded-xl p-3.5 shadow-md">
              <div className="h-60 rounded-lg overflow-hidden mb-3">
                <img
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80"
                  alt="مجتمع پارسیان"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-right space-y-1">
                <h3 className="text-base font-black text-white">مجتمع تجاری و اداری پارسیان</h3>
                <div className="text-xs text-[#D4B038]">📍 موقعیت: اصفهان - چهارباغ بالا</div>
                <div className="text-[11px] text-[#D9C7CF]">⚙️ سیستم: پنجره‌های ترمال‌بریک اختصاصی سپنتا</div>
              </div>
            </div>

            <div className="bg-[#380A1A] border border-[#521D2C] rounded-xl p-3.5 shadow-md">
              <div className="h-60 rounded-lg overflow-hidden mb-3">
                <img
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80"
                  alt="ویلای ناژوان"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-right space-y-1">
                <h3 className="text-base font-black text-white">ویلای مدرن بیشه ناژوان</h3>
                <div className="text-xs text-[#D4B038]">📍 موقعیت: اصفهان - پارک ناژوان</div>
                <div className="text-[11px] text-[#D9C7CF]">⚙️ سیستم: پنجره‌های فریم‌لس پانوراما</div>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* 
        ====================================================
        08. ABOUT SECTION (Factory Visual + 4 Feature Cards)
        ====================================================
      */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-[#2B0814] border border-[#521D2C] rounded-2xl p-8 sm:p-12 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Visual */}
            <div className="lg:col-span-5 h-[460px] rounded-xl overflow-hidden border border-[#521D2C]">
              <img
                src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80"
                alt="کارخانه و خط مونتاژ نوآوران پنجره سپاهان"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Description & 4 Cards */}
            <div className="lg:col-span-7 space-y-6 text-right">
              <span className="text-xs font-black tracking-widest text-[#D4B038] uppercase">ABOUT US</span>
              <h2 className="text-2xl sm:text-3xl font-black text-white">
                درباره نوآوران پنجره سپاهان
              </h2>
              <p className="text-xs sm:text-sm text-[#D9C7CF] leading-relaxed">
                شرکت نوآوران پنجره سپاهان با بیش از دو دهه تجربه درخشان در صنعت آلومینیوم ساختمانی، مجهز به پیشرفته‌ترین خطوط تولید تمام‌اتوماتیک اروپایی در شهرک صنعتی نجف‌آباد اصفهان، پیشرو در مهندسی، ساخت و اجرای نمای شیشه‌ای و در و پنجره‌های ترمال‌بریک لوکس می‌باشد.
              </p>

              {/* 4 Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="bg-[#EFECE8] p-4 rounded-xl text-[#1F1419] space-y-1">
                  <div className="flex items-center gap-2 font-black text-sm text-[#2B0814]">
                    <span>🛡️</span>
                    <span>تضمین کیفیت و اصالت متریال</span>
                  </div>
                  <p className="text-[11px] text-[#736166]">استفاده از شمش خالص 6063 و یراق‌آلات اروپایی اصل</p>
                </div>

                <div className="bg-[#EFECE8] p-4 rounded-xl text-[#1F1419] space-y-1">
                  <div className="flex items-center gap-2 font-black text-sm text-[#2B0814]">
                    <span>💡</span>
                    <span>مشاوره و طراحی مهندسی</span>
                  </div>
                  <p className="text-[11px] text-[#736166]">طراحی شاپ‌درایینگ و محاسبات استاتیکی نما و پنجره</p>
                </div>

                <div className="bg-[#EFECE8] p-4 rounded-xl text-[#1F1419] space-y-1">
                  <div className="flex items-center gap-2 font-black text-sm text-[#2B0814]">
                    <span>📥</span>
                    <span>دانلود کاتالوگ جامع مقاطع</span>
                  </div>
                  <p className="text-[11px] text-[#736166]">دفترچه مشخصات فنی مقاطع اختصاصی آلومینیوم</p>
                </div>

                <div className="bg-[#EFECE8] p-4 rounded-xl text-[#1F1419] space-y-1">
                  <div className="flex items-center gap-2 font-black text-sm text-[#2B0814]">
                    <span>🏗️</span>
                    <span>نصب و اجرای استاندارد</span>
                  </div>
                  <p className="text-[11px] text-[#736166]">اکیپ‌های اجرایی با نظارت مستقیم مهندسین ناظر</p>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>


      {/* 
        ====================================================
        09. CONTACT SECTION (Map & Quote Form)
        ====================================================
      */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6" id="contact">
        <div className="bg-[#2B0814] border border-[#521D2C] rounded-2xl p-8 sm:p-12 shadow-xl">
          <div className="text-center mb-10">
            <span className="text-xs font-black tracking-widest text-[#D4B038] uppercase">CONTACT</span>
            <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">
              ارتباط با کارشناسان و استعلام قیمت
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Factory Address & Map */}
            <div className="lg:col-span-5 bg-[#380A1A] border border-[#521D2C] rounded-xl p-6 sm:p-8 space-y-5 text-right">
              <h3 className="text-lg font-black text-white">دفتر مرکزی و کارخانه</h3>
              
              <div className="space-y-3.5 text-xs sm:text-sm text-[#D9C7CF]">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-5 h-5 text-[#D4B038] shrink-0 mt-0.5" />
                  <span>اصفهان، شهرک صنعتی نجف‌آباد، فاز ۲، خیابان کارآفرینان ۷</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Phone className="w-5 h-5 text-[#D4B038] shrink-0" />
                  <span>۰۳۱-۴۲۷۴۰۰۰۰ (۱۰ خط مستقیم)</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Mail className="w-5 h-5 text-[#D4B038] shrink-0" />
                  <span>info@noavaranwindow.com</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Clock className="w-5 h-5 text-[#D4B038] shrink-0" />
                  <span>شنبه تا چهارشنبه ۸:۰۰ الی ۱۷:۰۰ | پنجشنبه‌ها تا ۱۳:۰۰</span>
                </div>
              </div>

              <div className="pt-4 border-t border-[#521D2C]">
                <a
                  href="tel:03142740000"
                  className="block w-full py-3 bg-[#EFECE8] text-[#1F1419] font-black text-center text-xs rounded-lg shadow-md"
                >
                  تماس مستقیم با واحد مهندسی فروش
                </a>
              </div>
            </div>

            {/* Quote Inquiry Form (RTL) */}
            <div className="lg:col-span-7 bg-[#EFECE8] rounded-xl p-6 sm:p-8 text-[#1F1419] text-right">
              <h3 className="text-lg font-black text-[#2B0814] mb-4">فرم استعلام قیمت و مشاوره تخصصی</h3>
              
              <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold mb-1.5 text-[#1F1419]">نام و نام خانوادگی</label>
                    <input
                      type="text"
                      placeholder="مثال: مهندس احمدی"
                      className="w-full px-3.5 py-2.5 bg-white border border-[#D9D0C7] rounded-lg text-xs text-[#1F1419] focus:outline-none focus:border-[#2B0814]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold mb-1.5 text-[#1F1419]">شماره تماس همراه</label>
                    <input
                      type="text"
                      placeholder="۰۹۱۲..."
                      className="w-full px-3.5 py-2.5 bg-white border border-[#D9D0C7] rounded-lg text-xs text-[#1F1419] focus:outline-none focus:border-[#2B0814]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold mb-1.5 text-[#1F1419]">نوع سیستم درخواستی</label>
                  <select className="w-full px-3.5 py-2.5 bg-white border border-[#D9D0C7] rounded-lg text-xs text-[#1F1419] focus:outline-none focus:border-[#2B0814]">
                    <option>پنجره کشویی لیفت اند اسلاید (Lift & Slide)</option>
                    <option>پنجره لولایی دوحالته ترمال‌بریک</option>
                    <option>نمای کرتین‌وال شیشه‌ای (لامل / فریم‌لس)</option>
                    <option>درب ورودی پیوت و آلومینیومی</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold mb-1.5 text-[#1F1419]">شرح پروژه و متراژ تقریبی</label>
                  <textarea
                    rows={3}
                    placeholder="متراژ، شهر محل احداث پروژه و توضیحات خود را بنویسید..."
                    className="w-full px-3.5 py-2.5 bg-white border border-[#D9D0C7] rounded-lg text-xs text-[#1F1419] focus:outline-none focus:border-[#2B0814]"
                  />
                </div>

                <button
                  type="button"
                  className="w-full py-3.5 bg-[#2B0814] hover:bg-[#380A1A] text-white font-bold text-sm rounded-lg shadow-md transition-colors"
                >
                  ارسال درخواست استعلام قیمت
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
