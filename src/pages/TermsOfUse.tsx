import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const TermsOfUse = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="py-16 container mx-auto px-4">
        <div className="max-w-4xl mx-auto prose prose-lg">
          <h1 className="text-4xl font-bold mb-8">Terms of Use</h1>
          <p className="text-muted-foreground">Last Updated: October 2025</p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Acceptance of Terms</h2>
          <p>
            By accessing and using the BUAK website, you accept and agree to be bound by these Terms of Use. 
            If you do not agree, please do not use our website.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Use of Website</h2>
          <p>You agree to use our website only for lawful purposes and in a manner that does not infringe the rights of others.</p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Intellectual Property</h2>
          <p>
            All content on this website, including text, graphics, logos, and images, is the property of BUAK 
            or its content suppliers and is protected by copyright and intellectual property laws.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Limitation of Liability</h2>
          <p>
            BUAK provides this website "as is" and makes no warranties about the accuracy or completeness of 
            the information. We are not liable for any damages arising from your use of the website.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Governing Law</h2>
          <p>
            These Terms of Use are governed by the laws of Uganda. Any disputes shall be subject to the 
            exclusive jurisdiction of Ugandan courts.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Contact Us</h2>
          <p>
            For questions about these terms, contact us at:<br />
            Email: buakassociation@gmail.com<br />
            Phone: +256 758998928
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TermsOfUse;
