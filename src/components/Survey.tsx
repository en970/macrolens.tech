"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Info } from "lucide-react";
import { cn } from "@/lib/utils";

const SurveyCard = ({
    question,
    options
}: {
    question: string;
    options: string[]
}) => {
    const [selected, setSelected] = useState<number | null>(null);

    return (
        <div className="glass-card p-6 rounded-3xl">
            <h4 className="text-lg font-bold mb-4 flex items-center gap-2">
                <Info className="w-4 h-4 text-primary" />
                {question}
            </h4>
            <div className="flex flex-col gap-2">
                {options.map((option, idx) => (
                    <button
                        key={idx}
                        onClick={() => setSelected(idx)}
                        className={cn(
                            "p-4 rounded-xl text-left transition-all flex justify-between items-center group",
                            selected === idx
                                ? "bg-primary text-black font-bold"
                                : "bg-white/5 hover:bg-white/10 text-zinc-300"
                        )}
                    >
                        {option}
                        {selected === idx && <Check className="w-4 h-4" />}
                    </button>
                ))}
            </div>
        </div>
    );
};

export const Survey = () => {
    return (
        <section className="py-24 px-4 relative overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[400px] bg-primary/5 rounded-full blur-[120px] -z-10" />

            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Help us build the <span className="text-primary italic">perfect app</span></h2>
                    <p className="text-muted-foreground">Your feedback shapes the future of MacroLens.</p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    <SurveyCard
                        question="Accuracy vs Speed?"
                        options={["Maximum Accuracy (GPT-4 Analysis)", "Instant Speed (Quick Log)", "A perfect balance of both"]}
                    />
                    <SurveyCard
                        question="Do you trust AI with restaurant menus?"
                        options={["Yes, fully!", "Only for rough estimates", "I prefer manual input"]}
                    />
                </div>

                <div className="mt-16 text-center">
                    <p className="text-zinc-500 text-sm italic">
                        Thank you for contributing to the MacroLens ecosystem.
                    </p>
                </div>
            </div>
        </section>
    );
};
