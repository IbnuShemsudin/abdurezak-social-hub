import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Sparkles } from "lucide-react";
import { profile } from "../data/socialLinks";



export default function Profile() {
  const [imageError, setImageError] = useState(false);

  return (
    <motion.section
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="flex flex-col items-center text-center"
    >
      <div className="profile-glow mb-7 flex h-28 w-28 items-center justify-center overflow-hidden rounded-full border border-gold/40 bg-surface-light">
        {!imageError ? (
          <img
            src={profile.image}
            alt={profile.name}
            onError={() => setImageError(true)}
            className="h-full w-full object-cover"
          />
        ) : (
          <span className="gold-text font-heading text-3xl font-bold">
            AS
          </span>
        )}
      </div>

      <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-gold/20 bg-gold/5 px-4 py-2 text-xs text-gold-light">
        <Sparkles size={13} />
        {profile.availability}
      </div>

      <h1 className="font-heading text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl">
        {profile.name}<span className="gold-text">.</span>
      </h1>

      <p className="mt-4 text-sm font-semibold tracking-wide text-gold-light">
        {profile.title}
      </p>

      <p className="mt-1 text-xs text-zinc-500 sm:text-sm">
        {profile.subtitle}
      </p>

      <p className="mt-5 max-w-sm text-sm leading-7 text-zinc-400">
        {profile.bio}
      </p>

      <div className="mt-8 flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-zinc-500">
        Find me online
        <ArrowDown size={14} className="text-gold" />
      </div>
    </motion.section>
  );
}
