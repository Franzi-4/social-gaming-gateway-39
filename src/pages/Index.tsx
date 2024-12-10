import { WaitlistForm } from "@/components/WaitlistForm";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen relative overflow-hidden bg-[#27005D]">
      {/* Background Gradients */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/2 w-[1000px] h-[1000px] rounded-full bg-[#9400FF] opacity-20 blur-[120px] animate-float" />
        <div className="absolute -bottom-1/2 -left-1/2 w-[1000px] h-[1000px] rounded-full bg-[#AED2FF] opacity-10 blur-[120px] animate-float" />
      </div>

      {/* Main Content */}
      <div className="relative container mx-auto px-4 py-12 min-h-screen flex flex-col items-center justify-center">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto text-center mb-12 relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            The Future of Gaming is{" "}
            <span className="text-primary">Social</span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-12">
            A community-powered platform where developers share playable demos and build upon existing games - like TikTok for gaming
          </p>
        </div>

        {/* 3D Phone Image - Positioned behind the content */}
        <div className="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none">
          <img
            src="/lovable-uploads/8f71ebd3-b825-47d0-a737-4f47b6ee7c29.png"
            alt="3D Phone"
            className="w-full max-w-2xl object-contain"
          />
        </div>

        {/* Call to Action Section */}
        <div className="relative z-10 w-full max-w-md space-y-8">
          <WaitlistForm />
          
          <div className="flex justify-center">
            <Button
              variant="outline"
              className="bg-white/10 border-white/20 text-white hover:bg-white/20"
              onClick={() => window.open("https://discord.gg/your-discord", "_blank")}
            >
              Join Discord Community
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;