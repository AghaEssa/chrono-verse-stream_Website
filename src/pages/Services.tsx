import AnimeCard from '@/components/AnimeCard';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, Filter } from 'lucide-react';

const Services = () => {
  const animeList = [
    {
      title: "Ghost in the Shell: Arise",
      description: "In a future where cybernetic enhancements are commonplace, Major Motoko Kusanagi leads Section 9 in investigating cybercrimes.",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
      rating: 8.9,
      year: "2024",
      genre: ["Action", "Sci-Fi", "Cyberpunk"]
    },
    {
      title: "Neon Genesis: Revival",
      description: "Humanity's last hope lies in young pilots who must synchronize with bio-mechanical units to fight mysterious entities.",
      image: "https://images.unsplash.com/photo-1596727147705-61a532a659bd?w=400&h=300&fit=crop",
      rating: 9.2,
      year: "2024",
      genre: ["Mecha", "Drama", "Psychological"]
    },
    {
      title: "Akira: Neo Tokyo",
      description: "In post-apocalyptic Neo-Tokyo, a biker gang member gains psychic powers that threaten to destroy the city.",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
      rating: 8.7,
      year: "2023",
      genre: ["Action", "Thriller", "Cyberpunk"]
    },
    {
      title: "Blade Runner: Anime",
      description: "In a dystopian future, synthetic humans seek their humanity while being hunted by special police operatives.",
      image: "https://images.unsplash.com/photo-1596727147705-61a532a659bd?w=400&h=300&fit=crop",
      rating: 8.5,
      year: "2023",
      genre: ["Sci-Fi", "Noir", "Drama"]
    },
    {
      title: "Cyberpunk Legends",
      description: "Street mercenaries navigate a world of corporate warfare and technological enhancement in Night City.",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
      rating: 8.8,
      year: "2024",
      genre: ["Action", "Cyberpunk", "Adventure"]
    },
    {
      title: "Neural Network",
      description: "A hacker discovers a conspiracy that threatens the boundary between virtual reality and the real world.",
      image: "https://images.unsplash.com/photo-1596727147705-61a532a659bd?w=400&h=300&fit=crop",
      rating: 8.3,
      year: "2023",
      genre: ["Thriller", "Sci-Fi", "Mystery"]
    }
  ];

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-heading text-4xl md:text-6xl font-bold mb-4 text-glow animate-float">
            Anime <span className="text-primary">Services</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover the finest collection of futuristic anime series and movies
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-8 flex flex-col md:flex-row gap-4 max-w-2xl mx-auto">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input
              placeholder="Search anime titles..."
              className="pl-10 bg-card border-border focus:border-primary"
            />
          </div>
          <Button variant="outline" className="cyber-border">
            <Filter className="w-4 h-4 mr-2" />
            Filter
          </Button>
        </div>

        {/* Anime Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {animeList.map((anime, index) => (
            <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <AnimeCard {...anime} />
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button className="bg-gradient-primary hover:opacity-90 glow-primary">
            Load More Anime
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Services;