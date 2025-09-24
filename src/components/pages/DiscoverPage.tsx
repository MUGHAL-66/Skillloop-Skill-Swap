import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Badge } from '../ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Slider } from '../ui/slider';
import { Switch } from '../ui/switch';
import { Label } from '../ui/label';
import { SkillCard } from '../common/SkillCard';
import { skillCategories, skillsWithUsers } from '../../data/mockData';
import { 
  Search,
  Filter,
  Map,
  List,
  SlidersHorizontal,
  MapPin,
  Star,
  Clock
} from 'lucide-react';

interface DiscoverPageProps {
  onNavigate: (page: string) => void;
}

export function DiscoverPage({ onNavigate }: DiscoverPageProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewMode, setViewMode] = useState<'list' | 'map'>('list');
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState({
    radius: [10],
    rating: [4],
    availability: 'any',
    experience: 'any',
    sortBy: 'relevance'
  });

  const filteredSkills = skillsWithUsers.filter(skill => {
    const matchesSearch = !searchQuery || 
      skill.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      skill.userName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      skill.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = selectedCategory === 'all' || 
      skill.category.toLowerCase() === selectedCategory.toLowerCase();
    
    const matchesRating = skill.rating >= filters.rating[0];
    
    return matchesSearch && matchesCategory && matchesRating;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Discover Skills</h1>
          <p className="text-gray-600">Find amazing skills to learn from your community</p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-lg shadow-sm border p-6 mb-8">
          {/* Search Bar */}
          <div className="flex gap-4 mb-6">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                type="text"
                placeholder="Search skills, people, or descriptions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 text-lg h-12"
              />
            </div>
            <Button
              variant="outline"
              onClick={() => setShowFilters(!showFilters)}
              className="h-12"
            >
              <SlidersHorizontal className="w-4 h-4 mr-2" />
              Filters
            </Button>
            <div className="flex border rounded-lg">
              <Button
                variant={viewMode === 'list' ? 'default' : 'ghost'}
                onClick={() => setViewMode('list')}
                className="rounded-r-none"
              >
                <List className="w-4 h-4" />
              </Button>
              <Button
                variant={viewMode === 'map' ? 'default' : 'ghost'}
                onClick={() => setViewMode('map')}
                className="rounded-l-none"
              >
                <Map className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap gap-2 mb-6">
            <Badge
              variant={selectedCategory === 'all' ? 'default' : 'outline'}
              className="cursor-pointer"
              onClick={() => setSelectedCategory('all')}
            >
              All Skills
            </Badge>
            {skillCategories.map((category) => (
              <Badge
                key={category.id}
                variant={selectedCategory === category.name ? 'default' : 'outline'}
                className="cursor-pointer"
                onClick={() => setSelectedCategory(category.name)}
              >
                {category.icon} {category.name}
              </Badge>
            ))}
          </div>

          {/* Advanced Filters */}
          {showFilters && (
            <div className="border-t pt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="space-y-2">
                <Label>Distance (miles)</Label>
                <div className="px-3">
                  <Slider
                    value={filters.radius}
                    onValueChange={(value) => setFilters({...filters, radius: value})}
                    max={50}
                    min={1}
                    step={1}
                  />
                  <div className="flex justify-between text-sm text-gray-500 mt-1">
                    <span>1</span>
                    <span>{filters.radius[0]} miles</span>
                    <span>50+</span>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label>Minimum Rating</Label>
                <div className="px-3">
                  <Slider
                    value={filters.rating}
                    onValueChange={(value) => setFilters({...filters, rating: value})}
                    max={5}
                    min={1}
                    step={0.5}
                  />
                  <div className="flex justify-between text-sm text-gray-500 mt-1">
                    <span>1★</span>
                    <span>{filters.rating[0]}★</span>
                    <span>5★</span>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label>Availability</Label>
                <Select value={filters.availability} onValueChange={(value) => setFilters({...filters, availability: value})}>
                  <SelectTrigger>
                    <SelectValue placeholder="Any time" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="any">Any time</SelectItem>
                    <SelectItem value="weekdays">Weekdays</SelectItem>
                    <SelectItem value="weekends">Weekends</SelectItem>
                    <SelectItem value="evenings">Evenings</SelectItem>
                    <SelectItem value="mornings">Mornings</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>Sort by</Label>
                <Select value={filters.sortBy} onValueChange={(value) => setFilters({...filters, sortBy: value})}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="relevance">Relevance</SelectItem>
                    <SelectItem value="rating">Highest Rated</SelectItem>
                    <SelectItem value="distance">Nearest</SelectItem>
                    <SelectItem value="recent">Most Recent</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          )}
        </div>

        {/* Results */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-xl font-semibold text-gray-900">
              {filteredSkills.length} skills found
            </h2>
            <p className="text-gray-600 text-sm">
              {selectedCategory !== 'all' && `in ${selectedCategory} • `}
              {searchQuery && `matching "${searchQuery}" • `}
              Sorted by {filters.sortBy}
            </p>
          </div>
          
          <Button onClick={() => onNavigate('profile')}>
            <Filter className="w-4 h-4 mr-2" />
            Add Your Skill
          </Button>
        </div>

        {viewMode === 'list' ? (
          /* List View */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredSkills.map((skill) => (
              <SkillCard
                key={skill.id}
                id={skill.id}
                userName={skill.userName}
                userAvatar={skill.userAvatar}
                userInitials={skill.userInitials}
                skillTitle={skill.title}
                skillCategory={skill.category}
                description={skill.description}
                rating={skill.rating}
                reviewCount={skill.reviewCount}
                location={skill.location}
                timeAgo={skill.timeAgo}
                seeking={skill.seeking}
                onViewProfile={() => onNavigate('profile')}
                onProposeSwap={() => onNavigate('swap-proposal')}
              />
            ))}
          </div>
        ) : (
          /* Map View */
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Map className="w-5 h-5 mr-2" />
                Skills Near You
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-gray-100 rounded-lg h-96 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Interactive Map View</h3>
                  <p className="text-gray-600 mb-4">See skills plotted on an interactive map</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-md mx-auto">
                    {filteredSkills.slice(0, 4).map((skill) => (
                      <div key={skill.id} className="bg-white p-3 rounded-lg shadow-sm border">
                        <div className="flex items-center space-x-2 mb-1">
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                          <span className="font-medium text-sm">{skill.title}</span>
                        </div>
                        <p className="text-xs text-gray-600">{skill.userName}</p>
                        <div className="flex items-center text-xs text-gray-500 mt-1">
                          <Star className="w-3 h-3 text-yellow-400 fill-current mr-1" />
                          {skill.rating}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {filteredSkills.length === 0 && (
          <Card>
            <CardContent className="p-12 text-center">
              <Search className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No skills found</h3>
              <p className="text-gray-600 mb-4">
                Try adjusting your search criteria or filters
              </p>
              <Button onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
                setFilters({
                  radius: [10],
                  rating: [4],
                  availability: 'any',
                  experience: 'any',
                  sortBy: 'relevance'
                });
              }}>
                Clear All Filters
              </Button>
            </CardContent>
          </Card>
        )}

        {/* Load More */}
        {filteredSkills.length > 0 && (
          <div className="text-center mt-8">
            <Button variant="outline" size="lg">
              Load More Skills
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}