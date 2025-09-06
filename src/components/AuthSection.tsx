import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";

const AuthSection = () => {
  const [userType, setUserType] = useState<'passenger' | 'driver'>('passenger');
  const { toast } = useToast();

  const handleSocialLogin = (provider: string) => {
    toast({
      title: "Authentication Required",
      description: `${provider} login will be available once you connect to Supabase for backend functionality.`,
      variant: "default",
    });
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Authentication Required", 
      description: "Connect to Supabase to enable full authentication functionality.",
      variant: "default",
    });
  };

  return (
    <section id="auth-section" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-foreground">
            Join the Movement
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Whether you're a passenger looking for reliable transit or a driver wanting to provide better service, 
            we've got you covered.
          </p>
        </div>

        <div className="max-w-md mx-auto">
          <Card className="shadow-medium">
            <CardHeader className="text-center">
              <div className="flex justify-center mb-4">
                <div className="flex bg-muted rounded-lg p-1">
                  <button
                    onClick={() => setUserType('passenger')}
                    className={`px-6 py-2 rounded-md text-sm font-medium transition-all ${
                      userType === 'passenger' 
                        ? 'bg-primary text-primary-foreground shadow-sm' 
                        : 'text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    Passenger
                  </button>
                  <button
                    onClick={() => setUserType('driver')}
                    className={`px-6 py-2 rounded-md text-sm font-medium transition-all ${
                      userType === 'driver' 
                        ? 'bg-primary text-primary-foreground shadow-sm' 
                        : 'text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    Driver
                  </button>
                </div>
              </div>
              <CardTitle className="text-2xl">
                {userType === 'passenger' ? 'Track Your Ride' : 'Drive with Us'}
              </CardTitle>
              <CardDescription>
                {userType === 'passenger' 
                  ? 'Get real-time updates and never wait at the stop again'
                  : 'Join our driver network and help improve public transit'
                }
              </CardDescription>
            </CardHeader>
            
            <CardContent className="space-y-6">
              {/* Social Login Buttons */}
              <div className="space-y-3">
                <Button 
                  variant="outline" 
                  className="w-full flex items-center justify-center gap-3"
                  onClick={() => handleSocialLogin('Google')}
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                  Continue with Google
                </Button>
                
                <Button 
                  variant="outline" 
                  className="w-full flex items-center justify-center gap-3"
                  onClick={() => handleSocialLogin('Facebook')}
                >
                  <svg className="w-5 h-5" fill="#1877F2" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                  Continue with Facebook
                </Button>
              </div>

              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-card px-2 text-muted-foreground">Or continue with email</span>
                </div>
              </div>

              {/* Email Form */}
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder={userType === 'passenger' ? 'passenger@example.com' : 'driver@example.com'}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="Enter your password"
                    required
                  />
                </div>

                {userType === 'driver' && (
                  <div className="space-y-2">
                    <Label htmlFor="license">License Number</Label>
                    <Input
                      id="license"
                      type="text"
                      placeholder="Enter your license number"
                      required
                    />
                  </div>
                )}

                <Button type="submit" className="w-full bg-gradient-primary">
                  {userType === 'passenger' ? 'Start Tracking' : 'Join Our Fleet'}
                </Button>
              </form>

              <p className="text-center text-sm text-muted-foreground">
                By continuing, you agree to our{" "}
                <a href="#" className="underline hover:text-primary">Terms of Service</a>
                {" "}and{" "}
                <a href="#" className="underline hover:text-primary">Privacy Policy</a>
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AuthSection;