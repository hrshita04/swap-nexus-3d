import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Code, 
  Palette, 
  Camera, 
  Music, 
  Calculator, 
  Globe, 
  Heart, 
  Briefcase,
  BookOpen,
  Zap
} from 'lucide-react';

const categories = [
  {
    name: 'Programming',
    description: 'Web dev, mobile apps, data science',
    icon: Code,
    color: 'text-primary',
    bgColor: 'bg-primary/10',
    skills: 1247
  },
  {
    name: 'Design',
    description: 'UI/UX, graphic design, branding',
    icon: Palette,
    color: 'text-secondary',
    bgColor: 'bg-secondary/10',
    skills: 892
  },
  {
    name: 'Photography',
    description: 'Portrait, landscape, editing',
    icon: Camera,
    color: 'text-accent',
    bgColor: 'bg-accent/10',
    skills: 634
  },
  {
    name: 'Music',
    description: 'Instruments, production, theory',
    icon: Music,
    color: 'text-yellow-500',
    bgColor: 'bg-yellow-500/10',
    skills: 423
  },
  {
    name: 'Business',
    description: 'Marketing, finance, strategy',
    icon: Briefcase,
    color: 'text-green-500',
    bgColor: 'bg-green-500/10',
    skills: 756
  },
  {
    name: 'Languages',
    description: 'Spanish, French, Mandarin',
    icon: Globe,
    color: 'text-blue-500',
    bgColor: 'bg-blue-500/10',
    skills: 567
  },
  {
    name: 'Fitness',
    description: 'Yoga, training, nutrition',
    icon: Heart,
    color: 'text-red-500',
    bgColor: 'bg-red-500/10',
    skills: 389
  },
  {
    name: 'Education',
    description: 'Math, science, tutoring',
    icon: BookOpen,
    color: 'text-purple-500',
    bgColor: 'bg-purple-500/10',
    skills: 445
  }
];

export default function SkillCategories() {
  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-6">
            <Zap className="h-4 w-4 text-primary" />
            <span className="text-primary font-medium">Skill Categories</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Discover Your Next 
            <span className="bg-gradient-primary bg-clip-text text-transparent"> Skill</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore thousands of skills across diverse categories and find the perfect match for your learning journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card 
                key={index} 
                className="group hover:shadow-card transition-smooth cursor-pointer border-border/50 hover:border-primary/30"
              >
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`${category.bgColor} p-3 rounded-lg group-hover:scale-110 transition-bounce`}>
                      <Icon className={`h-6 w-6 ${category.color}`} />
                    </div>
                    <span className="text-sm text-muted-foreground font-medium">
                      {category.skills} skills
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {category.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <Button variant="secondary" size="lg">
            View All Categories
          </Button>
        </div>
      </div>
    </section>
  );
}