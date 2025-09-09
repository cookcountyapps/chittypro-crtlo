export function FeaturesSection() {
  return (
    <section id="features" className="py-24 bg-muted/30" data-testid="features-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Everything You Need for RTLO Compliance
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From basic questions to complex legal situations, ChittyPro provides comprehensive tools for Chicago landlords and tenants.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Property Verification */}
          <div className="bg-card rounded-xl p-8 shadow-lg border border-border hover:shadow-xl transition-all group">
            <div className="bg-primary/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
              <i className="fas fa-building text-2xl text-primary"></i>
            </div>
            <h3 className="text-xl font-semibold text-card-foreground mb-3">Property Verification</h3>
            <p className="text-muted-foreground mb-4">Instantly verify if your Chicago property is covered under RTLO and understand applicable regulations.</p>
            <button 
              onClick={() => window.location.href = "/api/login"}
              className="text-primary hover:text-primary/80 font-medium inline-flex items-center"
              data-testid="feature-property-verification"
            >
              Learn more <i className="fas fa-arrow-right ml-1 text-sm"></i>
            </button>
          </div>

          {/* RTLO Q&A System */}
          <div className="bg-card rounded-xl p-8 shadow-lg border border-border hover:shadow-xl transition-all group">
            <div className="bg-secondary/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-secondary/20 transition-colors">
              <i className="fas fa-comments text-2xl text-secondary"></i>
            </div>
            <h3 className="text-xl font-semibold text-card-foreground mb-3">RTLO Q&A System</h3>
            <p className="text-muted-foreground mb-4">Get instant answers to your questions about security deposits, rent increases, and tenant rights.</p>
            <button 
              onClick={() => window.location.href = "/api/login"}
              className="text-primary hover:text-primary/80 font-medium inline-flex items-center"
              data-testid="feature-rtlo-qa"
            >
              Ask a question <i className="fas fa-arrow-right ml-1 text-sm"></i>
            </button>
          </div>

          {/* Document Generation */}
          <div className="bg-card rounded-xl p-8 shadow-lg border border-border hover:shadow-xl transition-all group">
            <div className="bg-accent/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
              <i className="fas fa-file-alt text-2xl text-accent"></i>
            </div>
            <h3 className="text-xl font-semibold text-card-foreground mb-3">Document Generation</h3>
            <p className="text-muted-foreground mb-4">Generate RTLO-compliant notices, lease addendums, and legal forms automatically.</p>
            <button 
              onClick={() => window.location.href = "/api/login"}
              className="text-primary hover:text-primary/80 font-medium inline-flex items-center"
              data-testid="feature-document-generation"
            >
              Generate docs <i className="fas fa-arrow-right ml-1 text-sm"></i>
            </button>
          </div>

          {/* AI Lease Analysis */}
          <div className="bg-card rounded-xl p-8 shadow-lg border border-border hover:shadow-xl transition-all group">
            <div className="bg-primary/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
              <i className="fas fa-robot text-2xl text-primary"></i>
            </div>
            <h3 className="text-xl font-semibold text-card-foreground mb-3">AI Lease Analysis</h3>
            <p className="text-muted-foreground mb-4">Upload your lease and get AI-powered analysis for RTLO compliance issues and recommendations.</p>
            <div className="bg-accent/20 text-accent text-xs font-semibold px-2 py-1 rounded-full inline-block mb-3">PREMIUM</div>
            <br/>
            <button 
              onClick={() => window.location.href = "/api/login"}
              className="text-primary hover:text-primary/80 font-medium inline-flex items-center"
              data-testid="feature-ai-analysis"
            >
              Try AI analysis <i className="fas fa-arrow-right ml-1 text-sm"></i>
            </button>
          </div>

          {/* Court Forms Integration */}
          <div className="bg-card rounded-xl p-8 shadow-lg border border-border hover:shadow-xl transition-all group">
            <div className="bg-secondary/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-secondary/20 transition-colors">
              <i className="fas fa-gavel text-2xl text-secondary"></i>
            </div>
            <h3 className="text-xl font-semibold text-card-foreground mb-3">Illinois Court Forms</h3>
            <p className="text-muted-foreground mb-4">Access and auto-fill Illinois court forms for eviction proceedings and legal actions.</p>
            <button 
              onClick={() => window.location.href = "/api/login"}
              className="text-primary hover:text-primary/80 font-medium inline-flex items-center"
              data-testid="feature-court-forms"
            >
              View forms <i className="fas fa-arrow-right ml-1 text-sm"></i>
            </button>
          </div>

          {/* Compliance Checker */}
          <div className="bg-card rounded-xl p-8 shadow-lg border border-border hover:shadow-xl transition-all group">
            <div className="bg-accent/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
              <i className="fas fa-shield-alt text-2xl text-accent"></i>
            </div>
            <h3 className="text-xl font-semibold text-card-foreground mb-3">Compliance Checker</h3>
            <p className="text-muted-foreground mb-4">Run comprehensive compliance checks on your properties and rental practices.</p>
            <button 
              onClick={() => window.location.href = "/api/login"}
              className="text-primary hover:text-primary/80 font-medium inline-flex items-center"
              data-testid="feature-compliance-checker"
            >
              Check compliance <i className="fas fa-arrow-right ml-1 text-sm"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
