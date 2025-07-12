import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, User, Search, Bell, LogIn } from 'lucide-react';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-white/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">SN</span>
            </div>
            <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              SkillSwap Nexus
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/home" className="text-foreground hover:text-primary transition-colors">Browse Skills</Link>
            <Link to="/#how-it-works" className="text-foreground hover:text-primary transition-colors">How it Works</Link>
            <Link to="/community" className="text-foreground hover:text-primary transition-colors">Community</Link>
            <Link to="/about" className="text-foreground hover:text-primary transition-colors">About</Link>
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="icon">
              <Search className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon">
              <Bell className="h-4 w-4" />
            </Button>
            <Button variant="outline" asChild>
              <Link to="/login">
                <LogIn className="h-4 w-4 mr-2" />
                Sign In
              </Link>
            </Button>
            <Button className="bg-gradient-primary hover:opacity-90" asChild>
              <Link to="/login">
                Join Now
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              <Link to="/home" className="text-foreground hover:text-primary transition-colors">Browse Skills</Link>
              <Link to="/#how-it-works" className="text-foreground hover:text-primary transition-colors">How it Works</Link>
              <Link to="/community" className="text-foreground hover:text-primary transition-colors">Community</Link>
              <Link to="/about" className="text-foreground hover:text-primary transition-colors">About</Link>
              <div className="flex flex-col space-y-2 pt-4 border-t border-border">
                <Button variant="outline" className="w-full" asChild>
                  <Link to="/login">
                    <LogIn className="h-4 w-4 mr-2" />
                    Sign In
                  </Link>
                </Button>
                <Button className="w-full bg-gradient-primary hover:opacity-90" asChild>
                  <Link to="/login">
                    Join Now
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}