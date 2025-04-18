"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import UserPrograms from "@/components/UserPrograms";
import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";

const HomePage = () => {
  return (
    <>
      <div className="min-h-screen text-white flex flex-col items-center justify-center p-8 relative overflow-hidden">
        {/* Background Glow Effect */}
        <div className="absolute inset-0 -z-10">
          <div className="w-[1000px] h-[1000px] bg-purple-500 opacity-20 rounded-full blur-3xl absolute -top-64 -left-64 animate-pulse" />
          <div className="w-[800px] h-[800px] bg-pink-500 opacity-20 rounded-full blur-2xl absolute top-32 right-20 animate-ping" />
        </div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="md:text-8xl sm:text-6xl font-extrabold text-center mb-4 transform transition-all duration-700 ease-in-out hover:scale-105"
        >
          Welcome to <span className="text-primary"> Core AI</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="text-xl text-center text-zinc-300 max-w-xl mb-8 transition-opacity duration-700 ease-in-out hover:opacity-90"
        >
          Your personal AI voice fitness coach. Build custom workouts, track
          goals, and stay motivated—all with your voice.
        </motion.p>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <Button className="color-primary hover:color-primary text-black px-8 py-6 rounded-md text-lg font-semibold shadow-lg transition-transform transform hover:scale-110">
            <Link
              href={"/generate-program"}
              className="flex items-center font-mono"
            >
              Build a Program
              <ArrowRightIcon className="ml-2 size-5" />
            </Link>
          </Button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
      >
        <UserPrograms />
      </motion.div>
    </>
  );
};

export default HomePage;
