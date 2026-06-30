import { useState, type ReactNode } from "react";
import {
  ArrowUpRight,
  Award,
  BarChart3,
  Briefcase,
  GitBranch,
  Github,
  GraduationCap,
  HeartHandshake,
  LineChart,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Search,
  Users,
} from "lucide-react";
import portrait from "./assets/portrait.jpg";

type TabKey = "about" | "background" | "projects" | "contact";

const TABS: { key: TabKey; label: string }[] = [
  { key: "about", label: "About" },
  { key: "background", label: "Background" },
  { key: "projects", label: "Projects" },
  { key: "contact", label: "Contact" },
];

export default function App() {
  const [tab, setTab] = useState<TabKey>("about");

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="mx-auto grid max-w-7xl gap-6 px-4 py-8 lg:grid-cols-[360px_1fr] lg:px-8 lg:py-12">
        <Sidebar />
        <main className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)] lg:p-10">
          <Tabs current={tab} onChange={setTab} />
          <div className="mt-10">
            {tab === "about" && <About />}
            {tab === "background" && <Background />}
            {tab === "projects" && <Projects />}
            {tab === "contact" && <Contact />}
          </div>
        </main>
      </div>
    </div>
  );
}

function Sidebar() {
  return (
    <aside className="h-fit rounded-2xl border border-border bg-card p-8 shadow-[var(--shadow-card)] lg:sticky lg:top-8">
      <div className="flex flex-col items-center text-center">
        <div className="rounded-full p-[3px]" style={{ background: "var(--gradient-brand)" }}>
          <img
            src={portrait}
            alt="Portrait"
            width={160}
            height={160}
            className="h-40 w-40 rounded-full object-cover"
          />
        </div>
        <h1 className="mt-5 text-xl font-bold tracking-wide">Venkat Mandarapu</h1>
        <span className="mt-3 rounded-md bg-secondary px-3 py-1 text-xs text-secondary-foreground">
          Analytics Professional
        </span>
      </div>
      <div className="my-6 h-px bg-border" />
      <ul className="space-y-4 text-sm">
        <InfoRow icon={<Mail className="h-4 w-4" />} label="EMAIL" value="hello@example.com" />
        <InfoRow icon={<Phone className="h-4 w-4" />} label="PHONE" value="+1 (555) 000-0000" />
        <InfoRow icon={<MapPin className="h-4 w-4" />} label="LOCATION" value="City, Country" />
      </ul>
      <div className="my-6 h-px bg-border" />
      <div className="flex justify-center gap-3">
        <SocialButton href="#" label="GitHub">
          <Github className="h-4 w-4" />
        </SocialButton>
        <SocialButton href="#" label="LinkedIn">
          <Linkedin className="h-4 w-4" />
        </SocialButton>
        <SocialButton href="mailto:hello@example.com" label="Email">
          <Mail className="h-4 w-4" />
        </SocialButton>
      </div>
    </aside>
  );
}

function InfoRow({ icon, label, value }: { icon: ReactNode; label: string; value: string }) {
  return (
    <li className="flex items-center gap-3">
      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-secondary text-primary">
        {icon}
      </div>
      <div className="text-left">
        <p className="text-[10px] font-semibold tracking-widest text-muted-foreground">{label}</p>
        <p className="text-sm text-foreground">{value}</p>
      </div>
    </li>
  );
}

function SocialButton({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      className="flex h-9 w-9 items-center justify-center rounded-lg bg-secondary text-muted-foreground transition hover:text-primary"
    >
      {children}
    </a>
  );
}

function Tabs({ current, onChange }: { current: TabKey; onChange: (tab: TabKey) => void }) {
  return (
    <nav className="flex flex-wrap justify-end gap-2" aria-label="Portfolio sections">
      {TABS.map((item) => {
        const isActive = current === item.key;

        return (
          <button
            key={item.key}
            type="button"
            aria-pressed={isActive}
            onClick={() => onChange(item.key)}
            className={`rounded-lg px-5 py-2 text-sm font-medium transition ${
              isActive
                ? "text-primary-foreground shadow-[var(--shadow-card)]"
                : "bg-secondary text-foreground/80 hover:text-foreground"
            }`}
            style={isActive ? { background: "var(--gradient-brand)" } : undefined}
          >
            {item.label}
          </button>
        );
      })}
    </nav>
  );
}

function SectionTitle({ children }: { children: ReactNode }) {
  return (
    <div className="mb-8">
      <h2 className="text-3xl font-bold">{children}</h2>
      <div className="mt-2 h-1 w-14 rounded-full" style={{ background: "var(--gradient-brand)" }} />
    </div>
  );
}

function About() {
  const services = [
    {
      icon: <BarChart3 className="h-5 w-5" />,
      title: "Business Analysis",
      description:
        "Translating complex business needs into actionable requirements and data-driven strategies.",
    },
    {
      icon: <Users className="h-5 w-5" />,
      title: "Stakeholder Management",
      description:
        "Bridging technical teams and business leadership to align on priorities and outcomes.",
    },
    {
      icon: <GitBranch className="h-5 w-5" />,
      title: "Requirements & Process Mapping",
      description:
        "Documenting end-to-end processes and translating them into clear, implementable requirements.",
    },
    {
      icon: <Search className="h-5 w-5" />,
      title: "Gap Analysis & Problem Solving",
      description:
        "Identifying inefficiencies, conducting root cause analysis, and recommending targeted solutions.",
    },
    {
      icon: <LineChart className="h-5 w-5" />,
      title: "Dashboards & Reporting",
      description:
        "Turning business data into clear dashboards and reports that support decision-making.",
    },
    {
      icon: <HeartHandshake className="h-5 w-5" />,
      title: "Leadership & Community",
      description:
        "Mentoring teammates and giving back through volunteer work and community initiatives.",
    },
  ];

  return (
    <section>
      <SectionTitle>About Me</SectionTitle>
      <div className="space-y-5 text-[15px] leading-relaxed text-muted-foreground">
        <p>
          Hi — I&apos;m an analytics professional who believes curiosity is the most underrated
          skill in business.
        </p>
        <p>
          I&apos;ve spent the last several years moving across industries — technology, consulting,
          logistics, financial services, and operations — and every team I&apos;ve worked with has
          had the same underlying problem: too much data, not enough clarity.
        </p>
        <p>
          That&apos;s where I come in. I translate messy business questions into structured
          analysis, clear requirements, and dashboards leaders actually use. Add this is a
          placeholder bio you can rewrite to match your story.
        </p>
      </div>

      <h3 className="mt-12 text-xl font-semibold">What I&apos;m Doing</h3>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {services.map((service) => (
          <div
            key={service.title}
            className="rounded-xl border border-border bg-secondary/40 p-5 transition hover:border-primary/40"
          >
            <div className="flex items-start gap-4">
              <div
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-primary-foreground"
                style={{ background: "var(--gradient-brand)" }}
              >
                {service.icon}
              </div>
              <div>
                <h4 className="font-semibold">{service.title}</h4>
                <p className="mt-1 text-sm text-muted-foreground">{service.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Background() {
  const experience = [
    {
      role: "Senior Business Analyst",
      organization: "Company A · Remote",
      period: "2023 — Present",
      details: [
        "Built KPI dashboards that gave leadership real-time portfolio visibility.",
        "Used SQL to validate and transform data, improving reporting accuracy.",
        "Automated recurring reports, reducing manual effort across the team.",
      ],
    },
    {
      role: "Business Operations Analyst",
      organization: "Company B",
      period: "2022 — 2023",
      details: [
        "Conducted gap analysis on existing processes and recommended improvements.",
        "Partnered with cross-functional stakeholders on requirements and process flows.",
        "Built tracking dashboards that surfaced real-time operational metrics.",
      ],
    },
    {
      role: "Business Analyst II",
      organization: "Company C",
      period: "2021 — 2022",
      details: [
        "Led requirements gathering and translated business needs into specs.",
        "Recognized for consistent high-impact analyses and clear communication.",
        "Supported UAT and defect tracking through release cycles.",
      ],
    },
    {
      role: "Associate Business Analyst",
      organization: "Company D",
      period: "2021",
      details: [
        "Documented business requirements and built process flow diagrams.",
        "Performed data validation and supported reporting for product decisions.",
      ],
    },
  ];

  const capabilities = [
    {
      title: "Project & Implementation",
      items: [
        "Business Analysis",
        "Requirements & User Stories",
        "Stakeholder Coordination",
        "Agile & Scrum",
        "SDLC",
        "Process Mapping",
        "UAT & Defect Tracking",
        "Process Improvement",
      ],
    },
    {
      title: "Data & Analytics",
      items: [
        "Advanced Excel",
        "KPI & Performance Reporting",
        "Root Cause Analysis",
        "Power BI",
        "SQL",
        "Data Validation",
        "Financial Modeling",
        "Forecasting",
        "Python",
        "R",
      ],
    },
    {
      title: "Systems & Tools",
      items: [
        "Jira",
        "ServiceNow",
        "Oracle Cloud",
        "Power Automate",
        "SharePoint",
        "Microsoft 365",
        "Confluence",
        "AI Tools",
      ],
    },
  ];

  return (
    <section>
      <SectionTitle>Experience</SectionTitle>
      <ol className="relative space-y-6 border-l border-border pl-6">
        {experience.map((item) => (
          <li key={item.role} className="relative">
            <span
              className="absolute -left-[31px] mt-1 flex h-4 w-4 items-center justify-center rounded-full ring-4 ring-card"
              style={{ background: "var(--gradient-brand)" }}
            />
            <div className="rounded-xl border border-border bg-secondary/40 p-5">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h4 className="font-semibold">{item.role}</h4>
                <span className="text-xs text-muted-foreground">{item.period}</span>
              </div>
              <p className="mt-1 text-sm text-primary">{item.organization}</p>
              <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
                {item.details.map((detail) => (
                  <li key={detail} className="flex gap-2">
                    <span className="text-primary">•</span>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>

      <h3 className="mt-12 mb-6 text-2xl font-bold">Capabilities</h3>
      <div className="grid gap-4 md:grid-cols-3">
        {capabilities.map((capability) => (
          <div
            key={capability.title}
            className="rounded-xl border border-border bg-secondary/40 p-5"
          >
            <h4 className="mb-3 font-semibold text-primary">{capability.title}</h4>
            <ul className="flex flex-wrap gap-2">
              {capability.items.map((item) => (
                <li
                  key={item}
                  className="rounded-md bg-secondary px-2.5 py-1 text-xs text-muted-foreground"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <h3 className="mt-12 mb-6 text-2xl font-bold">Education & Certifications</h3>
      <div className="grid gap-4 md:grid-cols-2">
        <EducationCard
          icon={<GraduationCap className="h-5 w-5" />}
          title="Master's — Business Analytics"
          organization="University Name"
          meta="2024 — 2026"
          description="Operations Analytics, Financial Analytics, Data Mining, Database Management."
        />
        <EducationCard
          icon={<GraduationCap className="h-5 w-5" />}
          title="Bachelor's — Business Administration"
          organization="College Name"
          meta="2018 — 2021"
          description="Analytics, Statistics, Power BI, Supply Chain, Research Methods."
        />
        <EducationCard
          icon={<Award className="h-5 w-5" />}
          title="Professional Certifications"
          organization="Microsoft · Coursera · LinkedIn Learning"
          meta="2021 — Present"
          description="Excel, Power BI, SQL, Agile, Business Analysis foundations."
        />
        <EducationCard
          icon={<Briefcase className="h-5 w-5" />}
          title="Recognition"
          organization="Best Employee of the Year"
          meta="—"
          description="Awarded for high-impact analyses and stakeholder communication."
        />
      </div>
    </section>
  );
}

function EducationCard({
  icon,
  title,
  organization,
  meta,
  description,
}: {
  icon: ReactNode;
  title: string;
  organization: string;
  meta: string;
  description: string;
}) {
  return (
    <div className="rounded-xl border border-border bg-secondary/40 p-5">
      <div className="flex items-start gap-3">
        <div
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-primary-foreground"
          style={{ background: "var(--gradient-brand)" }}
        >
          {icon}
        </div>
        <div>
          <h4 className="font-semibold">{title}</h4>
          <p className="text-sm text-primary">{organization}</p>
          <p className="text-xs text-muted-foreground">{meta}</p>
          <p className="mt-2 text-sm text-muted-foreground">{description}</p>
        </div>
      </div>
    </div>
  );
}

function Projects() {
  const projects = [
    {
      tag: "Personal Project · Financial Services",
      title: "Bank Operations Analysis",
      description:
        "Analyzed loan data with SQL and built three interconnected Power BI dashboards tracking applications, funded amounts, repayment trends, and borrower risk — giving leadership a single source of truth for portfolio health.",
      metrics: [
        "Portfolio review: 2 days → same day",
        "↓ 35% risk identification time",
        "3 interconnected dashboards",
      ],
    },
    {
      tag: "Product Build",
      title: "EngineIQ",
      description:
        "Designed a Professional Services Automation platform with project tracking, resource allocation, timesheets, invoicing, and a real-time KPI dashboard, plus AI-powered proposal generation and risk alerts.",
      metrics: [
        "↑ 22% resource utilization visibility",
        "↓ 18% manual reporting effort",
        "AI risk alerts at 70/85/95% thresholds",
      ],
    },
    {
      tag: "Research · AI & Automation",
      title: "Clearstone — AI Automation Strategy",
      description:
        "Researched a mid-size consulting firm losing billable hours to manual reporting, then built a business case and dashboard proving AI could shift consultants from 13% to 62% strategic work.",
      metrics: [
        "£2.1M projected annual savings",
        "Reports: 18h → 90min",
        "47 stakeholder interviews",
      ],
    },
  ];

  return (
    <section>
      <SectionTitle>Case Studies</SectionTitle>
      <div className="space-y-5">
        {projects.map((project) => (
          <article
            key={project.title}
            className="group rounded-xl border border-border bg-secondary/40 p-6 transition hover:border-primary/40"
          >
            <p className="text-xs uppercase tracking-widest text-primary">{project.tag}</p>
            <h3 className="mt-2 text-xl font-bold">{project.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {project.description}
            </p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {project.metrics.map((metric) => (
                <li
                  key={metric}
                  className="rounded-md bg-secondary px-3 py-1.5 text-xs text-foreground/90"
                >
                  {metric}
                </li>
              ))}
            </ul>
            <a
              href="#"
              className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
            >
              Read more <ArrowUpRight className="h-4 w-4" />
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section>
      <SectionTitle>Let&apos;s Talk</SectionTitle>
      <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">
        &quot;Always open to new opportunities, interesting problems, and good conversations. If you
        think we&apos;d be a great fit — reach out, I&apos;d love to connect.&quot;
      </p>
      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        <a
          href="mailto:hello@example.com"
          className="flex items-center gap-4 rounded-xl border border-border bg-secondary/40 p-5 transition hover:border-primary/40"
        >
          <div
            className="flex h-11 w-11 items-center justify-center rounded-lg text-primary-foreground"
            style={{ background: "var(--gradient-brand)" }}
          >
            <Mail className="h-5 w-5" />
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest text-muted-foreground">Email</p>
            <p className="font-medium">hello@example.com</p>
          </div>
        </a>
        <a
          href="#"
          className="flex items-center gap-4 rounded-xl border border-border bg-secondary/40 p-5 transition hover:border-primary/40"
        >
          <div
            className="flex h-11 w-11 items-center justify-center rounded-lg text-primary-foreground"
            style={{ background: "var(--gradient-brand)" }}
          >
            <Linkedin className="h-5 w-5" />
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest text-muted-foreground">LinkedIn</p>
            <p className="font-medium">LinkedIn Profile</p>
          </div>
        </a>
      </div>
    </section>
  );
}
