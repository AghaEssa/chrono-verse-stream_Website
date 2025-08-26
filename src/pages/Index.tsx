import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { Play, Star, Zap, Users, Award } from 'lucide-react';
import heroImage from '@/assets/hero-anime.jpg';
import AnimeCard from '@/components/AnimeCard';

const Index = () => {
  const featuredAnime = [
    {
      title: "Cyberpunk Chronicles",
      description: "In a neon-soaked future, hackers fight against corporate overlords in the ultimate digital battleground.",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
      rating: 9.1,
      year: "2024",
      genre: ["Action", "Cyberpunk", "Thriller"]
    },
    {
      title: "Neo Genesis",
      description: "Humanity's last hope lies in giant mechs piloted by teenagers with mysterious powers.",
      image: "https://images.unsplash.com/photo-1596727147705-61a532a659bd?w=400&h=300&fit=crop", 
      rating: 8.9,
      year: "2024",
      genre: ["Mecha", "Drama", "Sci-Fi"]
    },
    {
      title: "Digital Souls",
      description: "When consciousness can be digitized, what makes us human in a world of artificial intelligence?",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
      rating: 8.7,
      year: "2023",
      genre: ["Psychological", "Sci-Fi", "Drama"]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/40 to-background" />
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-glow animate-float">
            CHRONO<span className="text-primary">VERSE</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Enter the future of anime streaming. Where time bends, realities merge, 
            and every story transcends dimensions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-gradient-primary hover:opacity-90 glow-primary text-lg px-8 py-6"
            >
              <Play className="w-5 h-5 mr-2" />
              Start Watching
            </Button>
            <Link to="/services">
              <Button 
                variant="outline" 
                size="lg" 
                className="cyber-border text-lg px-8 py-6"
              >
                Explore Library
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Anime Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4 text-glow">
              Featured <span className="text-primary">Anime</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover the latest and greatest in futuristic anime entertainment
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredAnime.map((anime, index) => (
              <div 
                key={index} 
                className="animate-fade-in" 
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <AnimeCard {...anime} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-gradient-hero">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4 text-glow">
              Why Choose <span className="text-accent">ChronoVerse</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Zap className="w-12 h-12" />,
                title: "Ultra HD Streaming",
                description: "Experience anime in stunning 4K resolution with HDR support and crystal-clear audio."
              },
              {
                icon: <Users className="w-12 h-12" />,
                title: "Global Community", 
                description: "Connect with millions of anime fans worldwide and share your passion."
              },
              {
                icon: <Award className="w-12 h-12" />,
                title: "Exclusive Content",
                description: "Access to exclusive series, early releases, and behind-the-scenes content."
              }
            ].map((feature, index) => (
              <Card key={index} className="anime-card bg-card border-border text-center">
                <CardContent className="p-8">
                  <div className="text-primary mb-6 flex justify-center animate-glow">
                    {feature.icon}
                  </div>
                  <h3 className="font-heading text-xl font-bold mb-4 text-glow">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6 text-glow">
              Ready to Enter the <span className="text-primary">Future</span>?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join millions of anime enthusiasts in the most advanced streaming platform ever created.
            </p>
            <Link to="/signup">
              <Button 
                size="lg" 
                className="bg-gradient-accent hover:opacity-90 glow-accent text-lg px-12 py-6"
              >
                <Star className="w-5 h-5 mr-2" />
                Get Started Free
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
