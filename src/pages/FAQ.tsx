import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      category: "About BUAK",
      questions: [
        {
          q: "What is BUAK?",
          a: "BUAK (Bio-Energy Umbrella Association of Kyangwali) is a refugee-led cooperative providing affordable biogas solutions through innovative offtake-based financing."
        },
        {
          q: "Where is BUAK located?",
          a: "BUAK operates in Kyangwali Refugee Settlement, Kikuube District, Western Uganda."
        },
        {
          q: "How many members does BUAK have?",
          a: "BUAK has 69 members—35 refugees and 34 host community members, with 35% women representation."
        }
      ]
    },
    {
      category: "For Potential Members",
      questions: [
        {
          q: "Who can join BUAK?",
          a: "Anyone in Kyangwali (refugee or host community) with 2+ cattle, water access, and 5m x 5m space can apply."
        },
        {
          q: "How much does it cost to join?",
          a: "Members contribute 30% in materials and labor (no cash upfront). BUAK finances the remaining 70%, repayable through bio-slurry sales."
        },
        {
          q: "How long does installation take?",
          a: "Biodigester construction takes approximately 15 days from start to completion."
        },
        {
          q: "What income can I expect?",
          a: "Members earn UGX 900K-1.2M annually from bio-slurry sales, plus save UGX 300K on firewood costs."
        }
      ]
    },
    {
      category: "For Investors",
      questions: [
        {
          q: "How does BUAK generate returns?",
          a: "Revenue comes from bio-slurry sales with 26% gross margins. Investment payback is 18-24 months, with 15-20% annual ROI thereafter."
        },
        {
          q: "What's the repayment rate?",
          a: "BUAK maintains a 95% repayment rate through its offtake-based financing model."
        },
        {
          q: "Is this aid or investment?",
          a: "BUAK operates as a social enterprise with proven financial sustainability. We seek impact investment, not charity."
        }
      ]
    },
    {
      category: "Technology",
      questions: [
        {
          q: "What type of biodigesters does BUAK use?",
          a: "We install 6m³ fixed-dome biodigesters (Chinese model), proven for household use with 20+ year lifespan."
        },
        {
          q: "How much gas does one digester produce?",
          a: "A standard household digester produces 1.5-2 m³ of biogas daily, sufficient for 4-6 hours of cooking."
        },
        {
          q: "What is bio-slurry?",
          a: "Bio-slurry is the organic fertilizer by-product from biodigesters. It's nutrient-rich and increases crop yields by 30%."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className=" text-white relative h-[60vh] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(img_11.png)` }}>
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold text-primary-foreground mb-4">Frequently Asked Questions</h1>
            <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
              Find answers to common questions about BUAK
            </p>
          </div>
        </section>

        {/* FAQ Sections */}
        <section className="py-16 container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {faqs.map((section, sectionIndex) => (
              <div key={sectionIndex} className="mb-12">
                <h2 className="text-2xl font-bold mb-6">{section.category}</h2>
                <Accordion type="single" collapsible className="space-y-4">
                  {section.questions.map((faq, index) => (
                    <AccordionItem key={index} value={`${sectionIndex}-${index}`} className="bg-card border border-border rounded-lg px-6">
                      <AccordionTrigger className="text-left font-medium hover:no-underline">
                        {faq.q}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        {faq.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </section>

        {/* Still Have Questions */}
        <section className="py-16 bg-amber-600 text-center">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-primary-foreground mb-4">Still Have Questions?</h2>
            <p className="text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              We're here to help. Reach out and we'll respond within 24 hours.
            </p>
            <a href="/contact" className="inline-block bg-background text-foreground px-8 py-3 rounded-md font-medium hover:shadow-glow transition-all">
              Contact Us
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default FAQ;
