import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const Careers = () => {
  const openings = [
    {
      title: "Biogas Technician",
      type: "Full-time",
      location: "Kyangwali, Uganda",
      description: "Install and maintain biodigesters, train members on operations.",
      requirements: ["Biogas/plumbing experience", "Motorcycle license", "English & local languages"]
    },
    {
      title: "Community Mobilizer",
      type: "Full-time",
      location: "Kyangwali, Uganda",
      description: "Recruit new members, conduct outreach, provide ongoing member support.",
      requirements: ["Community development experience", "Refugee/host community knowledge", "Strong communication"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-innovation">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold text-primary-foreground mb-4">Careers at BUAK</h1>
            <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
              Join a team changing lives through clean energy innovation
            </p>
          </div>
        </section>

        {/* Why Work at BUAK */}
        <section className="py-16 container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">Why Work at BUAK?</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6">
                <div className="text-4xl mb-3">🌍</div>
                <h3 className="text-xl font-bold mb-2">Real Impact</h3>
                <p className="text-muted-foreground">Every day, you help families access clean energy</p>
              </div>
              <div className="p-6">
                <div className="text-4xl mb-3">📈</div>
                <h3 className="text-xl font-bold mb-2">Growth</h3>
                <p className="text-muted-foreground">Be part of scaling from 73 to 300+ digesters</p>
              </div>
              <div className="p-6">
                <div className="text-4xl mb-3">🤝</div>
                <h3 className="text-xl font-bold mb-2">Community</h3>
                <p className="text-muted-foreground">Work alongside refugee entrepreneurs</p>
              </div>
            </div>
          </div>

          {/* Open Positions */}
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Open Positions</h2>
            {openings.length > 0 ? (
              <div className="space-y-6">
                {openings.map((job, index) => (
                  <div key={index} className="bg-card border border-border rounded-lg p-6">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                      <div>
                        <h3 className="text-xl font-bold mb-2">{job.title}</h3>
                        <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                          <span>📋 {job.type}</span>
                          <span>📍 {job.location}</span>
                        </div>
                      </div>
                      <Button variant="hero" asChild>
                        <a href="/contact">Apply Now</a>
                      </Button>
                    </div>
                    <p className="text-muted-foreground mb-3">{job.description}</p>
                    <div>
                      <strong className="text-sm">Requirements:</strong>
                      <ul className="list-disc list-inside text-sm text-muted-foreground mt-2">
                        {job.requirements.map((req, i) => (
                          <li key={i}>{req}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-muted p-12 rounded-lg text-center">
                <p className="text-lg text-muted-foreground mb-4">No open positions at this time</p>
                <p className="text-sm text-muted-foreground">Check back soon or send us your resume for future opportunities</p>
              </div>
            )}
          </div>
        </section>

        {/* General Application */}
        <section className="py-16 bg-muted text-center">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-4">Don't See Your Role?</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Send us your CV. We're always looking for talented, mission-driven individuals.
            </p>
            <Button variant="hero" size="lg" asChild>
              <a href="mailto:buakassociation@gmail.com">Email Your CV</a>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Careers;
