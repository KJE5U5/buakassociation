import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 48 hours.",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Get In Touch</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Whether you're interested in investing, partnering, or joining BUAK—we'd love to hear from you
          </p>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
              <div className="space-y-6">
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <Mail className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold mb-1">Email</h3>
                      <a href="mailto:buakassociation@gmail.com" className="text-muted-foreground hover:text-primary">
                        buakassociation@gmail.com
                      </a>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <Phone className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold mb-1">Phone</h3>
                      <a href="tel:+256758998928" className="text-muted-foreground hover:text-primary">
                        +256 758998928
                      </a>
                      <p className="text-sm text-muted-foreground mt-1">
                        Monday - Friday, 8:00 AM - 5:00 PM (EAT)
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <MapPin className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold mb-1">Location</h3>
                      <p className="text-muted-foreground">
                        BUAK Bio-Energy Umbrella Association<br />
                        Kyangwali Refugee Settlement<br />
                        Kikuube District, Uganda
                      </p>
                    </div>
                  </div>
                </Card>
              </div>

              <div className="mt-8">
                <h3 className="text-xl font-bold mb-4">Key Contacts</h3>
                <Card className="p-6">
                  <div className="space-y-4">
                    <div>
                      <p className="font-bold">Robert Mugisha</p>
                      <p className="text-sm text-muted-foreground">Secretary General</p>
                      <p className="text-sm text-muted-foreground">Investment & Partnership Inquiries</p>
                    </div>
                    <div>
                      <p className="font-bold">Sarah Ninsiima</p>
                      <p className="text-sm text-muted-foreground">Chairperson</p>
                      <p className="text-sm text-muted-foreground">Membership & Community Relations</p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <Card className="p-8">
                <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Name *</label>
                    <Input 
                      required
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Email *</label>
                    <Input 
                      type="email"
                      required
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Subject *</label>
                    <Input 
                      required
                      placeholder="What is this regarding?"
                      value={formData.subject}
                      onChange={(e) => setFormData({...formData, subject: e.target.value})}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Message *</label>
                    <Textarea 
                      required
                      rows={6}
                      placeholder="Tell us more about your inquiry..."
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                    />
                  </div>

                  <Button type="submit" variant="hero" size="lg" className="w-full">
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </Button>
                </form>
              </Card>

              <div className="mt-6 text-center text-sm text-muted-foreground">
                <p>We typically respond within 48 hours</p>
                <p className="mt-2">For urgent matters, please call us directly</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="p-6">
              <h3 className="font-bold text-lg mb-3">How can I invest in BUAK?</h3>
              <p className="text-muted-foreground">
                Visit our Invest page to learn about investment opportunities, or contact us directly to schedule 
                a call with our investment team.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="font-bold text-lg mb-3">Can I join BUAK as a member?</h3>
              <p className="text-muted-foreground">
                Yes! If you live in Kyangwali and meet the requirements (2+ cattle, water access, 5m x 5m space), 
                you can apply to become a member.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="font-bold text-lg mb-3">Do you offer technical training?</h3>
              <p className="text-muted-foreground">
                Yes, we provide technical training for organizations looking to replicate our model. Contact us 
                for partnership opportunities.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="font-bold text-lg mb-3">How can media reach you?</h3>
              <p className="text-muted-foreground">
                Media inquiries can be sent to buakassociation@gmail.com with "MEDIA" in the subject line. 
                We respond within 24 hours.
              </p>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
