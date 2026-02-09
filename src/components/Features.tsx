"use client";

import { motion } from "framer-motion";
import {
    Camera,
    Mic,
    Search,
    Smartphone,
    BarChart3,
    Activity,
    PieChart,
    Image as LucideImage,
    Clock,
    ChefHat,
    Trophy,
    Users
} from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";

const FeatureCard = ({
    title,
    description,
    icon: Icon,
    className,
    delay = 0,
    imageSrc
}: {
    title: string;
    description: string;
    icon?: any;
    className?: string;
    delay?: number;
    imageSrc?: string;
}) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay }}
        viewport={{ once: true }}
        className={cn(
            "glass-card p-0 rounded-[2.5rem] flex flex-col overflow-hidden group hover:border-primary/30 transition-all border border-white/5 bg-zinc-900/40",
            className
        )}
    >
        <div className="p-8 pb-6">
            <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform text-primary">
                {Icon && <Icon className="w-6 h-6" />}
            </div>
            <h3 className="text-2xl font-bold mb-3 tracking-tight">{title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
        </div>

        {imageSrc && (
            <div className="mt-auto relative w-full aspect-[9/16] overflow-hidden">
                <Image
                    src={imageSrc}
                    alt={title}
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#121212] via-[#121212]/30 to-transparent pointer-events-none" />
            </div>
        )}
    </motion.div>
);

export const Features = () => {
    return (
        <section className="py-32 px-4 bg-[#0D0D0D]">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-24">
                    <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">Everything you need for <span className="text-primary italic">Precision</span></h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">The world's most intuitive nutrition engine, powered by advanced AI.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <FeatureCard
                        title="Identify Meals"
                        description="Instantly analyze calories and macros with GPT-4 Vision. No more manual searching."
                        icon={Camera}
                        imageSrc="/images/meals.jpg"
                        delay={0.1}
                    />
                    <FeatureCard
                        title="AI Nutritionist"
                        description="Get expert insights and tailored advice in your pocket, 24/7. Your personal nutritionist."
                        icon={Activity}
                        imageSrc="/images/stats.jpg"
                        delay={0.2}
                    />
                    <FeatureCard
                        title="Barcode Scanner"
                        description="Quick scan for instant facts. Tracking packaged snacks just got easier."
                        icon={Smartphone}
                        imageSrc="/images/Screenshot_20260203_011035.jpg"
                        delay={0.3}
                    />
                    <FeatureCard
                        title="Beyond Just Calories"
                        description="Track vitamins and minerals to feel your best. Detailed analysis for health."
                        icon={Clock}
                        imageSrc="/images/history.jpg"
                        className="lg:col-span-2"
                        delay={0.4}
                    />
                    <FeatureCard
                        title="Start Tracking"
                        description="Download now and try it for free. Snap a photo, AI counts for you."
                        icon={LucideImage}
                        imageSrc="/images/3.png"
                        delay={0.5}
                    />
                </div>

                {/* Secondary Feature Badges */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
                    {[
                        { title: "Voice Logging", icon: Mic },
                        { title: "Menu Scanner", icon: Search },
                        { title: "Micro Tracking", icon: PieChart },
                        { title: "PDF Analytics", icon: BarChart3 },
                    ].map((f, i) => (
                        <div key={i} className="glass p-6 rounded-3xl flex items-center gap-4 hover:bg-white/5 transition-all group border border-white/5">
                            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                                <f.icon className="w-5 h-5 text-primary" />
                            </div>
                            <h4 className="font-bold text-sm">{f.title}</h4>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
