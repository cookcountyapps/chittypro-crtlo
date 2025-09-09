import { Navigation } from "@/components/navigation";
import { HeroSection } from "@/components/hero-section";
import { FeaturesSection } from "@/components/features-section";
import { PricingSection } from "@/components/pricing-section";
import { LegalAidSection } from "@/components/legal-aid-section";

export default function Landing() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <FeaturesSection />
      <div id="how-it-works" className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Simple. Fast. Reliable.
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Get RTLO guidance in three simple steps, whether you're a landlord or tenant.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-primary">1</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Enter Your Situation</h3>
              <p className="text-muted-foreground">Describe your property, lease situation, or specific question about Chicago RTLO requirements.</p>
            </div>

            <div className="text-center">
              <div className="bg-secondary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-secondary">2</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Get Instant Analysis</h3>
              <p className="text-muted-foreground">Our system searches Chicago Municipal Code 5-12 and provides specific guidance and requirements.</p>
            </div>

            <div className="text-center">
              <div className="bg-accent/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-accent">3</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Take Action</h3>
              <p className="text-muted-foreground">Get actionable next steps, generate compliant documents, or connect with legal aid resources.</p>
            </div>
          </div>

          {/* Demo Section */}
          <div className="mt-20 bg-muted/50 rounded-2xl p-8 md:p-12">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-foreground mb-6 text-center">Try a Sample Question</h3>
              <div className="bg-card rounded-xl p-6 shadow-sm border border-border">
                <div className="flex items-start space-x-4 mb-4">
                  <div className="bg-primary/10 w-10 h-10 rounded-full flex items-center justify-center">
                    <i className="fas fa-question text-primary"></i>
                  </div>
                  <div className="flex-1">
                    <div className="text-muted-foreground text-sm mb-1">Sample Question:</div>
                    <div className="text-foreground font-medium">"What are the Chicago security deposit limits for my rental property?"</div>
                  </div>
                </div>
                <div className="bg-muted/50 rounded-lg p-4 ml-14">
                  <div className="flex items-start space-x-3">
                    <div className="bg-secondary/10 w-8 h-8 rounded-full flex items-center justify-center mt-1">
                      <i className="fas fa-robot text-secondary text-sm"></i>
                    </div>
                    <div className="flex-1 text-sm text-muted-foreground">
                      <strong className="text-foreground">Chicago RTLO Section 5-12-080(a)</strong> limits security deposits to no more than 1.5 times the monthly rent for unfurnished dwelling units. For furnished units, the limit is 2 times the monthly rent. Deposits must be returned within 45 days with itemized deductions...
                      <div className="mt-2 text-xs bg-accent/20 text-accent px-2 py-1 rounded inline-block">
                        Source: Chicago Municipal Code Chapter 5-12
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <PricingSection />
      <LegalAidSection />
      
      {/* Call to Action Section */}
      <section className="py-24 bg-gradient-to-r from-primary to-secondary">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Simplify RTLO Compliance?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join thousands of Chicago landlords and tenants who trust ChittyPro for accurate RTLO guidance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              className="bg-accent text-accent-foreground hover:bg-accent/90 px-8 py-4 rounded-xl text-lg font-semibold transition-all transform hover:scale-105"
              onClick={() => window.location.href = "/api/login"}
              data-testid="button-start-free"
            >
              Start Free Today
            </button>
            <button className="bg-white/20 text-white hover:bg-white/30 px-8 py-4 rounded-xl text-lg font-semibold transition-all border border-white/30 backdrop-blur-sm">
              Schedule Demo
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted/50 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <h3 className="text-2xl font-bold text-primary mb-4">ChittyPro</h3>
              <p className="text-muted-foreground mb-4 max-w-md">
                The most comprehensive Chicago RTLO compliance platform for landlords and tenants. Based on Chicago Municipal Code Chapter 5-12.
              </p>
              <div className="text-sm text-muted-foreground">
                <div className="flex items-center mb-2">
                  <i className="fas fa-shield-alt text-primary mr-2"></i>
                  <span>RTLO Chapter 5-12 Certified</span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-clock text-primary mr-2"></i>
                  <span>Last Updated: May 1st, 2024</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-foreground mb-4">Platform</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#features" className="hover:text-primary transition-colors">Features</a></li>
                <li><a href="#pricing" className="hover:text-primary transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">API Documentation</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Status</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-foreground mb-4">Resources</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="https://codelibrary.amlegal.com/codes/chicago/latest/chicago_il/0-0-0-2639041#JD_Ch.5-12" target="_blank" className="hover:text-primary transition-colors">Chicago RTLO Text</a></li>
                <li><a href="https://www.chicago.gov/city/en/depts/doh/provdrs/landlords/svcs/residential-landlord-and-tenant-ordinance.html" target="_blank" className="hover:text-primary transition-colors">City of Chicago DOH</a></li>
                <li><a href="https://cookcountylegalaid.org" target="_blank" className="hover:text-primary transition-colors">Legal Aid Directory</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Support Center</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="text-muted-foreground text-sm">
              © 2024 ChittyPro. All rights reserved. | Not a substitute for legal advice.
            </div>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Terms of Service</a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
