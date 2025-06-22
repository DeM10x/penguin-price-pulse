
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Users } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useIsMobile } from "@/hooks/use-mobile";
import LanguageSelector from "./LanguageSelector";
import HowItWorksSheet from "./HowItWorksSheet";

type NavbarProps = {
  scrollToSignUp: () => void;
};

const PLAYER_LOGIN_API = "https://webapi.penguinplay.bet/api/Player/PlayerLogin";
const PLAYER_SITE_URL = "https://penguinplay.bet";

const LovableNavbar = ({ scrollToSignUp }: NavbarProps) => {
  const { toast } = useToast();
  const { t } = useTranslation();
  const isMobile = useIsMobile();

  // POST login and redirect on success
  const handlePlayerDemo = async () => {
    try {
      const response = await fetch(PLAYER_LOGIN_API, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          Player: "DGS4",
          Password: "51",
          IpAddress: ""
        })
      });

      // Try to parse the response as JSON, fallback to text if not JSON
      let result;
      try {
        result = await response.json();
      } catch {
        result = await response.text();
      }

      if (!response.ok) {
        toast({
          title: "Login failed",
          description: typeof result === "string" ? result : (result?.Message || "Could not log in to demo."),
          variant: "destructive"
        });
        return;
      }

      // Most APIs will return a token or redirect URL
      // If the API returns a login token, you likely want to pass it as a query parameter or cookie
      // For demo, let's open the player site. If the response has extra info for deep linking, adjust as needed.
      // (You can easily modify this part if you have a better redirect URL.)

      window.open(PLAYER_SITE_URL, "_blank");
    } catch (error: any) {
      toast({
        title: "Network Error",
        description: error?.message || "There was a problem connecting to the demo site.",
        variant: "destructive"
      });
    }
  };

  return (
    <nav className="px-6 py-4 bg-black/20 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-green-600 rounded-lg flex items-center justify-center">
              <span className="text-black font-bold text-lg">🐧</span>
            </div>
            <span className="text-xl font-bold text-green-400">PenguinPPH</span>
          </div>
          
          {/* Desktop: Regular button, Mobile: Sheet */}
          {isMobile ? (
            <HowItWorksSheet />
          ) : (
            <Button 
              variant="ghost" 
              className="text-green-400 hover:text-white"
              onClick={() => window.open("/how-it-works", "_blank")}
            >
              {t('navbar.howItWorks')}
            </Button>
          )}
        </div>
        
        <div className="flex items-center space-x-3">
          {/* Language Selector */}
          <LanguageSelector />
          
          <div className="flex flex-col space-y-1">
            <Button 
              variant="outline" 
              size="sm"
              className="border-green-400 text-green-400 hover:bg-green-400 hover:text-black transition-all duration-300 text-xs"
              onClick={handlePlayerDemo}
            >
              {t('navbar.playerDemo')}
            </Button>
            <Button 
              variant="outline" 
              size="sm"
              className="border-green-400 text-green-400 hover:bg-green-400 hover:text-black transition-all duration-300 text-xs"
              // If you want, add an equivalent handler for Agent Demo here!
            >
              {t('navbar.agentDemo')}
            </Button>
          </div>
          <Button 
            className="bg-gradient-to-r from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 text-black font-bold transition-all duration-300"
            onClick={scrollToSignUp}
          >
            <Users className="w-4 h-4 mr-2" />
            {t('navbar.signUp')}
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default LovableNavbar;
