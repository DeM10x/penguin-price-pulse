
import { Button } from "@/components/ui/button";
import { Smartphone, Monitor } from "lucide-react";
import React from "react";

type Props = {
  previewMode: "player" | "agent";
  deviceMode: "mobile" | "desktop";
  setPreviewMode: (mode: "player" | "agent") => void;
  setDeviceMode: (mode: "mobile" | "desktop") => void;
};

const playerSiteUrl = "https://penguinplay.bet";
const agentSiteUrl = "https://penguinagent.com";

const LovableDevicePreview = ({
  previewMode,
  deviceMode,
  setPreviewMode,
  setDeviceMode
}: Props) => (
  <section className="px-6 py-20 bg-black/20 backdrop-blur-sm">
    <div className="max-w-7xl mx-auto">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
        See Your Platform in{" "}
        <span className="text-green-400">Action</span>
      </h2>
      
      <div className="bg-gray-800/50 rounded-2xl p-8 backdrop-blur-sm border border-gray-700">
        {/* Toggle Controls */}
        <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8 mb-8">
          <div className="flex bg-gray-700 rounded-lg p-1">
            <Button
              variant={previewMode === 'player' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => setPreviewMode('player')}
              className={previewMode === 'player' ? 'bg-green-500 text-black' : 'text-gray-300'}
            >
              PLAYER SITE
            </Button>
            <Button
              variant={previewMode === 'agent' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => setPreviewMode('agent')}
              className={previewMode === 'agent' ? 'bg-green-500 text-black' : 'text-gray-300'}
            >
              AGENT SITE
            </Button>
          </div>
          
          <div className="flex bg-gray-700 rounded-lg p-1">
            <Button
              variant={deviceMode === 'mobile' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => setDeviceMode('mobile')}
              className={deviceMode === 'mobile' ? 'bg-green-500 text-black' : 'text-gray-300'}
            >
              <Smartphone className="w-4 h-4 mr-2" />
              MOBILE
            </Button>
            <Button
              variant={deviceMode === 'desktop' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => setDeviceMode('desktop')}
              className={deviceMode === 'desktop' ? 'bg-green-500 text-black' : 'text-gray-300'}
            >
              <Monitor className="w-4 h-4 mr-2" />
              DESKTOP
            </Button>
          </div>
        </div>

        {/* Device Preview */}
        <div className="flex justify-center">
          {deviceMode === 'mobile' ? (
            <div className="relative">
              {/* iPhone 16 Mockup */}
              <div className="w-72 h-[600px] bg-black rounded-[3rem] p-2 shadow-2xl border-4 border-gray-800">
                <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-black rounded-full z-10" />
                {/* Remove extra padding from the screen and maximize iframe */}
                <div className="w-full h-full bg-gray-900 rounded-[2.5rem] flex items-center justify-center border border-gray-600 relative overflow-hidden p-0">
                  <div className="w-[240px] h-[528px] bg-gray-950 rounded-[2.1rem] flex items-center justify-center shadow-inner border border-gray-800 relative overflow-hidden p-0">
                    <iframe
                      src={previewMode === "player" ? playerSiteUrl : agentSiteUrl}
                      title={previewMode === "player" ? "Player Mobile Site" : "Agent Mobile Site"}
                      className="w-full h-full rounded-[2.1rem] bg-transparent"
                      style={{
                        border: "none",
                        objectFit: "cover",
                        background: "transparent",
                      }}
                      allow="clipboard-write; fullscreen"
                    />
                    {/* subtle overlay at the bottom */}
                    <div className="absolute bottom-0 left-0 w-full h-8 bg-gradient-to-t from-black/30 to-transparent rounded-b-[2.1rem] pointer-events-none" />
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="relative">
              {/* Laptop Mockup */}
              <div className="relative">
                {/* Remove all inside paddings and max out iframe */}
                <div className="w-[500px] h-[320px] bg-black rounded-t-lg shadow-2xl border-2 border-gray-700 p-0 flex items-center justify-center">
                  <div className="w-[454px] h-[262px] bg-gray-950 rounded-xl flex items-center justify-center shadow-inner border border-gray-800 relative overflow-hidden p-0">
                    <iframe
                      src={previewMode === "player" ? playerSiteUrl : agentSiteUrl}
                      title={previewMode === "player" ? "Player Desktop Site" : "Agent Desktop Site"}
                      className="w-full h-full rounded-xl bg-transparent"
                      style={{
                        border: "none",
                        objectFit: "cover",
                        background: "transparent",
                      }}
                      allow="clipboard-write; fullscreen"
                    />
                    {/* subtle overlay at the bottom */}
                    <div className="absolute bottom-0 left-0 w-full h-6 bg-gradient-to-t from-black/30 to-transparent rounded-b-xl pointer-events-none" />
                  </div>
                </div>
                {/* Laptop base */}
                <div className="w-[520px] h-4 bg-gray-700 rounded-b-xl mx-auto border-2 border-gray-600 border-t-0"></div>
                {/* Laptop hinge */}
                <div className="w-[480px] h-2 bg-gray-600 rounded-b-lg mx-auto"></div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  </section>
);

export default LovableDevicePreview;
