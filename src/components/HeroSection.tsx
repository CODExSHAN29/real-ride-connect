import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-bus.jpg";

const HeroSection = () => {
  const scrollToAuth = () => {
    document.getElementById('auth-section')?.scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Modern bus with real-time tracking"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/80" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Never Miss Your
            <span className="block bg-gradient-accent bg-clip-text text-transparent">
              Bus Again
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto leading-relaxed">
            Real-time bus tracking, accurate arrival predictions, and seamless route planning. 
            Get where you need to go, when you need to be there.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              variant="secondary"
              onClick={scrollToAuth}
              className="text-lg px-8 py-6 bg-white text-primary hover:bg-white/90 shadow-medium"
            >
              Get Started Now
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={scrollToAuth}
              className="text-lg px-8 py-6 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm"
            >
              Learn More
            </Button>
          </div>
          
          {/* Stats */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-accent">99.9%</div>
              <div className="text-white/80">Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent">2min</div>
              <div className="text-white/80">Avg Accuracy</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent">500K+</div>
              <div className="text-white/80">Daily Users</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;