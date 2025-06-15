
const features = [
  "Exclusive Penguin Live TV for sports",
  "Exclusive Pragmatic Casino (90% RTP, no revenue share)",
  "Exclusive Plinko-style games (HiLo, Plinko, Mines, Towers)",
  "Exclusive Poker with custom player sheet",
  "+2 Live Casino access",
  "+2 Live Betting access", 
  "+2 Prop Builder tools",
  "24/7 multilingual support (Chinese, English, Spanish)",
  "Sharpest betting lines in the PPH industry",
  "Custom website building included"
];

const LovableFeatures = () => (
  <section className="px-6 py-20 bg-black/20 backdrop-blur-sm">
    <div className="max-w-7xl mx-auto">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
        Everything Included for{" "}
        <span className="text-green-400">$5</span>
      </h2>
      
      <div className="max-w-4xl mx-auto">
        <div className="space-y-4">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center text-lg md:text-xl text-gray-300 hover:text-white transition-colors duration-300">
              <span className="text-green-400 font-bold mr-4 text-2xl">+</span>
              <span>{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default LovableFeatures;
