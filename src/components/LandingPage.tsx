"use client";
import React from "react";
import HeroSection from "./HeroSection";
import FeaturesSection from "./FeaturesSection";
import AnnouncementsSection from "./AnnouncementsSection";
import CareersHero from "./CareersHero";
import CTASection from "./CTASection";
import Footer from "./Footer";
import GradientFooter from "./GradientFooter";
import AIFeatureShowcase from "./feature/AIFeatureShowcase";
import Header from "./container/Header";
import SearchContainer from "./searchbar/SearchContainer";
import MarqueeText from "./movingtext/MarqueeText";
const LandingPage: React.FC = () => {
  const [showSearch, setShowSearch] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.querySelector('#hero-section');
      if (heroSection) {
        const heroBottom = heroSection.getBoundingClientRect().bottom;
        setShowSearch(heroBottom <= 0);
      }
    };

    handleScroll(); // Call immediately to set initial state
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className="bg-amber-50">
      <div id="hero-section">
      <HeroSection />
      </div>
      {showSearch && !document.querySelector('footer:hover') && <SearchContainer />}
      <Header/>
      <AIFeatureShowcase />
      <MarqueeText />
      <AnnouncementsSection />
      <CareersHero />
      <CTASection />
      <GradientFooter />
      <Footer />
    </main>
  );
};

export default LandingPage;
