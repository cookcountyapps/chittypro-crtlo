import { Button } from "@/components/ui/button";

export function PricingSection() {
  return (
    <section id="pricing" className="py-24 bg-muted/30" data-testid="pricing-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Choose Your Plan
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Start with basic RTLO guidance or unlock premium AI-powered features for comprehensive compliance management.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Basic Plan */}
          <div className="bg-card rounded-2xl p-8 shadow-lg border border-border relative">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-foreground mb-2">Basic</h3>
              <p className="text-muted-foreground mb-6">Essential RTLO guidance</p>
              <div className="mb-8">
                <span className="text-4xl font-bold text-primary">Free</span>
              </div>
              <ul className="space-y-4 text-left mb-8">
                <li className="flex items-center">
                  <i className="fas fa-check text-primary mr-3"></i>
                  <span className="text-muted-foreground">RTLO Q&A system</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check text-primary mr-3"></i>
                  <span className="text-muted-foreground">Property verification</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check text-primary mr-3"></i>
                  <span className="text-muted-foreground">Basic document templates</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check text-primary mr-3"></i>
                  <span className="text-muted-foreground">Legal aid directory</span>
                </li>
              </ul>
              <Button 
                variant="secondary" 
                className="w-full"
                onClick={() => window.location.href = "/api/login"}
                data-testid="button-basic-plan"
              >
                Get Started Free
              </Button>
            </div>
          </div>

          {/* Pro Plan */}
          <div className="bg-card rounded-2xl p-8 shadow-xl border-2 border-primary relative">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span className="bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold">
                Most Popular
              </span>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold text-foreground mb-2">Professional</h3>
              <p className="text-muted-foreground mb-6">Advanced compliance tools</p>
              <div className="mb-8">
                <span className="text-4xl font-bold text-primary">$29</span>
                <span className="text-muted-foreground">/month</span>
              </div>
              <ul className="space-y-4 text-left mb-8">
                <li className="flex items-center">
                  <i className="fas fa-check text-primary mr-3"></i>
                  <span className="text-foreground">Everything in Basic</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check text-primary mr-3"></i>
                  <span className="text-foreground">AI lease analysis</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check text-primary mr-3"></i>
                  <span className="text-foreground">Advanced document generation</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check text-primary mr-3"></i>
                  <span className="text-foreground">Compliance monitoring</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check text-primary mr-3"></i>
                  <span className="text-foreground">Priority support</span>
                </li>
              </ul>
              <Button 
                className="w-full"
                onClick={() => window.location.href = "/api/login"}
                data-testid="button-pro-plan"
              >
                Start Free Trial
              </Button>
            </div>
          </div>

          {/* Enterprise Plan */}
          <div className="bg-card rounded-2xl p-8 shadow-lg border border-border relative">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-foreground mb-2">Enterprise</h3>
              <p className="text-muted-foreground mb-6">White-label & multi-tenant</p>
              <div className="mb-8">
                <span className="text-4xl font-bold text-primary">$99</span>
                <span className="text-muted-foreground">/month</span>
              </div>
              <ul className="space-y-4 text-left mb-8">
                <li className="flex items-center">
                  <i className="fas fa-check text-primary mr-3"></i>
                  <span className="text-foreground">Everything in Professional</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check text-primary mr-3"></i>
                  <span className="text-foreground">White-label branding</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check text-primary mr-3"></i>
                  <span className="text-foreground">Multi-tenant architecture</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check text-primary mr-3"></i>
                  <span className="text-foreground">API access</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check text-primary mr-3"></i>
                  <span className="text-foreground">Dedicated support</span>
                </li>
              </ul>
              <Button 
                variant="outline"
                className="w-full bg-accent text-accent-foreground hover:bg-accent/90"
                data-testid="button-enterprise-plan"
              >
                Contact Sales
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
