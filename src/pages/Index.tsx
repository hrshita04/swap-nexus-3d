import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import SkillCategories from '@/components/SkillCategories';
import HowItWorks from '@/components/HowItWorks';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <SkillCategories />
      <HowItWorks />
      <Footer />
    </div>
  );
};

export default Index;
