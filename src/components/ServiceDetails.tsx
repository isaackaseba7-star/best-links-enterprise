import { motion } from 'motion/react';
import { services } from '../data';
import { CheckCircle2, ArrowRight } from 'lucide-react';

export default function ServiceDetails() {
  return (
    <section id="service-details" className="py-24 bg-bg-light relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-3 mb-4"
          >
            <div className="h-[2px] w-8 bg-primary-royal"></div>
            <span className="text-primary-royal font-bold uppercase tracking-widest text-sm">Service Deep-Dive</span>
            <div className="h-[2px] w-8 bg-primary-royal"></div>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-primary-navy mb-6"
          >
            Detailed <span className="text-accent-orange">Solutions</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 text-lg"
          >
            Explore exactly what we cover, why professional workmanship is essential, and the direct benefits of choosing Best Links Enterprise.
          </motion.p>
        </div>

        <div className="space-y-20 md:space-y-32">
          {services.map((service, index) => {
            const isReversed = index % 2 !== 0;
            return (
              <div 
                key={service.id} 
                className={`flex flex-col ${isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 lg:gap-20 items-center`}
              >
                {/* Image Section */}
                <motion.div 
                  initial={{ opacity: 0, x: isReversed ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7 }}
                  className="w-full lg:w-1/2 relative"
                >
                  <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-2xl group">
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary-navy/80 via-transparent to-transparent"></div>
                    <div className="absolute bottom-6 left-6 right-6">
                      <div className="w-14 h-14 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center text-white border border-white/20 shadow-lg mb-4">
                        <service.icon className="w-8 h-8" />
                      </div>
                      <h3 className="text-3xl font-bold text-white tracking-tight drop-shadow-md">{service.title}</h3>
                    </div>
                  </div>
                  {/* Decorative Elements */}
                  <div className={`absolute -inset-4 bg-gradient-to-tr from-accent-gold/20 to-transparent rounded-[2.5rem] blur-xl -z-10 ${isReversed ? 'rotate-180' : ''}`}></div>
                </motion.div>

                {/* Content Section */}
                <motion.div 
                  initial={{ opacity: 0, x: isReversed ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                  className="w-full lg:w-1/2 flex flex-col"
                >
                  <h4 className="text-xl font-bold text-primary-navy mb-4 border-l-4 border-accent-gold pl-4">
                    What It Includes
                  </h4>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.includes}
                  </p>

                  <h4 className="font-bold text-primary-navy mb-3">Problems We Solve</h4>
                  <p className="text-gray-600 mb-8 italic">
                    "{service.problemSolved}"
                  </p>

                  <h4 className="font-bold text-primary-navy mb-4">Key Benefits</h4>
                  <ul className="grid sm:grid-cols-2 gap-3 mb-8">
                    {service.benefits?.map((benefit, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-accent-gold shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-700 font-medium">{benefit}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="bg-primary-navy/5 border border-primary-navy/10 rounded-2xl p-6 mb-8 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-primary-royal/5 rounded-bl-[100px]"></div>
                    <h4 className="font-bold text-primary-royal mb-2">Why Professional Workmanship Matters</h4>
                    <p className="text-sm text-gray-600 leading-relaxed relative z-10">
                      {service.whyProfessional}
                    </p>
                  </div>

                  <a href="#contact" className="inline-flex items-center gap-2 self-start bg-primary-navy hover:bg-primary-royal text-white px-8 py-4 rounded-full font-bold transition-all shadow-lg hover:shadow-xl group">
                    Request Quote 
                    <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                  </a>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
