import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Badge } from '../ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { Separator } from '../ui/separator';
import { mockUsers, mockMessages } from '../../data/mockData';
import { 
  Search,
  Send,
  Paperclip,
  Smile,
  MoreVertical,
  Phone,
  Video,
  Info,
  MessageCircle,
  Clock,
  CheckCheck
} from 'lucide-react';

interface MessagesPageProps {
  onNavigate: (page: string) => void;
}

export function MessagesPage({ onNavigate }: MessagesPageProps) {
  const [selectedConversation, setSelectedConversation] = useState<string | null>('2');
  const [messageText, setMessageText] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  // Mock conversations data
  const conversations = [
    {
      id: '2',
      participant: mockUsers[1], // Maria Rodriguez
      lastMessage: "How about we start this weekend? We could do a 1-hour session each - I teach you Spanish first, then you show me some design fundamentals?",
      timestamp: '2024-01-30T11:30:00Z',
      unreadCount: 2,
      isOnline: true
    },
    {
      id: '3',
      participant: mockUsers[2], // David Kim
      lastMessage: "Thanks for the guitar lesson today! Really enjoyed it. Let me know when you'd like to start with the coding basics.",
      timestamp: '2024-01-29T15:45:00Z',
      unreadCount: 0,
      isOnline: false
    },
    {
      id: '4',
      participant: mockUsers[3], // Sophie Laurent
      lastMessage: "I'd love to learn some UI design principles from you! When would be a good time to meet?",
      timestamp: '2024-01-28T09:20:00Z',
      unreadCount: 1,
      isOnline: true
    }
  ];

  const currentConversation = conversations.find(c => c.id === selectedConversation);

  // Mock messages for selected conversation
  const conversationMessages = [
    {
      id: '1',
      senderId: '2',
      content: "Hi Alex! I saw your UI/UX design offering and I'm really interested. I can teach you Spanish in exchange!",
      timestamp: '2024-01-30T10:30:00Z',
      isRead: true
    },
    {
      id: '2',
      senderId: '1', // Current user
      content: "That sounds perfect Maria! I've been wanting to learn Spanish for a while. When would be a good time to start?",
      timestamp: '2024-01-30T11:15:00Z',
      isRead: true
    },
    {
      id: '3',
      senderId: '2',
      content: "How about we start this weekend? We could do a 1-hour session each - I teach you Spanish first, then you show me some design fundamentals?",
      timestamp: '2024-01-30T11:30:00Z',
      isRead: false
    }
  ];

  const handleSendMessage = () => {
    if (messageText.trim()) {
      // Add message logic here
      setMessageText('');
    }
  };

  const formatTime = (timestamp: string) => {
    const date = new Date(timestamp);
    const now = new Date();
    const diffInHours = (now.getTime() - date.getTime()) / (1000 * 60 * 60);
    
    if (diffInHours < 24) {
      return date.toLocaleTimeString('en-US', { 
        hour: 'numeric', 
        minute: '2-digit',
        hour12: true 
      });
    } else {
      return date.toLocaleDateString('en-US', { 
        month: 'short', 
        day: 'numeric' 
      });
    }
  };

  return (
    <div className="h-screen bg-gray-50 flex">
      {/* Conversations List */}
      <div className="w-1/3 bg-white border-r border-gray-200 flex flex-col">
        {/* Header */}
        <div className="p-6 border-b border-gray-200">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Messages</h1>
          
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              type="text"
              placeholder="Search conversations..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        {/* Conversation List */}
        <div className="flex-1 overflow-y-auto">
          {conversations.map((conversation) => (
            <div
              key={conversation.id}
              className={`p-4 border-b border-gray-100 cursor-pointer hover:bg-gray-50 transition-colors ${
                selectedConversation === conversation.id ? 'bg-primary/5 border-r-2 border-r-primary' : ''
              }`}
              onClick={() => setSelectedConversation(conversation.id)}
            >
              <div className="flex items-start space-x-3">
                <div className="relative">
                  <Avatar className="w-12 h-12">
                    <AvatarImage src={conversation.participant.avatar} alt={conversation.participant.name} />
                    <AvatarFallback>{conversation.participant.initials}</AvatarFallback>
                  </Avatar>
                  {conversation.isOnline && (
                    <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 rounded-full border-2 border-white"></div>
                  )}
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="font-medium text-gray-900 truncate">
                      {conversation.participant.name}
                    </h3>
                    <div className="flex items-center space-x-2">
                      <span className="text-xs text-gray-500">
                        {formatTime(conversation.timestamp)}
                      </span>
                      {conversation.unreadCount > 0 && (
                        <Badge className="bg-primary text-white text-xs px-2 py-0.5 min-w-5 h-5 flex items-center justify-center rounded-full">
                          {conversation.unreadCount}
                        </Badge>
                      )}
                    </div>
                  </div>
                  
                  <p className="text-sm text-gray-600 truncate">
                    {conversation.lastMessage}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 flex flex-col">
        {currentConversation ? (
          <>
            {/* Chat Header */}
            <div className="p-6 bg-white border-b border-gray-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="relative">
                    <Avatar className="w-12 h-12">
                      <AvatarImage src={currentConversation.participant.avatar} alt={currentConversation.participant.name} />
                      <AvatarFallback>{currentConversation.participant.initials}</AvatarFallback>
                    </Avatar>
                    {currentConversation.isOnline && (
                      <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 rounded-full border-2 border-white"></div>
                    )}
                  </div>
                  
                  <div>
                    <h2 className="font-semibold text-gray-900">{currentConversation.participant.name}</h2>
                    <p className="text-sm text-gray-500">
                      {currentConversation.isOnline ? 'Online now' : 'Last seen 2 hours ago'}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-2">
                  <Button variant="ghost" size="sm">
                    <Phone className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Video className="w-4 h-4" />
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="sm"
                    onClick={() => onNavigate('profile')}
                  >
                    <Info className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <MoreVertical className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {conversationMessages.map((message) => {
                const isCurrentUser = message.senderId === '1';
                const sender = isCurrentUser ? mockUsers[0] : currentConversation.participant;
                
                return (
                  <div
                    key={message.id}
                    className={`flex ${isCurrentUser ? 'justify-end' : 'justify-start'}`}
                  >
                    <div className={`flex items-end space-x-2 max-w-xs lg:max-w-md ${
                      isCurrentUser ? 'flex-row-reverse space-x-reverse' : 'flex-row'
                    }`}>
                      <Avatar className="w-8 h-8">
                        <AvatarImage src={sender.avatar} alt={sender.name} />
                        <AvatarFallback className="text-xs">{sender.initials}</AvatarFallback>
                      </Avatar>
                      
                      <div className={`px-4 py-2 rounded-lg ${
                        isCurrentUser
                          ? 'bg-primary text-white'
                          : 'bg-gray-100 text-gray-900'
                      }`}>
                        <p className="text-sm">{message.content}</p>
                        <div className={`flex items-center mt-1 text-xs ${
                          isCurrentUser ? 'text-primary-foreground/70' : 'text-gray-500'
                        }`}>
                          <Clock className="w-3 h-3 mr-1" />
                          {formatTime(message.timestamp)}
                          {isCurrentUser && (
                            <CheckCheck className={`w-3 h-3 ml-1 ${
                              message.isRead ? 'text-accent' : 'text-primary-foreground/50'
                            }`} />
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Message Input */}
            <div className="p-6 bg-white border-t border-gray-200">
              <div className="flex items-center space-x-4">
                <Button variant="ghost" size="sm">
                  <Paperclip className="w-4 h-4" />
                </Button>
                
                <div className="flex-1 relative">
                  <Input
                    type="text"
                    placeholder="Type a message..."
                    value={messageText}
                    onChange={(e) => setMessageText(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                    className="pr-10"
                  />
                  <Button
                    variant="ghost"
                    size="sm"
                    className="absolute right-2 top-1/2 transform -translate-y-1/2"
                  >
                    <Smile className="w-4 h-4" />
                  </Button>
                </div>
                
                <Button
                  onClick={handleSendMessage}
                  disabled={!messageText.trim()}
                  className="bg-primary hover:bg-primary/90"
                >
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </>
        ) : (
          /* No Conversation Selected */
          <div className="flex-1 flex items-center justify-center bg-gray-50">
            <div className="text-center">
              <MessageCircle className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h2 className="text-xl font-semibold text-gray-900 mb-2">Select a conversation</h2>
              <p className="text-gray-600 mb-6">Choose a conversation from the list to start chatting</p>
              <Button onClick={() => onNavigate('discover')}>
                Find People to Chat With
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}