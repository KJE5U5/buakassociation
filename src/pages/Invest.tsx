import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { 
  TrendingUp, 
  Target, 
  Award,
  CheckCircle2,
  Download,
  Calendar,
  DollarSign,
  Users,
  Leaf
} from "lucide-react";

const Invest = () => {
  const investmentHighlights = [
    {
      icon: TrendingUp,
      title: "15-25% Financial Returns",
      description: "Proven annual returns with 3-year track record"
    },
    {
      icon: Target,
      title: "2.47:1 Social ROI",
      description: "Verified social value creation for every dollar invested"
    },
    {
      icon: CheckCircle2,
      title: "95% Repayment Rate",
      description: "Offtake-based model ensures reliable loan recovery"
    },
    {
      icon: Award,
      title: "Ashden Award Winner 2024",
      description: "Internationally recognized for innovation and impact"
    }
  ];

  const useOfFunds = [
    { category: "Biodigester Construction", amount: "$18,750", percentage: "75%", description: "Materials, labor, installation for 30 units" },
    { category: "Training & Capacity Building", amount: "$2,500", percentage: "10%", description: "Member onboarding and technical training" },
    { category: "Operations & Maintenance", amount: "$2,000", percentage: "8%", description: "Quality control, monitoring, support" },
    { category: "Working Capital", amount: "$1,750", percentage: "7%", description: "Revolving fund buffer and contingency" },
  ];

  const projectedImpact = [
    { metric: "Households Served", value: "300", description: "From 73 to 300 biodigesters" },
    { metric: "People Impacted", value: "1,500+", description: "Direct beneficiaries in Kyangwali" },
    { metric: "Annual Firewood Saved", value: "2M+ kg", description: "Environmental impact at scale" },
    { metric: "Community Revenue", value: "UGX 360M", description: "Total member income generated" }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-warm text-white">
        <div className="container mx-auto px-4 text-center">
          <Award className="h-16 w-16 mx-auto mb-6" />
          <h1 className="text-5xl font-bold mb-4">Invest in Proven Impact</h1>
          <p className="text-2xl mb-6 max-w-2xl mx-auto">
            We're seeking $25,000 to scale from 73 to 300 biodigesters in Kyangwali
          </p>
          <p className="text-lg mb-8">
            Join us in proving that refugee-led innovation can drive climate action and economic empowerment
          </p>
          <Button variant="secondary" size="lg" className="text-lg">
            <Calendar className="mr-2" />
            Schedule Investment Call
          </Button>
        </div>
      </section>

      {/* Investment Highlights */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Why Invest in BUAK?</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {investmentHighlights.map((highlight, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-elegant transition-all">
                <highlight.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2">{highlight.title}</h3>
                <p className="text-sm text-muted-foreground">{highlight.description}</p>
              </Card>
            ))}
          </div>

          <Card className="p-8 bg-gradient-to-r from-primary/10 to-accent/10">
            <div className="text-center max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">Triple Bottom Line Investment</h3>
              <p className="text-lg text-muted-foreground">
                BUAK offers both financial returns (15-25% annually) and exceptional social/environmental impact 
                (2.47:1 social ROI). Your investment transforms refugee lives, protects forests, and builds 
                a scalable model for clean energy access.
              </p>
            </div>
          </Card>
        </div>
      </section>

      {/* Investment Details */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Investment Details</h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
            <Card className="p-8">
              <DollarSign className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold mb-6">Financial Terms</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-3 border-b">
                  <span className="font-medium">Investment Amount:</span>
                  <span className="text-xl font-bold">$25,000</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b">
                  <span>Expected Returns:</span>
                  <span className="font-bold text-primary">15-25% annually</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b">
                  <span>Investment Period:</span>
                  <span className="font-medium">3-5 years</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b">
                  <span>Exit Strategy:</span>
                  <span className="font-medium">Buyback or refinancing</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Risk Level:</span>
                  <span className="font-medium text-accent">Moderate (proven model)</span>
                </div>
              </div>
            </Card>

            <Card className="p-8">
              <Target className="h-12 w-12 text-secondary mb-4" />
              <h3 className="text-2xl font-bold mb-6">Use of Funds</h3>
              <div className="space-y-4">
                {useOfFunds.map((item, index) => (
                  <div key={index} className="pb-3 border-b last:border-0">
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-medium">{item.category}</span>
                      <span className="text-primary font-bold">{item.percentage}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">{item.description}</span>
                      <span className="font-medium">{item.amount}</span>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Projected Impact */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">Projected Impact at Scale</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            With $25,000, BUAK will scale from 73 to 300 biodigesters
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {projectedImpact.map((impact, index) => (
              <Card key={index} className="p-6 text-center">
                <div className="text-4xl font-bold text-primary mb-2">{impact.value}</div>
                <h3 className="font-bold mb-2">{impact.metric}</h3>
                <p className="text-sm text-muted-foreground">{impact.description}</p>
              </Card>
            ))}
          </div>

          <Card className="p-8 bg-gradient-innovation text-primary-foreground max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-center">Scaling Strategy</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <Users className="h-10 w-10 mx-auto mb-3" />
                <p className="font-bold mb-1">Year 1</p>
                <p className="text-sm">150 biodigesters</p>
              </div>
              <div className="text-center">
                <TrendingUp className="h-10 w-10 mx-auto mb-3" />
                <p className="font-bold mb-1">Year 2</p>
                <p className="text-sm">225 biodigesters</p>
              </div>
              <div className="text-center">
                <Leaf className="h-10 w-10 mx-auto mb-3" />
                <p className="font-bold mb-1">Year 3</p>
                <p className="text-sm">300 biodigesters</p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Risk Mitigation */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Risk Mitigation</h2>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card className="p-6">
              <CheckCircle2 className="h-10 w-10 text-primary mb-4" />
              <h3 className="font-bold text-lg mb-2">Proven Track Record</h3>
              <p className="text-muted-foreground">
                3 years operational, 73 digesters, 95% repayment rate demonstrates model viability
              </p>
            </Card>

            <Card className="p-6">
              <CheckCircle2 className="h-10 w-10 text-primary mb-4" />
              <h3 className="font-bold text-lg mb-2">Diversified Revenue</h3>
              <p className="text-muted-foreground">
                Multiple income streams (bio-slurry, gas, training) reduce dependency risk
              </p>
            </Card>

            <Card className="p-6">
              <CheckCircle2 className="h-10 w-10 text-primary mb-4" />
              <h3 className="font-bold text-lg mb-2">Strong Governance</h3>
              <p className="text-muted-foreground">
                Cooperative structure with transparent financial management and democratic oversight
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Card className="p-12 text-center max-w-4xl mx-auto bg-gradient-hero text-primary-foreground">
            <h2 className="text-4xl font-bold mb-4">Ready to Invest?</h2>
            <p className="text-xl mb-8">
              Schedule a call with our investment team to learn more and discuss terms
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg">
                <Calendar className="mr-2" />
                Schedule Investment Call
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-foreground">
                <Download className="mr-2" />
                Download Investment Deck
              </Button>
            </div>
            <p className="text-sm mt-6 opacity-90">
              For investment inquiries, contact: buakassociation@gmail.com | +256 758998928
            </p>
          </Card>
        </div>
      </section>

      {/* Due Diligence Documents */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">Due Diligence Documents</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Download key documents for your investment review
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card className="p-6 hover:shadow-elegant transition-all cursor-pointer">
              <Download className="h-8 w-8 text-primary mb-3" />
              <h3 className="font-bold mb-2">Investment Deck</h3>
              <p className="text-sm text-muted-foreground mb-3">Complete pitch deck with financials</p>
              <span className="text-primary text-sm font-medium">Download PDF →</span>
            </Card>

            <Card className="p-6 hover:shadow-elegant transition-all cursor-pointer">
              <Download className="h-8 w-8 text-primary mb-3" />
              <h3 className="font-bold mb-2">Financial Statements</h3>
              <p className="text-sm text-muted-foreground mb-3">3-year audited financials</p>
              <span className="text-primary text-sm font-medium">Download PDF →</span>
            </Card>

            <Card className="p-6 hover:shadow-elegant transition-all cursor-pointer">
              <Download className="h-8 w-8 text-primary mb-3" />
              <h3 className="font-bold mb-2">Impact Report</h3>
              <p className="text-sm text-muted-foreground mb-3">Verified impact assessment</p>
              <span className="text-primary text-sm font-medium">Download PDF →</span>
            </Card>

            <Card className="p-6 hover:shadow-elegant transition-all cursor-pointer">
              <Download className="h-8 w-8 text-primary mb-3" />
              <h3 className="font-bold mb-2">Business Model Canvas</h3>
              <p className="text-sm text-muted-foreground mb-3">Visual model overview</p>
              <span className="text-primary text-sm font-medium">Download PDF →</span>
            </Card>

            <Card className="p-6 hover:shadow-elegant transition-all cursor-pointer">
              <Download className="h-8 w-8 text-primary mb-3" />
              <h3 className="font-bold mb-2">Cooperative Constitution</h3>
              <p className="text-sm text-muted-foreground mb-3">Governance documents</p>
              <span className="text-primary text-sm font-medium">Download PDF →</span>
            </Card>

            <Card className="p-6 hover:shadow-elegant transition-all cursor-pointer">
              <Download className="h-8 w-8 text-primary mb-3" />
              <h3 className="font-bold mb-2">Technical Manual</h3>
              <p className="text-sm text-muted-foreground mb-3">Operations & maintenance guide</p>
              <span className="text-primary text-sm font-medium">Download PDF →</span>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Invest;
