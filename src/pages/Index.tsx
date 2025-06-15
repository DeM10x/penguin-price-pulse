import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Users, Phone, Mail, Smartphone, Monitor, MessageCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
    playerCount: "",
    contactEmail: "",
    phone: ""
  });
  
  const [previewMode, setPreviewMode] = useState<'player' | 'agent'>('player');
  const [deviceMode, setDeviceMode] = useState<'mobile' | 'desktop'>('mobile');
  
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Prepare email content
    const emailContent = {
      to: 'cs@penguinpph.com',
      subject: 'New PPH Signup Request',
      body: `
        New signup request received:
        
        Email: ${formData.email}
        Desired Username: ${formData.username}
        Estimated Players: ${formData.playerCount}
        Contact Email: ${formData.contactEmail}
        Phone: ${formData.phone || 'Not provided'}
        
        Please follow up within 24 hours.
      `
    };

    // Create mailto link
    const mailtoLink = `mailto:${emailContent.to}?subject=${encodeURIComponent(emailContent.subject)}&body=${encodeURIComponent(emailContent.body)}`;
    
    // Open email client
    window.location.href = mailtoLink;
    
    toast({
      title: "Registration Submitted!",
      description: "We'll contact you within 24 hours to set up your account.",
    });
    console.log("Form submitted:", formData);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const scrollToSignUp = () => {
    const signupSection = document.getElementById('signup-section');
    signupSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const features = [
    "Exclusive Penguin Live TV for sports",
    "Exclusive Pragmatic Casino (90% RTP, no revenue share)",
    "Exclusive Plinko-style games (HiLo, Plinko, Mines, Towers)",
    "Exclusive Poker with custom player sheet",
    "+2 Live Casino access",
    "+2 Live Betting access", 
    "+2 Prop Builder tools",
    "24/7 multilingual support (Chinese, English, Spanish)",
    "Sharpest betting lines in the PPH industry",
    "Custom website building included"
  ];

  return (
    <div className="min-h-screen text-white overflow-hidden relative">
      {/* 3D Background - Scaled Zoom */}
      <div
        className="fixed top-0 left-0 w-full h-full z-0"
        style={{
          overflow: "hidden",
          pointerEvents: "auto",
        }}
      >
        <div
          style={{
            width: "100vw",
            height: "100vh",
            transform: "scale(1.6)",
            transformOrigin: "center center",
          }}
        >
          <iframe
            src="https://my.spline.design/particlenebula-kjgZUD8hSBdyuijGw67RUCxf/"
            frameBorder="0"
            width="100%"
            height="100%"
            style={{
              width: "100vw",
              height: "100vh",
              border: "none",
              pointerEvents: "auto",
            }}
            allowFullScreen
          />
        </div>
      </div>
      {/* Dark overlay for moody look, lets iframe receive interaction */}
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

        {/* Navigation */}
        <nav className="px-6 py-4 bg-black/20 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-green-600 rounded-lg flex items-center justify-center">
                <span className="text-black font-bold text-lg">🐧</span>
              </div>
              <span className="text-xl font-bold text-green-400">PenguinPPH</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="flex flex-col space-y-1">
                <Button 
                  variant="outline" 
                  size="sm"
                  className="border-green-400 text-green-400 hover:bg-green-400 hover:text-black transition-all duration-300 text-xs"
                >
                  PLAYER DEMO
                </Button>
                <Button 
                  variant="outline" 
                  size="sm"
                  className="border-green-400 text-green-400 hover:bg-green-400 hover:text-black transition-all duration-300 text-xs"
                >
                  AGENT DEMO
                </Button>
              </div>
              <Button 
                className="bg-gradient-to-r from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 text-black font-bold transition-all duration-300"
                onClick={scrollToSignUp}
              >
                <Users className="w-4 h-4 mr-2" />
                SIGN UP
              </Button>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="px-6 py-20 bg-black/20 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto text-center">
            <div className="animate-fade-in">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                UNLOCK THE BEST{" "}
                <span className="bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
                  PPH DEAL
                </span>
                <br />
                IN THE INDUSTRY
              </h1>
              
              <div className="mb-8 animate-scale-in animation-delay-300">
                <div className="inline-block bg-gradient-to-r from-green-400 to-green-600 p-1 rounded-2xl">
                  <div className="bg-black/80 backdrop-blur-sm px-8 py-4 rounded-2xl">
                    <p className="text-lg md:text-xl text-gray-300 mb-2">JUST</p>
                    <div className="text-6xl md:text-8xl font-black text-green-400 animate-pulse">
                      $5
                    </div>
                    <p className="text-lg md:text-xl text-gray-300 mt-2">
                      PER ACTIVE PLAYER/WEEK
                    </p>
                  </div>
                </div>
              </div>
              
              <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
                Experience the most competitive pricing in the industry with premium features that set you apart from the competition.
              </p>
            </div>
          </div>
        </section>

        {/* Features Section - Clean List Style */}
        <section className="px-6 py-20 bg-black/20 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
              Everything Included for{" "}
              <span className="text-green-400">$5</span>
            </h2>
            
            <div className="max-w-4xl mx-auto">
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center text-lg md:text-xl text-gray-300 hover:text-white transition-colors duration-300">
                    <span className="text-green-400 font-bold mr-4 text-2xl">+</span>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Device Preview Section */}
        <section className="px-6 py-20 bg-black/20 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
              See Your Platform in{" "}
              <span className="text-green-400">Action</span>
            </h2>
            
            <div className="bg-gray-800/50 rounded-2xl p-8 backdrop-blur-sm border border-gray-700">
              {/* Toggle Controls */}
              <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8 mb-8">
                <div className="flex bg-gray-700 rounded-lg p-1">
                  <Button
                    variant={previewMode === 'player' ? 'default' : 'ghost'}
                    size="sm"
                    onClick={() => setPreviewMode('player')}
                    className={previewMode === 'player' ? 'bg-green-500 text-black' : 'text-gray-300'}
                  >
                    PLAYER SITE
                  </Button>
                  <Button
                    variant={previewMode === 'agent' ? 'default' : 'ghost'}
                    size="sm"
                    onClick={() => setPreviewMode('agent')}
                    className={previewMode === 'agent' ? 'bg-green-500 text-black' : 'text-gray-300'}
                  >
                    AGENT SITE
                  </Button>
                </div>
                
                <div className="flex bg-gray-700 rounded-lg p-1">
                  <Button
                    variant={deviceMode === 'mobile' ? 'default' : 'ghost'}
                    size="sm"
                    onClick={() => setDeviceMode('mobile')}
                    className={deviceMode === 'mobile' ? 'bg-green-500 text-black' : 'text-gray-300'}
                  >
                    <Smartphone className="w-4 h-4 mr-2" />
                    MOBILE
                  </Button>
                  <Button
                    variant={deviceMode === 'desktop' ? 'default' : 'ghost'}
                    size="sm"
                    onClick={() => setDeviceMode('desktop')}
                    className={deviceMode === 'desktop' ? 'bg-green-500 text-black' : 'text-gray-300'}
                  >
                    <Monitor className="w-4 h-4 mr-2" />
                    DESKTOP
                  </Button>
                </div>
              </div>

              {/* Device Preview */}
              <div className="flex justify-center">
                {deviceMode === 'mobile' ? (
                  <div className="relative">
                    {/* iPhone 16 Mockup */}
                    <div className="w-72 h-[600px] bg-black rounded-[3rem] p-2 shadow-2xl border-4 border-gray-800">
                      {/* iPhone notch */}
                      <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-black rounded-full z-10"></div>
                      {/* Screen */}
                      <div className="w-full h-full bg-gray-900 rounded-[2.5rem] flex items-center justify-center border border-gray-600 relative overflow-hidden">
                        <div className="text-center z-20">
                          <div className="text-green-400 text-3xl mb-3">📱</div>
                          <div className="text-white font-bold text-lg">
                            {previewMode === 'player' ? 'Player Site' : 'Agent Site'}
                          </div>
                          <div className="text-gray-400 text-sm mt-2">iPhone 16 Preview</div>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="relative">
                    {/* Laptop Mockup */}
                    <div className="relative">
                      {/* Screen */}
                      <div className="w-[500px] h-[320px] bg-black rounded-t-lg p-4 shadow-2xl border-2 border-gray-700">
                        <div className="w-full h-full bg-gray-900 rounded-lg flex items-center justify-center border border-gray-600">
                          <div className="text-center">
                            <div className="text-green-400 text-4xl mb-3">💻</div>
                            <div className="text-white font-bold text-xl">
                              {previewMode === 'player' ? 'Player Site' : 'Agent Site'}
                            </div>
                            <div className="text-gray-400 text-sm mt-2">Laptop Preview</div>
                          </div>
                        </div>
                      </div>
                      {/* Laptop base */}
                      <div className="w-[520px] h-4 bg-gray-700 rounded-b-xl mx-auto border-2 border-gray-600 border-t-0"></div>
                      {/* Laptop hinge */}
                      <div className="w-[480px] h-2 bg-gray-600 rounded-b-lg mx-auto"></div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Signup Form Section */}
        <section id="signup-section" className="px-6 py-20 bg-black/20 backdrop-blur-sm">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Start Your{" "}
                <span className="text-green-400">SPORTSBOOK</span>{" "}
                Today
              </h2>
              <p className="text-xl text-gray-300">
                Join thousands of successful agents making money with our platform
              </p>
            </div>
            
            <Card className="bg-gray-800/80 border-gray-700 backdrop-blur-sm">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-green-400 font-medium">
                        Email Address *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        className="bg-gray-900/50 border-gray-600 focus:border-green-400 text-white"
                        placeholder="your@email.com"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="username" className="text-green-400 font-medium">
                        Desired Agent Username *
                      </Label>
                      <Input
                        id="username"
                        type="text"
                        required
                        value={formData.username}
                        onChange={(e) => handleInputChange("username", e.target.value)}
                        className="bg-gray-900/50 border-gray-600 focus:border-green-400 text-white"
                        placeholder="agent_username"
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="password" className="text-green-400 font-medium">
                        Password *
                      </Label>
                      <Input
                        id="password"
                        type="password"
                        required
                        value={formData.password}
                        onChange={(e) => handleInputChange("password", e.target.value)}
                        className="bg-gray-900/50 border-gray-600 focus:border-green-400 text-white"
                        placeholder="••••••••"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="playerCount" className="text-green-400 font-medium">
                        Estimated Number of Players *
                      </Label>
                      <Input
                        id="playerCount"
                        type="number"
                        required
                        value={formData.playerCount}
                        onChange={(e) => handleInputChange("playerCount", e.target.value)}
                        className="bg-gray-900/50 border-gray-600 focus:border-green-400 text-white"
                        placeholder="50"
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="contactEmail" className="text-green-400 font-medium">
                        Contact Email *
                      </Label>
                      <Input
                        id="contactEmail"
                        type="email"
                        required
                        value={formData.contactEmail}
                        onChange={(e) => handleInputChange("contactEmail", e.target.value)}
                        className="bg-gray-900/50 border-gray-600 focus:border-green-400 text-white"
                        placeholder="contact@email.com"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-green-400 font-medium">
                        Phone Number (Optional)
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        className="bg-gray-900/50 border-gray-600 focus:border-green-400 text-white"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                  </div>
                  
                  <div className="flex justify-center">
                    <Button
                      type="submit"
                      className="bg-gradient-to-r from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 text-black font-bold py-4 px-8 text-lg transition-all duration-300 hover:scale-105 flex items-center whitespace-nowrap"
                    >
                      <Users className="w-5 h-5 mr-2 flex-shrink-0" />
                      START MY SPORTSBOOK BUSINESS NOW
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Footer */}
        <footer className="px-6 py-12 border-t border-gray-800 bg-black/20 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-green-600 rounded-lg flex items-center justify-center">
                <span className="text-black font-bold">🐧</span>
              </div>
              <span className="text-lg font-bold text-green-400">PenguinPPH</span>
            </div>
            <p className="text-gray-400 mb-4">
              The most competitive PPH platform in the industry
            </p>
            <div className="flex justify-center space-x-8">
              <Button 
                variant="ghost" 
                className="text-green-400 hover:text-white"
                onClick={() => window.open("https://t.me/PenguinPerHead", "_blank")}
              >
                Telegram Support
              </Button>
              <Button 
                variant="ghost" 
                className="text-green-400 hover:text-white"
                onClick={() => window.open("https://wa.me/17282176708", "_blank")}
              >
                WhatsApp Support
              </Button>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
