import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Play, Star } from 'lucide-react';

interface AnimeCardProps {
  title: string;
  description: string;
  image: string;
  rating: number;
  year: string;
  genre: string[];
}

const AnimeCard = ({ title, description, image, rating, year, genre }: AnimeCardProps) => {
  return (
    <Card className="anime-card bg-card border-border overflow-hidden group">
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <Button size="sm" className="bg-gradient-primary glow-primary">
            <Play className="w-4 h-4 mr-2" />
            Watch Now
          </Button>
        </div>
        <div className="absolute top-2 right-2 bg-black/70 rounded-full px-2 py-1 flex items-center">
          <Star className="w-3 h-3 text-yellow-400 mr-1" />
          <span className="text-xs text-white">{rating}</span>
        </div>
      </div>
      
      <CardContent className="p-4">
        <h3 className="font-heading text-lg font-bold mb-2 text-glow">{title}</h3>
        <p className="text-muted-foreground text-sm mb-3 line-clamp-2">{description}</p>
        
        <div className="flex justify-between items-center mb-3">
          <span className="text-xs text-primary font-semibold">{year}</span>
          <div className="flex flex-wrap gap-1">
            {genre.slice(0, 2).map((g) => (
              <span
                key={g}
                className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded-full"
              >
                {g}
              </span>
            ))}
          </div>
        </div>
        
        <Button variant="outline" size="sm" className="w-full cyber-border">
          View Details
        </Button>
      </CardContent>
    </Card>
  );
};

export default AnimeCard;