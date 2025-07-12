import { useState } from 'react';
import { ArrowRight, Users, TrendingUp, Clock, Star, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

// Featured skill swap examples
const featuredSwaps = [
  {
    id: 1,
    teacherName: "Alex Johnson",
    learnerName: "Maria Garcia",
    teacherAvatar: "/placeholder.svg",
    learnerAvatar: "/placeholder.svg",
    teachSkill: "Python Programming",
    learnSkill: "Spanish Conversation",
    teachLevel: "Pro",
    learnLevel: "Intermediate",
    duration: "3 months",
    rating: 4.9,
    status: "Active"
  },
  {
    id: 2,
    teacherName: "Sophie Liu",
    learnerName: "James Wilson",
    teacherAvatar: "/placeholder.svg",
    learnerAvatar: "/placeholder.svg",
    teachSkill: "Graphic Design",
    learnSkill: "Guitar Playing",
    teachLevel: "Advanced",
    learnLevel: "Beginner",
    duration: "2 months",
    rating: 4.8,
    status: "Completed"
  },
  {
    id: 3,
    teacherName: "Raj Patel",
    learnerName: "Emma Brown",
    teacherAvatar: "/placeholder.svg",
    learnerAvatar: "/placeholder.svg",
    teachSkill: "Digital Marketing",
    learnSkill: "Yoga & Meditation",
    teachLevel: "Pro",
    learnLevel: "Advanced",
    duration: "4 months",
    rating: 4.7,
    status: "Active"
  }
];

const swapStats = [
  { label: "Active Swaps", value: "2,847", icon: Users, color: "text-primary" },
  { label: "Skills Exchanged", value: "15,623", icon: TrendingUp, color: "text-secondary" },
  { label: "Avg. Session", value: "1.5 hrs", icon: Clock, color: "text-accent" },
  { label: "Success Rate", value: "94%", icon: Star, color: "text-green-600" }
];

const skillLevelColors = {
  Beginner: "bg-green-100 text-green-800 border-green-200",
  Intermediate: "bg-blue-100 text-blue-800 border-blue-200",
  Advanced: "bg-purple-100 text-purple-800 border-purple-200",
  Pro: "bg-orange-100 text-orange-800 border-orange-200"
};

const SkillSwapSection = () => {
  const [activeTab, setActiveTab] = useState('featured');

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-6">
            Live Skill Exchanges
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            See real skill swaps happening right now. Join thousands of learners exchanging knowledge and growing together.
          </p>
          
          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {swapStats.map((stat, index) => (
              <Card key={index} className="bg-card/80 backdrop-blur-sm border-border/50 hover:shadow-card transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <stat.icon className={`w-8 h-8 mx-auto mb-2 ${stat.color}`} />
                  <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Featured Swaps */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-bold text-foreground">Featured Skill Swaps</h3>
            <Button variant="outline" className="bg-card hover:bg-muted">
              View All Swaps
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredSwaps.map((swap) => (
              <Card key={swap.id} className="bg-card border-border hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-2">
                    <Badge 
                      variant={swap.status === 'Active' ? 'default' : 'secondary'}
                      className={swap.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}
                    >
                      {swap.status}
                    </Badge>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Star className="w-4 h-4 text-yellow-500 mr-1" />
                      {swap.rating}
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm text-muted-foreground mb-2">{swap.duration} exchange</div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  {/* Swap Direction */}
                  <div className="space-y-3">
                    {/* Teacher Side */}
                    <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg border border-green-200">
                      <Avatar className="h-10 w-10">
                        <AvatarImage src={swap.teacherAvatar} alt={swap.teacherName} />
                        <AvatarFallback>{swap.teacherName.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="font-medium text-sm">{swap.teacherName}</div>
                        <div className="text-xs text-muted-foreground">Teaching</div>
                      </div>
                      <div className="text-right">
                        <div className="font-medium text-sm">{swap.teachSkill}</div>
                        <Badge variant="outline" className={`text-xs ${skillLevelColors[swap.teachLevel as keyof typeof skillLevelColors]}`}>
                          {swap.teachLevel}
                        </Badge>
                      </div>
                    </div>

                    {/* Swap Arrow */}
                    <div className="flex justify-center">
                      <div className="bg-primary/10 rounded-full p-2">
                        <ArrowRight className="w-4 h-4 text-primary transform rotate-90" />
                      </div>
                    </div>

                    {/* Learner Side */}
                    <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg border border-blue-200">
                      <Avatar className="h-10 w-10">
                        <AvatarImage src={swap.learnerAvatar} alt={swap.learnerName} />
                        <AvatarFallback>{swap.learnerName.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="font-medium text-sm">{swap.learnerName}</div>
                        <div className="text-xs text-muted-foreground">Learning</div>
                      </div>
                      <div className="text-right">
                        <div className="font-medium text-sm">{swap.learnSkill}</div>
                        <Badge variant="outline" className={`text-xs ${skillLevelColors[swap.learnLevel as keyof typeof skillLevelColors]}`}>
                          {swap.learnLevel}
                        </Badge>
                      </div>
                    </div>
                  </div>

                  <Button className="w-full bg-gradient-primary hover:opacity-90" size="sm">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Join Similar Swap
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Card className="bg-gradient-primary/5 border-primary/20 max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
                Ready to Start Your Skill Swap Journey?
              </h3>
              <p className="text-muted-foreground mb-6">
                Join our community and connect with skilled individuals who share your passion for learning and teaching.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-gradient-primary hover:opacity-90">
                  Find Learning Partners
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
                <Button variant="outline" size="lg" className="bg-card hover:bg-muted">
                  Browse All Skills
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SkillSwapSection;