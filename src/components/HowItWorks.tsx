import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  UserPlus, 
  Search, 
  MessageSquare, 
  Trophy,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'Create Your Profile',
    description: 'Sign up and showcase your skills, interests, and what you want to learn.',
    icon: UserPlus,
    color: 'text-primary',
    bgColor: 'bg-primary/10'
  },
  {
    number: '02',
    title: 'Find Skill Matches',
    description: 'Browse our community and discover people who have what you need.',
    icon: Search,
    color: 'text-secondary',
    bgColor: 'bg-secondary/10'
  },
  {
    number: '03',
    title: 'Connect & Swap',
    description: 'Send swap requests and start meaningful skill exchange conversations.',
    icon: MessageSquare,
    color: 'text-accent',
    bgColor: 'bg-accent/10'
  },
  {
    number: '04',
    title: 'Learn & Grow',
    description: 'Complete your skill exchanges and build your reputation in the community.',
    icon: Trophy,
    color: 'text-yellow-500',
    bgColor: 'bg-yellow-500/10'
  }
];

const benefits = [
  'No monetary exchange required',
  'Learn from real experts',
  'Build meaningful connections',
  'Flexible scheduling',
  'Safe and verified community',
  'Track your progress'
];

export default function HowItWorks() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            How <span className="bg-gradient-secondary bg-clip-text text-transparent">SkillSwap</span> Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Getting started is simple. Follow these four steps to begin your skill exchange journey.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative">
                <Card className="group hover:shadow-card transition-smooth border-border/50 hover:border-primary/30">
                  <CardContent className="p-6 text-center">
                    <div className="relative mb-6">
                      <div className={`${step.bgColor} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-bounce`}>
                        <Icon className={`h-8 w-8 ${step.color}`} />
                      </div>
                      <div className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs font-bold w-8 h-8 rounded-full flex items-center justify-center">
                        {step.number}
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-3">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
                
                {/* Arrow for desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-20 -right-4 text-muted-foreground">
                    <ArrowRight className="h-6 w-6" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Benefits Section */}
        <div className="bg-gradient-subtle rounded-3xl p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Why Choose SkillSwap Nexus?
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="text-center lg:text-left">
              <div className="inline-block p-8 bg-white rounded-2xl shadow-card">
                <div className="text-4xl font-bold text-primary mb-2">98%</div>
                <div className="text-muted-foreground mb-4">Satisfaction Rate</div>
                <div className="text-sm text-muted-foreground">
                  Based on 5,000+ completed skill swaps
                </div>
              </div>
              <div className="mt-8">
                <Button variant="glow" size="lg">
                  Start Your Journey
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}