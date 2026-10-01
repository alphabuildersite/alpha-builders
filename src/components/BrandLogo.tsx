import { cn } from "@/lib/utils";

type LogoSize = "sm" | "md" | "lg";
type LogoTone = "light" | "dark";

type BrandLogoProps = {
  /** Show the "ALPHA BUILDERS" wordmark beside the badge. */
  showText?: boolean;
  size?: LogoSize;
  /** `light` for light backgrounds, `dark` for dark backgrounds. */
  tone?: LogoTone;
  className?: string;
};

const SIZES: Record<LogoSize, { badge: string; icon: string; text: string }> = {
  sm: {
    badge: "size-8 rounded-lg",
    icon: "size-4",
    text: "text-base",
  },
  md: {
    badge: "size-9 rounded-xl sm:size-10",
    icon: "size-5 sm:size-[1.375rem]",
    text: "text-lg sm:text-xl",
  },
  lg: {
    badge: "size-11 rounded-xl sm:size-12 sm:rounded-2xl",
    icon: "size-6 sm:size-7",
    text: "text-xl sm:text-2xl",
  },
};

const AMBER = "#d97706";

/**
 * Architectural emblem: a gable-roof "A" in white with an amber support beam.
 * Designed to sit on a dark badge. Pure vector, scales cleanly at any size.
 */
export function BrandMark({
  className,
  decorative = true,
}: {
  className?: string;
  /** When false, the SVG is exposed to assistive tech with a label. */
  decorative?: boolean;
}) {
  return (
    <svg
      viewBox="0 0 48 48"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...(decorative
        ? { "aria-hidden": true, focusable: false }
        : { role: "img", "aria-label": "Alpha Builders and Renovation Inc. logo" })}
    >
      {/* Support beam / keystone (drawn first, tucked under the frame) */}
      <rect x="14" y="32" width="20" height="5" fill={AMBER} />
      {/* Gable-roof "A" frame */}
      <path
        fill="#ffffff"
        d="M4 44 L24 4 L44 44 H35.2 L24 21.6 L12.8 44 Z"
      />
    </svg>
  );
}

export default function BrandLogo({
  showText = true,
  size = "md",
  tone = "light",
  className,
}: BrandLogoProps) {
  const s = SIZES[size];

  return (
    <span className={cn("inline-flex items-center gap-3", className)}>
      <span
        className={cn(
          "flex shrink-0 items-center justify-center border bg-slate-950 shadow-sm",
          tone === "dark" ? "border-slate-700" : "border-slate-800",
          s.badge
        )}
      >
        <BrandMark decorative={showText} className={s.icon} />
      </span>
      {showText && (
        <span
          className={cn(
            "font-heading font-black uppercase leading-none tracking-wider",
            tone === "dark" ? "text-white" : "text-slate-900",
            s.text
          )}
        >
          Alpha Builders
        </span>
      )}
    </span>
  );
}
