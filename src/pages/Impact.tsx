import { Card } from "@/components/ui/card";
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
      <section className="py-20 bg-gradient-innovation text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Our Impact</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Measuring change across environmental, social, and economic dimensions
          </p>
        </div>
      </section>

      {/* Key Metrics Dashboard */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Impact by the Numbers</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {impactMetrics.map((metric, index) => (
              <Card key={index} className="p-6 hover:shadow-elegant transition-all">
                <metric.icon className={`h-10 w-10 ${metric.color} mb-4`} />
                <div className={`text-3xl font-bold mb-2 ${metric.color}`}>
                  {metric.number}
                </div>
                <h3 className="font-bold mb-2">{metric.label}</h3>
                <p className="text-sm text-muted-foreground">{metric.description}</p>
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

          <Card className="mt-12 p-8 bg-gradient-to-r from-primary/10 to-accent/10 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-center">Climate Impact</h3>
            <p className="text-center text-muted-foreground max-w-2xl mx-auto">
              By replacing firewood with biogas, BUAK members have prevented approximately 400 tonnes of CO2 
              emissions annually—equivalent to taking 87 cars off the road for a year or planting 6,600 trees.
            </p>
          </Card>
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
            <h3 className="text-2xl font-bold mb-4 text-center">Financial Sustainability</h3>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-4xl font-bold mb-2">95%</div>
                <p>Repayment Rate</p>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">26%</div>
                <p>Profit Margins</p>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">0</div>
                <p>Members Left</p>
              </div>
            </div>
            <p className="text-center mt-6">
              BUAK's revolving fund model ensures financial sustainability without donor dependency
            </p>
          </Card>
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
