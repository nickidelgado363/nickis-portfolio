import Image from "next/image";

const linkedInUrl = "https://www.linkedin.com/in/nickidelgado/";
const resumeUrl = "/Nicki-Delgado-Resume.pdf";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      
      {/* Top Nav */}
      <header className="sticky top-0 z-10 bg-background/80 backdrop-blur border-b border-secondary/20">
        <nav className="mx-auto max-w-5xl px-6 py-4 flex items-center justify-between">
          <a href="#top" className="font-semibold tracking-tight text-primary hover:text-secondary transition-colors">
            Nicki Delgado's Portfolio
          </a>
          <div className="flex gap-4 text-sm font-medium">
            <a className="hover:text-primary transition-colors" href="#about">About</a>
            <a className="hover:text-primary transition-colors" href="#education">Education</a>
            <a className="hover:text-primary transition-colors" href="#projects">Projects</a>
            <a className="hover:text-primary transition-colors" href="#experience">Experience</a>
            <a className="hover:text-primary transition-colors" href="#contact">Contact</a>
          </div>
        </nav>
      </header>

      <main id="top" className="mx-auto max-w-5xl px-6">
        {/* Hero */}
        <section className="py-14 grid grid-cols-1 md:grid-cols-[1fr_260px] gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-primary">
              Hi, nice to meet you
            </h1>
            <p className="mt-4 text-lg leading-relaxed opacity-90 text-foreground">
              I’m a Master of Technology Management (UCSB College of Engineering) student focused on
              turning consumer insight into creative, culturally relevant campaigns—backed by research,
              collaboration, and data-informed strategy.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={linkedInUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-medium border border-secondary/30 hover:bg-secondary/10 hover:text-secondary transition-colors text-foreground"
              >
                LinkedIn
              </a>

              {/* Resume Button */}
              <a
                href={resumeUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-medium bg-primary text-background hover:opacity-90 transition-opacity shadow-sm"
              >
                Resume (PDF)
              </a>

              <a
                href="#projects"
                className="inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-medium border border-secondary/30 hover:bg-secondary/10 hover:text-secondary transition-colors text-foreground"
              >
                View Projects
              </a>
            </div>
          </div>

          {/* Headshot */}
          <div className="flex md:justify-end">
            <div className="rounded-2xl border border-secondary/20 overflow-hidden shadow-sm w-[260px] h-[320px] bg-secondary/5 relative">
              <Image
                src="/nicki-headshot.jpg"
                alt="Nicki Delgado headshot"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="py-12 border-t border-secondary/20">
          <h2 className="text-2xl font-semibold tracking-tight text-secondary">About</h2>
          <p className="mt-4 leading-relaxed opacity-90 text-foreground">
            I am a SoCal native, specifically Los Angeles. I’ve spent 5 years studying by the beach at University of California, Santa Barbara. I've developed a love for studying and analyzing human behavior which led me to pursue my B.S in Psychology & Brain Science, which I completed in June of 2025. I studied human behavior, cognition, development, and social dynamics to understand how people think, learn, and interact in real world contexts. During my undergrad years, I became very interested in emerging technologies, how to strategically utilize them, and building with AI. I chose to spend another 9 months in sunny Santa Barbara to earn my Masters in Technology Management (expected graduation date: June 11th, 2026). It's here where I learned how to code, engineer with AI, practice entrepreneurial pursuits, exercise proper team leadership and building. My program has strengthened my ability to work with data across the full analytics lifecycle, from problem framing and data preparation to modeling, evaluation, and data storytelling, within a business context. For the next six months I am conducting market analysis and consulting for a MedTech startup based in Santa Monica, which is serving as my thesis for my Master’s program. 
            <br/><br/>
            Beyond academia, I enjoy reading and analysis literature from the 19th and 20th century. I spend my weekends cooking big family dinners, hunting for new psychological thrillers to watch, and finding new hiking trails hidden in the beautiful Santa Barbara mountains. Some of my other favorite hobbies include thrifting, upcycling clothing, and analyzing trend cycles within different cultures. 
            <br/><br/>
            Beauty, Fashion, Entertainment/Social Media and many other creative industries provide such rich data in how humans behave and interact with each other within their environment. I take joy in observing and understanding how it all blends. Beginning in July 2026, I’m seeking employment in the SoCal area.
          </p>
        </section>

        {/* Education */}
        <section id="education" className="py-12 border-t border-secondary/20">
          <h2 className="text-2xl font-semibold tracking-tight text-secondary">Education</h2>

          <div className="mt-6 grid gap-4">
            <Card
              title="University of California, Santa Barbara — College of Engineering"
              subtitle="Master of Technology Management (MTM) — Expected 2026"
              detail="Focus: technology strategy, product thinking, research, and execution."
            />
            <Card
              title="University of California, Santa Barbara"
              subtitle="B.S. Psychology & Brain Science — 2025"
              detail="Foundation in human behavior, cognition, and consumer insight."
            />
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="py-12 border-t border-secondary/20">
          <h2 className="text-2xl font-semibold tracking-tight text-secondary">Graduate Projects</h2>
          <p className="mt-3 opacity-80 text-foreground">
            A snapshot of projects completed during my MTM program.
          </p>

          <div className="mt-6 grid md:grid-cols-2 gap-4">
            <ProjectCard
              title="Field Project: KneeVoice Market Analysis"
              tags={["Product Strategy", "Research", "Go-to-Market"]}
              description="As part of a graduate consulting engagement, my team and I are advising KneeVoice Inc., a medical technology startup developing Audioarthrography™, a novel, non-invasive diagnostic technology for assessing knee cartilage health. The project supports KneeVoice as it prepares for FDA 510(k) clearance and transitions from clinical validation to commercial market entry."
              linkText="See Analysis"
              href="#"
            />
            <ProjectCard
              title="Shared AI Repository Tool"
              tags={["Competitive Analysis", "Market Sizing", "Positioning"]}
              description="Conducted a multi-week technical evaluation of Predis.AI, engineering the platform through structured prompt testing, Business vs. Ecommerce workflow comparisons, CSV product uploads, and URL-based extraction analysis . I intentionally stress-tested and “broke” the system to identify failure modes including hallucinated visuals, poor design hierarchy, integration limits, and brand safety risks. My failure analysis was recognized by my professor as the strongest in the class for depth and clarity. Through this project, I strengthened skills in AI prompt engineering, systems testing, failure mode analysis, platform troubleshooting, and translating generative AI performance into concrete business and risk insights."
              linkText="View Presentation"
              href="https://drive.google.com/file/d/1xSnoN1B35uPi2Koa-BzHHU0y7y9DN5Mr/view?usp=sharing"
            />
            <ProjectCard
              title="Bank Churner Data Set Analysis"
              tags={["Data", "Experimentation", "Storytelling"]}
              description="Short summary of the problem, what you built/analyzed, and the result/impact."
              linkText="View Data"
              href="#"
            />
            <ProjectCard
              title="Folica"
              tags={["Leadership", "Teams", "Execution"]}
              description="Folica is a B2B retail technology concept designed to improve the in-store hair-care shopping experience at retailers like Ulta and Target. As part of a four-person team, we conducted customer research, competitive analysis, and market modeling to validate the opportunity and design a Technology-as-a-Service business model. I led the front-end development and built a fully interactive website prototype using HTML, CSS, and JavaScript, simulating a tablet-based AI hair analysis booth. The prototype included a consent flow, camera-based scan simulation, AI-driven results, and personalized in-store product recommendations. This project demonstrates my ability to translate strategy and research into a functional, user-centered product experience."
              linkText="View Folica Prototype"
              href="https://folica.vercel.app"

            />
            <ProjectCard
              title="Venture Validator"
              tags={["System's Thinking", "Experimentation", "AI-Product trategy"]}
              description="Developed a Lean PRD App, an AI-powered web application built in Google AI Studio that helps early-stage entrepreneurs evaluate and refine venture ideas using a structured, VC-style framework . Working on a five-person team, I led the application build—designing the prompt architecture, engineering the structured JSON schema pipeline, implementing frontend state management, and developing the dynamic dashboard (Lean PRD, SWOT, GTM, and viability scoring visualizations). A teammate supported deployment and hosting, while I focused on core product functionality and AI integration. This project strengthened my skills in prompt engineering, API integration, full-stack prototyping, structured output validation, UX workflow design, and AI product strategy. It also required assessing model hallucination, scalability limits, and data privacy risks, reinforcing my ability to critically evaluate AI systems before deployment."
              linkText="View App Example"
              href="https://drive.google.com/file/d/1CLSRG_INXfIvFQX1pWGxuPwTHRV9YfD_/view?usp=sharing"
            />
            <ProjectCard
              title="Folica"
              tags={["Leadership", "Teams", "Execution"]}
              description="Short summary of the problem, what you built/analyzed, and the result/impact."
              linkText="View Project"
              href="https://folica.vercel.app"
              
            />
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className="py-12 border-t border-secondary/20">
          <h2 className="text-2xl font-semibold tracking-tight text-secondary">Experience</h2>

          <div className="mt-6 grid gap-4">
            <ExperienceCard
              role="Startup — Competitive Market Analysis"
              org="(Add startup name)"
              dates="(Add dates)"
              bullets={[
                "Conducted competitive landscape research to identify positioning opportunities and differentiation angles.",
                "Synthesized customer/audience insights into clear recommendations for strategy and messaging.",
                "Collaborated cross-functionally to translate research into actionable next steps.",
              ]}
            />

            <ExperienceCard
              role="Bartender & Cocktail Waitress"
              org="The Red Piano — Santa Barbara"
              dates="Apr 2025 – Present"
              bullets={[
                "Processed cover charges and managed cash/credit transactions with accuracy; supported accountability for weekly revenues (approx. $2k–$5.5k).",
                "Recommended and upsold specialty cocktails/premium beverages; contributed to improved revenue performance.",
                "Coordinated with bartenders/hosts/servers to maintain smooth service flow during peak hours.",
              ]}
            />

            <ExperienceCard
              role="Staff Assistant"
              org="Kait Hamilton State Farm Agency — Santa Barbara"
              dates="Jan 2023 – Oct 2023"
              bullets={[
                "Provided customer service on policy questions (coverage, changes, transfers, claims, billing).",
                "Built relationships and followed up routinely; supported retention improvements over a quarterly period.",
              ]}
            />
          </div>
        </section>

        {/* Skills */}
        <section className="py-12 border-t border-secondary/20">
          <h2 className="text-2xl font-semibold tracking-tight text-secondary">Skills</h2>
          <div className="mt-6 flex flex-wrap gap-2">
            {[
              "Microsoft Office (Excel, Word, PowerPoint)",
              "RStudio",
              "Trend analysis",
              "Strategic research",
              "Cross-team collaboration",
              "Customer engagement",
            ].map((s) => (
              <span
                key={s}
                className="rounded-full border border-secondary/30 px-3 py-1 text-sm text-foreground/80 hover:bg-secondary/5 transition-colors"
              >
                {s}
              </span>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-12 border-t border-secondary/20">
          <h2 className="text-2xl font-semibold tracking-tight text-secondary">Let's Connect</h2>
          <p className="mt-4 opacity-90 text-foreground">
            Email:{" "}
            <a className="underline hover:text-primary transition-colors" href="mailto:tyandelgado@gmail.com">
              tyandelgado@gmail.com
            </a>
          </p>
          <p className="mt-2 opacity-90 text-foreground">
            Location: Santa Barbara, CA
          </p>
          <div className="mt-4 flex gap-3">
            <a
              href={linkedInUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-medium border border-secondary/30 hover:bg-secondary/10 hover:text-secondary transition-colors text-foreground"
            >
              LinkedIn
            </a>
            <a
              href={resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-medium border border-secondary/30 hover:bg-secondary/10 hover:text-secondary transition-colors text-foreground"
            >
              Resume
            </a>
          </div>
        </section>

        <footer className="py-10 text-sm opacity-60 text-foreground">
          © {new Date().getFullYear()} Nicki Delgado
        </footer>
      </main>
    </div>
  );
}

// --- Subcomponents ---

function Card({
  title,
  subtitle,
  detail,
}: {
  title: string;
  subtitle: string;
  detail?: string;
}) {
  return (
    <div className="rounded-2xl border border-secondary/20 p-5 shadow-sm bg-white/50 hover:border-secondary/40 transition-colors">
      <div className="font-medium text-foreground">{title}</div>
      <div className="text-secondary font-medium mt-1">{subtitle}</div>
      {detail ? <div className="mt-2 text-sm opacity-80 text-foreground">{detail}</div> : null}
    </div>
  );
}

function ProjectCard({
  title,
  tags,
  description,
  linkText,
  href,
}: {
  title: string;
  tags: string[];
  description: string;
  linkText?: string;
  href?: string;
}) {
  return (
    <div className="rounded-2xl border border-secondary/20 p-5 shadow-sm bg-white/50 hover:border-secondary/40 transition-colors">
      <div className="flex items-start justify-between gap-3">
        <h3 className="font-semibold text-foreground">{title}</h3>
        {href && href !== "#" ? (
          <a className="text-sm underline text-secondary hover:text-primary transition-colors" href={href} target="_blank" rel="noreferrer">
            {linkText ?? "Link"}
          </a>
        ) : null}
      </div>

      <div className="mt-3 flex flex-wrap gap-2">
        {tags.map((t) => (
          <span key={t} className="rounded-full bg-secondary/10 px-3 py-1 text-xs text-secondary font-medium">
            {t}
          </span>
        ))}
      </div>

      <p className="mt-3 text-sm opacity-90 leading-relaxed text-foreground">{description}</p>
    </div>
  );
}

function ExperienceCard({
  role,
  org,
  dates,
  bullets,
}: {
  role: string;
  org: string;
  dates: string;
  bullets: string[];
}) {
  return (
    <div className="rounded-2xl border border-secondary/20 p-5 shadow-sm bg-white/50 hover:border-secondary/40 transition-colors">
      <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-1">
        <div>
          <div className="font-semibold text-foreground">{role}</div>
          <div className="text-secondary font-medium">{org}</div>
        </div>
        <div className="text-sm opacity-60 text-foreground">{dates}</div>
      </div>

      <ul className="mt-3 list-disc pl-5 text-sm opacity-90 space-y-1 text-foreground">
        {bullets.map((b, i) => (
          <li key={i}>{b}</li>
        ))}
      </ul>
    </div>
  );
}