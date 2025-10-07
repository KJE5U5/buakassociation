import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const Replication = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-hero">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold text-primary-foreground mb-4">Replication Program</h1>
            <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
              Bring BUAK's proven model to your community or region
            </p>
          </div>
        </section>

        {/* Overview */}
        <section className="py-16 container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Replicate BUAK's Success</h2>
            <p className="text-lg text-muted-foreground mb-8">
              BUAK's offtake-based financing model has proven successful in Kyangwali. We're now offering a 
              comprehensive replication program for organizations, cooperatives, and governments looking to 
              implement similar biogas initiatives in their communities.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-card p-6 rounded-lg border border-border">
                <h3 className="text-xl font-bold mb-3 text-primary">What We Provide</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>✓ Complete model documentation</li>
                  <li>✓ Technical training for installers</li>
                  <li>✓ Financial systems & templates</li>
                  <li>✓ Operational procedures manual</li>
                  <li>✓ Quality control protocols</li>
                  <li>✓ Ongoing technical support</li>
                </ul>
              </div>
              <div className="bg-card p-6 rounded-lg border border-border">
                <h3 className="text-xl font-bold mb-3 text-secondary">Ideal Partners</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• NGOs in refugee-hosting areas</li>
                  <li>• Agricultural cooperatives</li>
                  <li>• Local government agencies</li>
                  <li>• Climate finance organizations</li>
                  <li>• Community development groups</li>
                  <li>• Research institutions</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Replication Process */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold mb-8 text-center">Replication Process</h2>
            <div className="space-y-6">
              {[
                { phase: "Phase 1", title: "Assessment", duration: "2 weeks", description: "Context analysis, feasibility study, partnership agreement" },
                { phase: "Phase 2", title: "Training", duration: "1 month", description: "Team training in Kyangwali, model documentation transfer" },
                { phase: "Phase 3", title: "Pilot Launch", duration: "3 months", description: "Install 10-15 pilot digesters with BUAK support" },
                { phase: "Phase 4", title: "Scale-Up", duration: "Ongoing", description: "Independent operations with BUAK advisory support" }
              ].map((item) => (
                <div key={item.phase} className="bg-card p-6 rounded-lg border border-border">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold">{item.phase}: {item.title}</h3>
                    <span className="text-sm bg-primary/10 text-primary px-3 py-1 rounded-full">{item.duration}</span>
                  </div>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Investment */}
        <section className="py-16 container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-card border border-border rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-6">Replication Package Investment</h2>
            <p className="text-muted-foreground mb-6">
              Our comprehensive replication package includes all documentation, training, and 3 months of hands-on support.
            </p>
            <div className="space-y-3 mb-6">
              <div className="flex justify-between">
                <span>Replication License & Documentation:</span>
                <span className="font-bold">$5,000</span>
              </div>
              <div className="flex justify-between">
                <span>Team Training (5-10 people):</span>
                <span className="font-bold">$3,000</span>
              </div>
              <div className="flex justify-between">
                <span>Technical Support (3 months):</span>
                <span className="font-bold">$2,000</span>
              </div>
              <div className="border-t border-border pt-3 mt-3 flex justify-between text-lg">
                <span className="font-bold">Total Investment:</span>
                <span className="font-bold text-primary">$10,000</span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground italic">
              * Flexible payment terms available for NGOs and community organizations
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-warm text-center">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-primary-foreground mb-4">Ready to Replicate?</h2>
            <p className="text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Contact us to discuss how BUAK's model can work in your context
            </p>
            <Button size="lg" variant="default" asChild className="bg-background text-foreground hover:shadow-glow">
              <a href="/contact">Start Conversation</a>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Replication;
