import { 
  Wrench, 
  Paintbrush, 
  Hammer, 
  DoorClosed, 
  Settings, 
  Home, 
  Ruler, 
  Activity 
} from 'lucide-react';

export const services = [
  {
    id: 'plumbing',
    title: 'Plumbing Services',
    description: 'Expert pipe repairs, installations, and maintenance for residential and commercial properties.',
    icon: Activity,
    includes: 'Our plumbing service covers comprehensive diagnostics, pipe repair, new plumbing installations, water heater servicing, and unblocking drains.',
    problemSolved: 'Preventing water damage, reducing high water bills from unseen leaks, and restoring full water pressure.',
    benefits: [
      'Rapid emergency leak response',
      'High-quality, corrosion-resistant pipes',
      'Advanced drain-clearing technology',
      'Long-term prevention strategies'
    ],
    whyProfessional: 'DIY plumbing often hides the root cause of standard leaks. Our expert technicians ensure full-system integrity so you won\'t face recurrent floods or water damage.',
    image: 'https://i.ibb.co/997jYwXH/pexels-dxaxoxfz-12142829-1.jpg'
  },
  {
    id: 'tiling',
    title: 'Tiling Services',
    description: 'Precision floor and wall tiling with premium finishes for kitchens, bathrooms, and living spaces.',
    icon: Ruler,
    includes: 'We provide surface leveling, waterproofing, tile laying, precision cutting, grouting, and sealing for all tile types including ceramic, porcelain, and natural stone.',
    problemSolved: 'Fixing uneven floors, cracked tiles, and poorly sealed bathrooms that lead to mold or water seeping.',
    benefits: [
      'Perfectly leveled surfaces',
      'Waterproof bathroom/kitchen setups',
      'Expert pattern matching and layouts',
      'Durable, stain-resistant grouting'
    ],
    whyProfessional: 'Tiling requires mathematical precision and proper adhesive spreading. Our professional tilers guarantee a perfectly flat, securely bonded finish that stands the test of time.',
    image: 'https://i.ibb.co/tMxQzL1c/pexels-vladimirsrajber-11806477.jpg'
  },
  {
    id: 'roofing',
    title: 'Roofing Services',
    description: 'Durable roof installations, leak repairs, and maintenance to protect your property.',
    icon: Home,
    includes: 'Complete roof installations, storm damage repairs, waterproofing, fascia board replacement, and gutter cleaning & installations.',
    problemSolved: 'Stopping ceiling water leaks, preventing structural timber rot, and replacing weather-damaged sheets or tiles.',
    benefits: [
      'Weather-resistant materials',
      'Comprehensive leak testing',
      'Structural integrity checks',
      'Enhanced property insulation'
    ],
    whyProfessional: 'Your roof is your first line of defense. A professionally installed roof ensures correct water runoff and eliminates the risk of structural collapse or massive indoor water damage.',
    image: 'https://i.ibb.co/VWrFCS6y/images.jpg'
  },
  {
    id: 'glass-door',
    title: 'Glass Door Fixing',
    description: 'Professional installation and repair of elegant, modern glass doors and partitions.',
    icon: DoorClosed,
    includes: 'Custom glass cutting, frameless door installations, hinge and lock repairs, shower cubicle fitting, and safety glass upgrades.',
    problemSolved: 'Repairing shattered or cracked panels, fixing doors that drag on the floor, and securing loose frameless hinges.',
    benefits: [
      'Toughened safety glass options',
      'Smooth, silent hinge operation',
      'Modern frameless aesthetics',
      'Secure locking mechanisms'
    ],
    whyProfessional: 'Handling glass requires specialized tools and strict safety protocols. We ensure perfect alignment and secure mountings so your glass doors look stunning and operate safely.',
    image: 'https://i.ibb.co/MkKQbrV8/IMG-20260525-WA0192.jpg'
  },
  {
    id: 'ceiling-board',
    title: 'Ceiling Board Installation',
    description: 'Flawless ceiling installations including standard, suspended, and decorative boards.',
    icon: Hammer,
    includes: 'Plasterboard installation, suspended drop ceilings, PVC ceilings, cornice fitting, skimming, and decorative ceiling roses.',
    problemSolved: 'Covering ugly exposed roof beams, replacing sagging or water-damaged ceiling boards, and improving room acoustics.',
    benefits: [
      'Seamless, invisible joints',
      'Improved thermal insulation',
      'Concealed wiring and lighting',
      'Durable, sag-resistant frameworks'
    ],
    whyProfessional: 'A poorly supported ceiling will buckle over time. We engineer the internal timber framework meticulously before fixing any boards, resulting in a perfectly flat overhead finish.',
    image: 'https://i.ibb.co/rh48W5p/pexels-curtis-adams-1694007-7601168.jpg'
  },
  {
    id: 'painting',
    title: 'Painting Services',
    description: 'High-quality interior and exterior painting that brings your building back to life.',
    icon: Paintbrush,
    includes: 'Exterior weather-coating, interior decorative painting, damp-proofing, wall scraping, crack filling, and woodwork varnishing.',
    problemSolved: 'Fixing peeling paint, treating rising damp, hiding ugly wall cracks, and modernizing outdated color schemes.',
    benefits: [
      'Premium, washable paints used',
      'Meticulous surface preparation',
      'Protection against harsh weather',
      'Clean lines and zero mess'
    ],
    whyProfessional: '90% of a great paint job is preparation. We don\'t just paint over problems; we sand, fill, prime, and seal to ensure the final coat looks vibrant and lasts for years.',
    image: 'https://i.ibb.co/ynjs1sM1/pexels-jibarofoto-11299009.jpg'
  },
  {
    id: 'general',
    title: 'General Contractors',
    description: 'Complete project management and execution for renovations and custom building projects.',
    icon: Settings,
    includes: 'Full home renovations, structural alterations, foundation works, bricklaying, site management, and multi-trade coordination.',
    problemSolved: 'Eliminating the stress of managing multiple uncoordinated handymen and keeping construction projects on budget and on time.',
    benefits: [
      'Single point of contact',
      'Strict quality control',
      'Transparent project budgeting',
      'Turnkey solutions from start to finish'
    ],
    whyProfessional: 'Managing a build requires logistics and trade synergy. We take the burden off your shoulders, orchestrating plumbers, electricians, and builders into a single seamless workflow.',
    image: 'https://i.ibb.co/GfHWfTds/pexels-dapo-abideen-1908900-4442490.jpg'
  },
  {
    id: 'aluminium',
    title: 'Aluminium Works',
    description: 'Custom aluminium windows, frames, and structures designed for modern aesthetics and durability.',
    icon: Wrench,
    includes: 'Fabrication of aluminium sliding doors, casement windows, shopfronts, and customized partitioning profiles.',
    problemSolved: 'Replacing rotting wooden window frames, improving security, and upgrading building facades to a modern standard.',
    benefits: [
      'Rust and corrosion-free materials',
      'Smooth sliding roller systems',
      'Low maintenance requirements',
      'Custom powder-coated colors'
    ],
    whyProfessional: 'Aluminium fabrications must be cut and joined with absolute precision to avoid draughts or leaks. We manufacture and install with heavy-duty profiles for premium longevity.',
    image: 'https://i.ibb.co/cKw2cZdm/pexels-criticalimagery-29386086.jpg'
  }
];

export const galleryImages = [
  "https://i.ibb.co/CrrQ3cV/IMG-20260525-WA0185.jpg",
  "https://i.ibb.co/prR5KTy9/IMG-20260525-WA0195.jpg",
  "https://i.ibb.co/35rv27Db/IMG-20260525-WA0196.jpg",
  "https://i.ibb.co/whjLkhRD/IMG-20260525-WA0201.jpg",
  "https://i.ibb.co/wNZyqK8M/IMG-20260525-WA0206.jpg",
  "https://i.ibb.co/knt0P4m/IMG-20260525-WA0208.jpg",
  "https://i.ibb.co/C5zXPj8v/IMG-20260525-WA0214.jpg",
  "https://i.ibb.co/0R2Q14v3/IMG-20260525-WA0216.jpg",
  "https://i.ibb.co/XZf1FyV9/IMG-20260525-WA0235.jpg",
  "https://i.ibb.co/nsD6pMmq/IMG-20260525-WA0246.jpg",
  "https://i.ibb.co/nMMRGDzf/IMG-20260525-WA0248.jpg",
  "https://i.ibb.co/Fk711RhG/IMG-20260525-WA0253.jpg",
  "https://i.ibb.co/PdZVH9f/IMG-20260525-WA0254.jpg",
  "https://i.ibb.co/vCnKKD15/IMG-20260525-WA0258.jpg",
  "https://i.ibb.co/FqmDRBNt/IMG-20260525-WA0260.jpg",
  "https://i.ibb.co/d4wYGZhk/IMG-20260525-WA0270.jpg",
];

export const testimonials = [
  {
    id: 1,
    name: 'Mwape K.',
    role: 'Homeowner, Lusaka',
    content: 'Best Links Enterprise completely transformed our home. The tiling and aluminium works were flawless. Highly recommend their professional team!',
  },
  {
    id: 2,
    name: 'David Chileshe',
    role: 'Property Developer',
    content: 'Reliable, fast, and high quality. We use them for all our general contracting and plumbing needs. They truly bridge the gap in quality.',
  },
  {
    id: 3,
    name: 'Sarah N.',
    role: 'Business Owner',
    content: 'I needed urgent roof repairs and painting before the rains. The team was prompt, gave a fair quote, and delivered an exceptionally neat job.',
  }
];
