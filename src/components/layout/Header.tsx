import { useState } from 'react';
import { Button } from '../ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { Badge } from '../ui/badge';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';
import { Bell, MessageCircle, User, Settings, LogOut, Menu, Search } from 'lucide-react';
import { Input } from '../ui/input';

interface HeaderProps {
  currentPage?: string;
  onNavigate?: (page: string) => void;
  isLoggedIn?: boolean;
  onLogin?: () => void;
  onLogout?: () => void;
}

export function Header({ currentPage, onNavigate, isLoggedIn, onLogin, onLogout }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavigation = (page: string) => {
    onNavigate?.(page);
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Brand */}
          <div className="flex items-center">
            <button
              onClick={() => handleNavigation('home')}
              className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
            >
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">SL</span>
              </div>
              <span className="text-xl font-semibold text-gray-900">SkillLoop</span>
            </button>
          </div>

          {/* Search Bar - Desktop */}
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                type="text"
                placeholder="Search skills or people..."
                className="pl-10 bg-gray-50 border-gray-200 focus:bg-white"
              />
            </div>
          </div>

          {/* Navigation and Actions */}
          {isLoggedIn ? (
            <div className="flex items-center space-x-4">
              {/* Desktop Navigation */}
              <nav className="hidden md:flex items-center space-x-6">
                <button
                  onClick={() => handleNavigation('dashboard')}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    currentPage === 'dashboard' ? 'text-primary' : 'text-gray-600'
                  }`}
                >
                  Dashboard
                </button>
                <button
                  onClick={() => handleNavigation('discover')}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    currentPage === 'discover' ? 'text-primary' : 'text-gray-600'
                  }`}
                >
                  Discover
                </button>
                <button
                  onClick={() => handleNavigation('messages')}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    currentPage === 'messages' ? 'text-primary' : 'text-gray-600'
                  }`}
                >
                  Messages
                </button>
              </nav>

              {/* Notifications */}
              <Button variant="ghost" size="sm" className="relative">
                <Bell className="w-5 h-5" />
                <Badge className="absolute -top-1 -right-1 w-5 h-5 p-0 flex items-center justify-center bg-secondary text-white">
                  3
                </Badge>
              </Button>

              {/* Messages */}
              <Button
                variant="ghost"
                size="sm"
                className="relative"
                onClick={() => handleNavigation('messages')}
              >
                <MessageCircle className="w-5 h-5" />
                <Badge className="absolute -top-1 -right-1 w-5 h-5 p-0 flex items-center justify-center bg-accent text-white">
                  2
                </Badge>
              </Button>

              {/* User Menu */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src="/avatars/user.jpg" alt="User" />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="end" forceMount>
                  <DropdownMenuLabel className="font-normal">
                    <div className="flex flex-col space-y-1">
                      <p className="text-sm font-medium leading-none">Jane Doe</p>
                      <p className="text-xs leading-none text-muted-foreground">
                        jane@example.com
                      </p>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={() => handleNavigation('profile')}>
                    <User className="mr-2 h-4 w-4" />
                    <span>Profile</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => handleNavigation('calendar')}>
                    <Settings className="mr-2 h-4 w-4" />
                    <span>Calendar</span>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={onLogout}>
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Log out</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Mobile Menu Button */}
              <Button
                variant="ghost"
                size="sm"
                className="md:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <Menu className="w-5 h-5" />
              </Button>
            </div>
          ) : (
            <div className="flex items-center space-x-3">
              <Button variant="ghost" onClick={() => handleNavigation('login')}>
                Log In
              </Button>
              <Button onClick={() => handleNavigation('register')}>
                Sign Up
              </Button>
            </div>
          )}
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && isLoggedIn && (
          <div className="md:hidden border-t border-gray-200 py-4">
            <div className="flex flex-col space-y-3">
              <Input
                type="text"
                placeholder="Search skills or people..."
                className="bg-gray-50 border-gray-200"
              />
              <button
                onClick={() => handleNavigation('dashboard')}
                className="text-left text-sm font-medium text-gray-600 hover:text-primary px-2 py-1"
              >
                Dashboard
              </button>
              <button
                onClick={() => handleNavigation('discover')}
                className="text-left text-sm font-medium text-gray-600 hover:text-primary px-2 py-1"
              >
                Discover
              </button>
              <button
                onClick={() => handleNavigation('messages')}
                className="text-left text-sm font-medium text-gray-600 hover:text-primary px-2 py-1"
              >
                Messages
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}