import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
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
          <h1 className="text-5xl font-bold mb-4">Stories of Transformation</h1>
          <p className="text-xl max-w-2xl mx-auto">
            From Firewood Collectors to Clean Energy Entrepreneurs
          </p>
          <p className="text-lg mt-2 opacity-90">
            73 Families, 73 Stories
          </p>
        </div>
      </section>

      {/* Featured Story */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Featured Story</h2>
          <Card className="overflow-hidden max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-0">
              <div>
                <img 
                  src={stories[0].image} 
                  alt={stories[0].name}
                  className="w-full h-full object-cover min-h-[400px]"
                />
              </div>
              <div className="p-8 flex flex-col justify-center">
                <h3 className="text-2xl font-bold mb-2 text-primary">
                  "FROM 4 HOURS COLLECTING FIREWOOD TO ENTREPRENEUR"
                </h3>
                <h4 className="text-xl font-semibold mb-4">{stories[0].name}'s Story: How BUAK Changed Everything</h4>
                
                <p className="text-muted-foreground mb-4">
                  Before BUAK, {stories[0].name.split(' ')[0]} spent 4 hours every day collecting firewood with her children. 
                  They missed school 2 days a week to help. Her kitchen was filled with smoke. 
                  Her family spent UGX 30,000/month on fuel—money they couldn't afford.
                </p>
                
                <p className="text-muted-foreground mb-6">
                  Today, {stories[0].name.split(' ')[0]} is the {stories[0].role}, leading a 69-member cooperative. 
                  She cooks with clean gas. Her children attend school full-time. She earns UGX 150,000/month selling bio-slurry. 
                  Her family's health has improved dramatically.
                </p>
                
                <div className="p-4 bg-primary/10 rounded-lg border-l-4 border-primary mb-6">
                  <Quote className="h-6 w-6 text-primary mb-2" />
                  <p className="italic text-sm">
                    "BUAK didn't just give me a biodigester—they gave me dignity, health, and hope. 
                    I'm not a beneficiary. I'm an entrepreneur."
                  </p>
                </div>
                
                <div className="flex gap-3">
                  <Button variant="hero">Read Full Story →</Button>
                  <Button variant="outline">Watch Video ▶</Button>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Story Categories Filter */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-6">Explore Stories by Theme</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {["ALL STORIES", "WOMEN", "REFUGEES", "HOST COMMUNITY", "HEALTH", "EDUCATION", "INCOME", "ENVIRONMENT"].map((category) => (
              <Button 
                key={category} 
                variant={category === "ALL STORIES" ? "default" : "outline"}
                size="sm"
                className="hover-scale"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Stories Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Member Stories</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {stories.map((story, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-elegant transition-all hover-scale group">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={story.image} 
                    alt={story.name}
                    className="w-full h-full object-cover transition-transform group-hover:scale-110"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-overlay p-4">
                    <h3 className="text-xl font-bold text-white">{story.name}</h3>
                    <p className="text-sm text-white/90">{story.role}</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-sm text-muted-foreground mb-4">{story.duration}</p>
                  <p className="text-sm italic mb-4 line-clamp-3">
                    "{story.quote}"
                  </p>
                  <Button variant="outline" size="sm" className="w-full">
                    Read More →
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stories in Numbers */}
      <section className="py-20 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">Transformation by the Numbers</h2>
          <p className="text-center mb-12 text-lg opacity-90">
            Average BUAK member experiences:
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-8">
            {[
              { emoji: "⏰", value: "219 hours/year", label: "Time freed (was spent on firewood)" },
              { emoji: "💰", value: "UGX 1.2M", label: "Additional income/year" },
              { emoji: "💰", value: "UGX 300K", label: "Fuel cost savings/year" },
              { emoji: "🌳", value: "6,850 kg", label: "Firewood saved/year" },
              { emoji: "😊", value: "94%", label: "Report life significantly improved" },
              { emoji: "🏥", value: "93%", label: "Report health improvements" },
              { emoji: "🎓", value: "100%", label: "Children in school full-time" },
              { emoji: "🚺", value: "87%", label: "Women report economic independence" }
            ].map((stat, i) => (
              <div key={i} className="text-center p-4 bg-white/10 rounded-lg backdrop-blur animate-fade-in" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="text-4xl mb-2">{stat.emoji}</div>
                <div className="text-2xl font-bold mb-1">{stat.value}</div>
                <div className="text-sm opacity-90">{stat.label}</div>
              </div>
            ))}
          </div>
          
          <p className="text-center text-xl font-semibold">
            These aren't just numbers—they're lives.
          </p>
        </div>
      </section>

      {/* Member Voices Quote Wall */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">In Their Own Words</h2>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {[
              { quote: "BUAK gave me dignity. I'm not a beneficiary—I'm an entrepreneur.", author: "Sarah M." },
              { quote: "My children breathe clean air now. That alone is worth everything.", author: "James O." },
              { quote: "I used to think refugees were taking our resources. Now we work together, and we're all better off.", author: "Grace A." },
              { quote: "BUAK showed me that waste has value. That I have value.", author: "Young Member" },
              { quote: "My daughters don't collect firewood anymore. They study. That's the future I wanted.", author: "Mother of 6" },
              { quote: "From survival to entrepreneurship—that's what BUAK means to me.", author: "Peter M." }
            ].map((voice, i) => (
              <Card key={i} className="p-6 hover:shadow-elegant transition-all">
                <Quote className="h-8 w-8 text-primary mb-3" />
                <p className="text-lg italic mb-4 text-muted-foreground">
                  "{voice.quote}"
                </p>
                <p className="text-sm font-semibold">— {voice.author}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Gallery Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">Faces of BUAK</h2>
          <p className="text-center text-muted-foreground mb-12">
            A glimpse into the lives we're transforming together
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="relative aspect-square overflow-hidden rounded-lg group cursor-pointer">
                <img 
                  src={cookingImage} 
                  alt={`BUAK member ${i + 1}`}
                  className="w-full h-full object-cover transition-transform group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-overlay opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <p className="text-white text-sm">
                    {["Cooking with biogas", "Bio-slurry collection", "Community meeting", "Installation day"][i % 4]}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Collective Impact */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">Collective Impact</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            When 69 members work together, the impact multiplies
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <Card className="p-6 text-center hover-scale">
              <div className="text-4xl font-bold text-primary mb-2 animate-fade-in">69</div>
              <div className="text-sm text-muted-foreground">Members Strong</div>
              <div className="text-xs text-muted-foreground mt-1">35 refugees, 34 host</div>
            </Card>
            <Card className="p-6 text-center hover-scale">
              <div className="text-4xl font-bold text-secondary mb-2 animate-fade-in">94%</div>
              <div className="text-sm text-muted-foreground">Satisfaction Rate</div>
              <div className="text-xs text-muted-foreground mt-1">Surveyed quarterly</div>
            </Card>
            <Card className="p-6 text-center hover-scale">
              <div className="text-4xl font-bold text-accent mb-2 animate-fade-in">0</div>
              <div className="text-sm text-muted-foreground">Members Left</div>
              <div className="text-xs text-muted-foreground mt-1">100% retention</div>
            </Card>
            <Card className="p-6 text-center hover-scale">
              <div className="text-4xl font-bold text-primary mb-2 animate-fade-in">100%</div>
              <div className="text-sm text-muted-foreground">Would Recommend</div>
              <div className="text-xs text-muted-foreground mt-1">Member surveys</div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-innovation text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Inspired by These Stories?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Help create 227 more transformation stories like these
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a href="/invest">
              <Button size="lg" variant="accent" className="min-w-[200px]">
                Invest in Impact
              </Button>
            </a>
            <Button size="lg" variant="outline" className="min-w-[200px] border-white text-white hover:bg-white hover:text-primary">
              Share These Stories
            </Button>
          </div>
          
          <p className="text-lg mb-4">Or become part of the story yourself:</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/join-us">
              <Button variant="outline" size="lg" className="min-w-[200px] border-white text-white hover:bg-white hover:text-primary">
                Join BUAK as a Member
              </Button>
            </a>
            <a href="/work-with-us">
              <Button variant="outline" size="lg" className="min-w-[200px] border-white text-white hover:bg-white hover:text-primary">
                Partner With Us
              </Button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Stories;
