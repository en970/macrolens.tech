"use client";

import { motion } from "framer-motion";
import {
  Camera,
  Smartphone,
  MessageSquare,
  ScanSearch,
  BarChart3,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useLocale } from "./LocaleProvider";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  className?: string;
  delay?: number;
  imageSrc?: string;
}

const FeatureCard = ({
  title,
  description,
  icon: Icon,
  className,
  delay = 0,
  imageSrc,
}: FeatureCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    viewport={{ once: true }}
    className={cn(
      "glass-card p-0 rounded-[2.5rem] flex flex-col overflow-hidden group hover:border-primary/30 transition-all border border-white/5 bg-zinc-900/40",
      className,
    )}
  >
    <div className="p-8 pb-6">
      <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform text-primary">
        <Icon className="w-6 h-6" />
      </div>
      <h3 className="text-2xl font-bold mb-3 tracking-tight">{title}</h3>
      <p className="text-muted-foreground text-sm leading-relaxed">
        {description}
      </p>
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
  const { t } = useLocale();
  return (
    <section className="py-32 px-4 bg-[#0D0D0D]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            {t.features.sectionTitle}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t.features.sectionDesc}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            title={t.features.f1Title}
            description={t.features.f1Desc}
            icon={Camera}
            imageSrc="/images/meals.jpg"
            delay={0.1}
          />
          <FeatureCard
            title={t.features.f2Title}
            description={t.features.f2Desc}
            icon={MessageSquare}
            imageSrc="/images/stats.jpg"
            delay={0.2}
          />
          <FeatureCard
            title={t.features.f3Title}
            description={t.features.f3Desc}
            icon={Smartphone}
            imageSrc="/images/3.png"
            delay={0.3}
          />
          <FeatureCard
            title={t.features.f4Title}
            description={t.features.f4Desc}
            icon={ScanSearch}
            imageSrc="/images/history.jpg"
            className="lg:col-span-2"
            delay={0.4}
          />
          <FeatureCard
            title={t.features.f5Title}
            description={t.features.f5Desc}
            icon={BarChart3}
            imageSrc="/images/Screenshot_20260203_011035.jpg"
            delay={0.5}
          />
        </div>
      </div>
    </section>
  );
};
