import { WaitlistForm } from "@/components/WaitlistForm";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#27005D] text-white">
      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Navigation */}
        <nav className="flex justify-between items-center mb-24">
          <div className="text-2xl font-bold">Social Gaming Gateway</div>
          <Button 
            variant="outline" 
            className="bg-white/10 border-white/20 text-white hover:bg-white/20"
            onClick={() => window.open("https://discord.gg/your-discord", "_blank")}
          >
            Join Discord
          </Button>
        </nav>

        {/* Hero Section */}
        <div className="max-w-4xl mx-auto space-y-16">
          <div className="space-y-6 text-center">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Create and Share
              <br />
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Playable Game Demos
              </span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
              A community-powered platform where developers share playable demos and build upon existing games - like TikTok for gaming
            </p>
          </div>

          {/* Waitlist Form */}
          <div className="max-w-md mx-auto">
            <WaitlistForm />
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-8 pt-16">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Create</h3>
              <p className="text-white/60">Build and share your game demos directly in the browser</p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Discover</h3>
              <p className="text-white/60">Find new games and get inspired by other creators</p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Collaborate</h3>
              <p className="text-white/60">Fork existing games and build upon them with the community</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;