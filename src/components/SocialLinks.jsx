
import { socialLinks } from "../data/socialLinks";
import SocialCard from "./SocialCard";

export default function SocialLinks() {
  return (
    <section className="mx-auto mt-10 w-full max-w-lg">
      <div className="mb-5 flex items-center justify-between">
        <h2 className="font-heading text-sm font-bold uppercase tracking-[0.16em] text-zinc-300">
          Social platforms
        </h2>

        <span className="text-xs text-zinc-600">
          {socialLinks.length} platforms
        </span>
      </div>

      <div className="flex flex-col gap-3">
        {socialLinks.map((item, index) => (
          <SocialCard
            key={item.id}
            item={item}
            index={index}
          />
        ))}
      </div>
    </section>
  );
}
