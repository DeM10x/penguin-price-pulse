
import { useTranslation } from "react-i18next";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import React from "react";

const LovableFeatures = () => {
  const { t } = useTranslation();
  
  // Get translated arrays
  const includedFeatures = t('features.includedFeatures', { returnObjects: true }) as string[];
  const addOns = t('features.addOns', { returnObjects: true }) as Array<{name: string, description: string}>;
  const penguinFeatures = t('features.penguinFeatures', { returnObjects: true }) as Array<{title: string}>;

  return (
    <section className="px-6 py-20 bg-black/20 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          {t('features.title')}{" "}
          <span className="text-green-400">{t('features.price')}</span>
        </h2>

        <div className="max-w-4xl mx-auto">
          {/* Included Features */}
          <div className="space-y-4 mb-10">
            {includedFeatures.map((feature, index) => (
              <div key={index} className="flex items-center text-lg md:text-xl text-gray-300 hover:text-white transition-colors duration-300">
                <span className="text-green-400 font-bold mr-4 text-2xl">+</span>
                <span>{feature}</span>
              </div>
            ))}
          </div>

          {/* Add-Ons */}
          <div>
            <h3 className="text-2xl md:text-3xl font-semibold text-center text-gray-200 mt-12 mb-6">
              {t('features.addOnsTitle')}
            </h3>
            <div className="space-y-4">
              {addOns.map((addon, index) => (
                <div key={index} className="flex items-center text-lg md:text-xl text-yellow-300">
                  <span className="font-bold mr-4 text-2xl">•</span>
                  <span className="font-semibold">{addon.name}</span>
                  <span className="ml-2 text-yellow-200">{addon.description}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* NEW SECTION: Exclusive Penguin Features */}
        <div className="max-w-6xl mx-auto mt-20">
          <Tabs defaultValue="penguin" className="w-full">
            <TabsList className="flex justify-center mb-8">
              <TabsTrigger value="penguin" className="text-lg md:text-xl font-bold px-8 py-2">
                {t('features.exclusiveFeaturesTitle')}
              </TabsTrigger>
            </TabsList>
            <TabsContent value="penguin">
              <div className="flex flex-row flex-wrap gap-8 justify-center items-stretch w-full">
                {penguinFeatures.map((feature, idx) => (
                  <div
                    key={feature.title}
                    className="bg-black/60 backdrop-blur-lg rounded-xl shadow-lg p-6 flex flex-col items-center w-full sm:w-96 md:w-80 lg:w-72 xl:w-64 aspect-[4/5] mx-auto"
                    style={{
                      minWidth: "250px",
                      maxWidth: "350px",
                      flex: "1 1 280px"
                    }}
                  >
                    <h4 className="text-lg md:text-xl font-semibold mb-4 text-center">{feature.title}</h4>
                    <div className="w-full h-64 md:h-56 flex-1 flex items-center justify-center relative overflow-hidden rounded-lg bg-gray-900 border border-gray-700">
                      {idx === 0 ? (
                        <iframe
                          src="https://my.spline.design/jacksoncard001-BjsvG9NJDVR4rkxEpwaDt31B/"
                          frameBorder="0"
                          width="100%"
                          height="100%"
                          className="rounded-xl w-full h-full"
                          allowFullScreen
                        ></iframe>
                      ) : (
                        <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
                          <iframe
                            src="https://my.spline.design/techinspired3dassetsgamepad-xb96cT3J5vaJwiNrTX7rXHPT/"
                            frameBorder="0"
                            allowFullScreen
                            style={{
                              position: "absolute",
                              top: "50%",
                              left: "50%",
                              width: "200%",
                              height: "200%",
                              transform: "translate(-50%, -50%) scale(0.5)",
                              transformOrigin: "center center",
                              pointerEvents: "none",
                              borderRadius: "0.75rem",
                              background: "#181926",
                            }}
                          ></iframe>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default LovableFeatures;
