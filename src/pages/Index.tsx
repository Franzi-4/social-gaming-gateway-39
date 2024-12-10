import { Button } from "@/components/ui/button";
import { WaitlistForm } from "@/components/WaitlistForm";

const Index = () => {
  return (
    <div className="min-h-screen relative overflow-hidden bg-[#27005D]">
      {/* Background Effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/2 w-[1000px] h-[1000px] rounded-full bg-[#9400FF] opacity-20 blur-[120px] animate-float" />
        <div className="absolute -bottom-1/2 -left-1/2 w-[1000px] h-[1000px] rounded-full bg-[#AED2FF] opacity-10 blur-[120px] animate-float" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 py-20 min-h-screen flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          The Future of Gaming is{" "}
          <span className="text-primary">Social</span>
        </h1>
        
        <p className="text-lg md:text-xl text-white/80 max-w-2xl mb-12">
          A community-powered platform where developers share playable demos and build upon existing games - like TikTok for gaming
        </p>

        <div className="flex flex-col items-center gap-8 w-full max-w-md">
          <WaitlistForm />
          
          <div className="flex gap-4">
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