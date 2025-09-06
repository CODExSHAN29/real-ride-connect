import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    title: "Real-Time Tracking",
    description: "See exactly where your bus is and when it will arrive at your stop",
    icon: "🚌",
    color: "bg-gradient-primary"
  },
  {
    title: "Smart Notifications", 
    description: "Get alerts when your bus is approaching or if there are delays",
    icon: "🔔",
    color: "bg-gradient-accent"
  },
  {
    title: "Route Planning",
    description: "Find the best routes and connections for your journey",
    icon: "🗺️",
    color: "bg-gradient-primary"
  },
  {
    title: "Offline Access",
    description: "Download routes and schedules for offline use",
    icon: "📱",
    color: "bg-gradient-accent"
  },
  {
    title: "Driver Dashboard",
    description: "Drivers get powerful tools to manage routes and communicate delays",
    icon: "🚗",
    color: "bg-gradient-primary"
  },
  {
    title: "Analytics & Insights",
    description: "Transit authorities get data to optimize routes and improve service",
    icon: "📊",
    color: "bg-gradient-accent"
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-foreground">
            Everything You Need for Better Transit
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our platform brings together passengers, drivers, and transit authorities 
            with cutting-edge technology to make public transport reliable and efficient.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="relative overflow-hidden shadow-soft hover:shadow-medium transition-all duration-300 group">
              <div className={`absolute top-0 right-0 w-20 h-20 ${feature.color} opacity-10 rounded-full -mr-10 -mt-10 group-hover:scale-110 transition-transform duration-300`} />
              
              <CardHeader>
                <div className="text-4xl mb-4">{feature.icon}</div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-card rounded-2xl p-8 shadow-medium max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-foreground">
              Trusted by Cities Worldwide
            </h3>
            <p className="text-muted-foreground mb-6">
              Our platform is helping transform public transportation in over 50 cities
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              <div className="text-lg font-semibold">🏙️ Metro Transit</div>
              <div className="text-lg font-semibold">🚌 City Bus Lines</div>
              <div className="text-lg font-semibold">🚍 Regional Transport</div>
              <div className="text-lg font-semibold">🚐 Shuttle Services</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;