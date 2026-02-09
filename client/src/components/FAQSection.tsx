/**
 * FAQ Section Component
 * 
 * Displays frequently asked questions about accounting and tax services
 * Uses Accordion component for expandable Q&A
 */

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function FAQSection() {
  const faqs = [
    { id: "faq-1", question: "ควรจ้างบริษัทรับทำบัญชีเมื่อไหร่?", answer: "เมื่อธุรกิจมีรายได้สม่ำเสมอ ไม่มีเวลาจัดการบัญชีเอง หรือต้องการความเชี่ยวชาญด้านภาษีและรายงานการเงินที่ถูกต้อง" },
    { id: "faq-2", question: "ต้องเตรียมเอกสารอะไรบ้าง?", answer: "ใบเสร็จ ใบสั่งซื้อ ใบเบิกจ่าย สำเนาทะเบียนการค้า ข้อมูลพนักงาน (ถ้ามี) และสัญญา/เอกสารสำคัญอื่นๆ" },
    { id: "faq-3", question: "ค่าบริการคิดอย่างไร?", answer: "คิดตามแพ็กเกจ (Starter 5,000 ฿/เดือน, Business 10,000 ฿/เดือน, Enterprise ติดต่อเรา) ไม่มีค่าซ่อน" },
    { id: "faq-4", question: "ข้อมูลของฉันปลอดภัยหรือไม่?", answer: "ใช่ เราใช้ระบบเข้ารหัสข้อมูล เก็บในเซิร์ฟเวอร์ที่ปลอดภัย และมีนโยบายความเป็นส่วนตัวชัดเจน" },
    { id: "faq-5", question: "ยกเลิกสัญญาได้หรือไม่?", answer: "ได้ แจ้งล่วงหน้า 30 วัน ไม่มีค่าปรับ เราส่งมอบข้อมูลทั้งหมดให้คุณ" },
    { id: "faq-6", question: "ระยะเวลาจัดการบัญชีเป็นอย่างไร?", answer: "บัญชีรายเดือนภายใน 5 วันทำการหลังสิ้นเดือน ภาษีรายปีภายใน 15 วันทำการหลังปิดบัญชี" },
    { id: "faq-7", question: "ติดต่อสอบถามได้อย่างไร?", answer: "โทร 081-611-6174, Line 0888137777 จันทร์–ศุกร์ 09:00–18:00 หรือกดปุ่มปรึกษาฟรีด้านล่าง" },
    { id: "faq-8", question: "บริษัทมีประสบการณ์เท่าไหร่?", answer: "บริการมากกว่า 500 บริษัท ประสบการณ์มากกว่า 10 ปี ทีมผู้เชี่ยวชาญด้านบัญชีและกฎหมาย" },
  ];

  return (
    <section id="faq" className="py-16 md:py-24 bg-slate-50/70">
      <div className="container">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
            คำถามที่พบบ่อย
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            คำตอบสั้นๆ เกี่ยวกับบริการบัญชี ภาษี และกฎหมาย
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq) => (
              <AccordionItem 
                key={faq.id}
                value={faq.id} 
                className="border border-border rounded-xl px-5 bg-white hover:border-primary/20 transition-all"
              >
                <AccordionTrigger className="text-left text-foreground font-semibold hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pt-2 text-sm">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
