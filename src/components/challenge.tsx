import { useEffect, useState, useRef } from "react";
import { Card } from "@/components/ui/card";
import { Flame, TreePine, Wallet } from "lucide-react";
import cookingImage from "@/assets/cooking-biogas.jpg";

const ChallengeSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState({
    energyPoverty: 0,
    firewoodSaved: 0,
    economicBarrier: 0,
  });
  const sectionRef = useRef(null);

  const challenges = [
    {
      icon: Flame,
      title: "Energy Poverty",
      stat: "99% rely on firewood",
      countKey: "energyPoverty",
      maxCount: 99,
      description: "149,647 refugees spend 3-4 hours daily collecting firewood",
    },
    {
      icon: TreePine,
      title: "Deforestation",
      stat: "500,975 kg saved",
      countKey: "firewoodSaved",
      maxCount: 500975,
      description: "BUAK members have saved half a million kg of firewood annually",
    },
    {
      icon: Wallet,
      title: "Economic Barrier",
      stat: "473 days earnings",
      countKey: "economicBarrier",
      maxCount: 473,
      description: "Traditional biodigester costs = unaffordable for $2/day families",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      const timers = challenges.map((challenge) => {
        const duration = 2000; // 2 seconds
        const increment = challenge.maxCount / (duration / 16); // 60 FPS
        let current = 0;

        const timer = setInterval(() => {
          current += increment;
          if (current >= challenge.maxCount) {
            current = challenge.maxCount;
            clearInterval(timer);
          }
          setCounts((prev) => ({
            ...prev,
            [challenge.countKey]: Math.floor(current),
          }));
        }, 16);

        return timer;
      });

      return () => timers.forEach(clearInterval);
    }
  }, [isVisible]);

  return (
    <section className="py-20 bg-neutral-100 relative" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <h2 className={`text-4xl font-extrabold text-center text-neutral-900 mb-4 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
          The Challenges We’re Tackling
        </h2>
        <p className={`text-center text-neutral-600 mb-12 max-w-2xl mx-auto text-lg font-medium ${isVisible ? 'animate-slide-up' : 'opacity-0'}`} style={{ animationDelay: "0.2s" }}>
          Addressing energy poverty, deforestation, and economic barriers in Kyangwali Refugee Settlement
        </p>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {challenges.map((challenge, index) => (
            <Card
              key={index}
              className={`p-6 bg-white border border-neutral-200 hover:border-amber-400 hover:shadow-[0_0_15px_rgba(251,191,36,0.3)] transition-all duration-300 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}
              style={{ animationDelay: `${0.2 * (index + 1)}s` }}
            >
              <challenge.icon className="h-12 w-12 text-amber-400 mb-4 mx-auto" />
              <h3 className="text-xl font-bold text-neutral-900 mb-2 text-center">{challenge.title}</h3>
              <p className="text-2xl font-bold text-amber-400 mb-2 text-center">
                {challenge.countKey === "firewoodSaved"
                  ? `${counts[challenge.countKey].toLocaleString()} kg`
                  : challenge.countKey === "energyPoverty"
                  ? `${counts[challenge.countKey]}%`
                  : `${counts[challenge.countKey]} days`}
              </p>
              <p className="text-neutral-600 text-center">{challenge.description}</p>
            </Card>
          ))}
        </div>

        <Card className="p-8 bg-white border border-neutral-200">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <img
              src={cookingImage}
              alt="Clean cooking with biogas"
              className="w-full md:w-1/3 rounded-lg shadow-md"
            />
            <div className="flex-1">
              <p className={`text-lg italic text-neutral-600 mb-4 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`} style={{ animationDelay: "0.2s" }}>
                "Before BUAK, I spent 4 hours daily collecting firewood. My children missed school. Now we have clean gas, they're in school full-time, and I earn income from waste."
              </p>
              <p className={`font-semibold text-neutral-900 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`} style={{ animationDelay: "0.4s" }}>
                — Sarah M., BUAK Member
              </p>
            </div>
          </div>
        </Card>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <svg
          className="w-full h-16 fill-neutral-900"
          viewBox="0 0 1440 60"
          preserveAspectRatio="none"
        >
          <path
            d="M0,60 C240,40 480,20 720,40 C960,60 1200,20 1440,40 L1440,60 L0,60 Z"
            className="animate-wave"
          />
        </svg>
      </div>

      <style jsx>{`
        @keyframes slide-up {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes wave {
          0% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(6px);
          }
          100% {
            transform: translateY(0);
          }
        }
        .animate-slide-up {
          animation: slide-up 0.8s ease-out forwards;
        }
        .animate-wave {
          animation: wave 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default ChallengeSection;