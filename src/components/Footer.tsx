"use client";

import { Coffee } from "lucide-react";
import Image from "next/image";

export const Footer = () => {
    return (
        <footer className="py-12 px-4 border-t border-white/5">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
                <div className="flex items-center gap-2">
                    <Image src="/logo.png" alt="MacroLens Logo" width={32} height={32} className="rounded-lg shadow-lg shadow-primary/20" />
                    <span className="text-xl font-bold tracking-tight">MacroLens</span>
                </div>

                <div className="flex gap-8 text-zinc-500 text-sm">
                    <a href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</a>
                    <a href="/terms" className="hover:text-primary transition-colors">Terms of Service</a>
                </div>

                <div className="flex gap-4">
                    <a href="https://www.buymeacoffee.com/macrolens" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl glass flex items-center justify-center hover:scale-110 transition-transform text-zinc-400 hover:text-amber-500 bg-amber-500/5 border-amber-500/20" title="Buy us a coffee">
                        <Coffee className="w-5 h-5" />
                    </a>
                </div>
            </div>

            <div className="mt-12 text-center text-zinc-600 text-[12px]">
                © {new Date().getFullYear()} MacroLens. All rights reserved. <br className="md:hidden" />
                AI-Powered Precision for Better Health.
            </div>
        </footer>
    );
};
