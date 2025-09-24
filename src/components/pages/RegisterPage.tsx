import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Separator } from '../ui/separator';
import { Checkbox } from '../ui/checkbox';
import { Badge } from '../ui/badge';
import { Alert, AlertDescription } from '../ui/alert';
import { Progress } from '../ui/progress';
import { 
  Mail, 
  Lock, 
  Eye, 
  EyeOff, 
  ArrowLeft, 
  User, 
  MapPin, 
  ArrowRight,
  Check,
  X,
  Users,
  Shield,
  Zap,
  CheckCircle,
  Heart,
  TrendingUp
} from 'lucide-react';
import { skillCategories } from '../../data/mockData';
import { FloatingElements } from '../common/FloatingElements';

interface RegisterPageProps {
  onNavigate: (page: string) => void;
  onLogin: () => void;
}

export function RegisterPage({ onNavigate, onLogin }: RegisterPageProps) {
  const [step, setStep] = useState(1);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    location: '',
    agreesToTerms: false,
    offeredSkills: [] as string[],
    neededSkills: [] as string[]
  });
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const totalSteps = 3;
  const progress = (step / totalSteps) * 100;

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    setError('');
  };

  const handleSkillToggle = (skillType: 'offeredSkills' | 'neededSkills', skill: string) => {
    setFormData(prev => ({
      ...prev,
      [skillType]: prev[skillType].includes(skill)
        ? prev[skillType].filter(s => s !== skill)
        : [...prev[skillType], skill]
    }));
  };

  const validateStep = () => {
    switch (step) {
      case 1:
        if (!formData.firstName || !formData.lastName || !formData.email) {
          setError('Please fill in all fields');
          return false;
        }
        if (!/\S+@\S+\.\S+/.test(formData.email)) {
          setError('Please enter a valid email address');
          return false;
        }
        break;
      case 2:
        if (!formData.password || formData.password.length < 6) {
          setError('Password must be at least 6 characters long');
          return false;
        }
        if (formData.password !== formData.confirmPassword) {
          setError('Passwords do not match');
          return false;
        }
        if (!formData.location) {
          setError('Please enter your location');
          return false;
        }
        if (!formData.agreesToTerms) {
          setError('Please agree to the Terms of Service');
          return false;
        }
        break;
      case 3:
        if (formData.offeredSkills.length === 0 || formData.neededSkills.length === 0) {
          setError('Please select at least one skill you can offer and one you need');
          return false;
        }
        break;
    }
    return true;
  };

  const handleNext = () => {
    if (validateStep()) {
      setStep(step + 1);
      setError('');
    }
  };

  const handleBack = () => {
    setStep(step - 1);
    setError('');
  };

  const handleSubmit = async () => {
    if (!validateStep()) return;

    setIsLoading(true);
    // Simulate registration
    setTimeout(() => {
      onLogin();
      onNavigate('dashboard');
    }, 2000);
  };

  const handleSocialRegister = (provider: string) => {
    setIsLoading(true);
    // Simulate social registration
    setTimeout(() => {
      onLogin();
      onNavigate('dashboard');
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-white to-accent/5 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%234CAF50' fill-opacity='0.1'%3E%3Cpath d='M40 40c0-4.4 3.6-8 8-8s8 3.6 8 8-3.6 8-8 8-8-3.6-8-8zm0-40c0-4.4 3.6-8 8-8s8 3.6 8 8-3.6 8-8 8-8-3.6-8-8z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Floating Elements */}
      <FloatingElements />

      {/* Side Image */}
      {step === 1 && (
        <div className="hidden lg:block absolute right-0 top-0 w-1/2 h-full">
          <div className="relative w-full h-full">
            <img 
              src="https://images.unsplash.com/photo-1564456009070-0eaafccf908f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaWdudXAlMjByZWdpc3RyYXRpb24lMjBuZXclMjBqb3VybmV5fGVufDF8fHx8MTc1ODUyNTA3NHww&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Start your journey"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-primary/80 to-secondary/60 flex items-center justify-center">
              <div className="text-center text-white p-8">
                <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 backdrop-blur-sm">
                  <Users className="w-12 h-12" />
                </div>
                <h2 className="text-3xl font-bold mb-4">Start Your Journey</h2>
                <p className="text-lg text-white/90 mb-6">Join thousands who are already trading skills and building community</p>
                <div className="space-y-3 text-left max-w-sm">
                  <div className="flex items-center text-white/90">
                    <CheckCircle className="w-5 h-5 mr-3 text-green-300" />
                    Learn from local experts
                  </div>
                  <div className="flex items-center text-white/90">
                    <CheckCircle className="w-5 h-5 mr-3 text-green-300" />
                    Teach your skills
                  </div>
                  <div className="flex items-center text-white/90">
                    <CheckCircle className="w-5 h-5 mr-3 text-green-300" />
                    Build community connections
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {step === 3 && (
        <div className="hidden lg:block absolute right-0 top-0 w-1/2 h-full">
          <div className="relative w-full h-full">
            <img 
              src="https://images.unsplash.com/photo-1696041757950-62e2c030283b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjBjb25uZWN0aW9uJTIwbmV0d29ya2luZyUyMHBlb3BsZXxlbnwxfHx8fDE3NTg1MjUwNzJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Community connections"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-accent/80 to-primary/60 flex items-center justify-center">
              <div className="text-center text-white p-8">
                <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 backdrop-blur-sm">
                  <Heart className="w-12 h-12" />
                </div>
                <h2 className="text-3xl font-bold mb-4">Almost There!</h2>
                <p className="text-lg text-white/90">Tell us about your skills to find the perfect matches</p>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="w-full max-w-lg lg:mr-auto lg:ml-16 relative z-10">
        {/* Back Button */}
        <Button
          variant="ghost"
          onClick={() => step === 1 ? onNavigate('home') : handleBack()}
          className="mb-6 -ml-2"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          {step === 1 ? 'Back to Home' : 'Previous Step'}
        </Button>

        <Card className="shadow-2xl border-0 backdrop-blur-sm bg-white/95">
          <CardHeader className="text-center pb-6 relative">
            <div className="w-20 h-20 bg-gradient-to-br from-primary via-secondary to-accent rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg relative overflow-hidden">
              <span className="text-white font-bold text-2xl relative z-10">SL</span>
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent animate-pulse"></div>
            </div>
            <CardTitle className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Join SkillLoop
            </CardTitle>
            <CardDescription className="text-lg text-gray-600 mt-2">
              {step === 1 && (
                <span className="flex items-center justify-center">
                  <Users className="w-5 h-5 mr-2 text-primary" />
                  Start trading skills with your community
                </span>
              )}
              {step === 2 && (
                <span className="flex items-center justify-center">
                  <Shield className="w-5 h-5 mr-2 text-secondary" />
                  Set up your account security and location
                </span>
              )}
              {step === 3 && (
                <span className="flex items-center justify-center">
                  <Zap className="w-5 h-5 mr-2 text-accent" />
                  Tell us about your skills and interests
                </span>
              )}
            </CardDescription>
            
            {/* Progress Bar */}
            <div className="mt-4">
              <div className="flex justify-between text-xs text-gray-500 mb-2">
                <span>Step {step} of {totalSteps}</span>
                <span>{Math.round(progress)}% complete</span>
              </div>
              <Progress value={progress} className="h-2" />
            </div>
          </CardHeader>

          <CardContent className="space-y-6">
            {error && (
              <Alert variant="destructive">
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}

            {/* Step 1: Basic Info & Social Options */}
            {step === 1 && (
              <div className="space-y-6">
                {/* Social Registration */}
                <div className="space-y-3">
                  <Button
                    variant="outline"
                    className="w-full"
                    onClick={() => handleSocialRegister('google')}
                    disabled={isLoading}
                  >
                    <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                      <path
                        fill="currentColor"
                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      />
                      <path
                        fill="currentColor"
                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      />
                      <path
                        fill="currentColor"
                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                      />
                      <path
                        fill="currentColor"
                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                      />
                    </svg>
                    Continue with Google
                  </Button>

                  <div className="grid grid-cols-2 gap-3">
                    <Button
                      variant="outline"
                      onClick={() => handleSocialRegister('apple')}
                      disabled={isLoading}
                    >
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                      </svg>
                      Apple
                    </Button>
                    
                    <Button
                      variant="outline"
                      onClick={() => handleSocialRegister('facebook')}
                      disabled={isLoading}
                    >
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                      Facebook
                    </Button>
                  </div>
                </div>

                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <Separator className="w-full" />
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-white px-2 text-muted-foreground">Or register with email</span>
                  </div>
                </div>

                {/* Basic Info Form */}
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                        <Input
                          id="firstName"
                          placeholder="John"
                          value={formData.firstName}
                          onChange={(e) => handleInputChange('firstName', e.target.value)}
                          className="pl-10"
                          required
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input
                        id="lastName"
                        placeholder="Doe"
                        value={formData.lastName}
                        onChange={(e) => handleInputChange('lastName', e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                      <Input
                        id="email"
                        type="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>

                  <Button
                    onClick={handleNext}
                    className="w-full bg-primary hover:bg-primary/90"
                  >
                    Continue
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            )}

            {/* Step 2: Security & Location */}
            {step === 2 && (
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <Input
                      id="password"
                      type={showPassword ? 'text' : 'password'}
                      placeholder="Create a strong password"
                      value={formData.password}
                      onChange={(e) => handleInputChange('password', e.target.value)}
                      className="pl-10 pr-10"
                      required
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      className="absolute right-2 top-1/2 transform -translate-y-1/2 h-auto p-0"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <EyeOff className="w-4 h-4 text-gray-400" />
                      ) : (
                        <Eye className="w-4 h-4 text-gray-400" />
                      )}
                    </Button>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="confirmPassword">Confirm Password</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <Input
                      id="confirmPassword"
                      type="password"
                      placeholder="Confirm your password"
                      value={formData.confirmPassword}
                      onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
                      className="pl-10"
                      required
                    />
                    {formData.confirmPassword && (
                      <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                        {formData.password === formData.confirmPassword ? (
                          <Check className="w-4 h-4 text-green-500" />
                        ) : (
                          <X className="w-4 h-4 text-red-500" />
                        )}
                      </div>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="location">Location</Label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <Input
                      id="location"
                      placeholder="City, State or ZIP code"
                      value={formData.location}
                      onChange={(e) => handleInputChange('location', e.target.value)}
                      className="pl-10"
                      required
                    />
                  </div>
                  <p className="text-xs text-gray-500">We'll help you find skills near you</p>
                </div>

                <div className="flex items-start space-x-2">
                  <Checkbox
                    id="terms"
                    checked={formData.agreesToTerms}
                    onCheckedChange={(checked) => handleInputChange('agreesToTerms', checked as boolean)}
                  />
                  <Label htmlFor="terms" className="text-sm text-gray-600 leading-relaxed">
                    I agree to the{' '}
                    <a href="#" className="text-primary hover:underline">Terms of Service</a>
                    {' '}and{' '}
                    <a href="#" className="text-primary hover:underline">Privacy Policy</a>
                  </Label>
                </div>

                <Button
                  onClick={handleNext}
                  className="w-full bg-primary hover:bg-primary/90"
                >
                  Continue
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            )}

            {/* Step 3: Skills Selection */}
            {step === 3 && (
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold mb-3 flex items-center">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                      <TrendingUp className="w-4 h-4 text-primary" />
                    </div>
                    What skills can you offer?
                  </h3>
                  <div className="grid grid-cols-2 gap-3">
                    {skillCategories.map((category) => (
                      <Badge
                        key={`offer-${category.id}`}
                        variant={formData.offeredSkills.includes(category.name) ? "default" : "outline"}
                        className={`cursor-pointer p-3 justify-center transition-all duration-300 transform hover:scale-105 ${
                          formData.offeredSkills.includes(category.name)
                            ? 'bg-gradient-to-r from-primary to-primary/80 text-white shadow-lg'
                            : 'hover:bg-primary/10 hover:shadow-md border-2 hover:border-primary/30'
                        }`}
                        onClick={() => handleSkillToggle('offeredSkills', category.name)}
                      >
                        <span className="mr-2 text-lg">{category.icon}</span>
                        <span className="font-medium">{category.name}</span>
                      </Badge>
                    ))}
                  </div>
                  <div className="flex items-center justify-between mt-3">
                    <p className="text-xs text-gray-500">
                      Selected: {formData.offeredSkills.length} skills
                    </p>
                    <div className="w-20 bg-gray-200 rounded-full h-1.5">
                      <div 
                        className="bg-primary h-1.5 rounded-full transition-all duration-300"
                        style={{ width: `${Math.min(100, (formData.offeredSkills.length / skillCategories.length) * 100)}%` }}
                      />
                    </div>
                  </div>
                </div>

                <Separator />

                <div>
                  <h3 className="font-semibold mb-3 flex items-center">
                    <div className="w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center mr-3">
                      <Users className="w-4 h-4 text-accent" />
                    </div>
                    What skills do you want to learn?
                  </h3>
                  <div className="grid grid-cols-2 gap-3">
                    {skillCategories.map((category) => (
                      <Badge
                        key={`need-${category.id}`}
                        variant={formData.neededSkills.includes(category.name) ? "default" : "outline"}
                        className={`cursor-pointer p-3 justify-center transition-all duration-300 transform hover:scale-105 ${
                          formData.neededSkills.includes(category.name)
                            ? 'bg-gradient-to-r from-accent to-accent/80 text-white shadow-lg'
                            : 'hover:bg-accent/10 hover:shadow-md border-2 hover:border-accent/30'
                        }`}
                        onClick={() => handleSkillToggle('neededSkills', category.name)}
                      >
                        <span className="mr-2 text-lg">{category.icon}</span>
                        <span className="font-medium">{category.name}</span>
                      </Badge>
                    ))}
                  </div>
                  <div className="flex items-center justify-between mt-3">
                    <p className="text-xs text-gray-500">
                      Selected: {formData.neededSkills.length} skills
                    </p>
                    <div className="w-20 bg-gray-200 rounded-full h-1.5">
                      <div 
                        className="bg-accent h-1.5 rounded-full transition-all duration-300"
                        style={{ width: `${Math.min(100, (formData.neededSkills.length / skillCategories.length) * 100)}%` }}
                      />
                    </div>
                  </div>
                </div>

                <Button
                  onClick={handleSubmit}
                  className="w-full bg-primary hover:bg-primary/90"
                  disabled={isLoading}
                >
                  {isLoading ? 'Creating Account...' : 'Create Account'}
                </Button>
              </div>
            )}

            {step < 3 && (
              <div className="text-center text-sm text-gray-600">
                Already have an account?{' '}
                <Button
                  variant="link"
                  className="p-0 text-primary"
                  onClick={() => onNavigate('login')}
                >
                  Sign in here
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}