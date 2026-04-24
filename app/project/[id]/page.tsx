"use client";

import { use, useEffect, useRef } from "react";
import { notFound } from "next/navigation";

//components
import { Button } from "@/components/atoms/button";
import { Carousel } from "@/components/atoms/carousel";
import { Badge } from "@/components/atoms/badge";

//constants
import { projects } from "@/utils/constants/projects";

export default function ProjectPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorDotRef = useRef<HTMLDivElement>(null);

  // Unwrap the params Promise
  const { id } = use(params);

  // Find the project by id
  const project = projects.find((p) => p.id === id);

  // If project not found, show 404
  if (!project) {
    notFound();
  }

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
          PROJECT HERO
      ════════════════════════════════════════ */}
      <section className="relative min-h-screen flex items-center overflow-hidden cursor-none py-32">
        {/* Separator line top */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-px from-transparent via-[#eb5939]/50 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto w-full px-6 lg:px-8">
          {/* Project header */}
          <div className="mb-16">
            <span
              className="anim-fadein inline-block text-sm font-mono font-semibold uppercase tracking-widest text-[#eb5939] mb-4"
              style={{ animationDelay: "0.2s" }}
            >
              Project {project.num}
            </span>
            <h1
              className="anim-fadein text-[clamp(2.5rem,8vw,5.5rem)] font-bold leading-[1.1] tracking-tight mb-6"
              style={{ animationDelay: "0.3s" }}
            >
              <span className="gradient-text">{project.title}</span>
            </h1>
            <p
              className="anim-fadein text-lg lg:text-xl leading-relaxed text-[#b7ab98] max-w-4xl"
              style={{ animationDelay: "0.5s" }}
            >
              {project.description}
            </p>
          </div>

          {/* Project media */}
          {project.src && project.src.length > 0 && (
            <div
              className="anim-fadein mb-16"
              style={{ animationDelay: "0.7s" }}
            >
              <Carousel media={project.src} autoPlayInterval={12000} />
            </div>
          )}

          {/* Project details grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Modules */}
            {project.modules && project.modules.length > 0 && (
              <div className="anim-fadein" style={{ animationDelay: "0.9s" }}>
                <h3 className="text-sm font-mono font-semibold uppercase tracking-widest text-[#eb5939] mb-6">
                  Modules
                </h3>
                <div className="flex flex-wrap gap-3">
                  {project.modules.map((module) => (
                    <Badge key={module} variant="skill">
                      {module}
                    </Badge>
                  ))}
                </div>
              </div>
            )}

            {/* Role */}
            {project.role && project.role.length > 0 && (
              <div className="anim-fadein" style={{ animationDelay: "1.1s" }}>
                <h3 className="text-sm font-mono font-semibold uppercase tracking-widest text-[#eb5939] mb-6">
                  My Role
                </h3>
                <div className="flex flex-wrap gap-3">
                  {project.role.map((r) => (
                    <Badge key={r} variant="skill">
                      {r}
                    </Badge>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
