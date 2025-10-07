import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const Blog = () => {
  const posts = [
    {
      title: "Reaching 73 Biodigesters: Our Journey",
      date: "2024-08-20",
      excerpt: "How BUAK grew from 2 households to 73 operational biodigesters in just 3 years.",
      slug: "reaching-73-biodigesters",
      category: "Milestone"
    },
    {
      title: "Meet Sarah: From Firewood to Leadership",
      date: "2024-07-15",
      excerpt: "Sarah Ninsiima's inspiring journey from refugee to BUAK Chairperson.",
      slug: "meet-sarah-from-firewood-to-leadership",
      category: "Member Story"
    },
    {
      title: "How Offtake Financing Works",
      date: "2024-06-10",
      excerpt: "A deep dive into BUAK's innovative financing model that makes biogas affordable.",
      slug: "how-offtake-financing-works",
      category: "Model Explainer"
    },
    {
      title: "Ashden Award: What It Means for BUAK",
      date: "2024-08-16",
      excerpt: "Winning the Ashden Climate Innovation Award validates refugee-led innovation.",
      slug: "ashden-award-what-it-means",
      category: "News"
    },
    {
      title: "5 Mistakes We Made (And What We Learned)",
      date: "2024-05-22",
      excerpt: "Transparent reflections on BUAK's challenges and lessons learned.",
      slug: "5-mistakes-we-made",
      category: "Lessons Learned"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-hero">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold text-primary-foreground mb-4">BUAK Blog</h1>
            <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
              Stories, insights, and updates from our journey
            </p>
          </div>
        </section>

        {/* Blog Posts */}
        <section className="py-16 container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid gap-8">
              {posts.map((post) => (
                <article key={post.slug} className="bg-card border border-border rounded-lg p-8 hover:shadow-glow transition-all">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-sm bg-primary/10 text-primary px-3 py-1 rounded-full">{post.category}</span>
                    <span className="text-sm text-muted-foreground">{post.date}</span>
                  </div>
                  <h2 className="text-2xl font-bold mb-3">{post.title}</h2>
                  <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                  <Button variant="outline" asChild>
                    <a href={`/blog/${post.slug}`}>Read More →</a>
                  </Button>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-16 bg-gradient-warm text-center">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-primary-foreground mb-4">Stay Updated</h2>
            <p className="text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Subscribe to receive BUAK's latest stories and impact updates
            </p>
            <Button size="lg" variant="default" className="bg-background text-foreground" asChild>
              <a href="/contact">Subscribe to Newsletter</a>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
