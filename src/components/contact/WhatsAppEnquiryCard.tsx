"use client";

import { useState } from "react";
import { ArrowUpRight, Check, Copy, MessageCircle } from "lucide-react";
import { getWhatsAppUrl, siteConfig } from "@/content/site";

export function WhatsAppEnquiryCard() {
  const [copied, setCopied] = useState(false);
  const whatsappUrl = getWhatsAppUrl();
  const prefilled = siteConfig.whatsapp.prefilledMessage;

  const handleCopyMessage = async () => {
    try {
      await navigator.clipboard.writeText(prefilled);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div className="flex flex-col justify-between gap-6 border border-white/10 bg-[#111318] p-6 sm:p-8">
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between gap-3">
          <span className="inline-flex items-center gap-2 font-heading text-xs uppercase tracking-[0.2em] text-[#F2A0C0]">
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            Option 01 · WhatsApp Enquiry
          </span>
          <span
            className={`px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider border ${whatsappUrl
                ? "border-[#F2A0C0]/40 bg-[#F2A0C0]/10 text-[#F2A0C0]"
                : "border-white/15 bg-[#17191F] text-[#A7A9B0]"
              }`}
          >
            {whatsappUrl ? "Direct Link Active" : "Number Pending Config"}
          </span>
        </div>

        <h2 className="font-heading text-2xl sm:text-3xl font-semibold text-white">
          Message JAYPEEFLY Directly
        </h2>

        <p className="text-sm sm:text-base text-[#A7A9B0] leading-relaxed">
          Prefer to introduce yourself quickly on WhatsApp? Message Patrick
          directly{" "}
          {whatsappUrl ? (
            <span className="font-mono text-white">
              ({siteConfig.whatsapp.displayNumber})
            </span>
          ) : null}{" "}
          with the prefilled coaching enquiry message below.
        </p>

        {/* Prefilled Message Preview */}
        <div className="border border-white/10 bg-[#08090B] p-4 flex flex-col gap-3">
          <div className="flex items-center justify-between gap-2">
            <span className="font-heading text-[10px] uppercase tracking-[0.2em] text-[#A7A9B0]">
              Prefilled Coaching Message
            </span>
            <button
              type="button"
              onClick={handleCopyMessage}
              className="inline-flex items-center gap-1.5 text-xs text-white transition-colors hover:text-[#F2A0C0]"
            >
              {copied ? (
                <>
                  <Check className="h-3.5 w-3.5 text-[#F2A0C0]" aria-hidden="true" />
                  <span>Copied</span>
                </>
              ) : (
                <>
                  <Copy className="h-3.5 w-3.5" aria-hidden="true" />
                  <span>Copy text</span>
                </>
              )}
            </button>
          </div>
          <p className="text-sm text-white/90 leading-relaxed italic">
            &ldquo;{prefilled}&rdquo;
          </p>
        </div>
      </div>

      {whatsappUrl ? (
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex w-full items-center justify-center gap-2 bg-[#F2A0C0] px-6 py-4 font-heading text-xs font-bold uppercase tracking-[0.18em] text-[#08090B] transition-colors hover:bg-white"
        >
          Open WhatsApp Chat
          <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
        </a>
      ) : (
        <div className="flex flex-col gap-4 border-t border-white/10 pt-5">
          <p className="text-xs sm:text-sm text-[#A7A9B0] leading-relaxed">
            Direct WhatsApp launch activates once{" "}
            <code className="font-mono text-xs text-white bg-[#17191F] px-1.5 py-0.5 border border-white/10">
              NEXT_PUBLIC_WHATSAPP_NUMBER
            </code>{" "}
            is added in{" "}
            <code className="font-mono text-xs text-white bg-[#17191F] px-1.5 py-0.5 border border-white/10">
              .env.local
            </code>{" "}
            or{" "}
            <code className="font-mono text-xs text-white bg-[#17191F] px-1.5 py-0.5 border border-white/10">
              src/content/site.ts
            </code>
            . In the meantime, complete the coaching application form beside
            this panel or connect via Patrick&apos;s verified Instagram (@jerixih).
          </p>
          <a
            href="#coaching-application-form"
            className="inline-flex w-full items-center justify-center gap-2 border border-white/20 bg-[#17191F] px-6 py-3.5 font-heading text-xs font-semibold uppercase tracking-[0.16em] text-white transition-colors hover:border-[#F2A0C0] hover:text-[#F2A0C0]"
          >
            Complete Application Form Instead
          </a>
        </div>
      )}
    </div>
  );
}
