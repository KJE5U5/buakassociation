import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Financials = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-hero">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold text-primary-foreground mb-4">Financials</h1>
            <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
              Transparent financial data demonstrating BUAK's proven business model
            </p>
          </div>
        </section>

        {/* Unit Economics */}
        <section className="py-16 container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Unit Economics</h2>
            
            <div className="bg-card border border-border rounded-lg p-8 mb-8">
              <h3 className="text-2xl font-bold mb-6 text-primary">Per Biodigester Investment</h3>
              <div className="space-y-4">
                <div className="flex justify-between border-b border-border pb-2">
                  <span className="font-medium">Total Investment:</span>
                  <span className="font-bold">UGX 3,500,000 ($950)</span>
                </div>
                <div className="flex justify-between pl-4">
                  <span className="text-muted-foreground">Member Contribution (30% in-kind):</span>
                  <span>UGX 1,050,000</span>
                </div>
                <div className="flex justify-between pl-4 border-b border-border pb-2">
                  <span className="text-muted-foreground">BUAK Investment (70% cash):</span>
                  <span>UGX 2,450,000</span>
                </div>
                
                <div className="flex justify-between pt-4">
                  <span className="font-medium">Annual Revenue:</span>
                  <span className="font-bold">UGX 1,200,000 - 1,800,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Gross Margin:</span>
                  <span className="font-bold text-primary">26%</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Payback Period:</span>
                  <span className="font-bold">18-24 months</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">ROI (post-payback):</span>
                  <span className="font-bold text-secondary">15-20% annually</span>
                </div>
              </div>
            </div>

            {/* Operational Performance */}
            <h2 className="text-3xl font-bold mb-8 mt-12">Operational Performance (2021-2024)</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-card p-6 rounded-lg border border-border">
                <h3 className="text-lg font-bold mb-2">Repayment Rate</h3>
                <p className="text-4xl font-bold text-primary mb-2">95%</p>
                <p className="text-sm text-muted-foreground">Up from 54% in cash-based model</p>
              </div>
              <div className="bg-card p-6 rounded-lg border border-border">
                <h3 className="text-lg font-bold mb-2">System Uptime</h3>
                <p className="text-4xl font-bold text-primary mb-2">87.7%</p>
                <p className="text-sm text-muted-foreground">Monthly maintenance ensures reliability</p>
              </div>
              <div className="bg-card p-6 rounded-lg border border-border">
                <h3 className="text-lg font-bold mb-2">Member Retention</h3>
                <p className="text-4xl font-bold text-primary mb-2">100%</p>
                <p className="text-sm text-muted-foreground">Zero members have left BUAK</p>
              </div>
              <div className="bg-card p-6 rounded-lg border border-border">
                <h3 className="text-lg font-bold mb-2">Total Revenue</h3>
                <p className="text-4xl font-bold text-primary mb-2">UGX 87.6M</p>
                <p className="text-sm text-muted-foreground">Community revenue generated to date</p>
              </div>
            </div>
          </div>
        </section>

        {/* Financial Projections */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold mb-8">Growth Projections (2025-2027)</h2>
            <div className="bg-card p-8 rounded-lg border border-border">
              <div className="space-y-6">
                <div>
                  <h3 className="font-bold text-xl mb-3">With $25,000 Investment:</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>✓ Scale from 73 to 300 biodigesters</li>
                    <li>✓ Generate UGX 360M+ in community revenue</li>
                    <li>✓ Create 227 new income-generating opportunities</li>
                    <li>✓ Achieve financial sustainability (no donor dependence)</li>
                    <li>✓ Revolving fund grows to support 500+ digesters by 2027</li>
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

export default Financials;
