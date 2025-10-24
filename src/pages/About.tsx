import React, { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import teamImage from "@/assets/team-community.jpg";
import { Link } from "react-router-dom";
import { Award, Users, TrendingUp, Target, Heart, Lightbulb, Mic, Newspaper } from "lucide-react";
import { motion } from "framer-motion";
import RecognitionSection from "@/components/RecognitionSection";
const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Dignity",
      description: "Refugees as leaders, not charity recipients"
    },
    {
      icon: Users,
      title: "Inclusion",
      description: "Refugees + host community, men + women, working together"
    },
    {
      icon: Target,
      title: "Sustainability",
      description: "Environmental, economic, and social impact"
    },
    {
      icon: TrendingUp,
      title: "Transparency",
      description: "Open books, honest challenges, accountable governance"
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Creative solutions to systemic barriers"
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Partnerships amplify impact"
    }
  ];

  const milestones = [
    { year: "2021", event: "Pilot - 2 households dare to dream" },
    { year: "2022", event: "Formalization as cooperative - 25 members" },
    { year: "2023", event: "Scaling phase - 50 biodigesters installed" },
    { year: "2024", event: "Ashden Award Winner - International recognition" },
    { year: "2025", event: "Investment-ready - Scaling to 300 digesters" }
  ];
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
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section 
        className="relative h-[60vh] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(img_11.png)` }}
      >
        <div className="absolute inset-0 bg-gradient-overlay"></div>
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">About BUAK</h1>
          <p className="text-2xl">Refugees Leading the Clean Energy Revolution</p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-4xl font-bold mb-8 text-center">From 2 to 73: The BUAK Story</h2>
          
          <section className="py-24 bg-background">
            <div className="container mx-auto px-6 max-w-5xl">
              <FadeUpElement>
                <div className="relative mb-16 overflow-hidden rounded-2xl shadow-xl">
                  <img
                    src="/img_3.png"  // Replace with actual image URL depicting the crisis (e.g., deforestation or firewood collection)
                    alt="The triple crisis in Kyangwali: reliance on firewood and forest loss"
                    className="w-full h-96 object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center p-8">
                    <p className="text-white text-3xl font-bold text-center max-w-3xl transform -rotate-3 bg-primary/80 px-6 py-3 rounded-lg shadow-lg">
                      In 2021, a triple crisis: 99% on firewood, forests vanishing, clean energy unaffordable.
                    </p>
                  </div>
                </div>
              </FadeUpElement>

              <FadeUpElement delay={100}>
                <p className="text-lg leading-relaxed mb-6 text-center italic border-b-2 border-primary pb-6 max-w-3xl mx-auto">
                  But two households dared to try something different.
                </p>
              </FadeUpElement>

              <div className="grid md:grid-cols-2 gap-12 mb-12 items-center">
                <FadeUpElement delay={200}>
                  <p className="text-lg leading-relaxed transform translate-x-4 bg-muted/50 p-6 rounded-r-xl shadow-md">
                    With support from local partners, Sarah Ninsiima and James Okello became BUAK's first members.
                    They contributed local materials—sand, gravel, stones—while a small revolving fund covered skilled labor
                    and equipment. In 15 days, they had biodigesters. No cash upfront. Just belief in a better way.
                  </p>
                </FadeUpElement>

                <FadeUpElement delay={300}>
                  <div className="order-first md:order-last">
                    <img
                      src="/img_4.png"  // Replace with image of early members or biodigester installation
                      alt="BUAK's first members installing biodigesters"
                      className="w-full h-80 object-cover rounded-l-xl shadow-xl"
                    />
                  </div>
                </FadeUpElement>
              </div>

              <FadeUpElement delay={400}>
                <p className="text-lg leading-relaxed mb-8 text-right pr-12 relative">
                  The transformation was immediate. Clean cooking gas. No more smoke. Time freed. And something unexpected:
                  the bio-slurry by-product was valuable. Farmers wanted it. Sarah and James started selling it.
                  <span className="absolute top-0 right-0 text-6xl text-primary/20 transform rotate-12">✨</span>
                </p>
              </FadeUpElement>

              <FadeUpElement delay={500}>
                <h3 className="text-3xl font-bold mt-12 mb-6 text-center uppercase tracking-widest text-primary border-t-4 border-dashed border-muted pt-6">
                  The Breakthrough: Offtake-Based Financing
                </h3>
              </FadeUpElement>

              <div className="grid md:grid-cols-2 gap-12 mb-12 items-center">
                <FadeUpElement delay={600}>
                  <div>
                    <img
                      src="/img_2.png"  // Replace with diagram or image illustrating the financing model
                      alt="Offtake-based financing model in action"
                      className="w-full h-72 object-cover rounded-r-xl shadow-xl"
                    />
                  </div>
                </FadeUpElement>

                <FadeUpElement delay={700}>
                  <p className="text-lg leading-relaxed transform -translate-x-4 bg-accent/10 p-6 rounded-l-xl shadow-md">
                    Traditional biogas programs required 100% cash upfront—impossible for refugees. BUAK flipped the model:
                    members contribute 30% in-kind, BUAK finances 70%, and repayment happens automatically through bio-slurry sales.
                    No cash burden. Aligned incentives. The model worked. Repayment rates jumped from 54% (cash model) to 95% (offtake model).
                    Word spread. By 2022, 25 households had joined. BUAK formalized as a cooperative—refugee-led, democratically governed,
                    community-owned.
                  </p>
                </FadeUpElement>
              </div>

              <FadeUpElement delay={800}>
                <h3 className="text-3xl font-bold mt-12 mb-6 text-center underline decoration-wavy decoration-secondary">
                  Scaling with Purpose
                </h3>
              </FadeUpElement>

              <FadeUpElement delay={900}>
                <p className="text-lg leading-relaxed mb-8 text-center max-w-4xl mx-auto relative">
                  By 2023, BUAK reached 50 digesters. By 2024, 73. Growth was intentional—quality over speed.
                  Every digester installed correctly. Every member trained thoroughly. Every system maintained monthly.
                  The result: 87.7% uptime, 94% satisfaction, zero members leaving.
                  <span className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 text-5xl text-secondary/30">📈</span>
                </p>
              </FadeUpElement>

              <FadeUpElement delay={1000}>
                <div className="relative mb-16 overflow-hidden rounded-2xl shadow-xl">
                  <img
                    src="/Picture10.png"  // Replace with image of award or scaling impact
                    alt="BUAK winning the Ashden Award"
                    className="w-full h-96 object-cover"
                  />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center p-8">
                    <p className="text-white text-2xl italic font-semibold text-center max-w-2xl transform rotate-2 bg-secondary/80 px-6 py-3 rounded-lg">
                      In 2024, international recognition: <strong>Ashden Climate Innovation Award</strong>—the first refugee-led biogas cooperative in East Africa to win.
                    </p>
                  </div>
                </div>
              </FadeUpElement>

              <FadeUpElement delay={1100}>
                <h3 className="text-3xl font-bold mt-12 mb-6 text-center tracking-tight text-foreground">
                  Today: 73 Member Households, One Mission
                </h3>
              </FadeUpElement>

              <FadeUpElement delay={1200}>
                <p className="text-lg leading-relaxed mb-6">
                  BUAK serves 73 member households (503 individuals total)—36 refugee households (49%), 37 host community households (51%), with 35% women in leadership. Each member household averages 6.9 family members, meaning our impact extends far beyond the 73 immediate members to over 500 people breathing cleaner air, cooking with clean gas, and building economic resilience.
                </p>
                <ul className="grid md:grid-cols-2 gap-4 mb-8 pl-6 list-none">
                  {['73 biodigesters operational', 'UGX 55.5M total revenue (2024)', '158,775 kg firewood saved annually', '87.7% system uptime', '58% collection efficiency (targeting 70%)', '94% member satisfaction'].map((item, idx) => (
                    <li key={idx} className="flex items-start text-lg">
                      <span className="text-primary mr-2 text-xl">✓</span> {item}
                    </li>
                  ))}
                </ul>
              </FadeUpElement>

              <div className="grid md:grid-cols-2 gap-12 mb-12 items-center">
                <FadeUpElement delay={1300}>
                  <p className="text-lg leading-relaxed transform translate-y-4 bg-muted/50 p-6 rounded-xl shadow-md">
                    But we're just beginning. With $25,000, we'll scale to 300 digesters, transforming 227 more families
                    while proving that refugee-led innovation can drive climate action, economic empowerment, and community
                    transformation—all at once.
                  </p>
                </FadeUpElement>

                <FadeUpElement delay={1400}>
                  <img
                    src="/Picture12.png"  // Replace with visionary image of scaling/community impact
                    alt="Future vision: Scaling to 300 digesters"
                    className="w-full h-80 object-cover rounded-xl shadow-xl"
                  />
                </FadeUpElement>
              </div>

              <FadeUpElement delay={1500}>
                <p className="text-2xl font-extrabold text-primary text-center mt-12 uppercase tracking-wider border-t-2 border-primary pt-6">
                  This isn't aid. This is entrepreneurship. This is BUAK.
                </p>
              </FadeUpElement>
            </div>
          </section>
          {/* Timeline */}
          <Card className="p-8 bg-gradient-to-r from-primary/10 to-accent/10">
            <h3 className="text-2xl font-bold mb-6 text-center">Our Journey</h3>
            <div className="space-y-4">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-20 font-bold text-primary text-lg">{milestone.year}</div>
                  <div className="flex-1 border-l-2 border-primary pl-4 pb-2">
                    <p className="text-lg">{milestone.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="p-8 text-center">
              <Target className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">Mission</h3>
              <p className="text-muted-foreground">
                Empower refugee and host communities to achieve energy independence, environmental sustainability, 
                and economic self-reliance through community-owned circular economy solutions.
              </p>
            </Card>
            
            <Card className="p-8 text-center">
              <Lightbulb className="h-12 w-12 text-secondary mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">Vision</h3>
              <p className="text-muted-foreground">
                A future where refugees are recognized as entrepreneurs, not beneficiaries, leading climate action 
                and building wealth from waste across East Africa.
              </p>
            </Card>
            
            <Card className="p-8 text-center">
              <Heart className="h-12 w-12 text-accent mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">Values</h3>
              <p className="text-muted-foreground">
                Dignity, Inclusion, Sustainability, Transparency, Innovation, and Collaboration guide everything we do.
              </p>
            </Card>
          </div>

          <h3 className="text-3xl font-bold text-center mb-8">Our Core Values</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="p-6 hover:shadow-elegant transition-all">
                <value.icon className="h-10 w-10 text-primary mb-4" />
                <h4 className="text-xl font-bold mb-2">{value.title}</h4>
                <p className="text-muted-foreground">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* By the Numbers */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">BUAK at a Glance</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <Card className="p-6 text-center">
              <div className="text-3xl font-bold text-primary mb-2">73</div>
              <div className="text-sm text-muted-foreground">Households</div>
              <div className="text-xs mt-1">503 individuals served</div>
            </Card>
            <Card className="p-6 text-center">
              <div className="text-3xl font-bold text-primary mb-2">49%</div>
              <div className="text-sm text-muted-foreground">Refugee</div>
              <div className="text-xs mt-1">36 refugee households</div>
            </Card>
            <Card className="p-6 text-center">
              <div className="text-3xl font-bold text-primary mb-2">51%</div>
              <div className="text-sm text-muted-foreground">Host Community</div>
              <div className="text-xs mt-1">37 host households</div>
            </Card>
            <Card className="p-6 text-center">
              <div className="text-3xl font-bold text-primary mb-2">3</div>
              <div className="text-sm text-muted-foreground">Years</div>
              <div className="text-xs mt-1">Track record</div>
            </Card>
            <Card className="p-6 text-center">
              <div className="text-3xl font-bold text-secondary mb-2">55.5M</div>
              <div className="text-sm text-muted-foreground">UGX Revenue</div>
              <div className="text-xs mt-1">2024 total revenue</div>
            </Card>
            <Card className="p-6 text-center">
              <div className="text-3xl font-bold text-secondary mb-2">87.7%</div>
              <div className="text-sm text-muted-foreground">System Uptime</div>
              <div className="text-xs mt-1">64 of 73 operational</div>
            </Card>
            <Card className="p-6 text-center">
              <div className="text-3xl font-bold text-accent mb-2">58%</div>
              <div className="text-sm text-muted-foreground">Collection Efficiency</div>
              <div className="text-xs mt-1">Target: 70% by Year 2</div>
            </Card>
            <Card className="p-6 text-center">
              <div className="text-3xl font-bold text-accent mb-2">94%</div>
              <div className="text-sm text-muted-foreground">Satisfaction</div>
              <div className="text-xs mt-1">Member retention</div>
            </Card>
          </div>
        </div>
      </section>

      {/* Recognition */}
      <RecognitionSection />

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Join Our Mission</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Be part of proving that refugee-led innovation can transform communities
          </p>
          <Link to="/invest">
            <Button variant="hero" size="lg">
              Invest in Our Mission
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
