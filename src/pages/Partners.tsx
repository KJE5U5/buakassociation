import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Partners = () => {
  const partners = [
    {
      name: "Ashden Awards",
      role: "Global recognition & platform",
      description: "2024 Climate Innovation Award winner - First refugee-led biogas cooperative in East Africa"
    },
    {
      name: "CARE International",
      role: "Impact assessment & technical support",
      description: "Supporting BUAK's growth with monitoring and evaluation frameworks"
    },
    {
      name: "UNHCR",
      role: "Policy support & advocacy",
      description: "Refugee inclusion advocacy and policy engagement"
    },
    {
      name: "JICA",
      role: "Seed funding",
      description: "$25,000 seed funding in 2023 for initial expansion"
    },
    {
      name: "Biogas Solutions Uganda",
      role: "Technical training",
      description: "Training and certification for BUAK technicians"
    },
    {
      name: "The Hummingbird Effect Alliance",
      role: "Strategic support",
      description: "Network connections and strategic guidance"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-hero">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold text-primary-foreground mb-4">Our Partners</h1>
            <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
              BUAK's success is built on strong collaborative partnerships
            </p>
          </div>
        </section>

        {/* Partners Grid */}
        <section className="py-16 container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {partners.map((partner) => (
              <div key={partner.name} className="bg-card border border-border rounded-lg p-6 shadow-card hover:shadow-glow transition-all">
                <h3 className="text-xl font-bold mb-2">{partner.name}</h3>
                <p className="text-primary font-medium mb-3">{partner.role}</p>
                <p className="text-muted-foreground">{partner.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Partnership CTA */}
        <section className="py-16 bg-gradient-warm text-center">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-primary-foreground mb-4">Become a Partner</h2>
            <p className="text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Join us in scaling refugee-led clean energy innovation across East Africa
            </p>
            <a href="/work-with-us" className="inline-block bg-background text-foreground px-8 py-3 rounded-md font-medium hover:shadow-glow transition-all">
              Partner With Us
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Partners;
