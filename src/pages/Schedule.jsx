import React, { useMemo, useRef, useState, useEffect } from "react";

/**
 * Tech Minds Academy — Schedules Page (Data-Ready)
 * Always loads from top. No auto-scroll to Today on mount.
 */

const BRAND_GRADIENT = "bg-gradient-to-r from-blue-800 via-blue-200 to-blue-800";
const TIMEZONE_TZID = "Africa/Lagos";

const TRACKS = ["All Tracks", "Web Development", "App Development", "Cloud Computing", "Data & Analytics", "Coding for Kids"];
const LEVELS = ["All Levels", "Beginner", "Intermediate", "Advanced"];
const FORMATS = ["All Formats", "On-Campus (Bwari)", "Online (Live)", "Hybrid"];

/* ------------------------ Demo Template (repeat weekly) ------------------------ */

function mkSession(track, level, format, title, instructor, location, day, startHHMM, endHHMM) {
  return { track, level, format, title, instructor, location, day, startHHMM, endHHMM };
}

const TEMPLATE_SESSIONS = [
  // Monday
  mkSession("Web Development", "Beginner", "Hybrid", "HTML / CSS", "Mr Fortune ", "Bwari Lab A", "Mon", "10:00", "13:00"),
  mkSession("Computer Training", "Beginner", "Hybrid", "Basic Computer Program", "Mr James ", "Bwari Lab A", "Mon", "10:00", "14:30"),
  mkSession("Web Development", "Intermediate", "Hybrid", "Vanilla JavaScript", "Mr Fortune ", "Bwari Lab A", "Mon", "13:00", "15:00"),
  mkSession("Web Development", "Intermediate", "Hybrid", "ReactJS", "Mr Harry", "online (Google Meet)", "Mon", "09:00", "11:30"),
  mkSession("Web Development", "Intermediate", "Hybrid", "ExpressJS", "Mr Michael", "Bwari Lab A", "Mon", "09:30", "12:00"),
  mkSession("App Development", "Intermediate", "Hybrid", "App Development", "Mr Michael", "Bwari Lab A", "Mon", "13:00", "15:30"),
  mkSession("Data Science", "Intermediate", "Hybrid", "Data Science", "Mr James ", "Bwari Lab A", "Mon", "14:00", "16:00"),
  
  
  mkSession("Web Development", "Beginner", "Hybrid", "HTML / CSS", "Mr Fortune ", "Bwari Lab A", "Tue", "10:00", "13:00"),
  mkSession("Web Development", "Intermediate", "Hybrid", "Vanilla JavaScript ", "Mr Fortune ", "Bwari Lab A", "Tue", "13:00", "15:00"),
  mkSession("Computer Training", "Beginner", "Hybrid", "Basic Computer Program", "Mr James ", "Bwari Lab A", "Tue", "10:00", "14:30"),
  mkSession("Web Development", "Intermediate", "Hybrid", "ReactJS", "Mr Harry", "online (Google Meet)", "Tue", "09:00", "11:30"),
  mkSession("App Development", "Intermediate", "Hybrid", "App Development ", "Mr Michael", "Bwari Lab A", "Tue", "13:00", "15:30"),
  mkSession("Digital Marketing", "Intermediate", "Hybrid", "Digital Marketing", "Ms Rachael", "Bwari Lab A", "Tue", "14:00", "16:00"),
  
  
  
  mkSession("Web Development", "Beginner", "Hybrid", "HTML / CSS", "Mr Fortune ", "Bwari Lab A", "Wed", "10:00", "13:00"),
  mkSession("Computer Training", "Beginner", "Hybrid", "Basic Computer Program", "Mr James ", "Bwari Lab A", "Wed", "10:00", "14:30"),
  mkSession("Web Development", "Intermediate", "Hybrid", "Vanilla JavaScript", "Mr Fortune ", "Bwari Lab A", "Wed", "13:00", "15:00"),
  mkSession("Web Development", "Intermediate", "Hybrid", "ReactJS", "Mr Harry", "online (Google Meet)", "Wed", "09:00", "11:30"),
  mkSession("Web Development", "Intermediate", "Hybrid", "ExpressJS", "Mr Michael", "Bwari Lab A", "Wed", "09:30", "12:00"),
  mkSession("App Development", "Intermediate", "Hybrid", "App Development", "Mr Michael", "Bwari Lab A", "Wed", "13:00", "15:30"),
    mkSession("Data Science", "Intermediate", "Hybrid", "Data Science", "Mr James ", "Bwari Lab A", "Wed", "14:00", "16:00"),
  
  
  mkSession("App Development", "Intermediate", "Hybrid", "App Development", "Mr Michael", "Bwari Lab A", "Thu", "13:00", "15:30"),
  mkSession("Web Development", "Intermediate", "Hybrid", "ReactJS", "Mr Harry", "online (Google Meet)", "Thu", "09:00", "11:30"),
  mkSession("Web Development", "Beginner", "Hybrid", "HTML / CSS", "Mr Fortune ", "Bwari Lab A", "Thu", "10:00", "13:00"),
  mkSession("Computer Training", "Intermediate", "Hybrid", "Basic Computer Program", "Mr James ", "Bwari Lab A", "Thu", "10:00", "14:30"),
  mkSession("Web Development", "Intermediate", "Hybrid", "Vanilla JavaScript ", "Mr Fortune", "Bwari Lab A", "Thu", "13:00", "15:00"),

  
  mkSession("Web Development", "Beginner", "Hybrid", "HTML / CSS", "Mr Fortune", "Bwari Lab A", "Fri", "10:00", "13:00"),
  mkSession("Computer Training", "Beginner", "Hybrid", "Basic Computer Program", "Mr James", "Bwari Lab A", "Fri", "10:00", "14:30"),
  mkSession("Web Development", "Intermediate", "Hybrid", "Vanilla JavaScript ", "Mr Fortune ", "Bwari Lab A", "Fri", "13:00", "15:00"),
  mkSession("Digital Marketing", "Intermediate", "Hybrid", "Digital Marketing", "Ms Rachael", "Bwari Lab A", "Fri", "14:00", "16:00"),
  mkSession("Web Development", "Intermediate", "Hybrid", "ReactJS", "Mr Harry", "online (Google Meet)", "Fri", "09:00", "11:30"),
  mkSession("Web Development", "Intermediate", "Hybrid", "ExpressJS", "Mr Michael", "Bwari Lab A", "Fri", "09:30", "12:00"),
  mkSession("Data Science", "Intermediate", "Hybrid", "Data Science", "Mr James ", "Bwari Lab A", "Fri", "14:00", "16:00"),






  
  // // Tuesday
  // mkSession("App Development", "Intermediate", "Online (Live)", "React Native Navigation", "David Sule", "Zoom (portal link)", "Tue", "09:00", "11:30"),
  // mkSession("Web Development", "Intermediate", "Hybrid", "ExpressJS", "Michael Amadi", "Bwari Lab A", "Tue", "14:00", "17:00"),

  // // Wednesday
  // mkSession("Cloud Computing", "Intermediate", "Hybrid", "Deploying to PaaS + HTTPS", "Ifeanyi O.", "Bwari Lab C", "Wed", "10:00", "12:30"),
  // mkSession("Data & Analytics", "Beginner", "On-Campus (Bwari)", "Pandas Basics & CSV Wrangling", "Chidera N.", "Bwari Data Lab", "Wed", "11:00", "13:00"),

  // // Thursday
  // mkSession("Web Development", "Beginner", "Hybrid", "JS Essentials: Arrays & Objects", "Zainab Ali", "Bwari Lab B", "Thu", "12:00", "14:00"),
  // mkSession("Data & Analytics", "Beginner", "On-Campus (Bwari)", "Data Storytelling Workshop", "Chidera N.", "Bwari Data Lab", "Thu", "13:00", "15:00"),

  // // Friday
  // mkSession("Data & Analytics", "Beginner", "On-Campus (Bwari)", "Data Storytelling Workshop (Capstone)", "Chidera N.", "Bwari Data Lab", "Fri", "13:00", "15:00"),
];

function pad2(n) { return String(n).padStart(2, "0"); }
function toISO(d) {
  return `${d.getFullYear()}-${pad2(d.getMonth()+1)}-${pad2(d.getDate())}T${pad2(d.getHours())}:${pad2(d.getMinutes())}:00`;
}
function localDayKey(d) {
  return `${d.getFullYear()}-${pad2(d.getMonth()+1)}-${pad2(d.getDate())}`;
}

function generateWeekSessions(weekMonday) {
  const dayOffset = { Mon: 0, Tue: 1, Wed: 2, Thu: 3, Fri: 4, Sat: 5, Sun: 6 };
  return TEMPLATE_SESSIONS.map((t, i) => {
    const d = new Date(weekMonday);
    d.setDate(weekMonday.getDate() + (dayOffset[t.day] ?? 0));
    const [sh, sm] = t.startHHMM.split(":").map(Number);
    const [eh, em] = t.endHHMM.split(":").map(Number);
    const start = new Date(d); start.setHours(sh || 0, sm || 0, 0, 0);
    const end = new Date(d);   end.setHours(eh || 0, em || 0, 0, 0);
    return {
      id: `tmpl-${localDayKey(d)}-${i}`,
      track: t.track,
      level: t.level,
      format: t.format,
      title: t.title,
      instructor: t.instructor,
      location: t.location,
      start: toISO(start),
      end: toISO(end),
    };
  });
}

/* -------------------------------- Utilities -------------------------------- */

function startOfWeek(date) {
  const d = new Date(date);
  const day = d.getDay(); // 0 Sun .. 6 Sat
  const diff = (day === 0 ? -6 : 1 - day); // Monday start
  d.setDate(d.getDate() + diff);
  d.setHours(0, 0, 0, 0);
  return d;
}
function endOfWeek(date) {
  const s = startOfWeek(date);
  const e = new Date(s);
  e.setDate(s.getDate() + 7);
  return e;
}
function sameDay(a, b) {
  return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();
}
function fmtDate(d, opts) {
  return new Intl.DateTimeFormat(undefined, opts).format(d);
}
function toLocal(dateLike) {
  return new Date(dateLike);
}
function isOngoing(now, s, e) {
  return now >= s && now <= e;
}
function dayKey(d) {
  // FIX: use local day key (avoid UTC shift from toISOString)
  return localDayKey(d);
}

/* --------------------------- Import / Export helpers --------------------------- */

function toICS(sessions) {
  const lines = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Tech Minds Academy//Schedules//EN",
    "CALSCALE:GREGORIAN",
    "METHOD:PUBLISH",
  ];
  sessions.forEach((s) => {
    const uid = `${(s.id || `${s.start}-${s.title}`).replace(/\s+/g, "-")}@techmindsacademy.org`;
    const dtStart = (s.start || "").replace(/[-:]/g, "").slice(0, 15);
    const dtEnd = (s.end || "").replace(/[-:]/g, "").slice(0, 15);
    const summary = escapeICS(`${s.title || ""} — ${s.track || ""}`);
    const location = escapeICS(s.location || "");
    const description = escapeICS(
      `Instructor: ${s.instructor || "TBA"}\nLevel: ${s.level || ""}\nFormat: ${s.format || ""}`
    );
    lines.push(
      "BEGIN:VEVENT",
      `UID:${uid}`,
      `DTSTART;TZID=${TIMEZONE_TZID}:${dtStart}`,
      `DTEND;TZID=${TIMEZONE_TZID}:${dtEnd}`,
      `SUMMARY:${summary}`,
      `LOCATION:${location}`,
      `DESCRIPTION:${description}`,
      "END:VEVENT"
    );
  });
  lines.push("END:VCALENDAR");
  return lines.join("\r\n");
}
function escapeICS(text) {
  return String(text).replace(/\\/g, "\\\\").replace(/;/g, "\\;").replace(/,/g, "\\,").replace(/\r?\n/g, "\\n");
}

function toCSV(sessions) {
  const header = ["Title", "Track", "Level", "Format", "Instructor", "Location", "Start", "End"];
  const rows = sessions.map((s) => [
    s.title || "", s.track || "", s.level || "", s.format || "", s.instructor || "", s.location || "", s.start || "", s.end || "",
  ]);
  const escape = (v) => `"${String(v).replace(/"/g, '""')}"`;
  return [header, ...rows].map((r) => r.map(escape).join(",")).join("\n");
}

function parseCSV(text) {
  const rows = [];
  let i = 0, field = "", row = [], inQuotes = false;
  while (i < text.length) {
    const c = text[i];
    if (inQuotes) {
      if (c === '"' && text[i + 1] === '"') { field += '"'; i += 2; continue; }
      if (c === '"') { inQuotes = false; i++; continue; }
      field += c; i++; continue;
    } else {
      if (c === '"') { inQuotes = true; i++; continue; }
      if (c === ",") { row.push(field); field = ""; i++; continue; }
      if (c === "\n" || c === "\r") {
        if (c === "\r" && text[i + 1] === "\n") i++;
        row.push(field); rows.push(row); field = ""; row = []; i++; continue;
      }
      field += c; i++; continue;
    }
  }
  if (field.length || row.length) { row.push(field); rows.push(row); }
  const [header = [], ...body] = rows;
  const idx = Object.fromEntries(header.map((h, i) => [String(h).trim().toLowerCase(), i]));
  return body.map((r, j) => {
    const get = (k) => (r?.[idx[k]] ?? "").toString();
    const start = get("start").slice(0,19);
    const end = get("end").slice(0,19);
    return {
      id: `csv-${j}`,
      title: get("title"),
      track: get("track") || "Web Development",
      level: get("level") || "Beginner",
      format: get("format") || "On-Campus (Bwari)",
      instructor: get("instructor") || "TBA",
      location: get("location") || "",
      start,
      end,
    };
  }).filter(e => e.title || e.start);
}

function parseICS(text) {
  const events = [];
  const blocks = text.split("BEGIN:VEVENT").slice(1);
  for (const block of blocks) {
    const lines = block.split(/\r?\n/).map((l) => l.trim());
    const get = (prefix) => {
      const L = lines.find((l) => l.startsWith(prefix));
      return L ? L.split(":").slice(1).join(":") : "";
    };
    const DTSTART = get("DTSTART");
    const DTEND = get("DTEND");
    const SUMMARY = get("SUMMARY");
    const LOCATION = get("LOCATION");
    const DESCRIPTION = get("DESCRIPTION");

    let title = SUMMARY || "";
    let track = "Web Development";
    if (SUMMARY && SUMMARY.includes("—")) {
      const parts = SUMMARY.split("—");
      title = parts[0].trim();
      track = parts.slice(1).join("—").trim() || track;
    }
    const meta = parseDescriptionMeta(DESCRIPTION);
    events.push({
      id: `ics-${events.length}`,
      title,
      track,
      level: meta.level || "Beginner",
      format: meta.format || "On-Campus (Bwari)",
      instructor: meta.instructor || "TBA",
      location: LOCATION || "",
      start: icsToISO(DTSTART),
      end: icsToISO(DTEND),
    });
  }
  return events.filter(e => e.title || e.start);
}

function parseDescriptionMeta(text) {
  const m = {};
  const lines = decodeICS(text || "").split("\\n").map((l) => l.trim());
  for (const line of lines) {
    const [k, ...rest] = line.split(":");
    const v = (rest.join(":") || "").trim();
    if (/^level$/i.test(k)) m.level = v;
    if (/^format$/i.test(k)) m.format = v;
    if (/^instructor$/i.test(k)) m.instructor = v;
  }
  return m;
}
function decodeICS(text) {
  return String(text).replace(/\\n/g, "\n").replace(/\\,/g, ",").replace(/\\;/g, ";").replace(/\\\\/g, "\\");
}
function icsToISO(dt) {
  if (!dt) return "";
  const clean = dt.replace(/^.*:/, "");
  const y = clean.slice(0,4), m = clean.slice(4,6), d = clean.slice(6,8);
  const hh = clean.slice(9,11) || "00", mm = clean.slice(11,13) || "00", ss = clean.slice(13,15) || "00";
  return `${y}-${m}-${d}T${hh}:${mm}:${ss}`;
}

/* --------------------------------- Component --------------------------------- */

export default function SchedulesPage() {
  const [weekAnchor, setWeekAnchor] = useState(() => startOfWeek(new Date()));
  const [track, setTrack] = useState("All Tracks");
  const [level, setLevel] = useState("All Levels");
  const [format, setFormat] = useState("All Formats");
  const [query, setQuery] = useState("");

  // Sessions: template for this week (can be replaced via import)
  const [sessions, setSessions] = useState(() => generateWeekSessions(startOfWeek(new Date())));

  const weekStart = weekAnchor;
  const weekEnd = endOfWeek(weekAnchor);
  const today = new Date();
  const todayId = dayKey(today);

  /* Always load from top and disable browser scroll restoration */
  useEffect(() => {
    const prev = window.history.scrollRestoration;
    try { window.history.scrollRestoration = "manual"; } catch {}
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    return () => {
      try { window.history.scrollRestoration = prev || "auto"; } catch {}
    };
  }, []);

  const filtered = useMemo(() => {
    return sessions
      .filter((s) => {
        const st = toLocal(s.start);
        if (!(st >= weekStart && st < weekEnd)) return false;

        const matchesTrack = track === "All Tracks" || s.track === track;
        const matchesLevel = level === "All Levels" || (s.level || "") === level;
        const matchesFormat = format === "All Formats" || (s.format || "") === format;
        const q = query.trim().toLowerCase();
        const matchesQuery =
          !q ||
          (s.title || "").toLowerCase().includes(q) ||
          (s.instructor || "").toLowerCase().includes(q) ||
          (s.location || "").toLowerCase().includes(q) ||
          (s.track || "").toLowerCase().includes(q);
        return matchesTrack && matchesLevel && matchesFormat && matchesQuery;
      })
      .sort((a, b) => new Date(a.start) - new Date(b.start));
  }, [sessions, weekStart, weekEnd, track, level, format, query]);

  const byDay = useMemo(() => {
    const map = new Map();
    filtered.forEach((s) => {
      const d = toLocal(s.start);
      const key = dayKey(d);
      if (!map.has(key)) map.set(key, []);
      map.get(key).push(s);
    });
    return map;
  }, [filtered]);

  const icsLink = useRef(null);
  const csvLink = useRef(null);
  const fileInputRef = useRef(null);

  function scrollTop() {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }

  function shiftWeek(delta) {
    const d = new Date(weekAnchor);
    d.setDate(d.getDate() + 7 * delta);
    setWeekAnchor(startOfWeek(d));
    scrollTop(); // keep UX consistent when changing week
  }

  function goToThisWeek() {
    setWeekAnchor(startOfWeek(new Date()));
    scrollTop();
  }

  function exportICS() {
    const text = toICS(filtered);
    const blob = new Blob([text], { type: "text/calendar;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    if (icsLink.current) {
      icsLink.current.href = url;
      icsLink.current.download = `techminds-schedule-${fmtDate(weekStart, { year: "numeric", month: "2-digit", day: "2-digit" })}.ics`;
      icsLink.current.click();
      URL.revokeObjectURL(url);
    }
  }
  function exportCSV() {
    const text = toCSV(filtered);
    const blob = new Blob([text], { type: "text/csv;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    if (csvLink.current) {
      csvLink.current.href = url;
      csvLink.current.download = `techminds-schedule-${fmtDate(weekStart, { year: "numeric", month: "2-digit", day: "2-digit" })}.csv`;
      csvLink.current.click();
      URL.revokeObjectURL(url);
    }
  }
  function handlePrint() {
    window.print();
  }

  // ----------- Import via URL / File -----------
  async function importFromURL() {
    const url = window.prompt("Paste a JSON / CSV / ICS URL (same-origin or CORS-enabled):");
    if (!url) return;
    try {
      const res = await fetch(url);
      const contentType = (res.headers.get("content-type") || "").toLowerCase();
      const text = await res.text();

      if (url.endsWith(".json") || contentType.includes("application/json")) {
        setSessions(normalizeJSON(JSON.parse(text)));
      } else if (url.endsWith(".csv") || contentType.includes("text/csv")) {
        setSessions(parseCSV(text));
      } else if (url.endsWith(".ics") || contentType.includes("text/calendar")) {
        setSessions(parseICS(text));
      } else {
        try {
          setSessions(normalizeJSON(JSON.parse(text)));
        } catch {
          alert("Unsupported format. Use .json, .csv, or .ics");
        }
      }
      setWeekAnchor(startOfWeek(new Date())); // jump back to current week
      scrollTop();
    } catch (e) {
      alert("Failed to load. Check the URL / CORS permissions.");
    }
  }

  function normalizeJSON(data) {
    const arr = Array.isArray(data) ? data : (data?.sessions || []);
    return arr.map((s, i) => {
      const start = (s?.start || "").toString().slice(0,19);
      const end = (s?.end || "").toString().slice(0,19);
      return {
        id: s?.id || `json-${i}`,
        title: s?.title || "",
        track: s?.track || "Web Development",
        level: s?.level || "Beginner",
        format: s?.format || "On-Campus (Bwari)",
        instructor: s?.instructor || "TBA",
        location: s?.location || "",
        start,
        end,
      };
    }).filter(e => e.title || e.start);
  }

  function triggerFilePick() {
    if (fileInputRef.current) fileInputRef.current.click();
  }
  function onFileChosen(e) {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      const text = String(reader.result || "");
      const name = (file.name || "").toLowerCase();
      try {
        if (name.endsWith(".json")) {
          setSessions(normalizeJSON(JSON.parse(text)));
        } else if (name.endsWith(".csv")) {
          setSessions(parseCSV(text));
        } else if (name.endsWith(".ics")) {
          setSessions(parseICS(text));
        } else {
          alert("Unsupported file type. Use .json, .csv, or .ics");
          return;
        }
        setWeekAnchor(startOfWeek(new Date()));
        scrollTop();
      } catch {
        alert("Could not parse the file.");
      }
    };
    reader.readAsText(file);
    e.target.value = ""; // reset so same file can be re-selected
  }

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div aria-hidden className={`absolute inset-x-0 -top-24 h-48 opacity-25 blur-3xl ${BRAND_GRADIENT}`} />
        <div className="mx-auto max-w-6xl px-4 pt-12 pb-8 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold text-blue-800/80 tracking-wide">
            Tech Minds Academy — Abuja (Bwari)
          </p>
          <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            Schedules & Timetable
          </h1>
          <p className="mt-3 max-w-3xl text-gray-600">
            Week of{" "}
            <span className="font-semibold">
              {fmtDate(weekStart, { weekday: "long", day: "numeric", month: "short" })} —{" "}
              {fmtDate(new Date(endOfWeek(weekStart).getTime() - 1), { weekday: "long", day: "numeric", month: "short", year: "numeric" })}
            </span>{" "}
            · Timezone: <span className="font-mono">WAT ({TIMEZONE_TZID})</span>
          </p>

          {/* Actions */}
          <div className="mt-6 flex flex-wrap gap-3">
            {/* <button onClick={() => shiftWeek(-1)} className="rounded-2xl px-4 py-2 text-sm font-semibold text-gray-900 bg-white border border-gray-200 hover:border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-700/20">
              ← Previous Week
            </button> */}
            <button onClick={goToThisWeek} className="rounded-2xl px-4 py-2 text-sm font-semibold text-white bg-gray-900 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-900/30">
              This Week
            </button>
            {/* <button onClick={() => shiftWeek(1)} className="rounded-2xl px-4 py-2 text-sm font-semibold text-gray-900 bg-white border border-gray-200 hover:border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-700/20">
              Next Week →
            </button> */}

            <div className="flex-1" />

            <button
              onClick={() => {
                const el = document.getElementById(todayId);
                if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
              }}
              className="rounded-2xl px-4 py-2 text-sm font-semibold text-gray-900 bg-white border border-gray-200 hover:border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-700/20"
              >
              Jump to Today
            </button>

            {/* <button onClick={handlePrint} className="rounded-2xl px-4 py-2 text-sm font-semibold text-white bg-gray-900 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-900/30">
              className="rounded-2xl px-4 py-2 text-sm font-semibold text-gray-900 bg-white border border-gray-200 hover:border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-700/20"
              Print
            </button>
            <button onClick={exportICS} className="rounded-2xl px-4 py-2 text-sm font-semibold text-gray-900 bg-white border border-gray-200 hover:border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-700/20">
              Export ICS
            </button>
              <button onClick={exportCSV} className="rounded-2xl px-4 py-2 text-sm font-semibold text-gray-900 bg-white border border-gray-200 hover:border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-700/20">
              Export CSV
            </button> */}

            {/* Import */}
            {/* <button onClick={importFromURL} 
              Import via URL
            </button>
            <button onClick={triggerFilePick} className="rounded-2xl px-4 py-2 text-sm font-semibold text-gray-900 bg-white border border-gray-200 hover:border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-700/20">
              Import File (JSON/CSV/ICS)
            </button> */}
            <input ref={fileInputRef} type="file" accept=".json,.csv,.ics,text/calendar,text/csv,application/json" className="hidden" onChange={onFileChosen} />

            <a ref={icsLink} className="hidden" />
            <a ref={csvLink} className="hidden" />
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/95 border-y">
        <div className="mx-auto max-w-6xl px-4 py-3 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div className="flex flex-wrap items-center gap-2">
              <Select label="Track" value={track} onChange={setTrack} options={TRACKS} />
              <Select label="Level" value={level} onChange={setLevel} options={LEVELS} />
              <Select label="Format" value={format} onChange={setFormat} options={FORMATS} />
            </div>
            <div className="flex items-center gap-2 w-full md:w-auto">
              <SearchInput value={query} onChange={setQuery} />
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        {Array.from({ length: 7 }).map((_, i) => {
          const d = new Date(weekStart);
          d.setDate(weekStart.getDate() + i);
          const key = dayKey(d);
          const items = byDay.get(key) || [];
          const isToday = sameDay(d, today);
          return <DaySection key={key} id={key} date={d} sessions={items} isToday={isToday} />;
        })}

        {filtered.length === 0 && (
          <div className="mt-8 rounded-2xl border bg-white p-8 text-center text-gray-600 shadow-sm">
            No sessions match your filters for this week.
          </div>
        )}
      </section>
    </main>
  );
}

/* ------------------------------- UI Components ------------------------------- */

function DaySection({ id, date, sessions, isToday }) {
  return (
    <section id={id} className="mb-6">
      <header className="sticky top-[92px] z-10">
        <div className={`flex items-center justify-between rounded-2xl border bg-white px-4 py-3 shadow-sm ${isToday ? "border-blue-200" : ""}`}>
          <div className="flex items-baseline gap-3">
            <h2 className="text-lg sm:text-xl font-bold text-gray-900">
              {fmtDate(date, { weekday: "long" })},{" "}
              {fmtDate(date, { day: "numeric", month: "long", year: "numeric" })}
            </h2>
            {isToday && (
              <span className="inline-flex items-center rounded-full bg-emerald-50 px-2.5 py-0.5 text-xs font-semibold text-blue-800 border border-blue-200">
                Today
              </span>
            )}
          </div>
          <div className={`h-2 w-24 rounded-full ${BRAND_GRADIENT}`} />
        </div>
      </header>

      <div className="mt-3 space-y-3">
        {sessions.length > 0 ? (
          sessions.map((s) => <SessionCard key={s.id} session={s} />)
        ) : (
          <div className="rounded-2xl border bg-white p-6 text-gray-500 shadow-sm">
            — No sessions scheduled —
          </div>
        )}
      </div>
    </section>
  );
}

function SessionCard({ session }) {
  const now = new Date();
  const start = toLocal(session.start);
  const end = toLocal(session.end);
  const live = isOngoing(now, start, end);

  return (
    <article className="rounded-2xl border bg-white shadow-sm p-4 sm:p-5">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
        <div className="min-w-0">
          <h3 className="text-base sm:text-lg font-bold text-gray-900">{session.title}</h3>
          <p className="text-sm text-gray-600">
            {session.track} • {session.level} • {session.format}
          </p>
        </div>

        <div className="flex items-center gap-2">
          <TimeBadge start={start} end={end} live={live} />
        </div>
      </div>

      <div className="mt-3 grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm">
        <InfoRow label="Instructor" value={session.instructor || "TBA"} />
        <InfoRow label="Location" value={session.location || "TBA"} />
        <InfoRow
          label="Duration"
          value={`${fmtDate(start, { hour: "2-digit", minute: "2-digit" })} – ${fmtDate(end, { hour: "2-digit", minute: "2-digit" })}`}
        />
      </div>
    </article>
  );
}

function InfoRow({ label, value }) {
  return (
    <div className="flex items-center gap-2">
      <span className="text-gray-500">{label}:</span>
      <span className="font-medium text-gray-900">{value}</span>
    </div>
  );
}

function TimeBadge({ start, end, live }) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-xl border px-3 py-1.5 text-xs font-semibold ${
        live ? "text-blue-800 bg-blue-50 border-blue-200" : "text-gray-900 bg-white border-gray-200"
      }`}
    >
      <svg className={`h-2.5 w-2.5 ${live ? "text-blue-600" : "text-gray-400"}`} viewBox="0 0 24 24" fill="currentColor">
        <circle cx="12" cy="12" r="6" />
      </svg>
      {fmtDate(start, { hour: "2-digit", minute: "2-digit" })} – {fmtDate(end, { hour: "2-digit", minute: "2-digit" })}
      {live && <span className="ml-1">• Live</span>}
    </span>
  );
}

function SearchInput({ value, onChange }) {
  return (
    <label className="relative block w-full md:w-80">
      <span className="sr-only">Search schedule</span>
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search title, instructor, location…"
        className="w-full rounded-2xl border border-gray-200 bg-white py-2.5 pl-10 pr-3 text-sm text-gray-900 placeholder:text-gray-400 shadow-sm focus:border-blue-700 focus:ring-2 focus:ring-blue-700/20"
        type="text"
      />
      <svg className="pointer-events-none absolute left-3 top-2.5 h-5 w-5 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="11" cy="11" r="7" />
        <path d="M21 21l-3.6-3.6" />
      </svg>
    </label>
  );
}

function Select({ label, value, onChange, options }) {
  const [open, setOpen] = useState(false);
  const id = label.toLowerCase().replace(/\s+/g, "-");
  const wrapperRef = useRef(null);

  // Close on outside click, Escape, or scroll (prevents sticky bar jumpiness)
  useEffect(() => {
    function onDocClick(e) {
      if (!wrapperRef.current) return;
      if (!wrapperRef.current.contains(e.target)) setOpen(false);
    }
    function onKey(e) {
      if (e.key === "Escape") setOpen(false);
    }
    function onScroll() {
      setOpen(false);
    }
    document.addEventListener("mousedown", onDocClick);
    document.addEventListener("keydown", onKey);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      document.removeEventListener("mousedown", onDocClick);
      document.removeEventListener("keydown", onKey);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div className="relative" ref={wrapperRef}>
      <button
        aria-haspopup="listbox"
        aria-expanded={open}
        id={`${id}-button`}
        onClick={() => setOpen((v) => !v)}
        className="inline-flex items-center gap-2 rounded-2xl border border-gray-200 bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm hover:border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-700/20"
      >
        <span className="text-gray-500">{label}:</span>
        <span>{value}</span>
        <svg className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`} viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none">
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>

      {open && (
        <ul
          role="listbox"
          aria-labelledby={`${id}-button`}
          className="absolute z-30 mt-2 w-64 max-h-72 overflow-auto rounded-2xl border border-gray-200 bg-white py-1 shadow-lg"
        >
          {options.map((opt) => {
            const active = opt === value;
            return (
              <li key={opt}>
                <button
                  role="option"
                  aria-selected={active}
                  onClick={() => { onChange(opt); setOpen(false); }}
                  className={`flex w-full items-center justify-between px-3 py-2 text-sm hover:bg-gray-50 ${active ? "font-semibold text-blue-800" : "text-gray-800"}`}
                >
                  <span>{opt}</span>
                  {active && (
                    <svg className="h-4 w-4" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none">
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
