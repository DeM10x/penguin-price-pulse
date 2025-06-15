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
              {/* Tighter iPhone 16 Mockup */}
              <div className="w-[222px] h-[473px] bg-black rounded-[1.5rem] shadow-2xl border-[3px] border-gray-800 flex items-center justify-center p-0">
                {/* Top notch */}
                <div className="absolute top-[15px] left-1/2 transform -translate-x-1/2 w-[84px] h-[14px] bg-black rounded-[1rem] z-10" />
                {/* Phone screen area - nearly exact to image size */}
                <div className="w-[206px] h-[441px] rounded-[1.17rem] overflow-hidden flex items-center justify-center relative">
                  {previewMode === "player" ? (
                    <img
                      src={playerMobileImage}
                      alt="Player Mobile Site"
                      className="w-full h-full object-cover rounded-[1.17rem]"
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
                      className="w-full h-full rounded-[1.17rem] bg-transparent"
                      style={{
                        border: "none",
                        objectFit: "cover",
                        background: "transparent"
                      }}
                      allow="clipboard-write; fullscreen"
                    />
                  )}
                  {/* Bottom gradient overlay */}
                  <div className="absolute bottom-0 left-0 w-full h-[1.1rem] bg-gradient-to-t from-black/30 to-transparent rounded-b-[1.17rem] pointer-events-none" />
                </div>
              </div>
            </div>
          ) : (
            <div className="relative">
              {/* Laptop Mockup - now 10% less wide, 20% less tall */}
              <div className="relative">
                {/* Frame is now 403x254 */}
                <div className="w-[403px] h-[254px] bg-black rounded-t-2xl shadow-2xl border-2 border-gray-700 p-0 flex items-center justify-center">
                  {/* Inner screen area is now 368x216 */}
                  <div className="w-[368px] h-[216px] bg-gray-950 rounded-2xl flex items-center justify-center shadow-inner border border-gray-800 relative overflow-hidden p-0">
                    {previewMode === "player" ? (
                      <div className="w-full h-full flex items-center justify-center bg-gray-950 rounded-2xl overflow-hidden p-2">
                        <img
                          src={playerDesktopImage}
                          alt="Player Desktop Site"
                          className="w-full max-h-full object-contain rounded-xl bg-gray-900"
                          style={{
                            boxShadow: "0 2px 16px 0 rgba(0,0,0,0.19)",
                            background: "#18181b",
                            paddingTop: "12px",
                            paddingBottom: "12px",
                          }}
                        />
                      </div>
                    ) : (
                      <iframe
                        src={agentSiteUrl}
                        title="Agent Desktop Site"
                        className="w-full h-full rounded-2xl bg-transparent"
                        style={{
                          border: "none",
                          objectFit: "cover",
                          background: "transparent",
                        }}
                        allow="clipboard-write; fullscreen"
                      />
                    )}
                    <div className="absolute bottom-0 left-0 w-full h-8 bg-gradient-to-t from-black/30 to-transparent rounded-b-2xl pointer-events-none" />
                  </div>
                </div>
                {/* Scale the base in proportion */}
                <div className="w-[422px] h-[3px] bg-gray-700 rounded-b-2xl mx-auto border-2 border-gray-600 border-t-0"></div>
                <div className="w-[401px] h-[1.5px] bg-gray-600 rounded-b-lg mx-auto"></div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  </section>
);

export default LovableDevicePreview;
