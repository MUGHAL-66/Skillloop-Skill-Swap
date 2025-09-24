import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { Progress } from '../ui/progress';
import { SkillCard } from '../common/SkillCard';
import { skillsWithUsers } from '../../data/mockData';
import { 
  Plus,
  TrendingUp,
  Calendar,
  MessageCircle,
  Star,
  Clock,
  MapPin,
  Users,
  Award,
  Zap,
  ArrowRight,
  Bell,
  CheckCircle,
  AlertCircle
} from 'lucide-react';

interface DashboardPageProps {
  onNavigate: (page: string) => void;
}

export function DashboardPage({ onNavigate }: DashboardPageProps) {
  const suggestedMatches = skillsWithUsers.slice(0, 3);
  
  const stats = {
    skillsOffered: 3,
    skillsLearned: 7,
    swapsCompleted: 12,
    rating: 4.8,
    profileViews: 47
  };

  const recentActivity = [
    {
      type: 'swap_completed',
      title: 'Completed swap with Maria Rodriguez',
      subtitle: 'Spanish Lessons ↔ UI/UX Design',
      time: '2 hours ago',
      icon: CheckCircle,
      color: 'text-green-500'
    },
    {
      type: 'new_message',
      title: 'New message from David Kim',
      subtitle: 'About Guitar Lessons swap proposal',
      time: '5 hours ago',
      icon: MessageCircle,
      color: 'text-accent'
    },
    {
      type: 'profile_view',
      title: 'Sophie Laurent viewed your profile',
      subtitle: 'Interested in your Design skills',
      time: '1 day ago',
      icon: Users,
      color: 'text-secondary'
    },
    {
      type: 'new_review',
      title: 'Received 5-star review from James Wilson',
      subtitle: 'For your Photography session',
      time: '2 days ago',
      icon: Star,
      color: 'text-yellow-500'
    }
  ];

  const upcomingSessions = [
    {
      id: '1',
      skill: 'French Cooking',
      partner: 'Sophie Laurent',
      partnerAvatar: undefined,
      partnerInitials: 'SL',
      date: 'Today, 3:00 PM',
      location: 'Downtown Kitchen Studio',
      type: 'learning'
    },
    {
      id: '2',
      skill: 'UI/UX Design',
      partner: 'Alex Chen',
      partnerAvatar: undefined,
      partnerInitials: 'AC',
      date: 'Tomorrow, 10:00 AM',
      location: 'Virtual Meeting',
      type: 'teaching'
    },
    {
      id: '3',
      skill: 'Guitar Basics',
      partner: 'David Kim',
      partnerAvatar: undefined,
      partnerInitials: 'DK',
      date: 'Sat, 2:00 PM',
      location: 'Music Room, Community Center',
      type: 'learning'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Welcome back, Jane!</h1>
              <p className="text-gray-600 mt-1">Ready to learn something new today?</p>
            </div>
            <div className="flex gap-3">
              <Button 
                variant="outline"
                onClick={() => onNavigate('discover')}
              >
                <Plus className="w-4 h-4 mr-2" />
                Find Skills
              </Button>
              <Button 
                className="bg-primary hover:bg-primary/90"
                onClick={() => onNavigate('profile')}
              >
                <Zap className="w-4 h-4 mr-2" />
                Add Skill
              </Button>
            </div>
          </div>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Skills Offered</p>
                  <p className="text-2xl font-bold text-gray-900">{stats.skillsOffered}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <div className="p-2 bg-accent/10 rounded-lg">
                  <TrendingUp className="w-6 h-6 text-accent" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Skills Learned</p>
                  <p className="text-2xl font-bold text-gray-900">{stats.skillsLearned}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <div className="p-2 bg-secondary/10 rounded-lg">
                  <CheckCircle className="w-6 h-6 text-secondary" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Swaps Completed</p>
                  <p className="text-2xl font-bold text-gray-900">{stats.swapsCompleted}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <div className="p-2 bg-yellow-100 rounded-lg">
                  <Star className="w-6 h-6 text-yellow-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Rating</p>
                  <p className="text-2xl font-bold text-gray-900">{stats.rating}★</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <div className="p-2 bg-purple-100 rounded-lg">
                  <Users className="w-6 h-6 text-purple-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Profile Views</p>
                  <p className="text-2xl font-bold text-gray-900">{stats.profileViews}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* Upcoming Sessions */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Calendar className="w-5 h-5 mr-2" />
                  Upcoming Sessions
                </CardTitle>
              </CardHeader>
              <CardContent>
                {upcomingSessions.length > 0 ? (
                  <div className="space-y-4">
                    {upcomingSessions.map((session) => (
                      <div key={session.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                        <div className="flex items-center space-x-4">
                          <Avatar className="w-10 h-10">
                            <AvatarImage src={session.partnerAvatar} alt={session.partner} />
                            <AvatarFallback>{session.partnerInitials}</AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="flex items-center space-x-2">
                              <h4 className="font-medium">{session.skill}</h4>
                              <Badge variant={session.type === 'teaching' ? 'default' : 'secondary'} className="text-xs">
                                {session.type === 'teaching' ? 'Teaching' : 'Learning'}
                              </Badge>
                            </div>
                            <p className="text-sm text-gray-600">with {session.partner}</p>
                            <div className="flex items-center space-x-4 text-xs text-gray-500 mt-1">
                              <div className="flex items-center">
                                <Clock className="w-3 h-3 mr-1" />
                                {session.date}
                              </div>
                              <div className="flex items-center">
                                <MapPin className="w-3 h-3 mr-1" />
                                {session.location}
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex space-x-2">
                          <Button variant="outline" size="sm">
                            Reschedule
                          </Button>
                          <Button size="sm" className="bg-primary hover:bg-primary/90">
                            View Details
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <Calendar className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-500">No upcoming sessions</p>
                    <Button className="mt-4" onClick={() => onNavigate('discover')}>
                      Find Skills to Learn
                    </Button>
                  </div>
                )}
                <Button variant="link" className="mt-4 p-0" onClick={() => onNavigate('calendar')}>
                  View Full Calendar
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </CardContent>
            </Card>

            {/* Suggested Matches */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Zap className="w-5 h-5 mr-2" />
                  Suggested Matches
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-6">
                  {suggestedMatches.map((skill) => (
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
                      variant="compact"
                      onViewProfile={() => onNavigate('profile')}
                      onProposeSwap={() => onNavigate('swap-proposal')}
                    />
                  ))}
                </div>
                <Button variant="link" className="mt-4 p-0" onClick={() => onNavigate('discover')}>
                  See More Matches
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Profile Completion */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span className="flex items-center">
                    <TrendingUp className="w-5 h-5 mr-2" />
                    Profile Strength
                  </span>
                  <span className="text-lg font-bold text-primary">85%</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Progress value={85} className="mb-4" />
                <div className="space-y-3 text-sm">
                  <div className="flex items-center text-green-600">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Profile photo added
                  </div>
                  <div className="flex items-center text-green-600">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Skills listed
                  </div>
                  <div className="flex items-center text-green-600">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Bio written
                  </div>
                  <div className="flex items-center text-gray-500">
                    <AlertCircle className="w-4 h-4 mr-2" />
                    Add more skill details
                  </div>
                  <div className="flex items-center text-gray-500">
                    <AlertCircle className="w-4 h-4 mr-2" />
                    Upload portfolio examples
                  </div>
                </div>
                <Button 
                  size="sm" 
                  className="w-full mt-4"
                  onClick={() => onNavigate('profile')}
                >
                  Complete Profile
                </Button>
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Bell className="w-5 h-5 mr-2" />
                  Recent Activity
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivity.map((activity, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className={`p-1.5 rounded-full bg-gray-100 ${activity.color}`}>
                        <activity.icon className="w-4 h-4" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate">
                          {activity.title}
                        </p>
                        <p className="text-xs text-gray-500">
                          {activity.subtitle}
                        </p>
                        <p className="text-xs text-gray-400 mt-1">
                          {activity.time}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                <Button variant="link" className="mt-4 p-0" onClick={() => onNavigate('messages')}>
                  View All Activity
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button 
                  variant="outline" 
                  className="w-full justify-start"
                  onClick={() => onNavigate('messages')}
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full justify-start"
                  onClick={() => onNavigate('calendar')}
                >
                  <Calendar className="w-4 h-4 mr-2" />
                  Schedule Session
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full justify-start"
                  onClick={() => onNavigate('discover')}
                >
                  <Plus className="w-4 h-4 mr-2" />
                  Find New Skills
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}