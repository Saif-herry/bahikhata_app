import Image from 'next/image';
import { Inter } from 'next/font/google';
import { PanelLayout } from '@/components/layouts';
import Post from '@/components/common/Post';
import HeroSection from '@/components/HomePage/HeroSection';
import AboutSection from '@/components/HomePage/AboutSection';
import FeatureSection from '@/components/HomePage/FeatureSection';
import HighLight from '@/components/HomePage/HighLight';
import FooterSection from '@/components/HomePage/FooterSection';
import NavSection from '@/components/HomePage/NavSection';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    // <PanelLayout>
    <section className="w-full">
      {/* <Post /> */}

      <div className="w-full">
        <NavSection />
        <HeroSection />
        <AboutSection />
        <FeatureSection />
        <HighLight />
        <FooterSection />
      </div>
    </section>
    // </PanelLayout>
  );
}
