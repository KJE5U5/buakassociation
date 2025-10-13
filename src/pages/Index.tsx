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
  ChevronRight
} from "lucide-react";

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

  const partners = [
    "Ashden Awards",
    "CARE International",
    "UNHCR",
    "JICA",
    "Biogas Solutions Uganda"
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-overlay"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Turning Waste Into Wealth
            <br />
            <span className="text-accent-light">In Refugee Communities</span>
          </h1>
          <p className="text-xl md:text-2xl mb-4 max-w-3xl mx-auto">
            East Africa's First Refugee-Led Biogas Cooperative
          </p>
          <p className="text-lg mb-8 opacity-90">
            73 households | 3 years proven | 94% satisfaction | Ashden Award Winner 2024
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/invest">
              <Button variant="hero" size="lg" className="text-lg">
                Invest in Impact
                <ChevronRight className="ml-2" />
              </Button>
            </Link>
            <Link to="/about">
              <Button variant="outline" size="lg" className="text-lg border-white text-white hover:bg-white hover:text-foreground">
                Learn Our Story
              </Button>
            </Link>
          </div>
          <div className="mt-8 inline-flex items-center gap-2 bg-accent/20 backdrop-blur-sm px-4 py-2 rounded-full">
            <Award className="h-5 w-5 text-accent-light" />
            <span className="text-sm font-medium">Ashden Award Winner 2024</span>
          </div>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">The Challenge We're Solving</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Kyangwali Refugee Settlement faces energy poverty, deforestation, and economic barriers
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {challenges.map((challenge, index) => (
              <Card key={index} className="p-6 hover:shadow-elegant transition-all duration-300">
                <challenge.icon className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">{challenge.title}</h3>
                <p className="text-2xl font-bold text-secondary mb-2">{challenge.stat}</p>
                <p className="text-muted-foreground">{challenge.description}</p>
              </Card>
            ))}
          </div>

          <Card className="p-8 bg-gradient-to-r from-muted to-accent/10">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <img 
                src={cookingImage} 
                alt="Clean cooking with biogas"
                className="w-full md:w-1/3 rounded-lg shadow-card"
              />
              <div className="flex-1">
                <p className="text-lg italic mb-4 text-foreground">
                  "Before BUAK, I spent 4 hours daily collecting firewood. My children missed school. 
                  Now we have clean gas, they're in school full-time, and I earn income from waste."
                </p>
                <p className="font-semibold">— Sarah M., BUAK Member</p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">Our Innovation: Offtake-Based Financing</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Making biogas affordable through production-based repayment
          </p>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-4 gap-4 mb-8">
              <Card className="p-6 text-center hover:shadow-glow transition-all">
                <div className="text-3xl font-bold text-primary mb-2">1</div>
                <h3 className="font-bold mb-2">30% Member</h3>
                <p className="text-sm text-muted-foreground">Contribution (in-kind materials)</p>
              </Card>
              <Card className="p-6 text-center hover:shadow-glow transition-all">
                <div className="text-3xl font-bold text-primary mb-2">2</div>
                <h3 className="font-bold mb-2">70% BUAK</h3>
                <p className="text-sm text-muted-foreground">Financing (loan from fund)</p>
              </Card>
              <Card className="p-6 text-center hover:shadow-glow transition-all">
                <div className="text-3xl font-bold text-primary mb-2">3</div>
                <h3 className="font-bold mb-2">Installed</h3>
                <p className="text-sm text-muted-foreground">Biodigester ready (15 days)</p>
              </Card>
              <Card className="p-6 text-center hover:shadow-glow transition-all">
                <div className="text-3xl font-bold text-primary mb-2">4</div>
                <h3 className="font-bold mb-2">Repay</h3>
                <p className="text-sm text-muted-foreground">Via bio-slurry sales</p>
              </Card>
            </div>

            <Card className="p-6 bg-gradient-innovation text-primary-foreground">
              <h3 className="text-2xl font-bold mb-4 text-center">No Cash Upfront Required | 95% Repayment Rate</h3>
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
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Impact by the Numbers</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-12">
            {stats.map((stat, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-elegant transition-all">
                <stat.icon className="h-8 w-8 text-primary mx-auto mb-3" />
                <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Link to="/impact">
              <Button variant="default" size="lg">
                Explore Full Impact Data
                <ChevronRight className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Investment Section */}
      <section className="py-20 bg-gradient-warm">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4 text-white">Invest in Proven Impact</h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            We're seeking $25,000 to scale from 73 to 300 biodigesters in Kyangwali
          </p>
          
          <div className="grid md:grid-cols-4 gap-6 mb-8 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
              <p className="text-2xl font-bold text-white">15-25%</p>
              <p className="text-sm text-white/80">Financial Returns</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
              <p className="text-2xl font-bold text-white">2.47:1</p>
              <p className="text-sm text-white/80">Social ROI</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
              <p className="text-2xl font-bold text-white">3 Years</p>
              <p className="text-sm text-white/80">Proven Track Record</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
              <p className="text-2xl font-bold text-white">🏆 Award</p>
              <p className="text-sm text-white/80">Ashden Winner</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/invest">
              <Button variant="secondary" size="lg">
                View Investment Opportunity
              </Button>
            </Link>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-foreground">
              Download Investment Deck
            </Button>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-bold text-center mb-8">Trusted by Leading Organizations</h3>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {partners.map((partner, index) => (
              <div key={index} className="px-6 py-3 bg-muted rounded-lg text-center font-medium">
                {partner}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
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

      <Footer />
    </div>
  );
};

export default Index;
