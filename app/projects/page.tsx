import type { Metadata } from "next";
import Link from "next/link";
import ProjectsFilter from "@/components/ProjectsFilter";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Real-world business systems built by Abhay Desai — restaurant, gym, clinic, real estate, school, inventory and e-commerce platforms with Next.js, NestJS and PostgreSQL.",
};

export default function ProjectsPage() {
  return (
    <main>
      <section className="pt-36 pb-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-violet-500/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-10 left-0 w-64 h-64 bg-blue-500/15 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <p className="reveal text-xs font-medium text-accent-light tracking-widest uppercase mb-3">Portfolio</p>
          <h1 className="reveal font-display font-bold text-5xl md:text-6xl text-zinc-900 dark:text-white leading-tight mb-4">
            Real Business <span className="text-grad">Systems</span>
          </h1>
          <p className="reveal text-lg text-zinc-500 dark:text-zinc-400 max-w-xl leading-relaxed mb-8">
            Production-ready web applications built for restaurants, gyms, clinics, real estate, schools, retail and online stores — designed to automate operations and grow revenue.
          </p>
        </div>
      </section>

      <section className="pb-24">
        <div className="max-w-6xl mx-auto px-6">
          <ProjectsFilter projects={projects} />
        </div>
      </section>

      <section className="pb-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-zinc-900 dark:bg-zinc-800 rounded-3xl p-10 md:p-14 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-violet-500/25 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />
            <div className="relative z-10">
              <p className="text-xs font-medium text-accent-light tracking-widest uppercase mb-4">Ready to start?</p>
              <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-4">Want a system like these for your business?</h2>
              <p className="text-zinc-400 max-w-md mx-auto mb-8">Tell me about your business and the problem you want to solve — I&apos;ll suggest the right solution and a clear plan.</p>
              <Link href="/#contact" className="inline-flex items-center gap-2 btn-primary bg-grad text-white font-medium px-8 py-3.5 rounded-full hover:brightness-110 transition-all">Start a project →</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
