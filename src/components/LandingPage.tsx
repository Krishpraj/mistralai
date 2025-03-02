"use client";
import React from "react";
import HeroSection from "./HeroSection";
import CTASection from "./CTASection";
import Footer from "./Footer";
import GradientFooter from "./GradientFooter";
import AIFeatureShowcase from "./feature/AIFeatureShowcase";
import Header from "./container/Header";
import SearchContainer from "./searchbar/SearchContainer";
import MarqueeText from "./movingtext/MarqueeText";
import Container from "./info/Container";
import AnnouncementsSection from "./AnnouncementSection/AnnouncementsSection";
import Careers from "./careers/Careers";
import Navbar from "./Navbar";
import LogoMarquee from "./companies/LogoMarquee";
const LandingPage: React.FC = () => {
  const [showSearch, setShowSearch] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.querySelector('#hero-section');
      if (heroSection) {
        const heroBottom = heroSection.getBoundingClientRect().bottom;
        setShowSearch(heroBottom <= 0);
        setIsScrolled(window.scrollY > heroBottom);
      }
    };

    handleScroll(); // Call immediately to set initial state
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className="bg-amber-50 overflow-x-clip">
      <Navbar />
      <div id="hero-section">
        <HeroSection />
      </div>
      {showSearch && !document.querySelector('footer:hover') && <SearchContainer />}
      <Header />
      <LogoMarquee />
      <div id="ai-features">
        <AIFeatureShowcase />
      </div>
      <MarqueeText />
      <Container />
      <AnnouncementsSection />
      <Careers />
      <CTASection />
      <GradientFooter />
      <Footer />
    </main>
  );
};

export default LandingPage;
