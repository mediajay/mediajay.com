import React, { useMemo, useState, useEffect } from "react";
import './App.css'
import image_workcfmws from "./assets/work-cfmws.jpg";
import image_workbethere from "./assets/work-bethere.jpg";
import image_workroundhouse from "./assets/work-roundhouse.jpg";
import image_justin from "./assets/justin.png";
import { DiHtml5, DiCss3, DiJsBadge, DiJqueryLogo, DiReact, DiGit, DiGithubBadge, DiSass, DiWordpress, DiVisualstudio,} from "react-icons/di";
import { FaExternalLinkAlt } from "react-icons/fa";
import emailjs from 'emailjs-com';

// --- Utility: time of day greeting + background ---
function getDayPart(date = new Date()) {
  const h = date.getHours();
  if (h >= 5 && h < 12) return "morning";
  if (h >= 12 && h < 17) return "afternoon";
  if (h >= 17 && h < 21) return "evening";
  return "night";
}

const ContactForm = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_5dkemb8",
      "template_lsz4o23",
      e.target,
      "HMKDDN5Wz6xJOsxWz"
    )
    .then(() => alert("Email sent!"))
    .catch(() => alert("Error sending email"));
  };

  return (    
    <form onSubmit={sendEmail} className="">
      <div className="grid gap-4">
        <Input id="name" label="Name" name="name" placeholder="Your name" required />
        <Input id="email" label="Email" name="email" type="email" placeholder="you@example.com" required />
        <Textarea id="message" label="Message" name="message" rows={5} placeholder="Tell me about your project…" required />
        <div className="flex items-center gap-3">
          <input id="consent" type="checkbox" className="h-4 w-4 rounded border-neutral-300 text-neutral-900 focus:ring-neutral-900" required />
          <label htmlFor="consent" className="text-sm text-neutral-700">I consent to be contacted.</label>
        </div>
        <button className="mt-2 w-full rounded-full bg-neutral-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-neutral-800" type="submit">Send</button>
      </div>
    </form>
  );
};

const LargeCard = ({ img, title, desc, type, tech, link }) => (
  <article target="_blank" className="project-card p-10 group rounded-3xl relative justify-between flex flex-col border-2 border-gray-100 mb-10">
    <div>
      <h3 className="text-lg font-semibold text-neutral-900">{title}</h3>
      <p className="mt-1 text-sm text-neutral-600" dangerouslySetInnerHTML={{__html: desc}}></p>
      <footer className="mt-4 flex items-center gap-3 text-xs text-neutral-500">
      </footer>
    </div>
    <a href={link} className="scrolling-img">
      <FaExternalLinkAlt className="external-link absolute top-5 right-5" />
      <img src={img} alt={title} className=" aspect-ratio"/>    
    </a>
  </article>
);

const Input = ({ id, label, type = "text", ...props }) => (
  <div className="flex flex-col gap-1">
    <label htmlFor={id} className="text-sm font-medium text-neutral-800">{label}</label>
    <input id={id} type={type} className="border border-neutral-300 bg-white px-3 py-2 outline-none ring-0 transition focus:border-neutral-800" {...props} />
  </div>
);

const Textarea = ({ id, label, rows = 4, ...props }) => (
  <div className="flex flex-col gap-1">
    <label htmlFor={id} className="text-sm font-medium text-neutral-800">{label}</label>
    <textarea id={id} rows={rows} className="border border-neutral-300 bg-white px-3 py-2 outline-none ring-0 transition focus:border-neutral-800" {...props} />
  </div>
);

export default function PortfolioHome() {
  const [dayPart, setDayPart] = useState(getDayPart());

  useEffect(() => {
    const t = setInterval(() => setDayPart(getDayPart()), 60 * 1000);
    return () => clearInterval(t);
  }, []);

  const greeting = useMemo(() => {
    switch (dayPart) {
      case "morning":
        return "Good morning";
      case "afternoon":
        return "Good afternoon";
      case "evening":
        return "Good evening";
      default:
        return "Good night";
    }
  }, [dayPart]);

  return (
    <div className="min-h-screen bg-black scroll-smooth text-white">
      {/* NAV */}
      <header className="top-0 z-40 site-header">
        <nav className="mx-auto flex max-w-screen-2xl items-center justify-between px-4 py-3">
          <a href="#home" className="text-xl font-extrabold tracking-tight site-logo">M</a>
          <ul className="hidden items-center gap-6 md:flex">
            <li><a href="#portfolio" className="text-sm">Portfolio</a></li>
            <li><a href="#skills" className="text-sm">Skills</a></li>
          </ul>
          <a href="#contact" className="button-br-animate"><span></span>Get in Touch</a>
        </nav>
      </header>

      {/* HERO */}
      <section id="home" className="relative">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 pt-16 pb-0 px-5 md:grid-cols-2">
          <div className="text-white">
            <p className="mb-2 inline-flex items-center rounded-full bg-white/15 px-3 py-1 text-xs font-medium backdrop-blur">{greeting}, I’m Justin</p>
            <h1 className="text-4xl font-extrabold leading-tight md:text-5xl">Award‑winning Web Developer at Your Service</h1>
            <p className="mt-4 max-w-xl text-white/80">13+ years of agency experience delivering CMS-driven and custom web solutions.</p>
            <div className="mt-6 flex gap-3">
              <a href="#portfolio" className="bg-white px-4 py-2 text-sm font-semibold text-neutral-900 transition hover:bg-neutral-100">Get in touch</a>
            </div>
          </div>
          <div className="z-1"><img src={image_justin} alt="Justin Miller" /></div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section id="portfolio" className="bg-white text-black">
        <div class="diagonal-spacer bg-black"></div>
        <div className="mx-auto max-w-7xl py-16 px-5">
          <header className="mb-8 flex items-end justify-between">
            <div>
              <p className="text-xs uppercase tracking-widest text-neutral-500">Projects Ya see</p>
              <h2 className="mt-1 text-2xl font-bold md:text-3xl">Explore My Recent Work</h2>
              <p className="mt-2 max-w-2xl text-neutral-600">I've lead front end development on many sites for prominent orgnaizations over the years showcasing responsive interfaces, accessible design, and performance‑focused builds.</p>
            </div>
          </header>
          <div className="grid md:grid-cols-2 gap-8">
            <LargeCard img={image_workcfmws} title="CFMWS" type="Live" link="https://cfmws.ca" tech="Kentico MVC, Foundation, Webpack" desc="The largest project I've worked on to date with over 100 hand written widgets and templates including variants based on client approved designs. Lots of strategy was required to streamline location based content curation within the CMS." />
            <LargeCard img={image_workbethere} title="Bethere" type="Live" link="https://bethere.org" desc="A succint self harm prevention resource for youth featuring light weight, hand-written CSS animations while remaining AODA complient and winning a 2022 webby award: <a target=_blank href=https://winners.webbyawards.com/2022/websites-and-mobile-sites/general-websites-and-mobile-sites/professional-services-self-promotion/210632/aka-new-media-inc>Credit</a>" link="https://bethere.org/Home" />
            <LargeCard title="Roundhouse Theatre" type="Live" tech="Kentico Portal, Foundation, Webpack" desc="" />
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="border-y border-neutral-200/70 bg-neutral-50/80 bg-neutral-50 ">
        <div className="mx-auto grid max-w-7xl gap-8 py-14 px-5 md:grid-cols-3">
          <div>
            <h3 className="text-xl font-bold">Core Skills</h3>
            <ul className="mt-3 space-y-2 text-neutral-700">
              <li>React</li>
              <li>WordPress</li>
              <li>Tailwind CSS</li>
              <li>Accessibility (AODA)</li>
              <li>Performance Optimization</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold">CMS & Back‑end</h3>
            <ul className="mt-3 space-y-2 text-neutral-700">
              <li>Kentico</li>
              <li>Headless CMS (Contentful, Strapi)</li>
              <li>PHP / Node basics</li>
              <li>REST / GraphQL integration</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold">Tools</h3>
            <ul className="mt-3 space-y-2 text-neutral-700">
              <li>Git / GitHub</li>
              <li>Vite / Webpack</li>
              <li>Figma → Dev handoff</li>
              <li>Analytics & SEO fundamentals</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" class="bg-neutral-50 text-black">
        <div className="mx-auto max-w-7xl py-16 px-5">
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <h3 className="mb-2 text-2xl font-bold">Get in Touch</h3>
              <p className="mb-6 text-sm text-neutral-600">Let’s build something great together.</p>
            </div>
            <ContactForm />
          </div>
        </div>
        <div class="diagonal-spacer diagonal-spacer--alt bg-black"></div>
      </section>

      {/* FOOTER */}
      <footer className="site-footer bg-black text-neutral-300">
        <div className="mx-auto max-w-7xl pb-5">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="space-y-2">
              <div className="text-lg font-bold text-white"><a href="#home" className="text-xl font-extrabold tracking-tight site-logo">M</a></div>
            </div>
            <div className="flex items-center gap-4">
              {[
                { label: "In", href: "#" },
              ].map((s) => (
                <a key={s.label} href={s.href} className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-sm font-semibold text-white transition hover:bg-white/20">{s.label}</a>
              ))}
            </div>
          </div>
          <div className="mt-4 grid text-xs text-neutral-500 md:flex md items-center md:justify-between">
            <p>© {new Date().getFullYear()} MediaJay. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
