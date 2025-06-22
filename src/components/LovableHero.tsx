
import { useTranslation } from "react-i18next";

const LovableHero = () => {
  const { t } = useTranslation();
  
  return (
    <section className="px-6 py-20 bg-black/20 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto text-center">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            {t('hero.title')}{" "}
            <span className="bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
              {t('hero.titleHighlight')}
            </span>
            <br />
            {t('hero.titleEnd')}
          </h1>
          
          <div className="mb-8 animate-scale-in animation-delay-300">
            <div className="inline-block bg-gradient-to-r from-green-400 to-green-600 p-1 rounded-2xl">
              <div className="bg-black/80 backdrop-blur-sm px-8 py-4 rounded-2xl">
                <p className="text-lg md:text-xl text-gray-300 mb-2">{t('hero.priceLabel')}</p>
                <div className="text-6xl md:text-8xl font-black text-green-400 animate-pulse">
                  {t('hero.price')}
                </div>
                <p className="text-lg md:text-xl text-gray-300 mt-2">
                  {t('hero.priceDetails')}
                </p>
              </div>
            </div>
          </div>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            {t('hero.subtitle')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default LovableHero;
