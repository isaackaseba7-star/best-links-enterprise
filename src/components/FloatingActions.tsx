import { PhoneCall, ArrowUp } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function FloatingActions() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsVisible(window.scrollY > 500);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-50 items-end">
            {/* Scroll To Top */}
            <button 
                onClick={scrollToTop}
                className={`w-12 h-12 bg-primary-navy text-white rounded-full flex items-center justify-center shadow-lg border border-white/10 hover:bg-primary-royal transition-all duration-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}
            >
                <ArrowUp className="w-5 h-5" />
            </button>

            {/* WhatsApp Modern Pill */}
            <a
                href="https://wa.me/260978860008"
                target="_blank"
                rel="noopener noreferrer"
                className="relative flex items-center justify-end group z-50"
            >
                {/* Pulsing Background on Icon */}
                <div className="absolute right-0 w-14 h-14 bg-[#25D366] rounded-full animate-ping opacity-40"></div>
                
                <div className="relative flex items-center bg-[#25D366] text-white rounded-full shadow-[0_8px_30px_rgb(37,211,102,0.3)] hover:shadow-[0_12px_40px_rgb(37,211,102,0.5)] transform hover:-translate-y-1 transition-all duration-300 border border-white/20">
                    <div className="w-14 h-14 flex items-center justify-center relative drop-shadow-md">
                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
                            <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766 0 1.252.327 2.476.947 3.553l-.841 3.074 3.144-.824c1.036.574 2.215.876 3.428.877h.001c3.18 0 5.767-2.586 5.768-5.766 0-3.18-2.587-5.767-5.767-5.767zm3.186 8.358c-.174.493-.846.919-1.228.983-.339.057-.866.115-2.613-.608-2.062-.852-3.376-2.956-3.475-3.088-.098-.133-.826-1.101-.826-2.102 0-1.002.518-1.503.712-1.706.166-.172.4-.241.614-.241.077 0 .148.003.21.006.182.008.303-.021.433.292.164.394.56 1.365.61 1.464.05.099.083.214.017.347-.066.133-.1.215-.2.314-.099.098-.21.216-.301.301-.102.096-.208.201-.09.406.118.203.526.868 1.127 1.405.774.693 1.418.9 1.62.997.202.099.32.083.438-.05.118-.133.511-.595.648-.799.138-.204.275-.17.46-.1.185.068 1.168.55 1.367.65.199.099.332.149.38.232.05.083.05.476-.124.969zM12.031 2C6.495 2 2 6.495 2 12.031c0 1.831.478 3.619 1.387 5.197L2 22l4.908-1.353A9.972 9.972 0 0012.031 22c5.534 0 10-4.496 10-10.031S17.565 2 12.031 2z"/>
                        </svg>
                    </div>
                    
                    {/* Desktop Expanded Text */}
                    <div className="hidden md:flex flex-col pr-7 pl-1 py-2">
                        <span className="font-bold text-[15px] leading-tight mb-0.5 whitespace-nowrap">Chat with us</span>
                        <div className="flex items-center gap-1.5">
                            <span className="relative flex h-2 w-2">
                              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                              <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                            </span>
                            <span className="text-[11px] font-medium uppercase tracking-widest text-[#E8F9F0] whitespace-nowrap">24/7 Online</span>
                        </div>
                    </div>
                </div>
            </a>

            {/* Direct Call Mobile Only */}
            <a 
                href="tel:0978860008" 
                className="w-14 h-14 bg-gradient-to-br from-accent-gold to-accent-orange text-white rounded-full flex items-center justify-center shadow-[0_4px_20px_rgba(245,158,11,0.4)] md:hidden relative group overflow-hidden border border-white/20 active:scale-95 transition-transform"
            >
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-white/0 via-white/30 to-white/0 -translate-x-full skew-x-12 animate-[shine_3s_ease-in-out_infinite]"></span>
                <PhoneCall className="w-6 h-6 fill-current relative z-10 drop-shadow-md" />
            </a>
        </div>
    );
}
