import { Button } from "@/components/ui/button";

const Header = () => {
  const scrollToAuth = () => {
    document.getElementById('auth-section')?.scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">🚌</span>
            </div>
            <span className="text-xl font-bold text-foreground">BusTracker</span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
              Features
            </a>
            <a href="#auth-section" className="text-muted-foreground hover:text-foreground transition-colors">
              How it Works
            </a>
            <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            <Button variant="ghost" onClick={scrollToAuth}>
              Sign In
            </Button>
            <Button onClick={scrollToAuth} className="bg-gradient-primary">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;