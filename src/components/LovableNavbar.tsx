
import { Button } from "@/components/ui/button";
import { Users } from "lucide-react";

type NavbarProps = {
  scrollToSignUp: () => void;
};

const LovableNavbar = ({ scrollToSignUp }: NavbarProps) => (
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
);

export default LovableNavbar;
