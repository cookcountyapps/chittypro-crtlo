export function LegalAidSection() {
  return (
    <section id="legal-aid" className="py-24 bg-background" data-testid="legal-aid-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Free Legal Help for Cook County Residents
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Connect with free legal aid services for housing issues, evictions, and debt problems.
          </p>
          <div className="mt-8 bg-primary/10 border border-primary/20 rounded-xl p-6 max-w-2xl mx-auto">
            <div className="flex items-center justify-center mb-4">
              <i className="fas fa-phone text-primary text-2xl mr-3"></i>
              <div className="text-left">
                <div className="text-sm text-muted-foreground">Cook County Legal Aid Hotline</div>
                <div className="text-xl font-bold text-primary">855-956-5763</div>
              </div>
            </div>
            <p className="text-muted-foreground text-sm">
              Call for free assistance with evictions, debt issues, and housing problems. Available to all Cook County residents.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Early Resolution Program */}
          <div className="bg-card rounded-xl p-6 shadow-lg border border-border">
            <div className="flex items-center mb-4">
              <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                <i className="fas fa-handshake text-primary"></i>
              </div>
              <h3 className="text-lg font-semibold text-card-foreground">Early Resolution Program</h3>
            </div>
            <p className="text-muted-foreground mb-4">Free mediation and legal aid for unrepresented tenants and landlords in eviction court.</p>
            <a 
              href="https://cookcountylegalaid.org" 
              target="_blank" 
              className="text-primary hover:text-primary/80 font-medium inline-flex items-center"
              data-testid="link-erp"
            >
              Visit cookcountylegalaid.org <i className="fas fa-external-link-alt ml-1 text-xs"></i>
            </a>
          </div>

          {/* Chicago Volunteer Legal Services */}
          <div className="bg-card rounded-xl p-6 shadow-lg border border-border">
            <div className="flex items-center mb-4">
              <div className="bg-secondary/10 w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                <i className="fas fa-users text-secondary"></i>
              </div>
              <h3 className="text-lg font-semibold text-card-foreground">Chicago Volunteer Legal Services</h3>
            </div>
            <p className="text-muted-foreground mb-4">Comprehensive legal assistance for low-income Chicago residents facing housing issues.</p>
            <a 
              href="https://cvls.org" 
              target="_blank" 
              className="text-primary hover:text-primary/80 font-medium inline-flex items-center"
              data-testid="link-cvls"
            >
              Visit cvls.org <i className="fas fa-external-link-alt ml-1 text-xs"></i>
            </a>
          </div>

          {/* Legal Aid Chicago */}
          <div className="bg-card rounded-xl p-6 shadow-lg border border-border">
            <div className="flex items-center mb-4">
              <div className="bg-accent/10 w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                <i className="fas fa-scale-justice text-accent"></i>
              </div>
              <h3 className="text-lg font-semibold text-card-foreground">Legal Aid Chicago</h3>
            </div>
            <p className="text-muted-foreground mb-4">Free civil legal services for residents facing eviction, foreclosure, and housing discrimination.</p>
            <button 
              onClick={() => window.location.href = "/api/login"}
              className="text-primary hover:text-primary/80 font-medium inline-flex items-center"
              data-testid="link-legal-aid-chicago"
            >
              Get help <i className="fas fa-arrow-right ml-1 text-sm"></i>
            </button>
          </div>

          {/* Lawyers' Committee for Better Housing */}
          <div className="bg-card rounded-xl p-6 shadow-lg border border-border">
            <div className="flex items-center mb-4">
              <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                <i className="fas fa-home text-primary"></i>
              </div>
              <h3 className="text-lg font-semibold text-card-foreground">Lawyers' Committee for Better Housing</h3>
            </div>
            <p className="text-muted-foreground mb-4">Legal representation and advocacy for tenants facing habitability issues and evictions.</p>
            <button 
              onClick={() => window.location.href = "/api/login"}
              className="text-primary hover:text-primary/80 font-medium inline-flex items-center"
              data-testid="link-lcbh"
            >
              Contact LCBH <i className="fas fa-arrow-right ml-1 text-sm"></i>
            </button>
          </div>

          {/* Center for Disability & Elder Law */}
          <div className="bg-card rounded-xl p-6 shadow-lg border border-border">
            <div className="flex items-center mb-4">
              <div className="bg-secondary/10 w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                <i className="fas fa-wheelchair text-secondary"></i>
              </div>
              <h3 className="text-lg font-semibold text-card-foreground">Center for Disability & Elder Law</h3>
            </div>
            <p className="text-muted-foreground mb-4">Specialized legal services for seniors and individuals with disabilities in housing matters.</p>
            <button 
              onClick={() => window.location.href = "/api/login"}
              className="text-primary hover:text-primary/80 font-medium inline-flex items-center"
              data-testid="link-cdel"
            >
              Learn more <i className="fas fa-arrow-right ml-1 text-sm"></i>
            </button>
          </div>

          {/* CARPLS Legal Aid */}
          <div className="bg-card rounded-xl p-6 shadow-lg border border-border">
            <div className="flex items-center mb-4">
              <div className="bg-accent/10 w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                <i className="fas fa-briefcase text-accent"></i>
              </div>
              <h3 className="text-lg font-semibold text-card-foreground">CARPLS Legal Aid</h3>
            </div>
            <p className="text-muted-foreground mb-4">Free legal assistance for housing, family, immigration, and consumer law issues.</p>
            <button 
              onClick={() => window.location.href = "/api/login"}
              className="text-primary hover:text-primary/80 font-medium inline-flex items-center"
              data-testid="link-carpls"
            >
              Get assistance <i className="fas fa-arrow-right ml-1 text-sm"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
