import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  CheckCircle2, 
  TrendingUp, 
  Repeat,
  DollarSign,
  Users,
  Leaf
} from "lucide-react";

const Model = () => {
  const steps = [
    {
      number: 1,
      title: "Household Applies",
      description: "Requirements: 2+ cattle, water access, 5m x 5m space",
      icon: Users
    },
    {
      number: 2,
      title: "Member Contributes 30%",
      description: "In-kind: Local materials (sand, gravel, stones) + labor",
      icon: CheckCircle2
    },
    {
      number: 3,
      title: "BUAK Invests 70%",
      description: "From revolving fund: Skilled labor, equipment, training",
      icon: DollarSign
    },
    {
      number: 4,
      title: "Digester Built",
      description: "Certified technicians construct fixed-dome biodigester (15 days)",
      icon: Leaf
    },
    {
      number: 5,
      title: "Production Begins",
      description: "Household uses biogas daily, produces bio-slurry",
      icon: TrendingUp
    },
    {
      number: 6,
      title: "Weekly Collection & Repayment",
      description: "BUAK collects bio-slurry, pays member, applies to loan",
      icon: Repeat
    }
  ];

  const advantages = [
    {
      title: "Self-Sustaining Revolving Fund",
      description: "Repayments enable new installations with no donor dependency"
    },
    {
      title: "Standardized Process",
      description: "15-day installation, 14-point quality checklist"
    },
    {
      title: "Proven Track Record",
      description: "73 digesters, 3 years, 87.7% uptime, 95% repayment"
    },
    {
      title: "Cooperative Model",
      description: "Community ownership ensures sustainability"
    },
    {
      title: "Replicable Across Contexts",
      description: "13 refugee-hosting districts mapped for expansion"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-innovation text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Our Model: How It Works</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Offtake-Based Financing Makes Biogas Affordable
          </p>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">Why Traditional Biogas Fails in Refugee Contexts</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Traditional models require 100% cash upfront—impossible for families earning $2/day
          </p>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card className="p-6 bg-destructive/10">
              <h3 className="font-bold text-lg mb-2">❌ 100% Cash Upfront Required</h3>
              <p className="text-muted-foreground">
                UGX 3.5M = 473 days of total earnings at $2/day
              </p>
            </Card>

            <Card className="p-6 bg-destructive/10">
              <h3 className="font-bold text-lg mb-2">❌ No Collateral = No Loans</h3>
              <p className="text-muted-foreground">
                Refugees excluded from formal financing
              </p>
            </Card>

            <Card className="p-6 bg-destructive/10">
              <h3 className="font-bold text-lg mb-2">❌ Result: &lt;1% Adoption</h3>
              <p className="text-muted-foreground">
                Despite proven benefits, unaffordable
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Innovation Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">The BUAK Innovation</h2>
          
          <Card className="p-8 max-w-4xl mx-auto bg-gradient-hero text-primary-foreground mb-12">
            <h3 className="text-3xl font-bold text-center mb-6">💡 The Breakthrough</h3>
            <p className="text-xl text-center mb-6">
              Repayment happens through PRODUCTION (bio-slurry sales), not cash out of pocket. 
              This aligns incentives and removes the #1 barrier.
            </p>
            <div className="text-center">
              <p className="text-2xl font-bold">Result: 95% repayment (vs 54% cash model)</p>
            </div>
          </Card>

          {/* Flow Diagram */}
          <div className="grid md:grid-cols-4 gap-4 mb-8 max-w-5xl mx-auto">
            <Card className="p-6 text-center hover:shadow-glow transition-all">
              <div className="text-4xl font-bold text-primary mb-2">30%</div>
              <h3 className="font-bold mb-2">Member</h3>
              <p className="text-sm text-muted-foreground">Contribution (in-kind)</p>
            </Card>
            
            <Card className="p-6 text-center hover:shadow-glow transition-all">
              <div className="text-4xl font-bold text-primary mb-2">70%</div>
              <h3 className="font-bold mb-2">BUAK Fund</h3>
              <p className="text-sm text-muted-foreground">Financing (loan)</p>
            </Card>

            <Card className="p-6 text-center hover:shadow-glow transition-all">
              <Leaf className="h-12 w-12 text-primary mx-auto mb-2" />
              <h3 className="font-bold mb-2">Installed</h3>
              <p className="text-sm text-muted-foreground">15 days</p>
            </Card>

            <Card className="p-6 text-center hover:shadow-glow transition-all">
              <Repeat className="h-12 w-12 text-primary mx-auto mb-2" />
              <h3 className="font-bold mb-2">Repay</h3>
              <p className="text-sm text-muted-foreground">Via bio-slurry</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Step-by-Step Process */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">From Application to Income in 6 Steps</h2>
          
          <div className="max-w-4xl mx-auto space-y-6">
            {steps.map((step, index) => (
              <Card key={index} className="p-6 hover:shadow-elegant transition-all">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-gradient-hero flex items-center justify-center">
                      <span className="text-2xl font-bold text-primary-foreground">{step.number}</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <step.icon className="h-6 w-6 text-primary" />
                      <h3 className="text-xl font-bold">{step.title}</h3>
                    </div>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                  {index < steps.length - 1 && (
                    <ArrowRight className="h-6 w-6 text-muted-foreground flex-shrink-0 hidden md:block" />
                  )}
                </div>
              </Card>
            ))}
          </div>

          <Card className="p-8 bg-accent/20 max-w-4xl mx-auto mt-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4">⏱ Loan Repaid in 18-24 Months</h3>
              <p className="text-lg text-muted-foreground">
                After that, member continues earning income forever
              </p>
            </div>
          </Card>
        </div>
      </section>

      {/* Unit Economics */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">The Numbers That Make It Work</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Proven unit economics per biodigester
          </p>

          <Card className="p-8 max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-6">Investment</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center pb-3 border-b">
                    <span className="font-medium">Total Cost:</span>
                    <span className="text-xl font-bold">UGX 3.5M ($950)</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Member (30%):</span>
                    <span className="font-medium">UGX 1.05M (in-kind)</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">BUAK (70%):</span>
                    <span className="font-medium">UGX 2.45M (cash)</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-6">Returns</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center pb-3 border-b">
                    <span className="font-medium">Annual Revenue:</span>
                    <span className="text-xl font-bold">UGX 1.2-1.8M</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Gross Margin:</span>
                    <span className="font-medium text-primary">26%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Payback Period:</span>
                    <span className="font-medium">18-24 months</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Annual ROI:</span>
                    <span className="font-medium text-secondary">15-20%</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t">
              <h3 className="text-xl font-bold mb-4">Member Benefits</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center p-4 bg-muted rounded-lg">
                  <p className="text-2xl font-bold text-primary mb-1">UGX 900K-1.2M</p>
                  <p className="text-sm text-muted-foreground">Bio-slurry income/year</p>
                </div>
                <div className="text-center p-4 bg-muted rounded-lg">
                  <p className="text-2xl font-bold text-secondary mb-1">UGX 300K</p>
                  <p className="text-sm text-muted-foreground">Firewood savings/year</p>
                </div>
                <div className="text-center p-4 bg-muted rounded-lg">
                  <p className="text-2xl font-bold text-accent mb-1">UGX 1.2-1.5M</p>
                  <p className="text-sm text-muted-foreground">Total benefit/year</p>
                </div>
              </div>
            </div>

            <div className="mt-6 text-center">
              <Link to="/invest">
                <Button variant="hero" size="lg">
                  View Full Financials
                  <ArrowRight className="ml-2" />
                </Button>
              </Link>
            </div>
          </Card>
        </div>
      </section>

      {/* Scalability */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Built to Scale</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {advantages.map((advantage, index) => (
              <Card key={index} className="p-6 hover:shadow-elegant transition-all">
                <CheckCircle2 className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">{advantage.title}</h3>
                <p className="text-muted-foreground">{advantage.description}</p>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link to="/contact">
              <Button variant="secondary" size="lg">
                Partner With Us to Replicate
                <ArrowRight className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-warm text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Invest in This Model?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join us in scaling proven impact across East Africa
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/invest">
              <Button variant="secondary" size="lg">Invest Now</Button>
            </Link>
            <Link to="/impact">
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-foreground">
                See Impact Data
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Model;
