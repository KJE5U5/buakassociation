import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const JoinUs = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-hero">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold text-primary-foreground mb-4">Join BUAK</h1>
            <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
              Become a member and transform your household with clean energy
            </p>
          </div>
        </section>

        {/* Eligibility */}
        <section className="py-16 container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Are You Eligible?</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-card p-6 rounded-lg border border-border">
                <h3 className="text-xl font-bold mb-3 text-primary">✓ Requirements</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Own 2 or more cattle</li>
                  <li>• Access to water source</li>
                  <li>• 5m x 5m space available</li>
                  <li>• Kyangwali resident (refugee or host community)</li>
                  <li>• Commitment to daily digester feeding</li>
                </ul>
              </div>
              <div className="bg-card p-6 rounded-lg border border-border">
                <h3 className="text-xl font-bold mb-3 text-secondary">✓ What You Get</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Clean cooking gas daily</li>
                  <li>• Income from bio-slurry sales</li>
                  <li>• No cash upfront required</li>
                  <li>• Free training & maintenance</li>
                  <li>• Cooperative membership benefits</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold mb-8 text-center">Joining Process</h2>
            <div className="space-y-6">
              {[
                { step: 1, title: "Apply", description: "Contact BUAK or visit our office in Kyangwali" },
                { step: 2, title: "Assessment", description: "Our team visits your home to verify eligibility" },
                { step: 3, title: "Contribute", description: "Provide 30% contribution (materials & labor, no cash)" },
                { step: 4, title: "Installation", description: "Your biodigester is built in 15 days" },
                { step: 5, title: "Training", description: "Learn how to operate and maintain your digester" },
                { step: 6, title: "Start Earning", description: "Begin using biogas and selling bio-slurry" }
              ].map((item) => (
                <div key={item.step} className="flex gap-4 bg-card p-6 rounded-lg border border-border">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-xl">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 text-center">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-4">Ready to Join?</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Contact us today to start your journey towards clean energy and economic empowerment
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button variant="hero" size="lg" asChild>
                <a href="/contact">Apply Now</a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="tel:+256758998928">Call: +256 758998928</a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default JoinUs;
