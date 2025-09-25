import { Card, CardContent } from '@/components/ui/card';
import { Zap, Users, Award, Rocket } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Cutting-Edge Technology",
      description: "Experience anime like never before with our advanced streaming technology and AI-powered recommendations."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Global Community",
      description: "Join millions of anime enthusiasts from around the world in our vibrant, interactive community."
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Premium Quality",
      description: "Enjoy the highest quality anime content with 4K resolution and immersive audio experiences."
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Future Innovation",
      description: "Stay ahead with exclusive early access to upcoming anime series and groundbreaking features."
    }
  ];

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="font-heading text-4xl md:text-6xl font-bold mb-6 text-glow animate-float">
            About <span className="text-primary">ChronoVerse</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-8">
            ChronoVerse is the ultimate destination for futuristic anime streaming. We bridge the gap between 
            traditional storytelling and cutting-edge technology, delivering an unparalleled viewing experience 
            that transcends time and space.
          </p>
          <div className="flex justify-center">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=300&fit=crop&auto=format&q=80" 
                alt="Futuristic anime streaming experience"
                className="rounded-lg border border-border glow-primary"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>

        {/* Mission Statement */}
        <div className="mb-16">
          <Card className="bg-gradient-hero border-border glow-primary">
            <CardContent className="p-8 text-center">
              <h2 className="font-heading text-3xl font-bold mb-6 text-primary">Our Mission</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-6">
                To revolutionize the anime streaming experience by combining state-of-the-art technology 
                with the timeless art of Japanese animation, creating a platform where the future of 
                entertainment meets the passion of fans worldwide.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent mb-2">4K Ultra HD</div>
                  <div className="text-sm text-muted-foreground">Crystal Clear Quality</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent mb-2">AI Powered</div>
                  <div className="text-sm text-muted-foreground">Smart Recommendations</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent mb-2">VR Ready</div>
                  <div className="text-sm text-muted-foreground">Immersive Experience</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="anime-card bg-card border-border">
              <CardContent className="p-6">
                <div className="text-primary mb-4 animate-glow">
                  {feature.icon}
                </div>
                <h3 className="font-heading text-xl font-bold mb-3 text-glow">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {[
            { number: "10K+", label: "Anime Series" },
            { number: "50M+", label: "Global Users" },
            { number: "99.9%", label: "Uptime" },
            { number: "4K", label: "Ultra HD Quality" }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="font-heading text-3xl md:text-4xl font-bold text-primary text-glow mb-2">
                {stat.number}
              </div>
              <div className="text-muted-foreground text-sm md:text-base">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Vision Section */}
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl font-bold mb-6 text-glow">
            The Future is <span className="text-accent">Now</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
            We're not just streaming anime – we're building the future of entertainment. 
            With virtual reality integration, AI-powered storytelling, and immersive experiences 
            that blur the line between viewer and participant, ChronoVerse is pioneering 
            the next evolution of anime consumption.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="anime-card bg-card border-border">
              <CardContent className="p-6">
                <h3 className="font-heading text-xl font-bold mb-3 text-primary">Advanced Streaming</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Experience seamless 4K streaming with adaptive bitrate technology that adjusts to your connection for the perfect viewing experience.
                </p>
                <img 
                  src="https://images.unsplash.com/photo-1518709594023-6eab9bab7b23?w=300&h=200&fit=crop&auto=format&q=80" 
                  alt="Advanced streaming technology"
                  className="w-full h-32 object-cover rounded border border-border"
                />
              </CardContent>
            </Card>
            
            <Card className="anime-card bg-card border-border">
              <CardContent className="p-6">
                <h3 className="font-heading text-xl font-bold mb-3 text-primary">Community Features</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Connect with fellow anime fans, share reviews, create watchlists, and participate in live watch parties with friends around the world.
                </p>
                <img 
                  src="https://images.unsplash.com/photo-1542393545-10f5cde2c810?w=300&h=200&fit=crop&auto=format&q=80" 
                  alt="Community features"
                  className="w-full h-32 object-cover rounded border border-border"
                />
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Team Section */}
        <div className="text-center">
          <h2 className="font-heading text-3xl font-bold mb-8 text-glow">
            Meet Our <span className="text-primary">Team</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="anime-card bg-card border-border">
              <CardContent className="p-6 text-center">
                <div className="w-20 h-20 bg-gradient-primary rounded-full mx-auto mb-4 glow-primary"></div>
                <h3 className="font-heading text-lg font-bold mb-2 text-primary">Akira Tanaka</h3>
                <p className="text-sm text-accent mb-2">CEO & Founder</p>
                <p className="text-xs text-muted-foreground">Former Studio Ghibli animator with 15+ years experience</p>
              </CardContent>
            </Card>
            
            <Card className="anime-card bg-card border-border">
              <CardContent className="p-6 text-center">
                <div className="w-20 h-20 bg-gradient-primary rounded-full mx-auto mb-4 glow-primary"></div>
                <h3 className="font-heading text-lg font-bold mb-2 text-primary">Yuki Nakamura</h3>
                <p className="text-sm text-accent mb-2">CTO</p>
                <p className="text-xs text-muted-foreground">Ex-Netflix tech lead specializing in streaming technology</p>
              </CardContent>
            </Card>
            
            <Card className="anime-card bg-card border-border">
              <CardContent className="p-6 text-center">
                <div className="w-20 h-20 bg-gradient-primary rounded-full mx-auto mb-4 glow-primary"></div>
                <h3 className="font-heading text-lg font-bold mb-2 text-primary">Rei Sato</h3>
                <p className="text-sm text-accent mb-2">Head of Content</p>
                <p className="text-xs text-muted-foreground">Anime industry veteran with connections to major studios</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;