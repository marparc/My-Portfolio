"use client";

import { useEffect, useRef } from "react";

//assets
import My_Photo from "../public/my-photo.png";

//components
import { Button } from "@/components/atoms/button";
import { Carousel } from "@/components/atoms/carousel";
import {
  Card,
  CardHeader,
  CardNumber,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/atoms/card";
import { Badge } from "@/components/atoms/badge";

//constants
import { skills } from "@/utils/constants/my-skills";
import { experience } from "@/utils/constants/my-experience";
import { projects } from "@/utils/constants/projects";
import { contacts } from "@/utils/constants/contacts";

//hooks
import { useDownload } from "@/hooks/useDownload";

export default function Home() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorDotRef = useRef<HTMLDivElement>(null);

  // Download resume hook
  const downloadResume = useDownload({
    filePath: "/files/MarcWarrenPartosaResume.pdf",
  });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      cursorRef.current?.style.setProperty(
        "transform",
        `translate(${e.clientX}px, ${e.clientY}px)`
      );
      cursorDotRef.current?.style.setProperty(
        "transform",
        `translate(${e.clientX}px, ${e.clientY}px)`
      );
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <main className="bg-[#0e0e0e] text-[#b7ab98] font-sans antialiased">
      {/* ── Custom cursor ── */}
      <div
        ref={cursorRef}
        className="custom-cursor fixed pointer-events-none z-[9999] w-10 h-10 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-[#eb5939]/50 mix-blend-difference"
      />
      <div
        ref={cursorDotRef}
        className="custom-cursor-dot fixed pointer-events-none z-[10000] w-2 h-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#eb5939]"
      />

      {/* ════════════════════════════════════════
          HERO
      ════════════════════════════════════════ */}
      <section className="relative min-h-screen flex items-center overflow-hidden cursor-none pb-28 lg:py-0">
        {/* Separator line top */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-px from-transparent via-[#eb5939]/50 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto w-full px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-16 items-center">
          {/* Left – content */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            {/* Title */}
            <h1 className="text-[clamp(2.5rem,8vw,5.5rem)] font-bold leading-[1.1] tracking-tight mb-4 lg:mb-6">
              <span
                className="block anim-fadein"
                style={{ animationDelay: "0.1s" }}
              >
                Hi, I'm
              </span>
              <span
                className="block anim-fadein gradient-text"
                style={{ animationDelay: "0.3s" }}
              >
                Marc!
              </span>
            </h1>

            {/* Description */}
            <p
              className="anim-fadein text-base lg:text-lg leading-relaxed text-[#b7ab98] max-w-xl mb-6 lg:mb-10 mx-auto lg:mx-0"
              style={{ animationDelay: "0.7s" }}
            >
              Aspiring UI/UX Designer and Full-Stack Developer focused on
              crafting impactful, user-centered experiences and building
              scalable web applications.
            </p>

            {/* CTA buttons */}
            <div
              className="anim-fadein flex flex-col sm:flex-row flex-wrap gap-3 lg:gap-4 mb-8 lg:mb-16 justify-center lg:justify-start"
              style={{ animationDelay: "0.9s" }}
            >
              <Button
                variant="primary"
                className="inline-flex items-center gap-2 px-6 lg:px-8 py-3 lg:py-4 h-auto rounded-xl text-sm lg:text-base font-semibold"
                onClick={() =>
                  window.open(
                    `https://mail.google.com/mail/?view=cm&to=${contacts.email}`,
                    "_blank"
                  )
                }
              >
                Get in Touch
                <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                  <path
                    d="M4 10H16M16 10L10 4M16 10L10 16"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Button>
              <Button
                variant="outline-custom"
                className="px-6 lg:px-8 py-3 lg:py-4 h-auto rounded-xl text-sm lg:text-base font-semibold"
                onClick={downloadResume}
              >
                Download Resume
              </Button>
            </div>
          </div>

          {/* Right – floating cards + orbs + profile */}
          <div className="relative h-[320px] sm:h-[380px] lg:h-[600px] order-1 lg:order-2">
            {/* Orbs */}
            <div
              className="orb absolute top-0 right-0 w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] rounded-full opacity-20 lg:opacity-30"
              style={{
                background: "radial-gradient(circle, #eb5939, transparent)",
                filter: "blur(80px)",
              }}
            />
            <div
              className="orb absolute bottom-0 left-0 w-[200px] h-[200px] lg:w-[300px] lg:h-[300px] rounded-full opacity-20 lg:opacity-30"
              style={{
                background: "radial-gradient(circle, #b7ab98, transparent)",
                filter: "blur(80px)",
                animationDelay: "4s",
              }}
            />

            {/* ── Name & Photo ── */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center gap-3">
              <div
                className="image-glow absolute top-1/2 left-1/2 w-48 h-48 lg:w-56 lg:h-56 rounded-full"
                style={{
                  background:
                    "radial-gradient(circle, rgba(235,89,57,0.25), transparent)",
                  filter: "blur(30px)",
                  zIndex: -1,
                }}
              />
              {/* Static profile photo — not clickable/editable */}
              <div
                className="anim-fadein relative w-[260px] h-[260px] sm:h-[300px] sm:w-[300px] lg:w-150 lg:h-150 rounded-full bg-[#0e0e0e] overflow-hidden"
                style={{ animationDelay: "0.5s" }}
              >
                <img
                  src={My_Photo.src}
                  alt="Marc Warren Partosa"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[11px] font-mono uppercase tracking-widest text-[#b7ab98]">
          <span>Scroll to explore</span>
          <div className="scroll-line w-px h-10 bg-gradient-to-b from-[#eb5939] to-transparent" />
        </div>
      </section>

      {/* ════════════════════════════════════════
          ABOUT
      ════════════════════════════════════════ */}
      <section className="relative py-32 px-8 overflow-hidden">
        {/* Separator */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-px bg-gradient-to-r from-transparent via-[#eb5939]/50 to-transparent" />

        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-24">
            <span className="inline-block text-sm font-mono font-semibold uppercase tracking-widest text-[#eb5939] mb-4">
              About Me
            </span>
            <h2 className="text-[clamp(2.5rem,5vw,3.5rem)] font-bold leading-tight tracking-tight max-w-4xl mx-auto">
              Building the bridge between{" "}
              <span className="gradient-text-sm">beautiful design</span> and{" "}
              <span className="gradient-text-sm"> code</span>
            </h2>
          </div>

          {/* Intro + Skills grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
            {/* Intro */}
            <div className="flex flex-col gap-8">
              <p className="text-lg leading-[1.8] text-[#b7ab98]">
                I am a recent IT graduate from Silliman University with
                experience in building both frontend and backend applications. I
                enjoy creating practical and reliable systems that are easy to
                use and maintain. I've worked across different areas of
                development, which helped me understand how different parts of
                an application come together.
              </p>
              <p className="text-lg leading-[1.8] text-[#b7ab98]">
                I value writing clean, organized code and improving how users
                interact with the systems I build. I'm always open to learning
                new tools and approaches, especially those that help me build
                better and more efficient applications.
              </p>

              <div className="flex flex-col gap-4 mt-2">
                {[
                  {
                    icon: (
                      <svg
                        width="28"
                        height="28"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#eb5939"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <circle cx="12" cy="12" r="3" />
                        <path d="M12 2v3M12 19v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M2 12h3M19 12h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12" />
                      </svg>
                    ),
                    title: "Design Philosophy",
                    sub: "Good design balances usability and visual clarity.",
                  },
                  {
                    icon: (
                      <svg
                        width="28"
                        height="28"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#eb5939"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="16 18 22 12 16 6" />
                        <polyline points="8 6 2 12 8 18" />
                      </svg>
                    ),
                    title: "Development Approach",
                    sub: "Built clean. Runs fast. Scales easy.",
                  },
                ].map((h) => (
                  <div
                    key={h.title}
                    className="flex gap-4 p-6 rounded-xl bg-[#414141]/50 border border-white/10 transition-all duration-300 hover:bg-[#eb5939]/5 hover:border-[#eb5939]/30 hover:translate-x-1"
                  >
                    <span className="text-3xl">{h.icon}</span>
                    <div>
                      <h4 className="text-lg font-semibold mb-1">{h.title}</h4>
                      <p className="text-[#b7ab98] text-[15px]">{h.sub}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Skills */}
            <div>
              <h3 className="text-2xl font-bold mb-8">Technical Expertise</h3>
              <div className="flex flex-col gap-8">
                {skills.map((group, i) => (
                  <div
                    key={group.category}
                    className="anim-fadein"
                    style={{ animationDelay: `${i * 0.1}s` }}
                  >
                    <h4 className="text-sm font-mono font-semibold uppercase tracking-widest text-[#eb5939] mb-4">
                      {group.category}
                    </h4>
                    <div className="flex flex-wrap gap-3">
                      {group.items.map((skill) => (
                        <Badge key={skill} variant="skill">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Experience timeline */}
          <div className="mb-24">
            <h3 className="text-2xl font-bold mb-10">Experience Journey</h3>
            <div
              className="relative pl-8 border-l-2 border-gradient-to-b"
              style={{
                borderImage:
                  "linear-gradient(to bottom, #eb5939, rgba(235,89,57,0.2)) 1",
              }}
            >
              {experience.map((item, i) => (
                <div
                  key={item.year}
                  className="relative pb-12 anim-fadein"
                  style={{ animationDelay: `${i * 0.2}s` }}
                >
                  {/* Dot */}
                  <div className="absolute -left-[2.65rem] top-0 w-3 h-3 rounded-full bg-[#eb5939] ring-4 ring-[#eb5939]/20" />
                  <div className="pl-8">
                    <span className="text-sm font-mono font-semibold text-[#eb5939]">
                      {item.year}
                    </span>
                    <h4 className="text-xl font-bold mt-2 mb-1">{item.role}</h4>
                    <p className="text-[#b7ab98] font-semibold mb-3">
                      {item.company}
                    </p>
                    <p className="text-[#b7ab98] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Projects */}
          <div className="mb-24">
            <h3 className="text-2xl font-bold mb-10">Featured</h3>
            <div className="grid grid-cols-1 gap-6 md:gap-8">
              {projects.map((p) => (
                <Card key={p.num}>
                  <CardHeader>
                    <CardNumber>{p.num}</CardNumber>
                    <CardTitle>{p.title}</CardTitle>
                    <CardDescription className="hidden md:block">
                      {p.description}
                    </CardDescription>
                  </CardHeader>
                  {p.src && p.src.length > 0 && (
                    <CardContent>
                      <Carousel media={p.src} autoPlayInterval={12000} />
                    </CardContent>
                  )}
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
