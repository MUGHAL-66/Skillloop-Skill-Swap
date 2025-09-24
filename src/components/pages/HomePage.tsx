import { useState } from 'react';
import { Button } from '../ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Input } from '../ui/input';
import { SkillCard } from '../common/SkillCard';
import { FloatingElements, SkillIcons } from '../common/FloatingElements';
import { skillCategories, skillsWithUsers, featuredSwaps } from '../../data/mockData';
import { 
  Search, 
  MapPin, 
  Star, 
  Users, 
  CheckCircle, 
  ArrowRight,
  Zap,
  Shield,
  Globe,
  Heart,
  TrendingUp,
  Award
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  const [searchQuery, setSearchQuery] = useState('');

  const featuredSkills = skillsWithUsers.slice(0, 6);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-accent text-white py-20 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
        
        {/* Hero Image */}
        <div className="absolute right-0 top-0 w-1/2 h-full hidden lg:block">
          <img 
            src="https://images.unsplash.com/photo-1747146114146-8b8597a53ad4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZW9wbGUlMjBsZWFybmluZyUyMHRvZ2V0aGVyJTIwY29tbXVuaXR5JTIwd29ya3Nob3B8ZW58MXx8fHwxNzU4NTI1MDQ4fDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="People learning together"
            className="w-full h-full object-cover opacity-20 mix-blend-overlay"
          />
        </div>
        
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center bg-white/10 rounded-full px-6 py-3 mb-6 backdrop-blur-sm">
                <Zap className="w-5 h-5 mr-2 text-yellow-300" />
                <span className="text-sm font-medium">Join 2,500+ active skill traders</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Trade Skills,
                <br />
                <span className="text-yellow-300 relative">
                  Not Money
                  <svg className="absolute -bottom-2 left-0 w-full h-3" viewBox="0 0 300 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5,15 Q150,5 295,15" stroke="currentColor" strokeWidth="3" fill="none" className="text-yellow-300/50"/>
                  </svg>
                </span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-green-100 max-w-3xl">
                Connect with your community to exchange knowledge, learn new skills, and build meaningful relationships through skill swapping.
              </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  type="text"
                  placeholder="What skill do you want to learn today?"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 pr-32 py-4 text-lg bg-white text-gray-900 border-0 rounded-full shadow-lg"
                />
                <Button
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 rounded-full bg-secondary hover:bg-secondary/90"
                  onClick={() => onNavigate('discover')}
                >
                  Search Skills
                </Button>
              </div>
            </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Button
                  size="lg"
                  className="bg-white text-primary hover:bg-gray-100 font-semibold py-4 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                  onClick={() => onNavigate('discover')}
                >
                  <Search className="mr-2 w-5 h-5" />
                  Find a Skill
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white border-2 text-white hover:bg-white hover:text-primary font-semibold py-4 px-8 rounded-full backdrop-blur-sm transition-all duration-300 transform hover:-translate-y-1"
                  onClick={() => onNavigate('register')}
                >
                  <Zap className="mr-2 w-5 h-5" />
                  Offer a Skill
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-yellow-300 to-yellow-100 bg-clip-text text-transparent">2,500+</div>
                  <div className="text-green-100 font-medium">Active Members</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-yellow-300 to-yellow-100 bg-clip-text text-transparent">1,200+</div>
                  <div className="text-green-100 font-medium">Skills Swapped</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-yellow-300 to-yellow-100 bg-clip-text text-transparent">4.9★</div>
                  <div className="text-green-100 font-medium">Average Rating</div>
                </div>
              </div>
            </div>
            
            {/* Visual Element for Mobile */}
            <div className="lg:hidden mt-12">
              <img 
                src="https://images.unsplash.com/photo-1586726370832-3440a511e479?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxza2lsbCUyMGV4Y2hhbmdlJTIwY29sbGFib3JhdGlvbiUyMGhhbmRzaWFrZXxlbnwxfHx8fDE3NTg1MjUwNTh8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Skill collaboration"
                className="w-full max-w-md mx-auto rounded-2xl shadow-2xl opacity-80"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How SkillLoop Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Simple, secure, and community-driven skill exchange in three easy steps
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card className="group text-center p-8 border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-gradient-to-br from-white to-primary/5">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-primary/10 to-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Search className="w-10 h-10 text-primary" />
                </div>
                <div className="absolute -top-2 -right-2 w-16 h-16 rounded-full overflow-hidden border-4 border-white shadow-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1592340191147-b4a4de80599f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZWFyY2glMjBkaXNjb3ZlcnklMjBleHBsb3JhdGlvbnxlbnwxfHx8fDE3NTg1MjUxMTV8MA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Discovery"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">1. Discover Skills</h3>
              <p className="text-gray-600 leading-relaxed">Browse thousands of skills offered by your neighbors. Use filters to find exactly what you need.</p>
            </Card>

            <Card className="group text-center p-8 border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-gradient-to-br from-white to-secondary/5">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-secondary/10 to-secondary/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-10 h-10 text-secondary" />
                </div>
                <div className="absolute -top-2 -right-2 w-16 h-16 rounded-full overflow-hidden border-4 border-white shadow-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1745847768380-2caeadbb3b71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5kc2hha2UlMjBwYXJ0bmVyc2hpcCUyMGNvbGxhYm9yYXRpb258ZW58MXx8fHwxNzU4NTI1MTIwfDA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Partnership"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">2. Propose a Swap</h3>
              <p className="text-gray-600 leading-relaxed">Connect with skill providers and propose a fair exchange. Chat to arrange the details.</p>
            </Card>

            <Card className="group text-center p-8 border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-gradient-to-br from-white to-accent/5">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-accent/10 to-accent/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <CheckCircle className="w-10 h-10 text-accent" />
                </div>
                <div className="absolute -top-2 -right-2 w-16 h-16 rounded-full overflow-hidden border-4 border-white shadow-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1758270704080-e3556e6794a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZWFybmluZyUyMHRlYWNoaW5nJTIwZWR1Y2F0aW9uJTIwc3VjY2Vzc3xlbnwxfHx8fDE3NTg1MjUxMjR8MA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Learning"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">3. Learn & Teach</h3>
              <p className="text-gray-600 leading-relaxed">Meet up to exchange skills. Both parties learn something new and build community connections.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Categories - Enhanced with Images & Gradients */}
      <section className="py-20 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-blue-50 to-cyan-50">
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-secondary/5 to-accent/5"></div>
        </div>
        <SkillIcons />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-gradient-to-r from-primary/10 to-accent/10 rounded-full px-6 py-3 mb-6">
              <Zap className="w-5 h-5 mr-2 text-primary" />
              <span className="font-medium text-gray-700">Discover Your Next Skill</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-primary to-accent bg-clip-text text-transparent mb-6">
              Popular Skill Categories
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore the most in-demand skills in your area and start your learning journey today
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {skillCategories.map((category, index) => {
              const backgroundImages = [
                'https://images.unsplash.com/photo-1710770563074-6d9cc0d3e338?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwY29kaW5nJTIwY29tcHV0ZXIlMjBza2lsbHxlbnwxfHx8fDE3NTg1MjU1ODl8MA&ixlib=rb-4.1.0&q=80&w=1080',
                'https://images.unsplash.com/photo-1565095747113-c462f5fbf6d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGFydCUyMGRlc2lnbiUyMHNraWxsfGVufDF8fHx8MTc1ODUyNTU5MHww&ixlib=rb-4.1.0&q=80&w=1080',
                'https://images.unsplash.com/photo-1646150210023-871b7b34e53a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNpYyUyMGluc3RydW1lbnRzJTIwbGVhcm5pbmclMjBza2lsbHxlbnwxfHx8fDE3NTg1MjU1OTB8MA&ixlib=rb-4.1.0&q=80&w=1080',
                'https://images.unsplash.com/photo-1550259979-ed79b48d2a30?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwd29ya291dCUyMHRyYWluaW5nJTIwc2tpbGx8ZW58MXx8fHwxNzU4NTI1NTkwfDA&ixlib=rb-4.1.0&q=80&w=1080'
              ];
              
              const gradients = [
                'from-purple-500/90 to-pink-500/90',
                'from-blue-500/90 to-cyan-500/90',
                'from-green-500/90 to-teal-500/90',
                'from-orange-500/90 to-red-500/90',
                'from-indigo-500/90 to-purple-500/90',
                'from-pink-500/90 to-rose-500/90',
                'from-cyan-500/90 to-blue-500/90',
                'from-teal-500/90 to-green-500/90'
              ];
              
              return (
                <Card
                  key={category.id}
                  className="group cursor-pointer hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border-0 shadow-lg overflow-hidden"
                  onClick={() => onNavigate('discover')}
                  style={{
                    animationDelay: `${index * 150}ms`,
                  }}
                >
                  <div className="relative h-48 overflow-hidden">
                    {/* Background Image */}
                    <div 
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                      style={{
                        backgroundImage: `url(${backgroundImages[index % backgroundImages.length]})`
                      }}
                    />
                    {/* Gradient Overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${gradients[index % gradients.length]} transition-opacity duration-300 group-hover:opacity-80`} />
                    
                    {/* Content */}
                    <CardContent className="relative h-full p-6 flex flex-col justify-between text-white">
                      <div className="text-right">
                        <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-3 py-1">
                          <span className="text-xs font-medium">{category.count} skills</span>
                        </div>
                      </div>
                      
                      <div className="text-center">
                        <div className="text-6xl mb-4 transform group-hover:scale-125 transition-all duration-300 drop-shadow-lg">
                          {category.icon}
                        </div>
                        <h3 className="font-bold text-xl mb-2 drop-shadow-md">
                          {category.name}
                        </h3>
                        <div className="w-full bg-white/30 rounded-full h-2">
                          <div 
                            className="bg-gradient-to-r from-white/70 to-white/90 h-2 rounded-full transition-all duration-700 group-hover:w-full shadow-sm"
                            style={{ width: `${Math.min(100, (category.count / 300) * 100)}%` }}
                          />
                        </div>
                      </div>
                    </CardContent>
                  </div>
                </Card>
              );
            })}
          </div>

          <div className="text-center">
            <Button
              size="lg"
              onClick={() => onNavigate('discover')}
              className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white rounded-full px-8 py-4 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <Search className="mr-2 w-5 h-5" />
              Explore All Categories
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Top Swaps Near You */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Top Swaps Near You
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Discover amazing skill exchanges happening in your community
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredSkills.map((skill) => (
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

          <div className="text-center">
            <Button
              size="lg"
              onClick={() => onNavigate('discover')}
              className="bg-primary hover:bg-primary/90 rounded-full"
            >
              Explore More Skills
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-gradient-to-r from-primary/10 to-accent/10 rounded-full px-6 py-3 mb-6">
              <Heart className="w-5 h-5 mr-2 text-accent" />
              <span className="font-medium text-gray-700">Community Stories</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-primary to-accent bg-clip-text text-transparent mb-6">
              What Our Community Says
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real stories from real people who have transformed their lives through skill exchange
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <Card className="group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary to-secondary"></div>
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="relative">
                    <img
                      src="https://images.unsplash.com/photo-1658288098101-84f074c292a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMHdvbWFuJTIwdGVzdGltb25pYWwlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NTg0NzUxNDN8MA&ixlib=rb-4.1.0&q=80&w=1080"
                      alt="Sarah's testimonial"
                      className="w-16 h-16 rounded-full object-cover border-4 border-primary/20"
                    />
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-gray-900">Sarah Chen</h4>
                    <p className="text-sm text-gray-600">Graphic Designer</p>
                    <div className="flex items-center mt-1">
                      {[1,2,3,4,5].map((star) => (
                        <Star key={star} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
                <blockquote className="text-gray-700 italic mb-4 leading-relaxed">
                  "I traded my graphic design skills for piano lessons with my neighbor Emma. Not only did I learn an instrument I've always wanted to play, but we became great friends! SkillLoop has enriched my life beyond measure."
                </blockquote>
                <div className="flex items-center text-sm text-primary font-medium">
                  <Badge variant="secondary" className="mr-2">Design ↔ Music</Badge>
                  <span>3 months ago</span>
                </div>
              </CardContent>
            </Card>

            {/* Testimonial 2 */}
            <Card className="group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-secondary to-accent"></div>
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="relative">
                    <img
                      src="https://images.unsplash.com/photo-1692643366768-b21bc8506ea1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25maWRlbnQlMjBtYW4lMjB0ZXN0aW1vbmlhbCUyMHNtaWxpbmd8ZW58MXx8fHwxNzU4NTI1NTg4fDA&ixlib=rb-4.1.0&q=80&w=1080"
                      alt="Marcus testimonial"
                      className="w-16 h-16 rounded-full object-cover border-4 border-secondary/20"
                    />
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-secondary rounded-full flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-gray-900">Marcus Johnson</h4>
                    <p className="text-sm text-gray-600">Software Developer</p>
                    <div className="flex items-center mt-1">
                      {[1,2,3,4,5].map((star) => (
                        <Star key={star} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
                <blockquote className="text-gray-700 italic mb-4 leading-relaxed">
                  "Through SkillLoop, I taught coding to a local chef who helped me master French cuisine. The community aspect is incredible - we now host monthly skill-sharing dinners with other members!"
                </blockquote>
                <div className="flex items-center text-sm text-secondary font-medium">
                  <Badge variant="secondary" className="mr-2">Tech ↔ Cooking</Badge>
                  <span>1 month ago</span>
                </div>
              </CardContent>
            </Card>

            {/* Testimonial 3 */}
            <Card className="group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-accent to-primary"></div>
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="relative">
                    <img
                      src="https://images.unsplash.com/photo-1590563152569-bd0b2dae4418?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMHRlc3RpbW9uaWFsJTIwaGVhZHNob3R8ZW58MXx8fHwxNzU4NTI1NTg5fDA&ixlib=rb-4.1.0&q=80&w=1080"
                      alt="Elena testimonial"
                      className="w-16 h-16 rounded-full object-cover border-4 border-accent/20"
                    />
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-accent rounded-full flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-gray-900">Elena Rodriguez</h4>
                    <p className="text-sm text-gray-600">Fitness Trainer</p>
                    <div className="flex items-center mt-1">
                      {[1,2,3,4,5].map((star) => (
                        <Star key={star} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
                <blockquote className="text-gray-700 italic mb-4 leading-relaxed">
                  "I never thought I could learn photography, but by exchanging fitness training for photo lessons, I discovered a new passion. My Instagram went from 200 to 5K followers!"
                </blockquote>
                <div className="flex items-center text-sm text-accent font-medium">
                  <Badge variant="secondary" className="mr-2">Fitness ↔ Photography</Badge>
                  <span>2 weeks ago</span>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <div className="inline-flex items-center bg-white rounded-full px-8 py-4 shadow-lg">
              <div className="flex items-center space-x-2 mr-4">
                <div className="flex -space-x-3">
                  <img src="https://images.unsplash.com/photo-1658288098101-84f074c292a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMHdvbWFuJTIwdGVzdGltb25pYWwlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NTg0NzUxNDN8MA&ixlib=rb-4.1.0&q=80&w=1080" className="w-8 h-8 rounded-full border-2 border-white object-cover" alt="User" />
                  <img src="https://images.unsplash.com/photo-1692643366768-b21bc8506ea1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25maWRlbnQlMjBtYW4lMjB0ZXN0aW1vbmlhbCUyMHNtaWxpbmd8ZW58MXx8fHwxNzU4NTI1NTg4fDA&ixlib=rb-4.1.0&q=80&w=1080" className="w-8 h-8 rounded-full border-2 border-white object-cover" alt="User" />
                  <img src="https://images.unsplash.com/photo-1590563152569-bd0b2dae4418?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMHRlc3RpbW9uaWFsJTIwaGVhZHNob3R8ZW58MXx8fHwxNzU4NTI1NTg5fDA&ixlib=rb-4.1.0&q=80&w=1080" className="w-8 h-8 rounded-full border-2 border-white object-cover" alt="User" />
                  <div className="w-8 h-8 rounded-full border-2 border-white bg-primary text-white flex items-center justify-center text-xs font-medium">+2K</div>
                </div>
              </div>
              <span className="text-sm text-gray-600 font-medium">Join 2,500+ happy skill traders</span>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Recent Success Stories</h2>
            <p className="text-xl text-gray-300">See what amazing swaps are happening</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredSwaps.map((swap) => (
              <Card key={swap.id} className="bg-white/10 border-white/20 text-white">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <Badge className="bg-primary text-white">
                      {swap.status === 'completed' ? 'Completed' : 'Ongoing'}
                    </Badge>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="ml-1">{swap.rating}</span>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="font-semibold text-lg mb-2">{swap.skill1}</div>
                    <div className="text-2xl mb-2">⇄</div>
                    <div className="font-semibold text-lg mb-4">{swap.skill2}</div>
                    <div className="text-sm text-gray-300 mb-2">
                      {swap.user1} ↔ {swap.user2}
                    </div>
                    <div className="flex items-center justify-center text-sm text-gray-400">
                      <MapPin className="w-3 h-3 mr-1" />
                      {swap.location}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose SkillLoop */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose SkillLoop?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Verified Profiles</h3>
              <p className="text-gray-600 text-sm">All members are verified with reviews and ratings for your safety.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="font-semibold mb-2">Local Community</h3>
              <p className="text-gray-600 text-sm">Connect with neighbors and build your local community network.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-accent" />
              </div>
              <h3 className="font-semibold mb-2">No Money Involved</h3>
              <p className="text-gray-600 text-sm">Pure skill exchange - teach what you know, learn what you want.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Track Progress</h3>
              <p className="text-gray-600 text-sm">Monitor your learning journey and build your skill portfolio.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <Award className="w-16 h-16 mx-auto mb-6 text-yellow-300" />
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Learning?</h2>
          <p className="text-xl mb-8 text-green-100">
            Join thousands of learners who are trading skills and building community connections every day.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-gray-100 font-semibold py-3 px-8 rounded-full"
              onClick={() => onNavigate('register')}
            >
              Join SkillLoop Today
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-primary font-semibold py-3 px-8 rounded-full"
              onClick={() => onNavigate('discover')}
            >
              Browse Skills First
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}