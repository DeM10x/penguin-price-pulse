import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import React from "react";

const includedFeatures = [
  "Full access to pre-match betting on all major sports",
  "Full access to LIVE betting on all major sports",
  "Premium casino slot games with high-quality graphics and performance",
  "Exclusive access to private poker tables for a VIP experience",
  "Live streaming of top sports events directly on the platform",
  "24/7 dedicated agent support to assist with operations",
  "24/7 wagering support for uninterrupted player activity",
  "Private Telegram & WhatsApp group setup for agent support",
  "Full access to agent management tools for total control and flexibility",
];

const addOns = [
  {
    name: "Prop Builder",
    description: "Add for $2 per head",
  },
  {
    name: "Live Casino (dealer games)",
    description: "Add for $1 per head",
  },
  {
    name: "Premium Horse Betting Platform",
    description: "Add for $2 per head",
  },
];

const penguinFeatures = [
  {
    title: "All Main Sports",
    iframe: (
      <iframe
        src="https://my.spline.design/jacksoncard001-BjsvG9NJDVR4rkxEpwaDt31B/"
        frameBorder="0"
        width="100%"
        height="100%"
        className="rounded-xl w-full h-full"
        allowFullScreen
      ></iframe>
    ),
  },
  {
    title: "Exclusive casinos Plinko/Pragmatic",
    iframe: (
      <iframe
        src="https://my.spline.design/techinspired3dassetsgamepad-xb96cT3J5vaJwiNrTX7rXHPT/"
        frameBorder="0"
        width="100%"
        height="100%"
        className="rounded-xl w-full h-full"
        allowFullScreen
      ></iframe>
    ),
  },
  // Future features can be added here as more become available
];

const LovableFeatures = () => (
  <section className="px-6 py-20 bg-black/20 backdrop-blur-sm">
    <div className="max-w-7xl mx-auto">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
        Everything Included for{" "}
        <span className="text-green-400">$7</span>
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
            POSSIBLE ADD ONS
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
              Exclusive Penguin Features
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
                    {feature.iframe}
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

export default LovableFeatures;
