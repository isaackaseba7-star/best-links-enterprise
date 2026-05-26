import { motion } from 'motion/react';
import { galleryImages } from '../data';
import { Maximize2 } from 'lucide-react';

export default function Gallery() {
  return (
    <section id="projects" className="py-24 bg-white relative">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="text-primary-royal font-bold uppercase tracking-widest text-sm">Portfolio</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-primary-navy mb-6">
            Featured <span className="text-accent-gold">Projects</span>
          </h2>
          <p className="text-gray-600 text-lg">
            A glimpse into our dedication to clean finishes, polished results, and absolute professional execution.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg cursor-pointer"
            >
              <img 
                src={src} 
                alt={`Project detail ${i + 1}`} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-navy/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <Maximize2 className="w-6 h-6" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a href="#contact" className="inline-flex items-center justify-center px-8 py-4 bg-primary-navy hover:bg-primary-royal text-white rounded-full font-bold transition-all shadow-xl hover:shadow-2xl">
            Discuss Your Next Project
          </a>
        </div>
      </div>
    </section>
  );
}
