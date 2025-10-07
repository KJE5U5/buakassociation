import { Card } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import cookingImage from "@/assets/cooking-biogas.jpg";
import { Quote } from "lucide-react";

const Stories = () => {
  const stories = [
    {
      name: "Sarah Ninsiima",
      role: "BUAK Chairperson",
      duration: "3 years with BUAK",
      image: cookingImage,
      quote: "Before BUAK, I spent 4 hours daily collecting firewood. My children missed school. Now we have clean gas, they're in school full-time, and I earn income from waste. BUAK gave me dignity—I'm not a beneficiary, I'm an entrepreneur.",
      impact: [
        "4 hours daily saved",
        "UGX 1.2M annual income from bio-slurry",
        "All 3 children now attend school full-time",
        "Elected as Chairperson by fellow members"
      ]
    },
    {
      name: "James Okello",
      role: "Early Adopter",
      duration: "2 years with BUAK",
      image: cookingImage,
      quote: "The biogas changed everything. No more smoke in my kitchen. I can breathe properly. And the money from bio-slurry helps pay school fees. My wife's health improved immediately—no more respiratory problems.",
      impact: [
        "Respiratory health improved 100%",
        "UGX 300K saved on firewood annually",
        "Sells bio-slurry to 15 local farmers",
        "Repaid loan in 20 months"
      ]
    },
    {
      name: "Amina Hassan",
      role: "Bio-slurry Producer",
      duration: "1.5 years with BUAK",
      image: cookingImage,
      quote: "I was skeptical at first. How could waste make money? But BUAK trained me properly. Now I understand the science. I'm teaching other women in my community. This isn't charity—it's a real business.",
      impact: [
        "Trains 5+ women monthly",
        "UGX 900K annual bio-slurry income",
        "Started small vegetable garden using bio-slurry",
        "Became community mobilizer"
      ]
    },
    {
      name: "Peter Mugisha",
      role: "Host Community Member",
      duration: "1 year with BUAK",
      image: cookingImage,
      quote: "BUAK brought refugees and host community together. We work as one. My biodigester is a demonstration site—I show visitors how it works. I'm proud to be part of this innovation.",
      impact: [
        "Demonstration site for new members",
        "Hosts 20+ visitors monthly",
        "Integrated into refugee-host community",
        "Advocate for biogas expansion"
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Member Stories</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Real people, real impact—hear from BUAK members transforming their lives
          </p>
        </div>
      </section>

      {/* Stories Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-16 max-w-6xl mx-auto">
            {stories.map((story, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-elegant transition-all">
                <div className={`grid md:grid-cols-2 gap-0 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                  <div className={`${index % 2 === 1 ? 'md:order-2' : ''}`}>
                    <img 
                      src={story.image} 
                      alt={story.name}
                      className="w-full h-full object-cover min-h-[300px]"
                    />
                  </div>
                  <div className={`p-8 ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                    <div className="mb-4">
                      <h2 className="text-3xl font-bold mb-2">{story.name}</h2>
                      <p className="text-muted-foreground">{story.role}</p>
                      <p className="text-sm text-muted-foreground">{story.duration}</p>
                    </div>
                    
                    <div className="mb-6">
                      <Quote className="h-8 w-8 text-primary mb-3" />
                      <p className="text-lg italic text-muted-foreground leading-relaxed">
                        "{story.quote}"
                      </p>
                    </div>

                    <div>
                      <h3 className="font-bold mb-3">Impact Highlights:</h3>
                      <ul className="space-y-2">
                        {story.impact.map((item, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-primary mt-1">✓</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* By the Numbers */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">Collective Impact</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            When 69 members work together, the impact multiplies
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <Card className="p-6 text-center">
              <div className="text-3xl font-bold text-primary mb-2">69</div>
              <div className="text-sm text-muted-foreground">Members Strong</div>
            </Card>
            <Card className="p-6 text-center">
              <div className="text-3xl font-bold text-secondary mb-2">94%</div>
              <div className="text-sm text-muted-foreground">Satisfaction Rate</div>
            </Card>
            <Card className="p-6 text-center">
              <div className="text-3xl font-bold text-accent mb-2">0</div>
              <div className="text-sm text-muted-foreground">Members Left</div>
            </Card>
            <Card className="p-6 text-center">
              <div className="text-3xl font-bold text-primary mb-2">100%</div>
              <div className="text-sm text-muted-foreground">Would Recommend</div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Want to Become a Member?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            If you live in Kyangwali and meet the requirements, join us in transforming waste into wealth
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="inline-block">
              <button className="bg-gradient-hero text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:shadow-glow transition-all">
                Apply to Join BUAK
              </button>
            </a>
            <a href="/model" className="inline-block">
              <button className="border-2 border-primary text-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary hover:text-primary-foreground transition-all">
                Learn How It Works
              </button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Stories;
