
import { useState } from "react";
import LovableBackground3D from "@/components/LovableBackground3D";
import LovableNavbar from "@/components/LovableNavbar";
import LovableHero from "@/components/LovableHero";
import LovableFeatures from "@/components/LovableFeatures";
import LovableDevicePreview from "@/components/LovableDevicePreview";
import LovableSignupForm from "@/components/LovableSignupForm";
import LovableFooter from "@/components/LovableFooter";
import { Button } from "@/components/ui/button";

const Index = () => {
  const [previewMode, setPreviewMode] = useState<'player' | 'agent'>('player');
  const [deviceMode, setDeviceMode] = useState<'mobile' | 'desktop'>('mobile');

  const scrollToSignUp = () => {
    const signupSection = document.getElementById('signup-section');
    signupSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen text-white overflow-hidden relative">
      {/* 3D Background - Further Zoomed In */}
      <LovableBackground3D />

      {/* Dark overlay for moody look */}
      <div
        className="fixed top-0 left-0 w-full h-full bg-black/40 z-10 pointer-events-none"
      />

      {/* All content with higher z-index */}
      <div className="relative z-20">
        {/* Floating Buttons */}
        <div className="fixed bottom-6 right-6 z-50 flex flex-col space-y-3">
          <Button
            className="w-14 h-14 rounded-full bg-blue-500 hover:bg-blue-600 shadow-lg hover:shadow-xl transition-all duration-300 p-0"
            onClick={() => window.open("https://t.me/PenguinPerHead", "_blank")}
          >
            <img 
              src="/lovable-uploads/c4b41d45-98e2-4b2e-84ba-a735acd5eebc.png" 
              alt="Telegram"
              className="w-8 h-8"
            />
          </Button>
          <Button
            className="w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 shadow-lg hover:shadow-xl transition-all duration-300 p-0"
            onClick={() => window.open("https://wa.me/17282176708", "_blank")}
          >
            <img 
              src="/lovable-uploads/a99e531a-9929-4ed6-a62c-af7b489f0447.png" 
              alt="WhatsApp"
              className="w-8 h-8"
            />
          </Button>
        </div>
        <LovableNavbar scrollToSignUp={scrollToSignUp} />
        <LovableHero />
        <LovableFeatures />
        <LovableDevicePreview 
          previewMode={previewMode}
          deviceMode={deviceMode}
          setPreviewMode={setPreviewMode}
          setDeviceMode={setDeviceMode}
        />
        <LovableSignupForm />
        <LovableFooter />
      </div>
    </div>
  );
};

export default Index;
