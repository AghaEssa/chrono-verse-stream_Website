import AnimeCard from '@/components/AnimeCard';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, Filter } from 'lucide-react';

const Services = () => {
  const animeList = [
    {
      title: "Ghost in the Shell: SAC_2045",
      description: "Major Motoko Kusanagi and Section 9 return in this 3D animated series, investigating cyber-terrorism in a post-human world. Features cutting-edge AI threats and philosophical questions about consciousness and identity in the digital age.",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop&auto=format&q=80",
      rating: 8.9,
      year: "2024",
      genre: ["Action", "Sci-Fi", "Cyberpunk"]
    },
    {
      title: "Evangelion: 4.0+1.0",
      description: "The final chapter of the Rebuild series. Shinji Ikari faces his ultimate destiny as humanity's fate hangs in the balance. Features stunning mecha battles and deep psychological exploration of its characters' trauma and growth.",
      image: "https://images.unsplash.com/photo-1596727147705-61a532a659bd?w=400&h=300&fit=crop&auto=format&q=80",
      rating: 9.2,
      year: "2024",
      genre: ["Mecha", "Drama", "Psychological"]
    },
    {
      title: "Akira: Revival",
      description: "A stunning remake of the legendary cyberpunk masterpiece. Neo-Tokyo burns as Kaneda races to save his friend Tetsuo from psychic powers beyond human comprehension. Revolutionary animation meets timeless storytelling.",
      image: "https://images.unsplash.com/photo-1551269901-5c5e14c25df7?w=400&h=300&fit=crop&auto=format&q=80",
      rating: 9.5,
      year: "2024",
      genre: ["Action", "Thriller", "Cyberpunk"]
    },
    {
      title: "Blade Runner: Black Lotus",
      description: "Set in 2032 Los Angeles, this anime series follows Elle, a replicant with mysterious memories, as she unravels a conspiracy involving the Tyrell Corporation. Features noir aesthetics with futuristic cyberpunk elements.",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop&auto=format&q=80",
      rating: 8.5,
      year: "2023",
      genre: ["Sci-Fi", "Noir", "Drama"]
    },
    {
      title: "Cyberpunk: Edgerunners",
      description: "A standalone story set in the Cyberpunk 2077 universe. Follow David Martinez as he becomes an edgerunner in Night City, navigating corporate warfare, cybernetic enhancement, and the thin line between humanity and technology.",
      image: "https://images.unsplash.com/photo-1542393545-10f5cde2c810?w=400&h=300&fit=crop&auto=format&q=80",
      rating: 9.1,
      year: "2024",
      genre: ["Action", "Cyberpunk", "Adventure"]
    },
    {
      title: "Serial Experiments Lain",
      description: "A mind-bending exploration of identity and reality in the digital age. Lain Iwakura discovers the blurred boundaries between the physical world and the Wired, questioning the nature of existence and consciousness itself.",
      image: "https://images.unsplash.com/photo-1518709594023-6eab9bab7b23?w=400&h=300&fit=crop&auto=format&q=80",
      rating: 8.8,
      year: "2024",
      genre: ["Thriller", "Sci-Fi", "Mystery"]
    },
    {
      title: "Attack on Titan: Final Season",
      description: "The epic conclusion to humanity's fight for survival. Eren Yeager's ultimate plan unfolds as the Survey Corps faces their greatest challenge yet. Features massive titan battles and shocking revelations about the world's true nature.",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop&auto=format&q=80",
      rating: 9.0,
      year: "2023",
      genre: ["Action", "Drama", "Military"]
    },
    {
      title: "Demon Slayer: Infinity Castle",
      description: "Tanjiro and the Demon Slayer Corps infiltrate Muzan's fortress for the final battle. Features breathtaking sword combat, emotional character arcs, and the stunning animation that made the series a global phenomenon.",
      image: "https://images.unsplash.com/photo-1596727147705-61a532a659bd?w=400&h=300&fit=crop&auto=format&q=80",
      rating: 8.7,
      year: "2024",
      genre: ["Action", "Supernatural", "Historical"]
    },
    {
      title: "Jujutsu Kaisen: Shibuya Incident",
      description: "The most intense arc of the series comes to life as Yuji Itadori and fellow sorcerers face off against powerful curses in a battle that will reshape the jujutsu world forever. Dark, visceral, and emotionally devastating.",
      image: "https://images.unsplash.com/photo-1551269901-5c5e14c25df7?w=400&h=300&fit=crop&auto=format&q=80",
      rating: 9.3,
      year: "2024",
      genre: ["Action", "Supernatural", "School"]
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