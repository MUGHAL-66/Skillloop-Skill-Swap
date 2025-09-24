import { useState } from 'react';
import { Card, CardContent, CardHeader } from '../ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { Star, MapPin, Clock, Heart } from 'lucide-react';

interface SkillCardProps {
  id: string;
  userName: string;
  userAvatar?: string;
  userInitials: string;
  skillTitle: string;
  skillCategory: string;
  description: string;
  rating: number;
  reviewCount: number;
  location: string;
  timeAgo: string;
  seeking?: string;
  onViewProfile?: (userId: string) => void;
  onProposeSwap?: (skillId: string) => void;
  variant?: 'default' | 'compact';
}

export function SkillCard({
  id,
  userName,
  userAvatar,
  userInitials,
  skillTitle,
  skillCategory,
  description,
  rating,
  reviewCount,
  location,
  timeAgo,
  seeking,
  onViewProfile,
  onProposeSwap,
  variant = 'default'
}: SkillCardProps) {
  const [isFavorited, setIsFavorited] = useState(false);

  const handleFavorite = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsFavorited(!isFavorited);
  };

  if (variant === 'compact') {
    return (
      <Card className="group hover:shadow-md transition-all duration-200 cursor-pointer">
        <CardContent className="p-4">
          <div className="flex items-start space-x-3">
            <Avatar className="w-10 h-10">
              <AvatarImage src={userAvatar} alt={userName} />
              <AvatarFallback>{userInitials}</AvatarFallback>
            </Avatar>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between">
                <h3 className="font-medium text-gray-900 truncate">{skillTitle}</h3>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleFavorite}
                  className="opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <Heart className={`w-4 h-4 ${isFavorited ? 'fill-red-500 text-red-500' : 'text-gray-400'}`} />
                </Button>
              </div>
              <p className="text-sm text-gray-600">{userName}</p>
              <div className="flex items-center space-x-2 mt-1">
                <div className="flex items-center">
                  <Star className="w-3 h-3 text-yellow-400 fill-current" />
                  <span className="text-xs text-gray-600 ml-1">{rating} ({reviewCount})</span>
                </div>
                <span className="text-gray-300">•</span>
                <div className="flex items-center text-xs text-gray-600">
                  <MapPin className="w-3 h-3 mr-1" />
                  {location}
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="group hover:shadow-lg transition-all duration-300 cursor-pointer transform hover:-translate-y-1">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-3">
            <Avatar className="w-12 h-12">
              <AvatarImage src={userAvatar} alt={userName} />
              <AvatarFallback>{userInitials}</AvatarFallback>
            </Avatar>
            <div>
              <h3 className="font-semibold text-gray-900">{userName}</h3>
              <div className="flex items-center space-x-2 mt-1">
                <div className="flex items-center">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="text-sm text-gray-600 ml-1">{rating}</span>
                  <span className="text-sm text-gray-500">({reviewCount} reviews)</span>
                </div>
              </div>
            </div>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={handleFavorite}
            className="opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <Heart className={`w-5 h-5 ${isFavorited ? 'fill-red-500 text-red-500' : 'text-gray-400'}`} />
          </Button>
        </div>
      </CardHeader>

      <CardContent className="pt-0">
        <div className="mb-3">
          <div className="flex items-center justify-between mb-2">
            <h4 className="font-medium text-lg text-gray-900">{skillTitle}</h4>
            <Badge variant="secondary" className="bg-primary/10 text-primary">
              {skillCategory}
            </Badge>
          </div>
          <p className="text-gray-600 text-sm line-clamp-2">{description}</p>
        </div>

        {seeking && (
          <div className="mb-3 p-2 bg-accent/10 rounded-lg">
            <p className="text-sm text-accent font-medium">Seeking: {seeking}</p>
          </div>
        )}

        <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
          <div className="flex items-center">
            <MapPin className="w-4 h-4 mr-1" />
            {location}
          </div>
          <div className="flex items-center">
            <Clock className="w-4 h-4 mr-1" />
            {timeAgo}
          </div>
        </div>

        <div className="flex space-x-2">
          <Button
            variant="outline"
            size="sm"
            className="flex-1"
            onClick={(e) => {
              e.stopPropagation();
              onViewProfile?.(id);
            }}
          >
            View Profile
          </Button>
          <Button
            size="sm"
            className="flex-1 bg-primary hover:bg-primary/90"
            onClick={(e) => {
              e.stopPropagation();
              onProposeSwap?.(id);
            }}
          >
            Propose Swap
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}