import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AuthSection from "@/components/AuthSection";  
import FeaturesSection from "@/components/FeaturesSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <AuthSection />
      </main>
      
      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
                  <span className="text-foreground font-bold text-sm">🚌</span>
                </div>
                <span className="text-xl font-bold">BusTracker</span>
              </div>
              <p className="text-primary-foreground/80">
                Making public transit reliable and efficient for everyone.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">For Passengers</h3>
              <ul className="space-y-2 text-primary-foreground/80">
                <li><a href="#" className="hover:text-accent transition-colors">Real-time Tracking</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Route Planning</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Mobile App</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">For Drivers</h3>
              <ul className="space-y-2 text-primary-foreground/80">
                <li><a href="#" className="hover:text-accent transition-colors">Driver Dashboard</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Route Management</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Support</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-primary-foreground/80">
                <li><a href="#" className="hover:text-accent transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-primary-foreground/60">
            <p>&copy; 2024 BusTracker. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
