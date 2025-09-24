import { useState } from 'react';
import { Header } from './components/layout/Header';
import { HomePage } from './components/pages/HomePage';
import { LoginPage } from './components/pages/LoginPage';
import { RegisterPage } from './components/pages/RegisterPage';
import { DashboardPage } from './components/pages/DashboardPage';
import { DiscoverPage } from './components/pages/DiscoverPage';
import { ProfilePage } from './components/pages/ProfilePage';
import { MessagesPage } from './components/pages/MessagesPage';
import { CalendarPage } from './components/pages/CalendarPage';
import { Toaster } from './components/ui/sonner';
import './styles/globals.css';

type Page = 'home' | 'login' | 'register' | 'dashboard' | 'discover' | 'profile' | 'messages' | 'calendar' | 'swap-proposal' | 'admin';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleNavigate = (page: Page) => {
    setCurrentPage(page);
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentPage('home');
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={handleNavigate} />;
      case 'login':
        return <LoginPage onNavigate={handleNavigate} onLogin={handleLogin} />;
      case 'register':
        return <RegisterPage onNavigate={handleNavigate} onLogin={handleLogin} />;
      case 'dashboard':
        return <DashboardPage onNavigate={handleNavigate} />;
      case 'discover':
        return <DiscoverPage onNavigate={handleNavigate} />;
      case 'profile':
        return <ProfilePage onNavigate={handleNavigate} />;
      case 'messages':
        return <MessagesPage onNavigate={handleNavigate} />;
      case 'calendar':
        return <CalendarPage onNavigate={handleNavigate} />;
      case 'swap-proposal':
        return <div className="min-h-screen bg-gray-50 flex items-center justify-center">
          <div className="text-center">
            <h1>Swap Proposal Modal</h1>
            <p className="text-gray-600 mt-2">Coming soon...</p>
          </div>
        </div>;
      case 'admin':
        return <div className="min-h-screen bg-gray-50 flex items-center justify-center">
          <div className="text-center">
            <h1>Admin Panel</h1>
            <p className="text-gray-600 mt-2">Coming soon...</p>
          </div>
        </div>;
      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header - only show on authenticated pages or when user is logged in */}
      {(isLoggedIn || ['home'].includes(currentPage)) && !['login', 'register'].includes(currentPage) && (
        <Header
          currentPage={currentPage}
          onNavigate={handleNavigate}
          isLoggedIn={isLoggedIn}
          onLogin={handleLogin}
          onLogout={handleLogout}
        />
      )}
      
      {/* Main Content */}
      <main className="w-full">
        {renderPage()}
      </main>

      {/* Toast Notifications */}
      <Toaster />
    </div>
  );
}