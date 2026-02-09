/*
 * คู่มือบริการบัญชีฉบับละเอียด (ขยายความ)
 * โทนมืออาชีพ อธิบายทีละขั้น ใช้ได้ทั้งเว็บและเอกสารทางการ
 */

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle2, ArrowRight } from "lucide-react";

export default function AccountingGuide() {
  return (
    <div className="min-h-screen print:bg-white">
      {/* ========== NAV (โทนเดียวกับหน้าแรก – แถบน้ำเงิน ข้อความขาว) ========== */}
      <nav className="sticky top-0 z-50 bg-primary border-b border-primary/80 shadow-md print:hidden">
        <div className="container flex items-center justify-between h-16">
          <a href="/" className="flex items-center gap-2">
            <img src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663273442560/QBejgKtCPOgHspUS.png" alt="โลโก้" className="w-10 h-10 rounded-full ring-2 ring-white/30 object-cover" />
            <span className="font-bold text-lg text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
              ดร.เกรียงศักดิ์และเพื่อน
            </span>
          </a>
          <div className="flex items-center gap-4">
            <a href="/#services" className="text-white/90 hover:text-white text-sm transition-smooth">บริการ</a>
            <a href="/#contact" className="text-white/90 hover:text-white text-sm transition-smooth">ติดต่อ</a>
            <Button asChild size="sm" className="bg-[#003d99] hover:bg-[#003380] text-white rounded-full border border-white/20">
              <a href="/#contact">ปรึกษาเบื้องต้น</a>
            </Button>
          </div>
        </div>
      </nav>

      {/* ========== COVER / INTRO (โทนเดียวทั้งเว็บ) ========== */}
      <header className="py-12 md:py-16 border-b border-border bg-legal-tint">
        <div className="container max-w-3xl">
          <p className="text-sm font-medium text-primary uppercase tracking-wider mb-2">
            Accounting Services – Full Detail
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-primary mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
            คู่มือบริการบัญชีฉบับละเอียด (ขยายความ)
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed mb-4">
            บริการด้านบัญชีแบบครบวงจร ให้บริการด้านบัญชี ภาษี และธุรกิจ อย่างถูกต้องตามกฎหมาย โดยทีมงานผู้เชี่ยวชาญ
          </p>
          <p className="text-foreground font-semibold">
            ดำเนินงานโดย<br />
            <span className="text-primary">บริษัท ดร.เกรียงศักดิ์และเพื่อนทนายความการบัญชี จำกัด</span>
          </p>
        </div>
      </header>

      {/* ========== 6 SERVICES (ACCORDION) ========== */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container max-w-3xl">
          <Accordion type="multiple" defaultValue={["0", "1", "2", "3", "4", "5"]} className="space-y-2">
            {/* 1. รับทำบัญชีรายเดือน */}
            <AccordionItem value="0" className="border border-primary/10 rounded-2xl px-4 bg-card shadow-luxury">
              <AccordionTrigger className="hover:no-underline py-5 text-left">
                <span className="flex items-center gap-2">
                  <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 text-primary font-bold text-sm">1</span>
                  รับทำบัญชีรายเดือน (Monthly Accounting)
                </span>
              </AccordionTrigger>
              <AccordionContent className="pb-5 text-muted-foreground space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground mb-1">ความหมาย</h4>
                  <p className="text-sm leading-relaxed">
                    การทำบัญชีรายเดือน คือการบันทึกและจัดการข้อมูลทางการเงินของกิจการในแต่ละเดือน เพื่อให้ทราบผลประกอบการที่แท้จริง และใช้เป็นฐานข้อมูลสำหรับการคำนวณภาษี
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">ขอบเขตงาน</h4>
                  <ul className="text-sm space-y-1 list-disc list-inside">
                    <li>ตรวจสอบเอกสารทางการเงิน เช่น ใบกำกับภาษี, ใบเสร็จรับเงิน, ใบสำคัญจ่าย, ใบแจ้งหนี้</li>
                    <li>บันทึกรายการบัญชีตามมาตรฐานการบัญชี</li>
                    <li>จัดทำ สมุดรายวัน, สมุดแยกประเภท, สรุปรายรับ–รายจ่ายรายเดือน</li>
                    <li>วิเคราะห์ตัวเลขเบื้องต้นให้เจ้าของกิจการเข้าใจ</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">ประโยชน์</h4>
                  <ul className="text-sm space-y-1">
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary shrink-0" /> รู้กำไร–ขาดทุนจริง</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary shrink-0" /> ป้องกันความผิดพลาดทางบัญชี</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary shrink-0" /> เป็นหลักฐานทางกฎหมาย</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary shrink-0" /> ใช้ประกอบการวางแผนธุรกิจ</li>
                  </ul>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* 2. รับทำบัญชีภาษีอากร */}
            <AccordionItem value="1" className="border border-primary/10 rounded-2xl px-4 bg-card shadow-luxury">
              <AccordionTrigger className="hover:no-underline py-5 text-left">
                <span className="flex items-center gap-2">
                  <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 text-primary font-bold text-sm">2</span>
                  รับทำบัญชีภาษีอากร (Tax Accounting)
                </span>
              </AccordionTrigger>
              <AccordionContent className="pb-5 text-muted-foreground space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground mb-1">ความหมาย</h4>
                  <p className="text-sm leading-relaxed">
                    การจัดการภาษีให้ถูกต้องตามกฎหมาย ลดความเสี่ยงจากการถูกตรวจสอบ หรือถูกเรียกเสียค่าปรับและเงินเพิ่ม
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">รายละเอียดภาษีที่ดูแล</h4>
                  <ul className="text-sm space-y-3">
                    <li>
                      <strong className="text-foreground">ภาษีมูลค่าเพิ่ม (VAT)</strong> — จัดทำรายงานภาษีซื้อ–ขาย, ยื่นแบบ ภ.พ.30 รายเดือน, ตรวจสอบความถูกต้องของใบกำกับภาษี
                    </li>
                    <li>
                      <strong className="text-foreground">ภาษีหัก ณ ที่จ่าย</strong> — ภ.ง.ด.1 (เงินเดือนพนักงาน), ภ.ง.ด.3 / ภ.ง.ด.53 (ค่าบริการ ค่าวิชาชีพ), ตรวจสอบอัตราภาษีให้ถูกต้อง
                    </li>
                    <li>
                      <strong className="text-foreground">ภาษีเงินได้นิติบุคคล</strong> — ภ.ง.ด.50 (ประจำปี), ภ.ง.ด.51 (ครึ่งปี), วางแผนภาษีอย่างเหมาะสม ไม่เลี่ยงภาษีผิดกฎหมาย
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">ประโยชน์</h4>
                  <ul className="text-sm space-y-1">
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary shrink-0" /> ลดภาระภาษีอย่างถูกต้อง</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary shrink-0" /> ป้องกันการโดนย้อนหลัง</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary shrink-0" /> ทำให้กิจการโปร่งใส น่าเชื่อถือ</li>
                  </ul>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* 3. รับปิดงบการเงินประจำปี */}
            <AccordionItem value="2" className="border border-primary/10 rounded-2xl px-4 bg-card shadow-luxury">
              <AccordionTrigger className="hover:no-underline py-5 text-left">
                <span className="flex items-center gap-2">
                  <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 text-primary font-bold text-sm">3</span>
                  รับปิดงบการเงินประจำปี (Year-End Closing)
                </span>
              </AccordionTrigger>
              <AccordionContent className="pb-5 text-muted-foreground space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground mb-1">ความหมาย</h4>
                  <p className="text-sm leading-relaxed">
                    การสรุปผลการดำเนินงานของกิจการในรอบปีบัญชี เพื่อนำไปยื่นต่อหน่วยงานรัฐ
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">ขั้นตอนการทำงาน</h4>
                  <ul className="text-sm space-y-1 list-decimal list-inside">
                    <li>ตรวจสอบบัญชีทั้งปี</li>
                    <li>ปรับปรุงบัญชีให้ถูกต้อง</li>
                    <li>จัดทำงบการเงิน ได้แก่ งบกำไรขาดทุน, งบดุล, หมายเหตุประกอบงบ</li>
                    <li>เตรียมเอกสารให้ผู้สอบบัญชี (CPA)</li>
                    <li>ยื่นงบต่อ กรมพัฒนาธุรกิจการค้า (DBD) และกรมสรรพากร</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">เหมาะสำหรับ</h4>
                  <ul className="text-sm space-y-1">
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary shrink-0" /> บริษัททุกประเภท</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary shrink-0" /> ธุรกิจที่ต้องการขอกู้ธนาคาร</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary shrink-0" /> กิจการที่ต้องการความน่าเชื่อถือ</li>
                  </ul>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* 4. รับจดทะเบียนและงานธุรการด้านบัญชี */}
            <AccordionItem value="3" className="border border-primary/10 rounded-2xl px-4 bg-card shadow-luxury">
              <AccordionTrigger className="hover:no-underline py-5 text-left">
                <span className="flex items-center gap-2">
                  <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 text-primary font-bold text-sm">4</span>
                  รับจดทะเบียนและงานธุรการด้านบัญชี
                </span>
              </AccordionTrigger>
              <AccordionContent className="pb-5 text-muted-foreground space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">งานที่ให้บริการ</h4>
                  <ul className="text-sm space-y-1 list-disc list-inside">
                    <li>จดทะเบียนจัดตั้งบริษัท / ห้างหุ้นส่วน</li>
                    <li>จดทะเบียนภาษีมูลค่าเพิ่ม (VAT)</li>
                    <li>ขอเลขประจำตัวผู้เสียภาษี</li>
                    <li>เปลี่ยนแปลงข้อมูลบริษัท (กรรมการ, ที่อยู่, ทุนจดทะเบียน)</li>
                    <li>เลิกกิจการ / ชำระบัญชี</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">จุดเด่น</h4>
                  <ul className="text-sm space-y-1">
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary shrink-0" /> ทำถูกขั้นตอน</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary shrink-0" /> เอกสารถูกต้องตามกฎหมาย</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary shrink-0" /> ลดความยุ่งยากให้เจ้าของกิจการ</li>
                  </ul>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* 5. รับเป็นที่ปรึกษาด้านบัญชีและภาษี */}
            <AccordionItem value="4" className="border border-primary/10 rounded-2xl px-4 bg-card shadow-luxury">
              <AccordionTrigger className="hover:no-underline py-5 text-left">
                <span className="flex items-center gap-2">
                  <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 text-primary font-bold text-sm">5</span>
                  รับเป็นที่ปรึกษาด้านบัญชีและภาษี (Consulting)
                </span>
              </AccordionTrigger>
              <AccordionContent className="pb-5 text-muted-foreground space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">ลักษณะงาน</h4>
                  <ul className="text-sm space-y-1 list-disc list-inside">
                    <li>ให้คำปรึกษาปัญหาบัญชี</li>
                    <li>วางระบบบัญชีสำหรับกิจการใหม่</li>
                    <li>วิเคราะห์โครงสร้างต้นทุน</li>
                    <li>แนะนำแนวทางจัดการภาษี</li>
                    <li>อธิบายด้วยภาษาที่เข้าใจง่าย</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">เหมาะกับใคร</h4>
                  <ul className="text-sm space-y-1">
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary shrink-0" /> ผู้ประกอบการมือใหม่</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary shrink-0" /> SME</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary shrink-0" /> ธุรกิจออนไลน์</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary shrink-0" /> เจ้าของกิจการที่ไม่มีฝ่ายบัญชี</li>
                  </ul>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* 6. แก้ไขบัญชีและภาษีย้อนหลัง */}
            <AccordionItem value="5" className="border border-primary/10 rounded-2xl px-4 bg-card shadow-luxury">
              <AccordionTrigger className="hover:no-underline py-5 text-left">
                <span className="flex items-center gap-2">
                  <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 text-primary font-bold text-sm">6</span>
                  แก้ไขบัญชีและภาษีย้อนหลัง
                </span>
              </AccordionTrigger>
              <AccordionContent className="pb-5 text-muted-foreground space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">กรณีที่พบบ่อย</h4>
                  <ul className="text-sm space-y-1 list-disc list-inside">
                    <li>ไม่เคยทำบัญชีมาก่อน</li>
                    <li>บัญชีผิด / ขาดเอกสาร</li>
                    <li>ถูกเรียกตรวจจากสรรพากร</li>
                    <li>ยื่นภาษีผิดพลาด</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">วิธีดำเนินการ</h4>
                  <ul className="text-sm space-y-1 list-decimal list-inside">
                    <li>ตรวจสอบปัญหา</li>
                    <li>วางแผนแก้ไขอย่างถูกต้อง</li>
                    <li>ดำเนินการตามกฎหมาย</li>
                    <li>ลดความเสียหายสูงสุด</li>
                  </ul>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* ========== จุดแข็ง ========== */}
      <section className="py-12 md:py-16 bg-legal-tint border-y border-primary/10">
        <div className="container max-w-3xl">
          <h2 className="text-xl font-bold text-primary mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
            จุดแข็งของงานบัญชี
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-foreground">
            <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-primary shrink-0" /> ทีมงานบัญชีมืออาชีพ</li>
            <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-primary shrink-0" /> ทำงานร่วมกับทนายความได้ทันที</li>
            <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-primary shrink-0" /> ดูแลตั้งแต่เริ่มต้นจนจบ</li>
            <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-primary shrink-0" /> โปร่งใส ตรวจสอบได้</li>
            <li className="flex items-center gap-2 sm:col-span-2"><CheckCircle2 className="w-5 h-5 text-accent shrink-0" /> ให้คำปรึกษาเหมือนมีนักบัญชีประจำ</li>
          </ul>
        </div>
      </section>

      {/* ========== CTA ========== */}
      <section className="py-12 md:py-16 print:py-8">
        <div className="container max-w-3xl text-center">
          <p className="text-muted-foreground mb-6">
            ต้องการปรึกษาแพ็กเกจรายเดือน/รายปี หรือขอเอกสารเสนอราคา? ติดต่อเราได้ทันที
          </p>
          <div className="flex flex-wrap justify-center gap-3 print:hidden">
            <Button asChild className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 shadow-luxury">
              <a href="/#contact">
                ขอคำแนะนำเบื้องต้น
                <ArrowRight className="ml-2 w-4 h-4 inline" />
              </a>
            </Button>
            <Button asChild variant="outline" className="border-primary text-primary rounded-full px-8 hover:bg-primary/5">
              <a href="/">กลับหน้าแรก</a>
            </Button>
          </div>
          <p className="mt-8 text-xs text-muted-foreground">
            บริษัท ดร.เกรียงศักดิ์และเพื่อนทนายความการบัญชี จำกัด — ให้บริการด้านบัญชี ภาษี และธุรกิจ อย่างถูกต้องตามกฎหมาย
          </p>
        </div>
      </section>

      {/* ========== FOOTER (โทนเดียวกับหน้าแรก) ========== */}
      <footer className="bg-primary text-white py-8 print:py-4">
        <div className="container max-w-3xl flex flex-col sm:flex-row justify-between items-center gap-2 text-sm text-white/80">
          <span>© {new Date().getFullYear()} บริษัท ดร.เกรียงศักดิ์และเพื่อนทนายความการบัญชี จำกัด</span>
          <div className="flex gap-4 print:hidden">
            <a href="/#contact" className="hover:text-white transition-smooth">ติดต่อ</a>
            <a href="/" className="hover:text-white transition-smooth">หน้าแรก</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
