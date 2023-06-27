"use client";
import Image from 'next/image'
import Navbar from '@/components/Navbar'
import HeroSection from '@/components/Herotest'
import Services from '@/components/Services';
import Work from '@/components/Work';
import Plans from '@/components/Plans';
import TestimonialSlider from "@/components/TestimonialSlider"
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
    <Navbar />
    <HeroSection />
    <Services />
    <Work />
    <Plans />
    <TestimonialSlider />
    <Footer />
    </>
  )
}
