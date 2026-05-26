import { motion } from 'motion/react';
import { Phone, ArrowRight, ShieldCheck, Clock, CheckCircle2, Award } from 'lucide-react';
import heroBg from '../assets/images/best_links_hero_1779706795509.png';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-[100dvh] pt-24 pb-12 flex items-center justify-center overflow-hidden bg-primary-navy">
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroBg})` }}
        ></div>
        {/* Dark overlay for text readability without altering image colors */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Floating 3D-ish Elements Background (Animated) */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }} 
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-10 w-32 h-32 bg-accent-orange/10 rounded-xl blur-2xl"
        />
        <motion.div 
          animate={{ y: [0, 30, 0], rotate: [0, -10, 0] }} 
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-1/3 right-10 w-48 h-48 bg-accent-gold/10 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-6 z-10 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block py-2 px-6 rounded-full glass border border-accent-gold/40 text-accent-gold text-xs uppercase font-bold tracking-widest mb-8 shadow-[0_0_15px_rgba(245,166,35,0.15)]">
              BEST LINKS ENTERPRISE
            </span>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-extrabold text-white mb-8 leading-[1.1] tracking-tight">
              We <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-gold via-accent-orange to-accent-gold bg-[length:200%_auto] animate-gradient">Bridge the Gap</span> <br className="hidden md:block" /> in Quality Services
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300/90 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
              From plumbing and roofing to painting, tiling, aluminium, and glass door fixing &mdash; reliable workmanship you can trust in Zambia.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a href="tel:0978860008" className="group relative flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-accent-gold to-accent-orange text-white rounded-full font-bold text-lg overflow-hidden transition-all duration-300 hover:scale-105 shadow-[0_0_20px_rgba(245,158,11,0.3)] hover:shadow-[0_0_40px_rgba(245,158,11,0.6)] border border-white/10">
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full skew-x-12 group-hover:animate-[shine_1.5s_ease-in-out]"></span>
              <Phone className="w-5 h-5 fill-current" />
              <span className="tracking-wide">Call Now</span>
            </a>
            <a href="#contact" className="group flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 bg-transparent hover:bg-white/5 border border-white/30 hover:border-white/60 text-white rounded-full font-bold text-lg transition-all duration-300 backdrop-blur-md">
              <span className="tracking-wide">Request a Quote</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>

          {/* Trust Badges */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto border-t border-white/10 pt-8"
          >
            {[
              { icon: ShieldCheck, text: "Quality Work" },
              { icon: Award, text: "Expert Team" },
              { icon: Clock, text: "Fast Response" },
              { icon: CheckCircle2, text: "Affordable" }
            ].map((badge, i) => (
              <div key={i} className="flex flex-col items-center justify-center gap-2 text-gray-400">
                <badge.icon className="w-6 h-6 text-accent-gold" />
                <span className="text-sm font-medium">{badge.text}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
