import { useState } from 'react';
import { Search, Filter, MapPin, Star, MessageCircle, Heart, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Navigation from '@/components/Navigation';

// Mock data for skill swappers
const skillSwappers = [
  {
    id: 1,
    name: "Sarah Chen",
    avatar: "/placeholder.svg",
    location: "San Francisco, CA",
    rating: 4.9,
    reviews: 127,
    skills: {
      teaching: [
        { name: "React Development", level: "Pro", category: "Programming" },
        { name: "UI/UX Design", level: "Advanced", category: "Design" }
      ],
      learning: [
        { name: "Data Science", level: "Beginner", category: "Analytics" },
        { name: "Machine Learning", level: "Intermediate", category: "Technology" }
      ]
    },
    bio: "Frontend developer with 6 years experience. Love teaching and learning new technologies!",
    swaps: 45,
    responseTime: "2 hours"
  },
  {
    id: 2,
    name: "Marcus Rodriguez",
    avatar: "/placeholder.svg",
    location: "Austin, TX",
    rating: 4.8,
    reviews: 89,
    skills: {
      teaching: [
        { name: "Guitar Playing", level: "Pro", category: "Music" },
        { name: "Music Production", level: "Advanced", category: "Creative" }
      ],
      learning: [
        { name: "Photography", level: "Beginner", category: "Creative" },
        { name: "Video Editing", level: "Intermediate", category: "Media" }
      ]
    },
    bio: "Professional musician and teacher. Always excited to share music knowledge and learn visual arts!",
    swaps: 32,
    responseTime: "1 hour"
  },
  {
    id: 3,
    name: "Emma Thompson",
    avatar: "/placeholder.svg",
    location: "London, UK",
    rating: 4.7,
    reviews: 156,
    skills: {
      teaching: [
        { name: "French Language", level: "Pro", category: "Language" },
        { name: "Creative Writing", level: "Advanced", category: "Writing" }
      ],
      learning: [
        { name: "Cooking", level: "Beginner", category: "Lifestyle" },
        { name: "Gardening", level: "Intermediate", category: "Hobby" }
      ]
    },
    bio: "Language teacher and writer. Love cultural exchange and learning practical life skills!",
    swaps: 78,
    responseTime: "30 minutes"
  },
  {
    id: 4,
    name: "David Kim",
    avatar: "/placeholder.svg",
    location: "Seoul, South Korea",
    rating: 4.9,
    reviews: 203,
    skills: {
      teaching: [
        { name: "Digital Marketing", level: "Pro", category: "Business" },
        { name: "Korean Language", level: "Advanced", category: "Language" }
      ],
      learning: [
        { name: "Yoga", level: "Beginner", category: "Fitness" },
        { name: "Meditation", level: "Intermediate", category: "Wellness" }
      ]
    },
    bio: "Marketing professional passionate about wellness and mindfulness practices.",
    swaps: 91,
    responseTime: "45 minutes"
  },
  {
    id: 5,
    name: "Lisa Anderson",
    avatar: "/placeholder.svg",
    location: "Melbourne, Australia",
    rating: 4.8,
    reviews: 134,
    skills: {
      teaching: [
        { name: "Pilates", level: "Pro", category: "Fitness" },
        { name: "Nutrition Planning", level: "Advanced", category: "Health" }
      ],
      learning: [
        { name: "Spanish", level: "Beginner", category: "Language" },
        { name: "Pottery", level: "Intermediate", category: "Arts" }
      ]
    },
    bio: "Certified fitness instructor looking to expand into creative arts and languages.",
    swaps: 67,
    responseTime: "1.5 hours"
  }
];

const skillLevelColors = {
  Beginner: "bg-green-100 text-green-800 border-green-200",
  Intermediate: "bg-blue-100 text-blue-800 border-blue-200",
  Advanced: "bg-purple-100 text-purple-800 border-purple-200",
  Pro: "bg-orange-100 text-orange-800 border-orange-200"
};

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('all');
  const [filterLevel, setFilterLevel] = useState('all');

  const getSkillLevelBadge = (level: string) => (
    <Badge variant="outline" className={`${skillLevelColors[level as keyof typeof skillLevelColors]} text-xs`}>
      {level}
    </Badge>
  );

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
            Skill Marketplace
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Connect with talented individuals ready to share their expertise and learn new skills
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-card rounded-xl shadow-card p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search skills, people, or locations..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={filterCategory} onValueChange={setFilterCategory}>
              <SelectTrigger className="w-full md:w-48">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="programming">Programming</SelectItem>
                <SelectItem value="design">Design</SelectItem>
                <SelectItem value="music">Music</SelectItem>
                <SelectItem value="language">Language</SelectItem>
                <SelectItem value="fitness">Fitness</SelectItem>
                <SelectItem value="business">Business</SelectItem>
              </SelectContent>
            </Select>
            <Select value={filterLevel} onValueChange={setFilterLevel}>
              <SelectTrigger className="w-full md:w-48">
                <SelectValue placeholder="Skill Level" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Levels</SelectItem>
                <SelectItem value="beginner">Beginner</SelectItem>
                <SelectItem value="intermediate">Intermediate</SelectItem>
                <SelectItem value="advanced">Advanced</SelectItem>
                <SelectItem value="pro">Pro</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline" className="w-full md:w-auto">
              <Filter className="w-4 h-4 mr-2" />
              More Filters
            </Button>
          </div>
        </div>

        {/* Skill Swapper Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillSwappers.map((swapper) => (
            <Card key={swapper.id} className="bg-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={swapper.avatar} alt={swapper.name} />
                      <AvatarFallback>{swapper.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-semibold text-lg">{swapper.name}</h3>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <MapPin className="w-3 h-3 mr-1" />
                        {swapper.location}
                      </div>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-red-500">
                    <Heart className="w-4 h-4" />
                  </Button>
                </div>
                
                <div className="flex items-center space-x-4 text-sm">
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-500 mr-1" />
                    <span>{swapper.rating}</span>
                    <span className="text-muted-foreground ml-1">({swapper.reviews})</span>
                  </div>
                  <div className="text-muted-foreground">
                    {swapper.swaps} swaps
                  </div>
                  <div className="text-muted-foreground">
                    ⚡ {swapper.responseTime}
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {swapper.bio}
                </p>

                {/* Teaching Skills */}
                <div>
                  <h4 className="font-medium text-sm mb-2 text-green-700">Can Teach</h4>
                  <div className="space-y-2">
                    {swapper.skills.teaching.map((skill, index) => (
                      <div key={index} className="flex items-center justify-between text-sm">
                        <span className="font-medium">{skill.name}</span>
                        {getSkillLevelBadge(skill.level)}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Learning Skills */}
                <div>
                  <h4 className="font-medium text-sm mb-2 text-blue-700">Wants to Learn</h4>
                  <div className="space-y-2">
                    {swapper.skills.learning.map((skill, index) => (
                      <div key={index} className="flex items-center justify-between text-sm">
                        <span className="font-medium">{skill.name}</span>
                        {getSkillLevelBadge(skill.level)}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex space-x-2 pt-2">
                  <Button className="flex-1 bg-gradient-primary hover:opacity-90">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Connect
                  </Button>
                  <Button variant="outline" className="flex-1">
                    View Profile
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="bg-card hover:bg-muted">
            Load More Swappers
            <ChevronDown className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Home;