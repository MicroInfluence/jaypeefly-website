"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { siteConfig } from "@/content/site";

export function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  // Prevent background scrolling & listen for Escape when drawer is open
  useEffect(() => {
    if (!mobileOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMobileOpen(false);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [mobileOpen]);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#08090B]/95 backdrop-blur-md">
        <div className="mx-auto flex h-16 sm:h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Brand Wordmark */}
          <Link
            href="/"
            onClick={() => setMobileOpen(false)}
            className="group flex flex-col leading-none"
            aria-label="JAYPEEFLY — Patrick Jeremy Home"
          >
            <span className="font-heading text-base sm:text-xl font-bold tracking-[0.14em] text-white transition-colors group-hover:text-[#F2A0C0]">
              {siteConfig.brandName}
            </span>
            <span className="mt-1 text-[9px] sm:text-[10px] font-medium uppercase tracking-[0.24em] text-[#A7A9B0]">
              {siteConfig.founderName}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav aria-label="Main navigation" className="hidden lg:flex items-center gap-7">
            {siteConfig.navItems.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative py-2 text-xs font-medium uppercase tracking-[0.16em] transition-colors ${
                    isActive
                      ? "text-white"
                      : "text-[#A7A9B0] hover:text-white"
                  }`}
                >
                  {item.label}
                  {isActive ? (
                    <span
                      aria-hidden="true"
                      className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#F2A0C0]"
                    />
                  ) : null}
                </Link>
              );
            })}
          </nav>

          {/* Primary CTA + Mobile Hamburger Toggle */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            <Link
              href={siteConfig.primaryCta.href}
              className="hidden sm:inline-flex items-center gap-2 bg-white px-5 py-2.5 font-heading text-xs font-semibold uppercase tracking-[0.16em] text-[#08090B] transition-all duration-300 hover:bg-[#F2A0C0]"
            >
              {siteConfig.primaryCta.label}
              <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
            </Link>

            <button
              type="button"
              onClick={() => setMobileOpen((prev) => !prev)}
              aria-expanded={mobileOpen}
              aria-controls="mobile-navigation-drawer"
              aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
              className={`relative z-[70] inline-flex h-11 w-11 touch-manipulation items-center justify-center border transition-colors lg:hidden ${
                mobileOpen
                  ? "border-[#F2A0C0] bg-[#F2A0C0] text-[#08090B]"
                  : "border-white/15 bg-[#111318] text-white hover:border-[#F2A0C0] hover:text-[#F2A0C0]"
              }`}
            >
              {mobileOpen ? (
                <X className="h-5 w-5" aria-hidden="true" />
              ) : (
                <Menu className="h-5 w-5" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer rendered outside <header> so backdrop-blur never traps fixed positioning */}
      {mobileOpen ? (
        <div
          id="mobile-navigation-drawer"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation"
          className="fixed inset-x-0 top-16 sm:top-20 bottom-0 z-[60] h-[calc(100dvh-4rem)] sm:h-[calc(100dvh-5rem)] overflow-y-auto border-t border-white/10 bg-[#08090B] px-5 py-6 sm:px-6 sm:py-8 lg:hidden"
        >
          <div className="mx-auto flex max-w-xl flex-col justify-between gap-8 min-h-full">
            <nav aria-label="Mobile navigation" className="flex flex-col divide-y divide-white/10">
              {siteConfig.navItems.map((item, idx) => {
                const isActive =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(item.href);

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className={`flex items-center justify-between py-3.5 font-heading text-lg font-medium tracking-tight transition-colors ${
                      isActive ? "text-[#F2A0C0]" : "text-white hover:text-[#F2A0C0]"
                    }`}
                  >
                    <span>{item.label}</span>
                    <span className="font-mono text-xs text-[#A7A9B0]">
                      0{idx + 1}
                    </span>
                  </Link>
                );
              })}
            </nav>

            <div className="border-t border-white/10 pt-5 pb-4">
              <Link
                href={siteConfig.primaryCta.href}
                onClick={() => setMobileOpen(false)}
                className="inline-flex w-full items-center justify-center gap-2 bg-[#F2A0C0] px-6 py-4 font-heading text-xs font-bold uppercase tracking-[0.18em] text-[#08090B] transition-colors hover:bg-white"
              >
                {siteConfig.primaryCta.label}
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
