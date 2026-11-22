import Link from "next/link";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import { getWhatsAppUrl, siteConfig } from "@/content/site";
import { SocialIcon } from "@/components/ui/SocialIcon";

export function Footer() {
  const year = new Date().getFullYear();
  const whatsappUrl = getWhatsAppUrl();

  return (
    <footer className="jpf-cta-glow border-t border-white/10 bg-[#050507] text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* Brand Thesis */}
          <div className="lg:col-span-6 flex flex-col gap-5">
            <div>
              <p className="font-heading text-2xl font-bold tracking-[0.12em] text-white">
                JAYPEE<span className="text-[#D63B47]">FLY</span>
              </p>
              <p className="mt-1.5 text-xs uppercase tracking-[0.2em] text-[#D63B47]">
                {siteConfig.founderName} · {siteConfig.positioning}
              </p>
            </div>
            <p className="text-sm sm:text-base text-[#A7A9B0] leading-relaxed max-w-md">
              {siteConfig.closingThesis}
            </p>
            <div className="pt-1 flex flex-wrap items-center gap-3">
              <Link
                href="/about#contact"
                className="jpf-oxblood-btn inline-flex items-center gap-2 rounded-full px-6 py-2.5 font-heading text-xs font-semibold uppercase tracking-[0.12em]"
              >
                {siteConfig.primaryCta.label}
                <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
              </Link>
              {whatsappUrl ? (
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="jpf-glass-btn inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-xs font-medium"
                >
                  <MessageCircle className="h-3.5 w-3.5 text-[#D63B47]" aria-hidden="true" />
                  <span>WhatsApp</span>
                </a>
              ) : null}
            </div>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-3 flex flex-col gap-4">
            <h2 className="font-heading text-xs font-semibold uppercase tracking-[0.18em] text-white">
              Navigation
            </h2>
            <ul className="flex flex-col gap-3">
              {siteConfig.navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-[#A7A9B0] transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Official Social Channels */}
          <div className="lg:col-span-3 flex flex-col gap-4">
            <h2 className="font-heading text-xs font-semibold uppercase tracking-[0.18em] text-white">
              Official Channels
            </h2>
            <ul className="flex flex-col gap-3">
              {siteConfig.socialProfiles.map((profile) => (
                <li key={profile.id}>
                  <a
                    href={profile.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2.5 text-sm text-[#A7A9B0] transition-colors hover:text-white"
                  >
                    <SocialIcon
                      platform={profile.id}
                      className="h-4 w-4 text-[#D63B47] transition-transform group-hover:scale-105"
                    />
                    <span>{profile.platform}</span>
                    <span className="text-xs text-white/40 group-hover:text-[#D63B47]">
                      {profile.handle}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Copyright Strip & MicroInfluence Credit */}
        <div className="mt-14 flex flex-col gap-5 border-t border-white/10 pt-8 text-xs text-[#A7A9B0] md:flex-row md:items-center md:justify-between">
          <p>
            © {year} {siteConfig.brandName} ({siteConfig.founderName}). All rights reserved.
          </p>

          <div className="flex flex-wrap items-center justify-between gap-5 sm:justify-end">
            <a
              href="https://microinfluence.com.ng"
              target="_blank"
              rel="noopener noreferrer"
              title="Designed by MicroInfluence"
              className="group inline-flex items-center gap-1.5 text-xs text-[#A7A9B0] transition-colors hover:text-white"
            >
              <span>
                Designed by{" "}
                <strong className="font-heading font-semibold text-white/90 transition-colors group-hover:text-[#D63B47]">
                  MicroInfluence
                </strong>
              </span>
              <ArrowUpRight
                className="h-3.5 w-3.5 text-[#A7A9B0] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#D63B47]"
                aria-hidden="true"
              />
            </a>

            <a
              href="#main-content"
              className="text-xs text-[#A7A9B0] transition-colors hover:text-[#D63B47]"
            >
              Back to top ↑
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
