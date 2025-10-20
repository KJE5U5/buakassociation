import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Mail, Phone, MapPin, Send, Loader2, Facebook, Twitter, Linkedin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.subject.trim()) newErrors.subject = "Subject is required";

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.length > 1000) {
      newErrors.message = "Message must be less than 1000 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      toast({
        title: "Please fix errors",
        description: "Some fields are missing or invalid",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('https://@buakassociation.org/server/contact.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        toast({
          title: "Message Sent!",
          description: result.message || "We'll get back to you within 48 hours.",
        });
        setFormData({ name: "", email: "", subject: "", message: "" });
        setErrors({});
      } else {
        // Show specific field errors if provided
        if (result.missingFields) {
          const fieldErrors: Record<string, string> = {};
          result.missingFields.forEach((field: string) => {
            fieldErrors[field] = `${field.charAt(0).toUpperCase() + field.slice(1)} is required`;
          });
          setErrors(fieldErrors);
        }

        toast({
          title: "Failed to Send",
          description: result.message || "Please try again later.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Network Error",
        description: "Failed to send message. Please check your connection and try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const clearError = (field: string) => {
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: "" }));
    }
  };

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className=" text-white relative h-[60vh] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(img_11.png)` }}>
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
                      <a href="mailto:buakassociation@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
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
                      <a href="tel:+256758998928" className="text-muted-foreground hover:text-primary transition-colors">
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

        

              {/* Social Media Links */}
              <div className="mt-8">
                <h3 className="text-xl font-bold mb-4">Follow Us</h3>
                <Card className="p-6">
                  <div className="flex gap-4">
                    <Button variant="outline" size="sm" asChild>
                      <a href="#" aria-label="Facebook" className="cursor-pointer">
                        <Facebook className="h-4 w-4" />
                      </a>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <a href="#" aria-label="Twitter" className="cursor-pointer">
                        <Twitter className="h-4 w-4" />
                      </a>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <a href="#" aria-label="LinkedIn" className="cursor-pointer">
                        <Linkedin className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </Card>
              </div>

              {/* Key Contacts */}
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
                      onChange={(e) => {
                        setFormData({ ...formData, name: e.target.value });
                        clearError('name');
                      }}
                      className={errors.name ? "border-destructive" : ""}
                      disabled={isSubmitting}
                    />
                    {errors.name && (
                      <p className="text-destructive text-sm mt-1">{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Email *</label>
                    <Input
                      type="email"
                      required
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
                        clearError('email');
                      }}
                      className={errors.email ? "border-destructive" : ""}
                      disabled={isSubmitting}
                    />
                    {errors.email && (
                      <p className="text-destructive text-sm mt-1">{errors.email}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Subject *</label>
                    <Input
                      required
                      placeholder="What is this regarding?"
                      value={formData.subject}
                      onChange={(e) => {
                        setFormData({ ...formData, subject: e.target.value });
                        clearError('subject');
                      }}
                      className={errors.subject ? "border-destructive" : ""}
                      disabled={isSubmitting}
                    />
                    {errors.subject && (
                      <p className="text-destructive text-sm mt-1">{errors.subject}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Message *
                      <span className="text-muted-foreground font-normal ml-2">
                        {formData.message.length}/1000
                      </span>
                    </label>
                    <Textarea
                      required
                      rows={6}
                      placeholder="Tell us more about your inquiry..."
                      value={formData.message}
                      onChange={(e) => {
                        if (e.target.value.length <= 1000) {
                          setFormData({ ...formData, message: e.target.value });
                          clearError('message');
                        }
                      }}
                      className={errors.message ? "border-destructive" : ""}
                      disabled={isSubmitting}
                    />
                    {errors.message && (
                      <p className="text-destructive text-sm mt-1">{errors.message}</p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    variant="hero"
                    size="lg"
                    className="w-full"
                    disabled={isSubmitting}
                    aria-label={isSubmitting ? "Sending message..." : "Send message"}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        Send Message
                      </>
                    )}
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

            <Card className="p-6">
              <h3 className="font-bold text-lg mb-3">What are your operating hours?</h3>
              <p className="text-muted-foreground">
                Our office is open Monday to Friday, 8:00 AM to 5:00 PM East Africa Time.
                We respond to emails and calls during these hours.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="font-bold text-lg mb-3">Do you offer tours or visits?</h3>
              <p className="text-muted-foreground">
                Yes, we welcome visitors interested in learning about our work. Please contact us in advance
                to schedule a visit to our facilities.
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