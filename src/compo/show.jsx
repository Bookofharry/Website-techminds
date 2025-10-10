import Marquee from "./Marque";
import r1 from "../assets/rachael.jpg";
import r2 from "../assets/instructor.jpeg";
import r3 from "../assets/class.jpeg";
import r4 from "../assets/testimonials.jpeg";
import ClassRoom from '../assets/chimobi.jpeg'
import Fortune from '../assets/fortune.jpeg'
import Rachael2 from '../assets/rachael1.jpeg'
import SpaceGuy from '../assets/classsection.jpeg'
import James from '../assets/class2.jpeg'
import Class from '../assets/instructor.jpeg'

import Host from '../assets/hosts.jpeg'
import Md from '../assets/md.jpeg'
import Speakers from '../assets/speakers.jpeg'
import TalkFortune from '../assets/talkfortune.jpeg'
import Conduct from '../assets/conduct.jpeg'
import Everyone from '../assets/everyone.jpeg'

import { Link } from "react-router-dom";

const Chip = ({ img, text, accent = "indigo" }) => (
  <div
    className={[
      "group relative inline-flex items-center gap-2 rounded-full px-4 py-2",
      "backdrop-blur bg-white/10 text-white",
      "border border-white/15 ring-1 ring-white/5 shadow-[0_0_0_1px_rgba(255,255,255,0.05)_inset]",
      "transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_30px_-10px_rgba(0,0,0,.55)]",
    ].join(" ")}
  >
    {/* glow border on hover */}
    <span
      aria-hidden
      className={`pointer-events-none absolute -inset-px rounded-full opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-60
        bg-gradient-to-r from-${accent}-400/40 via-fuchsia-400/40 to-cyan-400/40`}
    />
    {img ? (
      <span className="relative inline-flex h-7 w-7 overflow-hidden rounded-full ring-1 ring-white/10">
        <img
          src={img}
          alt=""
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
          loading="lazy"
        />
      </span>
    ) : (
      <span
        className={`relative inline-flex h-7 w-7 items-center justify-center rounded-full text-xs font-bold
        bg-gradient-to-br from-${accent}-500 to-${accent}-400 ring-1 ring-white/10`}
      >
        ✦
      </span>
    )}
    <span className="relative text-sm font-semibold tracking-tight drop-shadow">
      {text}
    </span>
  </div>
);

export default function TechMindsMarqueeShowcase() {
  // Tech Minds–centric rows
  const row1 = [
    <Chip img={r1} text="Coding for Kids" accent="pink" />,
    <Chip img={r2} text="Data Science" accent="indigo" />,
    <Chip img={r3} text="Web Development" accent="cyan" />,
    <Chip img={r4} text="Cloud Computing" accent="violet" />,
    <Chip img={Md}text="App Development" accent="emerald" />,
    <Chip img={TalkFortune} text="Cybersecurity Basics" accent="amber" />,
  ];

  const row2 = [
    <Chip img={Host} text="Mentor-Led Cohorts" accent="indigo" />,
    <Chip img={Everyone} text="Real Projects" accent="pink" />,
    <Chip img={Conduct} text="Career Support" accent="emerald" />,
    <Chip img={Speakers} text="Abuja • Bwari" accent="cyan" />,
    <Chip img={ClassRoom} text="Live-Online Options" accent="violet" />,
    <Chip img={Fortune} text="Tech Minds Academy" accent="amber" />,
  ];

  const row3 = [
    <Chip img={Rachael2} text="24/7 Power Supply" accent="fuchsia" />,
    <Chip img={SpaceGuy} text="Good Internet" accent="sky" />,
    <Chip img={James} text="Friendly Instructors" accent="rose" />,
    <Chip img={Class} text="Great Syllabus" accent="lime" />,
    <Chip img={Md} text="Workspace & Labs" accent="blue" />,
    <Chip img={Md} text="Updated Tools" accent="purple" />,
  ];

  return (
    <section className="relative w-full overflow-hidden bg-[#050B1A] py-14 text-white">
      {/* layered gradients */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(700px 260px at 10% 10%, rgba(99,102,241,.35), transparent 60%)," +
            "radial-gradient(700px 260px at 90% 80%, rgba(20,184,166,.30), transparent 60%)",
        }}
      />
      {/* soft noise / grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[.06] mix-blend-soft-light"
        style={{
          background:
            "url('data:image/svg+xml;utf8,\
            <svg xmlns=%27http://www.w3.org/2000/svg%27 width=%2716%27 height=%2716%27 viewBox=%270 0 16 16%27>\
              <path fill=%27white%27 fill-opacity=%270.3%27 d=%27M0 15h16v1H0zM15 0v16h1V0z%27/>\
            </svg>')",
        }}
      />
      {/* twinkling sparkles */}
      <div className="pointer-events-none absolute inset-0">
        <span className="absolute left-10 top-12 h-1.5 w-1.5 rounded-full bg-white/90 blur-[1px] animate-pulse" />
        <span className="absolute right-24 top-8 h-1.5 w-1.5 rounded-full bg-cyan-200 blur-[1px] animate-pulse" />
        <span className="absolute left-1/2 top-1/3 h-1.5 w-1.5 rounded-full bg-fuchsia-200 blur-[1px] animate-pulse" />
      </div>

      <div className="relative mx-auto max-w-6xl space-y-7 px-4">
        {/* headline */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider ring-1 ring-white/15">
            Conducive learning environment
          </span>
          <h2 className="mt-3 text-2xl font-extrabold leading-tight tracking-tight sm:text-3xl">
            Learn fast. Build real. Earn Through your Tech career.
          </h2>
          <p className="mx-auto mt-2 max-w-2xl text-sm text-slate-200/90">
            Mentor-led, project-based, and portfolio-driven.
          </p>
        </div>

        {/* Marquees */}
        <Marquee
          items={row1}
          direction="left"
          speed={95}
          gap="1rem"
          gradientWidth="90px"
          className="text-base md:text-lg"
        />
        <Marquee
          items={row2}
          direction="right"
          speed={75}
          gap="1rem"
          gradientWidth="90px"
          className="text-base md:text-lg opacity-95"
        />
        <Marquee
          items={row3}
          direction="left"
          speed={60}
          gap="1rem"
          gradientWidth="90px"
          className="text-base md:text-lg opacity-90"
        />

        {/* CTA */}
        <div className="mt-6 flex items-center justify-center gap-3">
          <Link
            to="/application"
            className="inline-flex items-center rounded-full bg-gradient-to-r from-indigo-600 to-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:from-indigo-500 hover:to-blue-500 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Apply now
            <svg className="ml-2 h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
              <path d="M10.293 3.293a1 1 0 011.414 0l5 5a.997.997 0 01.083 1.32l-.083.094-5 5a1 1 0 01-1.497-1.32l.083-.094L13.585 10H4a1 1 0 01-.117-1.993L4 8h9.585l-3.292-3.293a1 1 0 010-1.414z" />
            </svg>
          </Link>
          <Link
            
            className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-5 py-2.5 text-sm font-semibold text-white backdrop-blur transition-all hover:bg-white/20"
            to='/schedule'
          >
            See schedule
          </Link>
        </div>
      </div>
    </section>
  );
}
