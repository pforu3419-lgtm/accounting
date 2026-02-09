import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle, Home } from "lucide-react";
import { useLocation } from "wouter";

export default function NotFound() {
  const [, setLocation] = useLocation();

  const handleGoHome = () => {
    setLocation("/");
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-legal-tint">
      <Card className="w-full max-w-lg mx-4 shadow-luxury border border-primary/10 rounded-2xl bg-card">
        <CardContent className="pt-8 pb-8 text-center">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/10 rounded-full animate-pulse" />
              <AlertCircle className="relative h-16 w-16 text-primary" />
            </div>
          </div>

          <h1 className="text-4xl font-bold text-foreground mb-2">404</h1>

          <h2 className="text-xl font-semibold text-foreground mb-4">
            ไม่พบหน้าที่ต้องการ
          </h2>

          <p className="text-muted-foreground mb-8 leading-relaxed">
            ไม่พบหน้าที่คุณกำลังค้นหา
            <br />
            อาจถูกย้ายหรือลบไปแล้ว
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              onClick={handleGoHome}
              className="bg-primary hover:bg-primary/90 text-white px-6 py-2.5 rounded-full transition-luxury shadow-luxury"
            >
              <Home className="w-4 h-4 mr-2" />
              กลับหน้าแรก
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
