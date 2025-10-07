import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const OurTeam = () => {
  const leadershipTeam = [
    {
      name: "Sarah Ninsiima",
      role: "Chairperson",
      bio: "South Sudanese refugee, 8 years in Kyangwali. Sarah leads BUAK's 69-member cooperative with vision and determination.",
      image: "/placeholder.svg"
    },
    {
      name: "Robert Mugisha",
      role: "Secretary General",
      bio: "Agricultural engineer ensuring BUAK's technical excellence with 87.7% system uptime.",
      image: "/placeholder.svg"
    },
    {
      name: "Ahmed Jibril",
      role: "Treasurer",
      bio: "Accountant with microfinance experience, achieving 95% repayment rates through transparent financial management.",
      image: "/placeholder.svg"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-hero">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold text-primary-foreground mb-4">Our Team</h1>
            <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
              Meet the leaders driving BUAK's mission of refugee-led clean energy innovation
            </p>
          </div>
        </section>

        {/* Leadership Team */}
        <section className="py-16 container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Leadership Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {leadershipTeam.map((member) => (
              <div key={member.name} className="bg-card rounded-lg p-6 shadow-card border border-border">
                <div className="w-32 h-32 rounded-full bg-muted mx-auto mb-4 flex items-center justify-center text-4xl font-bold text-primary">
                  {member.name.charAt(0)}
                </div>
                <h3 className="text-xl font-bold text-center mb-2">{member.name}</h3>
                <p className="text-primary text-center font-medium mb-4">{member.role}</p>
                <p className="text-muted-foreground text-center">{member.bio}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Full Cooperative */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8">Our 69-Member Cooperative</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-card p-6 rounded-lg">
                <h3 className="text-2xl font-bold text-primary mb-2">35</h3>
                <p className="text-muted-foreground">Refugees</p>
              </div>
              <div className="bg-card p-6 rounded-lg">
                <h3 className="text-2xl font-bold text-primary mb-2">34</h3>
                <p className="text-muted-foreground">Host Community Members</p>
              </div>
              <div className="bg-card p-6 rounded-lg">
                <h3 className="text-2xl font-bold text-secondary mb-2">35%</h3>
                <p className="text-muted-foreground">Women Members</p>
              </div>
              <div className="bg-card p-6 rounded-lg">
                <h3 className="text-2xl font-bold text-accent mb-2">100%</h3>
                <p className="text-muted-foreground">Community Owned</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default OurTeam;
