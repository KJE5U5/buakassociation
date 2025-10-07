import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import teamImage from "@/assets/team-community.jpg";
import { Link } from "react-router-dom";
import { Award, Users, TrendingUp, Target, Heart, Lightbulb } from "lucide-react";

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

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section 
        className="relative h-[60vh] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${teamImage})` }}
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
          
          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-lg leading-relaxed mb-4">
              In 2021, Kyangwali Refugee Settlement faced a triple crisis: 99% of 149,647 refugees relied on firewood, 
              spending 3-4 hours daily collecting it. Bugoma Forest was disappearing—67,900 hectares lost since 2002. 
              And with biodigesters costing 473 days of earnings, clean energy remained a dream for families earning $2 a day.
            </p>
            
            <p className="text-lg leading-relaxed mb-4">
              But two households dared to try something different.
            </p>

            <p className="text-lg leading-relaxed mb-4">
              With support from local partners, Sarah Ninsiima and James Okello became BUAK's first members. 
              They contributed local materials—sand, gravel, stones—while a small revolving fund covered skilled labor 
              and equipment. In 15 days, they had biodigesters. No cash upfront. Just belief in a better way.
            </p>

            <p className="text-lg leading-relaxed mb-4">
              The transformation was immediate. Clean cooking gas. No more smoke. Time freed. And something unexpected: 
              the bio-slurry by-product was valuable. Farmers wanted it. Sarah and James started selling it.
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4">The Breakthrough: Offtake-Based Financing</h3>
            
            <p className="text-lg leading-relaxed mb-4">
              Traditional biogas programs required 100% cash upfront—impossible for refugees. BUAK flipped the model: 
              members contribute 30% in-kind, BUAK finances 70%, and repayment happens automatically through bio-slurry sales. 
              No cash burden. Aligned incentives.
            </p>

            <p className="text-lg leading-relaxed mb-4">
              The model worked. Repayment rates jumped from 54% (cash model) to 95% (offtake model). Word spread. 
              By 2022, 25 households had joined. BUAK formalized as a cooperative—refugee-led, democratically governed, 
              community-owned.
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4">Scaling with Purpose</h3>
            
            <p className="text-lg leading-relaxed mb-4">
              By 2023, BUAK reached 50 digesters. By 2024, 73. Growth was intentional—quality over speed. 
              Every digester installed correctly. Every member trained thoroughly. Every system maintained monthly. 
              The result: 87.7% uptime, 94% satisfaction, zero members leaving.
            </p>

            <p className="text-lg leading-relaxed mb-4">
              In 2024, international recognition arrived: <strong>Ashden Climate Innovation Award</strong>—the first 
              refugee-led biogas cooperative in East Africa to win. Validation that BUAK wasn't charity. It was entrepreneurship.
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4">Today: 69 Members, One Mission</h3>
            
            <p className="text-lg leading-relaxed mb-4">
              BUAK is now 69 members strong—35 refugees, 34 host community, 35% women. We've proven the model works:
            </p>
            
            <ul className="list-disc pl-6 mb-4">
              <li>73 biodigesters operational</li>
              <li>UGX 87.6M community revenue generated</li>
              <li>500,975 kg firewood saved annually</li>
              <li>26% profit margins maintained</li>
              <li>95% repayment rate achieved</li>
            </ul>

            <p className="text-lg leading-relaxed mb-4">
              But we're just beginning. With $25,000, we'll scale to 300 digesters, transforming 227 more families 
              while proving that refugee-led innovation can drive climate action, economic empowerment, and community 
              transformation—all at once.
            </p>

            <p className="text-xl font-bold text-primary mt-8">
              This isn't aid. This is entrepreneurship. This is BUAK.
            </p>
          </div>

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
              <div className="text-3xl font-bold text-primary mb-2">69</div>
              <div className="text-sm text-muted-foreground">Members</div>
              <div className="text-xs mt-1">(35 refugees, 34 host)</div>
            </Card>
            <Card className="p-6 text-center">
              <div className="text-3xl font-bold text-primary mb-2">35%</div>
              <div className="text-sm text-muted-foreground">Women</div>
              <div className="text-xs mt-1">Gender inclusion</div>
            </Card>
            <Card className="p-6 text-center">
              <div className="text-3xl font-bold text-primary mb-2">73</div>
              <div className="text-sm text-muted-foreground">Biodigesters</div>
              <div className="text-xs mt-1">Operational</div>
            </Card>
            <Card className="p-6 text-center">
              <div className="text-3xl font-bold text-primary mb-2">3</div>
              <div className="text-sm text-muted-foreground">Years</div>
              <div className="text-xs mt-1">Track record</div>
            </Card>
            <Card className="p-6 text-center">
              <div className="text-3xl font-bold text-secondary mb-2">87.6M</div>
              <div className="text-sm text-muted-foreground">UGX Revenue</div>
              <div className="text-xs mt-1">Community income</div>
            </Card>
            <Card className="p-6 text-center">
              <div className="text-3xl font-bold text-secondary mb-2">26%</div>
              <div className="text-sm text-muted-foreground">Profit Margins</div>
              <div className="text-xs mt-1">Financially sustainable</div>
            </Card>
            <Card className="p-6 text-center">
              <div className="text-3xl font-bold text-accent mb-2">95%</div>
              <div className="text-sm text-muted-foreground">Repayment</div>
              <div className="text-xs mt-1">Model validation</div>
            </Card>
            <Card className="p-6 text-center">
              <div className="text-3xl font-bold text-accent mb-2">94%</div>
              <div className="text-sm text-muted-foreground">Satisfaction</div>
              <div className="text-xs mt-1">Member happiness</div>
            </Card>
          </div>
        </div>
      </section>

      {/* Recognition */}
      <section className="py-20 bg-gradient-innovation text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <Award className="h-16 w-16 mx-auto mb-6" />
          <h2 className="text-4xl font-bold mb-4">Recognition & Awards</h2>
          <div className="max-w-2xl mx-auto">
            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-2">🏆 Ashden Climate Innovation Award 2024</h3>
              <p className="text-lg">"First refugee-led biogas cooperative in East Africa"</p>
            </div>
            <div className="mb-6">
              <h3 className="text-xl font-bold mb-2">📰 Media Features</h3>
              <p>Daily Monitor, New Vision, UNHCR Innovation</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">🎤 Speaking Engagements</h3>
              <p>Africa Climate Week, Impact Investing Forum</p>
            </div>
          </div>
        </div>
      </section>

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
