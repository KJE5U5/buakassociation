import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const MediaRoom = () => {
  const pressReleases = [
    { date: "2024-08-15", title: "BUAK Wins Ashden Climate Innovation Award 2024", link: "#" },
    { date: "2024-03-10", title: "BUAK Reaches 73 Operational Biodigesters", link: "#" },
    { date: "2023-11-20", title: "JICA Provides $25K Seed Funding to BUAK", link: "#" }
  ];

  const mediaContact = {
    name: "Robert Mugisha",
    title: "Secretary General, BUAK",
    email: "buakassociation@gmail.com",
    phone: "+256 758998928"
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className=" text-white relative h-[60vh] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(img_11.png)` }}>
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold text-primary-foreground mb-4">Media Room</h1>
            <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
              Press resources, media kit, and BUAK's story
            </p>
          </div>
        </section>

        {/* Press Releases */}
        <section className="py-16 container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Press Releases</h2>
            <div className="space-y-4">
              {pressReleases.map((release) => (
                <div key={release.date} className="bg-card border border-border rounded-lg p-6 hover:shadow-card transition-all">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-sm text-muted-foreground mb-2">{release.date}</p>
                      <h3 className="text-xl font-bold mb-2">{release.title}</h3>
                    </div>
                    <Button variant="outline" size="sm" asChild>
                      <a href={release.link}>Read More</a>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Media Kit */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold mb-8 text-center">Media Kit</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-card p-6 rounded-lg border border-border">
                <h3 className="text-xl font-bold mb-3">Quick Facts</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Founded: 2021</li>
                  <li>• Location: Kyangwali, Uganda</li>
                  <li>• Members: 69 (35 refugees, 34 host)</li>
                  <li>• Digesters: 73 operational</li>
                  <li>• Award: Ashden 2024</li>
                </ul>
              </div>
              <div className="bg-card p-6 rounded-lg border border-border">
                <h3 className="text-xl font-bold mb-3">Downloads</h3>
                <div className="space-y-3">
                  <Button variant="outline" className="w-full justify-start">📄 Fact Sheet (PDF)</Button>
                  <Button variant="outline" className="w-full justify-start">📸 High-Res Photos (ZIP)</Button>
                  <Button variant="outline" className="w-full justify-start">🎥 Video B-Roll (Link)</Button>
                  <Button variant="outline" className="w-full justify-start">📊 Logo Pack (ZIP)</Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Media Contact */}
        <section className="py-16 container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Media Contact</h2>
            <div className="bg-card border border-border rounded-lg p-8">
              <h3 className="text-xl font-bold mb-2">{mediaContact.name}</h3>
              <p className="text-muted-foreground mb-4">{mediaContact.title}</p>
              <div className="space-y-2">
                <p>📧 <a href={`mailto:${mediaContact.email}`} className="text-primary hover:underline">{mediaContact.email}</a></p>
                <p>📱 <a href={`tel:${mediaContact.phone}`} className="text-primary hover:underline">{mediaContact.phone}</a></p>
              </div>
              <Button variant="hero" className="mt-6" asChild>
                <a href="/contact">Request Interview</a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default MediaRoom;
