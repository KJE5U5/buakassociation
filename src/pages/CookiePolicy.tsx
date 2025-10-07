import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const CookiePolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="py-16 container mx-auto px-4">
        <div className="max-w-4xl mx-auto prose prose-lg">
          <h1 className="text-4xl font-bold mb-8">Cookie Policy</h1>
          <p className="text-muted-foreground">Last Updated: October 2025</p>

          <h2 className="text-2xl font-bold mt-8 mb-4">What Are Cookies?</h2>
          <p>
            Cookies are small text files placed on your device when you visit a website. They help us improve 
            your browsing experience by remembering your preferences and understanding how you use our site.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">How We Use Cookies</h2>
          <p>BUAK uses cookies for:</p>
          <ul>
            <li><strong>Essential Cookies:</strong> Required for the website to function properly</li>
            <li><strong>Analytics Cookies:</strong> Help us understand how visitors use our website</li>
            <li><strong>Performance Cookies:</strong> Improve website performance and user experience</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">Third-Party Cookies</h2>
          <p>
            We may use third-party services like Google Analytics that place cookies on your device. These 
            services have their own privacy policies governing cookie use.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Managing Cookies</h2>
          <p>
            You can control and delete cookies through your browser settings. However, blocking cookies may 
            affect your experience on our website.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Contact Us</h2>
          <p>
            For questions about our cookie policy, contact us at:<br />
            Email: buakassociation@gmail.com
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CookiePolicy;
