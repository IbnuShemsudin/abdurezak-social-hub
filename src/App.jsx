
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

import Profile from "./components/Profile";
import SocialLinks from "./components/SocialLinks";
import Footer from "./components/Footer";

export default function App() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-obsidian px-5 py-12 sm:px-8 sm:py-16">
      {/* Background decoration */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-gold/[0.055] blur-[130px]" />

      <div className="pointer-events-none absolute left-0 top-[40%] h-64 w-64 rounded-full bg-amber-900/[0.04] blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-2xl">
        {/* Brand header */}
        <motion.header
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16 flex items-center justify-between"
        >
          <a
            href="/"
            className="font-heading text-xl font-extrabold tracking-[0.15em] gold-text"
          >
            AS.
          </a>

          <div className="flex items-center gap-2 rounded-full border border-white/[0.08] px-3 py-2">
            <Sparkles size={13} className="text-gold" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-zinc-400">
              Personal Social Hub
            </span>
          </div>
        </motion.header>

        {/* Profile */}
        <Profile />

        {/* Social media */}
        <SocialLinks />

        {/* Footer */}
        <Footer />
      </div>
    </main>
  );
}
