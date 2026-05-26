import { motion } from 'motion/react';
import { services } from '../data';
import { ArrowRight } from 'lucide-react';

export default function Services() {
  return (
    <section id="services" className="py-24 bg-primary-navy relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary-royal/10 skew-x-12 transform origin-top-right pointer-events-none"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-3 mb-4"
          >
            <div className="h-[2px] w-8 bg-accent-gold"></div>
            <span className="text-accent-gold font-bold uppercase tracking-widest text-sm">Our Expertise</span>
            <div className="h-[2px] w-8 bg-accent-gold"></div>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Premium Construction & <span className="text-accent-orange">Home Services</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-lg"
          >
            Comprehensive solutions delivered with precision, reliability, and unparalleled quality.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group relative py-6 transition-all duration-300 hover:-translate-y-2"
            >
              <div className="mb-6 transform group-hover:scale-110 transition-all duration-500 inline-block">
                <service.icon className="w-12 h-12 text-accent-gold drop-shadow-md" />
              </div>

              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-accent-orange transition-colors">{service.title}</h3>
              <p className="text-gray-400 text-base mb-8 leading-relaxed line-clamp-3 font-light">
                {service.description}
              </p>
              
              <a href="#contact" className="inline-flex items-center gap-2 text-accent-gold font-semibold text-sm group-hover:text-white transition-colors mt-auto">
                Discuss Project 
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-2 transition-transform" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
