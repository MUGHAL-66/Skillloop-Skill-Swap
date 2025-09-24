import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { Progress } from '../ui/progress';
import { Separator } from '../ui/separator';
import { mockUsers, mockSkills, mockReviews, skillsWithUsers } from '../../data/mockData';
import { 
  MapPin,
  Calendar,
  Star,
  MessageCircle,
  Heart,
  Share2,
  Award,
  TrendingUp,
  Clock,
  Users,
  Edit,
  ExternalLink,
  ThumbsUp,
  Gift
} from 'lucide-react';

interface ProfilePageProps {
  onNavigate: (page: string) => void;
}

export function ProfilePage({ onNavigate }: ProfilePageProps) {
  const [isOwnProfile] = useState(true); // Toggle this to show different views
  
  // Mock current user data
  const currentUser = mockUsers[0];
  const userSkills = mockSkills.filter(skill => skill.userId === currentUser.id);
  const userReviews = mockReviews.filter(review => review.revieweeId === currentUser.id);
  
  const stats = {
    swapsCompleted: 12,
    hoursTraded: 48,
    skillsShared: 3,
    responseRate: 95,
    responseTime: '< 2 hours'
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Profile Header */}
        <Card className="mb-8">
          <CardContent className="p-8">
            <div className="flex flex-col md:flex-row items-start md:items-center space-y-6 md:space-y-0 md:space-x-8">
              {/* Avatar and Basic Info */}
              <div className="flex flex-col items-center md:items-start">
                <Avatar className="w-32 h-32 mb-4">
                  <AvatarImage src={currentUser.avatar} alt={currentUser.name} />
                  <AvatarFallback className="text-2xl">{currentUser.initials}</AvatarFallback>
                </Avatar>
                
                <div className="flex items-center space-x-2 mb-2">
                  <div className="flex">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(currentUser.rating) 
                            ? 'text-yellow-400 fill-current' 
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="font-semibold">{currentUser.rating}</span>
                  <span className="text-gray-500">({currentUser.reviewCount} reviews)</span>
                </div>
                
                <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                  {currentUser.badges.map((badge) => (
                    <Badge key={badge} className="bg-primary/10 text-primary">
                      <Award className="w-3 h-3 mr-1" />
                      {badge}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Profile Details */}
              <div className="flex-1 text-center md:text-left">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">{currentUser.name}</h1>
                
                <div className="flex flex-col md:flex-row items-center md:items-start space-y-2 md:space-y-0 md:space-x-6 mb-4 text-gray-600">
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-2" />
                    {currentUser.location}
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    Joined {new Date(currentUser.joinDate).toLocaleDateString('en-US', { 
                      month: 'long', 
                      year: 'numeric' 
                    })}
                  </div>
                </div>

                <p className="text-gray-700 mb-6 max-w-2xl">{currentUser.bio}</p>

                {/* Action Buttons */}
                <div className="flex flex-col md:flex-row gap-3">
                  {isOwnProfile ? (
                    <Button className="bg-primary hover:bg-primary/90">
                      <Edit className="w-4 h-4 mr-2" />
                      Edit Profile
                    </Button>
                  ) : (
                    <>
                      <Button className="bg-primary hover:bg-primary/90">
                        <Gift className="w-4 h-4 mr-2" />
                        Propose Swap
                      </Button>
                      <Button variant="outline" onClick={() => onNavigate('messages')}>
                        <MessageCircle className="w-4 h-4 mr-2" />
                        Send Message
                      </Button>
                    </>
                  )}
                  
                  <div className="flex gap-2">
                    <Button variant="outline" size="icon">
                      <Heart className="w-4 h-4" />
                    </Button>
                    <Button variant="outline" size="icon">
                      <Share2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-primary mb-1">{stats.swapsCompleted}</div>
              <div className="text-sm text-gray-600">Swaps Completed</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-accent mb-1">{stats.hoursTraded}</div>
              <div className="text-sm text-gray-600">Hours Traded</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-secondary mb-1">{stats.skillsShared}</div>
              <div className="text-sm text-gray-600">Skills Shared</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-green-600 mb-1">{stats.responseRate}%</div>
              <div className="text-sm text-gray-600">Response Rate</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-lg font-bold text-purple-600 mb-1">{stats.responseTime}</div>
              <div className="text-sm text-gray-600">Avg Response</div>
            </CardContent>
          </Card>
        </div>

        {/* Tabs Section */}
        <Tabs defaultValue="offering" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="offering">Offering ({userSkills.length})</TabsTrigger>
            <TabsTrigger value="seeking">Seeking ({currentUser.skillsSeeking.length})</TabsTrigger>
            <TabsTrigger value="reviews">Reviews ({userReviews.length})</TabsTrigger>
          </TabsList>

          {/* Offering Tab */}
          <TabsContent value="offering" className="space-y-6">
            {userSkills.length > 0 ? (
              <div className="grid gap-6">
                {userSkills.map((skill) => (
                  <Card key={skill.id} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <div className="flex items-center space-x-3 mb-2">
                            <h3 className="text-xl font-semibold">{skill.title}</h3>
                            <Badge variant="secondary">{skill.category}</Badge>
                          </div>
                          <p className="text-gray-600 mb-3">{skill.description}</p>
                          
                          <div className="flex items-center space-x-6 text-sm text-gray-500">
                            <div className="flex items-center">
                              <TrendingUp className="w-4 h-4 mr-1" />
                              {skill.experience}
                            </div>
                            <div className="flex items-center">
                              <Clock className="w-4 h-4 mr-1" />
                              {skill.availability.join(', ')}
                            </div>
                            <div className="flex items-center">
                              <Calendar className="w-4 h-4 mr-1" />
                              Added {new Date(skill.createdAt).toLocaleDateString()}
                            </div>
                          </div>
                        </div>
                        
                        {isOwnProfile && (
                          <Button variant="outline" size="sm">
                            <Edit className="w-4 h-4 mr-2" />
                            Edit
                          </Button>
                        )}
                      </div>

                      <div className="flex items-center justify-between pt-4 border-t">
                        <div className="text-sm text-gray-500">
                          Last updated: {new Date(skill.createdAt).toLocaleDateString()}
                        </div>
                        {!isOwnProfile && (
                          <Button size="sm" className="bg-primary hover:bg-primary/90">
                            Request This Skill
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <Card>
                <CardContent className="p-8 text-center">
                  <TrendingUp className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">No skills offered yet</h3>
                  <p className="text-gray-600 mb-4">Start sharing your knowledge with the community</p>
                  {isOwnProfile && (
                    <Button>Add Your First Skill</Button>
                  )}
                </CardContent>
              </Card>
            )}
          </TabsContent>

          {/* Seeking Tab */}
          <TabsContent value="seeking" className="space-y-6">
            {currentUser.skillsSeeking.length > 0 ? (
              <div className="grid gap-4">
                {currentUser.skillsSeeking.map((skill, index) => (
                  <Card key={index} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-4">
                      <div className="flex justify-between items-center">
                        <div>
                          <h4 className="font-medium text-gray-900">{skill}</h4>
                          <p className="text-sm text-gray-600">Looking to learn this skill</p>
                        </div>
                        <div className="flex gap-2">
                          {!isOwnProfile && (
                            <Button size="sm" variant="outline">
                              I Can Teach This
                            </Button>
                          )}
                          <Button size="sm" variant="outline" onClick={() => onNavigate('discover')}>
                            <ExternalLink className="w-3 h-3" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <Card>
                <CardContent className="p-8 text-center">
                  <Users className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">No skills wanted yet</h3>
                  <p className="text-gray-600 mb-4">Let others know what you'd like to learn</p>
                  {isOwnProfile && (
                    <Button>Add Learning Goals</Button>
                  )}
                </CardContent>
              </Card>
            )}
          </TabsContent>

          {/* Reviews Tab */}
          <TabsContent value="reviews" className="space-y-6">
            {userReviews.length > 0 ? (
              <div className="space-y-6">
                {userReviews.map((review) => {
                  const reviewer = mockUsers.find(u => u.id === review.reviewerId);
                  const skill = mockSkills.find(s => s.id === review.skillId);
                  
                  return (
                    <Card key={review.id}>
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <Avatar className="w-12 h-12">
                            <AvatarImage src={reviewer?.avatar} alt={reviewer?.name} />
                            <AvatarFallback>{reviewer?.initials}</AvatarFallback>
                          </Avatar>
                          
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-2">
                              <div>
                                <h4 className="font-semibold">{reviewer?.name}</h4>
                                <p className="text-sm text-gray-600">
                                  Learned {skill?.title}
                                </p>
                              </div>
                              
                              <div className="text-right">
                                <div className="flex items-center mb-1">
                                  {Array.from({ length: 5 }).map((_, i) => (
                                    <Star
                                      key={i}
                                      className={`w-4 h-4 ${
                                        i < review.rating 
                                          ? 'text-yellow-400 fill-current' 
                                          : 'text-gray-300'
                                      }`}
                                    />
                                  ))}
                                </div>
                                <p className="text-sm text-gray-500">
                                  {new Date(review.createdAt).toLocaleDateString()}
                                </p>
                              </div>
                            </div>
                            
                            <p className="text-gray-700 mb-3">{review.comment}</p>
                            
                            <div className="flex items-center space-x-4 text-sm text-gray-500">
                              <button className="flex items-center hover:text-primary transition-colors">
                                <ThumbsUp className="w-4 h-4 mr-1" />
                                Helpful (5)
                              </button>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            ) : (
              <Card>
                <CardContent className="p-8 text-center">
                  <Star className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">No reviews yet</h3>
                  <p className="text-gray-600 mb-4">
                    {isOwnProfile 
                      ? "Start trading skills to receive your first review" 
                      : "This user hasn't received any reviews yet"}
                  </p>
                  {isOwnProfile && (
                    <Button onClick={() => onNavigate('discover')}>
                      Find Skills to Learn
                    </Button>
                  )}
                </CardContent>
              </Card>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}