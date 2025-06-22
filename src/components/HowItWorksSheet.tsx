
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { HelpCircle } from 'lucide-react';

const HowItWorksSheet = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" className="text-green-400 hover:text-white">
          <HelpCircle className="w-4 h-4 mr-2" />
          {t('navbar.howItWorks')}
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[90vw] sm:w-[400px] bg-black/95 border-gray-700 text-white overflow-y-auto">
        <SheetHeader className="text-left">
          <SheetTitle className="text-green-400 text-lg">
            {t('howItWorks.title')}
          </SheetTitle>
          <SheetDescription className="text-gray-300">
            {t('howItWorks.subtitle')}
          </SheetDescription>
        </SheetHeader>
        
        <div className="space-y-6 mt-6">
          <div className="bg-black/30 backdrop-blur-sm rounded-lg p-4 border border-gray-700">
            <p className="text-gray-300 leading-relaxed text-sm">
              {t('howItWorks.description')}
            </p>
          </div>

          <div className="bg-black/30 backdrop-blur-sm rounded-lg p-4 border border-gray-700">
            <h3 className="text-lg font-bold text-green-400 mb-3">
              {t('howItWorks.howItWorksTitle')}
            </h3>
            <p className="text-gray-300 mb-3 text-sm">
              {t('howItWorks.howItWorksDesc')}
            </p>
            <p className="text-gray-300 mb-3 text-sm">
              {t('howItWorks.howItWorksDesc2')}
            </p>
            <h4 className="text-white font-semibold mb-2">{t('howItWorks.youGetTitle')}</h4>
            <ul className="list-disc list-inside space-y-1 text-gray-300 text-sm">
              {(t('howItWorks.youGetItems', { returnObjects: true }) as string[]).map((item: string, index: number) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="bg-black/30 backdrop-blur-sm rounded-lg p-4 border border-gray-700">
            <h3 className="text-lg font-bold text-green-400 mb-3">
              {t('howItWorks.profitsTitle')}
            </h3>
            <p className="text-gray-300 mb-3 text-sm">{t('howItWorks.profitsDesc')}</p>
            <ul className="list-disc list-inside space-y-1 text-gray-300 text-sm mb-3">
              {(t('howItWorks.profitsItems', { returnObjects: true }) as string[]).map((item: string, index: number) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-3">
              <p className="text-green-400 font-semibold text-sm">
                {t('howItWorks.feeNote')}
              </p>
              <p className="text-gray-300 mt-1 text-sm">
                {t('howItWorks.feeNote2')}
              </p>
            </div>
          </div>

          <div className="bg-black/30 backdrop-blur-sm rounded-lg p-4 border border-gray-700">
            <h3 className="text-lg font-bold text-green-400 mb-3">
              {t('howItWorks.exampleTitle')}
            </h3>
            <p className="text-gray-300 mb-2 text-sm">{t('howItWorks.exampleDesc')}</p>
            <ul className="list-disc list-inside space-y-1 text-gray-300 text-sm mb-3">
              {(t('howItWorks.exampleItems', { returnObjects: true }) as string[]).map((item: string, index: number) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            <p className="text-white font-medium text-sm">
              {t('howItWorks.exampleConclusion')}
            </p>
          </div>

          <div className="bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-lg p-4 border border-green-500/30">
            <h4 className="text-lg font-bold text-white mb-3">{t('howItWorks.readyTitle')}</h4>
            <p className="text-gray-300 mb-4 text-sm">{t('howItWorks.readySubtitle')}</p>
            <div className="flex flex-col space-y-2">
              <Button 
                onClick={() => window.open("https://t.me/PenguinPerHead", "_blank")}
                className="bg-blue-500 hover:bg-blue-600 text-white text-sm"
                size="sm"
              >
                {t('howItWorks.telegramContact')}
              </Button>
              <Button 
                onClick={() => window.open("https://wa.me/17282176708", "_blank")}
                className="bg-green-500 hover:bg-green-600 text-white text-sm"
                size="sm"
              >
                {t('howItWorks.whatsappContact')}
              </Button>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default HowItWorksSheet;
