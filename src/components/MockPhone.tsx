"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export const MockPhone = () => {
    return (
        <div className="relative mx-auto w-[280px] h-[580px] md:w-[320px] md:h-[660px] bg-zinc-900 rounded-[3rem] border-[10px] border-zinc-800 shadow-2xl overflow-hidden ring-1 ring-white/10 group">
            {/* Notch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-zinc-800 rounded-b-2xl z-20 flex items-center justify-center">
                <div className="w-10 h-1 rounded-full bg-zinc-700 mx-auto" />
            </div>

            {/* Real Screenshot Content */}
            <div className="relative h-full w-full bg-black overflow-hidden">
                <Image
                    src="/images/Screenshot_20260203_011028.jpg"
                    alt="MacroLens App Interface"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                />

                {/* Dynamic Scanning Overlay Effect */}
                <motion.div
                    initial={{ top: "-100%" }}
                    animate={{ top: "100%" }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                    className="absolute left-0 right-0 h-40 bg-gradient-to-b from-primary/0 via-primary/20 to-primary/0 opacity-50 z-10 pointer-events-none"
                />
            </div>

            {/* Gloss Effect */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-transparent pointer-events-none" />
        </div>
    );
};
