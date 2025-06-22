
import { useTranslation } from "react-i18next";
import LovableBackground3D from "@/components/LovableBackground3D";

const HowItWorks = () => {
  const { t } = useTranslation();
  
  return (
    <div className="min-h-screen text-white overflow-hidden relative">
      {/* 3D Background */}
      <LovableBackground3D />
      
      {/* Dark overlay */}
      <div className="fixed top-0 left-0 w-full h-full bg-black/60 z-10 pointer-events-none" />
      
      {/* Content */}
      <div className="relative z-20 px-6 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-lg flex items-center justify-center">
                <span className="text-black font-bold text-xl">🐧</span>
              </div>
              <span className="text-2xl font-bold text-green-400">PenguinPPH</span>
            </div>
            <h1 className="text-4xl font-bold mb-4">{t('howItWorks.title')}</h1>
            <p className="text-xl text-gray-300">
              {t('howItWorks.subtitle')}
            </p>
          </div>

          {/* Content Sections */}
          <div className="space-y-8">
            <div className="bg-black/30 backdrop-blur-sm rounded-lg p-8 border border-gray-700">
              <p className="text-lg text-gray-300 leading-relaxed">
                {t('howItWorks.description')}
              </p>
            </div>

            <div className="bg-black/30 backdrop-blur-sm rounded-lg p-8 border border-gray-700">
              <h2 className="text-2xl font-bold text-green-400 mb-4">{t('howItWorks.howItWorksTitle')}</h2>
              <p className="text-gray-300 mb-4">
                {t('howItWorks.howItWorksDesc')}
              </p>
              <p className="text-gray-300 mb-4">
                {t('howItWorks.howItWorksDesc2')}
              </p>
              <h3 className="text-xl font-semibold text-white mb-3">{t('howItWorks.youGetTitle')}</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                {(t('howItWorks.youGetItems', { returnObjects: true }) as string[]).map((item: string, index: number) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="bg-black/30 backdrop-blur-sm rounded-lg p-8 border border-gray-700">
              <h2 className="text-2xl font-bold text-green-400 mb-4">{t('howItWorks.profitsTitle')}</h2>
              <p className="text-gray-300 mb-4">{t('howItWorks.profitsDesc')}</p>
              <ul className="list-disc list-inside space-y-2 text-gray-300 mb-4">
                {(t('howItWorks.profitsItems', { returnObjects: true }) as string[]).map((item: string, index: number) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
                <p className="text-green-400 font-semibold text-lg">
                  {t('howItWorks.feeNote')}
                </p>
                <p className="text-gray-300 mt-2">
                  {t('howItWorks.feeNote2')}
                </p>
              </div>
            </div>

            <div className="bg-black/30 backdrop-blur-sm rounded-lg p-8 border border-gray-700">
              <h2 className="text-2xl font-bold text-green-400 mb-4">{t('howItWorks.exampleTitle')}</h2>
              <p className="text-gray-300 mb-3">{t('howItWorks.exampleDesc')}</p>
              <ul className="list-disc list-inside space-y-2 text-gray-300 mb-4">
                {(t('howItWorks.exampleItems', { returnObjects: true }) as string[]).map((item: string, index: number) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              <p className="text-white font-medium">
                {t('howItWorks.exampleConclusion')}
              </p>
            </div>

            <div className="bg-black/30 backdrop-blur-sm rounded-lg p-8 border border-gray-700">
              <h2 className="text-2xl font-bold text-green-400 mb-4">{t('howItWorks.whyChooseTitle')}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {(t('howItWorks.whyChooseItems', { returnObjects: true }) as string[]).map((item: string, index: number) => (
                  <div key={index} className="flex items-center space-x-2">
                    <span className="text-green-400">✅</span>
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-black/30 backdrop-blur-sm rounded-lg p-8 border border-gray-700">
              <h2 className="text-2xl font-bold text-green-400 mb-4">{t('howItWorks.whoIsThisForTitle')}</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                {(t('howItWorks.whoIsThisForItems', { returnObjects: true }) as string[]).map((item: string, index: number) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="bg-black/30 backdrop-blur-sm rounded-lg p-8 border border-gray-700">
              <h2 className="text-2xl font-bold text-green-400 mb-4">{t('howItWorks.finalThoughtsTitle')}</h2>
              <p className="text-gray-300 leading-relaxed">
                {t('howItWorks.finalThoughtsDesc')}
              </p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center mt-12">
            <div className="bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-lg p-8 border border-green-500/30">
              <h3 className="text-2xl font-bold text-white mb-4">{t('howItWorks.readyTitle')}</h3>
              <p className="text-gray-300 mb-6">{t('howItWorks.readySubtitle')}</p>
              <div className="flex justify-center space-x-4">
                <button 
                  onClick={() => window.open("https://t.me/PenguinPerHead", "_blank")}
                  className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                >
                  {t('howItWorks.telegramContact')}
                </button>
                <button 
                  onClick={() => window.open("https://wa.me/17282176708", "_blank")}
                  className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                >
                  {t('howItWorks.whatsappContact')}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
