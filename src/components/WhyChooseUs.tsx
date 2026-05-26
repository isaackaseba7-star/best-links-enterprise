import { motion } from 'motion/react';
import { Shield, Clock, ThumbsUp, Wrench, Wallet, MapPin } from 'lucide-react';

export default function WhyChooseUs() {
  const reasons = [
    { icon: Wrench, title: "Skilled Workmanship", desc: "Expert technicians handling every detail." },
    { icon: Shield, title: "Multi-Service Convenience", desc: "All your structural needs under one roof." },
    { icon: Clock, title: "Fast & Reliable", desc: "We adhere strictly to project timelines." },
    { icon: ThumbsUp, title: "Professional Finishing", desc: "We do not compromise on the final look." },
    { icon: Wallet, title: "Affordable Pricing", desc: "Premium quality without exorbitant costs." },
    { icon: MapPin, title: "Trusted Locally", desc: "A proud Zambian business you can count on." }
  ];

  return (
    <section className="py-24 bg-bg-light">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, lg: { x: -50 } }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2 pr-0 md:pr-10"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="h-[3px] w-16 bg-primary-royal rounded-full"></div>
              <span className="text-primary-royal font-bold uppercase tracking-[0.2em] text-sm">Why Choose Us</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary-navy mb-8 leading-[1.1] tracking-tight">
              The Best Choice for Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-orange to-accent-gold">Properties</span>
            </h2>
            <p className="text-gray-600 mb-10 text-lg md:text-xl font-light leading-relaxed">
              We bridge the gap by offering unparalleled dedication to every site we step on. Small repair or full-scale construction, our standards remain exceptionally high.
            </p>

            <div className="grid sm:grid-cols-2 gap-8 mt-10">
              {reasons.map((reason, i) => (
                <div key={i} className="flex gap-5 group">
                  <div className="mt-1">
                    <div className="w-12 h-12 rounded-xl bg-white shadow-[0_10px_20px_rgba(0,0,0,0.05)] flex items-center justify-center text-primary-royal group-hover:bg-primary-royal group-hover:text-white transition-colors duration-300">
                      <reason.icon className="w-6 h-6" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-primary-navy mb-2 text-lg">{reason.title}</h4>
                    <p className="text-sm text-gray-500 leading-relaxed font-light">{reason.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, lg: { x: 50 }, scale: 0.9 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2 relative mt-12 md:mt-0"
          >
             <div className="relative rounded-[2.5rem] overflow-hidden aspect-square border-[12px] border-white shadow-[0_30px_60px_rgba(0,0,0,0.12)]">
                <img 
                  src="https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&q=80&w=800"
                  alt="Precision Engineering"
                  className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-primary-navy/20 to-transparent mix-blend-overlay"></div>
             </div>
             
             {/* Decorative element */}
             <div className="absolute -bottom-4 -left-4 lg:-bottom-6 lg:-left-6 w-24 h-24 lg:w-32 lg:h-32 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiNEMEFGMzciLz48L3N2Zz4=')] opacity-50 z-[-1]"></div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
