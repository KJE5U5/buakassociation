import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const VisitUs = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-innovation">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold text-primary-foreground mb-4">Visit BUAK</h1>
            <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
              See our biodigesters in action and meet our members
            </p>
          </div>
        </section>

        {/* Why Visit */}
        <section className="py-16 container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Why Visit BUAK?</h2>
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="text-center p-6">
                <div className="text-4xl mb-3">👀</div>
                <h3 className="text-xl font-bold mb-2">See It Work</h3>
                <p className="text-muted-foreground">Experience biodigesters operating at member households</p>
              </div>
              <div className="text-center p-6">
                <div className="text-4xl mb-3">🤝</div>
                <h3 className="text-xl font-bold mb-2">Meet Members</h3>
                <p className="text-muted-foreground">Hear firsthand stories from BUAK members</p>
              </div>
              <div className="text-center p-6">
                <div className="text-4xl mb-3">📚</div>
                <h3 className="text-xl font-bold mb-2">Learn the Model</h3>
                <p className="text-muted-foreground">Understand our innovative financing approach</p>
              </div>
            </div>

            <div className="bg-card border border-border rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-6">What to Expect</h3>
              <div className="space-y-4 text-muted-foreground">
                <div className="flex gap-3">
                  <span className="font-bold text-primary">1.</span>
                  <div>
                    <strong>Introduction & Orientation</strong>
                    <p>Overview of BUAK's mission, model, and impact at our office</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <span className="font-bold text-primary">2.</span>
                  <div>
                    <strong>Site Visits</strong>
                    <p>Visit 3-5 member households to see biodigesters in operation</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <span className="font-bold text-primary">3.</span>
                  <div>
                    <strong>Member Testimonials</strong>
                    <p>Hear directly from members about their experience</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <span className="font-bold text-primary">4.</span>
                  <div>
                    <strong>Technical Demonstration</strong>
                    <p>See bio-slurry production and quality testing process</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <span className="font-bold text-primary">5.</span>
                  <div>
                    <strong>Q&A Session</strong>
                    <p>Ask questions and discuss partnership/investment opportunities</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Logistics */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Visit Logistics</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-card p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-4">Location</h3>
                  <p className="text-muted-foreground mb-2">
                    <strong>BUAK Office</strong><br />
                    Kyangwali Refugee Settlement<br />
                    Kikuube District, Uganda
                  </p>
                  <p className="text-sm text-muted-foreground mt-4">
                    📍 Approximately 4 hours drive from Kampala
                  </p>
                </div>
                <div className="bg-card p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-4">Duration & Cost</h3>
                  <p className="text-muted-foreground">
                    <strong>Half-Day Visit:</strong> 3-4 hours<br />
                    <strong>Full-Day Visit:</strong> 6-8 hours
                  </p>
                  <p className="text-sm text-muted-foreground mt-4">
                    💰 No visit fee, but donations welcomed to support operations
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Schedule CTA */}
        <section className="py-16 text-center">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-4">Schedule Your Visit</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Contact us at least 2 weeks in advance to arrange your site visit
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button variant="hero" size="lg" asChild>
                <a href="/contact">Request Visit</a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="mailto:buakassociation@gmail.com">Email: buakassociation@gmail.com</a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default VisitUs;
