import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";
import Image from "next/image";

const UserPrograms = () => {
  return (
    <div className="w-full pb-24 pt-16 relative">
      <div className="container mx-auto max-w-6xl px-4">
        {/* HEADER- PROGRAM GALLERY */}
        <div className="bg-card/90 backdrop-blur-sm border border-border rounded-lg overflow-hidden mb-16">
          {/* HEADER BAR */}
          <div className="flex items-center justify-between px-5 py-3 border-b border-border bg-background/70">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-primary"></div>
              <span className="text-sm text-primary font-medium">
                Program Gallery
              </span>
            </div>
            <div className="text-sm text-muted-foreground">Featured Plans</div>
          </div>

          {/* HEADER CONTENT */}
          <div className="p-8 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-foreground">AI-Generated </span>
              <span className="text-primary">Programs</span>
            </h2>

            <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-10">
              Explore personalized fitness plans our AI assistant has created
              for other users
            </p>

            {/* STATS */}
            <div className="flex items-center justify-center gap-16 mt-10 font-mono">
              <div className="flex flex-col items-center">
                <p className="text-3xl text-primary">500+</p>
                <p className="text-sm text-muted-foreground uppercase tracking-wide mt-1">
                  PROGRAMS
                </p>
              </div>
              <div className="w-px h-12 bg-border"></div>
              <div className="flex flex-col items-center">
                <p className="text-3xl text-primary">3min</p>
                <p className="text-sm text-muted-foreground uppercase tracking-wide mt-1">
                  CREATION TIME
                </p>
              </div>
              <div className="w-px h-12 bg-border"></div>
              <div className="flex flex-col items-center">
                <p className="text-3xl text-primary">100%</p>
                <p className="text-sm text-muted-foreground uppercase tracking-wide mt-1">
                  PERSONALIZED
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Program cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Image
            src="/leg.gif"
            width={500}
            height={300}
            alt="leg image"
            unoptimized
          />
          <Image
            src="/Workout 310.gif"
            width={500}
            height={300}
            alt="leg image"
            unoptimized
          />
          <Image
            src="/exercise.gif"
            width={500}
            height={300}
            alt="leg image"
            unoptimized
          />
        </div>

        {/* CTA section */}
        <div className="mt-16 text-center">
          <Link href="/generate-program">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-lg"
            >
              Generate Your Program
              <Sparkles className="ml-2 h-5 w-5" />
            </Button>
          </Link>
          <p className="text-muted-foreground mt-4">
            Join 500+ users with AI-customized fitness programs
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserPrograms;
