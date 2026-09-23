import React from 'react';
import Link from 'next/link';
import { 
  Building2, 
  ShieldCheck, 
  Award, 
  Phone, 
  ArrowLeft, 
  Play, 
  CheckCircle2, 
  Calculator, 
  Sparkles,
  Layers,
  Grid,
  Maximize,
  Box,
  TreePine,
  Wrench,
  Gauge,
  SlidersHorizontal,
  Flame,
  Volume2
} from 'lucide-react';
import { getServices, getProjects, getArticles, getVideos, getSettings } from '@/lib/db';

export default async function HomePage() {
  const services = await getServices();
  const allProjects = await getProjects();
  const featuredProjects = allProjects.slice(0, 6);
  const articles = await getArticles();
  const recentArticles = articles.slice(0, 3);
  const videos = await getVideos();
  const featuredVideos = videos.slice(0, 2);
  const settings = await getSettings();

  const iconMap: Record<string, any> = {
    Grid: Grid,
    Layers: Layers,
    Maximize: Maximize,
    Box: Box,
    TreePine: TreePine,
    ShieldCheck: ShieldCheck
  };

  return (
    <div className="space-y-28 pb-24 overflow-x-hidden">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[88vh] flex items-center justify-center overflow-hidden border-b border-charcoal-800/80 bg-gradient-to-b from-charcoal-950 via-charcoal-900 to-charcoal-950 pt-12 pb-20">
        {/* Subtle Architectural Grid Texture */}
        <div className="absolute inset-0 hero-grid-pattern opacity-40 pointer-events-none" />

        {/* Ambient Radial Spotlights */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-bronze-500/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-amber-500/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-bronze-500/10 border border-bronze-500/30 text-bronze-300 text-xs font-bold mb-8 shadow-lg shadow-bronze-500/5 backdrop-blur-md">
            <ShieldCheck className="w-4 h-4 text-bronze-400" />
            <span>پیشگام در مهندسی نما و پنجره‌های صنعتی دوجداره از سال ۱۳۸۵</span>
          </div>

          {/* Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-7xl font-black text-white tracking-tight leading-[1.25] max-w-5xl mx-auto">
            طراحی و اجرای تخصصی نماهای شیشه‌ای و{' '}
            <span className="gold-gradient-text block sm:inline mt-2 sm:mt-0">
              پنجره‌های ترمال‌بریک
            </span>
          </h1>

          {/* Description */}
          <p className="mt-6 text-sm sm:text-lg text-titanium-300 max-w-3xl mx-auto leading-relaxed font-normal">
            طراحی محاسباتی ممان اینرسی، تولید مدرن در کارخانه ۱۵۰۰ متری مجهز به ماشین‌آلات ساخت آلمان و ترکیه، و اجرای سیستم‌های کرتین‌وال (لامل)، فریم‌لس، لیفت‌اند‌اسلاید و کامپوزیت با گارانتی ۱۰ ساله کتبی.
          </p>

          {/* Primary Call to Action Buttons */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/calculator"
              className="px-7 py-4 rounded-2xl bg-gradient-to-r from-bronze-400 via-bronze-500 to-amber-500 hover:from-bronze-300 hover:to-bronze-400 text-charcoal-950 font-black text-sm shadow-xl shadow-bronze-500/25 flex items-center gap-2.5 transition-all hover:scale-105 active:scale-95"
            >
              <Calculator className="w-5 h-5 text-charcoal-950" />
              <span>محاسبه‌گر آنلاین پیش‌فاکتور</span>
            </Link>

            <Link
              href="/projects"
              className="px-7 py-4 rounded-2xl bg-charcoal-850/90 hover:bg-charcoal-800 text-titanium-100 border border-charcoal-700 hover:border-bronze-500/40 text-sm font-bold flex items-center gap-2.5 transition-all shadow-lg backdrop-blur-md"
            >
              <span>مشاهده ۵۰+ پروژه شاخص</span>
              <ArrowLeft className="w-4 h-4 text-bronze-400" />
            </Link>

            <a
              href="tel:0314144"
              className="px-6 py-4 rounded-2xl bg-charcoal-900/90 hover:bg-charcoal-850 text-bronze-400 border border-charcoal-700 font-mono text-sm font-bold flex items-center gap-2 transition-all shadow-md"
            >
              <Phone className="w-4 h-4 text-bronze-400" />
              <span>۰۳۱-۴۱۴۴</span>
            </a>
          </div>

          {/* Performance Statistics Bar */}
          <div className="mt-16 pt-10 border-t border-charcoal-800/80 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-5xl mx-auto">
            <div className="p-5 rounded-2xl bg-charcoal-900/60 border border-charcoal-800/80 backdrop-blur-md hover:border-bronze-500/30 transition-all">
              <div className="text-2xl sm:text-4xl font-black text-white font-mono gold-gradient-text">۱۵+ سال</div>
              <div className="text-xs text-titanium-400 mt-1.5 font-bold">پیشینه تخصصی از ۱۳۸۵</div>
            </div>
            <div className="p-5 rounded-2xl bg-charcoal-900/60 border border-charcoal-800/80 backdrop-blur-md hover:border-bronze-500/30 transition-all">
              <div className="text-2xl sm:text-4xl font-black text-white font-mono gold-gradient-text">۱۵۰۰ متر</div>
              <div className="text-xs text-titanium-400 mt-1.5 font-bold">فضای تولید صنعتی مجهز</div>
            </div>
            <div className="p-5 rounded-2xl bg-charcoal-900/60 border border-charcoal-800/80 backdrop-blur-md hover:border-bronze-500/30 transition-all">
              <div className="text-2xl sm:text-4xl font-black text-white font-mono gold-gradient-text">۳۰۰۰+</div>
              <div className="text-xs text-titanium-400 mt-1.5 font-bold">پروژه موفق اداری و ویلایی</div>
            </div>
            <div className="p-5 rounded-2xl bg-charcoal-900/60 border border-charcoal-800/80 backdrop-blur-md hover:border-bronze-500/30 transition-all">
              <div className="text-2xl sm:text-4xl font-black text-white font-mono gold-gradient-text">۱۰ سال</div>
              <div className="text-xs text-titanium-400 mt-1.5 font-bold">گارانتی کتبی عایق‌بندی</div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SERVICES & WINDOW SYSTEMS SHOWCASE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-black text-bronze-400 tracking-widest uppercase bg-bronze-500/10 px-3.5 py-1.5 rounded-full border border-bronze-500/20 inline-block">
            سبد محصولات و سیستم‌های ساختمانی
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-white">
            سیستم‌های مدرن نما و درب و پنجره آلومینیومی
          </h2>
          <p className="text-xs sm:text-sm text-titanium-400 leading-relaxed font-normal">
            بررسی مشخصات فنی، جزئیات پروفیل‌های اختصاصی، مقاطع ترمال‌بریک و استانداردهای عایق‌بندی هر سیستم
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s) => {
            const IconComponent = iconMap[s.icon] || Building2;
            return (
              <div
                key={s.id}
                className="group rounded-3xl bg-charcoal-900 border border-charcoal-800 hover:border-bronze-500/50 transition-all duration-300 flex flex-col overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-bronze-500/10 min-w-0"
              >
                {/* Image & Overlay Header */}
                <div className="relative h-60 w-full bg-charcoal-850 overflow-hidden">
                  <img
                    src={s.image}
                    alt={s.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900 via-charcoal-900/40 to-transparent" />
                  <div className="absolute top-4 right-4 p-3 rounded-2xl bg-charcoal-950/80 backdrop-blur-xl text-bronze-400 border border-white/10 shadow-lg">
                    <IconComponent className="w-5 h-5" />
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-7 flex-grow flex flex-col justify-between space-y-5">
                  <div className="space-y-3">
                    <h3 className="text-lg font-black text-white group-hover:text-bronze-400 transition-colors">
                      {s.title}
                    </h3>
                    <p className="text-xs text-titanium-400 leading-relaxed line-clamp-3 font-normal">
                      {s.summary}
                    </p>
                  </div>

                  {/* Highlights & Features */}
                  <div className="space-y-2 pt-4 border-t border-charcoal-800/80">
                    {s.features.slice(0, 3).map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-titanium-300">
                        <CheckCircle2 className="w-4 h-4 text-bronze-400 shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Action Link */}
                  <Link
                    href={`/services/${s.slug}`}
                    className="pt-2 inline-flex items-center justify-between text-xs font-bold text-bronze-400 hover:text-bronze-300 transition-colors group/link"
                  >
                    <span>جزئیات فنی و مشخصات مقطع</span>
                    <ArrowLeft className="w-4 h-4 group-hover/link:-translate-x-1.5 transition-transform" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. FEATURED PROJECTS ARCHITECTURAL SHOWCASE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 pb-5 border-b border-charcoal-800/80 gap-4">
          <div>
            <span className="text-xs font-black text-bronze-400 tracking-wider uppercase mb-1 block">
              کارنامه و نمونه کارهای اجرایی
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-white">
              پروژه‌های شاخص نوآوران پنجره سپاهان
            </h2>
          </div>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-bronze-400 hover:text-bronze-300 transition-colors shrink-0 bg-bronze-500/10 px-4 py-2.5 rounded-xl border border-bronze-500/20"
          >
            <span>مشاهده آرشیو کامل ۵۵+ پروژه</span>
            <ArrowLeft className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {featuredProjects.map((p) => (
            <div
              key={p.id}
              className="group rounded-2xl bg-charcoal-900 border border-charcoal-800 overflow-hidden hover:border-bronze-500/40 transition-all shadow-lg min-w-0"
            >
              <div className="relative h-64 w-full bg-charcoal-850 overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-transparent to-transparent opacity-80" />
                <span className="absolute top-4 right-4 px-3 py-1 rounded-xl bg-charcoal-950/85 backdrop-blur-md text-[11px] font-bold text-bronze-300 border border-white/10 shadow-md">
                  {p.category}
                </span>
              </div>
              <div className="p-5 space-y-2">
                <h3 className="text-sm font-bold text-white group-hover:text-bronze-400 transition-colors line-clamp-1">
                  {p.title}
                </h3>
                <p className="text-xs text-titanium-400 line-clamp-2 leading-relaxed font-normal">
                  {p.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. EDUCATIONAL VIDEO HUB SPOTLIGHT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-b from-charcoal-900 via-charcoal-900 to-charcoal-950 border border-charcoal-800 p-8 sm:p-14 relative overflow-hidden shadow-2xl">
          {/* Background Accent */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-bronze-500/5 rounded-full blur-[100px] pointer-events-none" />

          <div className="max-w-3xl mb-12 space-y-3">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-bronze-500/20 text-bronze-300 text-xs font-bold border border-bronze-500/30">
              <Play className="w-3.5 h-3.5 fill-current text-bronze-400" />
              کتابخانه ویدیوهای آموزشی و مهندسی
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-white">
              ویدیوهای تست کیفیت، نصب و ریگلاژ (آپارات و یوتیوب)
            </h2>
            <p className="text-xs sm:text-sm text-titanium-300 leading-relaxed font-normal">
              مشاهده عملکرد قطعات، نحوه آب‌بندی پنجره‌های لیفت‌اند‌اسلاید، آزمون افت دسی‌بل صدا و تست‌های نفوذ آب با فیلم‌های کاربردی.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredVideos.map((v) => (
              <div
                key={v.id}
                className="rounded-2xl bg-charcoal-950 border border-charcoal-800 overflow-hidden flex flex-col group hover:border-bronze-500/40 transition-all shadow-xl min-w-0"
              >
                <div className="relative h-60 w-full bg-charcoal-850 overflow-hidden">
                  <img
                    src={v.thumbnail || 'https://arvinpanjereh.com/upload/service/742b5647-017c-4a6e-b416-a184adf97dcc.webp'}
                    alt={v.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80"
                  />
                  <div className="absolute inset-0 bg-charcoal-950/40 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-bronze-500 text-charcoal-950 flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                      <Play className="w-7 h-7 fill-current mr-0.5" />
                    </div>
                  </div>
                  <span className="absolute top-4 right-4 px-3 py-1 rounded-lg bg-charcoal-950/90 text-[11px] text-bronze-300 font-mono font-bold border border-white/10">
                    {v.platform === 'aparat' ? 'آپارات (Aparat)' : 'یوتیوب (YouTube)'}
                  </span>
                  {v.duration && (
                    <span className="absolute bottom-4 left-4 px-2.5 py-1 rounded-lg bg-charcoal-950/90 text-[11px] font-mono text-titanium-300 border border-white/10">
                      {v.duration}
                    </span>
                  )}
                </div>

                <div className="p-6 flex-grow flex flex-col justify-between space-y-4">
                  <div>
                    <span className="text-[11px] text-bronze-400 font-bold uppercase">{v.category}</span>
                    <h3 className="text-sm font-bold text-white mt-1 line-clamp-2 leading-relaxed">
                      {v.title}
                    </h3>
                    <p className="text-xs text-titanium-400 mt-2 line-clamp-2 leading-relaxed font-normal">
                      {v.description}
                    </p>
                  </div>

                  <Link
                    href="/videos"
                    className="text-xs font-bold text-bronze-400 hover:text-bronze-300 flex items-center gap-1.5 pt-2"
                  >
                    <span>مشاهده کامل ویدیو در پرتال</span>
                    <ArrowLeft className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/videos"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-2xl bg-charcoal-850 hover:bg-charcoal-800 text-titanium-100 border border-charcoal-700 text-xs font-bold transition-all shadow-lg"
            >
              <span>ورود به آرشیو ویدیوهای تخصصی</span>
              <ArrowLeft className="w-4 h-4 text-bronze-400" />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. CALCULATOR CONVERSION BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-r from-bronze-600 via-bronze-500 to-amber-500 text-charcoal-950 p-8 sm:p-14 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl relative overflow-hidden">
          <div className="space-y-3 max-w-2xl text-center md:text-right relative z-10">
            <span className="inline-block px-3.5 py-1 rounded-full bg-charcoal-950/20 text-charcoal-950 text-xs font-black uppercase">
              محاسبه‌گر هوشمند پیش‌فاکتور
            </span>
            <h2 className="text-2xl sm:text-4xl font-black leading-snug">
              ابعاد پروژه‌تان را وارد کنید و برآورد تخمینی قیمت را فوراً دریافت نمایید
            </h2>
            <p className="text-xs sm:text-sm font-medium opacity-95 leading-relaxed">
              انتخاب نوع سیستم (کرتین‌وال، لیفت‌اند‌اسلاید، لامل، ترمال‌بریک)، مشخصات شیشه (دوجداره، لمینت، سکوریت)، و متراژ تقریبی نما.
            </p>
          </div>

          <Link
            href="/calculator"
            className="px-8 py-4.5 rounded-2xl bg-charcoal-950 hover:bg-charcoal-900 text-bronze-400 font-black text-sm shadow-2xl hover:scale-105 active:scale-95 transition-all shrink-0 flex items-center gap-2.5 relative z-10"
          >
            <Calculator className="w-5 h-5 text-bronze-400" />
            <span>ورود به محاسبه‌گر قیمت</span>
          </Link>
        </div>
      </section>

      {/* 6. TECHNICAL ARTICLES & KNOWLEDGE BASE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 pb-5 border-b border-charcoal-800/80 gap-4">
          <div>
            <span className="text-xs font-black text-bronze-400 tracking-wider uppercase mb-1 block">
              دانشنامه مهندسی نما
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-white">
              آخرین مقالات و راهنماهای فنی
            </h2>
          </div>
          <Link
            href="/articles"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-bronze-400 hover:text-bronze-300 transition-colors shrink-0 bg-bronze-500/10 px-4 py-2.5 rounded-xl border border-bronze-500/20"
          >
            <span>مشاهده همه مقالات</span>
            <ArrowLeft className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {recentArticles.map((a) => (
            <div
              key={a.id}
              className="rounded-3xl bg-charcoal-900 border border-charcoal-800 overflow-hidden flex flex-col group hover:border-bronze-500/40 transition-all shadow-lg min-w-0"
            >
              <div className="relative h-52 w-full bg-charcoal-850 overflow-hidden">
                <img
                  src={a.image}
                  alt={a.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <span className="absolute top-4 right-4 px-3 py-1 rounded-xl bg-charcoal-950/85 backdrop-blur-md text-[11px] font-bold text-bronze-300 border border-white/10">
                  {a.category}
                </span>
              </div>
              <div className="p-6 flex-grow flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <span className="text-[11px] font-mono text-titanium-400 block">{a.date}</span>
                  <h3 className="text-sm font-bold text-white group-hover:text-bronze-400 transition-colors line-clamp-2 leading-relaxed">
                    {a.title}
                  </h3>
                  <p className="text-xs text-titanium-400 line-clamp-3 leading-relaxed font-normal">
                    {a.excerpt}
                  </p>
                </div>
                <Link
                  href={`/articles/${a.slug}`}
                  className="text-xs font-bold text-bronze-400 hover:text-bronze-300 flex items-center gap-1.5 pt-2"
                >
                  <span>ادامه مطلب و مطالعه راهنما</span>
                  <ArrowLeft className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
