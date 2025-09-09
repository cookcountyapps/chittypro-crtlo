import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-primary via-secondary to-primary pt-20 pb-32 relative overflow-hidden" data-testid="hero-section">
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Chicago RTLO<br/>
            <span className="text-accent">Compliance Made Simple</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Navigate Chicago's Residential Landlord and Tenant Ordinance with confidence. 
            Get instant answers, compliance checks, and legal document generation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 px-8 py-4 text-lg font-semibold transition-all transform hover:scale-105 shadow-lg"
              onClick={() => window.location.href = "/api/login"}
              data-testid="button-search-rtlo"
            >
              <i className="fas fa-search mr-2"></i>
              Search RTLO Rules
            </Button>
            <Button 
              variant="outline"
              size="lg"
              className="bg-white/20 text-white hover:bg-white/30 px-8 py-4 text-lg font-semibold transition-all border border-white/30 backdrop-blur-sm"
              data-testid="button-watch-demo"
            >
              <i className="fas fa-play mr-2"></i>
              Watch Demo
            </Button>
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-3xl font-bold text-accent mb-2">5-12</div>
              <div className="text-white/90">Chicago Municipal Code Chapter</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-3xl font-bold text-accent mb-2">1986</div>
              <div className="text-white/90">RTLO Established</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-3xl font-bold text-accent mb-2">24/7</div>
              <div className="text-white/90">Instant Access</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
