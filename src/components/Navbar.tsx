"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, Phone, X } from "lucide-react";
import BrandLogo from "@/components/BrandLogo";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { label: "Services", href: "/#services" },
  { label: "About", href: "/#about" },
  { label: "Projects", href: "/projects" },
  { label: "Credentials", href: "/#credentials" },
  { label: "Contact", href: "/#contact" },
] as const;

const PHONE_DISPLAY = "(587) 839-6149";
const PHONE_HREF = "tel:5878396149";

const buttonBase =
  "inline-flex items-center justify-center gap-2 rounded-md px-4 py-2.5 text-sm font-semibold transition-colors";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const close = () => setOpen(false);

  // Close the mobile menu on Escape or when resizing up to desktop.
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    const mq = window.matchMedia("(min-width: 1024px)");
    const onChange = (e: MediaQueryListEvent) => {
      if (e.matches) setOpen(false);
    };

    document.addEventListener("keydown", onKeyDown);
    mq.addEventListener("change", onChange);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      mq.removeEventListener("change", onChange);
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-3 px-4 sm:gap-6 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link
          href="/"
          onClick={close}
          aria-label="Alpha Builders, Calgary, AB – home"
          className="min-w-0 rounded-sm"
        >
          <BrandLogo size="md" />
        </Link>

        {/* Desktop navigation */}
        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-6 xl:gap-8">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="text-sm font-medium text-slate-600 transition-colors hover:text-ink"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Desktop actions */}
        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={PHONE_HREF}
            className="inline-flex items-center gap-2 text-sm font-semibold text-ink transition-colors hover:text-accent-hover"
          >
            <Phone className="size-4 text-accent" aria-hidden="true" />
            {PHONE_DISPLAY}
          </a>
          <Link
            href="/#contact"
            className={cn(buttonBase, "bg-accent text-ink hover:bg-accent-hover hover:text-white")}
          >
            Get a Quote
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          className="-mr-2 inline-flex size-10 items-center justify-center rounded-md text-ink transition-colors hover:bg-slate-100 lg:hidden"
        >
          {open ? (
            <X className="size-6" aria-hidden="true" />
          ) : (
            <Menu className="size-6" aria-hidden="true" />
          )}
        </button>
      </div>

      {/* Mobile dropdown */}
      <div
        id="mobile-menu"
        hidden={!open}
        className="border-t border-slate-100 bg-white lg:hidden"
      >
        <nav aria-label="Mobile" className="mx-auto max-w-7xl px-4 py-4 sm:px-6">
          <ul className="flex flex-col">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={href} className="border-b border-slate-100 last:border-b-0">
                <Link
                  href={href}
                  onClick={close}
                  className="block py-3 text-base font-medium text-slate-700 transition-colors hover:text-ink"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-4 flex flex-col gap-3">
            <a
              href={PHONE_HREF}
              onClick={close}
              className={cn(
                buttonBase,
                "border border-slate-200 text-ink hover:bg-slate-50"
              )}
            >
              <Phone className="size-4 text-accent" aria-hidden="true" />
              {PHONE_DISPLAY}
            </a>
            <Link
              href="/#contact"
              onClick={close}
              className={cn(buttonBase, "bg-accent text-ink hover:bg-accent-hover hover:text-white")}
            >
              Get a Quote
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
