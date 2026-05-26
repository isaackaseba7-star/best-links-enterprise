import { motion } from 'motion/react';
import { testimonials } from '../data';
import { Quote, Star } from 'lucide-react';

export default function Testimonials() {
  return (
    <section className="py-24 bg-bg-light relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary-royal font-bold uppercase tracking-widest text-sm block mb-4">Client Feedback</span>
          <h2 className="text-4xl md:text-5xl font-bold text-primary-navy">
            Trusted by locals in <span className="text-accent-gold">Zambia</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testy, i) => (
            <motion.div
              key={testy.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 relative"
            >
              <Quote className="absolute top-6 right-6 w-12 h-12 text-primary-royal/10" />
              <div className="flex gap-1 text-accent-gold mb-6">
                {[...Array(5)].map((_, idx) => (
                  <Star key={idx} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-8 italic">"{testy.content}"</p>
              <div className="mt-auto">
                <h4 className="font-bold text-primary-navy">{testy.name}</h4>
                <span className="text-sm text-gray-500">{testy.role}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
