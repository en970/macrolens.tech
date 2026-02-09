"use client";

import { Instagram, Twitter, Github, Coffee } from "lucide-react";

export const Footer = () => {
    return (
        <footer className="py-12 px-4 border-t border-white/5">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center font-bold text-black">M</div>
                    <span className="text-xl font-bold tracking-tight">MacroLens</span>
                </div>

                <div className="flex gap-8 text-zinc-500 text-sm">
                    <a href="https://www.buymeacoffee.com/macrolens" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors font-medium text-amber-500/90 hover:text-amber-500">Support Us</a>
                    <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
                    <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
                </div>

                <div className="flex gap-4">
                    <a href="https://www.buymeacoffee.com/macrolens" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl glass flex items-center justify-center hover:scale-110 transition-transform text-zinc-400 hover:text-amber-500 bg-amber-500/5 border-amber-500/20" title="Buy us a coffee">
                        <Coffee className="w-5 h-5" />
                    </a>
                    <a href="#" className="w-10 h-10 rounded-xl glass flex items-center justify-center hover:scale-110 transition-transform text-zinc-400 hover:text-primary">
                        <Twitter className="w-5 h-5" />
                    </a>
                    <a href="#" className="w-10 h-10 rounded-xl glass flex items-center justify-center hover:scale-110 transition-transform text-zinc-400 hover:text-primary">
                        <Instagram className="w-5 h-5" />
                    </a>
                    <a href="#" className="w-10 h-10 rounded-xl glass flex items-center justify-center hover:scale-110 transition-transform text-zinc-400 hover:text-primary">
                        <Github className="w-5 h-5" />
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
