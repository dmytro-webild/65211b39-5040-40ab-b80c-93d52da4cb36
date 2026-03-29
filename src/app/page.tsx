"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import FaqDouble from '@/components/sections/faq/FaqDouble';
import FeatureCardTwentyFour from '@/components/sections/feature/FeatureCardTwentyFour';
import FooterBase from '@/components/sections/footer/FooterBase';
import HeroCentered from '@/components/sections/hero/HeroCentered';
import MetricCardTwo from '@/components/sections/metrics/MetricCardTwo';
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import TestimonialCardSixteen from '@/components/sections/testimonial/TestimonialCardSixteen';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="shift-hover"
        defaultTextAnimation="reveal-blur"
        borderRadius="rounded"
        contentWidth="compact"
        sizing="mediumLargeSizeLargeTitles"
        background="none"
        cardStyle="gradient-bordered"
        primaryButtonStyle="primary-glow"
        secondaryButtonStyle="glass"
        headingFontWeight="normal"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleFullscreen
      navItems={[
        {
          name: "Features",          id: "features"},
        {
          name: "Intelligence",          id: "metrics"},
        {
          name: "Testimonials",          id: "testimonials"},
        {
          name: "Support",          id: "faq"},
      ]}
      brandName="JARVIS AI"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroCentered
      background={{
        variant: "sparkles-gradient"}}
      title="Your Intelligent Future, Now."
      description="JARVIS AI is the world's most advanced personal assistant. From complex scheduling to predictive analytics, command your day with the power of next-generation artificial intelligence."
      avatars={[
        {
          src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Bd1in0jEh1bmabmbswboCzeNX7/portrait-of-a-tech-executive-in-a-modern-1774804313172-220c852d.png",          alt: "Sarah Johnson"},
        {
          src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Bd1in0jEh1bmabmbswboCzeNX7/portrait-of-a-software-developer-looking-1774804314770-b49ba53c.png",          alt: "Michael Chen"},
        {
          src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Bd1in0jEh1bmabmbswboCzeNX7/portrait-of-an-entrepreneur-in-a-high-te-1774804318724-7d36cf96.png",          alt: "Emily Rodriguez"},
        {
          src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Bd1in0jEh1bmabmbswboCzeNX7/portrait-of-a-creative-designer-clean-ae-1774804313226-ba0c431f.png",          alt: "David Kim"},
        {
          src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Bd1in0jEh1bmabmbswboCzeNX7/portrait-of-a-tech-executive-in-a-modern-1774804313172-220c852d.png",          alt: "Alex Rivera"},
      ]}
      avatarText="Trusted by 10,000+ pioneers."
      buttons={[
        {
          text: "Activate JARVIS",          href: "#features"},
        {
          text: "Learn More",          href: "#"},
      ]}
      buttonAnimation="slide-up"
      marqueeItems={[
        {
          type: "text",          text: "Ultra-Low Latency"},
        {
          type: "text",          text: "Quantum Security"},
        {
          type: "text",          text: "Neural Processing"},
        {
          type: "text",          text: "Real-time Analytics"},
        {
          type: "text",          text: "Adaptive Learning"},
      ]}
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardTwentyFour
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={false}
      features={[
        {
          id: "f1",          title: "Voice Recognition",          author: "Adaptive Core",          description: "Understand subtle nuances in human speech with unparalleled accuracy.",          tags: [
            "Voice",            "AI"],
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Bd1in0jEh1bmabmbswboCzeNX7/a-close-up-of-a-holographic-voice-recogn-1774804315421-f3219637.png"},
        {
          id: "f2",          title: "Task Orchestration",          author: "Logic Engine",          description: "Automatically prioritize, schedule, and execute your most critical tasks.",          tags: [
            "Productivity",            "Automation"],
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Bd1in0jEh1bmabmbswboCzeNX7/integrated-calendar-and-task-management--1774804313903-79c8e8c3.png"},
        {
          id: "f3",          title: "Encrypted Security",          author: "Guard Shield",          description: "Your data is protected by industry-leading end-to-end encryption protocols.",          tags: [
            "Security",            "Privacy"],
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Bd1in0jEh1bmabmbswboCzeNX7/a-secure-data-encryption-module-icon-wit-1774804313157-0618372d.png"},
      ]}
      title="Unmatched Capability"
      description="Engineered for precision and built for intelligence."
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardTwo
      animationType="depth-3d"
      textboxLayout="split"
      gridVariant="bento-grid"
      useInvertedBackground={false}
      metrics={[
        {
          id: "m1",          value: "99.9%",          description: "Processing Precision"},
        {
          id: "m2",          value: "12ms",          description: "Response Latency"},
        {
          id: "m3",          value: "40hrs",          description: "Saved Weekly"},
      ]}
      title="Measured Excellence"
      description="Quantifiable gains in your daily efficiency."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardSixteen
      animationType="depth-3d"
      textboxLayout="split"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "1",          name: "Sarah Johnson",          role: "CEO",          company: "TechCorp",          rating: 5,
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Bd1in0jEh1bmabmbswboCzeNX7/portrait-of-a-tech-executive-in-a-modern-1774804313172-220c852d.png?_wi=1"},
        {
          id: "2",          name: "Michael Chen",          role: "CTO",          company: "InnovateLab",          rating: 5,
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Bd1in0jEh1bmabmbswboCzeNX7/portrait-of-a-software-developer-looking-1774804314770-b49ba53c.png"},
        {
          id: "3",          name: "Emily Rodriguez",          role: "Marketing Director",          company: "GrowthCo",          rating: 5,
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Bd1in0jEh1bmabmbswboCzeNX7/portrait-of-an-entrepreneur-in-a-high-te-1774804318724-7d36cf96.png"},
        {
          id: "4",          name: "David Kim",          role: "Product Manager",          company: "StartupXYZ",          rating: 5,
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Bd1in0jEh1bmabmbswboCzeNX7/portrait-of-a-creative-designer-clean-ae-1774804313226-ba0c431f.png"},
        {
          id: "5",          name: "Jordan Smith",          role: "DevOps Lead",          company: "CloudNet",          rating: 5,
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Bd1in0jEh1bmabmbswboCzeNX7/portrait-of-a-tech-executive-in-a-modern-1774804313172-220c852d.png?_wi=2"},
      ]}
      kpiItems={[
        {
          value: "50k+",          label: "Deployments"},
        {
          value: "4.9/5",          label: "Satisfaction"},
        {
          value: "24/7",          label: "Availability"},
      ]}
      title="Voice of the Future"
      description="Hear from those who have already integrated JARVIS into their workflow."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqDouble
      textboxLayout="split"
      useInvertedBackground={false}
      faqs={[
        {
          id: "q1",          title: "Is my data private?",          content: "Absolutely. JARVIS uses military-grade encryption."},
        {
          id: "q2",          title: "Can it integrate with existing apps?",          content: "Yes, JARVIS supports 500+ integrations."},
        {
          id: "q3",          title: "How do I get started?",          content: "Simply request access via our activation portal."},
      ]}
      title="Frequently Asked"
      description="Everything you need to know about JARVIS."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBase
      columns={[
        {
          title: "Company",          items: [
            {
              label: "About",              href: "#"},
            {
              label: "Careers",              href: "#"},
          ],
        },
        {
          title: "Legal",          items: [
            {
              label: "Privacy",              href: "#"},
            {
              label: "Terms",              href: "#"},
          ],
        },
      ]}
      logoText="JARVIS AI"
      copyrightText="© 2025 JARVIS Intelligence Systems."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
