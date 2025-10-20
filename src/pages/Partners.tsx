import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const Partners = () => {
  const recognitionPartners = [
    {
      name: "Ashden Awards",
      role: "Climate Innovation Award Winner 2024",
      description: "Ashden Awards celebrates and supports sustainable energy pioneers globally. In 2024, BUAK became the first refugee-led biogas cooperative in East Africa to win this prestigious award. Ashden provides global platform access, media visibility, and ongoing mentorship.",
      since: "2024",
      website: "ashden.org",
      logo: "🏆"
    }
  ];

  const strategicPartners = [
    {
      name: "CARE International",
      role: "Impact Assessment & Technical Support",
      description: "CARE conducted independent SROI assessment (2.47:1) and provides ongoing M&E support, program guidance, and connection to CARE's global refugee programs.",
      since: "2022",
      support: "Impact measurement, capacity building",
      website: "care.org",
      logo: "🤝"
    },
    {
      name: "UNHCR",
      role: "Policy Support & Refugee Inclusion Advocacy",
      description: "UNHCR supports BUAK through policy advocacy for refugee economic inclusion, land use permissions in settlements, and connections to humanitarian energy sector initiatives.",
      since: "2021",
      support: "Policy, advocacy, refugee rights",
      website: "unhcr.org",
      logo: "🌍"
    },
    {
      name: "JICA",
      role: "Seed Funding",
      description: "JICA provided seed capital ($25,000) in 2023 that enabled BUAK to scale from 25 to 73 biodigesters. This investment proved the revolving fund model and positioned BUAK for investment-readiness.",
      since: "2023",
      support: "Financial capital, program guidance",
      website: "jica.go.jp",
      logo: "💰"
    }
  ];

  const technicalPartners = [
    {
      name: "Biogas Solutions Uganda",
      role: "Technician Training & Quality Standards",
      description: "Biogas Solutions Uganda trains and certifies BUAK's technicians through intensive 5-day programs. They also provide quality assurance guidance and access to biogas sector best practices.",
      since: "2021",
      support: "Technical training, certification, QA",
      website: "biogassolutionsug.com",
      logo: "🔧"
    },
    {
      name: "The Hummingbird Effect Alliance",
      role: "Communications & Storytelling Support",
      description: "The Hummingbird Effect connects storytellers with impact organizations. They've provided BUAK with communications training, content development support, and media connections.",
      since: "2024",
      support: "Communications, media training",
      website: "hummingbirdeffect.org",
      logo: "📢"
    }
  ];

  const communityPartners = [
    {
      name: "Kyangwali Refugee Settlement Administration",
      role: "Land Access & Community Coordination",
      description: "The OPM (Office of the Prime Minister) settlement administration provides land use permissions, community coordination support, and integration with settlement development plans.",
      since: "2021",
      logo: "🏛️"
    },
    {
      name: "Local Farmers' Cooperatives",
      role: "Bio-slurry Market Access",
      description: "BUAK partners with 3 local farmers' cooperatives in Kikuube District who purchase bio-slurry for their members' crops. This market linkage ensures steady demand for BUAK's bio-slurry production.",
      since: "2022",
      logo: "🌾"
    }
  ];

  const PartnerCard = ({ partner }: { partner: any }) => (
    <Card className="hover:shadow-glow transition-all">
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <div className="text-4xl mb-2">{partner.logo}</div>
            <CardTitle className="text-xl mb-2">{partner.name}</CardTitle>
            <CardDescription className="text-primary font-medium">
              {partner.role}
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-3">
        <p className="text-muted-foreground text-sm leading-relaxed">
          {partner.description}
        </p>
        <div className="pt-2 space-y-1 text-sm">
          <p><strong>Partnership Since:</strong> {partner.since}</p>
          {partner.support && (
            <p><strong>Support:</strong> {partner.support}</p>
          )}
          {partner.website && (
            <a 
              href={`https://${partner.website}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-primary hover:underline"
            >
              <ExternalLink className="h-3 w-3" />
              {partner.website}
            </a>
          )}
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className=" text-white relative h-[60vh] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(img_11.png)` }}>
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold text-primary-foreground mb-4">Our Partners</h1>
            <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
              Building Impact Together Since 2021
            </p>
          </div>
        </section>

        {/* Recognition & Awards */}
        <section className="py-16 container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Recognition & Awards</h2>
            <div className="grid gap-8">
              {recognitionPartners.map((partner) => (
                <PartnerCard key={partner.name} partner={partner} />
              ))}
            </div>
          </div>
        </section>

        {/* Strategic Partners */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Strategic Partners</h2>
              <div className="grid md:grid-cols-1 gap-8">
                {strategicPartners.map((partner) => (
                  <PartnerCard key={partner.name} partner={partner} />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Technical Partners */}
        <section className="py-16 container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Technical Partners</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {technicalPartners.map((partner) => (
                <PartnerCard key={partner.name} partner={partner} />
              ))}
            </div>
          </div>
        </section>

        {/* Community Partners */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Community Partners</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {communityPartners.map((partner) => (
                  <PartnerCard key={partner.name} partner={partner} />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Partnership Impact */}
        <section className="py-16 container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">What Our Partnerships Enable</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Thanks to our partners, BUAK has achieved:
            </p>
            <div className="grid md:grid-cols-2 gap-4 text-left">
              {[
                "Global Recognition (Ashden Award)",
                "Verified Impact (CARE SROI Assessment)",
                "Seed Capital (JICA $25K)",
                "Technical Excellence (Biogas Solutions training)",
                "Policy Support (UNHCR advocacy)",
                "Media Visibility (Hummingbird Effect)",
                "Market Access (Farmers' cooperatives)",
                "Land Permissions (OPM Kyangwali)"
              ].map((achievement) => (
                <div key={achievement} className="flex items-start gap-2">
                  <span className="text-primary">✓</span>
                  <span>{achievement}</span>
                </div>
              ))}
            </div>
            <p className="mt-8 text-muted-foreground italic">
              Partnerships aren't just logos—they're the ecosystem that makes refugee-led innovation possible.
            </p>
          </div>
        </section>

        {/* Partnership CTA */}
        <section className="py-16 bg-gradient-warm text-center">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-primary-foreground mb-4">Want to Partner with BUAK?</h2>
            <p className="text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              We're always open to strategic partnerships that amplify impact, improve quality, or enable scale.
            </p>
            <div className="space-y-4 max-w-2xl mx-auto text-primary-foreground/90 text-left mb-8">
              <p className="font-medium">Current Partnership Opportunities:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>Replication partners (NGOs in refugee settlements)</li>
                <li>Technical collaborators (biogas innovation)</li>
                <li>Market linkages (bio-slurry, carbon credits)</li>
                <li>Research institutions (impact studies)</li>
                <li>Funding partners (grants, investments)</li>
              </ul>
            </div>
            <Button asChild size="lg" variant="secondary">
              <a href="/work-with-us">Explore Partnership Options</a>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Partners;
