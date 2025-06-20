
import LovableBackground3D from "@/components/LovableBackground3D";

const HowItWorks = () => {
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
            <h1 className="text-4xl font-bold mb-4">What Is a Sportsbook Pay Per Head (PPH) Software?</h1>
            <p className="text-xl text-gray-300">
              A powerful online platform that allows independent bookmakers to run their own sportsbook business
            </p>
          </div>

          {/* Content Sections */}
          <div className="space-y-8">
            <div className="bg-black/30 backdrop-blur-sm rounded-lg p-8 border border-gray-700">
              <p className="text-lg text-gray-300 leading-relaxed">
                A Sportsbook Pay Per Head (PPH) software is a powerful online platform that allows independent bookmakers 
                (also known as "agents") to run their own sportsbook business without needing to build a website, 
                manage betting odds, or deal with technical operations.
              </p>
            </div>

            <div className="bg-black/30 backdrop-blur-sm rounded-lg p-8 border border-gray-700">
              <h2 className="text-2xl font-bold text-green-400 mb-4">🔍 How It Works (Beginner-Friendly)</h2>
              <p className="text-gray-300 mb-4">
                Imagine you're someone who wants to start your own online sportsbook—like a small betting site—but you don't 
                have the tools, the tech team, or the resources to manage everything yourself.
              </p>
              <p className="text-gray-300 mb-4">
                That's where our PPH software comes in. We provide the full system for you.
              </p>
              <h3 className="text-xl font-semibold text-white mb-3">You get:</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                <li>Your own private website (with a custom design if you want)</li>
                <li>Access to a fully working sportsbook platform</li>
                <li>24/7 updated betting lines on sports, casino games, and more</li>
                <li>A back-end dashboard where you can manage your players, set limits, track balances, and view reports</li>
              </ul>
            </div>

            <div className="bg-black/30 backdrop-blur-sm rounded-lg p-8 border border-gray-700">
              <h2 className="text-2xl font-bold text-green-400 mb-4">💰 You Keep 100% of the Profits</h2>
              <p className="text-gray-300 mb-4">You act as the bookmaker for your own players. That means:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-300 mb-4">
                <li>You decide who to give accounts to</li>
                <li>You set the credit/limits for each player</li>
                <li>You control their wins and losses</li>
                <li>Whatever your players lose, you keep as profit</li>
                <li>Whatever they win, you pay them out</li>
              </ul>
              <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
                <p className="text-green-400 font-semibold text-lg">
                  📌 Our only fee is $5 per active player per week.
                </p>
                <p className="text-gray-300 mt-2">
                  If a player doesn't bet that week, you don't pay for them.
                </p>
              </div>
            </div>

            <div className="bg-black/30 backdrop-blur-sm rounded-lg p-8 border border-gray-700">
              <h2 className="text-2xl font-bold text-green-400 mb-4">🎯 Example</h2>
              <p className="text-gray-300 mb-3">Let's say you have 10 active players this week:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-300 mb-4">
                <li>We charge you: 10 x $5 = $50</li>
                <li>If your players lose $2,000 that week, you keep all $2,000</li>
                <li>Your only cost was the $50 fee</li>
              </ul>
              <p className="text-white font-medium">
                This gives you a very low-cost, high-profit model to run your own betting business.
              </p>
            </div>

            <div className="bg-black/30 backdrop-blur-sm rounded-lg p-8 border border-gray-700">
              <h2 className="text-2xl font-bold text-green-400 mb-4">✅ Why Choose Our PPH Software?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="flex items-center space-x-2">
                  <span className="text-green-400">✅</span>
                  <span className="text-gray-300">No technical skills needed</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-green-400">✅</span>
                  <span className="text-gray-300">Custom branding available</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-green-400">✅</span>
                  <span className="text-gray-300">Real-time reporting</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-green-400">✅</span>
                  <span className="text-gray-300">Fully mobile-friendly platform</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-green-400">✅</span>
                  <span className="text-gray-300">Live casino add-ons</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-green-400">✅</span>
                  <span className="text-gray-300">Virtual sports & horse racing</span>
                </div>
              </div>
            </div>

            <div className="bg-black/30 backdrop-blur-sm rounded-lg p-8 border border-gray-700">
              <h2 className="text-2xl font-bold text-green-400 mb-4">👤 Who Is This For?</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                <li>People who already take bets manually and want to go online</li>
                <li>Anyone who wants to start a small sportsbook business and grow</li>
                <li>Experienced agents looking for a better, more affordable platform</li>
              </ul>
            </div>

            <div className="bg-black/30 backdrop-blur-sm rounded-lg p-8 border border-gray-700">
              <h2 className="text-2xl font-bold text-green-400 mb-4">💬 Final Thoughts</h2>
              <p className="text-gray-300 leading-relaxed">
                Our goal is to empower independent bookies with all the tools they need to run a professional, 
                secure, and profitable sportsbook. You get the full setup, support, and features — and you only 
                pay per active player, no large monthly fees, no hidden charges.
              </p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center mt-12">
            <div className="bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-lg p-8 border border-green-500/30">
              <h3 className="text-2xl font-bold text-white mb-4">Ready to Get Started?</h3>
              <p className="text-gray-300 mb-6">Join hundreds of successful agents already using PenguinPPH</p>
              <div className="flex justify-center space-x-4">
                <button 
                  onClick={() => window.open("https://t.me/PenguinPerHead", "_blank")}
                  className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                >
                  Contact on Telegram
                </button>
                <button 
                  onClick={() => window.open("https://wa.me/17282176708", "_blank")}
                  className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                >
                  Contact on WhatsApp
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
