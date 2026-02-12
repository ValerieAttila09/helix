import AboutSection from '@/components/sections/About';
import FAQSection from '@/components/sections/FAQ';
import Features from '@/components/sections/Features';
import Footer from '@/components/sections/Footer';
import HeroSection from '@/components/sections/Hero';
import React from 'react';

const page = () => {
  return (
    <div className="bg-black pt-14">
      <HeroSection />
      <AboutSection />
      <Features />
      <FAQSection />
      <Footer />
    </div>
  );
}

export default page;