import { useEffect, useState, type ReactNode } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Award,
  BarChart3,
  ChevronDown,
  ChevronUp,
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

const STATIC_3D_CARD =
  "border border-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.05),inset_0_-1px_0_rgba(0,0,0,0.25),0_16px_34px_rgba(0,0,0,0.28)]";

export default function App() {
  const [tab, setTab] = useState<TabKey>("about");
  const [displayedTab, setDisplayedTab] = useState<TabKey>("about");
  const [contentVisible, setContentVisible] = useState(true);

  useEffect(() => {
    if (tab === displayedTab) {
      return;
    }

    setContentVisible(false);

    const timeout = window.setTimeout(() => {
      setDisplayedTab(tab);

      requestAnimationFrame(() => {
        setContentVisible(true);
      });
    }, 180);

    return () => {
      window.clearTimeout(timeout);
    };
  }, [tab, displayedTab]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="mx-auto grid w-full max-w-7xl items-start gap-4 px-3 py-4 sm:gap-6 sm:px-5 sm:py-8 lg:grid-cols-[360px_minmax(0,1fr)] lg:px-8 lg:py-12">
        <Sidebar />

        <main
          className={`${STATIC_3D_CARD} min-w-0 rounded-2xl bg-card p-4 sm:p-6 lg:p-10 ${
            displayedTab === "contact" ? "h-fit self-start" : ""
          }`}
        >
          <Tabs current={tab} onChange={setTab} />

          <div
            className={`mt-8 transform-gpu transition-all duration-300 ease-out sm:mt-10 ${
              contentVisible
                ? "translate-y-0 opacity-100 blur-0"
                : "translate-y-2 opacity-0 blur-[2px]"
            }`}
          >
            {displayedTab === "about" && <About />}
            {displayedTab === "background" && <Background />}
            {displayedTab === "projects" && <Projects />}
            {displayedTab === "contact" && <Contact />}
          </div>
        </main>
      </div>
    </div>
  );
}

function Sidebar() {
  return (
    <aside
      className={`${STATIC_3D_CARD} h-fit rounded-2xl bg-card p-5 sm:p-8 lg:sticky lg:top-8`}
    >
      <div className="flex flex-col items-center text-center">
        <div
          className="rounded-full p-[3px]"
          style={{ background: "var(--gradient-brand)" }}
        >
          <img
            src={portrait}
            alt="Portrait"
            width={160}
            height={160}
            className="h-28 w-28 rounded-full object-cover sm:h-40 sm:w-40"
          />
        </div>

        <h1 className="mt-5 text-lg font-bold tracking-wide sm:text-xl">
          Venkat Mandarapu
        </h1>

        <span className="mt-2 inline-flex items-center rounded-[8px] border bg-[#1a202c] px-3 py-1 text-[13px] font-medium text-[#cfd6e4] sm:text-[15px]">
          Analytics Professional
        </span>
      </div>

      <div className="my-5 h-px bg-border sm:my-6" />

      <ul className="space-y-4 text-sm">
        <InfoRow
          icon={<Mail className="h-4 w-4" />}
          label="EMAIL"
          value="hello@example.com"
        />

        <InfoRow
          icon={<Phone className="h-4 w-4" />}
          label="PHONE"
          value="+1 (555) 000-0000"
        />

        <InfoRow
          icon={<MapPin className="h-4 w-4" />}
          label="LOCATION"
          value="City, Country"
        />
      </ul>

      <div className="my-5 h-px bg-border sm:my-6" />

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

function InfoRow({
  icon,
  label,
  value,
}: {
  icon: ReactNode;
  label: string;
  value: string;
}) {
  return (
    <li className="flex min-w-0 items-center gap-3">
      <div
        className="
          flex h-9 w-9 shrink-0 items-center justify-center rounded-lg
          bg-secondary text-primary
          transition-all duration-200 ease-out
          hover:-translate-y-0.5
          hover:bg-primary/15
          hover:shadow-[0_5px_16px_rgba(55,190,255,0.18)]
          hover:ring-1 hover:ring-primary/30
        "
      >
        {icon}
      </div>

      <div className="min-w-0 text-left">
        <p className="text-[10px] font-semibold tracking-widest text-muted-foreground">
          {label}
        </p>

        <p className="break-all text-sm text-foreground sm:break-normal">
          {value}
        </p>
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
      className="
        flex h-9 w-9 items-center justify-center rounded-lg
        bg-secondary text-muted-foreground
        transition-all duration-200 ease-out
        hover:-translate-y-0.5
        hover:bg-primary/15
        hover:text-primary
        hover:shadow-[0_5px_16px_rgba(55,190,255,0.18)]
        hover:ring-1 hover:ring-primary/30
      "
    >
      {children}
    </a>
  );
}

function Tabs({
  current,
  onChange,
}: {
  current: TabKey;
  onChange: (tab: TabKey) => void;
}) {
  const activeIndex = TABS.findIndex((item) => item.key === current);

  return (
    <div className="flex w-full justify-center sm:justify-end">
      <nav
        className="relative grid w-full grid-cols-4 overflow-hidden rounded-[18px] border border-border bg-background/40 p-1 sm:w-auto"
        aria-label="Portfolio sections"
      >
        <span
          aria-hidden="true"
          className="absolute bottom-1 left-1 top-1 rounded-lg bg-gradient-to-r from-[#6576ff] to-[#20c9df] shadow-[0_8px_20px_rgba(70,110,255,0.28)] transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]"
          style={{
            width: "calc((100% - 0.5rem) / 4)",
            transform: `translateX(${activeIndex * 100}%)`,
          }}
        />

        {TABS.map((item) => {
          const isActive = current === item.key;

          return (
            <button
              key={item.key}
              type="button"
              aria-pressed={isActive}
              onClick={() => onChange(item.key)}
              className={`relative z-10 min-w-0 rounded-[15px] px-1 py-2.5 text-[11px] font-medium transition-colors duration-300 sm:px-3 sm:text-sm ${
                isActive
                  ? "text-white"
                  : "text-foreground/80 hover:text-foreground"
              }`}
            >
              {item.label}
            </button>
          );
        })}
      </nav>
    </div>
  );
}

function SectionTitle({ children }: { children: ReactNode }) {
  return (
    <div className="mb-6 sm:mb-8">
      <h2 className="text-2xl font-bold sm:text-3xl">
        {children}
      </h2>

      <div
        className="mt-2 h-1 w-12 rounded-full sm:w-14"
        style={{ background: "var(--gradient-brand)" }}
      />
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

      <div className="space-y-4 text-sm leading-relaxed text-muted-foreground sm:space-y-5 sm:text-[15px]">
        <p>
          Hi — I&apos;m an analytics professional who believes curiosity is the
          most underrated skill in business.
        </p>

        <p>
          I&apos;ve spent the last several years moving across industries —
          technology, consulting, logistics, financial services, and operations
          — and every team I&apos;ve worked with has had the same underlying
          problem: too much data, not enough clarity.
        </p>

        <p>
          That&apos;s where I come in. I translate messy business questions into
          structured analysis, clear requirements, and dashboards leaders
          actually use. Add this is a placeholder bio you can rewrite to match
          your story.
        </p>
      </div>

      <h3 className="mt-10 text-lg font-semibold sm:mt-12 sm:text-xl">
        What I&apos;m Doing
      </h3>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {services.map((service) => (
          <div
            key={service.title}
            className={`${STATIC_3D_CARD} group relative overflow-hidden rounded-xl bg-secondary/40 p-4 sm:p-5`}
          >
            <div className="flex items-start gap-3 sm:gap-4">
              <div
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-primary-foreground"
                style={{ background: "var(--gradient-brand)" }}
              >
                {service.icon}
              </div>

              <div className="min-w-0">
                <h4 className="font-semibold">
                  {service.title}
                </h4>

                <p className="mt-1 text-sm leading-6 text-muted-foreground">
                  {service.description}
                </p>
              </div>
            </div>

            <span
              className="
                pointer-events-none absolute bottom-0 left-1/2
                h-[3px] w-0 -translate-x-1/2 rounded-full
                bg-gradient-to-r from-[#6576ff] to-[#20c9df]
                transition-all duration-300 ease-out
                group-hover:w-[70%]
              "
            />
          </div>
        ))}
      </div>
    </section>
  );
}

function Background() {
  const [expandedExperience, setExpandedExperience] = useState<number>(0);

  const toggleExperience = (index: number) => {
    setExpandedExperience((currentIndex) =>
      currentIndex === index ? -1 : index,
    );
  };

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

  const certifications = [
    "Microsoft Excel",
    "Google Program Management Professional",
    "AI for Everyone",
    "Microsoft Power BI PL-300 (In Progress)",
  ];

  return (
    <section>
      <SectionTitle>Experience</SectionTitle>

      <ol className="relative mt-6 sm:mt-8">
        <div className="absolute bottom-6 left-[11px] top-6 w-px bg-[#29313c] sm:bottom-7 sm:left-[14px] sm:top-7" />

        {experience.map((item, index) => {
          const isExpanded = expandedExperience === index;

          return (
            <li
              key={`${item.role}-${item.organization}`}
              className="relative pl-9 sm:pl-12"
            >
              <span
                className={`absolute left-0 top-5 z-10 flex h-6 w-6 items-center justify-center rounded-full sm:top-7 sm:h-7 sm:w-7 ${
                  isExpanded
                    ? "bg-gradient-to-br from-[#6576ff] to-[#35d2ff]"
                    : "border-2 border-[#39424d] bg-[#10151d]"
                }`}
              >
                {isExpanded && (
                  <span className="h-2.5 w-2.5 rounded-full bg-[#0b1018] sm:h-3 sm:w-3" />
                )}
              </span>

              <div className="border-b border-[#252d37]">
                <button
                  type="button"
                  onClick={() => toggleExperience(index)}
                  aria-expanded={isExpanded}
                  className="flex w-full flex-col items-start justify-between gap-3 py-5 text-left sm:flex-row sm:gap-6 sm:py-6"
                >
                  <div className="min-w-0">
                    <h4 className="text-base font-semibold leading-6 text-[#eef0f5] sm:text-[18px]">
                      {item.role}
                    </h4>

                    <p className="mt-1 text-sm leading-6 text-[#d0d2d8] sm:text-[16px]">
                      {item.organization}
                    </p>
                  </div>

                  <div className="flex w-full shrink-0 items-center justify-between gap-3 text-xs text-[#7f8ea5] sm:w-auto sm:justify-start sm:gap-4 sm:pt-1 sm:text-[15px]">
                    <span>{item.period}</span>

                    {isExpanded ? (
                      <ChevronUp className="h-4 w-4 text-[#d6dbe5]" />
                    ) : (
                      <ChevronDown className="h-4 w-4 text-[#d6dbe5]" />
                    )}
                  </div>
                </button>

                {isExpanded && (
                  <div className="border-t border-[#252d37] pb-6 pt-4 sm:pb-7 sm:pt-5">
                    <ul className="space-y-3">
                      {item.details.map((detail) => (
                        <li
                          key={detail}
                          className="flex items-start gap-3 text-sm leading-6 text-[#c8cbd2] sm:gap-4 sm:text-[15px]"
                        >
                          <span className="mt-[9px] h-[5px] w-[5px] shrink-0 rounded-full bg-[#8187ff]" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </li>
          );
        })}
      </ol>

      <div className="mt-10 mb-6 sm:mt-12 sm:mb-8">
        <h3 className="text-2xl font-bold sm:text-3xl">
          Capabilities
        </h3>

        <div
          className="mt-3 h-1 w-[50px] rounded-full"
          style={{ background: "var(--gradient-brand)" }}
        />
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-10">
        {capabilities.map((capability) => (
          <div key={capability.title} className="min-w-0">
            <h4 className="mb-2 bg-gradient-to-r from-[#7b82ff] to-[#35d2ff] bg-clip-text text-[12px] font-semibold uppercase tracking-[0.05em] text-transparent sm:text-[13px] sm:tracking-[0.08em] lg:whitespace-nowrap lg:text-[14px] lg:tracking-[0.1em]">
              {capability.title}
            </h4>

            <ul>
              {capability.items.map((item, index) => (
                <li
                  key={item}
                  className={`py-3 text-sm leading-6 text-foreground/85 transition-all duration-200 hover:pl-1 hover:text-primary sm:py-3 sm:text-[15px] ${
                    index !== capability.items.length - 1
                      ? "border-b border-white/10"
                      : ""
                  }`}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-10 mb-6 sm:mt-12">
        <h3 className="text-2xl font-bold sm:text-3xl">
          Education &amp; Certifications
        </h3>

        <div
          className="mt-3 h-1 w-[50px] rounded-full"
          style={{ background: "var(--gradient-brand)" }}
        />
      </div>

      <div className="grid items-stretch gap-4 lg:grid-cols-2">
        <div className="relative h-full rounded-xl border border-white/10 bg-secondary/40 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.04),0_14px_32px_rgba(0,0,0,0.24)] transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-primary/45 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.07),0_18px_38px_rgba(0,0,0,0.32),0_0_22px_rgba(55,190,255,0.08)] sm:p-5">
          <EducationItem
            icon={<GraduationCap className="h-5 w-5" />}
            title="Master's — Business Analytics"
            organization="Lewis University"
            meta="2024 — 2026 · CGPA 3.7 / 4.0"
            description="Operations Analytics, Financial Analytics, Supply Chain Analytics, Data Mining, and Database Management."
          />

          <div className="my-5 h-px bg-border sm:my-6" />

          <EducationItem
            icon={<GraduationCap className="h-5 w-5" />}
            title="Bachelor's in Business Administration — Business Analytics"
            organization="Parvathaneni Brahmayya Siddhartha College of Arts & Science"
            meta="2018 — 2021"
            description="Business Analytics, Python for Data Science, Power BI, Statistics, Financial Analytics, Supply Chain Analytics, and Research Methods."
          />
        </div>

        <CertificationCard certifications={certifications} />
      </div>
    </section>
  );
}

function EducationItem({
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
    <div className="flex min-w-0 items-start gap-3">
      <div
        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-primary-foreground"
        style={{ background: "var(--gradient-brand)" }}
      >
        {icon}
      </div>

      <div className="min-w-0">
        <h4 className="break-words text-sm font-semibold leading-5 sm:text-base">
          {title}
        </h4>

        <p className="mt-1 break-words text-[13px] text-primary sm:text-sm">
          {organization}
        </p>

        <p className="mt-[-1px] text-xs text-muted-foreground sm:text-[13px]">
          {meta}
        </p>

        <p className="mt-2 text-xs leading-5 text-muted-foreground sm:text-[13px]">
          {description}
        </p>
      </div>
    </div>
  );
}

function CertificationCard({
  certifications,
}: {
  certifications: string[];
}) {
  return (
    <div className="relative h-full rounded-xl border border-white/10 bg-secondary/40 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.04),0_14px_32px_rgba(0,0,0,0.24)] transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-primary/45 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.07),0_18px_38px_rgba(0,0,0,0.32),0_0_22px_rgba(55,190,255,0.08)] sm:p-5">
      <div className="flex items-center gap-3">
        <div
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-primary-foreground"
          style={{ background: "var(--gradient-brand)" }}
        >
          <Award className="h-5 w-5" />
        </div>

        <h4 className="text-sm font-semibold leading-5 sm:text-base">
          Professional Certifications
        </h4>
      </div>

      <ul className="mt-5 flex flex-col items-start gap-3">
        {certifications.map((certification) => (
          <li
            key={certification}
            className="
              w-fit max-w-full cursor-default whitespace-normal break-words
              rounded-full border border-border bg-secondary
              px-3 py-2 text-left text-xs text-muted-foreground
              transition-all duration-200 ease-out
              hover:-translate-y-0.5
              hover:border-primary/30
              hover:bg-primary/15
              hover:text-primary
              hover:shadow-[0_5px_16px_rgba(55,190,255,0.15)]
              sm:px-4 sm:text-sm
            "
          >
            {certification}
          </li>
        ))}
      </ul>
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

      <div className="space-y-4 sm:space-y-5">
        {projects.map((project) => (
          <article
            key={project.title}
            className={`${STATIC_3D_CARD} group rounded-xl bg-secondary/40 p-4 sm:p-6`}
          >
            <p className="text-[10px] uppercase tracking-widest text-primary sm:text-xs">
              {project.tag}
            </p>

            <h3 className="mt-2 text-lg font-bold sm:text-xl">
              {project.title}
            </h3>

            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {project.description}
            </p>

            <ul className="mt-4 flex flex-wrap gap-2">
              {project.metrics.map((metric) => (
                <li
                  key={metric}
                  className="
                    cursor-default rounded-md bg-secondary
                    px-2.5 py-1.5 text-[11px] text-foreground/90
                    transition-all duration-200 ease-out
                    hover:-translate-y-0.5
                    hover:bg-primary/15
                    hover:text-primary
                    hover:shadow-[0_5px_16px_rgba(55,190,255,0.15)]
                    hover:ring-1 hover:ring-primary/30
                    sm:px-3 sm:text-xs
                  "
                >
                  {metric}
                </li>
              ))}
            </ul>

            <a
              href="#"
              className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
            >
              Read more
              <ArrowUpRight className="h-4 w-4" />
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

      <p className="max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
        &quot;Always open to new opportunities, interesting problems, and good
        conversations. If you think we&apos;d be a great fit — reach out,
        I&apos;d love to connect.&quot;
      </p>

      <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
        <a
          href="mailto:hello@example.com"
          className="
            group inline-flex min-h-[48px] w-full items-center justify-center
            gap-2.5 rounded-xl px-4 py-3 text-sm font-semibold text-white
            shadow-[0_12px_26px_rgba(73,103,255,0.28)]
            transition-all duration-300 ease-out
            hover:-translate-y-0.5
            hover:shadow-[0_16px_32px_rgba(73,103,255,0.38)]
            sm:w-auto sm:px-5 sm:text-base
          "
          style={{
            background:
              "linear-gradient(90deg, #6576ff 0%, #35d2ff 100%)",
          }}
        >
          <Mail className="h-4 w-4 shrink-0" />

          <span className="break-all text-center sm:break-normal">
            hello@example.com
          </span>

          <ArrowRight className="h-4 w-4 shrink-0 transition-transform duration-300 group-hover:translate-x-1" />
        </a>

        <a
          href="#"
          className="
            inline-flex min-h-[48px] w-full items-center justify-center
            gap-2.5 rounded-xl border border-white/10 bg-white/[0.04]
            px-4 py-3 text-sm font-semibold text-foreground
            shadow-[inset_0_1px_0_rgba(255,255,255,0.04),0_10px_22px_rgba(0,0,0,0.22)]
            transition-all duration-300 ease-out
            hover:-translate-y-0.5
            hover:border-primary/35
            hover:bg-white/[0.07]
            sm:w-auto sm:px-5 sm:text-base
          "
        >
          <Linkedin className="h-4 w-4 shrink-0" />
          <span>LinkedIn Profile</span>
        </a>
      </div>
    </section>
  );
}