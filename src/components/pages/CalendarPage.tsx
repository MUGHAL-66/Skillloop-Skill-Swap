import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '../ui/dialog';
import { mockUsers } from '../../data/mockData';
import { 
  Calendar as CalendarIcon,
  ChevronLeft,
  ChevronRight,
  Clock,
  MapPin,
  Plus,
  Video,
  Users,
  AlertCircle,
  CheckCircle,
  XCircle,
  Edit
} from 'lucide-react';

interface CalendarPageProps {
  onNavigate: (page: string) => void;
}

export function CalendarPage({ onNavigate }: CalendarPageProps) {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [viewMode, setViewMode] = useState<'week' | 'month'>('week');

  // Mock events data
  const events = [
    {
      id: '1',
      title: 'Spanish Lesson',
      partner: mockUsers[1], // Maria Rodriguez
      type: 'learning',
      date: new Date(2024, 0, 30, 15, 0), // Jan 30, 2024 3:00 PM
      duration: 60,
      location: 'Virtual Meeting',
      status: 'confirmed',
      skillOffered: 'UI/UX Design',
      skillReceived: 'Spanish Conversation'
    },
    {
      id: '2',
      title: 'Design Tutorial',
      partner: mockUsers[1], // Maria Rodriguez
      type: 'teaching',
      date: new Date(2024, 0, 30, 16, 30), // Jan 30, 2024 4:30 PM
      duration: 60,
      location: 'Virtual Meeting',
      status: 'confirmed',
      skillOffered: 'UI/UX Design',
      skillReceived: 'Spanish Conversation'
    },
    {
      id: '3',
      title: 'Guitar Lesson',
      partner: mockUsers[2], // David Kim
      type: 'learning',
      date: new Date(2024, 1, 3, 14, 0), // Feb 3, 2024 2:00 PM
      duration: 90,
      location: 'Music Room, Community Center',
      status: 'pending',
      skillOffered: 'Photography',
      skillReceived: 'Guitar Basics'
    },
    {
      id: '4',
      title: 'French Cooking Class',
      partner: mockUsers[3], // Sophie Laurent
      type: 'learning',
      date: new Date(2024, 1, 5, 10, 0), // Feb 5, 2024 10:00 AM
      duration: 120,
      location: 'Downtown Kitchen Studio',
      status: 'confirmed',
      skillOffered: 'Web Development',
      skillReceived: 'French Pastry'
    }
  ];

  const upcomingEvents = events.filter(event => event.date >= new Date()).slice(0, 5);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmed': return 'bg-green-100 text-green-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'cancelled': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'confirmed': return CheckCircle;
      case 'pending': return AlertCircle;
      case 'cancelled': return XCircle;
      default: return Clock;
    }
  };

  // Generate calendar grid for current month
  const generateCalendar = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    const days = [];
    
    // Add empty cells for days before the first day of the month
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null);
    }
    
    // Add days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(new Date(year, month, day));
    }
    
    return days;
  };

  const getEventsForDate = (date: Date | null) => {
    if (!date) return [];
    return events.filter(event => {
      const eventDate = new Date(event.date);
      return eventDate.toDateString() === date.toDateString();
    });
  };

  const navigateMonth = (direction: 'prev' | 'next') => {
    const newDate = new Date(currentDate);
    newDate.setMonth(currentDate.getMonth() + (direction === 'next' ? 1 : -1));
    setCurrentDate(newDate);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Calendar</h1>
            <p className="text-gray-600 mt-1">Manage your skill swap sessions</p>
          </div>
          
          <div className="flex items-center space-x-4">
            <Button onClick={() => onNavigate('discover')}>
              <Plus className="w-4 h-4 mr-2" />
              Schedule Session
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Calendar View */}
          <div className="lg:col-span-3">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center">
                    <CalendarIcon className="w-5 h-5 mr-2" />
                    {currentDate.toLocaleDateString('en-US', { 
                      month: 'long', 
                      year: 'numeric' 
                    })}
                  </CardTitle>
                  
                  <div className="flex items-center space-x-2">
                    <Tabs value={viewMode} onValueChange={(value) => setViewMode(value as 'week' | 'month')}>
                      <TabsList className="grid w-full grid-cols-2">
                        <TabsTrigger value="week">Week</TabsTrigger>
                        <TabsTrigger value="month">Month</TabsTrigger>
                      </TabsList>
                    </Tabs>
                    
                    <div className="flex">
                      <Button variant="outline" size="sm" onClick={() => navigateMonth('prev')}>
                        <ChevronLeft className="w-4 h-4" />
                      </Button>
                      <Button variant="outline" size="sm" onClick={() => navigateMonth('next')}>
                        <ChevronRight className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                {viewMode === 'month' ? (
                  <div className="grid grid-cols-7 gap-1">
                    {/* Day headers */}
                    {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                      <div key={day} className="p-2 text-center font-medium text-gray-600 text-sm">
                        {day}
                      </div>
                    ))}
                    
                    {/* Calendar days */}
                    {generateCalendar().map((date, index) => {
                      const dayEvents = getEventsForDate(date);
                      const isToday = date && date.toDateString() === new Date().toDateString();
                      
                      return (
                        <div
                          key={index}
                          className={`min-h-24 p-1 border border-gray-200 ${
                            date ? 'bg-white hover:bg-gray-50 cursor-pointer' : 'bg-gray-50'
                          } ${isToday ? 'ring-2 ring-primary' : ''}`}
                        >
                          {date && (
                            <>
                              <div className={`text-sm font-medium mb-1 ${
                                isToday ? 'text-primary' : 'text-gray-900'
                              }`}>
                                {date.getDate()}
                              </div>
                              <div className="space-y-1">
                                {dayEvents.slice(0, 2).map((event) => (
                                  <Dialog key={event.id}>
                                    <DialogTrigger asChild>
                                      <div className={`text-xs p-1 rounded cursor-pointer ${
                                        event.type === 'learning' 
                                          ? 'bg-accent/20 text-accent' 
                                          : 'bg-primary/20 text-primary'
                                      }`}>
                                        {event.title}
                                      </div>
                                    </DialogTrigger>
                                    <DialogContent>
                                      <DialogHeader>
                                        <DialogTitle>{event.title}</DialogTitle>
                                      </DialogHeader>
                                      <EventDetails event={event} />
                                    </DialogContent>
                                  </Dialog>
                                ))}
                                {dayEvents.length > 2 && (
                                  <div className="text-xs text-gray-500">
                                    +{dayEvents.length - 2} more
                                  </div>
                                )}
                              </div>
                            </>
                          )}
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  /* Week View - Simplified for now */
                  <div className="text-center py-12">
                    <CalendarIcon className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-lg font-medium text-gray-900 mb-2">Week View</h3>
                    <p className="text-gray-600">Detailed week view coming soon</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Upcoming Sessions */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Upcoming Sessions</CardTitle>
              </CardHeader>
              <CardContent>
                {upcomingEvents.length > 0 ? (
                  <div className="space-y-4">
                    {upcomingEvents.map((event) => {
                      const StatusIcon = getStatusIcon(event.status);
                      
                      return (
                        <div key={event.id} className="p-3 bg-gray-50 rounded-lg">
                          <div className="flex items-start justify-between mb-2">
                            <div>
                              <h4 className="font-medium text-sm">{event.title}</h4>
                              <div className="flex items-center space-x-2 mt-1">
                                <Badge className={`text-xs ${getStatusColor(event.status)}`}>
                                  <StatusIcon className="w-3 h-3 mr-1" />
                                  {event.status}
                                </Badge>
                                <Badge variant={event.type === 'learning' ? 'secondary' : 'default'} className="text-xs">
                                  {event.type === 'learning' ? 'Learning' : 'Teaching'}
                                </Badge>
                              </div>
                            </div>
                            <Button variant="ghost" size="sm">
                              <Edit className="w-3 h-3" />
                            </Button>
                          </div>
                          
                          <div className="flex items-center space-x-2 mb-2">
                            <Avatar className="w-6 h-6">
                              <AvatarImage src={event.partner.avatar} alt={event.partner.name} />
                              <AvatarFallback className="text-xs">{event.partner.initials}</AvatarFallback>
                            </Avatar>
                            <span className="text-sm text-gray-600">{event.partner.name}</span>
                          </div>
                          
                          <div className="text-xs text-gray-500 space-y-1">
                            <div className="flex items-center">
                              <Clock className="w-3 h-3 mr-1" />
                              {event.date.toLocaleDateString()} at {event.date.toLocaleTimeString('en-US', {
                                hour: 'numeric',
                                minute: '2-digit',
                                hour12: true
                              })}
                            </div>
                            <div className="flex items-center">
                              <MapPin className="w-3 h-3 mr-1" />
                              {event.location}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  <div className="text-center py-6">
                    <CalendarIcon className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                    <p className="text-gray-500 text-sm">No upcoming sessions</p>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start" onClick={() => onNavigate('messages')}>
                  <Users className="w-4 h-4 mr-2" />
                  Message Partners
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Video className="w-4 h-4 mr-2" />
                  Join Video Call
                </Button>
                <Button variant="outline" className="w-full justify-start" onClick={() => onNavigate('discover')}>
                  <Plus className="w-4 h-4 mr-2" />
                  Find New Skills
                </Button>
              </CardContent>
            </Card>

            {/* Calendar Integration */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Calendar Sync</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full">
                  <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                  Google Calendar
                </Button>
                <Button variant="outline" className="w-full">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.5 12c0-6.627-5.373-12-12-12S-.5 5.373-.5 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H6.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.112 22.954 23.5 17.99 23.5 12z"/>
                  </svg>
                  Outlook
                </Button>
                <Button variant="outline" className="w-full">
                  <CalendarIcon className="w-4 h-4 mr-2" />
                  Apple Calendar
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

// Event Details Component
function EventDetails({ event }: { event: any }) {
  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-3">
        <Avatar className="w-12 h-12">
          <AvatarImage src={event.partner.avatar} alt={event.partner.name} />
          <AvatarFallback>{event.partner.initials}</AvatarFallback>
        </Avatar>
        <div>
          <h3 className="font-semibold">{event.partner.name}</h3>
          <p className="text-sm text-gray-600">{event.partner.location}</p>
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="text-sm font-medium text-gray-600">You're Teaching</label>
          <p className="font-medium">{event.skillOffered}</p>
        </div>
        <div>
          <label className="text-sm font-medium text-gray-600">You're Learning</label>
          <p className="font-medium">{event.skillReceived}</p>
        </div>
      </div>
      
      <div className="space-y-2">
        <div className="flex items-center text-sm">
          <Clock className="w-4 h-4 mr-2 text-gray-400" />
          {event.date.toLocaleDateString()} at {event.date.toLocaleTimeString('en-US', {
            hour: 'numeric',
            minute: '2-digit',
            hour12: true
          })} ({event.duration} minutes)
        </div>
        <div className="flex items-center text-sm">
          <MapPin className="w-4 h-4 mr-2 text-gray-400" />
          {event.location}
        </div>
      </div>
      
      <div className="flex space-x-2 pt-4">
        <Button className="flex-1">Join Session</Button>
        <Button variant="outline" className="flex-1">Reschedule</Button>
      </div>
    </div>
  );
}