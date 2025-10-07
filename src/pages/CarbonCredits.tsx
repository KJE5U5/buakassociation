import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const CarbonCredits = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-innovation">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold text-primary-foreground mb-4">Carbon Credits Program</h1>
            <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
              Monetizing BUAK's climate impact through verified carbon credits
            </p>
          </div>
        </section>

        {/* Overview */}
        <section className="py-16 container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Carbon Credit Opportunity</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Each biodigester BUAK installs prevents significant CO₂ emissions by replacing firewood with clean biogas. 
              This measurable climate impact can be certified and sold as carbon credits, creating an additional revenue 
              stream for BUAK and its members.
            </p>

            <div className="bg-card border border-border rounded-lg p-8 mb-8">
              <h3 className="text-2xl font-bold mb-6 text-primary">Estimated Carbon Impact</h3>
              <div className="space-y-4">
                <div className="flex justify-between border-b border-border pb-3">
                  <span className="font-medium">CO₂ Avoided per Digester/Year:</span>
                  <span className="font-bold">3-4 tonnes</span>
                </div>
                <div className="flex justify-between border-b border-border pb-3">
                  <span className="font-medium">Total CO₂ Avoided (73 digesters):</span>
                  <span className="font-bold">219-292 tonnes/year</span>
                </div>
                <div className="flex justify-between border-b border-border pb-3">
                  <span className="font-medium">Potential at 300 Digesters:</span>
                  <span className="font-bold text-primary">900-1,200 tonnes/year</span>
                </div>
                <div className="flex justify-between pt-3">
                  <span className="font-medium">Estimated Revenue (at $10/tonne):</span>
                  <span className="font-bold text-secondary">$9,000-$12,000 annually</span>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold mb-6 mt-12">Verification Process</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                BUAK is exploring partnerships with carbon credit verification standards such as Gold Standard or 
                Verified Carbon Standard (VCS) to certify emissions reductions.
              </p>
              <p className="font-medium">Next Steps:</p>
              <ul className="space-y-2 pl-6">
                <li>✓ Baseline emissions assessment (in progress)</li>
                <li>✓ Monitoring methodology development</li>
                <li>✓ Third-party verification partnership</li>
                <li>✓ Carbon credit issuance and sales</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-gradient-warm text-center">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-primary-foreground mb-4">Interested in BUAK's Carbon Credits?</h2>
            <p className="text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Partner with us to support verified climate impact while empowering refugee communities
            </p>
            <a href="/contact" className="inline-block bg-background text-foreground px-8 py-3 rounded-md font-medium hover:shadow-glow transition-all">
              Contact Us
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CarbonCredits;
