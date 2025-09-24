export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  initials: string;
  bio: string;
  location: string;
  joinDate: string;
  rating: number;
  reviewCount: number;
  skillsOffered: Skill[];
  skillsSeeking: string[];
  badges: string[];
}

export interface Skill {
  id: string;
  userId: string;
  title: string;
  category: string;
  description: string;
  experience: string;
  availability: string[];
  createdAt: string;
}

export interface SwapProposal {
  id: string;
  fromUserId: string;
  toUserId: string;
  offeredSkillId: string;
  requestedSkillId: string;
  message: string;
  proposedDates: string[];
  status: 'pending' | 'accepted' | 'declined' | 'completed';
  createdAt: string;
}

export interface Message {
  id: string;
  senderId: string;
  receiverId: string;
  content: string;
  timestamp: string;
  isRead: boolean;
}

export interface Review {
  id: string;
  reviewerId: string;
  revieweeId: string;
  skillId: string;
  rating: number;
  comment: string;
  createdAt: string;
}

export const skillCategories = [
  { id: 'design', name: 'Design', icon: '🎨', count: 245 },
  { id: 'music', name: 'Music', icon: '🎵', count: 189 },
  { id: 'fitness', name: 'Fitness', icon: '💪', count: 156 },
  { id: 'languages', name: 'Languages', icon: '🗣️', count: 203 },
  { id: 'tech', name: 'Technology', icon: '💻', count: 178 },
  { id: 'cooking', name: 'Cooking', icon: '👨‍🍳', count: 134 },
  { id: 'crafts', name: 'Crafts', icon: '🧵', count: 98 },
  { id: 'business', name: 'Business', icon: '💼', count: 112 }
];

export const mockUsers: User[] = [
  {
    id: '1',
    name: 'Alex Chen',
    email: 'alex.chen@example.com',
    initials: 'AC',
    bio: 'Professional UX designer with 8 years of experience. Love teaching design fundamentals and learning new languages.',
    location: 'San Francisco, CA',
    joinDate: '2023-01-15',
    rating: 4.9,
    reviewCount: 47,
    skillsOffered: [],
    skillsSeeking: ['Spanish Conversation', 'Guitar Basics'],
    badges: ['Top Teacher', 'Reliable Trader']
  },
  {
    id: '2',
    name: 'Maria Rodriguez',
    email: 'maria.r@example.com',
    initials: 'MR',
    bio: 'Native Spanish speaker and certified yoga instructor. Passionate about wellness and helping others learn.',
    location: 'Los Angeles, CA',
    joinDate: '2023-03-20',
    rating: 4.8,
    reviewCount: 32,
    skillsOffered: [],
    skillsSeeking: ['UI/UX Design', 'Photography'],
    badges: ['Wellness Expert', 'Community Favorite']
  },
  {
    id: '3',
    name: 'David Kim',
    email: 'david.kim@example.com',
    initials: 'DK',
    bio: 'Full-stack developer and guitar enthusiast. Love jamming and teaching coding fundamentals.',
    location: 'Seattle, WA',
    joinDate: '2023-02-10',
    rating: 4.7,
    reviewCount: 28,
    skillsOffered: [],
    skillsSeeking: ['Cooking', 'French Language'],
    badges: ['Tech Guru']
  },
  {
    id: '4',
    name: 'Sophie Laurent',
    email: 'sophie.l@example.com',
    initials: 'SL',
    bio: 'Professional chef and French native. Specializing in pastry and traditional French cuisine.',
    location: 'Portland, OR',
    joinDate: '2023-04-05',
    rating: 4.9,
    reviewCount: 39,
    skillsOffered: [],
    skillsSeeking: ['Web Development', 'Digital Marketing'],
    badges: ['Culinary Master', 'Top Rated']
  },
  {
    id: '5',
    name: 'Marcus Johnson',
    email: 'marcus.j@example.com',
    initials: 'MJ',
    bio: 'Personal trainer and nutrition coach. Helping people achieve their fitness goals through sustainable practices.',
    location: 'Austin, TX',
    joinDate: '2023-01-28',
    rating: 4.8,
    reviewCount: 51,
    skillsOffered: [],
    skillsSeeking: ['Piano Lessons', 'Photography'],
    badges: ['Fitness Pro', 'Motivator']
  },
  {
    id: '6',
    name: 'Emma Watson',
    email: 'emma.w@example.com',
    initials: 'EW',
    bio: 'Professional photographer and visual storyteller. Specializing in portrait and event photography.',
    location: 'New York, NY',
    joinDate: '2023-02-14',
    rating: 4.9,
    reviewCount: 44,
    skillsOffered: [],
    skillsSeeking: ['Video Editing', 'Graphic Design'],
    badges: ['Visual Artist', 'Creative Mind']
  },
  {
    id: '7',
    name: 'James Wilson',
    email: 'james.w@example.com',
    initials: 'JW',
    bio: 'Classical pianist and music teacher with 15 years of experience. Patient and encouraging instructor.',
    location: 'Boston, MA',
    joinDate: '2023-03-08',
    rating: 4.9,
    reviewCount: 67,
    skillsOffered: [],
    skillsSeeking: ['Fitness Training', 'Italian Language'],
    badges: ['Music Master', 'Patient Teacher']
  },
  {
    id: '8',
    name: 'Lisa Thompson',
    email: 'lisa.t@example.com',
    initials: 'LT',
    bio: 'Digital marketing specialist and content creator. Helping businesses grow their online presence.',
    location: 'Chicago, IL',
    joinDate: '2023-01-22',
    rating: 4.7,
    reviewCount: 35,
    skillsOffered: [],
    skillsSeeking: ['Yoga', 'Cooking'],
    badges: ['Marketing Pro', 'Content Creator']
  }
];

export const mockSkills: Skill[] = [
  {
    id: 's1',
    userId: '1',
    title: 'UI/UX Design Fundamentals',
    category: 'Design',
    description: 'Learn the basics of user interface and experience design. Perfect for beginners wanting to understand design principles, wireframing, and prototyping.',
    experience: 'Professional',
    availability: ['Weekends', 'Evenings'],
    createdAt: '2024-01-10'
  },
  {
    id: 's2',
    userId: '2',
    title: 'Spanish Conversation & Culture',
    category: 'Languages',
    description: 'Native Spanish speaker offering conversational practice and cultural insights. Focus on practical communication skills.',
    experience: 'Native',
    availability: ['Weekdays', 'Evenings'],
    createdAt: '2024-01-12'
  },
  {
    id: 's3',
    userId: '2',
    title: 'Beginner Yoga & Mindfulness',
    category: 'Fitness',
    description: 'Gentle introduction to yoga poses, breathing techniques, and mindfulness practices. Perfect for stress relief and flexibility.',
    experience: 'Certified Instructor',
    availability: ['Mornings', 'Weekends'],
    createdAt: '2024-01-15'
  },
  {
    id: 's4',
    userId: '3',
    title: 'Full-Stack Web Development',
    category: 'Technology',
    description: 'Learn React, Node.js, and database fundamentals. Build real projects from scratch with modern development practices.',
    experience: 'Professional',
    availability: ['Evenings', 'Weekends'],
    createdAt: '2024-01-08'
  },
  {
    id: 's5',
    userId: '3',
    title: 'Guitar for Beginners',
    category: 'Music',
    description: 'Learn basic chords, strumming patterns, and popular songs. Acoustic guitar focus with patient, step-by-step instruction.',
    experience: 'Hobbyist',
    availability: ['Weekends'],
    createdAt: '2024-01-20'
  },
  {
    id: 's6',
    userId: '4',
    title: 'French Pastry & Baking',
    category: 'Cooking',
    description: 'Master croissants, macarons, and classic French desserts. Learn traditional techniques from a professional chef.',
    experience: 'Professional Chef',
    availability: ['Weekends', 'Mornings'],
    createdAt: '2024-01-18'
  },
  {
    id: 's7',
    userId: '4',
    title: 'French Language Basics',
    category: 'Languages',
    description: 'Learn French grammar, pronunciation, and everyday conversation. Native speaker with patient teaching approach.',
    experience: 'Native',
    availability: ['Weekdays', 'Evenings'],
    createdAt: '2024-01-25'
  },
  {
    id: 's8',
    userId: '5',
    title: 'Personal Training & Fitness',
    category: 'Fitness',
    description: 'Customized workout plans, proper form instruction, and nutrition guidance. Focus on sustainable, healthy habits.',
    experience: 'Certified Trainer',
    availability: ['Weekdays', 'Mornings'],
    createdAt: '2024-01-14'
  },
  {
    id: 's9',
    userId: '6',
    title: 'Portrait Photography',
    category: 'Design',
    description: 'Learn composition, lighting, and editing techniques for stunning portraits. Covers both natural and studio lighting.',
    experience: 'Professional',
    availability: ['Weekends', 'Afternoons'],
    createdAt: '2024-01-22'
  },
  {
    id: 's10',
    userId: '7',
    title: 'Piano Lessons - All Levels',
    category: 'Music',
    description: 'Classical piano instruction from beginner to advanced. Focus on technique, music theory, and performance skills.',
    experience: 'Professional Teacher',
    availability: ['Weekdays', 'Evenings'],
    createdAt: '2024-01-16'
  },
  {
    id: 's11',
    userId: '8',
    title: 'Digital Marketing Strategy',
    category: 'Business',
    description: 'Learn SEO, social media marketing, content creation, and analytics. Build effective online marketing campaigns.',
    experience: 'Professional',
    availability: ['Weekdays', 'Afternoons'],
    createdAt: '2024-01-28'
  },
  {
    id: 's12',
    userId: '1',
    title: 'Product Design Workshop',
    category: 'Design',
    description: 'Advanced product design concepts including user research, design systems, and prototyping with industry tools.',
    experience: 'Professional',
    availability: ['Weekends'],
    createdAt: '2024-01-30'
  }
];

// Combine skills with user data for display
export const skillsWithUsers = mockSkills.map(skill => {
  const user = mockUsers.find(u => u.id === skill.userId)!;
  return {
    ...skill,
    userName: user.name,
    userAvatar: user.avatar,
    userInitials: user.initials,
    rating: user.rating,
    reviewCount: user.reviewCount,
    location: user.location,
    timeAgo: getTimeAgo(skill.createdAt),
    seeking: user.skillsSeeking[0] // Show one seeking skill
  };
});

function getTimeAgo(dateString: string): string {
  const date = new Date(dateString);
  const now = new Date();
  const diffInMs = now.getTime() - date.getTime();
  const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
  
  if (diffInDays === 0) return 'Today';
  if (diffInDays === 1) return '1 day ago';
  if (diffInDays < 7) return `${diffInDays} days ago`;
  if (diffInDays < 30) return `${Math.floor(diffInDays / 7)} weeks ago`;
  return `${Math.floor(diffInDays / 30)} months ago`;
}

export const mockMessages: Message[] = [
  {
    id: 'm1',
    senderId: '2',
    receiverId: '1',
    content: "Hi Alex! I saw your UI/UX design offering and I'm really interested. I can teach you Spanish in exchange!",
    timestamp: '2024-01-30T10:30:00Z',
    isRead: false
  },
  {
    id: 'm2',
    senderId: '1',
    receiverId: '2',
    content: "That sounds perfect Maria! I've been wanting to learn Spanish for a while. When would be a good time to start?",
    timestamp: '2024-01-30T11:15:00Z',
    isRead: true
  },
  {
    id: 'm3',
    senderId: '2',
    receiverId: '1',
    content: "How about we start this weekend? We could do a 1-hour session each - I teach you Spanish first, then you show me some design fundamentals?",
    timestamp: '2024-01-30T11:30:00Z',
    isRead: false
  }
];

export const mockReviews: Review[] = [
  {
    id: 'r1',
    reviewerId: '2',
    revieweeId: '1',
    skillId: 's1',
    rating: 5,
    comment: "Alex is an amazing teacher! Really patient and explains design concepts clearly. Learned so much in our first session.",
    createdAt: '2024-01-28'
  },
  {
    id: 'r2',
    reviewerId: '3',
    revieweeId: '2',
    skillId: 's2',
    rating: 5,
    comment: "Maria made learning Spanish fun and engaging. Her cultural insights really helped me understand the language better.",
    createdAt: '2024-01-26'
  },
  {
    id: 'r3',
    reviewerId: '1',
    revieweeId: '4',
    skillId: 's6',
    rating: 5,
    comment: "Sophie's pastry class was incredible! Now I can make croissants at home. Worth every minute of design work I traded.",
    createdAt: '2024-01-24'
  }
];

export const featuredSwaps = [
  {
    id: 'swap1',
    skill1: 'UI/UX Design',
    skill2: 'Spanish Lessons',
    user1: 'Alex Chen',
    user2: 'Maria Rodriguez',
    location: 'San Francisco Bay Area',
    status: 'completed',
    rating: 5
  },
  {
    id: 'swap2',
    skill1: 'Photography',
    skill2: 'Piano Lessons',
    user1: 'Emma Watson',
    user2: 'James Wilson',
    location: 'New York City',
    status: 'ongoing',
    rating: 5
  },
  {
    id: 'swap3',
    skill1: 'Web Development',
    skill2: 'French Cooking',
    user1: 'David Kim',
    user2: 'Sophie Laurent',
    location: 'Pacific Northwest',
    status: 'completed',
    rating: 5
  }
];