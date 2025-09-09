import { Button } from "@/components/ui/button";

export function LegalAidSection() {
  return (
    <section id="legal-aid" className="py-24 bg-background" data-testid="legal-aid-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Legal Aid Resources
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Connect with Cook County legal aid organizations and attorneys specializing in landlord-tenant law.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Early Resolution Program */}
          <div className="bg-card rounded-xl p-8 shadow-lg border border-border hover:shadow-xl transition-all">
            <div className="bg-primary/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
              <i className="fas fa-balance-scale text-2xl text-primary"></i>
            </div>
            <h3 className="text-xl font-semibold text-card-foreground mb-3">Early Resolution Program</h3>
            <p className="text-muted-foreground mb-4">Free mediation and legal aid for unrepresented tenants and landlords in eviction court.</p>
            <div className="text-sm text-muted-foreground mb-4">
              <p><strong>Phone:</strong> 855-956-5763</p>
            </div>
            <Button 
              variant="outline" 
              size="sm"
              className="w-full"
              data-testid="contact-erp"
            >
              Contact ERP
            </Button>
          </div>

          {/* Chicago Volunteer Legal Services */}
          <div className="bg-card rounded-xl p-8 shadow-lg border border-border hover:shadow-xl transition-all">
            <div className="bg-secondary/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
              <i className="fas fa-users text-2xl text-secondary"></i>
            </div>
            <h3 className="text-xl font-semibold text-card-foreground mb-3">Chicago Volunteer Legal Services</h3>
            <p className="text-muted-foreground mb-4">Comprehensive legal assistance for low-income Chicago residents facing housing issues.</p>
            <div className="text-sm text-muted-foreground mb-4">
              <p><strong>Services:</strong> Housing law, eviction defense</p>
            </div>
            <Button 
              variant="outline" 
              size="sm"
              className="w-full"
              data-testid="contact-cvls"
            >
              Learn More
            </Button>
          </div>

          {/* Legal Aid Chicago */}
          <div className="bg-card rounded-xl p-8 shadow-lg border border-border hover:shadow-xl transition-all">
            <div className="bg-accent/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
              <i className="fas fa-home text-2xl text-accent"></i>
            </div>
            <h3 className="text-xl font-semibold text-card-foreground mb-3">Legal Aid Chicago</h3>
            <p className="text-muted-foreground mb-4">Free civil legal services for residents facing eviction, foreclosure, and housing discrimination.</p>
            <div className="text-sm text-muted-foreground mb-4">
              <p><strong>Eligibility:</strong> Income-qualified residents</p>
            </div>
            <Button 
              variant="outline" 
              size="sm"
              className="w-full"
              data-testid="contact-legal-aid-chicago"
            >
              Get Help
            </Button>
          </div>
        </div>

        <div className="text-center mt-12">
          <Button 
            onClick={() => window.location.href = "/api/login"}
            data-testid="button-view-all-resources"
          >
            <i className="fas fa-search mr-2"></i>
            View All Legal Aid Resources
          </Button>
        </div>
      </div>
    </section>
  );
}