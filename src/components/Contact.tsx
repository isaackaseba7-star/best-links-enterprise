import { motion } from 'motion/react';
import { Phone, MapPin, Send, User, Calendar, FileText, Wrench } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-accent-orange font-bold uppercase tracking-widest text-sm block mb-4">Get In Touch</span>
            <h2 className="text-4xl md:text-5xl font-bold text-primary-navy mb-6">
              Ready to Upgrade your <span className="text-primary-royal">Space?</span>
            </h2>
            <p className="text-gray-600 mb-10 text-lg">
              Contact Best Links Enterprise today. We bridge the gap with top-tier construction and home-improvement services. Small or large, your project is in safe hands.
            </p>

            <div className="space-y-6 mb-10">
              <div className="flex items-center gap-4 sm:gap-6">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-bg-light rounded-full flex items-center justify-center text-primary-royal shrink-0 shadow-md">
                  <Phone className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <p className="text-xs sm:text-sm font-bold text-gray-500 uppercase">Call us directly</p>
                  <a href="tel:0978860008" className="text-xl sm:text-2xl font-bold text-primary-navy hover:text-accent-orange transition-colors">
                    097 8860008
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4 sm:gap-6">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-bg-light rounded-full flex items-center justify-center text-primary-royal shrink-0 shadow-md">
                  <MapPin className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <p className="text-xs sm:text-sm font-bold text-gray-500 uppercase">Location</p>
                  <p className="text-lg sm:text-xl font-bold text-primary-navy">
                    Zambia
                  </p>
                </div>
              </div>


            </div>
            
            {/* Map Placeholder */}
            <div className="w-full h-48 bg-bg-light rounded-2xl overflow-hidden border border-gray-200 relative group flex items-center justify-center">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=800')] opacity-50 bg-cover bg-center group-hover:scale-105 transition-transform duration-700"></div>
                <div className="relative z-10 bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full font-bold text-primary-navy shadow-lg flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-accent-gold" /> View on Map
                </div>
            </div>
          </motion.div>

          {/* Booking Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-primary-navy rounded-3xl p-6 sm:p-8 lg:p-12 shadow-2xl relative overflow-hidden ring-1 ring-white/10"
          >
            {/* Decors */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent-gold/5 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent-orange/5 rounded-full blur-3xl pointer-events-none"></div>

            <div className="relative z-10 mb-8 border-b border-white/10 pb-6">
                <h3 className="text-3xl font-bold text-white mb-2">Book a Service</h3>
                <p className="text-gray-400">Schedule your consultation or request a detailed quote online.</p>
            </div>

            <form className="relative z-10 space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* Full Name */}
                <div>
                  <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Full Name</label>
                  <div className="relative group">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 group-focus-within:text-accent-gold transition-colors" />
                    <input type="text" className="w-full bg-black/20 border border-white/10 rounded-xl pl-12 pr-4 py-3.5 text-white focus:outline-none focus:border-accent-gold focus:ring-1 focus:ring-accent-gold transition-all" placeholder="John Doe" />
                  </div>
                </div>
                {/* Phone */}
                <div>
                  <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Phone Number</label>
                  <div className="relative group">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 group-focus-within:text-accent-gold transition-colors" />
                    <input type="tel" className="w-full bg-black/20 border border-white/10 rounded-xl pl-12 pr-4 py-3.5 text-white focus:outline-none focus:border-accent-gold focus:ring-1 focus:ring-accent-gold transition-all" placeholder="097..." />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* Category/Service */}
                 <div>
                  <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Service Needed</label>
                  <div className="relative group">
                    <Wrench className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 group-focus-within:text-accent-gold transition-colors pointer-events-none" />
                    <select className="w-full bg-black/20 border border-white/10 rounded-xl pl-12 pr-4 py-3.5 text-white focus:outline-none focus:border-accent-gold focus:ring-1 focus:ring-accent-gold transition-all appearance-none cursor-pointer [&>option]:bg-primary-navy">
                      <option value="">Select a service...</option>
                      <option value="plumbing">Plumbing Services</option>
                      <option value="tiling">Tiling Services</option>
                      <option value="roofing">Roofing Services</option>
                      <option value="glass">Glass Door Fixing</option>
                      <option value="ceiling">Ceiling Board</option>
                      <option value="painting">Painting</option>
                      <option value="general">General Contractors</option>
                      <option value="aluminium">Aluminium Works</option>
                    </select>
                  </div>
                </div>
                {/* Date */}
                <div>
                  <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Preferred Date</label>
                  <div className="relative group w-full flex items-center">
                     <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 group-focus-within:text-accent-gold transition-colors pointer-events-none" />
                     <input type="date" style={{ colorScheme: 'dark' }} className="w-full bg-black/20 border border-white/10 rounded-xl pl-12 pr-4 py-3.5 text-white focus:outline-none focus:border-accent-gold focus:ring-1 focus:ring-accent-gold transition-all cursor-pointer" />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Project Details</label>
                <div className="relative group flex items-start">
                  <FileText className="absolute left-4 top-4 w-5 h-5 text-gray-500 group-focus-within:text-accent-gold transition-colors pointer-events-none" />
                  <textarea rows={3} className="w-full bg-black/20 border border-white/10 rounded-xl pl-12 pr-4 py-3.5 text-white focus:outline-none focus:border-accent-gold focus:ring-1 focus:ring-accent-gold transition-all resize-none" placeholder="Describe your project size, location, and requirements..."></textarea>
                </div>
              </div>

              <button className="w-full group relative overflow-hidden bg-gradient-to-r from-accent-gold to-accent-orange text-white rounded-xl px-4 py-4 font-bold tracking-wide flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(245,158,11,0.2)] hover:shadow-[0_0_40px_rgba(245,158,11,0.5)] transition-all duration-300 transform hover:-translate-y-1 mt-4 border border-white/10">
                <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:animate-[shine_1.5s_ease-in-out]"></span>
                <span className="relative z-10 flex items-center gap-2 text-lg">Confirm Booking <Send className="w-5 h-5 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" /></span>
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
