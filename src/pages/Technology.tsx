import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const Technology = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-innovation">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold text-primary-foreground mb-4">The Technology</h1>
            <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
              Proven Biodigester Design | 20+ Year Lifespan | 87.7% Uptime | Industry-Leading
            </p>
          </div>
        </section>

        {/* What is a Biodigester */}
        <section className="py-16 container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Biodigester Basics</h2>
            
            <p className="text-lg text-muted-foreground mb-8">
              A biodigester (or biogas digester) is an underground chamber that converts organic waste into 
              clean cooking gas and organic fertilizer through anaerobic digestion.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-card p-6 rounded-lg border border-border text-center">
                <h3 className="text-xl font-bold mb-3 text-primary">INPUT</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>Animal waste (cattle, goats)</li>
                  <li>Food scraps</li>
                  <li>Water</li>
                </ul>
              </div>
              
              <div className="bg-card p-6 rounded-lg border border-border text-center">
                <h3 className="text-xl font-bold mb-3 text-secondary">PROCESS</h3>
                <p className="text-sm text-muted-foreground">
                  Bacteria break down waste in oxygen-free environment
                </p>
              </div>
              
              <div className="bg-card p-6 rounded-lg border border-border text-center">
                <h3 className="text-xl font-bold mb-3 text-accent">OUTPUTS</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>Biogas (cooking)</li>
                  <li>+</li>
                  <li>Bio-slurry (fertilizer)</li>
                </ul>
              </div>
            </div>

            <div className="bg-muted p-6 rounded-lg mb-8">
              <h3 className="text-xl font-bold mb-3">The Science</h3>
              <p className="text-muted-foreground">
                When organic matter breaks down without oxygen (anaerobic digestion), bacteria produce methane 
                gas (CH₄)—the same gas used for cooking. This process happens naturally in swamps and cow stomachs. 
                Biodigesters harness this natural process in a controlled environment.
              </p>
              <p className="text-muted-foreground mt-3">
                <strong>BUAK uses fixed-dome biodigesters</strong>—the most durable, reliable design for tropical climates.
              </p>
            </div>
          </div>
        </section>

        {/* Detailed Technical Specifications */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">BUAK Biodigester Specifications</h2>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-card p-6 rounded-lg border border-border">
                  <h3 className="font-bold mb-3 text-primary">Design</h3>
                  <ul className="space-y-2 text-sm">
                    <li><strong>Type:</strong> Fixed-Dome (Underground)</li>
                    <li><strong>Capacity:</strong> 4 m³ (standard household)</li>
                    <li><strong>Construction:</strong> Brick + cement dome</li>
                    <li><strong>Depth:</strong> 2.5 meters below ground</li>
                    <li><strong>Footprint:</strong> 5m × 5m surface area</li>
                    <li><strong>Lifespan:</strong> 20-25 years</li>
                  </ul>
                </div>

                <div className="bg-card p-6 rounded-lg border border-border">
                  <h3 className="font-bold mb-3 text-secondary">Daily Inputs</h3>
                  <ul className="space-y-2 text-sm">
                    <li><strong>Organic waste:</strong> 40 kg (cattle manure)</li>
                    <li><strong>Water:</strong> 40 liters (1:1 ratio)</li>
                    <li><strong>Feeding:</strong> Daily (morning)</li>
                  </ul>
                  <h3 className="font-bold mb-3 mt-4 text-accent">Daily Outputs</h3>
                  <ul className="space-y-2 text-sm">
                    <li><strong>Biogas:</strong> 2-3 m³ per day</li>
                    <li><strong>Cooking time:</strong> 4-6 hours (family of 6-8)</li>
                    <li><strong>Bio-slurry:</strong> 35 kg per day</li>
                  </ul>
                </div>
              </div>

              <div className="bg-card p-6 rounded-lg border border-border mb-6">
                <h3 className="font-bold mb-3">Components</h3>
                <ol className="space-y-2 text-sm list-decimal list-inside">
                  <li>Inlet pipe (PVC, 4-inch diameter)</li>
                  <li>Digestion chamber (sealed brick dome)</li>
                  <li>Gas storage dome (top of chamber)</li>
                  <li>Gas outlet pipe (PVC, connected to kitchen)</li>
                  <li>Outlet pit (bio-slurry collection)</li>
                  <li>Pressure gauge (safety + monitoring)</li>
                  <li>Gas stove (2-burner, included)</li>
                </ol>
              </div>

              <div className="bg-card p-6 rounded-lg border border-border mb-6">
                <h3 className="font-bold mb-3">Materials Used</h3>
                <ul className="space-y-2 text-sm">
                  <li>• Bricks: 2,500-3,000 fired clay bricks (locally sourced)</li>
                  <li>• Cement: 20-25 bags Portland cement</li>
                  <li>• PVC pipes: 4-inch diameter, various lengths</li>
                  <li>• Gas stove: Chinese-manufactured, 2-burner</li>
                  <li>• Fittings: Valves, joints, sealants</li>
                </ul>
              </div>

              <div className="bg-card p-6 rounded-lg border border-border">
                <h3 className="font-bold mb-3">Site Requirements</h3>
                <ul className="space-y-2 text-sm">
                  <li>✓ 2+ cattle or 4+ goats (waste input)</li>
                  <li>✓ Water access (well, tap, or rainwater harvest)</li>
                  <li>✓ 5m × 5m flat space (away from buildings, trees)</li>
                  <li>✓ Soil stability (clay or loam, not sandy/rocky)</li>
                  <li>✓ 15-meter maximum distance to kitchen (gas piping)</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Installation Process */}
        <section className="py-16 container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">15-Day Installation Timeline</h2>
            
            <div className="space-y-6">
              <div className="bg-card p-6 rounded-lg border-l-4 border-primary">
                <h3 className="font-bold mb-2 text-primary">DAY 1-3: Excavation & Foundation</h3>
                <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                  <li>• Site preparation (5m × 5m marked)</li>
                  <li>• Excavation (2.5m depth)</li>
                  <li>• Foundation concrete base (0.1m thickness)</li>
                  <li>• Quality checkpoint #1: Level verification</li>
                </ul>
              </div>

              <div className="bg-card p-6 rounded-lg border-l-4 border-secondary">
                <h3 className="font-bold mb-2 text-secondary">DAY 4-7: Dome Construction</h3>
                <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                  <li>• Brick laying begins (circular pattern)</li>
                  <li>• Dome shape formed (fixed-dome design)</li>
                  <li>• Cement mortar applied (waterproofing)</li>
                  <li>• Quality checkpoint #2: Structural integrity check</li>
                </ul>
              </div>

              <div className="bg-card p-6 rounded-lg border-l-4 border-accent">
                <h3 className="font-bold mb-2 text-accent">DAY 8-10: Plumbing & Gas System</h3>
                <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                  <li>• Inlet pipe installed (feeding point)</li>
                  <li>• Gas outlet pipe connected (to kitchen)</li>
                  <li>• Outlet pit constructed (bio-slurry collection)</li>
                  <li>• Pressure gauge installed</li>
                  <li>• Quality checkpoint #3: Leak test (water + pressure)</li>
                </ul>
              </div>

              <div className="bg-card p-6 rounded-lg border-l-4 border-primary">
                <h3 className="font-bold mb-2 text-primary">DAY 11-14: Initial Feeding & Activation</h3>
                <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                  <li>• First organic waste input (40 kg × 21 days startup)</li>
                  <li>• Daily feeding begins (household trained)</li>
                  <li>• Gas production monitoring (21-30 day ramp-up)</li>
                  <li>• System performance verification</li>
                </ul>
              </div>

              <div className="bg-card p-6 rounded-lg border-l-4 border-secondary">
                <h3 className="font-bold mb-2 text-secondary">DAY 15: Training & Handover</h3>
                <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                  <li>• Household training (4 hours)</li>
                  <li>• Safety procedures reviewed</li>
                  <li>• Maintenance schedule established</li>
                  <li>• Quality checkpoint #4: Final inspection</li>
                  <li>• Certificate of completion issued</li>
                  <li>• 90-day performance guarantee begins</li>
                </ul>
              </div>
            </div>

            <div className="bg-muted p-6 rounded-lg mt-8">
              <h3 className="font-bold mb-3">Ongoing: Maintenance & Support</h3>
              <ul className="text-sm space-y-1">
                <li>• Monthly check-ups by BUAK technicians</li>
                <li>• Annual desludging (remove accumulated solids)</li>
                <li>• Repairs covered (2-year warranty)</li>
                <li>• &lt;48 hour emergency response time</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Quality Assurance */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">14-Point Quality Checklist</h2>
              <p className="text-center text-muted-foreground mb-8">
                Every BUAK biodigester passes 14 quality checkpoints
              </p>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-card p-6 rounded-lg border border-border">
                  <h3 className="font-bold mb-3 text-primary">Pre-Installation (3 checks)</h3>
                  <ul className="text-sm space-y-2">
                    <li>☑ Site suitability assessment</li>
                    <li>☑ Livestock verification</li>
                    <li>☑ Household commitment interview</li>
                  </ul>
                </div>

                <div className="bg-card p-6 rounded-lg border border-border">
                  <h3 className="font-bold mb-3 text-secondary">Construction Phase (7 checks)</h3>
                  <ul className="text-sm space-y-2">
                    <li>☑ Foundation level & stability</li>
                    <li>☑ Brick quality & mortar</li>
                    <li>☑ Dome structural integrity</li>
                    <li>☑ Waterproofing completeness</li>
                    <li>☑ Inlet/outlet positioning</li>
                    <li>☑ PVC pipe connections</li>
                    <li>☑ Pressure test (24 hours)</li>
                  </ul>
                </div>

                <div className="bg-card p-6 rounded-lg border border-border">
                  <h3 className="font-bold mb-3 text-accent">Post-Installation (4 checks)</h3>
                  <ul className="text-sm space-y-2">
                    <li>☑ Gas production verification</li>
                    <li>☑ Gas stove functionality</li>
                    <li>☑ Bio-slurry output quality</li>
                    <li>☑ Household training completion</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gradient-hero text-primary-foreground p-8 rounded-lg mt-8 text-center">
                <p className="text-2xl font-bold mb-2">Result: 87.7% System Uptime</p>
                <p className="text-lg">Industry-Leading Performance</p>
              </div>

              <div className="bg-card p-6 rounded-lg border border-border mt-6">
                <h3 className="font-bold mb-3">Certified Technicians Only</h3>
                <p className="text-sm text-muted-foreground">
                  All BUAK technicians trained & certified by Biogas Solutions Uganda (5-day intensive program + exam). 
                  Ongoing skill development & peer learning.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Performance Data */}
        <section className="py-16 container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Real-World Performance</h2>
            <p className="text-center text-muted-foreground mb-8">BUAK's 73 biodigesters (2021-2025 data)</p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-card p-6 rounded-lg border border-border">
                <h3 className="text-xl font-bold mb-3 text-primary">Uptime: 87.7% average</h3>
                <ul className="text-sm space-y-2">
                  <li>├─ Target: 85% <span className="text-green-600">✅ EXCEEDS</span></li>
                  <li>├─ Industry avg: 80-85% <span className="text-green-600">✅ BETTER</span></li>
                  <li>└─ Best performer: 98% uptime</li>
                </ul>
              </div>

              <div className="bg-card p-6 rounded-lg border border-border">
                <h3 className="text-xl font-bold mb-3 text-secondary">Failure Rate: 12.3%</h3>
                <ul className="text-sm space-y-2">
                  <li>├─ Industry avg: 15-20% <span className="text-green-600">✅ BELOW</span></li>
                  <li>├─ Most common: Gas leaks (7%)</li>
                  <li>└─ Structural cracks: 5.3%</li>
                </ul>
              </div>

              <div className="bg-card p-6 rounded-lg border border-border">
                <h3 className="text-xl font-bold mb-3 text-accent">Gas Production: 2-3 m³/day</h3>
                <ul className="text-sm space-y-2">
                  <li>├─ Minimum: 1.8 m³ (dry season)</li>
                  <li>├─ Average: 2.5 m³</li>
                  <li>└─ Maximum: 3.2 m³ (optimal)</li>
                </ul>
              </div>

              <div className="bg-card p-6 rounded-lg border border-border">
                <h3 className="text-xl font-bold mb-3 text-primary">Member Satisfaction: 94%</h3>
                <ul className="text-sm space-y-2">
                  <li>├─ Very satisfied: 67%</li>
                  <li>├─ Satisfied: 27%</li>
                  <li>├─ Neutral: 4%</li>
                  <li>└─ Unsatisfied: 2% (addressed)</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Maintenance & Lifespan */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Maintenance Requirements</h2>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-card p-6 rounded-lg border border-border">
                  <h3 className="font-bold mb-3 text-primary">Daily (By Household)</h3>
                  <ul className="text-sm space-y-2">
                    <li>• Feed digester (40 kg + 40 L)</li>
                    <li>• Check gas production</li>
                    <li>• Use biogas for cooking</li>
                    <li><strong>Time: 15-20 minutes</strong></li>
                  </ul>
                </div>

                <div className="bg-card p-6 rounded-lg border border-border">
                  <h3 className="font-bold mb-3 text-secondary">Weekly (By BUAK)</h3>
                  <ul className="text-sm space-y-2">
                    <li>• Bio-slurry collection</li>
                    <li>• Visual inspection</li>
                    <li>• Member check-in</li>
                    <li><strong>Time: 30 minutes</strong></li>
                  </ul>
                </div>

                <div className="bg-card p-6 rounded-lg border border-border">
                  <h3 className="font-bold mb-3 text-accent">Monthly (By Technician)</h3>
                  <ul className="text-sm space-y-2">
                    <li>• System inspection</li>
                    <li>• Pressure test</li>
                    <li>• Gas stove maintenance</li>
                    <li>• Pipe leak check</li>
                    <li><strong>Time: 1-2 hours</strong></li>
                  </ul>
                </div>

                <div className="bg-card p-6 rounded-lg border border-border">
                  <h3 className="font-bold mb-3 text-primary">Annually (Major)</h3>
                  <ul className="text-sm space-y-2">
                    <li>• Desludging</li>
                    <li>• Structural integrity check</li>
                    <li>• Pipe replacement if worn</li>
                    <li>• Performance assessment</li>
                    <li><strong>Time: 1 full day</strong></li>
                    <li><strong>Cost: UGX 150-200K</strong></li>
                  </ul>
                </div>
              </div>

              <div className="bg-card p-6 rounded-lg border border-border">
                <h3 className="font-bold mb-3">Lifespan</h3>
                <ul className="text-sm space-y-2">
                  <li>• <strong>Digester structure:</strong> 20-25 years (with proper maintenance)</li>
                  <li>• <strong>Gas stove:</strong> 3-5 years (replaceable)</li>
                  <li>• <strong>PVC pipes:</strong> 10-15 years (replaceable)</li>
                  <li>• <strong>Total system:</strong> 20+ years (proven in field)</li>
                </ul>
              </div>

              <div className="bg-card p-6 rounded-lg border border-border mt-6">
                <h3 className="font-bold mb-3">Warranty</h3>
                <ul className="text-sm space-y-2">
                  <li>• <strong>Structural:</strong> 2 years (BUAK covers repairs)</li>
                  <li>• <strong>Performance:</strong> 90 days (gas production guarantee)</li>
                  <li>• <strong>Components:</strong> 1 year (stove, pipes, fittings)</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="py-16 container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Biodigester vs. Other Cooking Solutions</h2>

            <div className="overflow-x-auto">
              <table className="w-full bg-card border border-border rounded-lg">
                <thead className="bg-muted">
                  <tr>
                    <th className="p-4 text-left font-bold">Factor</th>
                    <th className="p-4 text-center font-bold text-primary">Biodigester (BUAK)</th>
                    <th className="p-4 text-center font-bold">Improved Cookstove</th>
                    <th className="p-4 text-center font-bold">LPG Gas</th>
                    <th className="p-4 text-center font-bold">Firewood</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  <tr className="border-t border-border">
                    <td className="p-4 font-medium">Upfront Cost</td>
                    <td className="p-4 text-center">UGX 3.5M (70% loan)</td>
                    <td className="p-4 text-center">UGX 50-150K</td>
                    <td className="p-4 text-center">UGX 100K (cylinder)</td>
                    <td className="p-4 text-center">Free (time cost)</td>
                  </tr>
                  <tr className="border-t border-border">
                    <td className="p-4 font-medium">Monthly Fuel Cost</td>
                    <td className="p-4 text-center text-green-600">UGX 0 (free gas)</td>
                    <td className="p-4 text-center">UGX 200K (wood)</td>
                    <td className="p-4 text-center">UGX 80K (refills)</td>
                    <td className="p-4 text-center">UGX 30K (time)</td>
                  </tr>
                  <tr className="border-t border-border">
                    <td className="p-4 font-medium">Lifespan</td>
                    <td className="p-4 text-center text-green-600">20+ years</td>
                    <td className="p-4 text-center">2-3 years</td>
                    <td className="p-4 text-center">Ongoing</td>
                    <td className="p-4 text-center">Ongoing</td>
                  </tr>
                  <tr className="border-t border-border">
                    <td className="p-4 font-medium">Health Impact</td>
                    <td className="p-4 text-center text-green-600">No smoke (excellent)</td>
                    <td className="p-4 text-center">30% smoke reduction</td>
                    <td className="p-4 text-center">No smoke (good)</td>
                    <td className="p-4 text-center text-red-600">Severe smoke</td>
                  </tr>
                  <tr className="border-t border-border">
                    <td className="p-4 font-medium">Time Savings</td>
                    <td className="p-4 text-center text-green-600">219 hrs/yr</td>
                    <td className="p-4 text-center">Minimal</td>
                    <td className="p-4 text-center">Minimal</td>
                    <td className="p-4 text-center text-red-600">None</td>
                  </tr>
                  <tr className="border-t border-border">
                    <td className="p-4 font-medium">Income Generation</td>
                    <td className="p-4 text-center text-green-600">Yes (bio-slurry)</td>
                    <td className="p-4 text-center">No</td>
                    <td className="p-4 text-center">No</td>
                    <td className="p-4 text-center">No</td>
                  </tr>
                  <tr className="border-t border-border">
                    <td className="p-4 font-medium">Environmental Impact</td>
                    <td className="p-4 text-center text-green-600">Highly positive</td>
                    <td className="p-4 text-center">Positive</td>
                    <td className="p-4 text-center">Neutral</td>
                    <td className="p-4 text-center text-red-600">Highly negative</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-muted p-6 rounded-lg mt-6 text-center">
              <p className="text-sm font-semibold">
                <strong>Conclusion:</strong> Biodigester offers most benefits long-term, but requires upfront investment. 
                BUAK's offtake financing solves this barrier, making it accessible.
              </p>
            </div>
          </div>
        </section>

        {/* Safety Protocols */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Safety Protocols</h2>
              <p className="text-center text-muted-foreground mb-8">
                Biogas is safe when properly designed and used. BUAK trains all members on safety procedures.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-card p-6 rounded-lg border border-border">
                  <h3 className="font-bold mb-3 text-primary">✓ Gas Leak Prevention</h3>
                  <ul className="text-sm space-y-2">
                    <li>• All connections sealed & inspected</li>
                    <li>• Pressure gauge monitored</li>
                    <li>• Monthly leak checks by technicians</li>
                    <li>• Member training on leak detection</li>
                  </ul>
                </div>

                <div className="bg-card p-6 rounded-lg border border-border">
                  <h3 className="font-bold mb-3 text-secondary">✓ Fire Safety</h3>
                  <ul className="text-sm space-y-2">
                    <li>• Gas stove positioned safely</li>
                    <li>• Ventilation required while cooking</li>
                    <li>• Fire extinguisher recommended</li>
                    <li>• Emergency shutoff valve accessible</li>
                  </ul>
                </div>

                <div className="bg-card p-6 rounded-lg border border-border">
                  <h3 className="font-bold mb-3 text-accent">✓ Structural Safety</h3>
                  <ul className="text-sm space-y-2">
                    <li>• Digester underground (no collapse risk)</li>
                    <li>• Fencing around inlet/outlet</li>
                    <li>• Regular structural inspections</li>
                  </ul>
                </div>

                <div className="bg-card p-6 rounded-lg border border-border">
                  <h3 className="font-bold mb-3 text-primary">✓ Hygiene</h3>
                  <ul className="text-sm space-y-2">
                    <li>• Inlet sealed when not feeding</li>
                    <li>• Bio-slurry handled with gloves</li>
                    <li>• Hand washing after feeding</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gradient-hero text-primary-foreground p-6 rounded-lg mt-6 text-center">
                <p className="font-bold">Safety Record: Zero serious accidents in 3 years (73 digesters)</p>
                <p className="text-sm mt-2">Minor issues (gas leaks) resolved quickly</p>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Resources */}
        <section className="py-16 container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Resources for Download</h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-card p-6 rounded-lg border border-border hover:shadow-lg transition-shadow">
                <h3 className="font-bold mb-2">📄 Technical Manual</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Comprehensive guide to construction, operation, maintenance (50 pages)
                </p>
                <Button variant="outline" size="sm">Download PDF</Button>
              </div>

              <div className="bg-card p-6 rounded-lg border border-border hover:shadow-lg transition-shadow">
                <h3 className="font-bold mb-2">📄 Installation SOPs</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Step-by-step checklist for technicians
                </p>
                <Button variant="outline" size="sm">Download PDF</Button>
              </div>

              <div className="bg-card p-6 rounded-lg border border-border hover:shadow-lg transition-shadow">
                <h3 className="font-bold mb-2">📄 Quality Assurance Checklist</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  14-point inspection form
                </p>
                <Button variant="outline" size="sm">Download PDF</Button>
              </div>

              <div className="bg-card p-6 rounded-lg border border-border hover:shadow-lg transition-shadow">
                <h3 className="font-bold mb-2">📄 Member Training Guide</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Illustrated guide (Runyoro/Luganda/English)
                </p>
                <Button variant="outline" size="sm">Download PDF</Button>
              </div>

              <div className="bg-card p-6 rounded-lg border border-border hover:shadow-lg transition-shadow">
                <h3 className="font-bold mb-2">📄 Maintenance Schedule</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Monthly/annual maintenance tracking
                </p>
                <Button variant="outline" size="sm">Download Excel</Button>
              </div>

              <div className="bg-card p-6 rounded-lg border border-border hover:shadow-lg transition-shadow">
                <h3 className="font-bold mb-2">🎥 Construction Time-Lapse</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Watch full 15-day process in 5 minutes
                </p>
                <Button variant="outline" size="sm">Watch Video</Button>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Partnerships */}
        <section className="py-16 bg-gradient-hero">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-primary-foreground mb-8">Who Validates Our Work?</h2>
              <p className="text-lg text-primary-foreground/90 mb-12">
                BUAK works with leading technical organizations
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-background/10 backdrop-blur-sm p-6 rounded-lg">
                  <h3 className="font-bold text-primary-foreground mb-2">🔧 Biogas Solutions Uganda</h3>
                  <ul className="text-sm text-primary-foreground/90 space-y-1">
                    <li>• Technician training & certification</li>
                    <li>• Quality standards adherence</li>
                    <li>• Technical troubleshooting support</li>
                  </ul>
                </div>

                <div className="bg-background/10 backdrop-blur-sm p-6 rounded-lg">
                  <h3 className="font-bold text-primary-foreground mb-2">🔬 National Domestic Biogas Programme</h3>
                  <ul className="text-sm text-primary-foreground/90 space-y-1">
                    <li>• Design specifications compliance</li>
                    <li>• Best practices alignment</li>
                  </ul>
                </div>

                <div className="bg-background/10 backdrop-blur-sm p-6 rounded-lg">
                  <h3 className="font-bold text-primary-foreground mb-2">🏆 Ashden Awards</h3>
                  <ul className="text-sm text-primary-foreground/90 space-y-1">
                    <li>• Technical due diligence (passed)</li>
                    <li>• Performance verification</li>
                  </ul>
                </div>

                <div className="bg-background/10 backdrop-blur-sm p-6 rounded-lg">
                  <h3 className="font-bold text-primary-foreground mb-2">📊 CARE International</h3>
                  <ul className="text-sm text-primary-foreground/90 space-y-1">
                    <li>• Impact assessment & data validation</li>
                    <li>• Monitoring & evaluation frameworks</li>
                  </ul>
                </div>
              </div>

              <div className="bg-background/20 backdrop-blur-sm p-6 rounded-lg mt-8 italic">
                <p className="text-primary-foreground">
                  "BUAK's technical quality is excellent. Their uptime rates exceed industry standards, 
                  and their member training is thorough."
                </p>
                <p className="text-sm text-primary-foreground/80 mt-2">
                  — Biogas Solutions Uganda Technical Director
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Technology Benefits</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center bg-card p-6 rounded-lg border border-border">
                <div className="text-4xl mb-4">🔥</div>
                <h3 className="text-xl font-bold mb-2">Clean Energy</h3>
                <p className="text-muted-foreground">No smoke, no pollution, safer cooking</p>
              </div>
              <div className="text-center bg-card p-6 rounded-lg border border-border">
                <div className="text-4xl mb-4">🌱</div>
                <h3 className="text-xl font-bold mb-2">Organic Fertilizer</h3>
                <p className="text-muted-foreground">30% yield increase for farmers</p>
              </div>
              <div className="text-center bg-card p-6 rounded-lg border border-border">
                <div className="text-4xl mb-4">💰</div>
                <h3 className="text-xl font-bold mb-2">Income Generation</h3>
                <p className="text-muted-foreground">UGX 900K-1.2M annually from bio-slurry</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Technology;