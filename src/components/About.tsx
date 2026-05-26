import { motion } from 'motion/react';
import { Target, TrendingUp, Users } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-bg-light relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative z-10 rounded-[2rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] border-8 border-white aspect-[4/5] max-w-md mx-auto md:mx-0 group">
              <img 
                src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=800" 
                alt="Construction Team" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-navy via-primary-navy/40 to-transparent flex items-end p-10 opacity-90">
                <div className="text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="text-5xl font-extrabold text-accent-gold mb-2 tracking-tight">100%</div>
                  <div className="text-sm font-bold uppercase tracking-widest text-gray-200">Quality Assurance</div>
                </div>
              </div>
            </div>
            
            {/* Floating Element */}
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 right-4 md:-right-8 lg:-right-4 bg-white p-6 md:p-8 rounded-3xl shadow-[0_20px_40px_rgba(0,0,0,0.08)] z-20 border border-gray-50 max-w-[220px]"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-primary-royal to-blue-600 rounded-2xl flex items-center justify-center mb-5 text-white shadow-lg">
                <Target className="w-7 h-7" />
              </div>
              <h4 className="font-extrabold text-primary-navy mb-2 text-lg">We Bridge the Gap</h4>
              <p className="text-sm text-gray-500 leading-relaxed font-medium">Between clients and reliable workmanship.</p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="pl-0 lg:pl-10"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="h-[3px] w-16 bg-accent-orange rounded-full"></div>
              <span className="text-accent-orange font-bold uppercase tracking-[0.2em] text-sm">About Us</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary-navy mb-8 leading-[1.1] tracking-tight">
              Building Trust Through <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-royal to-blue-500">Excellence</span>
            </h2>
            <p className="text-gray-600 mb-6 text-lg md:text-xl leading-relaxed font-light">
              At Best Links Enterprise, we understand the frustration of unreliable contractors. That's why we established a multi-service company dedicated to delivering premium construction and home-improvement solutions in Zambia.
            </p>
            <p className="text-gray-600 mb-12 text-lg md:text-xl leading-relaxed font-light">
              Whether you need complex aluminium works, full house painting, or urgent plumbing, our skilled team is equipped to handle both small residential jobs and large commercial projects with unmatched professionalism.
            </p>

            <div className="grid sm:grid-cols-2 gap-8 mb-12">
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-navy to-gray-800 text-accent-gold flex items-center justify-center shrink-0 shadow-lg group">
                  <TrendingUp className="w-7 h-7 group-hover:scale-110 transition-transform" />
                </div>
                <div>
                  <h4 className="font-bold text-primary-navy mb-2 text-lg">Premium Quality</h4>
                  <p className="text-sm text-gray-500 leading-relaxed">We utilize top-grade materials for lasting finishes.</p>
                </div>
              </div>
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-navy to-gray-800 text-accent-gold flex items-center justify-center shrink-0 shadow-lg group">
                  <Users className="w-7 h-7 group-hover:scale-110 transition-transform" />
                </div>
                <div>
                  <h4 className="font-bold text-primary-navy mb-2 text-lg">Expert Team</h4>
                  <p className="text-sm text-gray-500 leading-relaxed">Highly trained professionals across multiple trades.</p>
                </div>
              </div>
            </div>

            <a href="#services" className="inline-flex items-center justify-center gap-3 bg-primary-navy hover:bg-primary-royal text-white px-10 py-5 rounded-full font-bold text-lg transition-all shadow-[0_10px_20px_rgba(9,14,23,0.15)] hover:shadow-[0_15px_30px_rgba(0,82,204,0.25)] hover:-translate-y-1">
              Explore Our Services
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
