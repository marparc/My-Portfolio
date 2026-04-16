"use client";

import { useEffect, useRef } from "react";

//assets
import My_Photo from "../public/my-photo.png";

//components
import { Button } from "@/components/atoms/button";

//constans
import { skills } from "@/utils/constants/my-skills";
import { experience } from "@/utils/constants/my-experience";
import { projects } from "@/utils/constants/projects";

export default function Home() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorDotRef = useRef<HTMLDivElement>(null);

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
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Google+Sans:ital,opsz,wght@0,17..18,400..700;1,17..18,400..700&display=swap');

        :root { color-scheme: dark; }

        * { font-family: 'Google Sans', sans-serif; }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-20px); }
        }
        @keyframes pulse-dot {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0.4; }
        }
        @keyframes scrollLine {
          0%   { transform: scaleY(0); transform-origin: top; }
          50%  { transform: scaleY(1); transform-origin: top; }
          51%  { transform: scaleY(1); transform-origin: bottom; }
          100% { transform: scaleY(0); transform-origin: bottom; }
        }
        @keyframes orbFloat {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50%       { transform: translate(30px, -30px) scale(1.1); }
        }
        @keyframes glowPulse {
          0%, 100% { opacity: 0.5; transform: translate(-50%,-50%) scale(1); }
          50%       { opacity: 0.8; transform: translate(-50%,-50%) scale(1.1); }
        }

        .anim-fadein { animation: fadeInUp 0.8s ease-out backwards; }
        .float-card  { animation: float 6s ease-in-out infinite; }
        .pulse-dot   { animation: pulse-dot 2s ease-in-out infinite; }
        .scroll-line { animation: scrollLine 2s ease-in-out infinite; }
        .orb         { animation: orbFloat 8s ease-in-out infinite; }
        .image-glow  { animation: glowPulse 3s ease-in-out infinite; }

        .gradient-text {
          background: linear-gradient(135deg, #eb5939 0%, #b7ab98 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .gradient-text-sm {
          background: linear-gradient(135deg, #eb5939, #b7ab98);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .value-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 3px;
          background: linear-gradient(90deg, #eb5939, #b7ab98);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.3s ease;
        }
        .value-card:hover::before { transform: scaleX(1); }

        @media (max-width: 1024px) {
          .custom-cursor, .custom-cursor-dot { display: none !important; }
        }
      `}</style>

      {/* ── Custom cursor ── */}
      <div
        ref={cursorRef}
        className="custom-cursor fixed pointer-events-none z-[9999] w-10 h-10 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-[#eb5939]/50 mix-blend-difference"
        style={{ transition: "width 0.3s, height 0.3s" }}
      />
      <div
        ref={cursorDotRef}
        className="custom-cursor-dot fixed pointer-events-none z-[10000] w-2 h-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#eb5939]"
      />

      {/* ════════════════════════════════════════
          HERO
      ════════════════════════════════════════ */}
      <section className="relative min-h-screen flex items-center overflow-hidden cursor-none">
        {/* Separator line top */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-px from-transparent via-[#eb5939]/50 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto w-full px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left – content */}
          <div>
            {/* Title */}
            <h1 className="text-[clamp(3rem,8vw,5.5rem)] font-bold leading-[1.1] tracking-tight mb-6">
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
              className="anim-fadein text-lg leading-relaxed text-[#b7ab98] max-w-xl mb-10"
              style={{ animationDelay: "0.7s" }}
            >
              Aspiring UI/UX Designer and Full-Stack Developer focused on
              crafting impactful, user-centered experiences and building
              scalable web applications.
            </p>

            {/* CTA buttons */}
            <div
              className="anim-fadein flex flex-wrap gap-4 mb-16"
              style={{ animationDelay: "0.9s" }}
            >
              <Button
                variant="primary"
                className="inline-flex items-center gap-2 px-8 py-4 h-auto rounded-xl text-base font-semibold"
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
                className="px-8 py-4 h-auto rounded-xl text-base font-semibold"
              >
                Download Resume
              </Button>
            </div>
          </div>

          {/* Right – floating cards + orbs + profile */}
          <div className="relative h-[600px] hidden lg:block">
            {/* Orbs */}
            <div
              className="orb absolute top-0 right-0 w-[400px] h-[400px] rounded-full opacity-30"
              style={{
                background: "radial-gradient(circle, #eb5939, transparent)",
                filter: "blur(100px)",
              }}
            />
            <div
              className="orb absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full opacity-30"
              style={{
                background: "radial-gradient(circle, #b7ab98, transparent)",
                filter: "blur(100px)",
                animationDelay: "4s",
              }}
            />

            {/* ── Name & Photo ── */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center gap-3">
              <div
                className="image-glow absolute top-1/2 left-1/2 w-56 h-56 rounded-full"
                style={{
                  background:
                    "radial-gradient(circle, rgba(235,89,57,0.25), transparent)",
                  filter: "blur(30px)",
                  zIndex: -1,
                }}
              />
              {/* Static profile photo — not clickable/editable */}
              <div className="relative w-150 h-150 rounded-full bg-[#0e0e0e] overflow-hidden">
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
                I'm a passionate creator who thrives at the intersection of
                design and development. With over 5 years of experience, I've
                helped startups and enterprises bring their digital visions to
                life through thoughtful design and clean, efficient code.
              </p>
              <p className="text-lg leading-[1.8] text-[#b7ab98]">
                My approach combines user-centered design principles with modern
                development practices to create products that are not only
                visually stunning but also performant, accessible, and scalable.
              </p>

              <div className="flex flex-col gap-4 mt-2">
                {[
                  {
                    icon: "🎨",
                    title: "Design Philosophy",
                    sub: "Form follows function, but beauty matters",
                  },
                  {
                    icon: "⚡",
                    title: "Development Approach",
                    sub: "Clean, maintainable, performance-first",
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
                        <span
                          key={skill}
                          className="px-4 py-2 rounded-lg bg-[#414141]/80 border border-white/10 text-sm transition-all duration-300 hover:bg-[#b7ab98]/10 hover:border-[#b7ab98]/50 hover:-translate-y-0.5"
                        >
                          {skill}
                        </span>
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
            <h3 className="text-2xl font-bold mb-10">Projects</h3>
            <div className="grid grid-cols-1 sm:grid-cols-1 xl:grid-cols-1 gap-6">
              {projects.map((p) => (
                <div
                  key={p.num}
                  className="value-card relative p-8 rounded-2xl bg-[#414141]/50 border border-white/10 transition-all duration-300 hover:bg-[#eb5939]/5 hover:border-[#eb5939]/30 hover:-translate-y-1 overflow-hidden"
                >
                  <div className="text-5xl font-bold gradient-text-sm leading-none mb-4">
                    {p.num}
                  </div>
                  <h4 className="text-xl font-bold mb-3">{p.title}</h4>
                  <p className="text-[#b7ab98] mb-4">{p.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="relative text-center px-8 py-16 rounded-3xl bg-[#414141]/50 border border-[#eb5939]/30 overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(235,89,57,0.1),transparent)] pointer-events-none" />
            <h3 className="relative text-3xl font-bold mb-2">
              Let's Create Something Amazing
            </h3>
            <p className="relative text-[#b7ab98] text-lg mb-8">
              I'm always interested in new opportunities and collaborations.
            </p>
            <div className="relative flex gap-4 justify-center flex-wrap">
              <Button
                variant="primary"
                className="px-8 py-4 h-auto rounded-xl text-base font-semibold"
              >
                Download Resume
              </Button>
              <Button
                variant="outline-custom"
                className="px-8 py-4 h-auto rounded-xl text-base font-semibold"
              >
                Schedule a Call
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
