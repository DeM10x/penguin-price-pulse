
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Users, Phone, Mail } from "lucide-react";
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
  
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Registration Submitted!",
      description: "We'll contact you within 24 hours to set up your account.",
    });
    console.log("Form submitted:", formData);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const features = [
    "Exclusive Penguin Live TV for sports",
    "Exclusive Pragmatic casino (NO revenue share, 90% RTP)",
    "Exclusive Plinko-style casino (Games: HiLo, Plinko, Mines, Towers)",
    "Exclusive Poker with custom player sheet",
    "Live Casino access",
    "Live Betting access",
    "Prop Builder tools",
    "24/7 customer support (Chinese, English, and Spanish)",
    "Sharpest betting lines in the PPH industry",
    "Custom website building included"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white overflow-hidden">
      {/* Navigation */}
      <nav className="relative z-50 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-green-600 rounded-lg flex items-center justify-center">
              <span className="text-black font-bold text-lg">🐧</span>
            </div>
            <span className="text-xl font-bold text-green-400">PenguinPPH</span>
          </div>
          <div className="flex space-x-4">
            <Button 
              variant="outline" 
              className="border-green-400 text-green-400 hover:bg-green-400 hover:text-black transition-all duration-300"
              onClick={() => window.open("https://t.me/yourhandle", "_blank")}
            >
              <Mail className="w-4 h-4 mr-2" />
              Telegram
            </Button>
            <Button 
              variant="outline" 
              className="border-green-400 text-green-400 hover:bg-green-400 hover:text-black transition-all duration-300"
              onClick={() => window.open("https://wa.me/yourphonenumber", "_blank")}
            >
              <Phone className="w-4 h-4 mr-2" />
              WhatsApp
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative px-6 py-20">
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
                <div className="bg-black px-8 py-4 rounded-2xl">
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

      {/* Features Section */}
      <section className="px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Everything Included for{" "}
            <span className="text-green-400">$5</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="bg-gray-800/50 border-gray-700 hover:border-green-400/50 transition-all duration-300 hover:scale-105">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-green-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Check className="w-4 h-4 text-black" />
                    </div>
                    <p className="text-gray-300 leading-relaxed">{feature}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Signup Form Section */}
      <section className="px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Start Your PPH Business{" "}
              <span className="text-green-400">Today</span>
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
                
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 text-black font-bold py-4 text-lg transition-all duration-300 hover:scale-105"
                >
                  <Users className="w-5 h-5 mr-2" />
                  START MY PPH BUSINESS NOW
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-12 border-t border-gray-800">
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
              onClick={() => window.open("https://t.me/yourhandle", "_blank")}
            >
              Telegram Support
            </Button>
            <Button 
              variant="ghost" 
              className="text-green-400 hover:text-white"
              onClick={() => window.open("https://wa.me/yourphonenumber", "_blank")}
            >
              WhatsApp Support
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
