"use client";

import { motion } from "framer-motion";
import { MessageSquarePlus, ChevronRight } from "lucide-react";

export const Feedback = () => {
    return (
        <section className="py-24 px-4 bg-[#0A0A0A] relative overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-4xl mx-auto relative z-10">
                <div className="glass-card p-8 md:p-12 rounded-[3rem] border border-white/10 text-center bg-zinc-900/40 backdrop-blur-xl">
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                        <MessageSquarePlus className="w-8 h-8 text-primary" />
                    </div>

                    <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
                        Help us build the <span className="text-primary italic">Ultimate</span> MacroLens
                    </h2>

                    <p className="text-muted-foreground text-lg mb-10 max-w-2xl mx-auto">
                        We are building this for you. Tell us which features you want to see next and help shape the future of AI nutrition.
                    </p>

                    <a
                        href="https://forms.google.com" // Placeholder for user's Google Form
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex h-16 px-10 rounded-2xl bg-white text-black font-bold hover:scale-[1.05] active:scale-[0.95] transition-all items-center gap-3 shadow-2xl"
                    >
                        Share Your Ideas
                        <ChevronRight className="w-5 h-5" />
                    </a>

                    <p className="mt-8 text-sm text-zinc-500">
                        Join our community of builders and early testers.
                    </p>
                </div>
            </div>
        </section>
    );
};
