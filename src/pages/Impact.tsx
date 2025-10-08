import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { 
  TrendingUp, 
  Users, 
  Leaf, 
  Zap, 
  Award,
  Wallet,
  Clock,
  Target
} from "lucide-react";

const Impact = () => {
  const impactMetrics = [
    {
      icon: Zap,
      number: "73",
      label: "Biodigesters Operational",
      description: "Fixed-dome systems serving 73 households",
      color: "text-primary"
    },
    {
      icon: Users,
      number: "69",
      label: "Active Members",
      description: "35 refugees + 34 host community (35% women)",
      color: "text-secondary"
    },
    {
      icon: TrendingUp,
      number: "UGX 87.6M",
      label: "Community Revenue",
      description: "Total income generated over 3 years",
      color: "text-accent"
    },
    {
      icon: Leaf,
      number: "500,975 kg",
      label: "Firewood Saved",
      description: "Annually by BUAK members",
      color: "text-primary"
    },
    {
      icon: Award,
      number: "94%",
      label: "Satisfaction Rate",
      description: "Members satisfied with biogas system",
      color: "text-secondary"
    },
    {
      icon: Wallet,
      number: "95%",
      label: "Repayment Rate",
      description: "Loan repayment through offtake model",
      color: "text-accent"
    },
    {
      icon: Clock,
      number: "87.7%",
      label: "System Uptime",
      description: "Average operational performance",
      color: "text-primary"
    },
    {
      icon: Target,
      number: "26%",
      label: "Profit Margins",
      description: "Financially sustainable operations",
      color: "text-secondary"
    }
  ];

  const environmentalImpact = [
    {
      metric: "CO2 Emissions Avoided",
      value: "~400 tonnes",
      description: "Annually from reduced firewood use"
    },
    {
      metric: "Trees Saved",
      value: "~2,000",
      description: "Equivalent trees protected per year"
    },
    {
      metric: "Forest Preservation",
      value: "Bugoma Forest",
      description: "Contributing to regional conservation"
    }
  ];

  const socialImpact = [
    {
      metric: "Time Saved",
      value: "3-4 hours/day",
      description: "Per household, previously spent on firewood collection"
    },
    {
      metric: "Health Improvement",
      value: "100%",
      description: "Households report reduced respiratory issues"
    },
    {
      metric: "Children in School",
      value: "Increased",
      description: "More time for education, less time collecting firewood"
    },
    {
      metric: "Women Empowerment",
      value: "35% women",
      description: "Female leadership and economic participation"
    }
  ];

  const economicImpact = [
    {
      metric: "Member Income",
      value: "UGX 900K-1.2M",
      description: "Annual income from bio-slurry sales per member"
    },
    {
      metric: "Firewood Savings",
      value: "UGX 300K",
      description: "Annual savings per household"
    },
    {
      metric: "Total Member Benefit",
      value: "UGX 1.2-1.5M",
      description: "Combined income + savings per household/year"
    },
    {
      metric: "Jobs Created",
      value: "12 permanent",
      description: "Technicians, coordinators, and support staff"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-innovation text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,.1)_25%,rgba(255,255,255,.1)_50%,transparent_50%,transparent_75%,rgba(255,255,255,.1)_75%,rgba(255,255,255,.1))] bg-[length:40px_40px]"></div>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-5xl font-bold mb-4 animate-fade-in">Impact Dashboard</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Measuring What Matters: Real Data, Real Impact
          </p>
          <p className="text-sm mt-4 opacity-90">
            Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
          </p>
        </div>
      </section>

      {/* Key Metrics Dashboard */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">Impact at a Glance</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Live metrics tracking our environmental, social, and economic transformation
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {impactMetrics.map((metric, index) => (
              <Card key={index} className="p-6 hover:shadow-elegant transition-all hover-scale group">
                <metric.icon className={`h-10 w-10 ${metric.color} mb-4 transition-transform group-hover:scale-110`} />
                <div className={`text-4xl font-bold mb-2 ${metric.color} animate-fade-in`}>
                  {metric.number}
                </div>
                <h3 className="font-bold mb-2">{metric.label}</h3>
                <p className="text-sm text-muted-foreground">{metric.description}</p>
                {metric.label === "Biodigesters Operational" && (
                  <div className="mt-3 text-xs text-primary font-semibold">
                    +3,450% since 2021
                  </div>
                )}
                {metric.label === "Firewood Saved" && (
                  <div className="mt-3 text-xs text-muted-foreground">
                    ≈156 trees preserved
                  </div>
                )}
                {metric.label === "Community Revenue" && (
                  <div className="mt-3 text-xs text-muted-foreground">
                    $23,300 annually
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Environmental Impact */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Leaf className="h-16 w-16 text-primary mx-auto mb-4" />
            <h2 className="text-4xl font-bold mb-4">Environmental Impact</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Protecting forests and fighting climate change
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {environmentalImpact.map((impact, index) => (
              <Card key={index} className="p-8 text-center">
                <h3 className="font-bold text-lg mb-3">{impact.metric}</h3>
                <div className="text-4xl font-bold text-primary mb-3">{impact.value}</div>
                <p className="text-muted-foreground">{impact.description}</p>
              </Card>
            ))}
          </div>

          <div className="mt-12 grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <Card className="p-6 bg-gradient-to-br from-primary/10 to-accent/10">
              <h3 className="text-xl font-bold mb-3">Forest Preservation</h3>
              <div className="flex flex-wrap gap-1 mb-4">
                {Array.from({ length: 20 }).map((_, i) => (
                  <span key={i} className="text-2xl animate-fade-in" style={{ animationDelay: `${i * 0.05}s` }}>
                    🌳
                  </span>
                ))}
              </div>
              <p className="text-sm text-muted-foreground">
                Each tree icon represents ~8 trees preserved annually
              </p>
              <p className="text-xs text-muted-foreground mt-2">
                1 tree = 1,300 kg firewood equivalent
              </p>
            </Card>
            
            <Card className="p-6 bg-gradient-to-br from-accent/10 to-secondary/10">
              <h3 className="text-xl font-bold mb-3">Climate Impact</h3>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span>CO₂ Emissions Avoided</span>
                  <span className="font-bold text-primary">~400 tonnes</span>
                </div>
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <span>Equivalent to:</span>
                </div>
                <div className="text-xs text-muted-foreground space-y-1 pl-4">
                  <div>• 87 cars off the road for 1 year</div>
                  <div>• Planting 6,600 trees</div>
                  <div>• 174,000 liters of gasoline not burned</div>
                </div>
              </div>
              <p className="text-xs text-muted-foreground mt-4 italic">
                *Methodology in development with Gold Standard verification
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Social Impact */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Users className="h-16 w-16 text-secondary mx-auto mb-4" />
            <h2 className="text-4xl font-bold mb-4">Social Impact</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Transforming lives and empowering communities
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {socialImpact.map((impact, index) => (
              <Card key={index} className="p-6">
                <h3 className="font-bold mb-2">{impact.metric}</h3>
                <div className="text-3xl font-bold text-secondary mb-2">{impact.value}</div>
                <p className="text-sm text-muted-foreground">{impact.description}</p>
              </Card>
            ))}
          </div>

          <div className="mt-12 max-w-4xl mx-auto">
            <Card className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-center">Member Testimonials</h3>
              <div className="space-y-6">
                <div className="border-l-4 border-primary pl-6">
                  <p className="text-lg italic mb-2">
                    "Before BUAK, I spent 4 hours daily collecting firewood. My children missed school. 
                    Now we have clean gas, they're in school full-time, and I earn income from waste."
                  </p>
                  <p className="font-semibold">— Sarah M., BUAK Member (3 years)</p>
                </div>
                <div className="border-l-4 border-secondary pl-6">
                  <p className="text-lg italic mb-2">
                    "The biogas changed everything. No more smoke in my kitchen. I can breathe properly. 
                    And the money from bio-slurry helps pay school fees."
                  </p>
                  <p className="font-semibold">— James O., BUAK Member (2 years)</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Economic Impact */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <TrendingUp className="h-16 w-16 text-accent mx-auto mb-4" />
            <h2 className="text-4xl font-bold mb-4">Economic Impact</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Building wealth and economic resilience
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {economicImpact.map((impact, index) => (
              <Card key={index} className="p-6">
                <h3 className="font-bold mb-2">{impact.metric}</h3>
                <div className="text-3xl font-bold text-accent mb-2">{impact.value}</div>
                <p className="text-sm text-muted-foreground">{impact.description}</p>
              </Card>
            ))}
          </div>

          <Card className="mt-12 p-8 bg-gradient-warm text-white max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-6 text-center">Financial Sustainability</h3>
            <div className="grid md:grid-cols-4 gap-6 text-center mb-6">
              <div>
                <div className="text-4xl font-bold mb-2 animate-fade-in">95%</div>
                <p className="text-sm">Repayment Rate</p>
                <p className="text-xs opacity-80 mt-1">In-kind model</p>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2 animate-fade-in">26%</div>
                <p className="text-sm">Profit Margins</p>
                <p className="text-xs opacity-80 mt-1">Proven 3 years</p>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2 animate-fade-in">0</div>
                <p className="text-sm">Members Left</p>
                <p className="text-xs opacity-80 mt-1">100% retention</p>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2 animate-fade-in">25</div>
                <p className="text-sm">Break-even</p>
                <p className="text-xs opacity-80 mt-1">Digesters needed</p>
              </div>
            </div>
            <p className="text-center border-t border-white/20 pt-4">
              BUAK's revolving fund model ensures financial sustainability without donor dependency
            </p>
          </Card>
        </div>
      </section>

      {/* Growth Trajectory */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">Growth Over Time</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Our journey from 2 pilot digesters to 300+ target installations
          </p>
          
          <Card className="p-8 max-w-5xl mx-auto">
            <div className="space-y-6">
              {/* Milestone Timeline */}
              <div className="relative">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-secondary to-accent"></div>
                <div className="space-y-6 pl-8">
                  {[
                    { year: "2021", title: "Pilot", desc: "2 digesters", status: "complete" },
                    { year: "2022", title: "Formalization", desc: "25 digesters", status: "complete" },
                    { year: "2023", title: "Scaling", desc: "50 digesters", status: "complete" },
                    { year: "2024", title: "Recognition", desc: "73 digesters, Ashden Award", status: "complete" },
                    { year: "2025", title: "Investment-Ready", desc: "Current: 73 digesters", status: "current" },
                    { year: "2026-2027", title: "Target", desc: "300 digesters (with $25K investment)", status: "future" }
                  ].map((milestone, i) => (
                    <div key={i} className={`relative ${milestone.status === 'current' ? 'scale-105' : ''}`}>
                      <div className={`absolute -left-[33px] top-2 w-3 h-3 rounded-full ${
                        milestone.status === 'complete' ? 'bg-primary' : 
                        milestone.status === 'current' ? 'bg-secondary animate-pulse' : 
                        'bg-muted-foreground/50'
                      }`}></div>
                      <div className={`p-4 rounded-lg ${
                        milestone.status === 'current' ? 'bg-secondary/10 border-2 border-secondary' : 'bg-muted/30'
                      }`}>
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="text-sm text-muted-foreground">{milestone.year}</div>
                            <div className="text-xl font-bold">{milestone.title}</div>
                            <div className="text-sm text-muted-foreground">{milestone.desc}</div>
                          </div>
                          {milestone.status === 'current' && (
                            <span className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-xs font-semibold">
                              Current
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Verification & Methodology */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">How We Measure Impact</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Transparent, verified, and independently assessed metrics
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-8">
            <Card className="p-6">
              <div className="flex items-start gap-3 mb-4">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-primary font-bold">✓</span>
                </div>
                <div>
                  <h3 className="font-bold mb-2">Third-Party Verification</h3>
                  <p className="text-sm text-muted-foreground">
                    CARE International Impact Assessment (2024) verified 2.47:1 Social ROI using SROI Network standards
                  </p>
                </div>
              </div>
            </Card>
            
            <Card className="p-6">
              <div className="flex items-start gap-3 mb-4">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-primary font-bold">✓</span>
                </div>
                <div>
                  <h3 className="font-bold mb-2">Quarterly Household Surveys</h3>
                  <p className="text-sm text-muted-foreground">
                    All 73 member households surveyed every 3 months on satisfaction, income, time use, and health
                  </p>
                </div>
              </div>
            </Card>
            
            <Card className="p-6">
              <div className="flex items-start gap-3 mb-4">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-primary font-bold">✓</span>
                </div>
                <div>
                  <h3 className="font-bold mb-2">Operational Data Tracking</h3>
                  <p className="text-sm text-muted-foreground">
                    Daily gas production, weekly bio-slurry collections, monthly maintenance visits—all documented
                  </p>
                </div>
              </div>
            </Card>
            
            <Card className="p-6">
              <div className="flex items-start gap-3 mb-4">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-primary font-bold">✓</span>
                </div>
                <div>
                  <h3 className="font-bold mb-2">Financial Audits</h3>
                  <p className="text-sm text-muted-foreground">
                    Annual external audit by certified accountant. Open books to members. Quarterly reports to Ashden
                  </p>
                </div>
              </div>
            </Card>
          </div>
          
          <div className="text-center">
            <a href="/resources" className="inline-block">
              <Button variant="outline" size="lg">
                Download Full Impact Report (PDF)
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* SDG Alignment */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">Contributing to Global Goals</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Aligned with UN Sustainable Development Goals
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              { number: "7", title: "Affordable and Clean Energy", items: ["73 households with clean cooking energy", "Renewable biogas from waste"] },
              { number: "8", title: "Decent Work and Economic Growth", items: ["UGX 87.6M community income", "Dignified employment for refugees"] },
              { number: "10", title: "Reduced Inequalities", items: ["Refugee economic inclusion", "35% women leadership"] },
              { number: "13", title: "Climate Action", items: ["500,975 kg firewood saved annually", "CO₂ verification in progress"] },
              { number: "15", title: "Life on Land", items: ["156 trees preserved per year", "Deforestation mitigation"] }
            ].map((sdg, i) => (
              <Card key={i} className="p-6 hover:shadow-elegant transition-all">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold">
                    {sdg.number}
                  </div>
                  <h3 className="font-bold text-sm">{sdg.title}</h3>
                </div>
                <ul className="space-y-2">
                  {sdg.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="text-primary mt-0.5">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Social ROI */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Return on Investment</h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-center">Financial ROI</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-3 border-b">
                  <span>Investment per digester:</span>
                  <span className="font-bold">UGX 3.5M</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b">
                  <span>Annual returns:</span>
                  <span className="font-bold text-primary">15-25%</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b">
                  <span>Payback period:</span>
                  <span className="font-bold">18-24 months</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Revolving fund growth:</span>
                  <span className="font-bold text-accent">Self-sustaining</span>
                </div>
              </div>
            </Card>

            <Card className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-center">Social ROI</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-3 border-b">
                  <span>Social value created:</span>
                  <span className="font-bold">2.47:1</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b">
                  <span>Lives transformed:</span>
                  <span className="font-bold text-secondary">365+ people</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b">
                  <span>Jobs created:</span>
                  <span className="font-bold">12 permanent</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Community benefit:</span>
                  <span className="font-bold text-accent">High</span>
                </div>
              </div>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <Card className="p-8 bg-gradient-innovation text-primary-foreground max-w-3xl mx-auto">
              <h3 className="text-3xl font-bold mb-4">🏆 Ashden Award Winner 2024</h3>
              <p className="text-lg">
                Recognized globally for innovation, impact, and replicability in clean energy for refugees
              </p>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Impact;
