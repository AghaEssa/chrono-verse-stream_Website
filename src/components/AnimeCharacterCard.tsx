import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Play, Star, Calendar, Tag } from 'lucide-react';

interface AnimeCharacterCardProps {
  animeName: string;
  characterName: string;
  description: string;
  image: string;
  rating: number;
  releaseYear: string;
  genres: string[];
}

const AnimeCharacterCard = ({ 
  animeName, 
  characterName, 
  description, 
  image, 
  rating, 
  releaseYear, 
  genres 
}: AnimeCharacterCardProps) => {
  return (
    <Card className="anime-card bg-card border-border overflow-hidden group h-full">
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={`${characterName} from ${animeName}`}
          className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center">
          <Button size="sm" className="bg-gradient-primary glow-primary mb-2">
            <Play className="w-4 h-4 mr-2" />
            Watch Now
          </Button>
          <p className="text-white text-xs text-center px-4 opacity-90">
            Experience the adventure
          </p>
        </div>
        <div className="absolute top-2 right-2 bg-black/70 rounded-full px-2 py-1 flex items-center">
          <Star className="w-3 h-3 text-yellow-400 mr-1" />
          <span className="text-xs text-white">{rating}</span>
        </div>
        <div className="absolute top-2 left-2 bg-primary/90 rounded px-2 py-1">
          <span className="text-xs text-white font-semibold">{releaseYear}</span>
        </div>
      </div>
      
      <CardContent className="p-4 flex-1 flex flex-col">
        <div className="mb-3">
          <h3 className="font-heading text-lg font-bold mb-1 text-glow line-clamp-1">
            {animeName}
          </h3>
          <h4 className="text-sm font-semibold text-primary mb-2">
            {characterName}
          </h4>
        </div>
        
        <p className="text-muted-foreground text-sm mb-4 line-clamp-3 flex-1">
          {description}
        </p>
        
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <Calendar className="w-3 h-3" />
            <span>Released: {releaseYear}</span>
          </div>
          
          <div className="flex flex-wrap gap-1">
            {genres.slice(0, 3).map((genre) => (
              <span
                key={genre}
                className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded-full flex items-center gap-1"
              >
                <Tag className="w-2 h-2" />
                {genre}
              </span>
            ))}
            {genres.length > 3 && (
              <span className="text-xs text-primary font-medium">
                +{genres.length - 3} more
              </span>
            )}
          </div>
          
          <Button variant="outline" size="sm" className="w-full cyber-border">
            View Character Details
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default AnimeCharacterCard;