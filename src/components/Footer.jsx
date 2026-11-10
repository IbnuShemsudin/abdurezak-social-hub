
import { Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-white/[0.06] pt-8 text-center">
      <div className="mb-3 font-heading text-2xl font-extrabold tracking-widest gold-text">
        AS.
      </div>

      <p className="flex flex-wrap items-center justify-center gap-1 text-xs text-zinc-500">
        Crafted 
        by Abdurezak Shemsu
      </p>

      <p className="mt-3 text-[11px] text-zinc-700">
        © {new Date().getFullYear()} Abdurezak Shemsu. All rights reserved.
      </p>
    </footer>
  );
}
