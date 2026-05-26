/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import ServiceDetails from './components/ServiceDetails';
import WhyChooseUs from './components/WhyChooseUs';
import Gallery from './components/Gallery';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';

export default function App() {
  return (
    <div className="font-sans text-primary-navy antialiased selection:bg-accent-gold selection:text-white">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <ServiceDetails />
        <WhyChooseUs />
        <Gallery />
        <Process />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
}
