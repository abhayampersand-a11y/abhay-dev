import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { posts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Insights on web development, custom software, automation and growing a business online — by Abhay Desai.",
};

export default function BlogPage() {
  const featured = posts.find((p) => p.featured) ?? posts[0];
  const rest = posts.filter((p) => p.slug !== featured.slug);

  return (
    <main>
      <section className="pt-36 pb-10 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-violet-500/15 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <p className="reveal text-xs font-medium text-accent-light tracking-widest uppercase mb-3">Insights</p>
          <h1 className="reveal font-display font-bold text-5xl md:text-6xl text-zinc-900 dark:text-white leading-tight mb-4">From the <span className="text-grad">Blog</span></h1>
          <p className="reveal text-lg text-zinc-500 dark:text-zinc-400 max-w-xl leading-relaxed">Practical thoughts on web development, automation and using software to grow a business.</p>
        </div>
      </section>

      {/* FEATURED */}
      <section className="pb-16">
        <div className="max-w-6xl mx-auto px-6">
          <Link href={`/blog/${featured.slug}`} className="reveal group block rounded-3xl overflow-hidden bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 hover:border-accent transition-colors">
            <div className="grid md:grid-cols-2">
              <div className="photo-frame h-64 md:h-auto">
                <Image src={featured.img} alt={featured.title} fill sizes="(max-width:768px) 100vw, 50vw" className="object-cover" />
              </div>
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs bg-indigo-50 dark:bg-zinc-800 text-accent-light border border-indigo-200 dark:border-zinc-700 px-2.5 py-1 rounded-full">{featured.category}</span>
                  <span className="text-xs text-zinc-400">{featured.readTime}</span>
                </div>
                <h2 className="font-display font-bold text-2xl md:text-3xl text-zinc-900 dark:text-white mb-4 group-hover:text-accent transition-colors">{featured.title}</h2>
                <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed mb-6">{featured.excerpt}</p>
                <span className="inline-flex items-center gap-1.5 text-sm font-medium text-accent-light nl">Read article →</span>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* GRID */}
      <section className="pb-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-6">
            {rest.map((post, i) => (
              <article key={post.slug} className={`reveal d${(i % 3) + 1} card group bg-white dark:bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-100 dark:border-zinc-800 hover:border-accent`}>
                <div className="photo-frame w-full h-44">
                  <Image src={post.img} alt={post.title} fill sizes="(max-width:768px) 100vw, 33vw" className="object-cover" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs bg-indigo-50 dark:bg-zinc-800 text-accent-light border border-indigo-200 dark:border-zinc-700 px-2.5 py-1 rounded-full">{post.category}</span>
                    <span className="text-xs text-zinc-400">{post.readTime}</span>
                  </div>
                  <Link href={`/blog/${post.slug}`}>
                    <h3 className="font-display font-bold text-lg text-zinc-900 dark:text-white mb-2 group-hover:text-accent transition-colors">{post.title}</h3>
                  </Link>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed mb-4">{post.excerpt}</p>
                  <Link href={`/blog/${post.slug}`} className="inline-flex items-center gap-1.5 text-sm font-medium text-zinc-900 dark:text-white nl">Read more →</Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
