import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const OurTeam = () => {
  const leadershipTeam = [
    {
      name: "Sarah Ninsiima",
      role: "Chairperson",
      background: "South Sudanese refugee, 8 years in Kyangwali. Mother of 6. Former firewood collector, now cooperative leader.",
      responsibilities: "Strategic leadership, community mobilization, external relations, Ashden liaison",
      achievement: "Led BUAK from 2 to 73 digesters. Ashden Award acceptance speech. Women's empowerment champion.",
      quote: "BUAK gave me dignity. I'm not a beneficiary—I'm an entrepreneur leading change.",
      email: "sarah@buak-uganda.org",
      image: "/placeholder.svg"
    },
    {
      name: "Robert Mugisha",
      role: "Secretary General",
      background: "Agricultural engineer, biogas specialist. 10+ years experience in renewable energy sector.",
      responsibilities: "Technical operations, quality assurance, team management, partnership coordination",
      achievement: "87.7% system uptime (industry-leading). Trained 4 refugee technicians. Standardized installation process.",
      quote: "Refugees don't need charity. They need opportunity. BUAK creates that.",
      email: "robert@buak-uganda.org",
      phone: "+256 758998928",
      image: "/placeholder.svg"
    },
    {
      name: "Ahmed Jibril",
      role: "Treasurer",
      background: "Certified accountant with microfinance experience. Host community member.",
      responsibilities: "Financial management, loan tracking, member credit, reporting, audits",
      achievement: "95% repayment rate achieved. Clean financial records (3 years). Transparent accounting systems.",
      quote: "Transparency builds trust. Every shilling is accounted for. Our members see the books.",
      email: "ahmed@buak-uganda.org",
      image: "/placeholder.svg"
    },
    {
      name: "Grace Atim",
      role: "Vice Chairperson (Women's Representative)",
      background: "Host community farmer, women's group leader. 15+ years community organizing experience.",
      responsibilities: "Women's inclusion, gender mainstreaming, refugee-host integration, community relations",
      achievement: "Increased women membership to 35%. Facilitated refugee-host collaboration.",
      quote: "I used to be skeptical about refugees. BUAK showed me we're stronger together.",
      image: "/placeholder.svg"
    }
  ];

  const operationalTeam = {
    technicians: [
      { name: "John K.", role: "Lead Technician", origin: "Refugee", experience: "3 years" },
      { name: "Peter M.", role: "Senior Technician", origin: "Host Community", experience: "2 years" },
      { name: "Daniel A.", role: "Senior Technician", origin: "Refugee", experience: "2 years" },
      { name: "Moses O.", role: "Technician", origin: "Refugee", experience: "1 year" }
    ],
    collectors: 8,
    admin: [
      { name: "Jane N.", role: "Office Manager" },
      { name: "David M.", role: "Data Clerk" }
    ]
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className=" text-white relative h-[60vh] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(img_11.png)` }}>
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold text-primary-foreground mb-4">Meet Our Team</h1>
            <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
              69 Members | Refugee-Led | Democratically Governed
            </p>
          </div>
        </section>

        {/* Leadership Philosophy */}
        <section className="py-16 container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Refugee-Led Innovation</h2>
            <p className="text-lg text-muted-foreground mb-8 text-center">
              At BUAK, refugees aren't beneficiaries—they're leaders, entrepreneurs, and decision-makers. 
              Our 69-member cooperative is democratically governed, with an 11-member Executive Committee elected by members.
            </p>
            <p className="text-xl font-semibold text-center text-primary mb-12">
              This isn't top-down aid. This is bottom-up entrepreneurship.
            </p>
            
            <div className="bg-muted p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-6 text-center">Governance Structure</h3>
              <div className="space-y-4 text-center">
                <div className="bg-background p-4 rounded-lg">
                  <p className="font-semibold text-lg">General Assembly (69 members)</p>
                  <p className="text-sm text-muted-foreground">Meets quarterly • One member, one vote</p>
                </div>
                <div className="flex justify-center">
                  <div className="w-0.5 h-8 bg-border"></div>
                </div>
                <div className="bg-background p-4 rounded-lg">
                  <p className="font-semibold text-lg">Executive Committee (11 elected)</p>
                  <p className="text-sm text-muted-foreground">Meets monthly • Implements decisions</p>
                </div>
                <div className="flex justify-center">
                  <div className="w-0.5 h-8 bg-border"></div>
                </div>
                <div className="grid md:grid-cols-4 gap-4">
                  <div className="bg-background p-3 rounded">
                    <p className="font-medium text-sm">Technical Committee</p>
                  </div>
                  <div className="bg-background p-3 rounded">
                    <p className="font-medium text-sm">Finance Committee</p>
                  </div>
                  <div className="bg-background p-3 rounded">
                    <p className="font-medium text-sm">Marketing Committee</p>
                  </div>
                  <div className="bg-background p-3 rounded">
                    <p className="font-medium text-sm">M&E Committee</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Executive Committee */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-4">Executive Committee</h2>
            <p className="text-center text-muted-foreground mb-12">(11 Elected Members)</p>
            
            <div className="max-w-4xl mx-auto space-y-8">
              {leadershipTeam.map((member) => (
                <div key={member.name} className="bg-card rounded-lg p-8 shadow-card border border-border">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="w-32 h-32 rounded-full bg-muted flex-shrink-0 mx-auto md:mx-0 flex items-center justify-center text-4xl font-bold text-primary">
                      {member.name.charAt(0)}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-1">{member.name}</h3>
                      <p className="text-primary font-semibold mb-4">{member.role}</p>
                      
                      <div className="space-y-3">
                        <div>
                          <p className="font-semibold text-sm text-muted-foreground mb-1">Background</p>
                          <p className="text-sm">{member.background}</p>
                        </div>
                        
                        <div>
                          <p className="font-semibold text-sm text-muted-foreground mb-1">Role & Responsibilities</p>
                          <p className="text-sm">{member.responsibilities}</p>
                        </div>
                        
                        <div>
                          <p className="font-semibold text-sm text-muted-foreground mb-1">Key Achievement</p>
                          <p className="text-sm">{member.achievement}</p>
                        </div>
                        
                        <div className="bg-muted p-3 rounded italic border-l-4 border-primary">
                          <p className="text-sm">"{member.quote}"</p>
                        </div>
                        
                        <div className="flex flex-wrap gap-3 text-sm">
                          <a href={`mailto:${member.email}`} className="text-primary hover:underline">
                            📧 {member.email}
                          </a>
                          {member.phone && (
                            <span className="text-muted-foreground">📱 {member.phone}</span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Operational Team */}
        <section className="py-16 container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Operational Team</h2>
            
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-6">Certified Technicians (4)</h3>
              <div className="grid md:grid-cols-4 gap-6 mb-6">
                {operationalTeam.technicians.map((tech) => (
                  <div key={tech.name} className="bg-card p-6 rounded-lg border border-border text-center">
                    <div className="w-20 h-20 rounded-full bg-muted mx-auto mb-3 flex items-center justify-center text-2xl font-bold text-primary">
                      {tech.name.charAt(0)}
                    </div>
                    <h4 className="font-bold mb-1">{tech.name}</h4>
                    <p className="text-sm text-primary mb-2">{tech.role}</p>
                    <p className="text-xs text-muted-foreground">{tech.origin}</p>
                    <p className="text-xs text-muted-foreground">{tech.experience}</p>
                  </div>
                ))}
              </div>
              <div className="bg-muted p-4 rounded-lg space-y-2 text-sm">
                <p><strong>Training:</strong> Certified by Biogas Solutions Uganda</p>
                <p><strong>Capacity:</strong> Each manages 15-20 digesters</p>
                <p><strong>Responsibilities:</strong> Installation, maintenance, repairs</p>
              </div>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-4">Bio-slurry Collectors ({operationalTeam.collectors})</h3>
              <div className="bg-card p-6 rounded-lg border border-border">
                <p className="mb-2">2 collectors per cluster (4 clusters)</p>
                <p className="text-sm text-muted-foreground">
                  <strong>Responsibilities:</strong> Weekly collection, quality checks, member payments, route optimization
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4">Administrative Staff (2)</h3>
              <div className="space-y-3">
                {operationalTeam.admin.map((staff) => (
                  <div key={staff.name} className="bg-card p-4 rounded-lg border border-border">
                    <p className="font-semibold">{staff.name}</p>
                    <p className="text-sm text-muted-foreground">{staff.role}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Membership Demographics */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Our 69 Members</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              <div className="bg-card p-6 rounded-lg border border-border">
                <h3 className="text-xl font-bold mb-4">Origin</h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <p className="font-semibold text-2xl text-primary">35</p>
                    <p className="text-muted-foreground">Refugees (51%)</p>
                    <ul className="mt-2 space-y-1 text-xs ml-4">
                      <li>• South Sudan: 22</li>
                      <li>• DRC: 9</li>
                      <li>• Other: 4</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold text-2xl text-secondary">34</p>
                    <p className="text-muted-foreground">Host Community (49%)</p>
                  </div>
                </div>
              </div>

              <div className="bg-card p-6 rounded-lg border border-border">
                <h3 className="text-xl font-bold mb-4">Gender</h3>
                <div className="space-y-3">
                  <div>
                    <p className="font-semibold text-2xl text-primary">45</p>
                    <p className="text-muted-foreground">Men (65%)</p>
                  </div>
                  <div>
                    <p className="font-semibold text-2xl text-secondary">24</p>
                    <p className="text-muted-foreground">Women (35%)</p>
                  </div>
                </div>
              </div>

              <div className="bg-card p-6 rounded-lg border border-border">
                <h3 className="text-xl font-bold mb-4">Age Distribution</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>18-30:</span>
                    <span className="font-semibold">18</span>
                  </div>
                  <div className="flex justify-between">
                    <span>31-50:</span>
                    <span className="font-semibold">39</span>
                  </div>
                  <div className="flex justify-between">
                    <span>51+:</span>
                    <span className="font-semibold">12</span>
                  </div>
                </div>
              </div>

              <div className="bg-card p-6 rounded-lg border border-border">
                <h3 className="text-xl font-bold mb-4">Education</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Primary:</span>
                    <span className="font-semibold">34</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Secondary:</span>
                    <span className="font-semibold">28</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Tertiary:</span>
                    <span className="font-semibold">7</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="max-w-4xl mx-auto mt-12 grid md:grid-cols-2 gap-8">
              <div className="bg-card p-6 rounded-lg border border-border">
                <h3 className="text-xl font-bold mb-3">Livelihoods</h3>
                <ul className="space-y-1 text-sm">
                  <li>• Livestock farmers: 58</li>
                  <li>• Crop farmers: 11</li>
                  <li>• Mixed farming: 69</li>
                </ul>
              </div>

              <div className="bg-card p-6 rounded-lg border border-border">
                <h3 className="text-xl font-bold mb-3">Languages Spoken</h3>
                <p className="text-sm text-muted-foreground">
                  Runyoro, Luganda, English, Arabic, Swahili, French, Lingala, Juba Arabic
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Governance & Accountability */}
        <section className="py-16 container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Democratic Governance in Action</h2>
            
            <div className="space-y-8">
              <div className="bg-card p-6 rounded-lg border border-border">
                <h3 className="text-xl font-bold mb-4 text-primary">How Decisions Are Made</h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-2">✓ General Assembly (69 members)</h4>
                    <ul className="ml-6 space-y-1 text-sm text-muted-foreground">
                      <li>• Meets quarterly</li>
                      <li>• All major decisions voted on</li>
                      <li>• One member, one vote</li>
                      <li>• Financial reports presented</li>
                      <li>• Strategic direction set</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">✓ Executive Committee (11 elected members)</h4>
                    <ul className="ml-6 space-y-1 text-sm text-muted-foreground">
                      <li>• Meets monthly</li>
                      <li>• Implements Assembly decisions</li>
                      <li>• Day-to-day operations</li>
                      <li>• Reports to Assembly</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">✓ Standing Committees (4)</h4>
                    <ul className="ml-6 space-y-1 text-sm text-muted-foreground">
                      <li>• Technical: Quality control, installations</li>
                      <li>• Finance: Budget, audits, loan tracking</li>
                      <li>• Marketing: Sales, customer relationships</li>
                      <li>• M&E: Impact tracking, reporting</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-card p-6 rounded-lg border border-border">
                <h3 className="text-xl font-bold mb-4 text-secondary">Accountability Mechanisms</h3>
                <ul className="space-y-2 text-sm">
                  <li>• Annual external audit (certified accountant)</li>
                  <li>• Quarterly financial reports to members</li>
                  <li>• Monthly Executive Committee minutes (published)</li>
                  <li>• Open book policy (members can review finances anytime)</li>
                  <li>• Complaint mechanism (anonymous suggestion box)</li>
                  <li>• Regular member satisfaction surveys</li>
                </ul>
              </div>

              <div className="bg-card p-6 rounded-lg border border-border">
                <h3 className="text-xl font-bold mb-4 text-accent">Elections</h3>
                <ul className="space-y-2 text-sm">
                  <li>• Every 2 years</li>
                  <li>• Secret ballot</li>
                  <li>• All members eligible to run</li>
                  <li>• Term limits: 2 consecutive terms maximum</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Join the Team */}
        <section className="py-16 bg-gradient-hero">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-primary-foreground mb-6">Want to Join Our Team?</h2>
            <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto mb-8">
              We're always looking for passionate people to grow with us.
            </p>
            
            <div className="max-w-3xl mx-auto bg-background/10 backdrop-blur-sm p-8 rounded-lg mb-8">
              <h3 className="text-xl font-semibold text-primary-foreground mb-4">Current Opportunities:</h3>
              <ul className="text-primary-foreground/90 space-y-2 mb-6">
                <li>• Become a BUAK Member (if you're in Kyangwali)</li>
                <li>• Join as Communications Officer (part-time)</li>
                <li>• Train as Biodigester Technician (paid training)</li>
              </ul>
              
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" variant="secondary">View Open Positions</Button>
                <Button size="lg" variant="outline" className="bg-background/20 hover:bg-background/30">
                  Apply to Join BUAK
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default OurTeam;
