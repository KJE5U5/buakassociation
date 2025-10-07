import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Events = () => {
  const upcomingEvents = [
    {
      title: "BUAK Annual General Meeting 2025",
      date: "March 15, 2025",
      location: "Kyangwali Settlement, Uganda",
      description: "Annual gathering of all BUAK members to review progress and plan for the year ahead."
    },
    {
      title: "Biogas Training Workshop",
      date: "April 10-12, 2025",
      location: "BUAK Training Center",
      description: "3-day intensive training for new technicians and partner organizations."
    }
  ];

  const pastEvents = [
    {
      title: "Ashden Award Ceremony",
      date: "August 15, 2024",
      location: "London, UK (Virtual)",
      description: "BUAK received the Ashden Climate Innovation Award 2024."
    },
    {
      title: "73rd Digester Installation Celebration",
      date: "July 20, 2024",
      location: "Kyangwali Settlement",
      description: "Community celebration marking our 73rd operational biodigester."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-innovation">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold text-primary-foreground mb-4">Events</h1>
            <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
              Join us at BUAK events and celebrations
            </p>
          </div>
        </section>

        {/* Upcoming Events */}
        <section className="py-16 container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Upcoming Events</h2>
            <div className="space-y-6">
              {upcomingEvents.map((event, index) => (
                <div key={index} className="bg-card border border-border rounded-lg p-6">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                      <p className="text-muted-foreground mb-3">{event.description}</p>
                      <div className="flex flex-wrap gap-4 text-sm">
                        <span className="flex items-center gap-2">📅 {event.date}</span>
                        <span className="flex items-center gap-2">📍 {event.location}</span>
                      </div>
                    </div>
                    <a href="/contact" className="text-primary font-medium hover:underline whitespace-nowrap">Register Interest →</a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Past Events */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8">Past Events</h2>
              <div className="space-y-6">
                {pastEvents.map((event, index) => (
                  <div key={index} className="bg-card rounded-lg p-6">
                    <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                    <p className="text-muted-foreground mb-3">{event.description}</p>
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <span>📅 {event.date}</span>
                      <span>📍 {event.location}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Events;
