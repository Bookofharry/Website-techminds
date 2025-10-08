import { useMemo, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import App from "../assets/app.png";
import Web from "../assets/web.png";
import Kids from "../assets/kidss.png";
import Cloud from "../assets/cloud.jpeg";

/**
 * Tech Minds Academy — Courses Page
 * Now with rock-solid Syllabus links (internal + external support)
 */

export default function CoursesPage() {
  // ---------- Demo data (replace with API) ----------
  const initialCourses = useMemo(
    () => [
      {
        id: "software-engineering/web-development",
        title: "Web Development Bootcamp",
        category: "Web Development",
        level: "Beginner",
        format: "Onsite",
        rating: 4.8,
        ratingCount: 321,
        duration: "12 weeks",
        lessons: 69,
        price: 300000,
        image: Web,
        tags: ["HTML", "CSS", "JavaScript", "React"],
        instructor: { name: "Fortune ", avatar: "https://i.pravatar.cc/80?img=5" },
        highlight: "From zero to job-ready with projects",
        syllabus: [
          { title: "Module 1 • Web Foundations", url: "/syllabus/software-engineering/web-development/module-1" },
          { title: "Module 2 • Layout & Responsive CSS", url: "/syllabus/software-engineering/web-development/module-2" },
          { title: "Module 3 • JavaScript Essentials", url: "/syllabus/software-engineering/web-development/module-3" },
          { title: "Full PDF", url: "https://cdn.techmindsacademy.org/syllabus/web-development.pdf" },
        ],
      },
      {
        id: "data-science",
        title: "Data Science with Python",
        category: "Data",
        level: "Intermediate",
        format: "Online",
        rating: 4.7,
        ratingCount: 209,
        duration: "12 weeks",
        lessons: 75,
        price: 400000,
        image:
          "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1600&auto=format&fit=crop",
        tags: ["Python", "Pandas", "Numpy", "ML"],
        instructor: { name: "James ", avatar: "https://i.pravatar.cc/80?img=12" },
        highlight: "Hands-on with real datasets",
        syllabus: [
          { title: "Module 1 • Python Refresher", url: "/syllabus/data-science/module-1" },
          { title: "Module 2 • Data Wrangling (Pandas)", url: "/syllabus/data-science/module-2" },
          { title: "Module 3 • ML Basics", url: "/syllabus/data-science/module-3" },
          { title: "Full PDF", url: "https://cdn.techmindsacademy.org/syllabus/data-science.pdf" },
        ],
      },
      {
        id: "cloud-computing", // fixed: removed stray quote
        title: "Cloud Computing Essentials",
        category: "Cloud",
        level: "Beginner",
        format: "Onsite",
        rating: 4.6,
        ratingCount: 143,
        duration: "12 weeks",
        lessons: 48,
        price: 600000,
        image: Cloud,
        tags: ["AWS", "Azure", "DevOps"],
        instructor: { name: "Harry ", avatar: "https://i.pravatar.cc/80?img=22" },
        highlight: "Deploy, scale, and monitor apps",
        syllabus: [
          { title: "Module 1 • Cloud Basics", url: "/syllabus/cloud-computing/module-1" },
          { title: "Module 2 • Compute & Storage", url: "/syllabus/cloud-computing/module-2" },
          { title: "Module 3 • CI/CD & Monitoring", url: "/syllabus/cloud-computing/module-3" },
          { title: "Full PDF", url: "https://cdn.techmindsacademy.org/syllabus/cloud-essentials.pdf" },
        ],
      },
      {
        id: "coding-for-kids-engineering",
        title: "Coding for Kids",
        category: "Kids",
        level: "Beginner",
        format: "Onsite",
        rating: 4.9,
        ratingCount: 98,
        duration: "14 weeks",
        lessons: 36,
        price: 150000,
        image: Kids,
        tags: ["Scratch", "Logic", "Creativity"],
        instructor: { name: "Fortune ", avatar: "https://i.pravatar.cc/80?img=32" },
        highlight: "Playful projects that teach logic",
        syllabus: [
          { title: "Module 1 • Scratch Basics", url: "/syllabus/coding-for-kids-engineering/module-1" },
          { title: "Module 2 • Game Logic", url: "/syllabus/coding-for-kids-engineering/module-2" },
          { title: "Parent Guide (PDF)", url: "https://cdn.techmindsacademy.org/syllabus/kids-parent-guide.pdf" },
        ],
      },
      {
        id: "software-engineering/app-development",
        title: "Mobile App Development",
        category: "App Development",
        level: "Intermediate",
        format: "Online",
        rating: 4.5,
        ratingCount: 176,
        duration: "14 weeks",
        lessons: 70,
        price: 400000,
        image: App,
        tags: ["React Native", "APIs", "UI/UX"],
        instructor: { name: "Michael", avatar: "https://i.pravatar.cc/80?img=44" },
        highlight: "Build and publish real apps",
        syllabus: [
          { title: "Module 1 • RN Basics", url: "/syllabus/software-engineering/app-development/module-1" },
          { title: "Module 2 • Navigation & State", url: "/syllabus/software-engineering/app-development/module-2" },
          { title: "Module 3 • APIs & Auth", url: "/syllabus/software-engineering/app-development/module-3" },
          { title: "Full PDF", url: "https://cdn.techmindsacademy.org/syllabus/app-development.pdf" },
        ],
      },
    ],
    []
  );

  // ---------- State ----------
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [level, setLevel] = useState("All");
  const [format, setFormat] = useState("All");
  const [sort, setSort] = useState("popular");
  const [page, setPage] = useState(1);
  const pageSize = 8; // tweak per design

  // ---------- Filtering & Sorting ----------
  const filtered = useMemo(() => {
    let list = initialCourses.filter((c) => {
      const matchesQuery = [c.title, c.category, c.tags.join(" ")]
        .join(" ")
        .toLowerCase()
        .includes(query.toLowerCase());
      const matchesCategory = category === "All" || c.category === category;
      const matchesLevel = level === "All" || c.level === level;
      const matchesFormat = format === "All" || c.format === format;
      return matchesQuery && matchesCategory && matchesLevel && matchesFormat;
    });

    if (sort === "popular") list = list.sort((a, b) => b.ratingCount - a.ratingCount);
    if (sort === "rating") list = list.sort((a, b) => b.rating - a.rating);
    if (sort === "priceLow") list = list.sort((a, b) => a.price - b.price);
    if (sort === "priceHigh") list = list.sort((a, b) => b.price - a.price);

    return list;
  }, [initialCourses, query, category, level, format, sort]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));
  const paged = filtered.slice((page - 1) * pageSize, page * pageSize);

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950">
      <div className="mx-auto max-w-7xl px-4 pb-16 pt-10 sm:px-6 lg:px-8">
        <Breadcrumbs />
        <CourseHero />

        <FiltersBar
          query={query}
          setQuery={(e) => {
            setPage(1);
            setQuery(e.target.value);
          }}
          category={category}
          setCategory={(v) => {
            setPage(1);
            setCategory(v);
          }}
          level={level}
          setLevel={(v) => {
            setPage(1);
            setLevel(v);
          }}
          format={format}
          setFormat={(v) => {
            setPage(1);
            setFormat(v);
          }}
          sort={sort}
          setSort={(v) => {
            setPage(1);
            setSort(v);
          }}
          resultCount={filtered.length}
          hasActiveFilters={
            category !== "All" ||
            level !== "All" ||
            format !== "All" ||
            sort !== "popular" ||
            query.trim() !== ""
          }
          onClear={() => {
            setQuery("");
            setCategory("All");
            setLevel("All");
            setFormat("All");
            setSort("popular");
            setPage(1);
          }}
        />

        {paged.length === 0 ? (
          <EmptyState />
        ) : (
          <>
            <CourseGrid courses={paged} />
            <Pagination page={page} setPage={setPage} totalPages={totalPages} />
          </>
        )}
      </div>
    </main>
  );
}

// -------------------- Components --------------------

function Breadcrumbs() {
  return (
    <nav className="mb-6 text-sm text-gray-500 dark:text-gray-400" aria-label="Breadcrumb">
      <ol className="flex items-center gap-2">
        <li>
          <Link to="/" className="hover:text-gray-700 dark:hover:text-gray-200">
            Home
          </Link>
        </li>
        <li className="opacity-60">/</li>
        <li aria-current="page" className="font-medium text-gray-700 dark:text-gray-200">
          Courses
        </li>
      </ol>
    </nav>
  );
}

function CourseHero() {
  return (
    <header className="mb-6 rounded-3xl border border-white/60 bg-white/70 p-8 shadow-sm backdrop-blur-md dark:border-white/10 dark:bg-white/5">
      <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-3xl">
            LEARN WITH THE GEEKS
          </h1>
          <p className="mt-2 max-w-prose text-sm text-gray-600 dark:text-gray-300">
            Learn modern tech the practical way—projects, mentorship, and career support in Abuja & online.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-4">
          <HeroStat label="Instructors" value="7" />
          <HeroStat label="Courses" value="10+" />
          <HeroStat label="Graduates" value="400+" />
        </div>
      </div>
    </header>
  );
}

function HeroStat({ label, value }) {
  return (
    <div className="rounded-2xl border border-gray-200/80 bg-white px-4 py-3 text-center shadow-sm dark:border-white/10 dark:bg-white/5">
      <div className="text-lg font-semibold text-gray-900 dark:text-white">{value}</div>
      <div className="text-xs text-gray-500 dark:text-gray-400">{label}</div>
    </div>
  );
}

function FiltersBar({
  query,
  setQuery,
  category,
  setCategory,
  level,
  setLevel,
  format,
  setFormat,
  sort,
  setSort,
  resultCount,
}) {
  return (
    <section className="mb-6 rounded-3xl border border-white/60 bg-white/80 p-4 backdrop-blur-md dark:border-white/10 dark:bg-white/5 lg:sticky lg:top-6 lg:z-20 lg:shadow-sm">
      <div className="flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-1 flex-wrap items-center gap-3">
          {/* Search */}
          <label className="relative w-full sm:w-72">
            <input
              value={query}
              onChange={setQuery}
              placeholder="Search courses, tags, topics…"
              className="w-full rounded-2xl border border-gray-200 bg-white px-4 py-2.5 text-sm shadow-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:border-white/10 dark:bg-white/10 dark:text-white"
            />
            <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
              ⌘K
            </span>
          </label>

          {/* Category */}
          <Select
            value={category}
            onChange={setCategory}
            label="Category"
            options={["All", "Web Development", "Data", "Cloud", "Kids", "App Development"]}
          />

          {/* Level */}
          <Select value={level} onChange={setLevel} label="Level" options={["All", "Beginner", "Intermediate", "Advanced"]} />

          {/* Format */}
          <Select value={format} onChange={setFormat} label="Format" options={["All", "Onsite", "Online"]} />
        </div>

        {/* Sort */}
        <div className="flex items-center gap-3">
          <Select
            value={sort}
            onChange={setSort}
            label="Sort"
            options={[
              { label: "Most Popular", value: "popular" },
              { label: "Top Rated", value: "rating" },
              { label: "Price: Low to High", value: "priceLow" },
              { label: "Price: High to Low", value: "priceHigh" },
            ]}
          />
          <span className="hidden text-xs text-gray-500 sm:inline dark:text-gray-400">{resultCount} results</span>
        </div>
      </div>
    </section>
  );
}

function Select({ value, onChange, label, options }) {
  const opts = Array.isArray(options)
    ? options.map((o) => (typeof o === "string" ? { label: o, value: o } : o))
    : [];
  return (
    <label className="inline-flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
      <span className="whitespace-nowrap">{label}</span>
      <div className="relative w-40 shrink-0 sm:w-48">
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="block w-full appearance-none rounded-xl border border-gray-200 bg-white px-3 py-2 pr-9 text-sm text-gray-900 shadow-sm outline-none transition hover:border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:border-white/10 dark:bg-white/10 dark:text-white"
        >
          {opts.map((o) => (
            <option key={o.value} value={o.value}>
              {o.label}
            </option>
          ))}
        </select>
        {/* chevron */}
        <span className="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400">▾</span>
      </div>
    </label>
  );
}

function CourseGrid({ courses }) {
  return (
    <section className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {courses.map((c) => (
        <CourseCard key={c.id} course={c} />
      ))}
    </section>
  );
}

/** SmartLink: uses <Link> for internal routes, <a> for external URLs */
function SmartLink({ to, children, className }) {
  const isExternal = /^https?:\/\//i.test(to);
  if (isExternal) {
    return (
      <a href={to} target="_blank" rel="noopener noreferrer" className={className}>
        {children}
      </a>
    );
  }
  return (
    <Link to={to} className={className}>
      {children}
    </Link>
  );
}

function CourseCard({ course }) {
  const [open, setOpen] = useState(false);
  const {
    id,
    title,
    category,
    level,
    format,
    rating,
    ratingCount,
    duration,
    lessons,
    price,
    image,
    tags,
    instructor,
    highlight,
    syllabus = [],
  } = course;

  return (
    <article className="group relative overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md dark:border-white/10 dark:bg-white/5">
      <div className="relative h-44 w-full overflow-hidden">
        <img src={image} alt="" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
        <div className="absolute left-3 top-3 flex items-center gap-2">
          <Badge>{category}</Badge>
          <Badge variant="dark">{level}</Badge>
          <Badge variant="outline">{format}</Badge>
        </div>
      </div>

      <div className="space-y-3 p-4">
        <h3 className="line-clamp-2 text-base font-semibold text-gray-900 dark:text-white">
          <Link to={`${id}`} className="after:absolute after:inset-0">
            {title}
          </Link>
        </h3>

        <p className="line-clamp-2 text-sm text-gray-600 dark:text-gray-300">{highlight}</p>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src={instructor.avatar} alt="" className="h-7 w-7 rounded-full object-cover" />
            <span className="text-xs text-gray-600 dark:text-gray-300">{instructor.name}</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
            <span>{duration}</span>
            <span>•</span>
            <span>{lessons} lessons</span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            {/* <RatingStars value={rating} /> */}
            {/* <span className="text-xs text-gray-500">({ratingCount})</span> */}
          </div>
          <div className="text-right">
            <div className="text-sm font-bold text-gray-900 dark:text-white">₦{price.toLocaleString()}</div>
            <div className="text-[11px] text-gray-500">one-time/installment</div>
          </div>
        </div>

        <div className="flex items-center gap-2 pt-2">
          {tags.slice(0, 3).map((t) => (
            <Tag key={t}>{t}</Tag>
          ))}
          {tags.length > 3 && <Tag>+{tags.length - 3}</Tag>}
        </div>

        <div className="flex items-center gap-3 pt-2">
          <Link
            to={`${id}}`}
            className="inline-flex flex-1 items-center justify-center rounded-2xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Enroll Now
          </Link>

          {/* <p
            type="button"
            onClick={() => setOpen(true)}
            className="inline-flex items-center justify-center rounded-2xl border border-gray-200 bg-white px-4 py-2 text-sm font-semibold text-gray-900 shadow-sm transition hover:border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-white/10 dark:bg-white/10 dark:text-white"
          >
            Syllabus
          </p> */}
        </div>
      </div>

      {open && (
        <SyllabusModal
          onClose={() => setOpen(false)}
          title={title}
          items={syllabus}
        />
      )}
    </article>
  );
}

function RatingStars({ value = 0 }) {
  const full = Math.floor(value);
  const half = value - full >= 0.5;
  const total = 5;
  return (
    <div className="flex items-center" aria-label={`Rating: ${value} out of 5`}>
      {Array.from({ length: total }, (_, i) => {
        const filled = i < full || (i === full && half);
        return (
          <svg
            key={i}
            viewBox="0 0 20 20"
            className={`h-4 w-4 ${filled ? "fill-yellow-400" : "fill-gray-200 dark:fill-white/15"}`}
            role="img"
            aria-hidden="true"
          >
            <path d="M10 15l-5.878 3.09 1.122-6.545L.488 6.91l6.562-.954L10 0l2.95 5.956 6.562.954-4.756 4.635 1.122 6.545z" />
          </svg>
        );
      })}
    </div>
  );
}

function Badge({ children, variant = "light" }) {
  const styles = {
    light: "bg-white/90 text-gray-900 border-gray-200",
    dark: "bg-gray-900/90 text-white border-gray-900",
    outline: "bg-white/70 text-gray-800 border-gray-200",
  };
  return (
    <span className={`rounded-full border px-2.5 py-1 text-[11px] font-medium backdrop-blur ${styles[variant]}`}>
      {children}
    </span>
  );
}

function Tag({ children }) {
  return (
    <span className="rounded-full border border-gray-200 bg-white px-2 py-0.5 text-[11px] text-gray-700 dark:border-white/10 dark:bg-white/10 dark:text-white">
      {children}
    </span>
  );
}

function Pagination({ page, setPage, totalPages }) {
  const go = (p) => () => setPage(Math.min(Math.max(1, p), totalPages));
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
  return (
    <nav className="mt-8 flex items-center justify-between" aria-label="Pagination">
      <button
        onClick={go(page - 1)}
        disabled={page === 1}
        className="rounded-xl border border-gray-200 bg-white px-3 py-2 text-sm text-gray-700 shadow-sm disabled:cursor-not-allowed disabled:opacity-50 dark:border-white/10 dark:bg-white/10 dark:text-white"
      >
        Previous
      </button>

      <div className="flex items-center gap-1">
        {pages.map((p) => (
          <button
            key={p}
            onClick={go(p)}
            className={`h-9 w-9 rounded-xl text-sm font-medium transition ${
              p === page
                ? "bg-blue-600 text-white shadow"
                : "border border-gray-200 bg-white text-gray-700 hover:border-gray-300 dark:border-white/10 dark:bg-white/10 dark:text-white"
            }`}
            aria-current={p === page ? "page" : undefined}
          >
            {p}
          </button>
        ))}
      </div>

      <button
        onClick={go(page + 1)}
        disabled={page === totalPages}
        className="rounded-xl border border-gray-200 bg-white px-3 py-2 text-sm text-gray-700 shadow-sm disabled:cursor-not-allowed disabled:opacity-50 dark:border-white/10 dark:bg-white/10 dark:text-white"
      >
        Next
      </button>
    </nav>
  );
}

function EmptyState() {
  return (
    <div className="mt-16 grid place-items-center rounded-3xl border border-dashed border-gray-300 bg-white/70 p-12 text-center dark:border-white/10 dark:bg-white/5">
      <svg viewBox="0 0 24 24" className="mx-auto h-12 w-12 opacity-60" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M8 6h8M6 10h12M4 14h16M6 18h12" />
      </svg>
      <h3 className="mt-4 text-lg font-semibold text-gray-900 dark:text-white">No courses match your filters</h3>
      <p className="mt-2 max-w-sm text-sm text-gray-600 dark:text-gray-300">
        Try adjusting your search, switching categories, or clearing filters to see more options.
      </p>
    </div>
  );
}

/** Modal that lists syllabus links. Handles ESC & backdrop clicks. */
function SyllabusModal({ onClose, title, items = [] }) {
  // ESC to close
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  const stop = (e) => e.stopPropagation();

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center bg-black/40 p-0 sm:items-center sm:p-6"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="w-full max-w-2xl translate-y-0 rounded-t-3xl bg-white p-6 shadow-xl sm:rounded-3xl dark:bg-gray-900"
        onClick={stop}
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Syllabus • {title}</h4>
            <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
              Open a module or download the full PDF.
            </p>
          </div>
          <button
            onClick={onClose}
            className="rounded-xl border border-gray-200 bg-white px-3 py-1.5 text-sm shadow-sm hover:border-gray-300 dark:border-white/10 dark:bg-white/10 dark:text-white"
          >
            Close
          </button>
        </div>

        <ol className="mt-6 grid gap-3 text-sm text-gray-700 dark:text-gray-200">
          {items.length === 0 && (
            <li className="rounded-2xl border border-gray-200 bg-white p-3 dark:border-white/10 dark:bg-white/10">
              Syllabus is being prepared. Please check back soon.
            </li>
          )}

          {items.map((it, idx) => (
            <li
              key={it.url ?? idx}
              className="flex items-center justify-between gap-3 rounded-2xl border border-gray-200 bg-white p-3 transition hover:border-blue-300 dark:border-white/10 dark:bg-white/10"
            >
              <span className="font-medium">{idx + 1}. {it.title}</span>
              <SmartLink
                to={it.url}
                className="inline-flex items-center gap-1 rounded-lg border border-gray-200 bg-white px-3 py-1.5 text-xs font-semibold text-gray-900 shadow-sm transition hover:border-blue-300 dark:border-white/10 dark:bg-white/10 dark:text-white"
              >
                Open
                <span aria-hidden>↗</span>
              </SmartLink>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
