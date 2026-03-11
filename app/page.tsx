import Image from "next/image";
import ScrollExpandMedia from "@/components/ui/scroll-expansion-hero";
import { GlowingEffect } from "@/components/ui/glowing-effect";

const linkedInUrl = "https://www.linkedin.com/in/nickidelgado/";
const resumeUrl = "/Resume(MTM)1-Nicki.Delgado.pdf";

export default function Home() {
  return (
    <div className="relative bg-background text-foreground transition-colors duration-300">
      {/* Hero Header with ScrollExpandMedia */}
      <ScrollExpandMedia
        mediaType="image"
        mediaSrc="/nicki-sb.jpg"
        bgImageSrc="/nick-bg-2.jpg"
        title="Nicki Delgado"
        date="Technology Management Graduate Student"
        scrollToExpand="Scroll to Explore"
      >
  
      </ScrollExpandMedia>

      <main id="top" className="relative mx-auto max-w-5xl px-6">
  
        {/* About */}
        <section id="about" className=" border-t border-secondary/20">
          <h2 className="text-2xl font-semibold tracking-tight text-secondary">About</h2>
          <p className="mt-4 leading-relaxed opacity-90 text-foreground">
            I am a SoCal native, specifically Los Angeles. I've spent 5 years studying by the beach at University of California, Santa Barbara. I've developed a love for studying and analyzing human behavior which led me to pursue my B.S in Psychology & Brain Science, which I completed in June of 2025. I studied human behavior, cognition, development, and social dynamics to understand how people think, learn, and interact in real world contexts. During my undergrad years, I became very interested in emerging technologies, how to strategically utilize them, and building with AI. I chose to spend another 9 months in sunny Santa Barbara to earn my Masters in Technology Management (expected graduation date: June 11th, 2026). It's here where I learned how to code, engineer with AI, practice entrepreneurial pursuits, exercise proper team leadership and building. My program has strengthened my ability to work with data across the full analytics lifecycle, from problem framing and data preparation to modeling, evaluation, and data storytelling, within a business context. For the next six months I am conducting market analysis and consulting for a MedTech startup based in Santa Monica, which is serving as my thesis for my Master's program. 
            <br/><br/>
            Beyond academia, I enjoy reading and analysis literature from the 19th and 20th century. I spend my weekends cooking big family dinners, hunting for new psychological thrillers to watch, and finding new hiking trails hidden in the beautiful Santa Barbara mountains. Some of my other favorite hobbies include thrifting, upcycling clothing, and analyzing trend cycles within different cultures. 
            <br/><br/>
            Beauty, Fashion, Entertainment/Social Media and many other creative industries provide such rich data in how humans behave and interact with each other within their environment. I take joy in observing and understanding how it all blends. Beginning in July 2026, I'm seeking employment in the SoCal area.
          </p>
        </section>

        {/* Education */}
        <section id="education" className="py-12 border-t border-secondary/20">
          <h2 className="text-2xl font-semibold tracking-tight text-secondary">Education</h2>

          <div className="mt-6 grid gap-4">
            <div className="relative rounded-2xl">
              <GlowingEffect
                spread={40}
                glow={true}
                disabled={false}
                proximity={64}
                inactiveZone={0.01}
                borderWidth={2}
              />
              <Card
                title="University of California, Santa Barbara — College of Engineering"
                subtitle="Master of Technology Management (MTM) — Expected 2026"
                detail="Focus: Technology strategy, product thinking, research, and execution."
              />
            </div>
            <div className="relative rounded-2xl">
              <GlowingEffect
                spread={40}
                glow={true}
                disabled={false}
                proximity={64}
                inactiveZone={0.01}
                borderWidth={2}
              />
              <Card
                title="University of California, Santa Barbara — College of Letters & Science"
                subtitle="B.S. Psychology & Brain Science — 2025"
                detail="Foundation in human behavior, biological processes, and neuroscience."
              />
            </div>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="py-12 border-t border-secondary/20">
          <h2 className="text-2xl font-semibold tracking-tight text-secondary">Graduate Projects</h2>
          <p className="mt-3 opacity-80 text-foreground">
            A snapshot of projects completed during my MTM program.
          </p>
          <div className="mt-6 grid md:grid-cols-2 gap-4">
            <div className="relative rounded-2xl">
              <GlowingEffect
                spread={40}
                glow={true}
                disabled={false}
                proximity={64}
                inactiveZone={0.01}
                borderWidth={2}
              />
              <ProjectCard
                title="Field Project: KneeVoice Market Analysis"
                tags={["Product Strategy", "Research", "Go-to-Market"]}
                description="As part of a graduate consulting engagement, my team and I are advising KneeVoice Inc., a medical technology startup developing Audioarthrography™, a novel, non-invasive diagnostic technology for assessing knee cartilage health. The project supports KneeVoice as it prepares for FDA 510(k) clearance and transitions from clinical validation to commercial market entry. This project is ongoing and protected by an NDA, but I can share that my contributions include leading competitive and market landscape research to clarify positioning, customer segments, and differentiation opportunities."
                linkText="See Analysis"
                href="#"
              />
            </div>
            <div className="relative rounded-2xl">
              <GlowingEffect
                spread={40}
                glow={true}
                disabled={false}
                proximity={64}
                inactiveZone={0.01}
                borderWidth={2}
              />
              <ProjectCard
                title="Shared AI Repository Tool"
                tags={["Competitive Analysis", "Market Sizing", "Positioning"]}
                description="Conducted a multi-week technical evaluation of Predis.AI, engineering the platform through structured prompt testing, Business vs. Ecommerce workflow comparisons, CSV product uploads, and URL-based extraction analysis. I intentionally stress-tested and broke the system to identify failure modes including hallucinated visuals, poor design hierarchy, integration limits, and brand safety risks. My failure analysis was recognized by my professor as the strongest in the class for depth and clarity. Through this project, I strengthened skills in AI prompt engineering, systems testing, failure mode analysis, platform troubleshooting, and translating generative AI performance into concrete business and risk insights."
                linkText="View Presentation"
                href="https://drive.google.com/file/d/1xSnoN1B35uPi2Koa-BzHHU0y7y9DN5Mr/view?usp=sharing"
              />
            </div>
            <div className="relative rounded-2xl">
              <GlowingEffect
                spread={40}
                glow={true}
                disabled={false}
                proximity={64}
                inactiveZone={0.01}
                borderWidth={2}
              />
              <ProjectCard
                title="Folica"
                tags={["Leadership", "Teams", "Execution"]}
                description="Designed and developed Folica, which is a B2B retail technology concept designed to improve the in-store hair-care shopping experience at retailers like Ulta and Target. As part of a four-person team, we conducted customer research, competitive analysis, and market modeling to validate the opportunity and design a Technology-as-a-Service business model. I led the front-end development and built a fully interactive website prototype using HTML, CSS, and JavaScript, simulating a tablet-based AI hair analysis booth. The prototype included a consent flow, camera-based scan simulation, AI-driven results, and personalized in-store product recommendations. This project demonstrates my ability to translate strategy and research into a functional, user-centered product experience."
                linkText="View Folica Prototype"
                href="https://folica.vercel.app"
              />
            </div>
            <div className="relative rounded-2xl">
              <GlowingEffect
                spread={40}
                glow={true}
                disabled={false}
                proximity={64}
                inactiveZone={0.01}
                borderWidth={2}
              />
              <ProjectCard
                title="Venture Validator"
                tags={["System's Thinking", "Experimentation", "AI-Product Strategy"]}
                description="Developed a Lean PRD App, an AI-powered web application built in Google AI Studio that helps early stage entrepreneurs evaluate and refine venture ideas using a structured, VC-style framework . Working on a five-person team, I led the application build designing the prompt architecture, engineering the structured JSON schema pipeline, implementing frontend state management, and developing the dynamic dashboard (Lean PRD, SWOT, GTM, and viability scoring visualizations). A teammate supported deployment and hosting, while I focused on core product functionality and AI integration. This project strengthened my skills in prompt engineering, API integration, full-stack prototyping, structured output validation, UX workflow design, and AI product strategy. It also required assessing model hallucination, scalability limits, and data privacy risks, reinforcing my ability to critically evaluate AI systems before deployment."
                linkText="View Venture Validator Prototype"
                href="https://venturevaildator.vercel.app"
              />
            </div>
          </div>
        </section>

        {/* Experience
        <section id="experience" className="py-12 border-t border-secondary/20">
          <h2 className="text-2xl font-semibold tracking-tight text-secondary">Experience</h2>

          <div className="mt-6 grid gap-4">
            <ExperienceCard
              role="Competitive Market Analysis"
              org="KneeVoice INC. — (Graduate Consulting Project)"
              dates="January 2026 – June 2026"
              bullets={[
                "Led competitive and market landscape research to clarify positioning, customer segments, and differentiation opportunities.",
                "Synthesized insights into concise recommendations (messaging pillars, target audiences, and go-to-market priorities) for decision-makers.",
                "Converted ambiguous inputs into structured next steps—strengthening skills in strategic thinking, prioritization, and stakeholder communication.",
                "Collaborated cross-functionally to align research outputs with real business constraints and execution timelines.",
              ]}
            />

            <ExperienceCard
              role="Bartender & Cocktail Waitress"
              org="The Red Piano — Santa Barbara"
              dates="April 2025 – Present"
              bullets={[
                "Operate in a fast-paced, high-volume service environment where speed, accuracy, and customer experience directly impact revenue.",
                "Manage end-to-end transactions and nightly cash/credit accountability while maintaining consistent service quality under pressure.",
                "Use customer cues and product knowledge to recommend premium options—building practical persuasion and conversion skills.",
                "Coordinate continuously with bartenders/hosts/servers to maintain smooth workflow during peak hours (real-time ops + teamwork).",
              ]}
            />

            <ExperienceCard
              role="Staff Assistant"
              org="Kait Hamilton State Farm Agency — Santa Barbara"
              dates="Jan 2023 – Oct 2023"
              bullets={[
                "Supported customer lifecycle needs across coverage questions, claims support, billing, and policy changes in a regulated environment.",
                "Built trust through clear communication and follow-through—strengthening retention-focused thinking and client relationship skills.",
                "Maintained accurate documentation and handled sensitive information with care, reinforcing operational rigor and professionalism.",
                "Improved responsiveness by managing routine follow-ups and prioritizing requests efficiently.",
              ]}
            />
          </div>
        </section> */}

        {/* Skills
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
        </section> */}

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
            <div className="relative inline-block rounded-xl">
              <GlowingEffect
                spread={30}
                glow={true}
                disabled={false}
                proximity={50}
                inactiveZone={0.01}
                borderWidth={1.5}
              />
              <a
                href={linkedInUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-medium border border-secondary/30 hover:bg-secondary/10 hover:text-secondary transition-colors text-foreground"
              >
                LinkedIn
              </a>
            </div>
            <div className="relative inline-block rounded-xl">
              <GlowingEffect
                spread={30}
                glow={true}
                disabled={false}
                proximity={50}
                inactiveZone={0.01}
                borderWidth={1.5}
              />
              <a
                href={resumeUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-medium border border-secondary/30 hover:bg-secondary/10 hover:text-secondary transition-colors text-foreground"
              >
                Resume
              </a>
            </div>
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
    <div className="rounded-2xl border border-secondary/20 p-6 shadow-sm bg-white/50 hover:border-secondary/40 transition-colors flex flex-col h-full">
      
      {/* Title */}
      <h3 className="font-semibold text-foreground text-lg">{title}</h3>

      {/* Tags - Now formatted as sleek editorial text, NOT buttons */}
      <div className="mt-2 flex flex-wrap items-center gap-2 text-[11px] font-bold tracking-wider text-secondary uppercase">
        {tags.map((t, index) => (
          <span key={t} className="flex items-center">
            {t}
            {/* Add a bullet point separator between tags, but not after the last one */}
            {index < tags.length - 1 && (
              <span className="mx-2 opacity-50 text-foreground">•</span>
            )}
          </span>
        ))}
      </div>

      {/* Description - flex-grow pushes the button to the bottom evenly */}
      <p className="mt-4 mb-6 text-sm opacity-90 leading-relaxed text-foreground flex-grow">
        {description}
      </p>

      {/* The New Button replacing the old hyperlink */}
      {href && href !== "#" ? (
        <div className="mt-auto">
          <a
            className="inline-flex items-center justify-center rounded-xl px-5 py-2.5 text-sm font-medium bg-gradient-to-r from-accent to-accent/80 text-accent-foreground hover:opacity-90 transition-opacity shadow-sm"
            href={href}
            target="_blank"
            rel="noreferrer"
          >
            {linkText ?? "View Project"}
          </a>
        </div>
      ) : null}
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
