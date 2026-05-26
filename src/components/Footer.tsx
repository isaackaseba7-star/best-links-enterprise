import { ArrowRight, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#050A1A] pt-20 pb-10 border-t border-white/5 relative overflow-hidden">
        {/* Glow effect */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-gradient-to-r from-transparent via-accent-gold/40 to-transparent"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          <div className="lg:col-span-1">
            <a href="#" className="flex items-center gap-2 group mb-6 inline-flex">
              <img 
                src="https://i.ibb.co/LXCyTZLw/BEST-LINKS-ENTERP-removebg-preview-1.png" 
                alt="Best Links Enterprise" 
                className="h-20 md:h-24 lg:h-28 w-auto object-contain drop-shadow-[0_0_8px_rgba(255,255,255,0.2)]"
              />
            </a>
            <p className="text-gray-400 mb-6 text-sm leading-relaxed">
              We bridge the gap by connecting clients to real, reliable workmanship across Zambia. Quality construction and home services you can count on.
            </p>
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-accent-gold hover:text-white hover:border-transparent transition-all cursor-pointer">
                <span className="font-bold text-sm">fb</span>
              </div>
              <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-accent-gold hover:text-white hover:border-transparent transition-all cursor-pointer">
                <span className="font-bold text-sm">ig</span>
              </div>
              <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-accent-gold hover:text-white hover:border-transparent transition-all cursor-pointer">
                <span className="font-bold text-sm">in</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Services</h4>
            <ul className="space-y-3">
              {['Plumbing', 'Tiling & Roofing', 'Glass Door Fixing', 'Ceiling Boards', 'Painting', 'Aluminium Works'].map((item) => (
                <li key={item}>
                  <a href="#services" className="text-gray-400 hover:text-accent-gold transition-colors text-sm flex items-center gap-2 group">
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" /> {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Company</h4>
            <ul className="space-y-3">
              {['About Us', 'Our Process', 'Projects Gallery', 'Testimonials', 'Contact Us', 'Request Quote'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-accent-gold transition-colors text-sm flex items-center gap-2 group">
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" /> {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-4">
                <Phone className="w-5 h-5 text-accent-gold shrink-0 mt-0.5" />
                <div>
                  <span className="block text-white font-medium text-sm">097 8860008</span>
                  <span className="text-xs text-gray-400 font-medium tracking-wide">Available 24/7</span>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-accent-gold shrink-0 mt-0.5" />
                <div>
                  <span className="block text-white font-medium text-sm">Zambia</span>
                  <span className="text-xs text-gray-500">Main Office</span>
                </div>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {currentYear} Best Links Enterprise. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-gray-500">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
