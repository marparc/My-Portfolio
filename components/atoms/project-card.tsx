"use client";

import { useRouter } from "next/navigation";

type MediaItem = {
  type: "image" | "video";
  src: string;
};

type Project = {
  num: string | number;
  id: string;
  title: string;
  description: string;
  src?: MediaItem[];
};

interface ProjectCardProps {
  project: Project;
  index?: number;
  className?: string;
}

export function ProjectCard({
  project: p,
  index = 0,
  className,
}: ProjectCardProps) {
  const router = useRouter();

  return (
    <div
      className={`anim-fadein group cursor-pointer ${className ?? ""}`}
      style={{ animationDelay: `${index * 0.1}s` }}
      onClick={() => router.push(`/project/${p.id}`)}
    >
      {/* Thumbnail */}
      <div className="relative aspect-video rounded-xl overflow-hidden mb-3 bg-[#1a1a1a]">
        {/* Orange top border — animates in on hover */}
        <div className="absolute top-0 left-0 h-[3px] w-0 bg-gradient-to-r from-[#eb5939] to-[#b7ab98] z-10 transition-all duration-300 group-hover:w-full" />
        {p.src && p.src.length > 0 && (
          <>
            {p.src[0].type === "video" ? (
              <video
                src={p.src[0].src}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                muted
                loop
                playsInline
              />
            ) : (
              <img
                src={p.src[0].src}
                alt={p.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            )}
            {/* Overlay on hover */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
          </>
        )}
      </div>

      {/* Project Info */}
      <div className="flex gap-3">
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-[#b7ab98] mb-1 line-clamp-2">
            {p.title}
          </h3>
          <p className="text-sm text-[#b7ab98]/60 line-clamp-2">
            {p.description}
          </p>
        </div>
      </div>
    </div>
  );
}
