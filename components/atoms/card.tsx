import * as React from "react";

import { cn } from "@/lib/utils";

function Card({
  className,
  size = "default",
  ...props
}: React.ComponentProps<"div"> & { size?: "default" | "sm" }) {
  return (
    <div
      data-slot="card"
      data-size={size}
      className={cn(
        "value-card relative flex flex-col gap-0 md:gap-4 overflow-hidden rounded-2xl bg-[#414141]/50 p-4 text-sm transition-all duration-300 hover:border-[#eb5939]/30 hover:-translate-y-1 md:p-8",
        "before:absolute before:top-0 before:left-0 before:right-0 before:h-[3px] before:bg-gradient-to-r before:from-[#eb5939] before:to-[#b7ab98] before:scale-x-0 before:origin-left before:transition-transform before:duration-300 hover:before:scale-x-100",
        className
      )}
      {...props}
    />
  );
}

function CardHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-header"
      className={cn("flex flex-col gap-2 md:gap-3", className)}
      {...props}
    />
  );
}

function CardNumber({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-number"
      className={cn(
        "text-4xl md:text-5xl font-bold leading-none bg-gradient-to-br from-[#eb5939] to-[#b7ab98] bg-clip-text text-transparent",
        className
      )}
      {...props}
    />
  );
}

function CardTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-title"
      className={cn("text-lg md:text-xl font-bold", className)}
      {...props}
    />
  );
}

function CardDescription({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-description"
      className={cn(
        "text-sm md:text-base text-[#b7ab98] leading-relaxed mb-0 md:mb-2",
        className
      )}
      {...props}
    />
  );
}

function CardContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div data-slot="card-content" className={cn("", className)} {...props} />
  );
}

function CardFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-footer"
      className={cn("flex items-center gap-4", className)}
      {...props}
    />
  );
}

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardNumber,
  CardDescription,
  CardContent,
};
