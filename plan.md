# ZYNDREX DEVELOPERS — Complete Website Build Prompt
# Copy everything below this line and paste it to Claude (or your AI tool of choice)

---

## MASTER PROMPT — ZYNDREX DEVELOPERS WEBSITE

Build the complete, production-ready website for **Zyndrex Developers** — a custom enterprise software development studio. This is a single-file React/JSX artifact using Tailwind CSS. Build the full website with all pages, navigation, and content in one self-contained file.

---

## IDENTITY & POSITIONING

**Company Name:** Zyndrex Developers  
**Tagline:** We Build Systems That Run Businesses  
**What we are:** An enterprise software engineering studio that builds internal operations systems, data pipeline automation, and SaaS products. We also build and operate our own products — we are not just contractors.  
**What we are NOT:** A generic web agency, a freelancer platform, or a design studio.  
**Parent brand for:** GrowZen Application (our flagship SaaS product)

---

## DESIGN SYSTEM — FOLLOW EXACTLY

### Aesthetic Direction
Dark, technical, engineering-forward. Think: Linear.app meets Vercel meets a serious systems engineering firm. Confident. Precise. Zero decoration for decoration's sake. Every visual element earns its place.

### Colors (use as CSS variables)
```
--bg-primary: #050A14        (deepest background)
--bg-surface: #0A1628        (card backgrounds)
--bg-elevated: #0F1E38       (hover states, elevated surfaces)
--accent-blue: #2D7DFA       (primary CTA, links, highlights)
--accent-teal: #00D4A0       (secondary accent, success, badges)
--accent-amber: #F59E0B      (warnings, "featured" labels)
--text-primary: #EEF2FF      (main body text)
--text-secondary: #94A3C4    (supporting text, metadata)
--text-muted: #4A5A7A        (placeholder, disabled)
--border: #1A2840            (card borders, dividers)
--border-bright: #243650     (hover borders)
--glow-blue: rgba(45,125,250,0.15)   (card glow on hover)
--glow-teal: rgba(0,212,160,0.12)    (secondary glow)
```

### Typography
- **Display / Hero headings:** `Syne` (Google Font) — Bold 700/800. Angular, technical feel.
- **Section headings:** `Syne` Medium 600
- **Body text:** `DM Sans` Regular 400 — clean, readable
- **Tech stack labels / code snippets:** `JetBrains Mono` — monospace precision
- Import all three from Google Fonts in the component

### NO-GO List (never use these)
- Inter, Roboto, Arial, or system fonts as display fonts
- Purple-to-blue gradients on white backgrounds
- Stock photo illustrations or cartoon SVGs
- Rounded pill buttons
- Generic "We're passionate about your success" copy
- Lottie-style rocket/lightbulb animations
- Bright colorful gradient hero backgrounds
- Wave/blob divider SVGs between sections

### Spacing & Layout
- Generous padding: sections have min `py-24` (6rem top/bottom)
- Max content width: `max-w-7xl mx-auto` with `px-6` padding
- Cards: dark surface, 1px border `--border`, subtle blue glow on hover
- Section transitions: clean horizontal line or slight background shift — never decorative waves

---

## ANIMATIONS (use CSS keyframes + Tailwind + IntersectionObserver)

### Required animations:
1. **Hero entrance:** Staggered fade-up on load — headline first, then sub, then CTAs (100ms delays between each)
2. **Scroll reveals:** Each section fades up when entering viewport (IntersectionObserver, `opacity-0 translate-y-8` → `opacity-100 translate-y-0`, 600ms ease-out)
3. **Card hover:** Subtle border brightens + soft blue glow appears (CSS transition, no JS needed)
4. **Stats counter:** Numbers count up when stat section enters viewport
5. **Nav scroll effect:** Navbar gains backdrop-blur + subtle border on scroll
6. **Tech stack chips:** Slight shimmer on hover

### DO NOT add:
- Parallax scrolling
- Cursor-following effects
- Auto-playing carousels
- Loading spinners on static content

---

## FULL PAGE STRUCTURE

Build a single-page application with React state for navigation. Render each "page" as a section/component toggled by nav state.

### Pages to build:
1. **Home** (default)
2. **Work** (case studies listing + individual case study views)
3. **Products** (GrowZen featured)
4. **Services**
5. **About**
6. **Contact**

---

## PAGE 1: HOMEPAGE

### 1.1 — Navbar
- Logo: `ZYNDREX` in Syne Bold, accent-blue color, with a small geometric bracket or angle mark beside it (e.g., `[ZX]` or `< ZYNDREX />`)
- Nav links: Work, Products, Services, About, Contact
- CTA button (top right): `Start a Project` — filled accent-blue, sharp corners (radius-4 max)
- On mobile: hamburger menu, slide-down
- On scroll: navbar gets `backdrop-blur-md bg-[--bg-primary]/80 border-b border-[--border]`

### 1.2 — Hero Section
Full-viewport height. Dark background with a subtle **animated grid** (SVG or CSS grid lines, very low opacity ~4%, like a circuit board grid). On top of that, a very faint radial gradient glow in accent-blue centered behind the headline.

**Content layout:** Left-aligned (not centered). Text takes left 55%, right 45% is a visual element.

**Left side:**
- Small label above headline: `< Enterprise Software Studio />` in JetBrains Mono, accent-teal color, small size
- H1 headline (massive, 80-96px on desktop): `We Build Systems That Run Businesses`
  - The word `Systems` should be in accent-blue
- Sub-headline (body text, muted color): `From 70-person internal operations platforms to 24/7 automated data pipelines — we engineer the infrastructure that companies scale on.`
- Two CTAs stacked horizontally:
  - Primary: `Start a Project →` (filled accent-blue button)
  - Secondary: `View Our Work` (outlined, white border)
- Below CTAs: small trust line in muted text: `Enterprise-grade. Production-ready. Zero silent failures.`

**Right side visual:**
A stylized dark "terminal/system diagram" card. Design it as a mock system architecture visualization showing nodes connected with lines — like a simplified version of: Upload → Dedupe → Filter → Validate → Categorize. Use SVG or CSS to draw this. Nodes as small squares with labels in JetBrains Mono. Connection lines. Animated pulse dots moving along the lines. This represents "we built the pipeline."

### 1.3 — Stats Bar
Horizontal bar below hero, slightly elevated background. 4 stats:
- `70+` — Team Members on Delivered System
- `Millions` — Records Processed Daily
- `24/7` — Automated Cloud Processing  
- `6` — Role-Based Dashboard Modules

Each stat: large number in Syne Bold accent-blue, description in small muted DM Sans. Separated by vertical divider lines.

### 1.4 — Featured Work Section
Label: `< Our Work />`  
Heading: `Systems We've Shipped`  
Sub: `Every project is a production system running in a real business, not a portfolio demo.`

Two large project cards side by side (stack on mobile):

**Card 1: Team Management System**
- Tag: `Internal Operations` (accent-teal badge)
- Title: `70-Person Enterprise Operations Platform`
- Description: `A complete internal management system that automated attendance, HR, project lifecycle, salary, approvals, and real-time team communication for a 70-member company. The client said it freed them entirely from manual operations.`
- Tech chips: `Next.js 15` `React 19` `Supabase` `PostgreSQL` `Recharts` `Tailwind`
- Metric callout: `6 role-based dashboards · 35+ pages · 30+ features`
- CTA: `View Case Study →`
- Card visual: a dark mockup showing multiple dashboard tabs/sidebar

**Card 2: Centralized Email Pipeline**  
- Tag: `Data Automation` (accent-blue badge)
- Title: `High-Throughput Email Processing & Validation Platform`
- Description: `Replaced an entire team's manual multi-day workflow with a 24/7 autonomous cloud pipeline. Processes millions of records daily across deduplication, global rule filtering, parallel API validation, and automatic classification.`
- Tech chips: `Next.js` `Express.js` `BullMQ` `Redis` `PostgreSQL` `Socket.IO` `PM2`
- Metric callout: `Millions of emails/day · Multi-worker parallel · Self-healing`
- CTA: `View Case Study →`

### 1.5 — Products Section
Label: `< Our Products />`  
Heading: `We Build for Clients. We Also Build for Ourselves.`  
Sub: `GrowZen is our flagship product — a complete internal business management platform engineered by Zyndrex.`

Large featured product card (full width, split layout):
- Left: Product info
  - Badge: `Zyndrex Product`
  - Title: `GrowZen Application`
  - Description: `An enterprise-grade internal operations platform built for growing companies. Manages projects, teams, HR, attendance, salary, approvals, and analytics — all in one unified system with role-based access for every level of your organization.`
  - Feature pills: `6 User Roles` `Real-Time Chat` `HR Suite` `PDF Reports` `Attendance Tracking` `Analytics`
  - CTA: `Learn More About GrowZen →`
- Right: Dark mockup card showing a dashboard layout (stylized, not a real screenshot — use CSS boxes/shapes to suggest a dashboard UI)

### 1.6 — How We Work Section
Label: `< Our Process />`  
Heading: `How We Approach Every System`

5 steps in a horizontal timeline (vertical on mobile):
1. **Discovery** — We map your operations, data flows, and role structure before writing a line of code
2. **Architecture** — Database schema, queue design, API contracts, and access control — designed for scale
3. **Build** — Iterative delivery with real working features, not mockups. You see progress weekly.
4. **Deploy** — Cloud-hosted, PM2-managed, Nginx-proxied, monitored from day one
5. **Support** — Self-healing workers, queue watchers, error tracking, and ongoing reliability

Each step: number (accent-blue, large Syne), title (bold), description (muted DM Sans). Connected by a thin horizontal line between steps.

### 1.7 — Services Quick View
Label: `< What We Build />`  
Heading: `Engagements We Take On`

4 service cards in a 2x2 grid:
1. **Internal Operations Systems** — Role-based dashboards, HR, attendance, project management, approval workflows
2. **Data Pipeline Automation** — Multi-stage ingest, deduplicate, filter, validate, classify — running 24/7
3. **SaaS Product Development** — Full product from auth to billing to multi-tenant role management
4. **API & Integration Systems** — Connect tools with queue workers, rate-controlled APIs, real-time sync

Each card: icon (Lucide), title, 2-line description, subtle hover border glow.

CTA below grid: `See All Services →`

### 1.8 — Contact CTA Banner
Full-width dark section with a faint grid texture. Centered.
- Heading: `Have a Complex Problem?`
- Sub: `We've automated pipelines, freed operations teams, and shipped systems for companies from 5 to 70+ people. Tell us what you're building.`
- CTA: `Book a Discovery Call` (large accent-blue button)

### 1.9 — Footer
- Logo + tagline left
- Navigation columns: Work, Products, Services, Company
- Bottom bar: `© 2026 Zyndrex Developers` | `hello@zyndrex.com`
- Small note: `Built by Zyndrex. Powered by Next.js + Supabase.`

---

## PAGE 2: WORK ( /work )

### Case Studies List
Header: `< Our Work />`  
Heading: `Systems Built. Problems Solved.`

Two case study cards (larger, full-width cards in a list):

Each card has:
- Industry tag + project type tag
- Title + one-line outcome
- 3-line description
- Tech stack chips
- Key metrics as small stat pills
- `View Case Study →` button

### Case Study: Team Management System
Full page view when clicked.

**Header:**
- Project type badge: `Internal Operations System`
- Title: `70-Person Enterprise Operations Platform`
- Outcome callout: `"You have freed us after creating this project." — Company Owner`

**Sections:**

**The Challenge**
A 70-person estimation company was running their entire operations manually. Attendance tracked on paper. Projects managed in spreadsheets. HR records scattered. Salary calculations done manually every month. Engineers submitted quotes via email. Team leaders had no visibility into their team's performance. Everything required human coordination at every step — and it was breaking under the scale of 70 people.

**What We Built**
6 fully isolated role-based dashboards, each scoped to exactly what that role needs:
- Display each dashboard as a labeled row: Role | Dashboard Path | Key Capabilities
  - Employee | /dashboard | CRM, projects, attendance, chat, history, notifications
  - Team Leader | /dashboard + team | All employee features + team management, analytics, CSV export
  - Team Manager | /admin | Employee oversight, performance analytics, team creation
  - Company Admin | /dashboard/company-admin | Master analytics, price control, full project oversight
  - Engineer | /dashboard/engineering | Technical quoting, read-only CRM, project completion
  - HR Admin | /dashboard/hr | Salary, contracts, increments, department management

**System Scale**
Stat grid: `6 Dashboards` · `35+ Pages` · `30+ Features` · `8+ Real-Time Features` · `5 PDF Report Types` · `15+ Automation Points`

**Tech Stack**
Visual chip grid: Next.js 15.1.3 · React 19 · Supabase Auth · Supabase PostgreSQL (RLS) · Supabase Realtime · Supabase Storage · ShadCN UI · Tailwind CSS · Recharts · Vercel

**The Impact**
Dark callout box: `The company owner stated that the system "freed" them after delivery. What previously required constant manual coordination across HR, operations, and project management now runs autonomously — with every team member operating from a dashboard built precisely for their role.`

---

### Case Study: Email Processing Pipeline

**Header:**
- Badge: `Data Pipeline Automation`
- Title: `Centralized Email Processing & Validation Platform`
- Outcome callout: `Replaced a team's entire manual multi-day workflow with 24/7 autonomous cloud processing`

**The Challenge**
A company with a large outbound email operation had a team of people manually handling the entire data pipeline. Every batch of emails had to be manually deduplicated, filtered through rule lists, repaired for formatting issues, validated for deliverability, categorized as personal or business, and then distributed to individual employees. This took days of work per batch, required multiple team members, and still resulted in errors and duplicate records. They needed it to run itself.

**The Pipeline We Built**
Show as a visual flow diagram (CSS/SVG):

```
[ CSV Upload ] → [ Deduplication ] → [ Global Rule Filtering ] → [ API Validation ] → [ Classification ] → [ FreePool Distribution ]
```

Each node: name + 2-line description below
- **Upload:** CSV ingestion, batch metadata creation, staging table storage. No validation starts until full ingestion completes.
- **Deduplication:** Email normalization, global uniqueness enforcement at DB level. One email = one master record.
- **Filtering:** Rules evaluated in priority order (Global → Team → Employee → Unsubscribe). Each rejection logged with explicit reason.
- **Validation:** Distributed across multiple BullMQ workers, each bound to a dedicated Ninja API key. Rate-controlled. No burst traffic. Results: Valid / Invalid / Catch-All / Unknown
- **Classification:** Emails classified as Personal or Business based on domain intelligence
- **Distribution:** FreePool model — employees claim work based on daily limits and priority rules. Full traceability from Collector to Employee.

**Architecture Highlights**
4 dark cards:
1. **Multi-Worker Parallelism** — Independent workers with round-robin job assignment. Add or remove workers without downtime.
2. **Self-Healing Queue Watcher** — Detects stalled jobs, crashed workers, and missing results. Requeues safely every 60 seconds. Zero duplication guaranteed.
3. **Real-Time Monitoring** — Admins see live: batch progress, worker health, Redis latency, DB latency, memory usage, queue backlog — all via Socket.IO.
4. **Rate-Controlled Throughput** — `ninjaDelayMs = NINJA_INTERVAL / NINJA_RATE_LIMIT` — smooth request distribution, zero API throttling.

**Tech Stack**
Visual chips: Next.js · Express.js · PostgreSQL · Redis (ioredis) · BullMQ · Socket.IO · Supabase · Nginx · PM2 · Ninja API · Vercel (Frontend) · Contabo VPS (Backend)

**Scale & Guarantees**
Stats: `Millions of records/day` · `24/7 autonomous operation` · `ACID compliance (PostgreSQL)` · `Zero silent data loss` · `Self-healing workers`

---

## PAGE 3: PRODUCTS ( /products )

Header: `< Our Products />`  
Intro: `We don't just build for clients. We build products we believe in and operate ourselves. This is what makes Zyndrex different from an agency.`

### GrowZen — Featured Product

Large split card:
- Badge: `Zyndrex Built Product`
- Name: `GrowZen Application`
- Tagline: `The Internal Operating System for Growing Companies`
- Description: `GrowZen is a complete internal business management platform engineered by Zyndrex. Built for companies from 10 to 100+ people who need structured operations without enterprise software complexity. One platform. Every role. Full visibility.`

**6-Role System:**
Table or card grid showing each role:
| Role | Dashboard | Purpose |
|---|---|---|
| Employee | /dashboard | Day-to-day CRM, projects, attendance, chat |
| Team Leader | /dashboard + team | Team management, performance analytics |
| Team Manager | /admin | Employee management, performance tracking |
| Company Admin | /dashboard/company-admin | Master control, analytics, pricing |
| Engineer | /dashboard/engineering | Technical quoting, project completion |
| HR Admin | /dashboard/hr | Salary, contracts, org management |

**Key Features Grid (2x3):**
- Project Lifecycle Management
- Multi-Level Approval Workflow
- HR Suite (Salary, Contracts, Increments)
- Real-Time Team Chat (per project)
- Attendance Tracking & Reports
- Dynamic Pricing Control

**Tech Stack:**
Next.js 15 · React 19 · Supabase Auth + DB + Realtime + Storage · ShadCN UI · Tailwind CSS · Recharts · Vercel

CTA: `Request a GrowZen Demo` (primary button) + `Visit GrowZen` (secondary, links to https://grow-zen-site.vercel.app)

---

## PAGE 4: SERVICES ( /services )

Header: `< Services />`  
Heading: `What We Engineer`  
Sub: `We don't build websites. We build the systems that power how businesses operate.`

### Service Cards (full-width, stacked):

**1. Internal Operations Systems**
- Icon: LayoutDashboard (Lucide)
- Tagline: `When your team outgrows spreadsheets`
- Description: We architect role-based internal platforms — attendance systems, project management, HR suites, approval workflows, and real-time reporting dashboards. Each role sees exactly what they need. Nothing more.
- Typical engagement: 6–16 weeks
- Built with: Next.js, Supabase, PostgreSQL, Tailwind, Recharts
- Reference: `→ See: 70-Person Operations Platform`

**2. Data Pipeline Automation**
- Icon: GitBranch (Lucide)
- Tagline: `When manual processing is breaking your team`
- Description: We design and deploy multi-stage data pipelines — ingest, deduplicate, validate, classify, distribute. Queue-based workers run 24/7. Self-healing mechanisms catch failures before they become problems. Your team stops doing the work the computer should do.
- Typical engagement: 8–20 weeks
- Built with: Express.js, BullMQ, Redis, PostgreSQL, Socket.IO, PM2, Nginx
- Reference: `→ See: Centralized Email Pipeline`

**3. SaaS Product Development**
- Icon: Package (Lucide)
- Tagline: `When you have a product idea that needs to become real`
- Description: We take a SaaS concept from architecture to production — multi-role auth, subscription billing, feature gating, usage analytics, admin controls. We've done it for clients and for ourselves (GrowZen).
- Typical engagement: 12–24 weeks
- Built with: Next.js, Supabase, Stripe (billing), TypeScript, Vercel

**4. API & Integration Systems**
- Icon: Zap (Lucide)
- Tagline: `When your tools don't talk to each other`
- Description: We connect systems. Third-party API integration with rate limiting, retry logic, queue-based workers, and real-time sync. If it can be automated with an API, we build the bridge.
- Typical engagement: 3–8 weeks

**5. Enterprise Auth & Role Architecture**
- Icon: Shield (Lucide)
- Tagline: `When access control is the problem`
- Description: Supabase Auth, Row Level Security, JWT validation, role-scoped data visibility. We design RBAC systems where each role sees exactly what it should — nothing bleeds across boundaries.

### How Engagements Work

3-step card strip:
1. **Discovery Call (Free)** — 30 minutes. We understand your problem. You understand how we think.
2. **Architecture Proposal** — We deliver a written technical proposal: scope, stack, timeline, cost. No vague estimates.
3. **Build & Deliver** — Weekly progress. Real working software. Full handover with documentation.

CTA: `Book Your Discovery Call →`

---

## PAGE 5: ABOUT ( /about )

Header: `< About />`  
Heading: `An Engineering Studio. Not an Agency.`

**Studio Story:**
Zyndrex Developers was built to solve enterprise operational problems that off-the-shelf software can't handle. Most software tools are built for the average use case. Our clients have specific workflows, specific role structures, and specific data challenges that generic SaaS can't accommodate.

We built GrowZen because we needed something that didn't exist. We built the email pipeline because a real business was drowning in manual work. We approach every project as a systems design problem — not a development task.

**Philosophy Section (4 dark cards):**
1. **Zero Silent Failures** — Every job tracked, every failure logged, every edge case handled explicitly. If something breaks, the system tells you.
2. **Role-Based Clarity** — Every user sees exactly what their role requires. Data isolation is not an afterthought — it's architecture.
3. **Self-Healing First** — Queue watchers, retry logic, heartbeat monitoring. Systems should recover from failures automatically.
4. **We Are Operators** — We run our own products on our own infrastructure. We know what "production" really means.

**Stack We Trust:**
Visual chip grid of all technologies used across projects.

**CTA:**
`Ready to work with us? → Start a Project`

---

## PAGE 6: CONTACT ( /contact )

Header: `< Contact />`  
Heading: `Start a Project`  
Sub: `Tell us about your problem. We'll tell you how we'd solve it.`

**Left column — Form:**
Build a form (no HTML `<form>` tag — use React state + onClick):
- Full Name (text input)
- Company Name (text input)  
- Email Address (email input)
- What are you building? (textarea, min 4 rows)
- Approximate budget range (select: Under $5k / $5k–$15k / $15k–$50k / $50k+ / Not Sure)
- Rough timeline (select: ASAP / 1–3 months / 3–6 months / Flexible)
- Submit button: `Send Inquiry →`

Form inputs: dark background `--bg-elevated`, 1px border `--border`, text `--text-primary`, focus border `--accent-blue`. Fully styled, consistent with design system.

On submit: show success state with a check icon and message: `We'll be in touch within 24 hours.`

**Right column — Info:**
- `hello@zyndrex.com`
- `Response within 24 hours`
- Divider
- Section: `What to Expect`
  1. We review your inquiry and do a quick technical assessment
  2. We schedule a 30-minute discovery call
  3. We deliver a written proposal: scope, stack, timeline, estimate
  4. You decide — no pressure, no retainer required to get a proposal

---

## TECHNICAL IMPLEMENTATION NOTES

### Component Architecture
```
App
├── Navbar
├── Pages (toggled via React state, not actual routing)
│   ├── HomePage
│   ├── WorkPage
│   │   ├── WorkListView
│   │   ├── TeamManagementCaseStudy
│   │   └── EmailPipelineCaseStudy
│   ├── ProductsPage
│   ├── ServicesPage
│   ├── AboutPage
│   └── ContactPage
└── Footer
```

### State Management
```javascript
const [currentPage, setCurrentPage] = useState('home');
const [caseStudy, setCaseStudy] = useState(null); // 'team' | 'email'
```

Navigation calls `setCurrentPage('work')` etc. Case study "View" buttons call `setCaseStudy('team')` and navigate to work page.

### Google Fonts Import
Add this at the top of the component or via a style tag:
```javascript
const fontLink = document.createElement('link');
fontLink.href = 'https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:wght@300;400;500&family=JetBrains+Mono:wght@400;500&display=swap';
fontLink.rel = 'stylesheet';
document.head.appendChild(fontLink);
```

### Scroll Animation Pattern
Use IntersectionObserver on section refs:
```javascript
useEffect(() => {
  const observer = new IntersectionObserver(
    (entries) => entries.forEach(e => {
      if (e.isIntersecting) e.target.classList.add('visible');
    }),
    { threshold: 0.1 }
  );
  document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));
  return () => observer.disconnect();
}, [currentPage]);
```

CSS:
```css
.animate-on-scroll { opacity: 0; transform: translateY(32px); transition: opacity 0.6s ease, transform 0.6s ease; }
.animate-on-scroll.visible { opacity: 1; transform: translateY(0); }
```

### Grid Background (Hero)
```css
.hero-grid {
  background-image: 
    linear-gradient(rgba(45,125,250,0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(45,125,250,0.03) 1px, transparent 1px);
  background-size: 60px 60px;
}
```

### Tech Stack Chip Component
```jsx
const TechChip = ({ label }) => (
  <span style={{
    fontFamily: 'JetBrains Mono, monospace',
    fontSize: '11px',
    padding: '3px 10px',
    background: 'rgba(45,125,250,0.08)',
    border: '1px solid rgba(45,125,250,0.2)',
    borderRadius: '4px',
    color: '#94A3C4',
    display: 'inline-block',
    margin: '3px'
  }}>
    {label}
  </span>
);
```

### Animated Hero Pipeline Diagram (Right Side)
Build as SVG inside JSX. Nodes as `<rect>` with rounded corners, labels as `<text>`, connection lines as `<path>`. Animated dots as `<circle>` with CSS `animationDuration` staggered. Colors from design system.

Nodes: UPLOAD → DEDUPE → FILTER → VALIDATE → DISTRIBUTE  
Orientation: Vertical stack with connecting animated dots flowing downward.

---

## COPY RULES

1. Never use: "passionate", "synergy", "solutions", "results-driven", "industry-leading"
2. Always lead with outcome: `"Freed a 70-person company"` not `"Built an internal dashboard"`
3. Technical specificity builds trust: name real technologies, real numbers, real scale
4. Short paragraphs — max 3 sentences before a visual break
5. Use second person when addressing visitors: `"Your team"`, `"Your pipeline"`, `"You need"`

---

## QUALITY BAR

The final output should feel like it was designed by a senior designer at a Y Combinator-backed developer tools company. It should feel like something a CTO would trust enough to hire immediately. It should NOT feel like a template, a WordPress theme, or an AI-generated portfolio.

Every pixel should be intentional. Every word should earn its place. The system diagram in the hero and the pipeline flow in the case study should alone be enough to communicate: these people build serious systems.

---

## OUTPUT FORMAT

Produce a single `.jsx` React file with:
- All components defined in the same file
- All styles via Tailwind classes + inline styles where needed
- All content hard-coded (no external data fetching)
- Default export of the main `App` component
- All 6 pages navigable from the navbar
- Both case studies viewable from the Work page
- Fully responsive (mobile, tablet, desktop)
- All animations implemented

Make it extraordinary. This website represents a studio that builds systems that run real businesses. The website itself should prove that claim.