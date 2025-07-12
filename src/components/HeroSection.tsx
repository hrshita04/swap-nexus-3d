import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere, Box, Octahedron } from '@react-three/drei';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles, Users, TrendingUp } from 'lucide-react';
import heroBackground from '@/assets/hero-bg.jpg';

function FloatingShape({ position, color, shape = 'sphere' }: { position: [number, number, number], color: string, shape?: string }) {
  const ref = useRef<any>();
  
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.5;
      ref.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.7) * 0.5;
      ref.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.8) * 0.2;
    }
  });

  const ShapeComponent = shape === 'box' ? Box : shape === 'octahedron' ? Octahedron : Sphere;

  return (
    <ShapeComponent ref={ref} position={position} args={[0.5, 0.5, 0.5]}>
      <meshStandardMaterial color={color} metalness={0.8} roughness={0.2} />
    </ShapeComponent>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <FloatingShape position={[-2, 1, 0]} color="#8B5CF6" shape="sphere" />
      <FloatingShape position={[2, -1, 0]} color="#06B6D4" shape="box" />
      <FloatingShape position={[0, 2, -1]} color="#EC4899" shape="octahedron" />
      <FloatingShape position={[-1, -2, 1]} color="#10B981" shape="sphere" />
      <OrbitControls enableZoom={false} enablePan={false} />
    </>
  );
}

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      />
      <div className="absolute inset-0 bg-gradient-hero opacity-90 z-10" />
      
      {/* 3D Scene */}
      <div className="absolute inset-0 z-20">
        <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
          <Scene />
        </Canvas>
      </div>

      {/* Content */}
      <div className="relative z-30 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
              <Sparkles className="h-4 w-4 text-yellow-300" />
              <span className="text-white/90 text-sm font-medium">Welcome to SkillSwap Nexus</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
              Exchange Skills,
              <br />
              <span className="bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text text-transparent">
                Build Community
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto leading-relaxed">
              Connect with talented individuals, share your expertise, and learn new skills in our innovative 3D-powered platform.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="glow" size="lg" className="group">
              Start Swapping Skills
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg" className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20">
              Explore Skills
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Users className="h-6 w-6 text-secondary" />
                <span className="text-3xl font-bold text-white">10K+</span>
              </div>
              <p className="text-white/70">Active Users</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <TrendingUp className="h-6 w-6 text-accent" />
                <span className="text-3xl font-bold text-white">500+</span>
              </div>
              <p className="text-white/70">Skills Available</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Sparkles className="h-6 w-6 text-yellow-300" />
                <span className="text-3xl font-bold text-white">25K+</span>
              </div>
              <p className="text-white/70">Successful Swaps</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}