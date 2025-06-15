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

const playerDesktopImage = "/lovable-uploads/aa6c961a-afe8-4759-b3a3-baa7bcc39610.png";
// Update the player's mobile image to the new uploaded image.
const playerMobileImage = "/lovable-uploads/6e7ee57f-3136-407c-ae81-cee6fc010741.png";

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
              {/* iPhone 16 Mockup - 40% SMALLER */}
              <div className="w-[273px] h-[617px] bg-black rounded-[2.3rem] shadow-2xl border-4 border-gray-800 flex items-center justify-center p-0">
                {/* Top notch (scaled down for device) */}
                <div className="absolute top-[28px] left-1/2 transform -translate-x-1/2 w-[137px] h-[25px] bg-black rounded-[1.5rem] z-10" />
                {/* Phone screen area - scaled down */}
                <div className="w-[250px] h-[558px] rounded-[2rem] overflow-hidden flex items-center justify-center relative">
                  {previewMode === "player" ? (
                    <img
                      src={playerMobileImage}
                      alt="Player Mobile Site"
                      className="w-full h-full object-cover rounded-[2rem]"
                      style={{
                        display: 'block',
                        background: "#18181b",
                        margin: 0,
                        padding: 0,
                        boxShadow: "0 2px 8px 0 rgba(0,0,0,0.10)"
                      }}
                    />
                  ) : (
                    <iframe
                      src={agentSiteUrl}
                      title="Agent Mobile Site"
                      className="w-full h-full rounded-[2rem] bg-transparent"
                      style={{
                        border: "none",
                        objectFit: "cover",
                        background: "transparent"
                      }}
                      allow="clipboard-write; fullscreen"
                    />
                  )}
                  {/* Bottom gradient overlay */}
                  <div className="absolute bottom-0 left-0 w-full h-[2.4rem] bg-gradient-to-t from-black/30 to-transparent rounded-b-[2rem] pointer-events-none" />
                </div>
              </div>
            </div>
          ) : (
            <div className="relative">
              {/* Laptop Mockup */}
              <div className="relative">
                <div className="w-[500px] h-[350px] bg-black rounded-t-lg shadow-2xl border-2 border-gray-700 p-0 flex items-center justify-center">
                  <div className="w-[454px] h-[300px] bg-gray-950 rounded-xl flex items-center justify-center shadow-inner border border-gray-800 relative overflow-hidden p-0">
                    {previewMode === "player" ? (
                      <div className="w-full h-full flex items-center justify-center bg-gray-950 rounded-xl overflow-hidden p-4">
                        <img
                          src={playerDesktopImage}
                          alt="Player Desktop Site"
                          className="w-full max-h-full object-contain rounded-lg bg-gray-900"
                          style={{
                            boxShadow: "0 2px 16px 0 rgba(0,0,0,0.19)",
                            background: "#18181b",
                            paddingTop: "16px",
                            paddingBottom: "16px",
                          }}
                        />
                      </div>
                    ) : (
                      <iframe
                        src={agentSiteUrl}
                        title="Agent Desktop Site"
                        className="w-full h-full rounded-xl bg-transparent"
                        style={{
                          border: "none",
                          objectFit: "cover",
                          background: "transparent",
                        }}
                        allow="clipboard-write; fullscreen"
                      />
                    )}
                    <div className="absolute bottom-0 left-0 w-full h-6 bg-gradient-to-t from-black/30 to-transparent rounded-b-xl pointer-events-none" />
                  </div>
                </div>
                <div className="w-[520px] h-4 bg-gray-700 rounded-b-xl mx-auto border-2 border-gray-600 border-t-0"></div>
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
