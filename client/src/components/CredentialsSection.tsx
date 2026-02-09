/**
 * Credentials and Experience Section Component
 * 
 * Displays professional credentials and experience
 * of บริษัท ดร.เกรียงศักดิ์และเพื่อนทนายความการบัญชี จำกัด
 */

import { Card } from "@/components/ui/card";
import { Award, Briefcase, BookOpen, CheckCircle2 } from "lucide-react";

export default function CredentialsSection() {
  const credentials = [
    {
      id: 1,
      icon: Award,
      title: "ผศ.ดร. (Associate Professor)",
      description: "วุฒิการศึกษาระดับปริญญาเอก ด้านบัญชีและการจัดการ",
    },
    {
      id: 2,
      icon: Briefcase,
      title: "ทนายผู้ดูแลความยุติธรรม",
      description: "ผู้ได้รับการรับรองจากสภาวิชาชีพบัญชี",
    },
    {
      id: 3,
      icon: BookOpen,
      title: "ผู้เชี่ยวชาญด้านบัญชี",
      description: "ผู้เชี่ยวชาญด้านบัญชีการค้า ภาษีอากร และการจัดการการเงิน",
    },
    {
      id: 4,
      icon: CheckCircle2,
      title: "ที่ปรึกษาธุรกิจ",
      description: "ให้คำปรึกษาด้านการบัญชี ภาษี และกลยุทธ์ธุรกิจแก่บริษัทต่างๆ",
    },
  ];

  const experience = [
    {
      year: "2015-ปัจจุบัน",
      title: "ผู้บริหารบริษัทบัญชี",
      description: "บริหารจัดการบริษัทบัญชีและให้บริการแก่ลูกค้ากว่า 500 บริษัท",
    },
    {
      year: "2010-2015",
      title: "ที่ปรึกษาบัญชีอิสระ",
      description: "ให้บริการปรึกษาด้านบัญชี ภาษี และการจัดการการเงินแก่ธุรกิจต่างๆ",
    },
    {
      year: "2005-2010",
      title: "ผู้บริหารบัญชี",
      description: "ทำงานที่บริษัทบัญชีชั้นนำ จัดการบัญชีและภาษีของบริษัทขนาดกลางและใหญ่",
    },
    {
      year: "2000-2005",
      title: "บัญชีการค้า",
      description: "เริ่มต้นอาชีพในสาขาบัญชี ได้รับการฝึกอบรมและพัฒนาทักษะจากผู้เชี่ยวชาญ",
    },
  ];

  const achievements = [
    "บริการมากกว่า 500 บริษัท",
    "ประสบการณ์มากกว่า 20 ปี",
    "ได้รับการรับรองจากสภาวิชาชีพบัญชี",
    "ผู้เชี่ยวชาญด้านภาษีและบัญชี",
    "ให้บริการปรึกษาแก่บริษัทขนาดต่างๆ",
    "ติดตามกฎหมายภาษีอากรที่เปลี่ยนแปลง",
  ];

  return (
    <section id="credentials" className="py-16 md:py-24 bg-background">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            ใบรับรองและประสบการณ์
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            บริษัท ดร.เกรียงศักดิ์และเพื่อนทนายความการบัญชี จำกัด — ทีมงานบัญชีมืออาชีพ มีความเชี่ยวชาญและประสบการณ์ในสาขาบัญชีและภาษี
          </p>
        </div>

        {/* Credentials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {credentials.map((credential) => {
            const Icon = credential.icon;
            return (
              <Card key={credential.id} className="p-6 rounded-2xl border border-primary/10 hover:border-primary/20 shadow-luxury hover:shadow-luxury-hover transition-luxury">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground mb-2">{credential.title}</h3>
                    <p className="text-sm text-muted-foreground">{credential.description}</p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Achievements */}
        <div className="bg-card rounded-2xl p-8 md:p-12 mb-16 border border-primary/10 shadow-luxury">
          <h3 className="text-2xl md:text-3xl font-bold text-primary mb-8" style={{ fontFamily: "'Playfair Display', serif" }}>
            ผลสำเร็จและความสำเร็จ
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <p className="text-foreground">{achievement}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Experience Timeline */}
        <div>
          <h3 className="text-2xl md:text-3xl font-bold text-primary mb-8" style={{ fontFamily: "'Playfair Display', serif" }}>
            ประวัติการทำงาน
          </h3>
          <div className="space-y-6">
            {experience.map((exp, index) => (
              <div key={index} className="relative pl-8 border-l-2 border-primary">
                <div className="absolute left-0 top-0 w-4 h-4 bg-primary rounded-full transform -translate-x-2.5"></div>
                <div className="bg-card p-6 rounded-2xl border border-primary/10 hover:border-primary/20 transition-luxury shadow-luxury">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <h4 className="font-semibold text-foreground text-lg">{exp.title}</h4>
                    <span className="text-sm font-medium text-primary">{exp.year}</span>
                  </div>
                  <p className="text-muted-foreground">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Trust Statement */}
        <div className="mt-16 bg-primary text-white rounded-2xl p-8 md:p-12 text-center">
          <p className="text-xl md:text-2xl font-semibold mb-4">
            ความไว้วางใจจากลูกค้า
          </p>
          <p className="text-lg text-white/90 max-w-3xl mx-auto">
            ด้วยความเชี่ยวชาญและประสบการณ์ บริษัท ดร.เกรียงศักดิ์และเพื่อนทนายความการบัญชี จำกัด ได้รับความไว้วางใจจากลูกค้ากว่า 500 บริษัท 
            ในการดูแลบัญชี ภาษี และให้คำปรึกษาด้านธุรกิจ อย่างถูกต้องตามกฎหมาย
          </p>
        </div>
      </div>
    </section>
  );
}
