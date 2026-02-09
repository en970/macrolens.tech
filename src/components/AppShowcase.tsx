import Image from "next/image";

export const AppShowcase = () => {
    return (
        <section className="py-12 bg-black border-y border-white/5 relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-full bg-primary/5 blur-[100px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-8">
                    <h2 className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60">
                        Experience the Future of Tracking
                    </h2>
                </div>

                <div className="relative w-full rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-primary/10">
                    <Image
                        src="/showcase-banner.png"
                        alt="MacroLens App Showcase"
                        width={1920}
                        height={1080}
                        className="w-full h-auto object-cover"
                    />
                </div>
            </div>
        </section>
    );
};
