import { Mail } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import { profile } from "@/data/profile";

export default function Contact() {
  return (
    <section id="contact" className="border-t border-border bg-ink pt-20 pb-30 text-paper md:pt-24 md:pb-40">
      <div className="container">
        <ScrollReveal>
          <span className="mb-8 block font-mono text-xs uppercase tracking-[0.2em] text-paper/50">
            03 / 联系
          </span>
        </ScrollReveal>

        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <ScrollReveal delay={100}>
              <h2 className="font-display text-display-lg font-medium leading-tight">
                有想法？
                <br />
                <span className="italic text-paper/60">随时聊聊。</span>
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <a
                href={`mailto:${profile.email}`}
                className="mt-10 inline-flex items-center gap-4 font-display text-3xl font-medium text-paper transition-colors hover:text-accent md:text-5xl"
              >
                <Mail className="h-8 w-8 md:h-12 md:w-12" />
                {profile.email}
              </a>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <p className="mt-8 max-w-xl font-body text-base leading-relaxed text-paper/70">
                无论是法律咨询、事务委托或合作、建站交流，还是只是想打个招呼，我都欢迎。通常在 24 小时内回复。
              </p>
            </ScrollReveal>
          </div>

          <div className="lg:col-span-4">
            <ScrollReveal delay={200}>
              <div>
                <h3 className="font-mono text-xs uppercase tracking-widest text-paper/50">
                  联系方式
                </h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <p className="font-body text-lg text-paper">
                      电话：{profile.phone}
                    </p>
                  </li>
                  <li>
                    <p className="font-body text-lg text-paper">
                      微信：{profile.wechat}
                    </p>
                  </li>
                  {profile.offices.map((office) => (
                    <li key={office.name}>
                      <p className="font-body text-sm text-paper/80">
                        <span className="text-paper">{office.name}：</span>
                        {office.address}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
