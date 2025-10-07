import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const AshdenAward = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-hero">
          <div className="container mx-auto px-4 text-center">
            <div className="text-6xl mb-4">🏆</div>
            <h1 className="text-5xl font-bold text-primary-foreground mb-4">Ashden Award Winner 2024</h1>
            <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
              First refugee-led biogas cooperative in East Africa to receive global recognition
            </p>
          </div>
        </section>

        {/* Award Details */}
        <section className="py-16 container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">What This Award Means</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-muted-foreground mb-6">
                In 2024, BUAK Bio-Energy Umbrella Association received the prestigious Ashden Climate Innovation Award, 
                recognizing our groundbreaking work as East Africa's first refugee-led biogas cooperative.
              </p>
              
              <h3 className="text-2xl font-bold mt-8 mb-4">Why BUAK Won</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li>✓ Innovative offtake-based financing model making biogas affordable for refugees</li>
                <li>✓ 73 biodigesters operational with 95% repayment rate</li>
                <li>✓ 94% member satisfaction demonstrating community impact</li>
                <li>✓ Refugee-led, community-owned approach ensuring sustainability</li>
                <li>✓ Proven circular economy model turning waste into wealth</li>
              </ul>

              <h3 className="text-2xl font-bold mt-8 mb-4">The Impact of Recognition</h3>
              <p className="text-muted-foreground mb-4">
                This award validates that refugee-led innovation can drive climate action, economic empowerment, 
                and community transformation simultaneously. It's not charity—it's entrepreneurship at its finest.
              </p>
            </div>
          </div>
        </section>

        {/* Quote Section */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4 text-center max-w-3xl">
            <blockquote className="text-2xl italic text-foreground mb-4">
              "This award isn't just for BUAK—it's for every refugee who's been told they can't lead innovation. 
              We're proving that refugees are entrepreneurs, not beneficiaries."
            </blockquote>
            <p className="text-primary font-medium">— Sarah Ninsiima, BUAK Chairperson</p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AshdenAward;
