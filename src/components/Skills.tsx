import ScrollReveal from "./ScrollReveal";
import { profile } from "@/data/profile";

export default function Skills() {
  return (
    <section id="skills" className="border-t border-border bg-stone-50 pt-20 pb-30 md:pt-24 md:pb-40">
      <div className="container">
        <ScrollReveal>
          <span className="section-label mb-8 block">02 / 服务</span>
        </ScrollReveal>

        <div className="grid gap-8 md:grid-cols-3">
          {profile.skills.map((skill, index) => (
            <ScrollReveal key={skill.title} delay={100 + index * 80}>
              <article className="group h-full border border-border bg-paper p-8 transition-all duration-300 ease-editorial hover:-translate-y-1 hover:border-accent hover:shadow-lg">
                <span className="font-mono text-xs uppercase tracking-widest text-muted">
                  0{index + 1}
                </span>
                <h3 className="mt-6 font-display text-2xl font-medium text-ink">
                  {skill.title}
                </h3>
                <p className="mt-4 font-body text-sm leading-relaxed text-muted">
                  {skill.description}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {skill.tags.map((tag) => (
                    <span
                      key={tag}
                      className="border border-border px-2 py-1 font-mono text-[10px] uppercase tracking-wider text-muted transition-colors group-hover:border-accent group-hover:text-accent"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
