import ScrollReveal from "./ScrollReveal";
import { profile } from "@/data/profile";

export default function About() {
  const intro = profile.bio[0];
  const rest = profile.bio.slice(1);

  return (
    <section id="about" className="pt-20 pb-30 md:pt-24 md:pb-40">
      <div className="container">
        <ScrollReveal>
          <span className="section-label mb-8 block">01 / 关于</span>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <h2 className="font-display text-display-lg font-medium leading-tight text-ink">
            专业、务实、值得信赖
          </h2>
        </ScrollReveal>

        <div className="mt-10 grid items-start gap-12 md:grid-cols-12">
          <div className="md:col-span-7">
            <ScrollReveal delay={150}>
              <p className="font-body text-lg leading-relaxed text-ink/90">
                {intro}
              </p>
            </ScrollReveal>
          </div>

          <div className="md:col-span-5">
            <ScrollReveal delay={300}>
              <div className="relative flex justify-center overflow-hidden border border-ink">
                <img
                  src={`${import.meta.env.BASE_URL}profile.jpg`}
                  alt="杨也律师"
                  className="h-auto w-auto object-contain"
                  style={{ maxHeight: '420px' }}
                />
              </div>
            </ScrollReveal>
          </div>
        </div>

        <div className="mt-12 space-y-6">
          {rest.map((paragraph, index) => {
            const isHeading = index === 0;
            return (
              <ScrollReveal key={index} delay={150 + index * 80}>
                {isHeading ? (
                  <h3 className="font-display text-2xl font-medium text-ink">
                    {paragraph}
                  </h3>
                ) : (
                  <p className="font-body text-lg leading-relaxed text-ink/90">
                    {paragraph}
                  </p>
                )}
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
