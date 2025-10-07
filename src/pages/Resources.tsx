import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const Resources = () => {
  const resources = [
    {
      category: "Reports & Studies",
      items: [
        { title: "BUAK Impact Assessment 2024", type: "PDF", size: "2.3 MB" },
        { title: "Offtake Financing Model Documentation", type: "PDF", size: "1.8 MB" },
        { title: "CARE International Evaluation Report", type: "PDF", size: "3.1 MB" }
      ]
    },
    {
      category: "Technical Guides",
      items: [
        { title: "Biodigester Installation Manual", type: "PDF", size: "4.5 MB" },
        { title: "Operations & Maintenance Guide", type: "PDF", size: "1.2 MB" },
        { title: "Bio-slurry Quality Standards", type: "PDF", size: "800 KB" }
      ]
    },
    {
      category: "Presentations",
      items: [
        { title: "BUAK Model Overview (Slides)", type: "PPT", size: "5.6 MB" },
        { title: "Ashden Award Presentation", type: "PPT", size: "8.2 MB" },
        { title: "Investment Deck 2025", type: "PDF", size: "3.4 MB" }
      ]
    },
    {
      category: "Media",
      items: [
        { title: "High-Resolution Photos", type: "ZIP", size: "45 MB" },
        { title: "BUAK Logo Pack", type: "ZIP", size: "2.1 MB" },
        { title: "Video B-Roll", type: "Link", size: "-" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-hero">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold text-primary-foreground mb-4">Resources</h1>
            <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
              Download reports, guides, and media materials
            </p>
          </div>
        </section>

        {/* Resources Grid */}
        <section className="py-16 container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            {resources.map((section) => (
              <div key={section.category} className="mb-12">
                <h2 className="text-2xl font-bold mb-6">{section.category}</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {section.items.map((item, index) => (
                    <div key={index} className="bg-card border border-border rounded-lg p-6 hover:shadow-card transition-all">
                      <h3 className="font-bold mb-2">{item.title}</h3>
                      <div className="flex justify-between items-center text-sm text-muted-foreground mb-4">
                        <span>{item.type}</span>
                        <span>{item.size}</span>
                      </div>
                      <Button variant="outline" size="sm" className="w-full">
                        Download
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-muted text-center">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-4">Need Custom Materials?</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Contact us for specific data, custom reports, or partnership materials
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

export default Resources;
