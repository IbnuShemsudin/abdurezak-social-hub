
import { motion } from "framer-motion";

const iconPaths = {
  linkedin: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6ZM2 9h4v12H2z M4 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z",
  github: "M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22",
  instagram: "M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm5 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm6.5-.5h.01",
  youtube: "M22 12s0-4-1-5-4-1-9-1-8 0-9 1-1 5-1 5 0 4 1 5 4 1 9 1 8 0 9-1 1-5 1-5ZM10 8l6 4-6 4z",
  facebook: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",
  twitter: "M22 5.9a8.2 8.2 0 0 1-2.36.65 4.1 4.1 0 0 0 1.8-2.27 8.2 8.2 0 0 1-2.6.99 4.1 4.1 0 0 0-7 3.74 11.65 11.65 0 0 1-8.46-4.29 4.1 4.1 0 0 0 1.27 5.47 4.08 4.08 0 0 1-1.86-.51v.05a4.1 4.1 0 0 0 3.29 4.02 4.1 4.1 0 0 1-1.85.07 4.1 4.1 0 0 0 3.83 2.85A8.23 8.23 0 0 1 2 18.36a11.62 11.62 0 0 0 6.29 1.84c7.55 0 11.68-6.25 11.68-11.68v-.53A8.3 8.3 0 0 0 22 5.9Z",
  tiktok: "M12 2v12a4 4 0 1 1-4-4",
  telegram: "m22 2-7 20-4-9-9-4 20-7ZM22 2 11 13",
  whatsapp: "M21 11.5a8.5 8.5 0 0 1-12.5 7.5L3 21l2-5.5A8.5 8.5 0 1 1 21 11.5ZM9 9c1 3 3 5 6 6l2-2-2-2-1 1c-1-.3-2-1.3-2-2l1-1-2-2z",
};

function SocialIcon({ type }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="22"
      height="22"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d={iconPaths[type] || "M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20"} />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M7 17 17 7M7 7h10v10" />
    </svg>
  );
}

export default function SocialCard({ item, index }) {
  const isValidUrl = (() => {
    try {
      const parsed = new URL(item.url);
      return ["https:", "http:"].includes(parsed.protocol);
    } catch {
      return false;
    }
  })();

  const enabled = Boolean(item.url?.trim()) && isValidUrl;

  return (
    <motion.a
      href={enabled ? item.url : undefined}
      target={enabled ? "_blank" : undefined}
      rel={enabled ? "noopener noreferrer" : undefined}
      aria-disabled={!enabled}
      onClick={(event) => {
        if (!enabled) event.preventDefault();
      }}
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.07, duration: 0.4 }}
      className={`social-card group flex items-center gap-4 rounded-2xl border border-white/[0.07] bg-surface p-4 sm:p-5 ${
        enabled ? "cursor-pointer" : "cursor-not-allowed opacity-50"
      }`}
    >
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-gold/15 bg-gold/[0.07] text-gold transition-colors group-hover:bg-gold/15">
        <SocialIcon type={item.icon} />
      </div>

      <div className="min-w-0 flex-1">
        <h3 className="font-heading text-sm font-bold text-white">{item.name}</h3>
        <p className="mt-0.5 truncate text-xs text-zinc-500">{item.username}</p>
        <p className="mt-1 hidden text-xs text-zinc-500 sm:block">{item.description}</p>
      </div>

      <div className="flex shrink-0 items-center gap-2">
        <span className="hidden text-xs font-semibold text-gold sm:block">
          {enabled ? item.label : "Coming soon"}
        </span>
        <span className="text-zinc-600 transition-colors group-hover:text-gold">
          <ArrowIcon />
        </span>
      </div>
    </motion.a>
  );
}
