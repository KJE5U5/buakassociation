import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Award, ChevronRight } from "lucide-react";
import heroImage from "@/assets/hero-biodigester.jpg";

const HeroSection = () => {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setTimeout(() => setIsLoaded(true), 100);
    }, []);

    return (
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-neutral-900">
            <div
                className="absolute inset-0 bg-cover bg-center transform scale-105 transition-transform duration-1000 ease-out"
                style={{ backgroundImage: `url(img_1.png)` }}
            >
                <div className="absolute inset-0 bg-neutral-900/65"></div>
                <div className="absolute inset-0 bg-amber-400/10 animate-pulse-slow"></div>
            </div>

            <div className="relative z-10 container mx-auto px-6 text-center text-white">
                <h1 className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 ${isLoaded ? 'animate-flow' : 'opacity-0'}`}>
                    <span className="inline-block">Waste</span>{' '}
                    <span className="inline-block text-amber-400 animate-flow-delay">to</span>{' '}
                    <span className="inline-block">Wealth</span>
                    <br />
                    <span className="text-amber-400 text-3xl sm:text-4xl md:text-5xl lg:text-6xl">Empowering Refugee Futures</span>
                </h1>
                <p className={`text-lg sm:text-xl md:text-2xl mb-6 max-w-3xl mx-auto font-medium leading-relaxed ${isLoaded ? 'animate-flow' : 'opacity-0'}`} style={{ animationDelay: "0.3s" }}>
                    Leading East Africa's Biogas Revolution
                </p>
                <p className={`text-base sm:text-lg mb-10 max-w-2xl mx-auto opacity-80 font-light italic ${isLoaded ? 'animate-flow' : 'opacity-0'}`} style={{ animationDelay: "0.5s" }}>
                    73 Households Transforming Lives | 94% Satisfaction | 500,975 kg Firewood Saved
                </p>
                <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center ${isLoaded ? 'animate-flow' : 'opacity-0'}`} style={{ animationDelay: "0.7s" }}>
                    <Link to="/invest">
                        <Button
                            className="bg-amber-400 hover:bg-amber-300 text-neutral-900 font-bold text-lg px-8 py-3 rounded-full transition-all duration-300 shadow-[0_0_15px_rgba(251,191,36,0.5)] hover:shadow-[0_0_25px_rgba(251,191,36,0.7)] flex items-center"
                        >
                            Fuel the Future
                            <ChevronRight className="ml-2 h-5 w-5 animate-pulse" />
                        </Button>
                    </Link>
                    <Link to="/about">
                        <Button
                            className="bg-transparent border-2 border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-neutral-900 font-bold text-lg px-8 py-3 rounded-full transition-all duration-300 shadow-[0_0_10px_rgba(251,191,36,0.3)] hover:shadow-[0_0_20px_rgba(251,191,36,0.5)]"
                        >
                            Our Vision
                        </Button>
                    </Link>
                </div>
                <div className={`mt-10 inline-flex items-center gap-3 bg-amber-400/15 backdrop-blur-lg px-6 py-3 rounded-full shadow-md border border-amber-400/30 ${isLoaded ? 'animate-flow' : 'opacity-0'}`} style={{ animationDelay: "0.9s" }}>
                    <Award className="h-6 w-6 text-amber-400 animate-spin-slow" />
                    <span className="text-sm font-semibold tracking-wide">Ashden Award Winner 2024</span>
                </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 z-10">
                <svg
                    className="w-full h-20 fill-neutral-100"
                    viewBox="0 0 1440 80"
                    preserveAspectRatio="none"
                >
                    <path
                        d="M0,80 C180,60 360,20 540,40 C720,60 900,20 1080,40 C1260,60 1440,20 1440,80 L1440,80 L0,80 Z"
                        className="animate-wave"
                    />
                </svg>
            </div>

            <style jsx>{`
        @keyframes flow {
          0% {
            opacity: 0;
            transform: translateY(40px) scale(0.95);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        @keyframes flow-delay {
          0% {
            opacity: 0;
            transform: translateY(40px) scale(0.95);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.1;
          }
          50% {
            opacity: 0.2;
          }
        }
        @keyframes spin-slow {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
        @keyframes wave {
          0% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(8px);
          }
          100% {
            transform: translateY(0);
          }
        }
        .animate-flow {
          animation: flow 1s ease-out forwards;
        }
        .animate-flow-delay {
          animation: flow-delay 1.2s ease-out forwards;
          animation-delay: 0.2s;
        }
        .animate-pulse-slow {
          animation: pulse-slow 6s ease-in-out infinite;
        }
        .animate-spin-slow {
          animation: spin-slow 10s linear infinite;
        }
        .animate-wave {
          animation: wave 7s ease-in-out infinite;
        }
      `}</style>
        </section>
    );
};

export default HeroSection;