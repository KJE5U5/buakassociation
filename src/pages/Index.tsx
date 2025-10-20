import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import heroImage from "@/assets/hero-biodigester.jpg";
import teamImage from "@/assets/team-community.jpg";
import cookingImage from "@/assets/cooking-biogas.jpg";
import {
  Flame,
  TreePine,
  Wallet,
  TrendingUp,
  Users,
  Zap,
  Award,
  ChevronRight,
<<<<<<< HEAD
  ArrowRight,
  Recycle,
  Sprout,
  DollarSign,
  Target,
  HandshakeIcon,
  Globe
=======
  ChevronLeft
>>>>>>> 3a9c11e (Updated dashboard UI and fixed bugs)
} from "lucide-react";
import HeroSection from "@/components/hero";
import DownloadInvestmentDeck from "@/components/downloaddeck";

// Improved Animation component for counting numbers
const AnimatedCounter = ({ value, duration = 2000, delay = 0 }: { value: string; duration?: number; delay?: number }) => {
  const [displayValue, setDisplayValue] = useState("0");
  const [hasStarted, setHasStarted] = useState(false);
  const elementRef = useRef<HTMLSpanElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setTimeout(() => {
            setHasStarted(true);
            startAnimation();
          }, delay);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const startAnimation = () => {
    const numericMatch = value.match(/([\d,\.]+)/);
    
    if (!numericMatch) {
      setDisplayValue(value);
      return;
    }

    const numericPart = numericMatch[1];
    const prefix = value.split(numericPart)[0];
    const suffix = value.split(numericPart)[1] || '';
    
    const cleanNumeric = numericPart.replace(/[^\d.]/g, '');
    const targetNumber = parseFloat(cleanNumeric);
    
    if (isNaN(targetNumber)) {
      setDisplayValue(value);
      return;
    }

    const startTime = Date.now();
    const startValue = 0;
    
    const formatNumber = (num: number): string => {
      if (value.includes("UGX")) {
        return num.toLocaleString('en-US');
      }
      if (value.includes("kg")) {
        return num.toLocaleString('en-US');
      }
      if (value.includes("%")) {
        return Math.round(num).toString();
      }
      return Math.round(num).toLocaleString('en-US');
    };

    const updateCounter = () => {
      const now = Date.now();
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentValue = startValue + (targetNumber - startValue) * easeOutQuart;
      
      setDisplayValue(prefix + formatNumber(currentValue) + suffix);
      
      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      } else {
        setDisplayValue(value);
      }
    };

    requestAnimationFrame(updateCounter);
  };

  return <span ref={elementRef}>{hasStarted ? displayValue : "0"}</span>;
};

// Scroll-triggered animation component
const FadeUpElement = ({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
        }
      },
      { threshold: 0.1, rootMargin: "-50px" }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={elementRef}
      className={`transition-all duration-700 ease-out ${
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-8'
      } ${className}`}
    >
      {children}
    </div>
  );
};

// Logo Slider Component
const LogoSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  const partners = [
    { 
      name: "Ashden Awards", 
      logo: "/img_5.png",
      url: "https://ashden.org"
    },
    { 
      name: "CARE International", 
      logo: "/img_6.png",
      url: "https://care.org"
    },
    { 
      name: "UNHCR", 
      logo: "/img_7.png",
      url: "https://unhcr.org"
    },
    { 
      name: "JICA", 
      logo: "/img_8.png",
      url: "https://jica.go.jp"
    },
    { 
      name: "Biogas Solutions Uganda", 
      logo: "/img_9.png",
      url: "#"
    },

  ];

  const slidesToShow = 4;
  const totalSlides = Math.ceil(partners.length / slidesToShow);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative max-w-6xl mx-auto">
      {/* Navigation Arrows */}
      <button 
        onClick={prevSlide}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg transition-all duration-300 hover:scale-110"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      
      <button 
        onClick={nextSlide}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg transition-all duration-300 hover:scale-110"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      {/* Slider Container */}
      <div className="overflow-hidden">
        <div 
          ref={sliderRef}
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {Array.from({ length: totalSlides }).map((_, slideIndex) => (
            <div key={slideIndex} className="w-full flex-shrink-0">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 px-4">
                {partners.slice(slideIndex * slidesToShow, (slideIndex + 1) * slidesToShow).map((partner, index) => (
                  <FadeUpElement key={partner.name} delay={index * 100}>
                    <a 
                      href={partner.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block group"
                    >
                      <Card className="p-6 h-32 flex items-center justify-center hover:shadow-elegant transition-all duration-300 bg-white/50 backdrop-blur-sm group-hover:bg-white/80">
                        <div className="relative w-full h-16 flex items-center justify-center">
                          {/* Fallback text if logo image fails to load */}
                          <div className="text-sm font-medium text-muted-foreground opacity-70 group-hover:opacity-100 transition-opacity">
                            {partner.name}
                          </div>
                          {/* Uncomment below when you have actual logo images */}
                          <img
                            src={partner.logo}
                            alt={partner.name}
                            className="max-h-12 max-w-full object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                            onError={(e) => {
                              // Hide the image if it fails to load, fallback to text
                              e.currentTarget.style.display = 'none';
                            }}
                          /> 
                        </div>
                      </Card>
                    </a>
                  </FadeUpElement>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="flex justify-center mt-6 space-x-2">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-primary w-6' : 'bg-muted-foreground/30'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

const Index = () => {
  const stats = [
    { number: "73", label: "Biodigesters Operational", icon: Zap },
    { number: "UGX 87.6M", label: "Community Revenue", icon: TrendingUp },
    { number: "500,975 kg", label: "Firewood Saved", icon: TreePine },
    { number: "94%", label: "Satisfaction Rate", icon: Award },
    { number: "95%", label: "Repayment Rate", icon: Wallet },
    { number: "69", label: "Members (35 Women)", icon: Users },
  ];

  const challenges = [
    {
      icon: Flame,
      title: "Energy Poverty",
      stat: "99% rely on firewood",
      description: "149,647 refugees spend 3-4 hours daily collecting firewood"
    },
    {
      icon: TreePine,
      title: "Deforestation",
      stat: "500,975 kg saved",
      description: "BUAK members have saved half a million kg of firewood annually"
    },
    {
      icon: Wallet,
      title: "Economic Barrier",
      stat: "473 days earnings",
      description: "Traditional biodigester costs = unaffordable for $2/day families"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <HeroSection />

      {/* Challenge Section */}
      <section className="py-24 bg-gradient-to-b from-background to-muted/10">
        <div className="container mx-auto px-6 max-w-7xl">
          <FadeUpElement>
            <h2 className="text-4xl font-bold text-center mb-4">
              The Challenge We're Solving
            </h2>
          </FadeUpElement>

          <FadeUpElement delay={100}>
            <p className="text-center text-xl text-muted-foreground mb-16 max-w-4xl mx-auto leading-relaxed font-light">
              Within the Kyangwali Refugee Settlement, persistent issues of energy access, environmental strain, and economic hurdles demand innovative, sustainable solutions to foster resilience and growth.
            </p>
          </FadeUpElement>

          <div className="grid md:grid-cols-3 gap-12 mb-20">
            {challenges.map((challenge, index) => (
              <FadeUpElement key={index} delay={index * 150}>
                <Card className="group p-8 bg-card border border-border/50 hover:border-primary hover:shadow-2xl transition-all duration-500 ease-out rounded-2xl overflow-hidden relative">
                  <div className="flex items-center mb-6">
                    <challenge.icon className="h-10 w-10 text-primary mr-4 transition-transform group-hover:scale-110 duration-300" />
                    <h3 className="text-2xl font-bold text-foreground">{challenge.title}</h3>
                  </div>
                  <p className="text-4xl font-extrabold text-primary mb-4 tracking-tight">
                    <AnimatedCounter value={challenge.stat} duration={3000} delay={500 + (index * 200)} />
                  </p>
                  <p className="text-muted-foreground leading-relaxed text-base">{challenge.description}</p>
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                </Card>
              </FadeUpElement>
            ))}
          </div>

          <FadeUpElement delay={400}>
            <Card className="p-12 bg-gradient-to-br from-background to-primary/5 border border-border shadow-xl rounded-2xl overflow-hidden">
              <div className="flex flex-col md:flex-row items-center gap-10">
                <div className="md:w-5/12 relative">
                  <img
                    src="/img_2.png"
                    alt="Empowered community member using clean biogas for cooking"
                    className="w-full rounded-xl shadow-2xl object-cover h-80 transform transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl"></div>
                </div>
                <div className="flex-1">
                  <blockquote className="text-2xl font-medium italic mb-6 text-foreground border-l-4 border-secondary pl-6 leading-relaxed relative">
                    "Before BUAK, I spent 4 hours daily collecting firewood. My children missed school. Now we have clean gas, they're in school full-time, and I earn income from waste."
                    <span className="absolute bottom-0 right-0 text-6xl text-secondary/20 -mr-2 -mb-4">”</span>
                  </blockquote>
                  <footer className="text-lg font-semibold text-primary">
                    — Sarah M., BUAK Member
                  </footer>
                </div>
              </div>
            </Card>
          </FadeUpElement>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <FadeUpElement>
            <h2 className="text-4xl font-bold text-center mb-4">
              Our Innovation: Offtake-Based Financing
            </h2>
          </FadeUpElement>
          
          <FadeUpElement delay={100}>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Making biogas affordable through production-based repayment
            </p>
          </FadeUpElement>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-4 gap-4 mb-8">
              {[
                { number: "1", title: "30% Member", desc: "Contribution (in-kind materials)" },
                { number: "2", title: "70% BUAK", desc: "Financing (loan from fund)" },
                { number: "3", title: "Installed", desc: "Biodigester ready (15 days)" },
                { number: "4", title: "Repay", desc: "Via bio-slurry sales" },
              ].map((step, index) => (
                <FadeUpElement key={index} delay={index * 100}>
                  <Card className="p-6 text-center hover:shadow-glow transition-all">
                    <div className="text-3xl font-bold text-primary mb-2">{step.number}</div>
                    <h3 className="font-bold mb-2">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">{step.desc}</p>
                  </Card>
                </FadeUpElement>
              ))}
            </div>

            <FadeUpElement delay={400}>
              <Card className="p-6 bg-primary text-primary-foreground">
                <h3 className="text-2xl font-bold mb-4 text-center">
                  No Cash Upfront Required | 95% Repayment Rate
                </h3>
                <p className="text-center mb-4">
                  Repayment happens through production (bio-slurry sales), not cash out of pocket.
                  This aligns incentives and removes the #1 barrier.
                </p>
                <div className="text-center">
                  <Link to="/model">
                    <Button variant="secondary" size="lg">
                      See How It Works
                      <ChevronRight className="ml-2" />
                    </Button>
                  </Link>
                </div>
              </Card>
            </FadeUpElement>
          </div>
        </div>
      </section>

      {/* How BUAK Works - Flow Diagram */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">How BUAK Works</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            A simple, sustainable cycle that transforms waste into wealth
          </p>

          <div className="max-w-6xl mx-auto">
            {/* Flow Diagram */}
            <div className="grid grid-cols-1 md:grid-cols-6 gap-4 items-center mb-8">
              {/* Step 1 */}
              <Card className="p-6 text-center hover:shadow-glow transition-all">
                <Recycle className="h-10 w-10 text-primary mx-auto mb-3" />
                <h3 className="font-bold mb-2">Feed Waste In</h3>
                <p className="text-xs text-muted-foreground">Animal waste goes into digester</p>
              </Card>

              <div className="hidden md:flex justify-center">
                <ArrowRight className="h-8 w-8 text-primary" />
              </div>

              {/* Step 2 */}
              <Card className="p-6 text-center hover:shadow-glow transition-all">
                <Flame className="h-10 w-10 text-primary mx-auto mb-3" />
                <h3 className="font-bold mb-2">Get Clean Cooking Fuel</h3>
                <p className="text-xs text-muted-foreground">Biogas for daily cooking</p>
              </Card>

              <div className="hidden md:flex justify-center">
                <ArrowRight className="h-8 w-8 text-primary" />
              </div>

              {/* Step 3 */}
              <Card className="p-6 text-center hover:shadow-glow transition-all">
                <Sprout className="h-10 w-10 text-primary mx-auto mb-3" />
                <h3 className="font-bold mb-2">Grow More, Farm Better</h3>
                <p className="text-xs text-muted-foreground">Bio-slurry fertilizer</p>
              </Card>

              <div className="hidden md:flex justify-center">
                <ArrowRight className="h-8 w-8 text-primary" />
              </div>

              {/* Step 4 */}
              <Card className="p-6 text-center hover:shadow-glow transition-all">
                <DollarSign className="h-10 w-10 text-primary mx-auto mb-3" />
                <h3 className="font-bold mb-2">Create New Income Streams</h3>
                <p className="text-xs text-muted-foreground">Black Soldier Fly protein & bio-slurry sales</p>
              </Card>
            </div>

            <Card className="p-6 bg-gradient-subtle border-primary/20">
              <p className="text-center text-muted-foreground">
                <strong>The Complete Cycle:</strong> Community mobilizer identifies eligible households → 
                Technical verification → Member signs contract → 9-day construction → Training & feeding → 
                Weekly bio-slurry collection → Income generation & loan repayment
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Why BUAK - Value Proposition */}
      <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">Why BUAK?</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Purpose-driven innovation that creates lasting impact
          </p>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Card 1: Community-Owned */}
            <Card className="p-8 hover:shadow-elegant transition-all">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <HandshakeIcon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Community-Owned, Market-Driven, Replicable</h3>
              <p className="text-muted-foreground">
                Cooperative ownership ensures sustainability. Market-based revenue model eliminates donor dependency. 
                Proven model ready for replication across 13 refugee-hosting districts.
              </p>
            </Card>

            {/* Card 2: Inclusive Finance */}
            <Card className="p-8 hover:shadow-elegant transition-all">
              <div className="bg-secondary/10 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <Target className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Inclusive Finance for Refugees</h3>
              <p className="text-muted-foreground">
                Off-take based financing removes cash barriers. No collateral required. 
                Repayment through production, not out-of-pocket payments. 95% repayment rate proves the model works.
              </p>
            </Card>

            {/* Card 3: Triple Impact */}
            <Card className="p-8 hover:shadow-elegant transition-all">
              <div className="bg-accent/10 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <Globe className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-bold mb-3">Climate, Health & Food Security in One</h3>
              <p className="text-muted-foreground">
                Reduces deforestation and CO₂ emissions. Eliminates smoke-related health issues. 
                Bio-slurry increases crop yields. BSF protein enhances nutrition and income.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <FadeUpElement>
            <h2 className="text-4xl font-bold text-center mb-12">
              Impact by the Numbers
            </h2>
          </FadeUpElement>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-12">
            {stats.map((stat, index) => (
              <FadeUpElement key={index} delay={index * 100}>
                <Card className="p-6 text-center hover:shadow-elegant transition-all">
                  <stat.icon className="h-8 w-8 text-primary mx-auto mb-3" />
                  <div className="text-3xl font-bold text-primary mb-2">
                    <AnimatedCounter value={stat.number} duration={3000} delay={800 + (index * 200)} />
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </Card>
              </FadeUpElement>
            ))}
          </div>

          <FadeUpElement delay={600}>
            <div className="text-center">
              <Link to="/impact">
                <Button variant="default" size="lg">
                  Explore Full Impact Data
                  <ChevronRight className="ml-2" />
                </Button>
              </Link>
            </div>
          </FadeUpElement>
        </div>
      </section>

      {/* Investment Section */}
      <section className="py-20 bg-amber-600">
        <div className="container mx-auto px-4 text-center">
          <FadeUpElement>
            <h2 className="text-4xl font-bold mb-4 text-white">
              Invest in Proven Impact
            </h2>
          </FadeUpElement>
          
          <FadeUpElement delay={100}>
            <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
              We're seeking $25,000 to scale from 73 to 300 biodigesters in Kyangwali
            </p>
          </FadeUpElement>

          <div className="grid md:grid-cols-4 gap-6 mb-8 max-w-4xl mx-auto">
            {[
              { value: "15-25%", label: "Financial Returns" },
              { value: "2.47:1", label: "Social ROI" },
              { value: "3 Years", label: "Proven Track Record" },
              { value: "🏆 Award", label: "Ashden Winner" },
            ].map((item, index) => (
              <FadeUpElement key={index} delay={index * 100}>
                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                  <p className="text-2xl font-bold text-white">
                    {typeof item.value === 'string' && item.value.match(/\d/) ? (
                      <AnimatedCounter value={item.value} duration={2500} delay={1000 + (index * 200)} />
                    ) : (
                      item.value
                    )}
                  </p>
                  <p className="text-sm text-white/80">{item.label}</p>
                </div>
              </FadeUpElement>
            ))}
          </div>

          <FadeUpElement delay={400}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/invest">
                <Button variant="secondary" size="lg" className ="bg-white text-amber-600 hover:bg-white/90 font-bold">
                  View Investment Opportunity
                </Button>
              </Link>
             <DownloadInvestmentDeck/>
            </div>
          </FadeUpElement>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <FadeUpElement>
            <h3 className="text-2xl font-bold text-center mb-4">
              Trusted by Leading Organizations
            </h3>
          </FadeUpElement>
          
          <FadeUpElement delay={100}>
            <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
              We partner with global leaders in sustainable development and clean energy
            </p>
          </FadeUpElement>

          <LogoSlider />
        </div>
      </section>

      {/* Final CTA Section */}
<<<<<<< HEAD
      <section 
        className="py-20 relative bg-cover bg-center"
        style={{ backgroundImage: `url(${teamImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-overlay"></div>
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h2 className="text-4xl font-bold mb-4">Ready to Make an Impact?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Whether you want to invest, partner, or join us as a member—we'd love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <Link to="/invest">
              <Button variant="secondary" size="lg">Invest</Button>
            </Link>
            <Link to="/join-us">
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-foreground">
                Become a Member
              </Button>
            </Link>
            <Link to="/work-with-us">
              <Button variant="accent" size="lg">Partner With Us</Button>
            </Link>
          </div>
          <p className="text-lg mb-4">Or explore our story:</p>
          <Button variant="hero" size="lg">
            Watch Our Video (3 min)
          </Button>
        </div>
      </section>
=======
     <section
  className="relative bg-cover bg-center bg-fixed h-screen flex items-center justify-center"
  style={{
    backgroundImage: `url('/img_4.png')`,
  }}
>
  {/* Gradient overlay */}
  <div className="absolute inset-0 bg-black/50"></div>

  {/* Content */}
  <div className="relative z-10 text-center text-white px-4 max-w-3xl mx-auto">
    <FadeUpElement>
      <h2 className="text-5xl sm:text-6xl font-bold mb-6">
        Ready to Make an Impact?
      </h2>
    </FadeUpElement>

    <FadeUpElement delay={100}>
      <p className="text-lg sm:text-2xl mb-10">
        Whether you want to invest, partner, or join us as a member—we'd love to hear from you.
      </p>
    </FadeUpElement>

    <FadeUpElement delay={200}>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link to="/invest">
          <Button variant="secondary" size="lg">
            Invest
          </Button>
        </Link>
        <Link to="/join">
          <Button
            variant="outline"
            size="lg"
            className="border-white text-white hover:bg-white hover:text-foreground"
          >
            Become a Member
          </Button>
        </Link>
        <Link to="/contact">
          <Button variant="accent" size="lg" className="bg-primary text-white">
            Partner With Us
          </Button>
        </Link>
      </div>
    </FadeUpElement>
  </div>
</section>

>>>>>>> 3a9c11e (Updated dashboard UI and fixed bugs)

      <Footer />
    </div>
  );
};

export default Index;