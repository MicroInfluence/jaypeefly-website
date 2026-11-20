import type { SocialPlatformId } from "@/content/site";

interface SocialIconProps {
  platform: SocialPlatformId;
  className?: string;
}

export function SocialIcon({
  platform,
  className = "h-4 w-4",
}: SocialIconProps) {
  if (platform === "instagram") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
        aria-hidden="true"
      >
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    );
  }

  if (platform === "tiktok") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
        aria-hidden="true"
      >
        <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
      </svg>
    );
  }

  if (platform === "snapchat") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
        aria-hidden="true"
      >
        <path d="M12 3c-3.1 0-5.2 2.2-5.2 5.4v2.3c-.7.2-1.4.4-1.8.8-.3.3-.2.9.4 1.1.7.2 1.3.5 1.4.8.1.4-.4 1.2-1.3 1.9-.6.5-1.4.8-2 1-.4.1-.5.6-.2.9.6.6 1.8.9 2.9 1.1.3.4.5 1 .9 1.3.5.4 1.4.2 2.2.1.9-.1 1.7.7 2.7.7s1.8-.8 2.7-.7c.8.1 1.7.3 2.2-.1.4-.3.6-.9.9-1.3 1.1-.2 2.3-.5 2.9-1.1.3-.3.2-.8-.2-.9-.6-.2-1.4-.5-2-1-.9-.7-1.4-1.5-1.3-1.9.1-.3.7-.6 1.4-.8.6-.2.7-.8.4-1.1-.4-.4-1.1-.6-1.8-.8V8.4C17.2 5.2 15.1 3 12 3z" />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19.1c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.43z" />
      <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
    </svg>
  );
}
