import { motion } from 'motion/react';
import { PhoneCall, ClipboardCheck, Trophy } from 'lucide-react';

export default function Process() {
  const steps = [
    {
      icon: PhoneCall,
      title: "Contact Us",
      desc: "Reach out via call, WhatsApp, or through our site. We're ready to listen."
    },
    {
      icon: ClipboardCheck,
      title: "We Assess",
      desc: "Our experts visit, evaluate the project scope, and provide a clear quote."
    },
    {
      icon: Trophy,
      title: "We Deliver",
      desc: "Execution begins with our skilled team delivering premium quality results."
    }
  ];

  return (
    <section className="py-24 bg-primary-navy relative overflow-hidden text-center">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1541888086925-ebc6607f4ef4?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-5 mix-blend-overlay"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
        >
          <span className="text-accent-gold font-bold uppercase tracking-widest text-sm block mb-4">Our Process</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white max-w-2xl mx-auto">
            Simple. Transparent. <br /><span className="text-accent-orange">Effective.</span>
          </h2>
        </motion.div>

        <div className="flex flex-col md:flex-row justify-center items-stretch gap-8 max-w-5xl mx-auto relative">
          
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-[60px] left-[15%] right-[15%] h-[2px] bg-gradient-to-r from-transparent via-white/20 to-transparent z-0"></div>

          {steps.map((step, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="flex-1 relative z-10"
            >
              <div className="bg-white/5 border border-white/10 backdrop-blur-sm rounded-2xl p-8 h-full flex flex-col items-center group hover:bg-white/10 transition-colors">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-accent-gold to-accent-orange flex items-center justify-center mb-6 shadow-xl transform group-hover:rotate-12 transition-transform duration-300">
                  <step.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-black text-white/10 absolute top-4 right-6 group-hover:text-accent-orange/20 transition-colors duration-300">
                  0{i + 1}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
