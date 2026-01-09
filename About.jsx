import React from 'react';
import ScrollReveal from './ScrollReveal';
import { Highlighter } from "@/components/ui/highlighter";

export default function About({ scrollContainerRef }) {
  return (
    <section id="about" className="w-full min-h-screen bg-white text-black p-8 sm:p-16 md:p-24 flex items-center justify-center">
      <div className="max-w-4xl text-center">
        <div className="mb-12 flex justify-center">
                    <h2 className="text-5xl font-bold font-pixel underline-wavy-yellow inline-block">
                        <Highlighter action="underline" color="#FFD700">
                            About Me 😊
                        </Highlighter>
                    </h2>
        </div>  
        <ScrollReveal
          scrollContainerRef={scrollContainerRef}
          baseOpacity={0}
          enableBlur={true}
          baseRotation={1.2}
          blurStrength={10}
          containerClassName="my-12"
          textClassName="font-sans text-base sm:text-lg md:text-xl"
        >
         I am a passionate Full Stack Web Developer with hands-on experience in building scalable, high-performance web applications from concept to deployment. I specialize in creating responsive, user-friendly interfaces using modern frontend technologies and developing robust backend systems with efficient APIs and well-structured databases.
I have worked on real-world production projects, where I contributed to end-to-end feature development, performance optimization, and business-logic implementation. My approach combines clean code, problem-solving, and a strong understanding of user and system requirements.I enjoy turning ideas into reliable digital products, continuously learning new technologies, and collaborating impactful solutions.
        </ScrollReveal>
      </div>
    </section>
  );
}