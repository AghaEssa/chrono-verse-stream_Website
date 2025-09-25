import { useState } from 'react';
import AnimeCharacterCard from '@/components/AnimeCharacterCard';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search, Filter, Grid, List, Star } from 'lucide-react';
import animeData from '@/data/animeCollection.json';

const AnimeCollection = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('all');
  const [selectedYear, setSelectedYear] = useState('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState('rating');

  // Get unique genres and years for filters
  const allGenres = Array.from(new Set(animeData.flatMap(anime => anime.genres)));
  const allYears = Array.from(new Set(animeData.map(anime => anime.releaseYear))).sort();

  // Filter and sort anime data
  const filteredAnime = animeData
    .filter(anime => {
      const matchesSearch = 
        anime.animeName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        anime.characterName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        anime.description.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesGenre = selectedGenre === 'all' || anime.genres.includes(selectedGenre);
      const matchesYear = selectedYear === 'all' || anime.releaseYear === selectedYear;
      
      return matchesSearch && matchesGenre && matchesYear;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'rating':
          return b.rating - a.rating;
        case 'year':
          return parseInt(b.releaseYear) - parseInt(a.releaseYear);
        case 'name':
          return a.animeName.localeCompare(b.animeName);
        default:
          return 0;
      }
    });

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-heading text-4xl md:text-6xl font-bold mb-4 text-glow animate-float">
            Anime <span className="text-primary">Collection</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover legendary characters from the most popular anime series of all time
          </p>
          <div className="mt-6 text-sm text-primary">
            <span className="font-semibold">{filteredAnime.length}</span> characters available
          </div>
        </div>

        {/* Filters and Search */}
        <div className="mb-8 space-y-4">
          {/* Search */}
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input
              placeholder="Search anime, characters, or descriptions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 bg-card border-border focus:border-primary"
            />
          </div>

          {/* Filter Controls */}
          <div className="flex flex-wrap gap-4 justify-center items-center">
            <Select value={selectedGenre} onValueChange={setSelectedGenre}>
              <SelectTrigger className="w-40 bg-card border-border">
                <SelectValue placeholder="All Genres" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Genres</SelectItem>
                {allGenres.map(genre => (
                  <SelectItem key={genre} value={genre}>{genre}</SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={selectedYear} onValueChange={setSelectedYear}>
              <SelectTrigger className="w-32 bg-card border-border">
                <SelectValue placeholder="All Years" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Years</SelectItem>
                {allYears.map(year => (
                  <SelectItem key={year} value={year}>{year}</SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-40 bg-card border-border">
                <SelectValue placeholder="Sort By" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="rating">Rating</SelectItem>
                <SelectItem value="year">Release Year</SelectItem>
                <SelectItem value="name">Anime Name</SelectItem>
              </SelectContent>
            </Select>

            <div className="flex gap-2">
              <Button
                variant={viewMode === 'grid' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setViewMode('grid')}
                className="cyber-border"
              >
                <Grid className="w-4 h-4" />
              </Button>
              <Button
                variant={viewMode === 'list' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setViewMode('list')}
                className="cyber-border"
              >
                <List className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Results */}
        {filteredAnime.length === 0 ? (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold mb-2 text-muted-foreground">No Results Found</h3>
            <p className="text-muted-foreground">
              Try adjusting your search terms or filters
            </p>
          </div>
        ) : (
          <>
            {/* Grid View */}
            {viewMode === 'grid' && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredAnime.map((anime, index) => (
                  <div key={anime.id} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                    <AnimeCharacterCard
                      animeName={anime.animeName}
                      characterName={anime.characterName}
                      description={anime.description}
                      image={anime.image}
                      rating={anime.rating}
                      releaseYear={anime.releaseYear}
                      genres={anime.genres}
                    />
                  </div>
                ))}
              </div>
            )}

            {/* List View */}
            {viewMode === 'list' && (
              <div className="space-y-4">
                {filteredAnime.map((anime, index) => (
                  <div key={anime.id} className="animate-fade-in" style={{ animationDelay: `${index * 0.05}s` }}>
                    <div className="flex gap-4 p-4 bg-card border border-border rounded-lg hover:glow-primary transition-all duration-300">
                      <img
                        src={anime.image}
                        alt={`${anime.characterName} from ${anime.animeName}`}
                        className="w-24 h-32 object-cover rounded border border-border"
                      />
                      <div className="flex-1">
                        <h3 className="font-heading text-lg font-bold mb-1 text-glow">
                          {anime.animeName}
                        </h3>
                        <h4 className="text-sm font-semibold text-primary mb-2">
                          {anime.characterName}
                        </h4>
                        <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
                          {anime.description}
                        </p>
                        <div className="flex items-center gap-4 text-xs text-muted-foreground">
                          <span>Released: {anime.releaseYear}</span>
                          <span className="flex items-center gap-1">
                            <Star className="w-3 h-3 text-yellow-400" />
                            {anime.rating}
                          </span>
                          <div className="flex gap-1">
                            {anime.genres.slice(0, 2).map(genre => (
                              <span key={genre} className="bg-muted px-2 py-1 rounded-full">
                                {genre}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Load More Button */}
            <div className="text-center mt-12">
              <Button className="bg-gradient-primary hover:opacity-90 glow-primary">
                Load More Characters
              </Button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default AnimeCollection;