import { Button } from "@/components/ui/button";

export function Navigation() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="bg-card border-b border-border sticky top-0 z-50 backdrop-blur-lg bg-card/95" data-testid="navigation">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-primary">ChittyPro</h1>
            </div>
            <div className="hidden md:block ml-10">
              <div className="flex items-baseline space-x-8">
                <button 
                  onClick={() => scrollToSection('features')}
                  className="text-muted-foreground hover:text-primary px-3 py-2 text-sm font-medium transition-colors"
                  data-testid="nav-features"
                >
                  Features
                </button>
                <button 
                  onClick={() => scrollToSection('how-it-works')}
                  className="text-muted-foreground hover:text-primary px-3 py-2 text-sm font-medium transition-colors"
                  data-testid="nav-how-it-works"
                >
                  How It Works
                </button>
                <button 
                  onClick={() => scrollToSection('pricing')}
                  className="text-muted-foreground hover:text-primary px-3 py-2 text-sm font-medium transition-colors"
                  data-testid="nav-pricing"
                >
                  Pricing
                </button>
                <button 
                  onClick={() => scrollToSection('legal-aid')}
                  className="text-muted-foreground hover:text-primary px-3 py-2 text-sm font-medium transition-colors"
                  data-testid="nav-legal-aid"
                >
                  Legal Aid
                </button>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Button 
              variant="ghost"
              onClick={() => window.location.href = "/api/login"}
              data-testid="button-login"
            >
              Log In
            </Button>
            <Button 
              onClick={() => window.location.href = "/api/login"}
              data-testid="button-get-started"
            >
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
