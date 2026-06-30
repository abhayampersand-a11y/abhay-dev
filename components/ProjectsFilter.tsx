"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { filterOptions, type Project } from "@/lib/projects";

export default function ProjectsFilter({ projects }: { projects: Project[] }) {
  const [filter, setFilter] = useState<string>("all");
  const visible = projects.filter((p) => filter === "all" || p.category === filter);

  return (
    <>
      <div className="reveal flex flex-wrap gap-2">
        {filterOptions.map((f) => (
          <button
            key={f.value}
            onClick={() => setFilter(f.value)}
            className={`text-sm px-4 py-1.5 rounded-full border transition-colors ${
              filter === f.value
                ? "bg-grad text-white border-transparent"
                : "bg-white dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 border-zinc-200 dark:border-zinc-700 hover:border-accent"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        {visible.map((p) => (
          <article
            key={p.id}
            className="project-card group h-full flex flex-col rounded-2xl overflow-hidden bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 hover:border-accent transition-colors"
          >
            <Link href={`/projects/${p.slug}`} className="block photo-frame w-full h-52">
              <Image src={p.img} alt={p.title} fill sizes="(max-width:1024px) 100vw, 33vw" className="object-cover" />
            </Link>
            <div className="p-6 flex flex-col flex-1">
              <div className="flex flex-wrap gap-2 mb-3">
                <span className="text-xs px-2.5 py-1 rounded-full bg-indigo-50 dark:bg-zinc-800 text-accent-light border border-indigo-200 dark:border-zinc-700">
                  {p.categoryLabel}
                </span>
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2.5 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <Link href={`/projects/${p.slug}`}>
                <h3 className="font-display font-bold text-lg text-zinc-900 dark:text-white mb-2 group-hover:text-accent transition-colors">
                  {p.title}
                </h3>
              </Link>
              <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed mb-4">{p.cardDesc}</p>
              <ul className="text-xs text-zinc-500 dark:text-zinc-400 space-y-1 mb-5">
                {p.cardFeatures.map((feat) => (
                  <li key={feat} className="flex items-start gap-2">
                    <span className="text-accent-light mt-px">✓</span>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-auto flex items-center gap-4 pt-2 border-t border-zinc-100 dark:border-zinc-800">
                <a href={p.demo} target="_blank" rel="noopener" className="inline-flex items-center gap-1.5 text-sm font-medium text-accent-light nav-link">
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  Live demo
                </a>
                <a href={p.github} target="_blank" rel="noopener" className="inline-flex items-center gap-1.5 text-sm font-medium text-zinc-600 dark:text-zinc-300 nav-link">
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  GitHub
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>

      {visible.length === 0 && (
        <div className="text-center py-20">
          <p className="text-zinc-400 text-sm">No projects in this category yet.</p>
        </div>
      )}
    </>
  );
}
