"use client";

import { useState, useEffect } from "react";

interface CarouselProps {
  media: Array<{ type: "video" | "image"; src: string }>;
  autoPlayInterval?: number;
}

export function Carousel({ media, autoPlayInterval = 12000 }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (media.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % media.length);
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [media.length, autoPlayInterval]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  if (!media || media.length === 0) return null;

  return (
    <div className="relative mt-6 rounded-xl overflow-hidden bg-black border border-white/10">
      {/* Media Display - 1850:1000 aspect ratio */}
      <div className="relative w-full" style={{ aspectRatio: "1850 / 1000" }}>
        {media.map((item, index) => (
          <div
            key={item.src}
            className={`absolute inset-0 w-full h-full transition-opacity duration-500 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            {item.type === "video" ? (
              <video
                className="w-full h-full object-cover rounded-xl"
                autoPlay
                loop
                muted
                playsInline
              >
                <source src={item.src} type="video/webm" />
                Your browser does not support the video tag.
              </video>
            ) : (
              <img
                src={item.src}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover rounded-xl pointer-events-none"
              />
            )}
          </div>
        ))}
      </div>

      {/* Navigation Dots */}
      {media.length > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {media.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-[#eb5939] w-8"
                  : "bg-white/50 hover:bg-white/80"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
