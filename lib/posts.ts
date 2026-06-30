export type Block =
  | { kind: "h2"; text: string }
  | { kind: "p"; html: string }
  | { kind: "ul"; items: string[] }
  | { kind: "quote"; html: string }
  | { kind: "hr" };

export interface Post {
  slug: string;
  title: string;
  category: string;
  readTime: string;
  excerpt: string;
  /** longer dek shown under the title on the article page */
  dek: string;
  img: string;
  featured?: boolean;
  body: Block[];
}

const u = (id: string) => `https://images.unsplash.com/${id}?w=1200&q=80`;

const ctaBlock: Block = {
  kind: "p",
  html: '<em>Thinking about a project for your business? <a href="/#contact">Get in touch</a> for a free consultation — I\'ll tell you exactly what would work best for your goals and budget.</em>',
};

export const posts: Post[] = [
  {
    slug: "why-every-business-needs-a-website-2026",
    title: "Why Every Business Needs a Website in 2026",
    category: "Business",
    readTime: "5 min read",
    excerpt:
      "Your customers search online first. Here's why a fast, modern website is now the cheapest salesperson you'll ever hire.",
    dek: "Your customers search online before they ever walk in or pick up the phone. A fast, modern website is now the cheapest, hardest-working salesperson you'll ever hire — and in 2026, not having one quietly costs you customers every single day.",
    img: u("photo-1497366811353-6870744d04b2"),
    featured: true,
    body: [
      { kind: "h2", text: "Your customers are already looking for you online" },
      {
        kind: "p",
        html: "Before someone books a table, joins a gym, or visits a clinic, they do one thing first: they search online. If they can't find you — or they find an outdated page with no information — they move on to a competitor who shows up looking professional and trustworthy. A website isn't a \"nice to have\" anymore; it's the front door to your business.",
      },
      {
        kind: "p",
        html: "Social media helps, but you don't own it. Algorithms change, accounts get locked, and posts disappear down the feed. Your website is the one place online that is fully yours and works for you 24 hours a day.",
      },
      {
        kind: "quote",
        html: '"A modern website is the cheapest full-time salesperson you\'ll ever hire — it never sleeps, never takes a day off, and works while you do."',
      },
      { kind: "h2", text: "What a good website actually does for your business" },
      {
        kind: "p",
        html: 'A website that\'s built properly does far more than "look nice." It actively grows your business:',
      },
      {
        kind: "ul",
        items: [
          "<strong>Builds instant trust.</strong> A clean, fast, professional site tells visitors you're legitimate and established.",
          "<strong>Captures customers around the clock.</strong> Online bookings, orders and enquiries come in even when you're closed.",
          "<strong>Answers questions automatically.</strong> Hours, pricing, location and services — no more repetitive phone calls.",
          "<strong>Shows up on Google.</strong> Local SEO puts you in front of people searching for exactly what you offer, right now.",
          "<strong>Collects leads and reviews.</strong> Turning curious visitors into paying customers and loyal fans.",
        ],
      },
      { kind: "h2", text: "Why speed and design matter more than ever" },
      {
        kind: "p",
        html: "In 2026, people expect a website to load instantly on their phone. If it takes more than a few seconds, most visitors leave — and Google ranks slow sites lower, so fewer people find you in the first place. This is exactly why I build with modern tools like <code>Next.js</code>: pages load in under a second, look great on every device, and rank well on search.",
      },
      {
        kind: "p",
        html: "Design matters too. A cluttered, hard-to-use site makes people doubt your business. A clean, focused layout that guides visitors toward one clear action — book now, order online, get a quote — is what turns traffic into revenue.",
      },
      { kind: "h2", text: "It's an investment, not a cost" },
      {
        kind: "p",
        html: 'The most common objection I hear is "a website is expensive." But look at the maths: if a website brings in even a handful of extra customers each month, it pays for itself many times over within the first year — and keeps earning after that. Compare that to the cost of every customer who searched for you, didn\'t find a website, and chose someone else.',
      },
      {
        kind: "p",
        html: "And a custom website grows with you. You can add online ordering, bookings, a customer dashboard or automation later — without starting from scratch.",
      },
      { kind: "h2", text: "What to do next" },
      {
        kind: "p",
        html: "If your business doesn't have a website yet, or your current one is slow, outdated, or doesn't bring in customers, 2026 is the year to fix that. You don't need anything fancy to start — just a fast, professional site that clearly shows what you do and makes it easy for customers to take action.",
      },
      { kind: "hr" },
      {
        kind: "p",
        html: '<em>Thinking about a website for your business? <a href="/#contact">Get in touch</a> for a free consultation — I\'ll tell you exactly what would work best for your goals and budget.</em>',
      },
    ],
  },
  {
    slug: "how-custom-software-helps-small-businesses-grow",
    title: "How Custom Software Helps Small Businesses Grow",
    category: "Business",
    readTime: "6 min read",
    excerpt:
      "Off-the-shelf tools rarely fit how you actually work. Custom software pays for itself by saving time and cutting errors.",
    dek: "Generic apps force you to change how you work. Custom software does the opposite — it fits your business exactly, removing the daily friction that quietly drains time and money.",
    img: u("photo-1461749280684-dccba630e2f6"),
    body: [
      { kind: "h2", text: "When off-the-shelf stops fitting" },
      {
        kind: "p",
        html: "Most businesses start with spreadsheets and a handful of generic tools. It works — until it doesn't. You end up copying data between apps, working around features you don't need, and paying for ones you do but can't quite use the way you want.",
      },
      {
        kind: "p",
        html: "Custom software is built around your actual workflow. Instead of bending your process to fit a tool, the tool fits your process — which is where the real time savings come from.",
      },
      { kind: "h2", text: "Where it pays off" },
      {
        kind: "ul",
        items: [
          "<strong>Less manual work.</strong> Repetitive data entry and copy-paste between systems disappears.",
          "<strong>Fewer errors.</strong> One source of truth means no conflicting spreadsheets.",
          "<strong>Faster decisions.</strong> Live dashboards replace end-of-month reports.",
          "<strong>Room to grow.</strong> Add features as you scale, without ripping everything out.",
        ],
      },
      { kind: "hr" },
      ctaBlock,
    ],
  },
  {
    slug: "benefits-of-business-automation",
    title: "Benefits of Business Automation",
    category: "Automation",
    readTime: "5 min read",
    excerpt:
      "From invoices to reminders, automating routine tasks gives you back hours every week — and your customers a faster experience.",
    dek: "Automation isn't about replacing people — it's about removing the repetitive work that stops your team from doing what actually matters.",
    img: u("photo-1518770660439-4636190af475"),
    body: [
      { kind: "h2", text: "The hidden cost of doing it by hand" },
      {
        kind: "p",
        html: "Every invoice typed by hand, every reminder sent manually, every report stitched together from spreadsheets is time your team isn't spending on customers. Individually they feel small; together they cost hours every single week.",
      },
      { kind: "h2", text: "What's worth automating first" },
      {
        kind: "ul",
        items: [
          "<strong>Invoicing & payments.</strong> Generate, send and chase automatically.",
          "<strong>Reminders.</strong> Appointments, renewals and follow-ups that never get forgotten.",
          "<strong>Reports.</strong> Numbers ready the moment you need them.",
          "<strong>Approvals.</strong> Requests that route themselves to the right person.",
        ],
      },
      {
        kind: "quote",
        html: '"Automate the boring, repeatable work — and give your team back the hours to do what humans do best."',
      },
      { kind: "hr" },
      ctaBlock,
    ],
  },
  {
    slug: "nextjs-performance-best-practices",
    title: "Next.js Performance Best Practices",
    category: "Development",
    readTime: "7 min read",
    excerpt:
      "A faster site means more sales and better Google rankings. The exact techniques I use to ship lightning-fast Next.js apps.",
    dek: "Speed is a feature. Here are the practical techniques I rely on to keep Next.js apps loading in under a second on real devices.",
    img: u("photo-1498050108023-c5249f4df085"),
    body: [
      { kind: "h2", text: "Why speed is a business metric" },
      {
        kind: "p",
        html: "Every extra second of load time costs conversions and search ranking. With <code>Next.js</code> you get the tools to be fast by default — the trick is using them well.",
      },
      { kind: "h2", text: "Techniques that move the needle" },
      {
        kind: "ul",
        items: [
          "<strong>Server Components & SSR.</strong> Send less JavaScript to the browser.",
          "<strong>next/image.</strong> Automatic resizing, modern formats and lazy loading.",
          "<strong>Font optimisation.</strong> Self-host and preload to avoid layout shift.",
          "<strong>Code splitting.</strong> Load only what each route needs.",
          "<strong>Caching.</strong> Static generation and ISR for instant repeat visits.",
        ],
      },
      { kind: "hr" },
      ctaBlock,
    ],
  },
  {
    slug: "building-scalable-web-applications",
    title: "Building Scalable Web Applications",
    category: "Development",
    readTime: "8 min read",
    excerpt:
      "How to architect an app today so it can handle 10× the users tomorrow — without an expensive rewrite.",
    dek: "Scalability isn't about premature complexity. It's about a few sound decisions early that save you from a painful rewrite later.",
    img: u("photo-1558494949-ef010cbdcc31"),
    body: [
      { kind: "h2", text: "Design for growth from day one" },
      {
        kind: "p",
        html: "You don't need a hundred servers on launch day. You do need an architecture that won't fall over when traffic grows — clean boundaries, a well-modelled database, and stateless services that scale horizontally.",
      },
      { kind: "h2", text: "The foundations that matter" },
      {
        kind: "ul",
        items: [
          "<strong>A solid data model.</strong> Get the schema right and everything else gets easier.",
          "<strong>Clear API boundaries.</strong> A well-defined backend you can scale independently.",
          "<strong>Caching layers.</strong> Take load off the database for read-heavy paths.",
          "<strong>Observability.</strong> Logs and metrics so you see problems before users do.",
        ],
      },
      { kind: "hr" },
      ctaBlock,
    ],
  },
  {
    slug: "choosing-the-right-tech-stack-for-your-startup",
    title: "Choosing the Right Tech Stack for Your Startup",
    category: "Business",
    readTime: "6 min read",
    excerpt:
      "Why Next.js, NestJS and PostgreSQL are a safe, future-proof bet for most startups and growing businesses.",
    dek: "The best stack is the one that lets you ship fast today and still scale tomorrow. Here's why I reach for the same trio again and again.",
    img: u("photo-1522071820081-009f0129c71c"),
    body: [
      { kind: "h2", text: "Boring technology wins" },
      {
        kind: "p",
        html: "For most startups, the right stack isn't the newest one — it's the proven one with a big community, great hiring pool and a clear path to scale. That's why I default to <code>Next.js</code>, <code>NestJS</code> and <code>PostgreSQL</code>.",
      },
      {
        kind: "ul",
        items: [
          "<strong>Next.js</strong> — fast, SEO-friendly frontends with great DX.",
          "<strong>NestJS</strong> — a structured, testable backend that scales with your team.",
          "<strong>PostgreSQL</strong> — rock-solid, flexible and battle-tested data.",
        ],
      },
      { kind: "hr" },
      ctaBlock,
    ],
  },
  {
    slug: "why-online-booking-beats-phone-only-reservations",
    title: "Why Online Booking Beats Phone-Only Reservations",
    category: "Automation",
    readTime: "5 min read",
    excerpt:
      "If customers can't book outside business hours, you're losing revenue every night. Here's the fix.",
    dek: "Phone-only booking quietly turns away customers every time the line is busy or the lights are off. Online booking captures them instead.",
    img: u("photo-1606857521015-7f9fcf423740"),
    body: [
      { kind: "h2", text: "Every missed call is a lost customer" },
      {
        kind: "p",
        html: "When booking only happens by phone, you lose every customer who calls during the rush, after hours, or simply doesn't like phone calls. Online booking takes reservations 24/7 — even while you sleep.",
      },
      { kind: "h2", text: "What you gain" },
      {
        kind: "ul",
        items: [
          "<strong>Bookings around the clock.</strong> No more revenue lost after closing.",
          "<strong>Fewer no-shows.</strong> Automated confirmations and reminders.",
          "<strong>Less phone time.</strong> Staff focus on customers in front of them.",
          "<strong>Real data.</strong> See peak times and plan staffing properly.",
        ],
      },
      { kind: "hr" },
      ctaBlock,
    ],
  },
];

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}

export function relatedPosts(slug: string, limit = 3): Post[] {
  return posts.filter((p) => p.slug !== slug).slice(0, limit);
}
