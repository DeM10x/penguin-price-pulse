
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Users } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const LovableSignupForm = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
    playerCount: "",
    contactEmail: "",
    phone: ""
  });

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
      title: t('signup.form.successTitle'),
      description: t('signup.form.successMessage'),
    });
    console.log("Form submitted:", formData);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="signup-section" className="px-6 py-20 bg-black/20 backdrop-blur-sm">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {t('signup.title')}{" "}
            <span className="text-green-400">{t('signup.titleHighlight')}</span>{" "}
            {t('signup.titleEnd')}
          </h2>
          <p className="text-xl text-gray-300">
            {t('signup.subtitle')}
          </p>
        </div>
        
        <Card className="bg-gray-800/80 border-gray-700 backdrop-blur-sm">
          <CardContent className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-green-400 font-medium">
                    {t('signup.form.email')} {t('signup.form.required')}
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className="bg-gray-900/50 border-gray-600 focus:border-green-400 text-white"
                    placeholder={t('signup.form.emailPlaceholder')}
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="username" className="text-green-400 font-medium">
                    {t('signup.form.username')} {t('signup.form.required')}
                  </Label>
                  <Input
                    id="username"
                    type="text"
                    required
                    value={formData.username}
                    onChange={(e) => handleInputChange("username", e.target.value)}
                    className="bg-gray-900/50 border-gray-600 focus:border-green-400 text-white"
                    placeholder={t('signup.form.usernamePlaceholder')}
                  />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="password" className="text-green-400 font-medium">
                    {t('signup.form.password')} {t('signup.form.required')}
                  </Label>
                  <Input
                    id="password"
                    type="password"
                    required
                    value={formData.password}
                    onChange={(e) => handleInputChange("password", e.target.value)}
                    className="bg-gray-900/50 border-gray-600 focus:border-green-400 text-white"
                    placeholder={t('signup.form.passwordPlaceholder')}
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="playerCount" className="text-green-400 font-medium">
                    {t('signup.form.playerCount')} {t('signup.form.required')}
                  </Label>
                  <Input
                    id="playerCount"
                    type="number"
                    required
                    value={formData.playerCount}
                    onChange={(e) => handleInputChange("playerCount", e.target.value)}
                    className="bg-gray-900/50 border-gray-600 focus:border-green-400 text-white"
                    placeholder={t('signup.form.playerCountPlaceholder')}
                  />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="contactEmail" className="text-green-400 font-medium">
                    {t('signup.form.contactEmail')} {t('signup.form.required')}
                  </Label>
                  <Input
                    id="contactEmail"
                    type="email"
                    required
                    value={formData.contactEmail}
                    onChange={(e) => handleInputChange("contactEmail", e.target.value)}
                    className="bg-gray-900/50 border-gray-600 focus:border-green-400 text-white"
                    placeholder={t('signup.form.contactEmailPlaceholder')}
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-green-400 font-medium">
                    {t('signup.form.phone')}
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    className="bg-gray-900/50 border-gray-600 focus:border-green-400 text-white"
                    placeholder={t('signup.form.phonePlaceholder')}
                  />
                </div>
              </div>
              
              <div className="flex justify-center">
                <Button
                  type="submit"
                  className="py-2 px-4 text-base sm:py-4 sm:px-8 sm:text-lg bg-gradient-to-r from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 text-black font-bold transition-all duration-300 hover:scale-105 flex items-center whitespace-nowrap"
                >
                  <Users className="w-5 h-5 mr-2 flex-shrink-0" />
                  {t('signup.form.submitButton')}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default LovableSignupForm;
