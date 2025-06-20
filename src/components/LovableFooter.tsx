
import { Button } from "@/components/ui/button";

const LovableFooter = () => (
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
      <div className="flex justify-center space-x-8 mb-6">
        <Button 
          variant="ghost" 
          className="text-green-400 hover:text-white"
          onClick={() => window.open("/how-it-works", "_blank")}
        >
          How does it work?
        </Button>
      </div>
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
);

export default LovableFooter;
