import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProject, otherProjects, projects } from "@/lib/projects";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const p = getProject(slug);
  if (!p) return { title: "Case Study" };
  return {
    title: `${p.title} · Case Study`,
    description: p.intro,
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const p = getProject(slug);
  if (!p) notFound();

  const others = otherProjects(slug);

  return (
    <>
      <main>
        <article>
          {/* HEADER */}
          <header className="pt-32 pb-10 max-w-4xl mx-auto px-6">
            <Link href="/projects" className="inline-flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-400 hover:text-accent transition-colors mb-8">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
              </svg>
              Back to projects
            </Link>

            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="text-xs bg-indigo-50 dark:bg-zinc-800 text-accent-light border border-indigo-200 dark:border-zinc-700 px-2.5 py-1 rounded-full">{p.categoryLabel}</span>
              {p.tech.map((t) => (
                <span key={t} className="text-xs bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 px-2.5 py-1 rounded-full">{t}</span>
              ))}
              <span className="text-xs text-zinc-400 ml-1">{p.timeline}</span>
            </div>

            <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-zinc-900 dark:text-white leading-tight mb-6">{p.title}</h1>
            <p className="text-xl text-zinc-500 dark:text-zinc-400 leading-relaxed mb-10 max-w-2xl">{p.intro}</p>

            <div className="flex flex-wrap gap-3 mb-10">
              <a href={p.demo} target="_blank" rel="noopener" className="inline-flex items-center gap-2 btn-primary bg-grad text-white text-sm font-medium px-6 py-3 rounded-full hover:brightness-110 transition-all">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                Live demo
              </a>
              <a href={p.github} target="_blank" rel="noopener" className="inline-flex items-center gap-2 border border-zinc-300 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 text-sm font-medium px-6 py-3 rounded-full hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                View code
              </a>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-8 border-t border-b border-zinc-100 dark:border-zinc-900">
              <div><p className="text-xs text-zinc-400 uppercase tracking-widest mb-1">Client</p><p className="font-medium text-zinc-900 dark:text-white text-sm">{p.client}</p></div>
              <div><p className="text-xs text-zinc-400 uppercase tracking-widest mb-1">Role</p><p className="font-medium text-zinc-900 dark:text-white text-sm">Full Stack Developer</p></div>
              <div><p className="text-xs text-zinc-400 uppercase tracking-widest mb-1">Timeline</p><p className="font-medium text-zinc-900 dark:text-white text-sm">{p.timeline}</p></div>
              <div><p className="text-xs text-zinc-400 uppercase tracking-widest mb-1">Stack</p><p className="font-medium text-zinc-900 dark:text-white text-sm">{p.tech.join(" · ")}</p></div>
            </div>
          </header>

          {/* HERO IMAGE */}
          <div className="max-w-6xl mx-auto px-6 mb-16">
            <div className="photo-frame w-full h-72 md:h-[480px] rounded-3xl">
              <Image src={p.hero} alt={`${p.title} hero`} fill priority sizes="100vw" className="object-cover" />
            </div>
          </div>

          {/* RESULTS BANNER */}
          <div className="max-w-4xl mx-auto px-6 mb-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {p.stats.map((s, i) => (
                <div key={i} className="stat-card bg-zinc-50 dark:bg-zinc-900 rounded-2xl p-5 pl-6">
                  <p className={`font-display font-bold text-3xl ${i === 1 ? "text-grad" : "text-zinc-900 dark:text-white"}`}>{s.v}</p>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1 leading-snug">{s.l}</p>
                </div>
              ))}
            </div>
          </div>

          {/* BODY */}
          <div className="max-w-3xl mx-auto px-6 pb-4 prose-cs">
            <h2>The problem</h2>
            {p.problem.map((para, i) => <p key={i}>{para}</p>)}
            <blockquote><p>{p.problemQuote}</p></blockquote>

            <h2>The solution</h2>
            {p.solution.map((para, i) => <p key={i}>{para}</p>)}

            <h3>Key features</h3>
            <ul>
              {p.features.map((f, i) => (
                <li key={i}><strong>{f.name}</strong>{f.desc ? <> — {f.desc}</> : null}</li>
              ))}
            </ul>
          </div>

          {/* Mid image */}
          <div className="max-w-5xl mx-auto px-6 mb-4">
            <div className="photo-frame w-full h-56 md:h-80 rounded-2xl">
              <Image src={p.midImg} alt={`${p.title} screen`} fill sizes="(max-width:1024px) 100vw, 1024px" className="object-cover" />
            </div>
            <p className="img-caption">{p.midCaption}</p>
          </div>

          <div className="max-w-3xl mx-auto px-6 pb-4 prose-cs">
            <h2>How it was built</h2>
            <p>I designed the system around three principles to keep it fast, reliable and easy for the team to use every day.</p>
          </div>

          {/* Principles */}
          <div className="max-w-5xl mx-auto px-6 mb-12">
            <div className="grid md:grid-cols-3 gap-5">
              {p.principles.map((pr, i) => (
                <div key={i} className="bg-zinc-50 dark:bg-zinc-900 rounded-2xl p-7 border border-zinc-100 dark:border-zinc-800">
                  <div className="w-10 h-10 bg-indigo-50 dark:bg-zinc-800 rounded-xl flex items-center justify-center mb-4">
                    <svg className="w-5 h-5 text-accent-light" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <h3 className="font-display font-bold text-zinc-900 dark:text-white mb-2" style={{ fontSize: "1rem", margin: "0 0 .5rem" }}>{pr.title}</h3>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed" style={{ margin: 0 }}>{pr.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="max-w-3xl mx-auto px-6 pb-4 prose-cs">
            <h2>Process</h2>
            <p>{p.processIntro}</p>
          </div>

          {/* Process steps */}
          <div className="max-w-4xl mx-auto px-6 mb-12">
            <div className="space-y-4">
              {p.steps.map((st, i) => (
                <div key={i} className="flex gap-5 bg-zinc-50 dark:bg-zinc-900 rounded-2xl p-6 border border-zinc-100 dark:border-zinc-800">
                  <div className="step-badge shrink-0 mt-0.5">{i + 1}</div>
                  <div>
                    <p className="font-display font-bold text-zinc-900 dark:text-white mb-1">{st.title}</p>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">{st.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Before / After */}
          <div className="max-w-5xl mx-auto px-6 mb-12">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <div className="photo-frame w-full h-52 rounded-2xl"><Image src={p.beforeImg} alt="Before" fill sizes="(max-width:768px) 100vw, 50vw" className="object-cover" /></div>
                <p className="img-caption mt-2">Before — {p.beforeCaption}</p>
              </div>
              <div>
                <div className="photo-frame w-full h-52 rounded-2xl"><Image src={p.afterImg} alt="After" fill sizes="(max-width:768px) 100vw, 50vw" className="object-cover" /></div>
                <p className="img-caption mt-2">After — {p.afterCaption}</p>
              </div>
            </div>
          </div>

          <div className="max-w-3xl mx-auto px-6 pb-16 prose-cs">
            <h2>Results</h2>
            <p>{p.resultsIntro}</p>
            <ul>{p.results.map((r, i) => <li key={i}>{r}</li>)}</ul>
            <blockquote><p>{p.resultQuote}</p></blockquote>

            <h2>Tech stack</h2>
            <ul>{p.stack.map((s, i) => <li key={i}>{s}</li>)}</ul>

            <hr />
            <p><em>Want a system like this for your business? <Link href="/#contact">Get in touch</Link> — I&apos;m available for new projects.</em></p>
          </div>
        </article>

        {/* MORE PROJECTS */}
        <section className="bg-zinc-50 dark:bg-zinc-900/50 py-16">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex items-center justify-between mb-8">
              <h2 className="font-display font-bold text-2xl text-zinc-900 dark:text-white">More projects</h2>
              <Link href="/projects" className="text-sm font-medium text-accent-light nav-link hidden md:block">View all →</Link>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {others.map((o) => (
                <article key={o.slug} className="card-h group bg-white dark:bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-100 dark:border-zinc-800 hover:border-accent transition-colors">
                  <Link href={`/projects/${o.slug}`} className="block photo-frame w-full h-44">
                    <Image src={o.img} alt={o.title} fill sizes="(max-width:768px) 100vw, 33vw" className="object-cover" />
                  </Link>
                  <div className="p-5">
                    <div className="flex gap-2 mb-2">
                      <span className="text-xs bg-indigo-50 dark:bg-zinc-800 text-accent-light border border-indigo-200 dark:border-zinc-700 px-2.5 py-1 rounded-full">{o.categoryLabel}</span>
                    </div>
                    <Link href={`/projects/${o.slug}`}>
                      <h3 className="font-display font-bold text-base text-zinc-900 dark:text-white mb-2 group-hover:text-accent transition-colors">{o.title}</h3>
                    </Link>
                    <Link href={`/projects/${o.slug}`} className="text-sm font-medium text-accent-light nav-link">View project →</Link>
                  </div>
                </article>
              ))}
            </div>
            <div className="text-center mt-8 md:hidden">
              <Link href="/projects" className="text-sm font-medium text-accent-light">View all projects →</Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24">
          <div className="max-w-6xl mx-auto px-6">
            <div className="bg-zinc-900 dark:bg-zinc-800 rounded-3xl p-10 md:p-14 text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-violet-500/25 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-500/20 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />
              <div className="relative z-10">
                <p className="text-xs font-medium text-accent-light tracking-widest uppercase mb-4">Ready to start?</p>
                <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-4">Got a similar project in mind?</h2>
                <p className="text-zinc-400 max-w-md mx-auto mb-8">Tell me about your business and what you want to achieve, and let&apos;s build the right solution together.</p>
                <Link href="/#contact" className="inline-flex items-center gap-2 btn-primary bg-grad text-white font-medium px-8 py-3.5 rounded-full hover:brightness-110 transition-all">Start a project →</Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
