"use client";

import { motion } from "framer-motion";
import { MockPhone } from "./MockPhone";
import { ChevronRight } from "lucide-react";
import Image from "next/image";

export const Hero = () => {
    return (
        <section id="waitlist" className="relative pt-32 pb-16 lg:pt-48 lg:pb-32 overflow-hidden">
            {/* Background Orbs */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[800px] pointer-events-none">
                <div className="absolute top-20 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] opacity-20" />
                <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[120px] opacity-10" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center lg:text-left"
                    >
                        <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-8">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                                </span>
                                MacroLens Beta is Live
                            </div>
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 text-sm font-bold">
                                🎁 First 100 people get 1 month Premium
                            </div>
                        </div>

                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-[1.1]">
                            Stop Guessing. <br />
                            <span className="text-primary italic">Start Snapping.</span>
                        </h1>

                        <p className="text-xl text-muted-foreground mb-10 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                            Your Nutrition, Automated by AI. Instantly calculate calories and macros with just a photo or your voice.
                        </p>

                        <div className="flex flex-col items-center lg:items-start gap-4">
                            <form className="flex flex-col sm:flex-row gap-3 w-full max-w-md" onSubmit={(e) => e.preventDefault()}>
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="flex-1 h-14 rounded-2xl glass px-5 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all border-white/10"
                                    required
                                />
                                <button
                                    type="submit"
                                    className="h-14 px-8 rounded-2xl bg-primary text-black font-bold hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 group shadow-xl shadow-primary/20"
                                >
                                    Join Waitlist
                                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </button>
                            </form>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative flex justify-center lg:justify-end"
                    >
                        <div className="absolute inset-0 bg-primary/20 rounded-full blur-[100px] opacity-30 -z-10 animate-pulse" />
                        <MockPhone />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
