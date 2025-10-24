import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const JoinUs = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    village: "",
    type: "",
    hasCattle: false,
    hasWater: false,
    hasSpace: false,
    hearAbout: "",
    additional: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!formData.name.trim()) {
      toast({
        title: "Error",
        description: "Please enter your name",
        variant: "destructive"
      });
      return;
    }

    if (!formData.phone.trim()) {
      toast({
        title: "Error",
        description: "Please enter your phone number",
        variant: "destructive"
      });
      return;
    }

    if (!formData.village.trim()) {
      toast({
        title: "Error",
        description: "Please enter your village/zone",
        variant: "destructive"
      });
      return;
    }

    if (!formData.type) {
      toast({
        title: "Error",
        description: "Please select if you are a refugee or host community",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Create WhatsApp message
      const message = `🎯 NEW BUAK MEMBERSHIP APPLICATION

📋 APPLICANT DETAILS:
Name: ${formData.name}
Phone: ${formData.phone}
Village/Zone: ${formData.village}
Type: ${formData.type === 'refugee' ? 'Refugee' : 'Host Community'}

✅ REQUIREMENTS:
${formData.hasCattle ? '✓' : '✗'} Has 2+ cattle or 4+ goats
${formData.hasWater ? '✓' : '✗'} Has water access
${formData.hasSpace ? '✓' : '✗'} Has 5m x 5m space

📻 How they heard about us: ${formData.hearAbout || 'Not specified'}

💬 Additional Information:
${formData.additional || 'None provided'}

---
Please contact this applicant within 7 days to schedule a site visit.`;

      // Send to WhatsApp (Robert's number)
      const whatsappNumber = "256758998928";
      const encodedMessage = encodeURIComponent(message);
      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

      // Open WhatsApp in new tab
      window.open(whatsappUrl, '_blank');

      // Show success message
      toast({
        title: "Application Submitted! ✅",
        description: "We've prepared your application message. Please send it via WhatsApp to complete your application. We'll contact you within 7 days.",
      });

      // Reset form
      setFormData({
        name: "",
        phone: "",
        village: "",
        type: "",
        hasCattle: false,
        hasWater: false,
        hasSpace: false,
        hearAbout: "",
        additional: ""
      });

    } catch (error) {
      toast({
        title: "Error",
        description: "There was a problem submitting your application. Please try again or contact us directly via WhatsApp at +256 758998928.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className=" text-white relative h-[60vh] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(img_11.png)` }}>
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold text-primary-foreground mb-4">Join BUAK</h1>
            <p className="text-2xl text-primary-foreground/90 mb-2">
              Become a Member | Transform Your Life
            </p>
            <p className="text-xl text-primary-foreground/80">
              Clean Gas + Income + Community
            </p>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">What You Get as a BUAK Member</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center">
                <CardHeader>
                  <div className="text-6xl mb-4">🔥</div>
                  <CardTitle className="text-2xl">CLEAN COOKING GAS</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Cook with biogas. No smoke. Clean air for your family.</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="text-6xl mb-4">💰</div>
                  <CardTitle className="text-2xl">TOTAL BENEFIT</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-2">UGX 541,966 per year</p>
                  <p className="text-sm text-muted-foreground">Savings + income + health benefits combined</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="text-6xl mb-4">⏰</div>
                  <CardTitle className="text-2xl">SAVE TIME</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-2">1,277 hours per year</p>
                  <p className="text-sm text-muted-foreground">6 hours/day freed from firewood collection</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="text-6xl mb-4">❤️</div>
                  <CardTitle className="text-2xl">BETTER HEALTH</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">No smoke in kitchen. Healthier family. Cleaner air.</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="text-6xl mb-4">📚</div>
                  <CardTitle className="text-2xl">CHILDREN IN SCHOOL</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-2">Increased attendance</p>
                  <p className="text-sm text-muted-foreground">Children freed from firewood collection duties</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="text-6xl mb-4">👥</div>
                  <CardTitle className="text-2xl">BE PART OF A TEAM</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Join 73 member households (503 people). Cooperative ownership. Community support.</p>
                </CardContent>
              </Card>
            </div>

            <div className="bg-gradient-hero text-primary-foreground p-8 rounded-lg mt-12 text-center">
              <ul className="text-lg space-y-2">
                <li>✓ NO CASH UPFRONT REQUIRED</li>
                <li>✓ REPAY THROUGH BIO-SLURRY SALES (AUTOMATIC)</li>
                <li>✓ 94% OF MEMBERS ARE SATISFIED</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Member Testimonial */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Hear From Our Members</h2>
              
              <Card className="p-8">
                <div className="text-center mb-6">
                  <div className="w-32 h-32 rounded-full bg-primary/10 mx-auto mb-4 flex items-center justify-center text-6xl">
                    🎥
                  </div>
                  <p className="text-lg italic text-muted-foreground mb-4">
                    "Before BUAK, I spent 4 hours every day collecting firewood. My children missed school to help me. 
                    Now we have clean gas, they go to school full-time, and I earn money from waste. This changed everything."
                  </p>
                  <p className="font-bold">— Sarah M., BUAK Chairperson</p>
                </div>
                <div className="text-center">
                  <Button size="lg">▶ Watch Sarah's Full Story (2 min)</Button>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Eligibility */}
        <section className="py-16 container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Can I Join BUAK?</h2>
            <p className="text-center text-muted-foreground mb-12">
              To become a BUAK member, you need:
            </p>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-primary">☑ LIVESTOCK</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>You have 2 or more cattle, OR 4 or more goats</p>
                  <p className="text-sm text-muted-foreground">(Needed to produce waste for biodigester)</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-primary">☑ WATER ACCESS</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>You have access to water (well, tap, or rainwater harvest)</p>
                  <p className="text-sm text-muted-foreground">(Need 40 liters daily for biodigester)</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-primary">☑ LAND SPACE</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>You have 5m × 5m flat space on your land</p>
                  <p className="text-sm text-muted-foreground">(For biodigester installation)</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-primary">☑ COMMITMENT</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-1 text-sm">
                    <li>• You can contribute local materials (sand, gravel, stones)</li>
                    <li>• You can provide labor during construction</li>
                    <li>• You will feed the biodigester daily</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-primary">☑ LOCATION</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>You live in Kyangwali Refugee Settlement (current)</p>
                  <p className="text-sm text-muted-foreground">OR in planned expansion areas (2026-2027)</p>
                </CardContent>
              </Card>
            </div>

            <div className="bg-gradient-hero text-primary-foreground p-8 rounded-lg mt-8 text-center">
              <p className="text-xl font-bold mb-4">✅ All boxes checked? You're eligible to apply!</p>
              <p className="mb-6">❌ Some boxes unchecked? Contact us—we may still be able to work something out!</p>
              <Button size="lg" variant="secondary">Apply to Join BUAK →</Button>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-center">4 Steps to Get Your Biodigester</h2>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card>
                  <CardHeader>
                    <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                      1
                    </div>
                    <CardTitle className="text-center">APPLY & MEET</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-center">
                    <p className="mb-2">• Fill application form</p>
                    <p className="mb-2">• Meet with BUAK officer</p>
                    <p className="mb-2">• Learn about model</p>
                    <p className="mb-2">• Ask questions</p>
                    <p className="font-semibold mt-4">Time: 1 hour</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="w-16 h-16 rounded-full bg-secondary text-primary-foreground flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                      2
                    </div>
                    <CardTitle className="text-center">SITE VISIT</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-center">
                    <p className="mb-2">• BUAK technician visits your home</p>
                    <p className="mb-2">• Checks eligibility</p>
                    <p className="mb-2">• Confirms you're ready</p>
                    <p className="font-semibold mt-4">Time: 1-2 hours</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="w-16 h-16 rounded-full bg-accent text-primary-foreground flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                      3
                    </div>
                    <CardTitle className="text-center">CONSTRUCTION</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-center">
                    <p className="mb-2">• You contribute materials (sand, gravel, stones)</p>
                    <p className="mb-2">• You provide labor</p>
                    <p className="mb-2">• BUAK covers rest</p>
                    <p className="font-semibold mt-4">Time: 15 days</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                      4
                    </div>
                    <CardTitle className="text-center">TRAINING & USE</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-center">
                    <p className="mb-2">• Learn how to use biodigester</p>
                    <p className="mb-2">• Daily feeding process</p>
                    <p className="mb-2">• Gas stove operation</p>
                    <p className="mb-2">• Safety procedures</p>
                    <p className="font-semibold mt-4">Cook with clean gas daily!</p>
                  </CardContent>
                </Card>
              </div>

              <div className="bg-card p-8 rounded-lg mt-12">
                <h3 className="text-2xl font-bold mb-4">After Installation:</h3>
                <ul className="space-y-2">
                  <li>• BUAK visits weekly to collect bio-slurry</li>
                  <li>• You get paid UGX 2,500 per 20L can</li>
                  <li>• Payment credited toward loan repayment</li>
                  <li>• Loan fully repaid in 3.7-4.3 years (44-52 months)</li>
                  <li>• After that, income is yours to keep forever!</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* What It Costs */}
        <section className="py-16 container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Cost of Joining BUAK</h2>

            <div className="text-center mb-8">
              <p className="text-4xl font-bold mb-2">Total Cost of Biodigester</p>
              <p className="text-5xl font-bold text-primary">UGX 3,500,000</p>
            </div>

            <div className="space-y-6">
              <Card className="border-primary border-2">
                <CardHeader>
                  <CardTitle>YOU CONTRIBUTE (30% In-Kind): UGX 1,050,000</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>• Local materials (sand, gravel, stones)</li>
                    <li>• Your labor during construction</li>
                    <li className="font-bold text-green-600">• No cash out of pocket</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-secondary border-2">
                <CardHeader>
                  <CardTitle>BUAK INVESTS (70% Loan): UGX 2,450,000</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>• Skilled labor (technicians)</li>
                    <li>• Equipment (pipes, stove, fittings)</li>
                    <li>• Materials we provide</li>
                    <li>• Training and support</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <Card className="mt-8 bg-muted">
              <CardHeader>
                <CardTitle className="text-2xl">How You Repay</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p>• Sell bio-slurry to BUAK (UGX 2,500 per 20L can)</p>
                <p>• BUAK collects weekly</p>
                <p>• Payment automatically credited to your loan</p>
                <p className="font-bold text-green-600">• No cash payments required</p>
                <p>• Repayment period: 18-24 months average</p>
              </CardContent>
            </Card>

            <Card className="mt-8 bg-gradient-hero text-primary-foreground">
              <CardHeader>
                <CardTitle className="text-2xl">After Loan Is Repaid</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="font-bold text-xl">• Biodigester is 100% YOURS</p>
                <p>• You own it forever</p>
                <p>• Keep earning UGX 900K-1.2M per year from bio-slurry</p>
                <p>• BUAK continues to collect and pay you</p>
              </CardContent>
            </Card>

            <div className="bg-accent/10 p-8 rounded-lg mt-8 text-center">
              <div className="space-y-3 text-lg font-bold">
                <p>✅ NO CASH UPFRONT</p>
                <p>✅ NO INTEREST CHARGED</p>
                <p>✅ REPAYMENT THROUGH PRODUCTION, NOT OUT OF POCKET</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-center">Common Questions</h2>

              <div className="space-y-4">
                {[
                  {
                    q: "I don't have cash. Can I still join?",
                    a: "YES! That's the whole point of BUAK. You contribute local materials and labor (no cash). BUAK finances the rest. You repay through bio-slurry sales over time."
                  },
                  {
                    q: "What if I can't repay?",
                    a: "BUAK's in-kind model makes repayment easy because it happens automatically through bio-slurry sales. If you have challenges (illness, drought), BUAK works with you to adjust the plan. We're a cooperative—we support each other."
                  },
                  {
                    q: "How much can I earn from bio-slurry?",
                    a: "Average: UGX 900,000 - 1,200,000 per year. You produce about 30-45 cans (20L each) annually. BUAK pays you UGX 2,500 per can during repayment, then you keep all earnings after loan is repaid."
                  },
                  {
                    q: "Is it safe? Will my family be okay?",
                    a: "YES! Biogas is very safe when properly installed and used. BUAK trains you on safety. We've had zero serious accidents in 3 years (73 biodigesters). Your family will be healthier (no smoke) and safer (no forest trips)."
                  },
                  {
                    q: "I'm a refugee. Can I really own this?",
                    a: "ABSOLUTELY! BUAK is refugee-led. 51% of our members are refugees. Once your loan is repaid, you own the biodigester 100%. Even if you relocate, your investment stays with you or can be transferred."
                  },
                  {
                    q: "What if it breaks?",
                    a: "BUAK provides a 2-year warranty. We fix any problems free of charge. After that, we still provide maintenance support (small fee for major repairs). Our technicians visit monthly to prevent problems."
                  },
                  {
                    q: "Do I have to stop using firewood completely?",
                    a: "Most members use biogas for 70-80% of cooking, and keep a small charcoal stove for backup or very large meals. You choose what works for your family."
                  },
                  {
                    q: "How long does the biodigester last?",
                    a: "20-25 years with proper maintenance! It's a long-term investment in your family's future."
                  }
                ].map((faq, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <CardTitle className="text-lg">❓ {faq.q}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{faq.a}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="text-center mt-8">
                <Button size="lg" variant="outline">Have More Questions? Contact Us</Button>
              </div>
            </div>
          </div>
        </section>

        {/* Application Form */}
        <section className="py-16 container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4 text-center">Apply to Join BUAK</h2>
            <p className="text-center text-muted-foreground mb-8">
              Fill out this short form and we'll contact you within 7 days to schedule a site visit.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6 bg-card p-8 rounded-lg border border-border">
              <div>
                <Label htmlFor="name">Your Name *</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>

              <div>
                <Label htmlFor="phone">Phone Number *</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                />
              </div>

              <div>
                <Label htmlFor="village">Village/Zone *</Label>
                <Input
                  id="village"
                  value={formData.village}
                  onChange={(e) => setFormData({ ...formData, village: e.target.value })}
                  required
                />
              </div>

              <div>
                <Label className="mb-3 block">Are you: *</Label>
                <RadioGroup value={formData.type} onValueChange={(value) => setFormData({ ...formData, type: value })}>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="refugee" id="refugee" />
                    <Label htmlFor="refugee">Refugee</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="host" id="host" />
                    <Label htmlFor="host">Host Community</Label>
                  </div>
                </RadioGroup>
              </div>

              <div>
                <Label className="mb-3 block">Do you have:</Label>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="cattle"
                      checked={formData.hasCattle}
                      onCheckedChange={(checked) => setFormData({ ...formData, hasCattle: checked as boolean })}
                    />
                    <Label htmlFor="cattle">2+ cattle or 4+ goats</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="water"
                      checked={formData.hasWater}
                      onCheckedChange={(checked) => setFormData({ ...formData, hasWater: checked as boolean })}
                    />
                    <Label htmlFor="water">Water access (well, tap, or rainwater)</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="space"
                      checked={formData.hasSpace}
                      onCheckedChange={(checked) => setFormData({ ...formData, hasSpace: checked as boolean })}
                    />
                    <Label htmlFor="space">5m x 5m space on my land</Label>
                  </div>
                </div>
              </div>

              <div>
                <Label className="mb-3 block">How did you hear about BUAK?</Label>
                <RadioGroup value={formData.hearAbout} onValueChange={(value) => setFormData({ ...formData, hearAbout: value })}>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="mobilizer" id="mobilizer" />
                    <Label htmlFor="mobilizer">Community mobilizer</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="radio" id="radio" />
                    <Label htmlFor="radio">Radio</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="friend" id="friend" />
                    <Label htmlFor="friend">Friend/neighbor</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="other" id="other" />
                    <Label htmlFor="other">Other</Label>
                  </div>
                </RadioGroup>
              </div>

              <div>
                <Label htmlFor="additional">Additional Information (optional)</Label>
                <Textarea
                  id="additional"
                  value={formData.additional}
                  onChange={(e) => setFormData({ ...formData, additional: e.target.value })}
                  rows={4}
                />
              </div>

              <Button 
                type="submit" 
                size="lg" 
                className="w-full" 
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "SUBMIT APPLICATION"}
              </Button>

              <div className="bg-muted p-6 rounded-lg mt-6">
                <h3 className="font-bold mb-3">Or Contact Us Directly:</h3>
                <div className="space-y-2 text-sm">
                  <p>📱 Call/WhatsApp: +256 758998928 (Robert - English/Runyoro)</p>
                  <p>📍 Visit: BUAK Office, Kyangwali Settlement</p>
                  <p>📅 Office Hours: Monday-Friday, 9 AM - 5 PM</p>
                </div>
              </div>
            </form>
          </div>
        </section>

        {/* Next Steps */}
        <section className="py-16 bg-gradient-hero">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-primary-foreground">
              <h2 className="text-3xl font-bold mb-8 text-center">What Happens After You Apply?</h2>

              <div className="space-y-6">
                <div className="bg-background/10 backdrop-blur-sm p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-2">WEEK 1: Application Review</h3>
                  <ul className="space-y-1 ml-4">
                    <li>• BUAK reviews your application</li>
                    <li>• We call you to confirm details</li>
                    <li>• Schedule site visit</li>
                  </ul>
                </div>

                <div className="bg-background/10 backdrop-blur-sm p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-2">WEEK 2-3: Site Visit & Eligibility Check</h3>
                  <ul className="space-y-1 ml-4">
                    <li>• BUAK technician visits your home</li>
                    <li>• Checks livestock, water, space</li>
                    <li>• Answers your questions</li>
                    <li>• Decision: Approved or Need Adjustments</li>
                  </ul>
                </div>

                <div className="bg-background/10 backdrop-blur-sm p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-2">WEEK 4: Membership Approval</h3>
                  <ul className="space-y-1 ml-4">
                    <li>• If approved, you become official BUAK member</li>
                    <li>• Receive membership certificate</li>
                    <li>• Scheduled for construction queue</li>
                  </ul>
                </div>

                <div className="bg-background/10 backdrop-blur-sm p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-2">MONTH 2-3: Construction Begins</h3>
                  <p className="text-sm mb-2">(depending on queue position)</p>
                  <ul className="space-y-1 ml-4">
                    <li>• 15-day construction period</li>
                    <li>• Training & handover</li>
                    <li>• Start using your biodigester!</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default JoinUs;