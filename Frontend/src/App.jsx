import { useState } from "react";
import { motion } from "framer-motion";
import { SiLeetcode, SiGeeksforgeeks } from "react-icons/si";
import {
  ArrowUpRight,
  Award,
  Code2,
  Download,
  GitBranch,
  Mail,
  Network,
  Send,
  Sparkles,
} from "lucide-react";
import { HeroVisual } from "./components/HeroVisual";
import { MotionSection } from "./components/MotionSection";
import { Navbar } from "./components/Navbar";
import { SectionHeader } from "./components/SectionHeader";
import { Timeline } from "./components/Timeline";
import { portfolio } from "./data/portfolio";

const cardMotion = {
  hidden: { opacity: 0, y: 20 },
  show: (index = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: index * 0.06,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

function App() {
  const [contactStatus, setContactStatus] = useState({
    type: "idle",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  function handleResumeOpen(event) {
    event.preventDefault();
    window.open("Resume.pdf", "_blank", "noopener,noreferrer");
  }

  async function handleContactSubmit(event) {
    event.preventDefault();
    setIsSubmitting(true);
    setContactStatus({ type: "idle", message: "" });

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    try {
      const response = await fetch(`${portfolio.apiUrl}/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message || "Unable to send your message right now.",
        );
      }

      setContactStatus({ type: "success", message: data.message });
      form.reset();
    } catch (error) {
      setContactStatus({
        type: "error",
        message: error.message || "Unable to send your message right now.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="min-h-screen overflow-hidden bg-black text-slate-100 selection:bg-emerald-300 selection:text-black">
      <Navbar />
      <main>
        <section
          id="home"
          className="relative min-h-screen scroll-mt-24 px-4 pt-32 sm:px-6 lg:px-8"
        >
          <BackgroundTexture />
          <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
            <motion.div
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75 }}
            >
              <p className="inline-flex items-center gap-2 rounded-full border border-emerald-300/25 bg-emerald-300/10 px-4 py-2 text-sm font-medium text-emerald-200">
                <Sparkles size={16} aria-hidden="true" />
                Backend-minded developer with full-stack range
              </p>
              <h1 className="mt-7 max-w-4xl text-5xl font-semibold leading-tight text-white sm:text-6xl lg:text-7xl">
                {portfolio.name}
              </h1>
              <p className="mt-4 text-2xl font-medium text-emerald-300 sm:text-3xl">
                {portfolio.role}
              </p>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                {portfolio.tagline}
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#projects"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-300 px-5 py-3 font-semibold text-black transition hover:bg-emerald-200 focus:outline-none focus:ring-2 focus:ring-emerald-200 focus:ring-offset-2 focus:ring-offset-black"
                >
                  View Projects
                  <ArrowUpRight size={18} aria-hidden="true" />
                </a>
                <a
                  // href={portfolio.resumeUrl}
                  // target="_blank"
                  download="Resume.pdf"
                  rel="noreferrer"
                  onClick={handleResumeOpen}
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/15 bg-white/5 px-5 py-3 font-semibold text-white transition hover:border-cyan-300/50 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-200 focus:ring-offset-2 focus:ring-offset-black cursor-pointer"
                >
                  <Download size={18} aria-hidden="true" />
                  Download Resume
                </a>
              </div>
              <div className="mt-8 flex items-center gap-3">
                <SocialLink
                  href={portfolio.socials.github}
                  label="GitHub"
                  icon={GitBranch}
                />
                <SocialLink
                  href={portfolio.socials.linkedin}
                  label="LinkedIn"
                  icon={Network}
                />
              </div>
            </motion.div>
            <HeroVisual />
          </div>
        </section>

        <MotionSection id="about" className="px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between ">
            <div className="mx-auto max-w-7xl gap-8 flex flex-col">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-300">
                  About Me
                </p>
                <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
                  Focused on reliable software that is easy to grow.
                </h2>
              </div>
              <div className="rounded-lg border border-white/10 bg-white/[0.045] max-w-3xl p-6 backdrop-blur-md sm:p-8">
                <p className="text-lg leading-8 text-slate-300">
                  {portfolio.about}
                </p>
                <div className="mt-8 grid gap-4 sm:grid-cols-3">
                  {portfolio.stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="rounded-lg border border-white/10 bg-black/30 p-4"
                    >
                      <p className="text-2xl font-semibold text-white">
                        {stat.value}
                      </p>
                      <p className="mt-1 text-sm text-slate-400">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="text-center mr-8">

              <div className="profile-border ">
                <img src="./portfolio.png" alt="Kapil" className="profile-image" />
              </div>
            </div>
          </div>
        </MotionSection>

        <MotionSection id="skills" className="px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Skills"
            title="Practical tools for building production software."
            description="A compact stack centered on backend development, API design, database work, and polished frontend delivery."
          />
          <div className="mx-auto grid max-w-7xl gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {portfolio.skills?.map((group, index) => (
              <motion.article
                key={group.category}
                custom={index}
                variants={cardMotion}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="rounded-lg border border-white/10 bg-white/[0.045] p-5 backdrop-blur-md transition hover:-translate-y-1 hover:border-emerald-300/35 hover:bg-white/[0.07]"
              >
                <h3 className="flex items-center gap-2 text-lg font-semibold text-white">
                  <Code2
                    size={18}
                    className="text-emerald-300"
                    aria-hidden="true"
                  />
                  {group.category}
                </h3>
                <div className="mt-5 flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-white/10 bg-black/35 px-3 py-1.5 text-sm text-slate-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </MotionSection>

        <MotionSection id="projects" className="px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Projects"
            title="Project work with product intent."
            description="Focused builds that connect frontend experience, backend structure, and maintainable implementation."
          />
          <div className="mx-auto  grid max-w-7xl gap-10">
            {portfolio.projects.map((project) => (
              <article
                key={project.name}
                className="overflow-hidden rounded-lg border border-white/10 bg-white/[0.045] backdrop-blur-md"
              >
                <div className="grid gap-0 lg:grid-cols-[0.8fr_1.2fr]">
                  <div className="relative min-h-72 bg-[linear-gradient(135deg,rgba(16,185,129,0.18),rgba(8,47,73,0.22),rgba(245,158,11,0.12))] p-6">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.16)_1px,transparent_0)] [background-size:22px_22px]" />
                    <div className="relative flex h-full flex-col justify-between">
                      <div>
                        <p className="text-sm font-medium text-emerald-200">
                          {project.type}
                        </p>
                        <h3 className="mt-3 text-4xl font-semibold text-white">
                          {project.name}
                        </h3>
                      </div>
                      <div className="rounded-lg border border-white/10 bg-black/40 p-4 font-mono text-sm text-slate-300 backdrop-blur-md">
                        <p>
                          <span className="text-emerald-300">status</span>:
                          scalable platform build
                        </p>
                        <p>
                          <span className="text-cyan-300">stack</span>: MERN
                          Stack + REST APIs
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="p-6 sm:p-8 ">
                    <p className="leading-7 text-slate-300">
                      {project.description}
                    </p>
                    <p className="mt-4 leading-7 text-slate-300">
                      {project.impact}
                    </p>
                    <ul className="mt-6 grid gap-3">
                      {project.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex gap-3 text-sm text-slate-300"
                        >
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-300" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full bg-white/10 px-3 py-1.5 text-xs font-medium text-slate-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/15 px-4 py-2.5 font-medium text-white transition hover:border-emerald-300/45 hover:bg-white/10"
                      >
                        <GitBranch size={18} aria-hidden="true" />
                        GitHub
                      </a>
                      <a
                        href={project.liveUrl}
                        className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-4 py-2.5 font-medium text-black transition hover:bg-emerald-100"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Live Demo
                        <ArrowUpRight size={18} aria-hidden="true" />
                      </a>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </MotionSection>

        {/* <MotionSection id="experience" className="px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Experience" title="A timeline built to grow with your career." />
          <Timeline items={portfolio.experience} />
        </MotionSection> */}

        <MotionSection id="education" className="px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Education"
            title="Academic foundation and continuous learning."
          />
          <Timeline items={portfolio.education} />
        </MotionSection>

        <MotionSection id="achievements" className="px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Coding & Achievements"
            title="Progress markers beyond project code."
          />
          <div className="mx-auto grid max-w-7xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {portfolio.achievements.map((item, index) => (
              <motion.article
                key={item.title}
                custom={index}
                variants={cardMotion}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="rounded-lg border border-white/10 bg-white/[0.045] p-6 backdrop-blur-md transition hover:-translate-y-1 hover:border-amber-200/40"
              >
                <Award
                  size={24}
                  className="text-amber-200"
                  aria-hidden="true"
                />
                <h3 className="mt-5 text-lg font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm font-medium text-emerald-300">
                  {item.value}
                </p>
                <p className="mt-4 text-sm leading-6 text-slate-300">
                  {item.description}
                </p>
                {/* {
                  item.title=="Coding Achievements" ?(
                    <div className='mt-2 flex justify-evenly '>
                    <a href={item.gfgUrl} className='mr-4 border px-4 py-1 rounded-full  text-emerald-300' 
                    target='_blank'>GFG</a> 
                    <a href={item.leetcodeUrl} className='mr-4 border px-4 py-1 rounded-full  text-emerald-300'  target='_blank' >LeetCode</a>
                    </div>
                  ):""
                } */}
              </motion.article>
            ))}
          </div>
        </MotionSection>

        <MotionSection id="contact" className="px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Contact"
            title="Let’s build something dependable."
            description="Reach out for software development roles, backend projects, or collaboration opportunities."
          />
          <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[0.85fr_1.15fr]">
            <div className="rounded-lg border border-white/10 bg-white/[0.045] p-6 backdrop-blur-md">
              <ContactItem
                icon={Mail}
                label="Email"
                value={portfolio.email}
                href={`https://mail.google.com/mail/?view=cm&fs=1&to=${portfolio.email}&su=Portfolio%20Contact`}
              />
              <ContactItem
                icon={Network}
                label="LinkedIn"
                value="Connect on LinkedIn"
                href={portfolio.socials.linkedin}
              />
              <ContactItem
                icon={GitBranch}
                label="GitHub"
                value="View code profile"
                href={portfolio.socials.github}
              />
              <ContactItem
                icon={SiLeetcode}
                label="Leetcode"
                value="View Leetcode profile"
                href={portfolio?.socials?.LeetcodeUrl}
              />
              <ContactItem
                icon={SiGeeksforgeeks}
                label="gfg"
                value="View gfg profile"
                href={portfolio?.socials?.GeeksforGeeksUrl}
              />
            </div>
            <form
              className="rounded-lg border border-white/10 bg-white/[0.045] p-6 backdrop-blur-md"
              onSubmit={handleContactSubmit}
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <FormField label="Name" name="name" autoComplete="name" />
                <FormField
                  label="Email"
                  name="email"
                  type="email"
                  autoComplete="email"
                />
              </div>
              <FormField label="Subject" name="subject" className="mt-4" />
              <label className="mt-4 block">
                <span className="text-sm font-medium text-slate-200">
                  Message
                </span>
                <textarea
                  name="message"
                  rows="5"
                  className="mt-2 w-full rounded-lg border border-white/10 bg-black/35 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-emerald-300/60"
                  placeholder="Tell me about the role, project, or idea."
                  required
                />
              </label>
              {contactStatus.message ? (
                <p
                  className={`mt-5 rounded-lg border px-4 py-3 text-sm ${
                    contactStatus.type === "success"
                      ? "border-emerald-300/30 bg-emerald-300/10 text-emerald-100"
                      : "border-rose-300/30 bg-rose-300/10 text-rose-100"
                  }`}
                  role="status"
                >
                  {contactStatus.message}
                </p>
              ) : null}
              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-emerald-300 px-5 py-3 font-semibold text-black transition hover:bg-emerald-200 focus:outline-none focus:ring-2 focus:ring-emerald-200 focus:ring-offset-2 focus:ring-offset-black disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
              >
                <Send size={18} aria-hidden="true" />
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </MotionSection>
      </main>
      <Footer />
    </div>
  );
}

function BackgroundTexture() {
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden="true"
    >
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.055)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.045)_1px,transparent_1px)] bg-[size:72px_72px]" />
      <div className="absolute inset-0 bg-[linear-gradient(110deg,transparent_0%,rgba(16,185,129,0.11)_28%,transparent_48%,rgba(245,158,11,0.08)_70%,transparent_100%)] animate-[scan_12s_linear_infinite]" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black to-transparent" />
    </div>
  );
}

function SocialLink({ href, label, icon: Icon }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={`Open ${label}`}
      className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-medium text-slate-200 transition hover:border-emerald-300/40 hover:bg-white/10 hover:text-white"
    >
      <Icon size={18} aria-hidden="true" />
      {label}
    </a>
  );
}

function ContactItem({ icon: Icon, label, value, href }) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noreferrer" : undefined}
      className="group flex items-center gap-4 border-b border-white/10 py-5 first:pt-0 last:border-b-0 last:pb-0"
    >
      <span className="rounded-lg border border-white/10 bg-black/35 p-3 text-emerald-300 transition group-hover:border-emerald-300/45">
        <Icon size={20} aria-hidden="true" />
      </span>
      <span>
        <span className="block text-sm text-slate-400">{label}</span>
        <span className="mt-1 block font-medium text-white">{value}</span>
      </span>
    </a>
  );
}

function FormField({
  label,
  name,
  type = "text",
  autoComplete,
  className = "",
}) {
  return (
    <label className={`block ${className}`}>
      <span className="text-sm font-medium text-slate-200">{label}</span>
      <input
        name={name}
        type={type}
        autoComplete={autoComplete}
        className="mt-2 w-full rounded-lg border border-white/10 bg-black/35 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-emerald-300/60"
        required
      />
    </label>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-semibold text-white">{portfolio.name}</p>
          <p className="mt-1">Built with MERN.</p>
        </div>
        <p>
          Copyright {new Date().getFullYear()} {portfolio.name}. All rights
          reserved.
        </p>
        <div className="flex gap-2">
          <SocialLink
            href={portfolio.socials.github}
            label="GitHub"
            icon={GitBranch}
          />
          <SocialLink
            href={portfolio.socials.linkedin}
            label="LinkedIn"
            icon={Network}
          />
        </div>
      </div>
    </footer>
  );
}

export default App;
