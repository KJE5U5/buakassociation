import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Technology = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-innovation">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold text-primary-foreground mb-4">Biodigester Technology</h1>
            <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
              Fixed-dome biodigesters turning animal waste into clean energy and organic fertilizer
            </p>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16 container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">How Biodigesters Work</h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-card p-6 rounded-lg border border-border">
                <h3 className="text-xl font-bold mb-3 text-primary">Input</h3>
                <p className="text-muted-foreground">Animal waste (cow dung) mixed with water enters the digester daily</p>
              </div>
              <div className="bg-card p-6 rounded-lg border border-border">
                <h3 className="text-xl font-bold mb-3 text-primary">Anaerobic Digestion</h3>
                <p className="text-muted-foreground">Bacteria break down organic matter in oxygen-free environment</p>
              </div>
              <div className="bg-card p-6 rounded-lg border border-border">
                <h3 className="text-xl font-bold mb-3 text-secondary">Output 1: Biogas</h3>
                <p className="text-muted-foreground">Methane-rich gas piped directly to kitchen for cooking</p>
              </div>
              <div className="bg-card p-6 rounded-lg border border-border">
                <h3 className="text-xl font-bold mb-3 text-secondary">Output 2: Bio-slurry</h3>
                <p className="text-muted-foreground">Nutrient-rich organic fertilizer sold to local farmers</p>
              </div>
            </div>

            <h3 className="text-2xl font-bold mb-6">Technical Specifications</h3>
            <div className="bg-muted p-6 rounded-lg">
              <ul className="space-y-3 text-muted-foreground">
                <li><strong>Type:</strong> Fixed-dome biodigester (Chinese model)</li>
                <li><strong>Size:</strong> 6m³ capacity (standard household)</li>
                <li><strong>Requirements:</strong> 2+ cattle, water access, 5m x 5m space</li>
                <li><strong>Daily Input:</strong> 40-50 kg animal waste + water</li>
                <li><strong>Gas Production:</strong> 1.5-2 m³ biogas daily (4-6 hours cooking)</li>
                <li><strong>Bio-slurry Output:</strong> 40-50 kg daily (high-quality fertilizer)</li>
                <li><strong>Construction Time:</strong> 15 days</li>
                <li><strong>Lifespan:</strong> 20+ years with proper maintenance</li>
                <li><strong>Uptime Rate:</strong> 87.7% (BUAK average)</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 bg-gradient-hero">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-primary-foreground">Technology Benefits</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="text-center">
                <div className="text-4xl mb-4">🔥</div>
                <h3 className="text-xl font-bold text-primary-foreground mb-2">Clean Energy</h3>
                <p className="text-primary-foreground/90">No smoke, no pollution, safer cooking</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">🌱</div>
                <h3 className="text-xl font-bold text-primary-foreground mb-2">Organic Fertilizer</h3>
                <p className="text-primary-foreground/90">30% yield increase for farmers</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">💰</div>
                <h3 className="text-xl font-bold text-primary-foreground mb-2">Income Generation</h3>
                <p className="text-primary-foreground/90">UGX 900K-1.2M annually from bio-slurry</p>
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
