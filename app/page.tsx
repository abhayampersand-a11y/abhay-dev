import Image from "next/image";
import Link from "next/link";
import { getProject } from "@/lib/projects";
import { posts } from "@/lib/posts";

function Stars() {
  return (
    <div className="flex gap-0.5 mb-5" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} className="w-4 h-4 text-accent-light fill-current" viewBox="0 0 20 20" aria-hidden="true">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

const techMarquee = ["Next.js", "React", "Node.js", "NestJS", "PostgreSQL", "TypeScript", "Prisma", "Tailwind CSS"];

export default function Home() {
  const restaurant = getProject("restaurant")!;
  const gym = getProject("gym")!;
  const ecommerce = getProject("ecommerce")!;
  const blogPosts = posts.slice(0, 3);

  return (
    <main>
      {/* ═══ HERO ═══ */}
      <section id="hero" className="relative min-h-screen flex items-center pt-16 overflow-hidden">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-violet-500/15 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />
        <div className="absolute bottom-1/4 left-0 w-72 h-72 bg-blue-500/15 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 w-full">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="reveal inline-flex items-center gap-2 text-sm font-medium text-accent-light tracking-wide mb-5">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                </span>
                Available for freelance projects
              </p>
              <p className="reveal d1 text-base text-zinc-500 dark:text-zinc-400 mb-3">
                Hi, I&apos;m Abhay Desai — <span className="text-zinc-700 dark:text-zinc-200 font-medium">Full Stack Developer</span>
              </p>
              <h1 className="reveal d1 font-display font-bold text-4xl md:text-5xl lg:text-6xl leading-[1.08] tracking-tight text-zinc-900 dark:text-white mb-6">
                Building Scalable Web Applications for Businesses That Want to <span className="text-grad">Grow</span>
              </h1>
              <p className="reveal d2 text-lg text-zinc-500 dark:text-zinc-400 font-light leading-relaxed max-w-lg mb-10">
                I help startups and local businesses build modern web applications, dashboards, SaaS products and automation systems using{" "}
                <strong className="font-medium text-zinc-700 dark:text-zinc-300">Next.js</strong>,{" "}
                <strong className="font-medium text-zinc-700 dark:text-zinc-300">NestJS</strong> and{" "}
                <strong className="font-medium text-zinc-700 dark:text-zinc-300">PostgreSQL</strong>.
              </p>
              <div className="reveal d3 flex flex-wrap gap-3">
                <Link href="/projects" className="shimmer inline-flex items-center gap-2 bg-grad text-white font-medium px-7 py-3.5 rounded-full hover:brightness-110 transition-all text-sm glow">
                  View my work
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link href="/#contact" className="inline-flex items-center gap-2 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-medium px-7 py-3.5 rounded-full hover:bg-zinc-700 dark:hover:bg-zinc-200 transition-colors text-sm">Hire me</Link>
                <Link href="/#contact" className="inline-flex items-center gap-2 border border-zinc-300 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 font-medium px-7 py-3.5 rounded-full hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors text-sm">Contact me</Link>
              </div>
              <div className="reveal d4 flex gap-8 mt-14 pt-8 border-t border-zinc-100 dark:border-zinc-900">
                <div><p className="font-display font-bold text-3xl text-zinc-900 dark:text-white">25+</p><p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">Projects delivered</p></div>
                <div><p className="font-display font-bold text-3xl text-zinc-900 dark:text-white">18+</p><p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">Happy clients</p></div>
                <div><p className="font-display font-bold text-3xl text-zinc-900 dark:text-white">3+</p><p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">Years experience</p></div>
              </div>
            </div>

            <div className="reveal d2 flex justify-center md:justify-end">
              <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96">
                <div className="absolute -inset-3 bg-grad rounded-[2rem] blur-2xl opacity-30" aria-hidden="true" />
                <div className="pf relative w-full h-full rounded-3xl ring-1 ring-white/10">
                  <Image src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&q=80" alt="Full-stack developer workspace with code on screen" fill priority sizes="(max-width:768px) 80vw, 384px" className="object-cover" />
                </div>
                <div className="absolute -bottom-4 -left-4 bg-grad text-white font-display font-bold text-sm px-4 py-2.5 rounded-2xl shadow-lg">Open to projects</div>
              </div>
            </div>
          </div>

          <div className="reveal d4 mt-16 pt-8 border-t border-zinc-100 dark:border-zinc-900">
            <p className="text-xs font-medium text-zinc-400 uppercase tracking-widest mb-4">Tech I build with</p>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-zinc-500 dark:text-zinc-400 font-medium">
              {techMarquee.map((t, i) => (
                <span key={t} className="flex items-center gap-x-6">
                  {t}
                  {i < techMarquee.length - 1 && <span className="text-zinc-300 dark:text-zinc-700">•</span>}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ SERVICES ═══ */}
      <section id="services" className="py-24 bg-zinc-50 dark:bg-zinc-900/40">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-14 max-w-2xl">
            <p className="reveal text-xs font-medium text-accent-light tracking-widest uppercase mb-3">What I do</p>
            <h2 className="reveal d1 font-display font-bold text-4xl md:text-5xl text-zinc-900 dark:text-white mb-4">Business solutions, not just code</h2>
            <p className="reveal d2 text-zinc-500 dark:text-zinc-400 leading-relaxed">I build software that solves real problems — helping you automate operations, serve customers better, and increase revenue.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ServiceCard delay="d1" title="Custom Website Development" body="Fast, SEO-ready websites built with Next.js that load instantly and rank well — turning visitors into paying customers." useCase="A restaurant site that doubled online reservations.">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6M3 5h18M5 5v14a2 2 0 002 2h10a2 2 0 002-2V5" />
            </ServiceCard>
            <ServiceCard delay="d2" title="Web Application Development" body="Full-featured web apps with secure logins, dashboards and real-time data — so you can digitise manual processes and serve customers 24/7." useCase="A clinic booking platform with patient portals.">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </ServiceCard>
            <article className="reveal d3 card-h group bg-zinc-900 dark:bg-zinc-800 rounded-2xl p-8 border border-zinc-800 hover:border-accent relative overflow-hidden">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-grad rounded-full blur-3xl opacity-20" aria-hidden="true" />
              <div className="relative z-10">
                <div className="w-12 h-12 flex items-center justify-center bg-zinc-800 dark:bg-zinc-700 rounded-xl mb-6 group-hover:bg-accent/20 transition-colors">
                  <svg className="w-6 h-6 text-accent-light" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                </div>
                <h3 className="font-display font-bold text-xl text-white mb-3">SaaS Product Development</h3>
                <p className="text-sm text-zinc-400 leading-relaxed mb-4">End-to-end SaaS builds — multi-tenant auth, subscriptions and billing — so founders can launch and validate products fast.</p>
                <p className="text-xs text-zinc-500 leading-relaxed"><span className="text-accent-light font-medium">Use case:</span> A startup MVP launched and live in 6 weeks.</p>
              </div>
            </article>
            <ServiceCard delay="d1" title="Admin Dashboard Development" body="Clean, data-rich dashboards to run your whole operation from one screen — make faster decisions with live metrics." useCase="A sales & inventory dashboard for a retail chain.">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </ServiceCard>
            <ServiceCard delay="d2" title="API Development" body="Robust, well-documented REST APIs with NestJS / Node.js that power web, mobile and third-party integrations — so your product scales and connects." useCase="A payment + notification API for an e-commerce app.">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </ServiceCard>
            <ServiceCard delay="d3" title="Database Design (PostgreSQL)" body="Reliable, well-modelled PostgreSQL schemas with Prisma that keep your data fast and consistent — scale without performance headaches." useCase="Modelling orders, users & payments for a marketplace.">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2 4 3 8 3s8-1 8-3V7M4 7c0 2 4 3 8 3s8-1 8-3M4 7c0-2 4-3 8-3s8 1 8 3" />
            </ServiceCard>

            <article className="reveal d1 card-h group bg-white dark:bg-zinc-900 rounded-2xl p-8 border border-zinc-100 dark:border-zinc-800 hover:border-accent lg:col-span-3 lg:flex lg:items-center lg:gap-8">
              <div className="lg:flex-1">
                <div className="w-12 h-12 flex items-center justify-center bg-indigo-50 dark:bg-zinc-800 rounded-xl mb-6 group-hover:bg-accent/10 transition-colors">
                  <svg className="w-6 h-6 text-accent-light" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
                </div>
                <h3 className="font-display font-bold text-xl text-zinc-900 dark:text-white mb-3">Business Automation Systems</h3>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed mb-2 max-w-2xl">Automate repetitive work — invoices, reminders, reports and approval workflows — so you save hours every week and cut human error.</p>
                <p className="text-xs text-zinc-400 dark:text-zinc-500 leading-relaxed"><span className="text-accent-light font-medium">Use case:</span> Auto-generating invoices with WhatsApp &amp; email reminders.</p>
              </div>
              <Link href="/#contact" className="hidden lg:inline-flex items-center gap-2 shrink-0 shimmer bg-grad text-white text-sm font-medium px-6 py-3 rounded-full hover:brightness-110 transition-all">Discuss your project →</Link>
            </article>
          </div>
        </div>
      </section>

      {/* ═══ WORK ═══ */}
      <section id="work" className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-14">
            <div>
              <p className="reveal text-xs font-medium text-accent-light tracking-widest uppercase mb-3">Portfolio</p>
              <h2 className="reveal d1 font-display font-bold text-4xl md:text-5xl text-zinc-900 dark:text-white">Real business systems I&apos;ve built</h2>
            </div>
            <Link href="/projects" className="reveal d1 text-sm font-medium text-zinc-500 dark:text-zinc-400 hover:text-accent transition-colors self-start sm:self-auto nl">All projects →</Link>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <article className="card-h reveal d1 group rounded-2xl overflow-hidden bg-zinc-100 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 hover:border-accent md:row-span-2">
              <div className="pf w-full h-64 md:h-80">
                <Image src={restaurant.img} alt="Elegant fine-dining restaurant interior with warm ambient lighting" fill sizes="(max-width:768px) 100vw, 50vw" className="object-cover" />
              </div>
              <div className="p-7">
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs bg-indigo-50 dark:bg-zinc-800 text-accent-light border border-indigo-200 dark:border-zinc-700 px-3 py-1 rounded-full">Management System</span>
                  <span className="text-xs bg-zinc-200 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 px-3 py-1 rounded-full">Next.js</span>
                  <span className="text-xs bg-zinc-200 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 px-3 py-1 rounded-full">NestJS</span>
                  <span className="text-xs bg-zinc-200 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 px-3 py-1 rounded-full">PostgreSQL</span>
                </div>
                <Link href="/projects/restaurant">
                  <h3 className="font-display font-bold text-2xl text-zinc-900 dark:text-white mb-2 group-hover:text-accent transition-colors">Restaurant Management System</h3>
                </Link>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed mb-5">A complete platform for restaurants to take online orders, manage table reservations and run the kitchen — with a powerful admin dashboard. Online menu, table reservations, order management, customer reviews and live analytics all in one place. Replaced phone-only ordering and manual reservation books, reducing missed bookings and freeing up staff during peak hours.</p>
                <div className="flex flex-wrap items-center gap-4">
                  <Link href="/projects/restaurant" className="inline-flex items-center gap-1.5 text-sm font-medium text-zinc-900 dark:text-white nl">View case study <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg></Link>
                  <a href="#" className="inline-flex items-center gap-1.5 text-sm font-medium text-accent-light nl">Live demo →</a>
                </div>
              </div>
            </article>

            <WorkCard href="/projects/gym" img={gym.img} alt="Modern gym interior with rows of fitness equipment" tags={["Management System", "React"]} title="Gym Management System" body="Memberships, attendance, payment tracking and trainer scheduling in one dashboard — so gym owners stop chasing renewals and never lose track of dues." />
            <WorkCard href="/projects/ecommerce" img={ecommerce.img} alt="Indian e-commerce fashion products" tags={["E-Commerce", "Next.js"]} title="E-Commerce Store" body="A full online store with product catalog, secure payment integration, order tracking and an admin panel — helping a local brand sell online and grow revenue." />
          </div>
        </div>
      </section>

      {/* ═══ ABOUT ═══ */}
      <section id="about" className="py-24 bg-zinc-50 dark:bg-zinc-900/40">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="reveal order-2 md:order-1">
              <div className="relative max-w-sm mx-auto">
                <div className="absolute -inset-3 bg-grad rounded-[2rem] blur-2xl opacity-25" aria-hidden="true" />
                <div className="pf relative w-full aspect-square rounded-3xl ring-1 ring-white/10">
                  <Image src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=1200&q=80" alt="Abhay Desai at work" fill sizes="(max-width:768px) 80vw, 384px" className="object-cover" />
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <p className="reveal text-xs font-medium text-accent-light tracking-widest uppercase mb-3">About me</p>
              <h2 className="reveal d1 font-display font-bold text-4xl md:text-5xl text-zinc-900 dark:text-white leading-tight mb-6">I turn business problems<br />into working software</h2>
              <p className="reveal d2 text-zinc-500 dark:text-zinc-400 leading-relaxed mb-4">I&apos;m Abhay Desai, a freelance Full Stack Developer who helps startups, local businesses and entrepreneurs build software that actually moves the needle. From a simple marketing website to a full SaaS platform, I focus on results — more bookings, faster operations, and a better experience for your customers.</p>
              <p className="reveal d3 text-zinc-500 dark:text-zinc-400 leading-relaxed mb-8">I work end-to-end: clean, modern frontends with Next.js and React, solid backends with Node.js and NestJS, and reliable PostgreSQL databases. You get clear communication, on-time delivery, and code that&apos;s built to scale as your business grows.</p>
              <div className="reveal d4">
                <p className="text-xs font-medium text-zinc-500 dark:text-zinc-400 uppercase tracking-widest mb-3">Stack &amp; tools</p>
                <div className="flex flex-wrap gap-2" role="list" aria-label="Skills">
                  {["Next.js", "React", "Node.js", "NestJS", "PostgreSQL", "TypeScript", "Prisma", "Tailwind CSS"].map((s) => (
                    <span key={s} role="listitem" className="stag text-sm bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 px-3.5 py-1.5 rounded-full hover:border-accent">{s}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ TESTIMONIALS ═══ */}
      <section id="reviews" className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-14">
            <p className="reveal text-xs font-medium text-accent-light tracking-widest uppercase mb-3">Social proof</p>
            <h2 className="reveal d1 font-display font-bold text-4xl md:text-5xl text-zinc-900 dark:text-white">What clients say</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <blockquote className="reveal d1 bg-zinc-50 dark:bg-zinc-900 rounded-2xl p-7 border border-zinc-100 dark:border-zinc-800">
              <Stars />
              <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed mb-6 italic">&quot;Excellent work — delivered our website on time and completely improved our business workflow. Online orders went up within the first month.&quot;</p>
              <footer className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full shrink-0 bg-grad flex items-center justify-center text-white font-display font-bold text-sm">RS</div>
                <div><p className="font-medium text-sm text-zinc-900 dark:text-white">Rahul Sharma</p><p className="text-xs text-zinc-500">Restaurant Owner</p></div>
              </footer>
            </blockquote>

            <blockquote className="reveal d2 bg-zinc-900 dark:bg-zinc-800 rounded-2xl p-7 border border-zinc-800 relative overflow-hidden">
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-grad rounded-full blur-3xl opacity-25" aria-hidden="true" />
              <div className="relative z-10">
                <Stars />
                <p className="text-zinc-400 text-sm leading-relaxed mb-6 italic">&quot;Very professional developer. He built our booking system perfectly and it works flawlessly. Our members can now book classes online without calling.&quot;</p>
                <footer className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full shrink-0 bg-grad flex items-center justify-center text-white font-display font-bold text-sm">PM</div>
                  <div><p className="font-medium text-sm text-white">Priya Mehta</p><p className="text-xs text-zinc-500">Gym Owner</p></div>
                </footer>
              </div>
            </blockquote>

            <blockquote className="reveal d3 bg-zinc-50 dark:bg-zinc-900 rounded-2xl p-7 border border-zinc-100 dark:border-zinc-800">
              <Stars />
              <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed mb-6 italic">&quot;Highly recommended for web application development. Abhay understood exactly what our clinic needed and built a system our staff actually enjoy using.&quot;</p>
              <footer className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full shrink-0 bg-grad flex items-center justify-center text-white font-display font-bold text-sm">AK</div>
                <div><p className="font-medium text-sm text-zinc-900 dark:text-white">Dr. Anjali Kapoor</p><p className="text-xs text-zinc-500">Clinic Director</p></div>
              </footer>
            </blockquote>

            <blockquote className="reveal d4 bg-zinc-50 dark:bg-zinc-900 rounded-2xl p-7 border border-zinc-100 dark:border-zinc-800">
              <Stars />
              <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed mb-6 italic">&quot;Great communication and high-quality code. The project was delivered exactly as promised and he&apos;s still our go-to developer for new features.&quot;</p>
              <footer className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full shrink-0 bg-grad flex items-center justify-center text-white font-display font-bold text-sm">VN</div>
                <div><p className="font-medium text-sm text-zinc-900 dark:text-white">Vikram Nair</p><p className="text-xs text-zinc-500">Startup Founder</p></div>
              </footer>
            </blockquote>
          </div>
        </div>
      </section>

      {/* ═══ BLOG ═══ */}
      <section id="blog" className="py-24 bg-zinc-50 dark:bg-zinc-900/40">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-14">
            <div>
              <p className="reveal text-xs font-medium text-accent-light tracking-widest uppercase mb-3">Insights</p>
              <h2 className="reveal d1 font-display font-bold text-4xl md:text-5xl text-zinc-900 dark:text-white">From the blog</h2>
            </div>
            <Link href="/blog" className="reveal d1 text-sm font-medium text-zinc-500 dark:text-zinc-400 hover:text-accent transition-colors self-start sm:self-auto nl">All articles →</Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {blogPosts.map((post, i) => (
              <article key={post.slug} className={`reveal d${i + 1} card-h group bg-white dark:bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-100 dark:border-zinc-800 hover:border-accent`}>
                <div className="pf w-full h-44">
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

      {/* ═══ CONTACT ═══ */}
      <section id="contact" className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-zinc-900 dark:bg-zinc-800 rounded-3xl p-10 md:p-16 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-violet-500/25 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-500/20 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />
            <div className="relative z-10 grid md:grid-cols-2 gap-12 items-start">
              <div>
                <p className="reveal text-xs font-medium text-accent-light tracking-widest uppercase mb-3">Get in touch</p>
                <h2 className="reveal d1 font-display font-bold text-4xl md:text-5xl text-white leading-tight mb-5">Let&apos;s build something<br />that grows your business</h2>
                <p className="reveal d2 text-zinc-400 leading-relaxed mb-8">Whether you need a website, a custom web app, or a system to automate your operations — tell me about it and I&apos;ll get back to you within 24 hours.</p>
                <div className="reveal d3 flex flex-col gap-4">
                  <a href="tel:+918849454323" className="group flex items-center gap-3 text-zinc-400 hover:text-white transition-colors">
                    <span className="w-9 h-9 flex items-center justify-center bg-zinc-800 rounded-lg group-hover:bg-accent/20 transition-colors shrink-0">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                    </span>
                    <span className="text-sm">+91 8849454323</span>
                  </a>
                  <a href="mailto:abhaydesai110@gmail.com" className="group flex items-center gap-3 text-zinc-400 hover:text-white transition-colors">
                    <span className="w-9 h-9 flex items-center justify-center bg-zinc-800 rounded-lg group-hover:bg-accent/20 transition-colors shrink-0">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                    </span>
                    <span className="text-sm">abhaydesai110@gmail.com</span>
                  </a>
                  <a href="https://linkedin.com/in/abhaydesai" rel="noopener noreferrer" target="_blank" className="group flex items-center gap-3 text-zinc-400 hover:text-white transition-colors">
                    <span className="w-9 h-9 flex items-center justify-center bg-zinc-800 rounded-lg group-hover:bg-accent/20 transition-colors shrink-0">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                    </span>
                    <span className="text-sm">linkedin.com/in/abhaydesai</span>
                  </a>
                  <a href="https://github.com/abhaydesai" rel="noopener noreferrer" target="_blank" className="group flex items-center gap-3 text-zinc-400 hover:text-white transition-colors">
                    <span className="w-9 h-9 flex items-center justify-center bg-zinc-800 rounded-lg group-hover:bg-accent/20 transition-colors shrink-0">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                    </span>
                    <span className="text-sm">github.com/abhaydesai</span>
                  </a>
                </div>
              </div>

              <div className="reveal d2">
                <form action="#" method="POST" noValidate>
                  <div className="flex flex-col gap-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="fname" className="block text-xs font-medium text-zinc-400 mb-1.5">Name <span aria-hidden="true">*</span></label>
                        <input type="text" id="fname" name="name" placeholder="Your full name" required autoComplete="name" className="w-full bg-zinc-800 border border-zinc-700 text-white text-sm rounded-xl px-4 py-3 placeholder-zinc-600 focus:outline-none focus:border-accent transition-colors" />
                      </div>
                      <div>
                        <label htmlFor="femail" className="block text-xs font-medium text-zinc-400 mb-1.5">Email <span aria-hidden="true">*</span></label>
                        <input type="email" id="femail" name="email" placeholder="you@company.com" required autoComplete="email" className="w-full bg-zinc-800 border border-zinc-700 text-white text-sm rounded-xl px-4 py-3 placeholder-zinc-600 focus:outline-none focus:border-accent transition-colors" />
                      </div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="fbusiness" className="block text-xs font-medium text-zinc-400 mb-1.5">Business name</label>
                        <input type="text" id="fbusiness" name="business" placeholder="Your company" className="w-full bg-zinc-800 border border-zinc-700 text-white text-sm rounded-xl px-4 py-3 placeholder-zinc-600 focus:outline-none focus:border-accent transition-colors" />
                      </div>
                      <div>
                        <label htmlFor="ftype" className="block text-xs font-medium text-zinc-400 mb-1.5">Project type</label>
                        <select id="ftype" name="project_type" className="w-full bg-zinc-800 border border-zinc-700 text-white text-sm rounded-xl px-4 py-3 focus:outline-none focus:border-accent transition-colors" defaultValue="">
                          <option value="">Select a type</option>
                          <option>Custom Website</option>
                          <option>Web Application</option>
                          <option>SaaS Product</option>
                          <option>Admin Dashboard</option>
                          <option>API Development</option>
                          <option>Business Automation</option>
                          <option>Other</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label htmlFor="fbudget" className="block text-xs font-medium text-zinc-400 mb-1.5">Budget</label>
                      <select id="fbudget" name="budget" className="w-full bg-zinc-800 border border-zinc-700 text-white text-sm rounded-xl px-4 py-3 focus:outline-none focus:border-accent transition-colors" defaultValue="">
                        <option value="">Select a range</option>
                        <option>Under ₹25,000</option>
                        <option>₹25,000 – ₹75,000</option>
                        <option>₹75,000 – ₹2,00,000</option>
                        <option>₹2,00,000+</option>
                        <option>Not sure yet</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="fmessage" className="block text-xs font-medium text-zinc-400 mb-1.5">Message <span aria-hidden="true">*</span></label>
                      <textarea id="fmessage" name="message" rows={4} placeholder="Tell me about your project and what you want to achieve..." required className="w-full bg-zinc-800 border border-zinc-700 text-white text-sm rounded-xl px-4 py-3 placeholder-zinc-600 focus:outline-none focus:border-accent transition-colors resize-none" />
                    </div>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <button type="submit" className="shimmer flex-1 bg-grad text-white font-display font-bold text-sm py-3.5 rounded-xl hover:brightness-110 transition-all">Send message →</button>
                      <a href="mailto:abhaydesai110@gmail.com?subject=Free%20Consultation%20Request" className="flex-1 text-center border border-zinc-600 text-zinc-200 font-medium text-sm py-3.5 rounded-xl hover:bg-zinc-700/50 transition-colors">Book free consultation</a>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function ServiceCard({
  delay,
  title,
  body,
  useCase,
  children,
}: {
  delay: string;
  title: string;
  body: string;
  useCase: string;
  children: React.ReactNode;
}) {
  return (
    <article className={`reveal ${delay} card-h group bg-white dark:bg-zinc-900 rounded-2xl p-8 border border-zinc-100 dark:border-zinc-800 hover:border-accent`}>
      <div className="w-12 h-12 flex items-center justify-center bg-indigo-50 dark:bg-zinc-800 rounded-xl mb-6 group-hover:bg-accent/10 transition-colors">
        <svg className="w-6 h-6 text-accent-light" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          {children}
        </svg>
      </div>
      <h3 className="font-display font-bold text-xl text-zinc-900 dark:text-white mb-3">{title}</h3>
      <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed mb-4">{body}</p>
      <p className="text-xs text-zinc-400 dark:text-zinc-500 leading-relaxed">
        <span className="text-accent-light font-medium">Use case:</span> {useCase}
      </p>
    </article>
  );
}

function WorkCard({
  href,
  img,
  alt,
  tags,
  title,
  body,
}: {
  href: string;
  img: string;
  alt: string;
  tags: string[];
  title: string;
  body: string;
}) {
  return (
    <article className="card-h reveal d2 group rounded-2xl overflow-hidden bg-zinc-100 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 hover:border-accent">
      <div className="pf w-full h-48">
        <Image src={img} alt={alt} fill sizes="(max-width:768px) 100vw, 50vw" className="object-cover" />
      </div>
      <div className="p-6">
        <div className="flex flex-wrap gap-2 mb-3">
          {tags.map((t, i) => (
            <span
              key={t}
              className={
                i === 0
                  ? "text-xs bg-indigo-50 dark:bg-zinc-800 text-accent-light border border-indigo-200 dark:border-zinc-700 px-3 py-1 rounded-full"
                  : "text-xs bg-zinc-200 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 px-3 py-1 rounded-full"
              }
            >
              {t}
            </span>
          ))}
        </div>
        <Link href={href}>
          <h3 className="font-display font-bold text-xl text-zinc-900 dark:text-white mb-1.5 group-hover:text-accent transition-colors">{title}</h3>
        </Link>
        <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed mb-4">{body}</p>
        <Link href={href} className="inline-flex items-center gap-1.5 text-sm font-medium text-zinc-900 dark:text-white nl">View project →</Link>
      </div>
    </article>
  );
}
