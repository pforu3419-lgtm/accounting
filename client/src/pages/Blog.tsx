/**
 * Blog Page - Accounting & Tax Knowledge Articles
 * 
 * Displays educational articles about accounting and tax
 * to demonstrate expertise and provide value to visitors
 */

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronRight, Calendar, User, ArrowRight, Search, X } from "lucide-react";
import { useState } from "react";
import { useLocation } from "wouter";

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const articles = [
    {
      id: 1,
      title: "วิธีการจัดเก็บเอกสารบัญชีให้ถูกต้องตามกฎหมาย",
      excerpt: "การจัดเก็บเอกสารบัญชีอย่างถูกต้องเป็นสิ่งสำคัญเพื่อให้สอบการตรวจสอบจากสรรพากร เรียนรู้วิธีการจัดเก็บที่ถูกต้อง...",
      content: "การจัดเก็บเอกสารบัญชีอย่างถูกต้องเป็นสิ่งสำคัญเพื่อให้สอบการตรวจสอบจากสรรพากร ต้องเก็บเอกสารเป็นเวลาอย่างน้อย 5 ปี ประเภทเอกสารที่ต้องเก็บ ได้แก่ ใบเสร็จรับเงิน ใบสั่งซื้อ ใบเบิกจ่าย สำเนาใบทะเบียนการค้า และเอกสารอื่นๆ ที่เกี่ยวข้องกับการบัญชี",
      category: "บัญชี",
      date: "2026-02-01",
      author: "ผศ.ดร.เกรียงศักดิ์ พินทสรศรี",
      readTime: "5 นาที",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop",
    },
    {
      id: 2,
      title: "ภาษีอากรที่ผู้ประกอบการต้องรู้ในปี 2566",
      excerpt: "ภาษีอากรมีการเปลี่ยนแปลงทุกปี ผู้ประกอบการต้องทำความเข้าใจเพื่อหลีกเลี่ยงการผิดนัดชำระภาษี...",
      content: "ภาษีอากรมีการเปลี่ยนแปลงทุกปี ในปี 2566 มีการเปลี่ยนแปลงที่สำคัญหลายประการ เช่น อัตราภาษีอากรที่เปลี่ยนแปลง วิธีการยื่นแบบประกาศตัวเพิ่มเติม และการคำนวณภาษีอากร ผู้ประกอบการต้องทำความเข้าใจเพื่อหลีกเลี่ยงการผิดนัดชำระภาษี",
      category: "ภาษี",
      date: "2026-01-28",
      author: "ผศ.ดร.เกรียงศักดิ์ พินทสรศรี",
      readTime: "7 นาที",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=600&h=400&fit=crop",
    },
    {
      id: 3,
      title: "วิธีการคำนวณค่าเสื่อมราคาสินทรัพย์ถูกต้อง",
      excerpt: "ค่าเสื่อมราคาเป็นส่วนสำคัญของบัญชี ต้องคำนวณให้ถูกต้องตามกฎหมายภาษีอากร...",
      content: "ค่าเสื่อมราคาเป็นส่วนสำคัญของบัญชี ต้องคำนวณให้ถูกต้องตามกฎหมายภาษีอากร วิธีการคำนวณค่าเสื่อมราคามีหลายวิธี เช่น วิธีเส้นตรง วิธีลดลง และวิธีหน่วยผลิต การเลือกวิธีที่เหมาะสมจะส่งผลต่อการคำนวณภาษีอากร",
      category: "บัญชี",
      date: "2026-01-25",
      author: "ผศ.ดร.เกรียงศักดิ์ พินทสรศรี",
      readTime: "6 นาที",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    },
    {
      id: 4,
      title: "การบัญชีสำหรับธุรกิจออนไลน์ (E-commerce)",
      excerpt: "ธุรกิจออนไลน์มีความซับซ้อนในการบัญชี เนื่องจากมีการทำธุรกรรมหลากหลายช่องทาง...",
      content: "ธุรกิจออนไลน์มีความซับซ้อนในการบัญชี เนื่องจากมีการทำธุรกรรมหลากหลายช่องทาง เช่น ขายผ่าน Facebook, Instagram, Shopee, Lazada เป็นต้น ต้องมีระบบบัญชีที่ดีเพื่อติดตามรายได้และค่าใช้จ่ายจากแต่ละช่องทาง",
      category: "บัญชี",
      date: "2026-01-22",
      author: "ผศ.ดร.เกรียงศักดิ์ พินทสรศรี",
      readTime: "8 นาที",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
    },
    {
      id: 5,
      title: "ภาษีมูลค่าเพิ่ม (VAT) สำหรับผู้ประกอบการ",
      excerpt: "ภาษีมูลค่าเพิ่มเป็นภาษีที่ผู้ประกอบการต้องเข้าใจ เพื่อไม่ให้เสียเปรียบ...",
      content: "ภาษีมูลค่าเพิ่มเป็นภาษีที่ผู้ประกอบการต้องเข้าใจ เพื่อไม่ให้เสียเปรียบ ผู้ประกอบการที่มีรายได้เกินกว่า 1.8 ล้านบาทต้องจดทะเบียน VAT และต้องเสียภาษี VAT ในอัตรา 7% ต้องเข้าใจวิธีการคำนวณและการยื่นแบบประกาศตัว",
      category: "ภาษี",
      date: "2026-01-19",
      author: "ผศ.ดร.เกรียงศักดิ์ พินทสรศรี",
      readTime: "6 นาที",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop",
    },
    {
      id: 6,
      title: "วิธีการจัดการเงินสดในธุรกิจให้มีประสิทธิภาพ",
      excerpt: "การจัดการเงินสดอย่างดีเป็นกุญแจสำคัญของความสำเร็จของธุรกิจ...",
      content: "การจัดการเงินสดอย่างดีเป็นกุญแจสำคัญของความสำเร็จของธุรกิจ ต้องมีระบบการเก็บรักษาเงินสด การบันทึกรายรับรายจ่าย และการสอบยอดเงินสดอย่างสม่ำเสมอ การจัดการเงินสดที่ดีจะช่วยให้ธุรกิจมีเงินสดเพียงพอสำหรับการดำเนินงาน",
      category: "บัญชี",
      date: "2026-01-16",
      author: "ผศ.ดร.เกรียงศักดิ์ พินทสรศรี",
      readTime: "5 นาที",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=600&h=400&fit=crop",
    },
  ];

  const categories = [
    { name: "ทั้งหมด", value: "all" },
    { name: "บัญชี", value: "บัญชี" },
    { name: "ภาษี", value: "ภาษี" },
  ];

  const filteredArticles = articles.filter(article => {
    const matchesCategory = selectedCategory === "all" || article.category === selectedCategory;
    const matchesSearch = searchQuery === "" || 
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.content.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen">
      {/* Navigation (โทนเดียวกับหน้าแรก – แถบน้ำเงิน ข้อความขาว) */}
      <nav className="sticky top-0 z-50 bg-primary border-b border-primary/80 shadow-md">
        <div className="container flex items-center justify-between h-16 md:h-20">
          <a href="/" className="flex items-center gap-2">
            <img src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663273442560/QBejgKtCPOgHspUS.png" alt="โลโก้" className="w-10 h-10 rounded-full ring-2 ring-white/30 object-cover" />
            <span className="font-bold text-xl text-white hidden sm:inline" style={{ fontFamily: "'Playfair Display', serif" }}>
              ดร.เกรียงศักดิ์และเพื่อน
            </span>
          </a>

          <div className="flex items-center gap-4">
            <a href="/" className="text-white/90 hover:text-white transition-smooth text-sm">
              กลับหน้าแรก
            </a>
            <a href="/services-guide" className="text-white/90 hover:text-white transition-smooth text-sm">
              คู่มือบริการ
            </a>
            <Button asChild className="bg-[#003d99] hover:bg-[#003380] text-white rounded-full px-6 py-2 border border-white/20">
              <a href="/#contact">ติดต่อเรา</a>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section (โทนเดียวทั้งเว็บ) */}
      <section className="py-12 md:py-20 bg-legal-tint">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              บล็อกความรู้
            </h1>
            <p className="text-lg text-muted-foreground">
              บทความและความรู้ด้านบัญชีและภาษี โดย บริษัท ดร.เกรียงศักดิ์และเพื่อนทนายความการบัญชี จำกัด
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          {/* Search Bar */}
          <div className="mb-12">
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="ค้นหาบทความ..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-12 py-3 border border-border rounded-lg bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-smooth"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-smooth"
                >
                  <X className="w-5 h-5" />
                </button>
              )}
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-3 mb-12 justify-center">
            {categories.map((category) => (
              <button
                key={category.value}
                onClick={() => setSelectedCategory(category.value)}
                className={`px-6 py-2 rounded-full font-medium transition-smooth ${
                  selectedCategory === category.value
                    ? "bg-primary text-white"
                    : "bg-white border border-primary/10 text-foreground hover:bg-primary/5 hover:border-primary/20"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {filteredArticles.map((article) => (
              <Card 
                key={article.id}
                className="overflow-hidden rounded-2xl shadow-luxury hover:shadow-luxury-hover transition-luxury border border-primary/10 hover:border-primary/20 group cursor-pointer"
              >
                {/* Article Image */}
                <div className="overflow-hidden h-48 bg-secondary">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Article Content */}
                <div className="p-6">
                  {/* Category Badge */}
                  <div className="mb-3">
                    <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
                      {article.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-foreground mb-3 line-clamp-2">
                    {article.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {article.excerpt}
                  </p>

                  {/* Meta Info */}
                  <div className="flex flex-wrap gap-4 text-xs text-muted-foreground mb-4 pb-4 border-b border-border">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(article.date).toLocaleDateString('th-TH')}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span>⏱️ {article.readTime}</span>
                    </div>
                  </div>

                  {/* Read More Link */}
                  <button 
                    onClick={() => window.location.href = `/blog/${article.id}`}
                    className="inline-flex items-center gap-2 text-primary font-semibold hover:text-primary/80 transition-smooth group/link bg-transparent border-none cursor-pointer p-0"
                  >
                    อ่านเพิ่มเติม
                    <ChevronRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </button>
                </div>
              </Card>
            ))}
          </div>

          {/* Empty State */}
          {filteredArticles.length === 0 && (
            <div className="text-center py-12">
              <p className="text-lg text-muted-foreground">
                {searchQuery ? "ไม่พบบทความที่ตรงกับคำค้นหา" : "ไม่พบบทความในหมวดหมู่นี้"}
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-white">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              ต้องการคำปรึกษาเพิ่มเติม?
            </h2>
            <p className="text-lg text-white/90 mb-8">
              ติดต่อเรา เพื่อขอคำปรึกษาเบื้องต้นฟรี
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild
                className="bg-white text-primary hover:bg-white/90 rounded-full px-8 py-3 font-semibold"
              >
                <a href="tel:0816116174">📞 081-611-6174</a>
              </Button>
              <Button 
                className="bg-[#06C755] hover:bg-[#05b04c] text-white rounded-full px-8 py-3 font-semibold"
              >
                💬 Line: 0888137777
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white py-12 md:py-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-semibold mb-4">บริษัท ดร.เกรียงศักดิ์และเพื่อนทนายความการบัญชี จำกัด</h4>
              <ul className="space-y-2 text-sm text-white/80">
                <li>บริการบัญชี ภาษี และธุรกิจ</li>
                <li>อย่างถูกต้องตามกฎหมาย</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">บริการ</h4>
              <ul className="space-y-2 text-sm text-white/80">
                <li><a href="/services-guide" className="hover:text-white transition-smooth">คู่มือบริการฉบับละเอียด</a></li>
                <li><a href="/#services" className="hover:text-white transition-smooth">บัญชีรายเดือน</a></li>
                <li><a href="/#services" className="hover:text-white transition-smooth">ภาษีอากร</a></li>
                <li><a href="/#services" className="hover:text-white transition-smooth">ปิดงบการเงิน</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">ข้อมูล</h4>
              <ul className="space-y-2 text-sm text-white/80">
                <li><a href="/" className="hover:text-white transition-smooth">หน้าแรก</a></li>
                <li><a href="/blog" className="hover:text-white transition-smooth">บล็อก</a></li>
                <li><a href="/#contact" className="hover:text-white transition-smooth">ติดต่อเรา</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">ติดต่อ</h4>
              <ul className="space-y-2 text-sm text-white/80">
                <li><a href="tel:0816116174" className="hover:text-white">📞 มือถือ 081-611-6174</a></li>
                <li><a href="tel:027540992" className="hover:text-white">โทร 02-754-0992-3</a></li>
                <li><a href="tel:027540325" className="hover:text-white">โทร 02-754-0325</a></li>
                <li>💬 Line: 0888137777</li>
                <li>📍 199 หมู่ 9 ถนนแบริ่ง 107 [35-37] ต.สำโรงเหนือ อ.เมืองสมุทรปราการ จ.สมุทรปราการ 10270</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/20 pt-8">
            <p className="text-sm text-white/80 text-center">
              © 2026 บริษัท ดร.เกรียงศักดิ์และเพื่อนทนายความการบัญชี จำกัด. สงวนสิทธิ์ทั้งหมด
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
