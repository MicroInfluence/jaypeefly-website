import { ArrowUpRight, MessageCircle } from "lucide-react";
import { getWhatsAppUrl } from "@/content/site";

export function WhatsAppEnquiryCard() {
  const whatsappUrl = getWhatsAppUrl() ?? "#coaching-application-form";

  return (
    <div className="jpf-surface rounded-2xl flex flex-col justify-between gap-6 p-6 sm:p-8">
      <div className="flex flex-col gap-3">
        <span className="inline-flex items-center gap-2 font-heading text-xs font-semibold uppercase tracking-[0.18em] text-[#D63B47]">
          <MessageCircle className="h-4 w-4 text-[#D63B47]" aria-hidden="true" />
          Option 01 · WhatsApp Enquiry
        </span>

        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white">
          Message JAYPEEFLY Directly
        </h2>
      </div>

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="jpf-oxblood-btn inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-4 font-heading text-xs font-semibold uppercase tracking-[0.14em]"
      >
        Open WhatsApp Chat
        <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
      </a>
    </div>
  );
}
