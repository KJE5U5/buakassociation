import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import DownloadInvestmentDeck from "@/components/downloaddeck";
import Footer from "@/components/Footer";
import { 
  TrendingUp, 
  Target, 
  Award,
  CheckCircle2,
  Download,
  Calendar,
  DollarSign,
  Users,
  Leaf,
  Shield,
  BarChart3,
  FileText,
  Phone,
  Mail,
  MessageCircle
} from "lucide-react";

const Invest = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className=" text-white relative h-[60vh] flex items-center justify-center bg-cover bg-center text-white"
        style={{ backgroundImage: `url(img_11.png)` }}>
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Invest in Refugee-Led Innovation</h1>
          <p className="text-2xl mb-6 max-w-2xl mx-auto">
            Proven Model | 3 Years Data | Ashden Award Winner
          </p>
          
          <div className=" text-white grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-8">
            <Card className="bg-white/10 backdrop-blur border-white/20">
              <CardContent className="pt-6 text-center">
                <p className="text-3xl font-bold mb-2">15-25% ROI</p>
                <p className="text-sm">Financial Returns</p>
              </CardContent>
            </Card>
            <Card className="bg-white/10 backdrop-blur border-white/20">
              <CardContent className="pt-6 text-center">
                <p className="text-3xl font-bold mb-2">2.47:1 Social ROI</p>
                <p className="text-sm">Verified Impact</p>
              </CardContent>
            </Card>
            <Card className="bg-white/10 backdrop-blur border-white/20">
              <CardContent className="pt-6 text-center">
                <p className="text-3xl font-bold mb-2">$25,000</p>
                <p className="text-sm">Investment Ask</p>
              </CardContent>
            </Card>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg">
              <Calendar className="mr-2" />
              Schedule Investor Call
            </Button>
            
           < DownloadInvestmentDeck/>
          </div>
        </div>
      </section>

      {/* Investment Snapshot */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Investment Snapshot</h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>The Opportunity</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-muted-foreground">
                    <li>• Scale from 73 → 300 biodigesters in Kyangwali Refugee Settlement, Uganda</li>
                    <li>• Transform 227 additional refugee & host families</li>
                    <li>• Prove refugee-led model is replicable across 13 refugee districts</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>The Problem</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-muted-foreground">
                    <li>• 149,647 refugees rely on firewood (99%)</li>
                    <li>• 67,900 hectares forest lost since 2002</li>
                    <li>• Biodigesters cost 473 days earnings (unaffordable)</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Why BUAK?</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-muted-foreground">
                    <li>• 3 years proven track record</li>
                    <li>• 73 biodigesters operational</li>
                    <li>• 87.7% system uptime</li>
                    <li>• 94% member satisfaction</li>
                    <li>• Refugee-led governance</li>
                    <li>• Ashden Award Winner 2024</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>The Terms</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between pb-3 border-b">
                      <span>Investment Ask:</span>
                      <span className="font-bold text-xl">$25,000</span>
                    </div>
                    <div className="flex justify-between pb-3 border-b">
                      <span>Structure:</span>
                      <span className="font-medium">Equity or revenue-share (negotiable)</span>
                    </div>
                    <div className="flex justify-between pb-3 border-b">
                      <span>Expected ROI:</span>
                      <span className="font-bold text-primary">15-25% (3-year horizon)</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Social ROI:</span>
                      <span className="font-bold text-secondary">2.47:1 (CARE verified)</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>The Solution</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-muted-foreground">
                    <li>• Offtake-based financing (no cash upfront)</li>
                    <li>• 95% repayment rate</li>
                    <li>• 26% profit margins</li>
                    <li>• Self-sustaining revolving fund</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Why Now?</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-muted-foreground">
                    <li>• Investment-ready stage</li>
                    <li>• Ashden Award credibility</li>
                    <li>• Scalable to 13 districts</li>
                    <li>• First-mover advantage</li>
                    <li>• Climate urgency</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="text-center mt-8">
          <DownloadInvestmentDeck/>
          </div>
        </div>
      </section>

      {/* The Business Case */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">Why Invest in BUAK?</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            5 reasons this is a smart impact investment
          </p>

          <div className="max-w-5xl mx-auto space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <span className="text-3xl">1️⃣</span>
                  Proven Financial Model
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground mb-4">
                  <li>• 26% gross margins (proven 3 years)</li>
                  <li>• 95% repayment rate (industry-leading)</li>
                  <li>• Break-even at 25 units (exceeded in 2023)</li>
                  <li>• Currently profitable (73 units)</li>
                  <li>• Self-sustaining revolving fund</li>
                </ul>
                <p className="text-foreground font-medium">
                  Unlike most aid projects, BUAK doesn't need donor dependency. The model pays for itself.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <span className="text-3xl">2️⃣</span>
                  Massive Market Opportunity
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground mb-4">
                  <li>• 149,647 refugees in Kyangwali (99% use firewood)</li>
                  <li>• 1.5M refugees in Uganda total</li>
                  <li>• 13 refugee-hosting districts mapped</li>
                  <li>• East Africa: 4.6M refugees (regional potential)</li>
                </ul>
                <p className="text-foreground font-medium">
                  If 10% adoption → 15,000 biodigesters in Kyangwali alone. This is a UGX 52.5B ($14M) market.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <span className="text-3xl">3️⃣</span>
                  Innovation That Solves Real Barriers
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 bg-destructive/10 rounded-lg">
                    <p className="font-medium">Traditional biogas: 100% cash upfront = 0% adoption</p>
                  </div>
                  <div className="p-4 bg-primary/10 rounded-lg">
                    <p className="font-medium">BUAK's offtake model: Repay via production = 95% repayment rate</p>
                  </div>
                  <p className="text-foreground font-medium">
                    This breakthrough aligns incentives and removes the #1 barrier (capital). It's replicable globally.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <span className="text-3xl">4️⃣</span>
                  Refugee-Led = Sustainable
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground mb-4">
                  <li>• Community ownership (69-member cooperative)</li>
                  <li>• Democratic governance (elected leadership)</li>
                  <li>• Local capacity (4 refugee technicians trained)</li>
                  <li>• Peer accountability (95% repayment)</li>
                </ul>
                <p className="text-foreground font-medium">
                  When refugees lead, solutions stick. BUAK isn't dependent on expats or external management.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <span className="text-3xl">5️⃣</span>
                  Triple Bottom Line Returns
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="p-4 bg-primary/10 rounded-lg">
                    <p className="font-bold text-primary mb-2">FINANCIAL</p>
                    <p className="text-sm">15-25% ROI (3-year horizon)</p>
                  </div>
                  <div className="p-4 bg-secondary/10 rounded-lg">
                    <p className="font-bold text-secondary mb-2">SOCIAL</p>
                    <p className="text-sm">2.47:1 Social ROI (CARE verified)</p>
                  </div>
                  <div className="p-4 bg-accent/10 rounded-lg">
                    <p className="font-bold text-accent mb-2">ENVIRONMENTAL</p>
                    <p className="text-sm">500,975 kg firewood saved annually</p>
                  </div>
                </div>
                <p className="text-foreground font-medium mt-4">
                  Your investment creates measurable impact across profit, people, and planet.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Use of Funds */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">How We'll Use Your $25,000</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Every dollar creates measurable impact
          </p>

          <div className="max-w-4xl mx-auto space-y-6">
            <Card className="border-primary border-2">
              <CardHeader>
                <CardTitle className="flex justify-between items-center">
                  <span>75% ($18,750) → Biodigester Installations</span>
                  <span className="text-3xl font-bold text-primary">75%</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Finance 27 new biodigesters (seed capital)</li>
                  <li>• Member repayments enable 100+ more by 2027</li>
                  <li>• Creates revolving fund for long-term sustainability</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex justify-between items-center">
                  <span>10% ($2,500) → Working Capital</span>
                  <span className="text-2xl font-bold">10%</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Bio-slurry collection operations</li>
                  <li>• Staff salaries (6 months runway)</li>
                  <li>• Transportation & logistics</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex justify-between items-center">
                  <span>8% ($2,000) → Communications</span>
                  <span className="text-2xl font-bold">8%</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Professional website</li>
                  <li>• Video testimonials (5 high-quality)</li>
                  <li>• Media outreach</li>
                  <li className="font-medium text-foreground">→ Purpose: Attract next $50K+ investment round</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex justify-between items-center">
                  <span>4% ($1,000) → Training & Capacity</span>
                  <span className="text-2xl font-bold">4%</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Technician advanced training</li>
                  <li>• Leadership development</li>
                  <li>• Financial management workshops</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex justify-between items-center">
                  <span>3% ($750) → Monitoring & Evaluation</span>
                  <span className="text-2xl font-bold">3%</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Digital data system setup</li>
                  <li>• Quarterly impact surveys</li>
                  <li>• Independent M&E assessment</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="max-w-4xl mx-auto mt-12 p-8 bg-primary text-primary-foreground rounded-lg text-center">
            <p className="text-2xl font-bold mb-2">RESULT</p>
            <p className="text-4xl font-bold mb-4">Your $25,000 creates $909,000 in total value</p>
            <p className="text-sm opacity-90">
              (300 biodigesters × UGX 3.5M each = UGX 1.05B = $278K total including member contributions, multiplied over 3 years)
            </p>
          </div>

          <div className="text-center mt-8">
            <Button variant="outline">
              <Download className="mr-2" />
              Download Detailed Budget (Excel)
            </Button>
          </div>
        </div>
      </section>

      {/* Projected Returns */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">Your Return on Investment</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            3-year projection with conservative assumptions
          </p>

          <div className="max-w-5xl mx-auto">
            <Card className="mb-8">
              <CardContent className="pt-6">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left p-4">Year</th>
                        <th className="text-left p-4">Your Stake</th>
                        <th className="text-left p-4">Revenue Generated</th>
                        <th className="text-left p-4">Cumulative Return</th>
                        <th className="text-left p-4">Valuation Multiple</th>
                        <th className="text-left p-4">Your ROI</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="p-4 font-medium">2025</td>
                        <td className="p-4">$25K</td>
                        <td className="p-4">UGX 9.4M</td>
                        <td className="p-4 font-bold text-primary">$2,500</td>
                        <td className="p-4">1.10x</td>
                        <td className="p-4 font-bold">10%</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-4 font-medium">2026</td>
                        <td className="p-4">$25K</td>
                        <td className="p-4">UGX 20.3M</td>
                        <td className="p-4 font-bold text-primary">$5,625</td>
                        <td className="p-4">1.23x</td>
                        <td className="p-4 font-bold">23%</td>
                      </tr>
                      <tr>
                        <td className="p-4 font-medium">2027</td>
                        <td className="p-4">$25K</td>
                        <td className="p-4">UGX 46.1M</td>
                        <td className="p-4 font-bold text-primary">$12,250</td>
                        <td className="p-4">1.49x</td>
                        <td className="p-4 font-bold">49%</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Card>
                <CardHeader>
                  <CardTitle>Financial Returns</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Cumulative 3-Year ROI:</span>
                      <span className="font-bold text-2xl text-primary">49%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Average Annual ROI:</span>
                      <span className="font-bold text-xl">16.3%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Total Return:</span>
                      <span className="font-bold text-xl">$12,250 on $25K</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Social Returns</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>• 227 families transformed</li>
                    <li>• UGX 273M ($72,600) community wealth created</li>
                    <li>• 1,500-1,800 people breathing cleaner air</li>
                    <li>• 2.1M kg firewood saved (638 trees preserved)</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-gradient-hero text-primary-foreground">
              <CardHeader>
                <CardTitle>Exit Options (Year 3)</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li>○ Equity buyback by BUAK (at 1.5x valuation)</li>
                  <li>○ Continued revenue share (ongoing returns)</li>
                  <li>○ Roll into Series A round ($50K+ raise for expansion)</li>
                  <li>○ License model (receive royalties from replication)</li>
                </ul>
              </CardContent>
            </Card>

            <div className="text-center mt-8">
              <Button variant="outline">
                <Download className="mr-2" />
                Download Financial Model (Excel)
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Risk & Mitigation */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">Risks & How We Manage Them</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Every investment has risks. Here's how BUAK mitigates them.
          </p>

          <div className="max-w-5xl mx-auto space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>Member Default on Repayment</span>
                  <span className="text-sm font-normal px-3 py-1 rounded-full bg-green-100 text-green-800">
                    LOW RISK
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>├─ 95% repayment rate (proven 3 years)</li>
                  <li>├─ In-kind model aligns incentives</li>
                  <li>├─ Cooperative peer support</li>
                  <li>└─ Insurance fund (5% of revenue)</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>Market Saturation (Bio-slurry)</span>
                  <span className="text-sm font-normal px-3 py-1 rounded-full bg-yellow-100 text-yellow-800">
                    MEDIUM RISK
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>├─ Diversify markets (3 districts)</li>
                  <li>├─ Organic certification (premium pricing)</li>
                  <li>├─ Carbon credits alternative revenue</li>
                  <li>└─ Composting/pelletization (shelf-stable)</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>Technical Failures</span>
                  <span className="text-sm font-normal px-3 py-1 rounded-full bg-green-100 text-green-800">
                    LOW RISK
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>├─ 87.7% uptime (industry-leading)</li>
                  <li>├─ 14-point quality checklist</li>
                  <li>├─ 2-year warranty (BUAK covers)</li>
                  <li>└─ Preventive maintenance (monthly visits)</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>Currency Volatility (UGX/USD)</span>
                  <span className="text-sm font-normal px-3 py-1 rounded-full bg-yellow-100 text-yellow-800">
                    MEDIUM RISK
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>├─ Operations 100% local currency</li>
                  <li>├─ Investment terms in USD (protected)</li>
                  <li>└─ Quarterly reporting both currencies</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>Policy/Regulatory Changes</span>
                  <span className="text-sm font-normal px-3 py-1 rounded-full bg-green-100 text-green-800">
                    LOW RISK
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>├─ Government encourages biogas</li>
                  <li>├─ Advocacy via industry associations</li>
                  <li>└─ UNHCR partnership (policy support)</li>
                </ul>
              </CardContent>
            </Card>

            <div className="p-6 bg-primary/10 rounded-lg text-center">
              <p className="font-bold text-xl mb-2">OVERALL RISK RATING: LOW-MODERATE</p>
              <p className="text-muted-foreground">
                Proven track record + transparent governance = Lower risk than typical early-stage impact investments
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Now */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">Why Invest Now?</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Timing is critical
          </p>

          <div className="max-w-4xl mx-auto space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <CheckCircle2 className="text-primary" />
                  MOMENTUM: Ashden Award creates global attention
                </CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                Strike while the iron is hot—media + partnership interest is at its peak
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <CheckCircle2 className="text-primary" />
                  PROVEN STAGE: 3 years data removes early-stage risk
                </CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                You're investing at the "hockey stick" growth phase
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <CheckCircle2 className="text-primary" />
                  EXPANSION READY: Team trained, systems tested, model proven
                </CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                Your $25K immediately deploys—no "figuring it out" phase
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <CheckCircle2 className="text-primary" />
                  COMPETITIVE ADVANTAGE: First refugee-led biogas in E.Africa
                </CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                Early investment = better terms + strategic positioning
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <CheckCircle2 className="text-primary" />
                  CLIMATE URGENCY: Deforestation accelerating in Kyangwali
                </CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                Every month delayed = more forest lost, more families breathing smoke
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <CheckCircle2 className="text-primary" />
                  REFUGEE CRISIS: 149,647 people need solutions NOW
                </CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                This isn't charity—it's entrepreneurship meeting urgent need
              </CardContent>
            </Card>
          </div>

          <Card className="max-w-4xl mx-auto mt-12 bg-primary text-primary-foreground">
            <CardContent className="pt-6 text-center">
              <p className="text-xl mb-4">
                <strong>NEXT 90 DAYS:</strong> BUAK installs 15 new digesters with or without investment.
              </p>
              <p className="text-lg mb-4">
                With your $25K, we install 27 → momentum builds → media features → next investors easier to attract.
              </p>
              <p className="text-lg font-bold">
                Wait 6 months? You miss the Ashden boost. Invest now? You ride the wave.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Due Diligence */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">Due Diligence Documents</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Everything you need to evaluate this investment
          </p>

          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader>
                  <Download className="h-8 w-8 text-primary mb-2" />
                  <CardTitle className="text-lg">Financial Documents</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  <ul className="space-y-1">
                    <li>├─ Audited Financial Statements (2022-2024)</li>
                    <li>├─ Quarterly Reports to Ashden (2024)</li>
                    <li>├─ Projected Financials (2025-2027)</li>
                    <li>├─ Unit Economics Model (Excel)</li>
                    <li>└─ Budget Breakdown ($25K use of funds)</li>
                  </ul>
                  <p className="text-primary font-medium mt-3">Download All →</p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader>
                  <BarChart3 className="h-8 w-8 text-primary mb-2" />
                  <CardTitle className="text-lg">Impact & Technical</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  <ul className="space-y-1">
                    <li>├─ CARE International Assessment Report (SROI 2.47:1)</li>
                    <li>├─ BUAK Annual Impact Report 2024</li>
                    <li>├─ Technical Specifications Manual</li>
                    <li>├─ Quality Assurance Documentation</li>
                    <li>└─ Member Satisfaction Survey Results</li>
                  </ul>
                  <p className="text-primary font-medium mt-3">Download All →</p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader>
                  <Award className="h-8 w-8 text-primary mb-2" />
                  <CardTitle className="text-lg">Credentials & Recognition</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  <ul className="space-y-1">
                    <li>├─ Ashden Award Citation (2024)</li>
                    <li>├─ Cooperative Registration Certificate</li>
                    <li>├─ Partner Letters (CARE, UNHCR, JICA)</li>
                    <li>└─ Media Coverage Compilation</li>
                  </ul>
                  <p className="text-primary font-medium mt-3">Download All →</p>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-primary/10">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <FileText className="text-primary" />
                  References - Speak to our partners directly
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="font-medium mb-1">Ashden Awards (UK)</p>
                    <p className="text-muted-foreground">awards@ashden.org</p>
                  </div>
                  <div>
                    <p className="font-medium mb-1">CARE International</p>
                    <p className="text-muted-foreground">Contact available on request</p>
                  </div>
                  <div>
                    <p className="font-medium mb-1">JICA Uganda</p>
                    <p className="text-muted-foreground">Contact available on request</p>
                  </div>
                  <div>
                    <p className="font-medium mb-1">Biogas Solutions Uganda</p>
                    <p className="text-muted-foreground">Contact available on request</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="text-center mt-8">
              <Button size="lg" className="text-lg">
                <Shield className="mr-2" />
                Request Access to Investor Data Room
              </Button>
              <p className="text-sm text-muted-foreground mt-3">
                Secure portal with ALL documents organized
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Investor Testimonials */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">What Funders Say</h2>

          <div className="max-w-4xl mx-auto space-y-6">
            <Card>
              <CardContent className="pt-6">
                <p className="text-lg italic mb-4">
                  "BUAK's financial model is rare in the impact space—they've achieved profitability while 
                  transforming lives. This is the kind of investment that pencils out AND changes the world."
                </p>
                <p className="font-medium">— JICA Uganda Program Officer</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <p className="text-lg italic mb-4">
                  "The Ashden judges were unanimous: BUAK's unit economics are solid, their social impact is verified, 
                  and their refugee-led model is replicable. This deserves scaling."
                </p>
                <p className="font-medium">— Ashden Awards Panel</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <p className="text-lg italic mb-4">
                  "We've assessed hundreds of impact projects. BUAK stands out for transparency, governance, and results. 
                  The 2.47:1 social ROI is exceptional."
                </p>
                <p className="font-medium">— CARE International, Senior Advisor</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">Who You're Investing In</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Meet the refugee-led leadership team
          </p>

          <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <div className="w-24 h-24 rounded-full bg-primary/20 mx-auto mb-4"></div>
                <CardTitle className="text-center">Sarah Ninsiima</CardTitle>
                <p className="text-center text-sm text-muted-foreground">Chairperson</p>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-sm mb-4">
                  Former firewood collector → Cooperative leader. Led BUAK from 2 to 73 digesters. 
                  Refugee from South Sudan.
                </p>
                <p className="text-sm italic">
                  "Your investment isn't charity—it's partnership with people who know how to get things done."
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-24 h-24 rounded-full bg-secondary/20 mx-auto mb-4"></div>
                <CardTitle className="text-center">Robert Mugisha</CardTitle>
                <p className="text-center text-sm text-muted-foreground">Secretary General</p>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-sm mb-4">
                  Agricultural engineer, 10+ years biogas experience. Technical excellence: 87.7% uptime.
                </p>
                <p className="text-sm italic">
                  "We've proven it works. Now we need capital to scale."
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-24 h-24 rounded-full bg-accent/20 mx-auto mb-4"></div>
                <CardTitle className="text-center">Ahmed Jibril</CardTitle>
                <p className="text-center text-sm text-muted-foreground">Treasurer</p>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-sm mb-4">
                  Certified accountant. Transparent financial management.
                </p>
                <p className="text-sm italic">
                  "Every shilling accounted for. Your investment is safe."
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-8">
            <Link to = "/contact">
             <Button variant="outline">
              <Calendar className="mr-2" />
              Schedule Call with Leadership
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Primary CTA */}
      <section className="py-20 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl font-bold mb-4">Ready to Invest in Refugee-Led Innovation?</h2>
            <p className="text-xl mb-8">
              Join us in scaling from 73 to 300 biodigesters and proving that refugees are entrepreneurs, 
              not just beneficiaries.
            </p>

            <Card className="bg-white/10 backdrop-blur border-white/20 p-8 mb-8">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="secondary" size="lg" className="text-lg">
                  <Calendar className="mr-2" />
                  Schedule Investor Call
                </Button>
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary text-lg">
                  <Download className="mr-2" />
                  Download Investment Deck
                </Button>
              </div>
              <p className="text-sm mt-6 opacity-90">
                15-minute intro call with Robert Mugisha (No obligation—just exploratory conversation)
              </p>
            </Card>

            <div className="space-y-2 mb-8">
              <p className="text-lg font-medium">Not ready for a call? Start here:</p>
              <div className="flex flex-wrap gap-3 justify-center">
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                  <Download className="mr-2" /> Investment Deck
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                  <Shield className="mr-2" /> Request Data Room Access
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                  <FileText className="mr-2" /> Watch 10-Min Pitch
                </Button>
              </div>
            </div>

            <div className="space-y-2">
              <p className="text-lg font-medium">Or contact Robert directly:</p>
              <div className="flex flex-wrap gap-4 justify-center items-center">
                <a href="mailto:robert@buak-uganda.org" className="flex items-center gap-2 hover:underline">
                  <Mail className="h-5 w-5" />
                  robert@buak-uganda.org
                </a>
                <a href="tel:+256758998928" className="flex items-center gap-2 hover:underline">
                  <Phone className="h-5 w-5" />
                  +256 758998928
                </a>
                <a href="https://wa.me/256758998928" className="flex items-center gap-2 hover:underline">
                  <MessageCircle className="h-5 w-5" />
                  WhatsApp
                </a>
              </div>
              <p className="text-sm opacity-90 mt-4">
                🌍 Based in Uganda, available for calls globally | Typical Response Time: &lt;24 hours
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Investor FAQ */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Investor FAQ</h2>

          <div className="max-w-4xl mx-auto space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Q1: What's the minimum investment amount?</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                <strong>A:</strong> We're currently seeking $25,000 as a single round. For smaller amounts ($5K-10K), 
                we can discuss joining a syndicate with other investors.
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Q2: Is this equity or debt?</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                <strong>A:</strong> We're open to either. Most impactful: Equity (you own % of BUAK) or Revenue-share 
                (% of bio-slurry sales). We can structure to fit your investment thesis.
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Q3: What's your valuation?</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                <strong>A:</strong> Pre-money valuation: $150K based on proven revenue, assets (73 digesters), and 
                growth potential. Your $25K = 14.3% equity (negotiable).
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Q4: When do I see returns?</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                <strong>A:</strong> Quarterly distributions begin Q4 2025. Full ROI over 3-year horizon. 
                Early exit available after Year 2.
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Q5: Can I visit BUAK in Uganda?</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                <strong>A:</strong> Absolutely! We encourage site visits. Fly into Entebbe, we'll arrange transport 
                to Kyangwali (4-hour drive). Meet members, see digesters, tour operations.
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Q6: What if I want to invest more than $25K?</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                <strong>A:</strong> Contact us! We're planning a $50K Series A round in 2026 for expansion to 3 
                additional districts. Early commitment = better terms.
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Q7: How is this different from donating to an NGO?</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                <strong>A:</strong> Donations = no return. Investment = financial return + social impact. 
                You're funding a business, not charity.
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Q8: What about impact measurement?</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                <strong>A:</strong> Quarterly impact reports (verified by third party). Clear metrics: digesters installed, 
                families transformed, firewood saved, revenue generated.
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Invest;