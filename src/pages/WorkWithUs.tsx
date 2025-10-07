import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const WorkWithUs = () => {
  const opportunities = [
    {
      title: "Replication Program",
      description: "License BUAK's model for your region with full training and support",
      link: "/work-with-us/replication",
      icon: "🌍"
    },
    {
      title: "Technical Partnership",
      description: "Collaborate on biogas innovation and technology improvements",
      link: "/contact",
      icon: "🔧"
    },
    {
      title: "Research Collaboration",
      description: "Partner on impact studies and academic research",
      link: "/contact",
      icon: "📊"
    },
    {
      title: "Funding Partnership",
      description: "Support BUAK's growth through grants or impact investment",
      link: "/invest",
      icon: "💰"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-innovation">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold text-primary-foreground mb-4">Work With Us</h1>
            <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
              Partner with BUAK to scale refugee-led clean energy innovation across East Africa
            </p>
          </div>
        </section>

        {/* Partnership Opportunities */}
        <section className="py-16 container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Partnership Opportunities</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {opportunities.map((opp) => (
                <div key={opp.title} className="bg-card border border-border rounded-lg p-6 hover:shadow-glow transition-all">
                  <div className="text-4xl mb-4">{opp.icon}</div>
                  <h3 className="text-xl font-bold mb-3">{opp.title}</h3>
                  <p className="text-muted-foreground mb-4">{opp.description}</p>
                  <Button variant="outline" asChild>
                    <a href={opp.link}>Learn More →</a>
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Partner */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold mb-8 text-center">Why Partner With BUAK?</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-primary mb-2">3 Years</h3>
                <p className="text-muted-foreground">Proven track record</p>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold text-primary mb-2">95%</h3>
                <p className="text-muted-foreground">Repayment rate</p>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold text-primary mb-2">🏆</h3>
                <p className="text-muted-foreground">Ashden Award Winner</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 text-center">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-4">Let's Collaborate</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Reach out to discuss partnership opportunities
            </p>
            <Button variant="hero" size="lg" asChild>
              <a href="/contact">Contact Us</a>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default WorkWithUs;
