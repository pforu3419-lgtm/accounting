/*
 * Home Page - Accounting Website
 * โทนสีทั้งเว็บ: ใช้ primary (#173B75) และ accent (#2563eb) จาก index.css
 */

import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ChevronRight, Menu, BarChart2, Scale, Building2, Phone, Youtube } from "lucide-react";
import { useState } from "react";

/** ลิงก์เพิ่มเพื่อน LINE (ใช้ใน Dialog และปุ่มเปิดแอป) */
const LINE_ADD_URL = "https://line.me/ti/p/0888137777";

/** เบอร์โทรติดต่อที่โทรได้จริง (โทรด่วน) */
const CONTACT_PHONES = [
  { label: "โทรด่วน", number: "0816116174", display: "081 611 6174" },
  { label: "โทรด่วน", number: "027540992", display: "02 754 0992" },
  { label: "โทรด่วน", number: "027540993", display: "02 754 0993" },
  { label: "โทรด่วน", number: "027540325", display: "02 754 0325" },
] as const;

/** ไอคอน LINE (โลโก้แชทบับเบิล) ใช้กับปุ่มสีเขียว */
function LineIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.349 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.281.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
    </svg>
  );
}

const navLinks = [
  { href: "#services", label: "บริการ" },
  { href: "/services-guide", label: "คู่มือบริการ" },
  { href: "#youtube", label: "คลิป" },
  { href: "#faq", label: "FAQ" },
  { href: "/blog", label: "บล็อก" },
  { href: "#contact", label: "ติดต่อ" },
];

/** รหัสวิดีโอ YouTube (แทนที่ด้วยรหัสจริงของช่อง) */
const YOUTUBE_CHANNEL_URL = "https://www.youtube.com/watch?v=Y8mdG1Lxm_c"; // ช่องหลัก – ไปที่คลิปหลัก
const YOUTUBE_MAIN_VIDEO_ID = "Y8mdG1Lxm_c"; // คลิปที่โชว์ในหน้าแรก

export default function Home() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [lineQrOpen, setLineQrOpen] = useState(false);

  return (
    <div className="min-h-screen">
      {/* Dialog แสดง QR Code เมื่อกดแชท/เพิ่มเพื่อน LINE */}
      <Dialog open={lineQrOpen} onOpenChange={setLineQrOpen}>
        <DialogContent className="sm:max-w-sm text-center">
          <DialogHeader>
            <DialogTitle>เพิ่มเพื่อน LINE</DialogTitle>
          </DialogHeader>
          <p className="text-muted-foreground text-sm">สแกน QR Code ด้านล่างเพื่อเพิ่มเพื่อนและแชทกับเรา</p>
          <div className="flex justify-center p-4 bg-white rounded-xl border">
            <img src="/line-qr.png" alt="LINE QR Code" className="w-48 h-48" />
          </div>
          <Button asChild className="w-full bg-[#06C755] hover:bg-[#05b04c] text-white rounded-lg">
            <a href={LINE_ADD_URL} target="_blank" rel="noopener noreferrer" onClick={() => setLineQrOpen(false)}>
              <LineIcon className="w-5 h-5 mr-2 inline" /> เปิดในแอป LINE
            </a>
          </Button>
        </DialogContent>
      </Dialog>
      {/* ========== 1. NAVIGATION (โทนเดียวกับทั้งเว็บ) ========== */}
      <nav className="sticky top-0 z-50 bg-primary shadow-md">
        <div className="container flex items-center justify-between h-16 md:h-[4.25rem]">
          {/* Logo + Name */}
          <a href="/" className="flex items-center gap-3 group">
            <div className="relative flex shrink-0">
              <img
                src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663273442560/QBejgKtCPOgHspUS.png"
                alt="โลโก้ บริษัท ดร.เกรียงศักดิ์และเพื่อนทนายความการบัญชี"
                className="w-10 h-10 md:w-11 md:h-11 rounded-full ring-2 ring-white/30 object-cover shadow-sm"
              />
            </div>
            <span className="font-semibold text-base md:text-lg text-white hidden sm:inline tracking-tight whitespace-nowrap">
              ดร.เกรียงศักดิ์และเพื่อน
            </span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3 py-2.5 text-sm font-medium text-white/90 hover:text-white transition-colors whitespace-nowrap rounded-lg hover:bg-white/10"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA ปุ่มสีฟ้าอ่อน + Mobile trigger */}
          <div className="flex items-center gap-2">
            <Button
              className="hidden sm:inline-flex bg-accent hover:bg-accent/90 text-white rounded-lg px-5 md:px-6 h-10 text-sm font-semibold shadow-sm"
              onClick={() => setLineQrOpen(true)}
            >
              ปรึกษาเบื้องต้น
            </Button>
            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="lg:hidden h-10 w-10 rounded-lg text-white hover:bg-white/10"
                  aria-label="เปิดเมนู"
                >
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[min(320px,85vw)] pt-8">
                <div className="flex flex-col gap-1">
                  {navLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="px-4 py-3 rounded-lg text-foreground font-medium hover:bg-accent/10 hover:text-accent transition-colors"
                    >
                      {link.label}
                    </a>
                  ))}
                  <Button
                    className="mt-4 mx-4 w-[calc(100%-2rem)] bg-accent hover:bg-accent/90 text-white rounded-lg h-11 font-semibold"
                    onClick={() => { setMobileOpen(false); setLineQrOpen(true); }}
                  >
                    ปรึกษาเบื้องต้น
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>

      {/* ========== 2. HERO (พื้นหลังน้ำเงินเข้ม + overlay • ข้อความขาว • ปุ่มติดต่อเรา + แชท LINE) ========== */}
      <section className="relative min-h-[420px] md:min-h-[480px] py-16 md:py-24 lg:py-28 flex items-center overflow-hidden">
        {/* พื้นหลัง: ภาพตึกบริษัท (client/public/office-building.png) */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-primary"
          style={{
            backgroundImage: "url(/office-building.png)",
          }}
        />
        <div className="absolute inset-0 bg-primary/80" aria-hidden />
        <div className="container relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-white leading-[1.25] mb-3 tracking-tight">
            รับทำบัญชี ภาษี จดทะเบียนธุรกิจ
            <br />
            และงานกฎหมาย
          </h1>
          <p className="text-base md:text-lg text-white/90 mb-8 md:mb-10">
            บริษัท ดร.เกรียงศักดิ์และเพื่อนทนายความการบัญชี จำกัด
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-white rounded-lg px-6 md:px-8 h-12 text-base font-semibold shadow-lg border border-white/20 inline-flex items-center justify-center gap-2">
              <a href="tel:0816116174">
                <Phone className="w-5 h-5" /> ติดต่อเรา
              </a>
            </Button>
            <Button size="lg" className="bg-[#06C755] hover:bg-[#05b04c] text-white rounded-lg px-6 md:px-8 h-12 text-base font-semibold shadow-lg border border-white/20 inline-flex items-center justify-center gap-2" onClick={() => setLineQrOpen(true)}>
              <LineIcon className="w-5 h-5" /> แชทผ่าน LINE
            </Button>
          </div>
        </div>
      </section>

      {/* ========== 3. บริการของเรา (การ์ดเทาอ่อน • ไอคอนฟ้าอ่อน • ดูรายละเอียด >) ========== */}
      {/* ========== บริการของเรา (แบบภาพ: การ์ดฟ้าอ่อน ขอบน้ำเงิน ไอคอนวงกลมขอบน้ำเงิน) ========== */}
      <section id="services" className="py-16 md:py-20 bg-white">
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-10 md:mb-12 text-center">บริการของเรา</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-4xl mx-auto">
            <a href="/services-guide" className="block p-6 rounded-2xl border-2 border-primary/30 bg-slate-100/90 hover:border-primary/50 hover:bg-slate-100 transition-all text-left">
              <div className="w-12 h-12 rounded-full border-2 border-primary flex items-center justify-center mb-4 text-neutral-500">
                <BarChart2 className="w-6 h-6" strokeWidth={2} />
              </div>
              <h3 className="font-bold text-primary text-lg mb-2 text-center">บริการบัญชี & ภาษี</h3>
              <p className="text-sm text-neutral-600 text-center leading-relaxed mb-3">ยื่นภาษี วางระบบบัญชี<br />ถูกต้องตามกฎหมาย</p>
              <span className="text-primary font-medium text-sm inline-flex items-center gap-0.5">ดูรายละเอียด <ChevronRight className="w-4 h-4" /></span>
            </a>
            <a href="/services-guide" className="block p-6 rounded-2xl border-2 border-primary/30 bg-slate-100/90 hover:border-primary/50 hover:bg-slate-100 transition-all text-left">
              <div className="w-12 h-12 rounded-full border-2 border-primary flex items-center justify-center mb-4 text-neutral-500">
                <Scale className="w-6 h-6" strokeWidth={2} />
              </div>
              <h3 className="font-bold text-primary text-lg mb-2 text-center">ที่ปรึกษากฎหมาย</h3>
              <p className="text-sm text-neutral-600 text-center leading-relaxed mb-3">ธุรกิจ สัญญา แรงงาน ครบวงจร</p>
              <span className="text-primary font-medium text-sm inline-flex items-center gap-0.5">ดูรายละเอียด <ChevronRight className="w-4 h-4" /></span>
            </a>
            <a href="/services-guide" className="block p-6 rounded-2xl border-2 border-primary/30 bg-slate-100/90 hover:border-primary/50 hover:bg-slate-100 transition-all text-left">
              <div className="w-12 h-12 rounded-full border-2 border-primary flex items-center justify-center mb-4 text-neutral-500">
                <Building2 className="w-6 h-6" strokeWidth={2} />
              </div>
              <h3 className="font-bold text-primary text-lg mb-2 text-center">จัดตั้งบริษัท</h3>
              <p className="text-sm text-neutral-600 text-center leading-relaxed mb-3">จดทะเบียนไว เอกสารถูกต้อง<br />พร้อมเริ่มธุรกิจ</p>
              <span className="text-primary font-medium text-sm inline-flex items-center gap-0.5">ดูรายละเอียด <ChevronRight className="w-4 h-4" /></span>
            </a>
          </div>
        </div>
      </section>

      {/* ========== CTA แถบ + ตัวเลข (แบบภาพ: แถบฟ้าเทาเข้มขึ้น ปุ่มน้ำเงินเข้ม ตัวเลขน้ำเงินเข้ม) ========== */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container max-w-4xl">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 p-6 md:p-8 rounded-2xl bg-slate-200/80 border border-slate-300/80">
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-primary leading-snug mb-2">พร้อมยกระดับธุรกิจของคุณ? เริ่มต้นปรึกษาเราวันนี้</h3>
              <p className="text-sm text-neutral-600">ผู้เชี่ยวชาญด้านบัญชีและกฎหมาย พร้อมดูแลคุณทุกขั้นตอน</p>
            </div>
            <Button className="rounded-xl bg-primary hover:bg-primary/90 text-white px-8 h-12 text-base font-semibold shrink-0" onClick={() => setLineQrOpen(true)}>
              ปรึกษาฟรี
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 md:gap-16 text-center mt-14 md:mt-16 max-w-3xl mx-auto">
            <div>
              <p className="text-3xl md:text-4xl font-bold text-primary">500+</p>
              <p className="text-sm text-neutral-600 mt-1">ลูกค้า</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-primary">10+</p>
              <p className="text-sm text-neutral-600 mt-1">ปีประสบการณ์</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-primary">99%</p>
              <p className="text-sm text-neutral-600 mt-1">ลูกค้ากลับมาใช้ซ้ำ</p>
            </div>
          </div>
        </div>
      </section>

      {/* ========== 5.1 ความรู้กฎหมาย & บัญชี (Thumbnail ใหญ่ + ปุ่มดูคลังวิดีโอ) ========== */}
      <section id="youtube" className="py-16 md:py-24 bg-slate-50/70">
        <div className="container max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2 text-center">ความรู้กฎหมาย & บัญชี</h2>
          <p className="text-muted-foreground text-center mb-8">ผศ.ดร.เกรียงศักดิ์ พินทุสรศรี</p>
          <a
            href={YOUTUBE_CHANNEL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-2xl overflow-hidden border border-border bg-white shadow-sm hover:shadow-md transition-all group"
          >
            <div className="aspect-video bg-muted relative">
              <img
                src={`https://img.youtube.com/vi/${YOUTUBE_MAIN_VIDEO_ID}/hqdefault.jpg`}
                alt="วิดีโอความรู้กฎหมายและบัญชี"
                className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-300"
                onError={(e) => {
                  const target = e.currentTarget;
                  if (!target.src.includes('sddefault')) target.src = `https://img.youtube.com/vi/${YOUTUBE_MAIN_VIDEO_ID}/sddefault.jpg`;
                  else target.src = `https://img.youtube.com/vi/${YOUTUBE_MAIN_VIDEO_ID}/mqdefault.jpg`;
                }}
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors">
                <div className="w-20 h-20 rounded-full bg-[#FF0000] flex items-center justify-center shadow-lg">
                  <svg className="w-10 h-10 text-white ml-1" viewBox="0 0 24 24" fill="currentColor" aria-hidden><path d="M8 5v14l11-7z" /></svg>
                </div>
              </div>
            </div>
          </a>
          <div className="mt-6 text-center">
            <Button asChild size="lg" className="bg-[#FF0000] hover:bg-[#CC0000] text-white rounded-full px-8 h-12 font-semibold">
              <a href={YOUTUBE_CHANNEL_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2">
                <Youtube className="w-5 h-5" /> ดูคลังวิดีโอทั้งหมด
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* รายละเอียดบริการ → CTA ไปคู่มือ */}
      <section className="py-10 bg-slate-50/70">
        <div className="container text-center">
          <p className="text-muted-foreground mb-4">บริการครบวงจร ถูกต้องตามกฎหมาย</p>
          <Button asChild size="lg" className="rounded-full h-14 px-10 text-base font-semibold">
            <a href="/services-guide" className="inline-flex items-center gap-2">อ่านคู่มือบริการฉบับละเอียด <ChevronRight className="w-5 h-5" /></a>
          </Button>
        </div>
      </section>

      {/* ========== ความรู้และบทความ | FAQ (2 คอลัมน์ • พื้นฟ้าอ่อน • บล็อกขาว) ========== */}
      <section id="knowledge" className="py-16 md:py-24 bg-slate-100/80">
        <div className="container">
          <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-sm border border-neutral-100 p-8 md:p-10 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12">
              {/* ซ้าย: ความรู้และบทความ */}
              <div id="knowledge-col">
                <h2 className="text-xl md:text-2xl font-bold text-neutral-900 mb-1 text-center lg:text-left">ความรู้และบทความ</h2>
                <p className="text-neutral-600 text-sm md:text-base mb-6 text-center lg:text-left">แหล่งความรู้มืออาชีพ สำหรับธุรกิจของคุณ</p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                  {[
                    { tag: "บัญชี", title: "5 สิ่งที่ควรรู้ก่อนจดทะเบียนบริษัท", desc: "เตรียมความพร้อมก่อนจดทะเบียนธุรกิจ ให้ถูกต้องและรวดเร็ว", href: "/blog" },
                    { tag: "ภาษี", title: "ภาษีที่ SME ต้องรู้ในปีนี้", desc: "อัปเดตกฎหมายภาษีและวิธีวางแผนภาษีสำหรับธุรกิจเล็ก", href: "/blog" },
                    { tag: "กฎหมาย", title: "สัญญาที่ธุรกิจควรมี", desc: "สัญญาพื้นฐานที่ช่วยป้องกันความเสี่ยงทางกฎหมาย", href: "/blog" },
                  ].map((a) => (
                    <a key={a.tag} href={a.href} className="block p-4 rounded-xl border border-neutral-200 bg-white hover:border-primary/30 hover:shadow-md transition-all text-left">
                      <span className="inline-block px-2.5 py-0.5 rounded-md bg-neutral-100 text-neutral-600 text-xs font-medium mb-2">{a.tag}</span>
                      <h3 className="font-semibold text-neutral-900 text-sm mb-1 line-clamp-2">{a.title}</h3>
                      <p className="text-neutral-500 text-xs line-clamp-2 mb-2">{a.desc}</p>
                      <span className="text-accent text-sm font-medium">อ่านต่อ →</span>
                    </a>
                  ))}
                </div>
                <div className="text-center lg:text-left">
                  <Button asChild variant="outline" className="rounded-lg border-neutral-300 text-neutral-800 hover:bg-neutral-50">
                    <a href="/blog">อ่านบทความทั้งหมด</a>
                  </Button>
                </div>
              </div>

              {/* ขวา: คำถามที่พบบ่อย (FAQ) */}
              <div id="faq">
                <h2 className="text-xl md:text-2xl font-bold text-neutral-900 mb-1 text-center lg:text-left">คำถามที่พบบ่อย (FAQ)</h2>
                <p className="text-neutral-600 text-sm md:text-base mb-6 text-center lg:text-left">คลายข้อสงสัย เพื่อความมั่นใจในการตัดสินใจ</p>
                <Accordion type="single" collapsible defaultValue="faq-1" className="space-y-3">
                  {[
                    { id: "faq-1", q: "บริการบัญชีรายเดือนรวมอะไรบ้าง?", a: "รวมบันทึกบัญชี จัดหมวดหมู่งบการเงิน สรุปรายรับ-รายจ่าย และยื่นภาษีพื้นฐานตามที่กฎหมายกำหนด" },
                    { id: "faq-2", q: "ควรจ้างบริษัทรับทำบัญชีเมื่อไหร่?", a: "เมื่อธุรกิจมีรายได้สม่ำเสมอ ไม่มีเวลาจัดการบัญชีเอง หรือต้องการความเชี่ยวชาญด้านภาษีและรายงานการเงินที่ถูกต้อง" },
                    { id: "faq-3", q: "ค่าบริการคิดอย่างไร?", a: "คิดตามแพ็กเกจ (Starter 5,000 ฿/เดือน, Business 10,000 ฿/เดือน, Enterprise ติดต่อเรา) ไม่มีค่าซ่อน" },
                    { id: "faq-4", q: "ข้อมูลของฉันปลอดภัยหรือไม่?", a: "ใช่ เราใช้ระบบเข้ารหัสข้อมูล เก็บในเซิร์ฟเวอร์ที่ปลอดภัย และมีนโยบายความเป็นส่วนตัวชัดเจน" },
                  ].map((faq) => (
                    <AccordionItem key={faq.id} value={faq.id} className="border border-neutral-200 rounded-xl px-4 bg-white">
                      <AccordionTrigger className="text-left text-neutral-900 font-medium hover:text-primary py-4">{faq.q}</AccordionTrigger>
                      <AccordionContent className="text-neutral-600 text-sm pb-4">{faq.a}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
                <p className="text-center lg:text-left text-neutral-800 mt-6 mb-4">ยังมีคำถามเพิ่มเติม?</p>
                <div className="text-center lg:text-left">
                  <Button className="rounded-lg bg-primary hover:bg-primary/90 text-white font-semibold" onClick={() => setLineQrOpen(true)}>
                    ปรึกษาเบื้องต้นฟรี
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== CONTACT (ที่อยู่และข้อมูลติดต่อ • มีไอคอน • แผนที่) ========== */}
      <section id="contact" className="py-16 md:py-20 relative bg-white">
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">ติดต่อเรา</h2>
          <p className="text-muted-foreground mb-8 max-w-xl">บริษัท ดร.เกรียงศักดิ์และเพื่อนทนายความการบัญชี จำกัด — ให้บริการในวันและเวลาทำการ (กรณีเร่งด่วนติดต่อโทรศัพท์มือถือได้โดยตรง)</p>

          {/* การ์ดโทรด่วน 4 เบอร์ (โทรได้จริง) — โทนสีเดียวกับเว็บ (primary/accent) */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
            {CONTACT_PHONES.map((item) => (
              <div key={item.number} className="bg-white rounded-2xl border border-primary/20 shadow-sm p-5 flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center mb-3">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <p className="text-sm font-medium text-foreground mb-1">{item.label}</p>
                <p className="text-lg font-bold text-primary mb-3">{item.display}</p>
                <Button asChild size="sm" variant="outline" className="w-full rounded-full border-primary text-primary hover:bg-primary/10 hover:text-primary">
                  <a href={`tel:${item.number}`}>
                    <Phone className="w-4 h-4 mr-1.5 inline" /> โทรด่วนคลิก
                  </a>
                </Button>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="space-y-6">
              <div className="flex gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Building2 className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground mb-1">ที่อยู่สำนักงาน</p>
                  <p className="text-foreground leading-relaxed text-sm">199 หมู่ 9 ถนนแบริ่ง 107 ตำบลสำโรงเหนือ อำเภอเมืองสมุทรปราการ จังหวัดสมุทรปราการ 10270</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground mb-1">โทรศัพท์</p>
                  <p className="text-foreground text-sm">มือถือ : <a href="tel:0816116174" className="text-primary hover:underline">081-611-6174</a></p>
                  <p className="text-foreground text-sm">สำนักงาน : <a href="tel:027540992" className="text-primary hover:underline">02-754-0992</a>, <a href="tel:027540993" className="text-primary hover:underline">02-754-0993</a></p>
                  <p className="text-foreground text-sm">โทรสาร : <a href="tel:027540325" className="text-primary hover:underline">02-754-0325</a></p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#06C755]/15 flex items-center justify-center shrink-0">
                  <LineIcon className="w-5 h-5 text-[#06C755]" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-semibold text-foreground mb-1">LINE Official</p>
                  <p className="text-foreground text-sm">Line ID : <button type="button" onClick={() => setLineQrOpen(true)} className="text-primary hover:underline font-medium">0888137777</button></p>
                  <p className="text-muted-foreground text-xs mt-1">ปรึกษากฎหมายเบื้องต้น • นัดหมายเข้าพบ • ส่งเอกสารประกอบการพิจารณาคดี</p>
                </div>
              </div>
              <div className="flex items-start gap-4 pt-1">
                <button type="button" onClick={() => setLineQrOpen(true)} className="shrink-0 p-2 bg-white rounded-xl border border-neutral-200 shadow-sm hover:shadow-md transition-shadow cursor-pointer" title="สแกนเพิ่มเพื่อน LINE">
                  <img src="/line-qr.png" alt="LINE QR Code" className="w-24 h-24" />
                </button>
                <p className="text-muted-foreground text-xs pt-2">สแกน QR Code เพื่อเพิ่มเพื่อนและแชทกับเรา</p>
              </div>
              <div className="flex flex-wrap gap-3 pt-2">
                <Button asChild size="default" className="rounded-full bg-primary hover:bg-primary/90 text-white h-11 px-6">
                  <a href="tel:0816116174"><Phone className="w-4 h-4 mr-2 inline" /> โทร</a>
                </Button>
                <Button size="default" className="rounded-full bg-[#06C755] hover:bg-[#05b04c] text-white h-11 px-6" onClick={() => setLineQrOpen(true)}>
                  <LineIcon className="w-4 h-4 mr-2 inline" /> Line
                </Button>
              </div>
            </div>
            <div className="rounded-xl border border-border bg-white overflow-hidden min-h-[280px] flex flex-col shadow-sm">
              <a
                href="https://www.google.com/maps/search/?api=1&query=13.6474556,100.6309608"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center py-2 text-sm text-primary hover:underline font-medium border-b border-border bg-neutral-50/80"
              >
                ดูแผนที่ขนาดใหญ่
              </a>
              <iframe
                title="แผนที่ตั้งสำนักงาน บริษัท ดร.เกรียงศักดิ์และเพื่อนทนายความการบัญชี จำกัด"
                src="https://www.google.com/maps?q=13.6474556,100.6309608&hl=th&z=17&output=embed"
                className="w-full h-[260px] md:h-[300px] min-h-[260px] border-0 flex-1"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <a
                href="https://www.google.com/maps/search/?api=1&query=13.6474556,100.6309608"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center py-2 text-sm text-primary hover:underline font-medium"
              >
                เปิดใน Google Maps / นำทาง
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ========== FOOTER (ที่อยู่และช่องทางติดต่อ) ========== */}
      <footer className="bg-primary text-white py-10 md:py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            <div className="flex items-center gap-2">
              <img src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663273442560/QBejgKtCPOgHspUS.png" alt="โลโก้" className="w-9 h-9 rounded-full object-cover" />
              <span className="font-semibold">ดร.เกรียงศักดิ์และเพื่อน</span>
            </div>
            <div>
              <p className="text-white/90 font-medium mb-2">ที่อยู่</p>
              <p className="text-sm text-white/80">199 หมู่ 9 ถนนแบริ่ง 107 ต.สำโรงเหนือ อ.เมืองสมุทรปราการ จ.สมุทรปราการ 10270</p>
            </div>
            <div>
              <p className="text-white/90 font-medium mb-2">ติดต่อ</p>
              <p className="text-sm text-white/80"><a href="tel:0816116174" className="hover:text-white">081-611-6174</a></p>
              <p className="text-sm text-white/80"><a href="tel:027540992" className="hover:text-white">02-754-0992</a>, <a href="tel:027540993" className="hover:text-white">02-754-0993</a>, <a href="tel:027540325" className="hover:text-white">02-754-0325</a></p>
              <p className="text-sm text-white/80"><button type="button" onClick={() => setLineQrOpen(true)} className="hover:text-white cursor-pointer">Line 0888137777</button></p>
              <button type="button" onClick={() => setLineQrOpen(true)} className="inline-block mt-2 p-1.5 bg-white rounded-lg cursor-pointer" title="สแกนเพิ่มเพื่อน LINE">
                <img src="/line-qr.png" alt="LINE QR Code" className="w-16 h-16" />
              </button>
            </div>
            <div>
              <Button size="lg" className="w-full rounded-full bg-white text-primary hover:bg-white/90 font-semibold" onClick={() => setLineQrOpen(true)}>
                ปรึกษาฟรี
              </Button>
            </div>
          </div>
          <div className="flex flex-wrap gap-4 text-sm text-white/80 border-t border-white/20 pt-6">
            <a href="/services-guide" className="hover:text-white transition-smooth">คู่มือบริการ</a>
            <a href="#services" className="hover:text-white transition-smooth">บริการ</a>
            <a href="/blog" className="hover:text-white transition-smooth">บล็อก</a>
            <a href="#contact" className="hover:text-white transition-smooth">ติดต่อเรา</a>
          </div>
          <div className="mt-6 pt-6 border-t border-white/20">
            <p className="text-sm text-white/80">
              Copyright © {new Date().getFullYear()} บริษัท ดร.เกรียงศักดิ์และเพื่อนทนายความการบัญชี จำกัด
            </p>
            <p className="text-xs text-white/60 mt-2">ข้อมูลในเว็บไซต์จัดทำเพื่อให้ความรู้ทั่วไป ไม่ถือเป็นคำปรึกษาเฉพาะกรณี โปรดติดต่อผู้เชี่ยวชาญเพื่อรับคำปรึกษา</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
