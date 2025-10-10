import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Financials = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-hero">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold text-primary-foreground mb-4">Financials</h1>
            <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto mb-4">
              Transparent, Sustainable, Investment-Ready
            </p>
            <p className="text-lg text-primary-foreground/80">
              26% Gross Margin | 95% Repayment Rate | 3 Years Profitable
            </p>
          </div>
        </section>

        {/* Financial Summary */}
        <section className="py-16 container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Financial Snapshot (2024)</h2>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card>
                <CardHeader>
                  <CardTitle className="text-center">
                    <p className="text-4xl font-bold text-primary mb-2">UGX 87.6M</p>
                    <p className="text-xl font-semibold">ANNUAL REVENUE</p>
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center text-sm text-muted-foreground">
                  <p>[$23,300]</p>
                  <p>(73 units)</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-center">
                    <p className="text-4xl font-bold text-secondary mb-2">26%</p>
                    <p className="text-xl font-semibold">GROSS MARGIN</p>
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center text-sm text-muted-foreground">
                  <p>Proven</p>
                  <p>3 years</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-center">
                    <p className="text-4xl font-bold text-accent mb-2">95%</p>
                    <p className="text-xl font-semibold">REPAYMENT RATE</p>
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center text-sm text-muted-foreground">
                  <p>In-kind</p>
                  <p>model</p>
                </CardContent>
              </Card>
            </div>

            <div className="bg-muted p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Additional Key Facts</h3>
              <ul className="space-y-2">
                <li>• Profitable since 2023</li>
                <li>• Zero debt burden</li>
                <li>• Self-sustaining revolving fund</li>
                <li>• Audited financials (3 years)</li>
                <li>• Transparent to all members</li>
                <li>• Break-even achieved at 25 digesters</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Revenue Model */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Revenue Streams</h2>
              <p className="text-center text-muted-foreground mb-12">
                BUAK operates a circular economy model with multiple revenue streams
              </p>

              <div className="space-y-8">
                {/* Bio-slurry Sales */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-primary">1. Bio-slurry Sales (100% Current Revenue)</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2 text-sm">
                      <p>• BUAK collects bio-slurry from 73 households</p>
                      <p>• Pays members: UGX 2,500 per 20L can</p>
                      <p>• Sells to farmers: UGX 5,000 per 20L can</p>
                      <p>• Margin: UGX 2,500 per can (50% markup)</p>
                    </div>

                    <div className="bg-background p-4 rounded">
                      <h4 className="font-bold mb-2">Annual Production (73 digesters):</h4>
                      <ul className="text-sm space-y-1 ml-4">
                        <li>• 54,750 kg bio-slurry annually</li>
                        <li>• 2,737 cans (20L each)</li>
                        <li>• Gross revenue: UGX 13.7M</li>
                        <li>• Member payments: UGX 6.8M</li>
                        <li>• BUAK margin: UGX 6.9M (50%)</li>
                      </ul>
                    </div>

                    <div className="bg-background p-4 rounded">
                      <h4 className="font-bold mb-2">Projected at 300 digesters:</h4>
                      <ul className="text-sm space-y-1 ml-4">
                        <li>• 225,000 kg bio-slurry annually</li>
                        <li>• 11,250 cans</li>
                        <li>• Gross revenue: UGX 56.25M</li>
                        <li>• Member payments: UGX 28.1M</li>
                        <li>• BUAK margin: UGX 28.1M</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>

                {/* Loan Repayments */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-secondary">2. Loan Repayments (Revolving Fund Growth)</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4 text-sm">
                    <p>• Member contributes 30% in-kind (UGX 1.05M value)</p>
                    <p>• BUAK finances 70% as loan (UGX 2.45M cash)</p>
                    <p>• Repayment via bio-slurry credits (automatic)</p>
                    <p>• Payback period: 18-24 months average</p>
                    <p>• No interest charged (cooperative model)</p>
                    <p>• Repaid capital → New installations</p>

                    <div className="bg-background p-4 rounded mt-4">
                      <h4 className="font-bold mb-2">Current Revolving Fund Status:</h4>
                      <ul className="space-y-1 ml-4">
                        <li>• Outstanding loans: UGX 178.9M (73 loans)</li>
                        <li>• Repayments collected: UGX 42M (2021-2024)</li>
                        <li>• Repayment rate: 95%</li>
                        <li>• Available capital: UGX 15M (for new installs)</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>

                {/* Future Revenue */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-accent">3. Future Revenue Streams (In Development)</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4 text-sm">
                    <div>
                      <h4 className="font-semibold mb-1">• Technical training fees (2026)</h4>
                      <p className="ml-4 text-muted-foreground">Train other cooperatives/NGOs: UGX 500K/session</p>
                      <p className="ml-4 text-muted-foreground">Estimated: UGX 3M annually (6 trainings/year)</p>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-1">• Carbon credits (2027)</h4>
                      <p className="ml-4 text-muted-foreground">Pending Gold Standard verification</p>
                      <p className="ml-4 text-muted-foreground">Estimated: $15-20 per tonne CO₂ reduced</p>
                      <p className="ml-4 text-muted-foreground">Potential: UGX 25-40M annually (at 300 units)</p>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-1">• Licensing model to other settlements (2027+)</h4>
                      <p className="ml-4 text-muted-foreground">License BUAK model/brand: UGX 10M per settlement</p>
                      <p className="ml-4 text-muted-foreground">Target: 3 settlements by 2028</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Unit Economics */}
        <section className="py-16 container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Unit Economics: One Biodigester</h2>

            <div className="bg-card p-8 rounded-lg border border-border space-y-6">
              <div>
                <h3 className="text-xl font-bold mb-3 text-primary">Initial Investment (Per Unit)</h3>
                <div className="space-y-2 text-sm border-l-4 border-primary pl-4">
                  <div className="flex justify-between font-bold">
                    <span>Total Cost:</span>
                    <span>UGX 3,500,000</span>
                  </div>
                  <div className="flex justify-between ml-4">
                    <span>Materials (bricks, cement, pipes)</span>
                    <span>UGX 1,750,000</span>
                  </div>
                  <div className="flex justify-between ml-4">
                    <span>Labor (skilled technicians)</span>
                    <span>UGX 1,050,000</span>
                  </div>
                  <div className="flex justify-between ml-4">
                    <span>Gas stove + fittings</span>
                    <span>UGX 350,000</span>
                  </div>
                  <div className="flex justify-between ml-4">
                    <span>Transportation</span>
                    <span>UGX 200,000</span>
                  </div>
                  <div className="flex justify-between ml-4">
                    <span>Training + oversight</span>
                    <span>UGX 150,000</span>
                  </div>
                </div>

                <div className="mt-4 space-y-2 text-sm">
                  <p className="font-semibold">Funding Split:</p>
                  <div className="flex justify-between ml-4">
                    <span>Member contribution (30%)</span>
                    <span>UGX 1,050,000 (in-kind)</span>
                  </div>
                  <div className="flex justify-between ml-4">
                    <span>BUAK investment (70%)</span>
                    <span>UGX 2,450,000 (cash)</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-3 text-secondary">Annual Revenue (Per Unit)</h3>
                <div className="space-y-2 text-sm border-l-4 border-secondary pl-4">
                  <p className="font-semibold">Bio-slurry Sales:</p>
                  <div className="ml-4 space-y-1">
                    <p>• Production: 750 kg/year (average)</p>
                    <p>• Volume: 37.5 cans (20L each)</p>
                    <p>• Selling price: UGX 5,000/can</p>
                    <p>• Gross revenue: UGX 187,500/year</p>
                  </div>

                  <p className="font-semibold mt-3">Revenue Split:</p>
                  <div className="ml-4 space-y-1">
                    <p>Member payment (50%): UGX 93,750</p>
                    <p>BUAK margin (50%): UGX 93,750</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-3 text-accent">Annual Costs (Per Unit)</h3>
                <div className="space-y-2 text-sm border-l-4 border-accent pl-4">
                  <div className="flex justify-between">
                    <span>Collection labor (weekly)</span>
                    <span>UGX 36,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Transportation (jerry cans)</span>
                    <span>UGX 12,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Maintenance visits (monthly)</span>
                    <span>UGX 15,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Quality testing</span>
                    <span>UGX 5,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Administrative overhead (5%)</span>
                    <span>UGX 3,400</span>
                  </div>
                  <div className="flex justify-between font-bold border-t border-border pt-2 mt-2">
                    <span>Total Annual Costs:</span>
                    <span>UGX 71,400</span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-hero text-primary-foreground p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3">Net Annual Profit (Per Unit)</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>BUAK Margin:</span>
                    <span>UGX 93,750</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Less: Costs</span>
                    <span>UGX (71,400)</span>
                  </div>
                  <div className="flex justify-between text-2xl font-bold border-t border-primary-foreground/20 pt-2 mt-2">
                    <span>NET PROFIT:</span>
                    <span>UGX 22,350/year</span>
                  </div>
                  <p className="text-sm mt-4 pt-4 border-t border-primary-foreground/20">
                    <strong>Payback Period:</strong> 18-24 months (with loan repayment)<br />
                    <strong>Post-payback ROI:</strong> 15-20% annually
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Historical Performance */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">3-Year Financial Track Record</h2>

              <div className="overflow-x-auto">
                <table className="w-full bg-card border border-border rounded-lg">
                  <thead className="bg-background">
                    <tr>
                      <th className="p-4 text-left font-bold">Metric</th>
                      <th className="p-4 text-center font-bold">2022</th>
                      <th className="p-4 text-center font-bold">2023</th>
                      <th className="p-4 text-center font-bold">2024</th>
                      <th className="p-4 text-center font-bold">Trend</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm">
                    <tr className="border-t border-border">
                      <td className="p-4 font-medium">Biodigesters Active</td>
                      <td className="p-4 text-center">25</td>
                      <td className="p-4 text-center">50</td>
                      <td className="p-4 text-center">73</td>
                      <td className="p-4 text-center text-green-600">↗</td>
                    </tr>
                    <tr className="border-t border-border">
                      <td className="p-4 font-medium">Revenue (Bio-slurry)</td>
                      <td className="p-4 text-center">UGX 2.3M</td>
                      <td className="p-4 text-center">UGX 4.7M</td>
                      <td className="p-4 text-center">UGX 6.9M</td>
                      <td className="p-4 text-center text-green-600">↗</td>
                    </tr>
                    <tr className="border-t border-border">
                      <td className="p-4 font-medium">Member Payments</td>
                      <td className="p-4 text-center">UGX 1.2M</td>
                      <td className="p-4 text-center">UGX 2.3M</td>
                      <td className="p-4 text-center">UGX 3.4M</td>
                      <td className="p-4 text-center text-green-600">↗</td>
                    </tr>
                    <tr className="border-t border-border">
                      <td className="p-4 font-medium">Operating Costs</td>
                      <td className="p-4 text-center">UGX 1.9M</td>
                      <td className="p-4 text-center">UGX 3.5M</td>
                      <td className="p-4 text-center">UGX 5.1M</td>
                      <td className="p-4 text-center text-green-600">↗</td>
                    </tr>
                    <tr className="border-t border-border">
                      <td className="p-4 font-medium">Net Profit</td>
                      <td className="p-4 text-center text-red-600">UGX (0.8M)</td>
                      <td className="p-4 text-center text-green-600">UGX 1.2M</td>
                      <td className="p-4 text-center text-green-600">UGX 1.8M</td>
                      <td className="p-4 text-center text-green-600">↗</td>
                    </tr>
                    <tr className="border-t border-border">
                      <td className="p-4 font-medium">Gross Margin</td>
                      <td className="p-4 text-center">15%</td>
                      <td className="p-4 text-center">23%</td>
                      <td className="p-4 text-center">26%</td>
                      <td className="p-4 text-center text-green-600">↗</td>
                    </tr>
                    <tr className="border-t border-border">
                      <td className="p-4 font-medium">Repayment Rate</td>
                      <td className="p-4 text-center">54%</td>
                      <td className="p-4 text-center">87%</td>
                      <td className="p-4 text-center">95%</td>
                      <td className="p-4 text-center text-green-600">↗</td>
                    </tr>
                    <tr className="border-t border-border">
                      <td className="p-4 font-medium">Break-even</td>
                      <td className="p-4 text-center">No</td>
                      <td className="p-4 text-center text-green-600">Yes</td>
                      <td className="p-4 text-center text-green-600">Yes</td>
                      <td className="p-4 text-center text-green-600">✓</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-card p-6 rounded-lg mt-6">
                <h3 className="font-bold mb-3">Key Insights</h3>
                <ul className="space-y-2 text-sm">
                  <li>• 2022: Startup losses (building infrastructure)</li>
                  <li>• 2023: Break-even achieved at 25 digesters</li>
                  <li>• 2024: Profitable, margins improving with scale</li>
                  <li>• Repayment rate jumped from 54% (cash) to 95% (in-kind)</li>
                  <li>• Gross margin improving (economies of scale)</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Projections */}
        <section className="py-16 container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Financial Projections (2025-2027)</h2>
            <p className="text-center text-muted-foreground mb-8">With $25K Investment</p>

            <div className="bg-muted p-6 rounded-lg mb-8">
              <h3 className="font-bold mb-3">Assumptions:</h3>
              <ul className="text-sm space-y-1">
                <li>• $25,000 investment received Q1 2025</li>
                <li>• Scale from 73 → 300 digesters by end of 2027</li>
                <li>• Installation pace: 15-20 per quarter</li>
                <li>• Repayment rate maintained at 95%</li>
                <li>• No debt, equity-based investment</li>
              </ul>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full bg-card border border-border rounded-lg">
                <thead className="bg-background">
                  <tr>
                    <th className="p-4 text-left font-bold">Metric</th>
                    <th className="p-4 text-center font-bold">2025</th>
                    <th className="p-4 text-center font-bold">2026</th>
                    <th className="p-4 text-center font-bold">2027</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  <tr className="border-t border-border">
                    <td className="p-4 font-medium">Biodigesters Active</td>
                    <td className="p-4 text-center">100</td>
                    <td className="p-4 text-center">200</td>
                    <td className="p-4 text-center">300</td>
                  </tr>
                  <tr className="border-t border-border">
                    <td className="p-4 font-medium">Bio-slurry Revenue</td>
                    <td className="p-4 text-center">UGX 9.4M</td>
                    <td className="p-4 text-center">UGX 18.8M</td>
                    <td className="p-4 text-center">UGX 28.1M</td>
                  </tr>
                  <tr className="border-t border-border">
                    <td className="p-4 font-medium">Training Revenue</td>
                    <td className="p-4 text-center">UGX 0</td>
                    <td className="p-4 text-center">UGX 1.5M</td>
                    <td className="p-4 text-center">UGX 3M</td>
                  </tr>
                  <tr className="border-t border-border">
                    <td className="p-4 font-medium">Carbon Credits (projected)</td>
                    <td className="p-4 text-center">UGX 0</td>
                    <td className="p-4 text-center">UGX 0</td>
                    <td className="p-4 text-center">UGX 15M</td>
                  </tr>
                  <tr className="border-t border-border font-bold">
                    <td className="p-4">TOTAL REVENUE</td>
                    <td className="p-4 text-center">UGX 9.4M</td>
                    <td className="p-4 text-center">UGX 20.3M</td>
                    <td className="p-4 text-center">UGX 46.1M</td>
                  </tr>
                  <tr className="border-t border-border">
                    <td className="p-4 font-medium">Operating Costs</td>
                    <td className="p-4 text-center">UGX 7.1M</td>
                    <td className="p-4 text-center">UGX 14.5M</td>
                    <td className="p-4 text-center">UGX 21.8M</td>
                  </tr>
                  <tr className="border-t border-border text-green-600 font-bold">
                    <td className="p-4">NET PROFIT (Operations)</td>
                    <td className="p-4 text-center">UGX 2.3M</td>
                    <td className="p-4 text-center">UGX 5.8M</td>
                    <td className="p-4 text-center">UGX 24.3M</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-primary">Cumulative Impact (2025-2027)</CardTitle>
                </CardHeader>
                <CardContent className="text-sm space-y-2">
                  <p>• Total digesters installed: 227 new units</p>
                  <p>• Community revenue generated: UGX 273M ($72,600)</p>
                  <p>• BUAK operational profit: UGX 32.4M ($8,600)</p>
                  <p>• Revolving fund value: UGX 556M ($148,000)</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-secondary">Return on Investment</CardTitle>
                </CardHeader>
                <CardContent className="text-sm space-y-2">
                  <p>• Investment: $25,000</p>
                  <p>• Projected IRR: 18-22% (3-year horizon)</p>
                  <p>• Social ROI: 2.47:1 (verified by CARE)</p>
                  <p>• Exit options: Equity buyback, continued partnership</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Use of Funds */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">How $25,000 Will Be Used</h2>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-primary">
                      <p className="text-3xl">75%</p>
                      <p className="text-lg">$18,750</p>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <h4 className="font-bold mb-2">Biodigester Installations</h4>
                    <p className="text-sm text-muted-foreground">Finance 27 new units (revolving fund seed)</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-secondary">
                      <p className="text-3xl">10%</p>
                      <p className="text-lg">$2,500</p>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <h4 className="font-bold mb-2">Working Capital</h4>
                    <p className="text-sm text-muted-foreground">Operations, collection, staffing</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-accent">
                      <p className="text-3xl">8%</p>
                      <p className="text-lg">$2,000</p>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <h4 className="font-bold mb-2">Communications</h4>
                    <p className="text-sm text-muted-foreground">Website, media, visibility</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>
                      <p className="text-3xl">4%</p>
                      <p className="text-lg">$1,000</p>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <h4 className="font-bold mb-2">Training & Capacity</h4>
                    <p className="text-sm text-muted-foreground">Technician training, workshops</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>
                      <p className="text-3xl">3%</p>
                      <p className="text-lg">$750</p>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <h4 className="font-bold mb-2">M&E & Impact</h4>
                    <p className="text-sm text-muted-foreground">Data systems, surveys</p>
                  </CardContent>
                </Card>
              </div>

              <div className="bg-card p-6 rounded-lg">
                <h3 className="font-bold mb-3">Why This Allocation?</h3>
                <ul className="text-sm space-y-2">
                  <li>• 75% directly creates assets (digesters)</li>
                  <li>• 10% ensures operations run smoothly</li>
                  <li>• 15% invests in growth (comms, training, M&E)</li>
                  <li>• No overhead bloat—lean, efficient use of funds</li>
                  <li>• Every dollar creates measurable impact</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Transparency & Risk */}
        <section className="py-16 container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-3xl font-bold mb-8">Financial Governance</h2>
                <div className="space-y-4">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">✓ External Audits</CardTitle>
                    </CardHeader>
                    <CardContent className="text-sm space-y-1">
                      <p>• Annual audit by certified public accountant</p>
                      <p>• 3 clean audits (2022, 2023, 2024)</p>
                      <p>• Reports shared with partners</p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">✓ Member Transparency</CardTitle>
                    </CardHeader>
                    <CardContent className="text-sm space-y-1">
                      <p>• Quarterly financial reports to General Assembly</p>
                      <p>• Open book policy</p>
                      <p>• Monthly Executive Committee reviews</p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">✓ Investor Reporting</CardTitle>
                    </CardHeader>
                    <CardContent className="text-sm space-y-1">
                      <p>• Quarterly updates (financial + impact)</p>
                      <p>• Annual comprehensive report</p>
                      <p>• On-demand access to records</p>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-8">Risk Assessment</h2>
                <div className="space-y-4">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-sm text-muted-foreground">Risk: Repayment Default</CardTitle>
                    </CardHeader>
                    <CardContent className="text-sm">
                      <p className="mb-2"><strong>Likelihood:</strong> Low (95% rate proven)</p>
                      <p><strong>Mitigation:</strong> In-kind model, peer support, flexible terms, insurance fund (5% of revenue)</p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-sm text-muted-foreground">Risk: Market Saturation</CardTitle>
                    </CardHeader>
                    <CardContent className="text-sm">
                      <p className="mb-2"><strong>Likelihood:</strong> Medium</p>
                      <p><strong>Mitigation:</strong> Diversify markets, organic certification, carbon credits, composting</p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-sm text-muted-foreground">Risk: Technical Failures</CardTitle>
                    </CardHeader>
                    <CardContent className="text-sm">
                      <p className="mb-2"><strong>Likelihood:</strong> Low (12.3% failure rate)</p>
                      <p><strong>Mitigation:</strong> Quality control, 2-year warranty, preventive maintenance, emergency fund</p>
                    </CardContent>
                  </Card>

                  <div className="bg-gradient-hero text-primary-foreground p-4 rounded-lg text-center">
                    <p className="font-bold">Overall Risk Rating: LOW-MODERATE</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">What Funders Say About BUAK</h2>

              <div className="space-y-6">
                <Card>
                  <CardContent className="pt-6">
                    <p className="text-muted-foreground italic mb-3">
                      "BUAK's financial model is impressive. They've achieved profitability in 3 years and demonstrated 
                      financial sustainability—a rarity in the impact sector."
                    </p>
                    <p className="font-semibold">— JICA Uganda Program Officer</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <p className="text-muted-foreground italic mb-3">
                      "Their unit economics are sound, and the 95% repayment rate shows the in-kind model works. 
                      This is investable."
                    </p>
                    <p className="font-semibold">— Ashden Awards Judges (2024)</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <p className="text-muted-foreground italic mb-3">
                      "BUAK's financial transparency exceeds expectations. Clean audits, clear reporting, and honest 
                      about challenges."
                    </p>
                    <p className="font-semibold">— CARE International, Uganda</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-hero">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-primary-foreground mb-6">Ready to Invest?</h2>
            <p className="text-lg text-primary-foreground/90 max-w-3xl mx-auto mb-8">
              BUAK is seeking $25,000 to scale from 73 to 300 biodigesters over 24 months. Join us in proving that 
              refugee-led innovation is financially sustainable AND socially impactful.
            </p>

            <div className="bg-background/10 backdrop-blur-sm p-8 rounded-lg max-w-2xl mx-auto mb-8">
              <h3 className="text-xl font-bold text-primary-foreground mb-4">Investment Terms</h3>
              <ul className="text-primary-foreground/90 text-left space-y-2">
                <li>• Structure: Equity or revenue-share (negotiable)</li>
                <li>• Expected ROI: 15-25% over 3 years</li>
                <li>• Social ROI: 2.47:1 (verified)</li>
                <li>• Reporting: Quarterly financials + impact</li>
                <li>• Exit: Buyback option or continued partnership</li>
              </ul>
            </div>

            <div className="flex flex-wrap justify-center gap-4 mb-6">
              <Button size="lg" variant="secondary">Schedule Investor Call</Button>
              <Button size="lg" variant="outline" className="bg-background/20 hover:bg-background/30">
                Download Investment Deck (PDF)
              </Button>
            </div>

            <div className="text-primary-foreground/90">
              <p className="mb-2">Questions? Contact Robert Mugisha (Secretary General)</p>
              <p className="font-semibold">
                📧 robert@buak-uganda.org | 📱 +256 758998928
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Financials;