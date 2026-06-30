import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPost, posts, relatedPosts, type Block } from "@/lib/posts";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return { title: "Article" };
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: { title: post.title, description: post.excerpt, type: "article" },
  };
}

function renderBlock(block: Block, i: number) {
  switch (block.kind) {
    case "h2":
      return <h2 key={i}>{block.text}</h2>;
    case "p":
      return <p key={i} dangerouslySetInnerHTML={{ __html: block.html }} />;
    case "ul":
      return (
        <ul key={i}>
          {block.items.map((item, j) => (
            <li key={j} dangerouslySetInnerHTML={{ __html: item }} />
          ))}
        </ul>
      );
    case "quote":
      return (
        <blockquote key={i}>
          <p dangerouslySetInnerHTML={{ __html: block.html }} />
        </blockquote>
      );
    case "hr":
      return <hr key={i} />;
  }
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const related = relatedPosts(slug);

  return (
    <>
      <main>
        <article>
          <header className="pt-32 pb-12 max-w-3xl mx-auto px-6">
            <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-400 hover:text-accent transition-colors mb-8">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
              </svg>
              Back to blog
            </Link>

            <div className="flex items-center gap-3 mb-5">
              <span className="text-xs bg-indigo-50 dark:bg-zinc-800 text-accent-light border border-indigo-200 dark:border-zinc-700 px-2.5 py-1 rounded-full">{post.category}</span>
              <span className="text-xs text-zinc-400">{post.readTime}</span>
            </div>

            <h1 className="font-display font-bold text-4xl md:text-5xl text-zinc-900 dark:text-white leading-tight mb-6">{post.title}</h1>
            <p className="text-xl text-zinc-500 dark:text-zinc-400 leading-relaxed mb-8">{post.dek}</p>

            <div className="flex items-center gap-4 py-6 border-t border-b border-zinc-100 dark:border-zinc-900">
              <div className="w-12 h-12 rounded-full shrink-0 bg-grad flex items-center justify-center text-white font-display font-bold">AD</div>
              <div>
                <p className="font-medium text-zinc-900 dark:text-white text-sm">Abhay Desai</p>
                <p className="text-xs text-zinc-500">Full Stack Developer</p>
              </div>
              <div className="ml-auto flex gap-3">
                <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full border border-zinc-200 dark:border-zinc-800 text-zinc-500 hover:text-accent hover:border-accent transition-colors" aria-label="Share on Twitter">
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.259 5.632 5.905-5.632zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                </a>
                <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full border border-zinc-200 dark:border-zinc-800 text-zinc-500 hover:text-accent hover:border-accent transition-colors" aria-label="Share on LinkedIn">
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                </a>
              </div>
            </div>
          </header>

          <div className="max-w-4xl mx-auto px-6 mb-12">
            <div className="photo-frame w-full h-72 md:h-96 rounded-2xl">
              <Image src={post.img} alt={post.title} fill priority sizes="(max-width:1024px) 100vw, 896px" className="object-cover" />
            </div>
          </div>

          <div className="max-w-3xl mx-auto px-6 pb-16 prose-article">
            {post.body.map((block, i) => renderBlock(block, i))}
          </div>
        </article>

        {/* RELATED */}
        <section className="bg-zinc-50 dark:bg-zinc-900/50 py-16">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="font-display font-bold text-2xl text-zinc-900 dark:text-white mb-8">More from the blog</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {related.map((r) => (
                <article key={r.slug} className="reveal card group bg-white dark:bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-100 dark:border-zinc-800 hover:border-accent transition-colors">
                  <div className="photo-frame w-full h-40">
                    <Image src={r.img} alt={r.title} fill sizes="(max-width:768px) 100vw, 33vw" className="object-cover" />
                  </div>
                  <div className="p-5">
                    <span className="text-xs text-zinc-400 mb-2 block">{r.readTime} · {r.category}</span>
                    <Link href={`/blog/${r.slug}`}>
                      <h3 className="font-display font-bold text-base text-zinc-900 dark:text-white mb-2 group-hover:text-accent transition-colors">{r.title}</h3>
                    </Link>
                    <Link href={`/blog/${r.slug}`} className="text-sm font-medium text-accent-light nl">Read →</Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
