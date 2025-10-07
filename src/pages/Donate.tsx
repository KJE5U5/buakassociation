import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const Donate = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-warm">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold text-primary-foreground mb-4">Support BUAK</h1>
            <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
              Your donation helps refugee families access clean energy and economic opportunity
            </p>
          </div>
        </section>

        {/* Impact of Donations */}
        <section className="py-16 container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Your Impact</h2>
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-card border border-border rounded-lg p-6 text-center">
                <h3 className="text-2xl font-bold text-primary mb-2">$100</h3>
                <p className="text-muted-foreground">Trains one new biogas technician</p>
              </div>
              <div className="bg-card border border-border rounded-lg p-6 text-center">
                <h3 className="text-2xl font-bold text-primary mb-2">$500</h3>
                <p className="text-muted-foreground">Provides tools and equipment for installations</p>
              </div>
              <div className="bg-card border border-border rounded-lg p-6 text-center">
                <h3 className="text-2xl font-bold text-primary mb-2">$2,450</h3>
                <p className="text-muted-foreground">Finances one complete biodigester for a family</p>
              </div>
            </div>

            <div className="bg-muted p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Why Donate to BUAK?</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li>✓ <strong>Proven Impact:</strong> 73 biodigesters, 3 years track record, 94% satisfaction</li>
                <li>✓ <strong>Sustainable Model:</strong> Your donation creates a revolving fund that helps multiple families</li>
                <li>✓ <strong>Refugee-Led:</strong> Support entrepreneurship, not charity</li>
                <li>✓ <strong>Climate Action:</strong> 500,975 kg firewood saved annually</li>
                <li>✓ <strong>Economic Empowerment:</strong> Members earn UGX 900K-1.2M annually</li>
              </ul>
            </div>
          </div>
        </section>

        {/* How to Donate */}
        <section className="py-16 bg-card">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">How to Donate</h2>
              <p className="text-muted-foreground mb-8">
                Contact us directly to make a donation. We accept bank transfers and mobile money.
              </p>
              <div className="space-y-4">
                <Button variant="hero" size="lg" className="w-full md:w-auto" asChild>
                  <a href="mailto:buakassociation@gmail.com">Email: buakassociation@gmail.com</a>
                </Button>
                <br />
                <Button variant="outline" size="lg" className="w-full md:w-auto" asChild>
                  <a href="tel:+256758998928">Call: +256 758998928</a>
                </Button>
              </div>
              <p className="text-sm text-muted-foreground mt-8">
                🏆 BUAK is an Ashden Award Winner 2024 - your donation supports globally recognized impact
              </p>
            </div>
          </div>
        </section>

        {/* Alternative: Impact Investment */}
        <section className="py-16 container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Prefer Impact Investment?</h2>
            <p className="text-muted-foreground mb-8">
              If you'd like financial returns alongside social impact, explore BUAK's investment opportunity
            </p>
            <Button variant="outline" size="lg" asChild>
              <a href="/invest">View Investment Opportunity →</a>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Donate;
