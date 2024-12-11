import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";

export const WaitlistForm = () => {
  const [email, setEmail] = useState("");
  const [newsletter, setNewsletter] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      console.log("Submitting to Supabase:", { email, newsletter });
      
      const { error } = await supabase
        .from('waitlist')
        .insert([
          { email, newsletter }
        ]);

      if (error) throw error;

      toast({
        title: "Thanks for joining!",
        description: "We'll keep you updated on our progress.",
      });
      
      setEmail("");
      setNewsletter(true);
    } catch (error) {
      console.error("Error submitting to waitlist:", error);
      toast({
        title: "Something went wrong",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 w-full max-w-md">
      <div className="flex gap-2">
        <Input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
          disabled={isSubmitting}
        />
        <Button 
          type="submit" 
          className="bg-primary hover:bg-primary/80"
          disabled={isSubmitting}
        >
          Join Waitlist
        </Button>
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox
          id="newsletter"
          checked={newsletter}
          onCheckedChange={(checked) => setNewsletter(checked as boolean)}
          className="border-white/20 data-[state=checked]:bg-primary"
          disabled={isSubmitting}
        />
        <label
          htmlFor="newsletter"
          className="text-sm text-white/80 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Keep me updated about development progress and community input opportunities (no spam)
        </label>
      </div>
    </form>
  );
};