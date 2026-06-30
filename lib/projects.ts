export type ProjectCategory =
  | "management"
  | "website"
  | "dashboard"
  | "ecommerce";

export interface CaseFeature {
  name: string;
  desc?: string;
}
export interface Principle {
  title: string;
  desc: string;
}
export interface Step {
  title: string;
  desc: string;
}
export interface Stat {
  v: string;
  l: string;
}

export interface Project {
  slug: string;
  id: number;
  title: string;
  category: ProjectCategory;
  categoryLabel: string;
  tech: string[];
  timeline: string;
  client: string;
  /** short blurb used on the projects grid card */
  cardDesc: string;
  /** short feature bullets used on the projects grid card */
  cardFeatures: string[];
  img: string;
  hero: string;
  intro: string;
  stats: Stat[];
  problem: string[];
  problemQuote: string;
  solution: string[];
  features: CaseFeature[];
  midImg: string;
  midCaption: string;
  principles: Principle[];
  processIntro: string;
  steps: Step[];
  beforeImg: string;
  beforeCaption: string;
  afterImg: string;
  afterCaption: string;
  resultsIntro: string;
  results: string[];
  resultQuote: string;
  stack: string[];
  demo: string;
  github: string;
}

const u = (id: string, w = 1200) =>
  `https://images.unsplash.com/${id}?w=${w}&q=80`;

export const projects: Project[] = [
  {
    slug: "restaurant",
    id: 1,
    title: "Restaurant Management System",
    category: "management",
    categoryLabel: "Management System",
    tech: ["Next.js", "NestJS", "PostgreSQL"],
    timeline: "5 weeks",
    client: "Local restaurant",
    cardDesc:
      "A complete platform to take online orders, manage reservations and run the kitchen from one dashboard.",
    cardFeatures: [
      "Online menu & ordering",
      "Table reservations",
      "Order management",
      "Customer reviews",
    ],
    img: u("photo-1517248135467-4c7edcad34c4"),
    hero: u("photo-1517248135467-4c7edcad34c4", 1400),
    intro:
      "A complete platform that lets a restaurant take online orders, manage table reservations, and run the kitchen and front-of-house from one admin dashboard — replacing phone-only ordering and a paper reservation book.",
    stats: [
      { v: "2×", l: "Online reservations" },
      { v: "−90%", l: "Missed / double bookings" },
      { v: "+30%", l: "Average order value" },
      { v: "6 hrs", l: "Staff time saved / week" },
    ],
    problem: [
      "The restaurant took every order and reservation by phone. During the dinner rush, calls were missed, the reservation book got double-booked, and staff spent more time on the phone than with guests.",
      "There was no record of what sold well, and no easy way for happy customers to leave reviews. The owner wanted to take orders and bookings online — without paying a commission to a third-party delivery app on every order.",
    ],
    problemQuote:
      '"We were losing bookings simply because nobody could pick up the phone. I wanted our own system that we fully control."',
    solution: [
      "I built a single platform with two sides: a fast, mobile-first customer website for browsing the menu, placing orders and reserving a table, and a secure admin dashboard where staff manage everything in real time.",
      "Orders and reservations flow straight into the kitchen and front-of-house views, so nothing slips through the cracks — and the restaurant keeps 100% of every order.",
    ],
    features: [
      {
        name: "Online menu",
        desc: "categorised, searchable, with photos, prices and availability staff can update instantly",
      },
      {
        name: "Table reservations",
        desc: "real-time availability that prevents double-booking and confirms automatically",
      },
      {
        name: "Order management",
        desc: "live order queue with statuses (received → preparing → ready) for the kitchen",
      },
      {
        name: "Admin dashboard",
        desc: "sales, popular items, peak hours and revenue at a glance",
      },
      {
        name: "Customer reviews",
        desc: "verified diners can rate their experience, building trust for new visitors",
      },
    ],
    midImg: u("photo-1504674900247-0877df9cc836"),
    midCaption:
      "The customer-facing menu and ordering flow — optimised for mobile, where most orders come from.",
    principles: [
      {
        title: "Fast by default",
        desc: "Next.js server rendering loads the menu in under a second — critical for hungry mobile visitors.",
      },
      {
        title: "Reliable data",
        desc: "A PostgreSQL database with Prisma keeps orders, tables and payments consistent — no lost or duplicated orders.",
      },
      {
        title: "Staff-friendly",
        desc: "The dashboard was designed for busy, non-technical staff — large tap targets and zero training needed.",
      },
    ],
    processIntro:
      "The project ran over five weeks, from understanding how the restaurant actually works to launch and hands-on support.",
    steps: [
      {
        title: "Discovery & planning",
        desc: "Sat with staff during service to map the real ordering and reservation flow, then agreed scope and a fixed timeline.",
      },
      {
        title: "Database & API design",
        desc: "Modelled menu, orders, tables, reservations and reviews in PostgreSQL with Prisma, and built a clean NestJS REST API.",
      },
      {
        title: "Customer site in Next.js",
        desc: "Built the mobile-first menu, cart, checkout and reservation flow with a focus on speed and a frictionless experience.",
      },
      {
        title: "Admin dashboard & live orders",
        desc: "Built the real-time order queue, reservation calendar, menu editor and sales analytics for the team.",
      },
      {
        title: "Launch & training",
        desc: "Deployed the system, trained staff, and stayed on hand during the first busy weekend.",
      },
    ],
    beforeImg: u("photo-1414235077428-338989a2e8c0"),
    beforeCaption: "phone-only orders and a paper reservation book",
    afterImg: u("photo-1551288049-bebda4e38f71"),
    afterCaption: "live order queue and sales dashboard",
    resultsIntro:
      "Within the first two months after launch, the restaurant saw clear, measurable improvements:",
    results: [
      "Online reservations doubled — guests could book anytime, even when the line was busy.",
      "Missed and double bookings dropped ~90% thanks to real-time table availability.",
      'Average order value rose ~30% with menu photos and smart "add a side" suggestions.',
      "Around 6 hours of staff time saved every week previously spent on the phone.",
      "100% of order revenue kept — no third-party delivery commissions.",
    ],
    resultQuote:
      '"Excellent work — delivered our website on time and completely improved our business workflow. Online orders went up within the first month."',
    stack: [
      "Frontend: Next.js, React, TypeScript, Tailwind CSS",
      "Backend: NestJS, Node.js",
      "Database: PostgreSQL with Prisma ORM",
      "Other: Secure auth, payment integration, email/WhatsApp notifications",
    ],
    demo: "#",
    github: "#",
  },
  {
    slug: "gym",
    id: 2,
    title: "Gym Management System",
    category: "management",
    categoryLabel: "Management System",
    tech: ["React", "Node.js", "PostgreSQL"],
    timeline: "4 weeks",
    client: "Fitness studio",
    cardDesc:
      "Memberships, attendance, payments and trainer scheduling — so owners stop chasing renewals.",
    cardFeatures: [
      "Membership management",
      "Attendance tracking",
      "Payment tracking",
      "Trainer scheduling",
    ],
    img: u("photo-1571902943202-507ec2618e8f"),
    hero: u("photo-1571902943202-507ec2618e8f", 1400),
    intro:
      "A management system that handles memberships, attendance, payments and trainer scheduling from one dashboard — so the gym owner stops chasing renewals and never loses track of who has paid.",
    stats: [
      { v: "−80%", l: "Manual admin work" },
      { v: "+25%", l: "On-time renewals" },
      { v: "0", l: "Lost payment records" },
      { v: "24/7", l: "Member self-service" },
    ],
    problem: [
      "Memberships, dues and attendance were tracked across a register and a spreadsheet. Renewals were missed, payments went uncollected, and the owner had no clear picture of who was active.",
      "Trainers had no shared schedule, so sessions clashed and members were turned away at busy times.",
    ],
    problemQuote:
      '"I was losing money on expired memberships I forgot to follow up on, and double-booking trainers every week."',
    solution: [
      "I built a single dashboard where staff manage members, mark attendance, record payments and schedule trainers — plus a simple member view for booking sessions and checking dues.",
      "Automated reminders go out before a membership expires, so renewals no longer slip through the cracks.",
    ],
    features: [
      {
        name: "Membership management",
        desc: "plans, start/expiry dates and status in one place",
      },
      {
        name: "Attendance tracking",
        desc: "quick check-in with daily and monthly reports",
      },
      {
        name: "Payment tracking",
        desc: "record dues, see who has paid, and send automatic renewal reminders",
      },
      {
        name: "Trainer scheduling",
        desc: "a shared calendar that prevents clashes and double-booking",
      },
    ],
    midImg: u("photo-1534438327276-14e5300c3a48"),
    midCaption: "The membership and attendance dashboard staff use every day.",
    principles: [
      {
        title: "One source of truth",
        desc: "All members, payments and attendance live in one PostgreSQL database — no more spreadsheets.",
      },
      {
        title: "Automated reminders",
        desc: "Scheduled jobs notify members before renewals so revenue is never left on the table.",
      },
      {
        title: "Simple for staff",
        desc: "Check-ins and payments take a couple of taps, even at the front desk during rush hour.",
      },
    ],
    processIntro:
      "Built over four weeks, from mapping the front-desk routine to launch.",
    steps: [
      {
        title: "Discovery & planning",
        desc: "Shadowed the front desk to understand check-ins, renewals and trainer scheduling.",
      },
      {
        title: "Data model & API",
        desc: "Designed members, plans, payments and sessions in PostgreSQL with a clean Node.js API.",
      },
      {
        title: "Admin dashboard in React",
        desc: "Built member management, attendance and the payments view with fast, simple flows.",
      },
      {
        title: "Scheduling & reminders",
        desc: "Added the shared trainer calendar and automated renewal notifications.",
      },
      {
        title: "Launch & training",
        desc: "Migrated existing member data, trained staff and supported the first billing cycle.",
      },
    ],
    beforeImg: u("photo-1540497077202-7c8a3999166f"),
    beforeCaption: "register book and a messy spreadsheet",
    afterImg: u("photo-1551288049-bebda4e38f71"),
    afterCaption: "one dashboard for members, dues and schedules",
    resultsIntro:
      "After the first two billing cycles the gym saw real improvements:",
    results: [
      "Manual admin work dropped roughly 80% — no more cross-checking registers and spreadsheets.",
      "On-time renewals rose ~25% thanks to automated reminders.",
      "Zero lost payment records — every due is logged and trackable.",
      "Trainer clashes eliminated with a single shared schedule.",
    ],
    resultQuote:
      '"Very professional developer. He built our booking system perfectly and it works flawlessly. Our members can now book classes online without calling."',
    stack: [
      "Frontend: React, TypeScript, Tailwind CSS",
      "Backend: Node.js (Express), REST API",
      "Database: PostgreSQL with Prisma ORM",
      "Other: Role-based auth, scheduled reminder jobs",
    ],
    demo: "#",
    github: "#",
  },
  {
    slug: "clinic",
    id: 3,
    title: "Medical Clinic Website",
    category: "website",
    categoryLabel: "Business Website",
    tech: ["Next.js", "NestJS", "Prisma"],
    timeline: "4 weeks",
    client: "Private medical clinic",
    cardDesc:
      "Patient-friendly site with online appointment booking and a back-office for the clinic staff.",
    cardFeatures: [
      "Appointment booking",
      "Patient management",
      "Doctor profiles",
      "Online consultation requests",
    ],
    img: u("photo-1631217868264-e5b90bb7e133"),
    hero: u("photo-1631217868264-e5b90bb7e133", 1400),
    intro:
      "A patient-friendly clinic website with online appointment booking, doctor profiles and a back-office where staff manage patients and consultation requests — reducing phone load and no-shows.",
    stats: [
      { v: "+40%", l: "Online appointments" },
      { v: "−50%", l: "Front-desk calls" },
      { v: "−30%", l: "No-shows" },
      { v: "24/7", l: "Booking availability" },
    ],
    problem: [
      "Patients could only book by calling during clinic hours, so the front desk was constantly on the phone and appointments were missed after hours.",
      "Patient records and consultation requests were on paper, making follow-ups slow and easy to lose.",
    ],
    problemQuote:
      "\"Our reception was overwhelmed with calls, and patients couldn't reach us in the evening when they actually needed to book.\"",
    solution: [
      "I built a clean, trustworthy website where patients browse doctors, book appointments and submit online consultation requests at any time.",
      "Behind it, a secure admin area lets staff manage patients, appointments and requests, with automated confirmation and reminder messages.",
    ],
    features: [
      {
        name: "Appointment booking",
        desc: "patients pick a doctor, date and time slot online, 24/7",
      },
      {
        name: "Patient management",
        desc: "staff view and update patient details and visit history securely",
      },
      {
        name: "Doctor profiles",
        desc: "specialities, availability and qualifications that build trust",
      },
      {
        name: "Online consultation requests",
        desc: "a simple form routed to the right department",
      },
    ],
    midImg: u("photo-1519494026892-80bbd2d6fd0d"),
    midCaption: "The online appointment booking flow patients use from their phones.",
    principles: [
      {
        title: "Trust first",
        desc: "A calm, professional design with clear doctor information reassures patients and improves bookings.",
      },
      {
        title: "Secure by design",
        desc: "Patient data is protected with proper authentication and access controls.",
      },
      {
        title: "Fewer no-shows",
        desc: "Automated confirmations and reminders keep appointments and reduce wasted slots.",
      },
    ],
    processIntro:
      "Delivered over four weeks with close attention to privacy and ease of use.",
    steps: [
      {
        title: "Discovery & planning",
        desc: "Mapped the booking and patient-intake process with clinic staff.",
      },
      {
        title: "Data model & API",
        desc: "Modelled doctors, patients, appointments and requests in Prisma/PostgreSQL behind a NestJS API.",
      },
      {
        title: "Patient website in Next.js",
        desc: "Built fast, accessible pages for doctors, services and booking.",
      },
      {
        title: "Staff admin area",
        desc: "Created secure tools to manage appointments, patients and consultation requests.",
      },
      {
        title: "Launch & reminders",
        desc: "Went live with automated confirmation and reminder messages.",
      },
    ],
    beforeImg: u("photo-1576091160550-2173dba999ef"),
    beforeCaption: "phone-only booking and paper records",
    afterImg: u("photo-1606857521015-7f9fcf423740"),
    afterCaption: "24/7 online booking and a digital back-office",
    resultsIntro: "In the first months after launch the clinic saw clear gains:",
    results: [
      "Online appointments grew ~40% as patients could book any time.",
      "Front-desk calls dropped roughly 50%, freeing staff for in-person care.",
      "No-shows fell ~30% with automated reminders.",
      "Patient records and requests are now organised and searchable.",
    ],
    resultQuote:
      '"Highly recommended for web application development. Abhay understood exactly what our clinic needed and built a system our staff actually enjoy using."',
    stack: [
      "Frontend: Next.js, React, TypeScript, Tailwind CSS",
      "Backend: NestJS, Node.js",
      "Database: PostgreSQL with Prisma ORM",
      "Other: Secure auth, email/SMS reminders",
    ],
    demo: "#",
    github: "#",
  },
  {
    slug: "realestate",
    id: 4,
    title: "Real Estate Website",
    category: "website",
    categoryLabel: "Business Website",
    tech: ["Next.js", "Node.js", "PostgreSQL"],
    timeline: "5 weeks",
    client: "Real estate agency",
    cardDesc:
      "Property listings with lead capture and an admin dashboard to manage every inquiry.",
    cardFeatures: [
      "Property listings",
      "Lead generation",
      "Admin dashboard",
      "Inquiry management",
    ],
    img: u("photo-1568605114967-8130f3a36994"),
    hero: u("photo-1568605114967-8130f3a36994", 1400),
    intro:
      "A property listings website with built-in lead capture and an admin dashboard to manage every inquiry — turning casual browsers into qualified leads for the agency.",
    stats: [
      { v: "3×", l: "Qualified leads" },
      { v: "+45%", l: "Time on site" },
      { v: "0", l: "Missed inquiries" },
      { v: "<1s", l: "Page load" },
    ],
    problem: [
      "The agency relied on third-party portals and had no website of its own, so leads were expensive and hard to track.",
      "Inquiries came in by phone and email and frequently fell through the cracks with no central system.",
    ],
    problemQuote:
      '"We were paying for leads on portals but had nothing of our own, and inquiries kept getting lost between calls and emails."',
    solution: [
      "I built a fast, image-rich listings site with powerful search and filtering, plus prominent inquiry forms on every property.",
      "An admin dashboard lets the team add and update listings, and captures every inquiry as a trackable lead with status.",
    ],
    features: [
      {
        name: "Property listings",
        desc: "rich photos, maps, filters and search by price, location and type",
      },
      {
        name: "Lead generation",
        desc: 'inquiry and "schedule a viewing" forms on every listing',
      },
      {
        name: "Admin dashboard",
        desc: "add, edit and feature properties without touching code",
      },
      {
        name: "Inquiry management",
        desc: "every lead captured with status so nothing is missed",
      },
    ],
    midImg: u("photo-1512917774080-9991f1c4c750"),
    midCaption:
      "Property listing pages designed to showcase homes and capture inquiries.",
    principles: [
      {
        title: "Show the property",
        desc: "Large, fast-loading images and clear details keep visitors browsing longer.",
      },
      {
        title: "Capture every lead",
        desc: "Inquiry forms and clear CTAs turn interest into trackable leads.",
      },
      {
        title: "Own your pipeline",
        desc: "Leads live in the agency's own database, not a third-party portal.",
      },
    ],
    processIntro:
      "Built over five weeks, focused on lead generation and easy listing management.",
    steps: [
      {
        title: "Discovery & planning",
        desc: "Defined the listing fields, search filters and lead workflow with the agency.",
      },
      {
        title: "Data model & API",
        desc: "Designed properties, media and leads in PostgreSQL with a Node.js API.",
      },
      {
        title: "Listings site in Next.js",
        desc: "Built search, filtering and fast, image-rich property pages.",
      },
      {
        title: "Admin & lead capture",
        desc: "Created the dashboard for managing listings and tracking inquiries.",
      },
      {
        title: "Launch & SEO",
        desc: "Optimised pages for search so listings rank and attract organic leads.",
      },
    ],
    beforeImg: u("photo-1600585154340-be6161a56a0c"),
    beforeCaption: "reliance on paid third-party portals",
    afterImg: u("photo-1497366811353-6870744d04b2"),
    afterCaption: "the agency's own lead-generating website",
    resultsIntro: "After launch the agency built its own steady lead pipeline:",
    results: [
      "Qualified leads roughly tripled compared with portal-only inquiries.",
      "Visitors spent ~45% longer browsing thanks to fast, rich listings.",
      "No more missed inquiries — every lead is captured and tracked.",
      "Organic search traffic grew as listing pages started to rank.",
    ],
    resultQuote:
      "\"Great communication and high-quality code. The project was delivered exactly as promised and he's still our go-to developer for new features.\"",
    stack: [
      "Frontend: Next.js, React, TypeScript, Tailwind CSS",
      "Backend: Node.js, REST API",
      "Database: PostgreSQL with Prisma ORM",
      "Other: Image optimisation, SEO, lead notifications",
    ],
    demo: "#",
    github: "#",
  },
  {
    slug: "school",
    id: 5,
    title: "School / Coaching Institute Portal",
    category: "management",
    categoryLabel: "Management System",
    tech: ["Next.js", "NestJS", "PostgreSQL"],
    timeline: "6 weeks",
    client: "Coaching institute",
    cardDesc:
      "A portal for students, parents and staff — attendance, fees and online classes in one place.",
    cardFeatures: [
      "Student dashboard",
      "Attendance tracking",
      "Fee management",
      "Online classes",
    ],
    img: u("photo-1580582932707-520aed937b7b"),
    hero: u("photo-1580582932707-520aed937b7b", 1400),
    intro:
      "A portal connecting students, parents and staff — with dashboards for attendance, fee management and online classes, all in one secure place.",
    stats: [
      { v: "+60%", l: "Faster fee collection" },
      { v: "−70%", l: "Admin paperwork" },
      { v: "100%", l: "Attendance digitised" },
      { v: "1", l: "Portal for everyone" },
    ],
    problem: [
      "Attendance was on paper, fees were tracked manually, and parents had no visibility into their child's progress or dues.",
      "During remote periods there was no organised way to run and share online classes.",
    ],
    problemQuote:
      '"Parents kept calling to ask about attendance and fees, and our staff spent hours every week on registers and receipts."',
    solution: [
      "I built a role-based portal: students see their dashboard and classes, parents track attendance and fees, and staff manage everything centrally.",
      "Fees are recorded with online payment and automatic reminders, and online classes are scheduled and shared in one place.",
    ],
    features: [
      {
        name: "Student dashboard",
        desc: "schedule, attendance, materials and announcements in one view",
      },
      {
        name: "Attendance tracking",
        desc: "digital attendance with reports for staff and parents",
      },
      {
        name: "Fee management",
        desc: "record fees, accept online payments and send automatic reminders",
      },
      {
        name: "Online classes",
        desc: "schedule, share links and materials for live sessions",
      },
    ],
    midImg: u("photo-1522071820081-009f0129c71c"),
    midCaption:
      "The student dashboard bringing classes, attendance and fees together.",
    principles: [
      {
        title: "Right view per role",
        desc: "Students, parents and staff each see exactly what they need — nothing more.",
      },
      {
        title: "Transparency for parents",
        desc: "Live attendance and fee status cut down repetitive phone queries.",
      },
      {
        title: "Less paperwork",
        desc: "Digital attendance and fees replace registers and manual receipts.",
      },
    ],
    processIntro: "Delivered over six weeks across three user roles.",
    steps: [
      {
        title: "Discovery & planning",
        desc: "Mapped the needs of students, parents and staff and the fee workflow.",
      },
      {
        title: "Data model & API",
        desc: "Designed users, classes, attendance and fees in PostgreSQL behind a NestJS API.",
      },
      {
        title: "Role-based portal in Next.js",
        desc: "Built separate dashboards for students, parents and staff.",
      },
      {
        title: "Fees & online classes",
        desc: "Added online payments, reminders and class scheduling.",
      },
      {
        title: "Launch & onboarding",
        desc: "Imported student data and onboarded staff and parents.",
      },
    ],
    beforeImg: u("photo-1503676260728-1c00da094a0b"),
    beforeCaption: "paper registers and manual fee receipts",
    afterImg: u("photo-1551288049-bebda4e38f71"),
    afterCaption: "one portal for students, parents and staff",
    resultsIntro: "After rollout the institute ran far more smoothly:",
    results: [
      "Fees were collected ~60% faster with online payment and reminders.",
      "Admin paperwork dropped roughly 70%.",
      "Attendance fully digitised and visible to parents in real time.",
      "Online classes organised in one place instead of scattered links.",
    ],
    resultQuote:
      '"The portal made our whole institute run smoother. Parents stopped calling for updates and our staff got hours back every week."',
    stack: [
      "Frontend: Next.js, React, TypeScript, Tailwind CSS",
      "Backend: NestJS, Node.js",
      "Database: PostgreSQL with Prisma ORM",
      "Other: Role-based auth, online payments, reminders",
    ],
    demo: "#",
    github: "#",
  },
  {
    slug: "inventory",
    id: 6,
    title: "Inventory Management System",
    category: "dashboard",
    categoryLabel: "Dashboard",
    tech: ["React", "NestJS", "PostgreSQL"],
    timeline: "5 weeks",
    client: "Retail business",
    cardDesc:
      "Track stock, purchases and sales with a real-time analytics dashboard for smarter decisions.",
    cardFeatures: [
      "Product tracking",
      "Sales reports",
      "Purchase management",
      "Analytics dashboard",
    ],
    img: u("photo-1601598851547-4302969d0614"),
    hero: u("photo-1601598851547-4302969d0614", 1400),
    intro:
      "A real-time inventory dashboard that tracks products, purchases and sales — with analytics that help the owner make smarter stocking and pricing decisions.",
    stats: [
      { v: "−35%", l: "Stockouts" },
      { v: "−20%", l: "Excess inventory" },
      { v: "Live", l: "Stock visibility" },
      { v: "1 click", l: "Sales reports" },
    ],
    problem: [
      "Stock was tracked in spreadsheets that were always out of date, leading to both stockouts of popular items and money tied up in slow movers.",
      "There was no quick way to see sales trends or what to reorder.",
    ],
    problemQuote:
      '"We were either running out of best-sellers or overstocked on things that never sold — all because our numbers were never current."',
    solution: [
      "I built a dashboard that updates stock in real time as purchases and sales happen, with low-stock alerts and clear analytics.",
      "Owners can see best-sellers, dead stock and sales trends at a glance, and export reports in one click.",
    ],
    features: [
      { name: "Product tracking", desc: "live stock levels with low-stock alerts" },
      {
        name: "Sales reports",
        desc: "daily, weekly and monthly sales at a glance",
      },
      {
        name: "Purchase management",
        desc: "record purchases and supplier orders that update stock automatically",
      },
      {
        name: "Analytics dashboard",
        desc: "best-sellers, dead stock and trends to guide decisions",
      },
    ],
    midImg: u("photo-1578575437130-527eed3abbec"),
    midCaption: "The analytics dashboard showing stock levels and sales trends.",
    principles: [
      {
        title: "Always current",
        desc: "Stock updates the moment a sale or purchase is recorded — no stale spreadsheets.",
      },
      {
        title: "Decisions from data",
        desc: "Clear analytics turn raw numbers into what to reorder and what to discount.",
      },
      {
        title: "Fast at scale",
        desc: "A well-indexed PostgreSQL database keeps reports instant even with thousands of products.",
      },
    ],
    processIntro:
      "Built over five weeks with a focus on accuracy and clear analytics.",
    steps: [
      {
        title: "Discovery & planning",
        desc: "Understood the product range, suppliers and how sales were recorded.",
      },
      {
        title: "Data model & API",
        desc: "Designed products, purchases and sales in PostgreSQL behind a NestJS API.",
      },
      {
        title: "Dashboard in React",
        desc: "Built real-time stock views, low-stock alerts and entry flows.",
      },
      {
        title: "Analytics & reports",
        desc: "Added sales trends, best-seller insights and one-click exports.",
      },
      {
        title: "Launch & training",
        desc: "Imported the existing catalogue and trained the team.",
      },
    ],
    beforeImg: u("photo-1607082348824-0a96f2a4b9da"),
    beforeCaption: "out-of-date stock spreadsheets",
    afterImg: u("photo-1551288049-bebda4e38f71"),
    afterCaption: "a live inventory and analytics dashboard",
    resultsIntro:
      "After adopting the system the business managed stock far more efficiently:",
    results: [
      "Stockouts of popular items dropped ~35% with low-stock alerts.",
      "Excess inventory fell ~20% by spotting slow movers early.",
      "Live stock visibility replaced guesswork and stale spreadsheets.",
      "Sales reports that took hours now take one click.",
    ],
    resultQuote:
      '"Now I know exactly what to reorder and what to discount. The dashboard pays for itself in better stocking decisions alone."',
    stack: [
      "Frontend: React, TypeScript, Tailwind CSS",
      "Backend: NestJS, Node.js",
      "Database: PostgreSQL with Prisma ORM",
      "Other: Real-time updates, CSV export, alerts",
    ],
    demo: "#",
    github: "#",
  },
  {
    slug: "ecommerce",
    id: 7,
    title: "E-Commerce Store",
    category: "ecommerce",
    categoryLabel: "E-Commerce",
    tech: ["Next.js", "Node.js", "Prisma"],
    timeline: "6 weeks",
    client: "Local retail brand",
    cardDesc:
      "A full online store with secure payments, order tracking and a powerful admin panel.",
    cardFeatures: [
      "Product catalog",
      "Payment integration",
      "Order tracking",
      "Admin panel",
    ],
    img: u("photo-1610030469983-98e550d6193c"),
    hero: u("photo-1610030469983-98e550d6193c", 1400),
    intro:
      "A full online store with product catalog, secure payment integration, order tracking and an admin panel — helping a local brand start selling online and grow revenue.",
    stats: [
      { v: "+ new", l: "Online revenue channel" },
      { v: "<1s", l: "Page load" },
      { v: "100%", l: "Orders tracked" },
      { v: "24/7", l: "Open for sales" },
    ],
    problem: [
      "The brand sold only in-store and through DMs, manually confirming orders and payments — which didn't scale and lost sales after hours.",
      "There was no catalogue, no secure checkout and no way to track orders.",
    ],
    problemQuote:
      '"We were taking orders over Instagram DMs and chasing payments manually. We needed a real store that runs itself."',
    solution: [
      "I built a fast, mobile-first online store with a clean catalogue, cart and secure checkout, so customers can buy anytime.",
      "An admin panel manages products, stock and orders, and customers get order tracking and confirmations automatically.",
    ],
    features: [
      {
        name: "Product catalog",
        desc: "organised categories, search and rich product pages",
      },
      {
        name: "Payment integration",
        desc: "secure online checkout with trusted payment providers",
      },
      {
        name: "Order tracking",
        desc: "customers follow their order from placed to delivered",
      },
      {
        name: "Admin panel",
        desc: "manage products, stock, orders and customers in one place",
      },
    ],
    midImg: u("photo-1601121141461-9d6647bca1ed"),
    midCaption: "The storefront and checkout — built mobile-first for shoppers on the go.",
    principles: [
      {
        title: "Frictionless checkout",
        desc: "A fast, simple cart and secure payment reduce abandoned orders.",
      },
      {
        title: "Trust & speed",
        desc: "Quick-loading, professional pages convert browsers into buyers.",
      },
      {
        title: "Easy to run",
        desc: "The admin panel lets the brand manage everything without a developer.",
      },
    ],
    processIntro:
      "Built over six weeks, from catalogue setup to a secure live store.",
    steps: [
      {
        title: "Discovery & planning",
        desc: "Defined the catalogue, checkout and order workflow with the brand.",
      },
      {
        title: "Data model & API",
        desc: "Designed products, carts, orders and payments in Prisma/PostgreSQL with a Node.js API.",
      },
      {
        title: "Storefront in Next.js",
        desc: "Built fast catalogue, product pages, cart and checkout.",
      },
      {
        title: "Payments & admin panel",
        desc: "Integrated secure payments and built product/order management.",
      },
      {
        title: "Launch & support",
        desc: "Went live, set up order tracking and confirmations, and supported the first sales.",
      },
    ],
    beforeImg: u("photo-1605518216938-7c31b7b14ad0"),
    beforeCaption: "manual orders over DMs and chasing payments",
    afterImg: u("photo-1441986300917-64674bd600d8"),
    afterCaption: "a self-running online store, open 24/7",
    resultsIntro: "The store gave the brand a brand-new way to sell:",
    results: [
      "A new online revenue channel that runs 24/7, beyond store hours.",
      "Fast, mobile-first pages that load in under a second.",
      "Every order tracked from checkout to delivery — no manual chasing.",
      "The team manages products and orders themselves via the admin panel.",
    ],
    resultQuote:
      '"Going online completely changed our business. Orders come in while we sleep and everything is organised in one place."',
    stack: [
      "Frontend: Next.js, React, TypeScript, Tailwind CSS",
      "Backend: Node.js, REST API",
      "Database: PostgreSQL with Prisma ORM",
      "Other: Secure payment integration, order tracking, email notifications",
    ],
    demo: "#",
    github: "#",
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function otherProjects(slug: string, limit = 3): Project[] {
  return projects.filter((p) => p.slug !== slug).slice(0, limit);
}

export interface FilterOption {
  value: "all" | ProjectCategory;
  label: string;
}

export const filterOptions: FilterOption[] = [
  { value: "all", label: "All (7)" },
  { value: "management", label: "Management Systems" },
  { value: "website", label: "Business Websites" },
  { value: "dashboard", label: "Dashboards" },
  { value: "ecommerce", label: "E-Commerce" },
];
