// NavBar2.jsx
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "react-feather";
import Logo from "../assets/Logo.png";

export default function NavBar2() {
  const [open, setOpen] = useState(false);
  const [mobileProgramsOpen, setMobileProgramsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();
  const navWrapRef = useRef(null);
  const navRef = useRef(null);

  // Close menus on route change
  useEffect(() => {
    setOpen(false);
    setMobileProgramsOpen(false);
  }, [pathname]);

  // Click outside to close (mobile)
  useEffect(() => {
    const handler = (e) => {
      if (!navWrapRef.current) return;
      if (!navWrapRef.current.contains(e.target)) {
        setOpen(false);
        setMobileProgramsOpen(false);
      }
    };
    if (open) document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [open]);

  // Scroll shadow
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Measure nav height for spacer
  useLayoutEffect(() => {
    const setVar = () => {
      if (!navRef.current) return;
      const h = navRef.current.getBoundingClientRect().height;
      document.documentElement.style.setProperty("--nav-h", `${Math.ceil(h)}px`);
    };
    setVar();
    const ro = new ResizeObserver(setVar);
    if (navRef.current) ro.observe(navRef.current);
    return () => ro.disconnect();
  }, []);

  return (
    <>
      {/* Spacer pushes content below fixed nav */}
      <div style={{ height: "calc(var(--nav-h, 72px) + env(safe-area-inset-top, 0px))" }} />

      <div className="custom-navbar-root" ref={navWrapRef}>
        <style>{`
          :root { --nav-h: 72px; }

          .custom-navbar-root {
            position: fixed;
            top: 0; left: 0; right: 0;
            z-index: 1000;
          }

          nav.custom {
            background: rgba(255, 255, 255, 0.84);
            -webkit-backdrop-filter: blur(10px);
            backdrop-filter: blur(10px);
            border-bottom: 1px solid rgba(0, 0, 0, 0.08);
            padding: calc(0.5rem + env(safe-area-inset-top, 0px)) 2rem 0.75rem 2rem;
            display: flex; justify-content: space-between; align-items: center;
            transition: box-shadow 0.25s ease, border-color 0.25s ease, background 0.25s ease;
          }
          nav.custom.scrolled {
            box-shadow: 0 6px 18px -10px rgba(0,0,0,0.25);
            border-bottom-color: rgba(0,0,0,0.12);
            background: rgba(255, 255, 255, 0.9);
          }

          @media (max-width: 768px) {
            nav.custom { padding: calc(0.5rem + env(safe-area-inset-top, 0px)) 1rem 0.75rem 1rem; }
          }

          .logo-container { display: flex; align-items: center; gap: 0.75rem; text-decoration: none; }
          .logo-text {
            font-size: 1.2rem; font-weight: 800;
            background: linear-gradient(90deg, #3b82f6 0%, #3b82f6 50%, #3b82f6 100%);
            -webkit-background-clip: text; background-clip: text; color: transparent;
            letter-spacing: -0.025em; line-height: 1;
          }
          .logo-sub {
            display: block; font-size: 0.7rem; font-weight: 700;
            background: linear-gradient(90deg, #065f46, #10b981, #065f46);
            -webkit-background-clip: text; background-clip: text; color: transparent;
            letter-spacing: .02em; margin-top: 2px;
          }

          /* verification badge (scalloped like twitter/x) */
          .verify-badge {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            margin-left: .35rem;
            vertical-align: middle;
            transform: translateY(-1px);
            border-radius: 999px;
            line-height: 0;
            box-shadow: 0 0 0 2px rgba(255,255,255,.85);
          }
          .verify-badge svg {
            width: 18px; height: 18px;
            filter: drop-shadow(0 1px 1px rgba(0,0,0,.08));
          }
          .verify-badge:hover { box-shadow: 0 0 0 2px rgba(59,130,246,.25); }

          .nav-links { display: flex; gap: 1.5rem; align-items: center; }

          .nav-link {
            position: relative; font-weight: 600; color: #1f2937; padding: 0.5rem 0; text-decoration: none; transition: all .2s ease;
          }
          .nav-link:hover { color: #2c23e7ff; }
          .nav-link::after {
            content:''; position:absolute; bottom:0; left:0; width:0; height:2px;
            background: linear-gradient(90deg, #2822d3ff 0%, #2c23e7ff 100%);
            transition: width .3s ease;
          }
          .nav-link:hover::after, .nav-link[aria-current="page"]::after { width:100%; }

          .cta-button {
            background: linear-gradient(90deg, #2c23e7ff 0%, #2921d0ff 100%);
            color:#fff; padding: .5rem 1.5rem; border-radius: .5rem; font-weight: 600;
            transition: all .2s ease; border: none; cursor: pointer; text-decoration: none; white-space: nowrap;
            box-shadow: 0 4px 6px -1px rgba(124,58,237,.2);
          }
          .cta-button:hover { transform: translateY(-1px); box-shadow: 0 10px 15px -3px rgba(124,58,237,.3); }

          .mobile-menu-button { display: none; background: none; border: 1px solid rgba(0,0,0,0.1); border-radius: .5rem; cursor: pointer; padding: .5rem; line-height: 0; }
          @media (max-width: 768px) { .nav-links { display: none; } .mobile-menu-button { display: block; } }

          /* Desktop dropdown */
          .dropdown { position: relative; }
          .dropdown-btn { display: inline-flex; align-items: center; gap: .35rem; cursor: default; }
          .dropdown-menu {
            display: none; position: absolute; top: calc(100% + 10px); left: 0;
            min-width: 260px; background: #fff; border: 1px solid rgba(0,0,0,0.08);
            border-radius: .75rem; padding: .5rem; box-shadow: 0 12px 28px rgba(2,8,20,.12);
          }
          .dropdown:hover .dropdown-menu,
          .dropdown:focus-within .dropdown-menu { display: block; }
          .dropdown-item {
            display:flex; align-items:center; gap:.6rem; padding:.55rem .65rem; border-radius:.5rem; text-decoration:none; color:#111827; font-weight: 500;
          }
          .dropdown-item:hover { background: rgba(44,35,231,.06); color:#2c23e7ff; }

          /* Mobile menu (fixed) */
          .mobile-menu {
            display: none; flex-direction: column; gap: 1rem; padding: 1rem; background: #fff;
            border-radius: .5rem; box-shadow: 0 10px 15px -3px rgba(0,0,0,.1);
            position: fixed; top: calc(var(--nav-h,72px) + 8px); right: 2rem; width: min(340px, 88vw);
            z-index: 1001; border: 1px solid rgba(0,0,0,.06);
          }
          .mobile-menu.open { display: flex; }
          @media (max-width: 768px) { .mobile-menu { right: 1rem; } }

          .mobile-group { display: flex; flex-direction: column; gap: .5rem; }
          .mobile-accordion-btn {
            display:flex; justify-content:space-between; align-items:center;
            padding:.6rem .75rem; border-radius:.5rem; border:1px solid rgba(0,0,0,.08);
            background:#f9fafb; font-weight:600; color:#1f2937;
          }
          .mobile-submenu { display: grid; gap: .4rem; padding:.6rem .25rem 0 .25rem; }
          .mobile-submenu a { padding:.45rem .5rem; border-radius:.4rem; text-decoration:none; color:#111827; }
          .mobile-submenu a:hover { background: rgba(44,35,231,.06); color:#2c23e7ff; }

          .mobile-cta-button { width: 100%; text-align: center; }
        `}</style>

        <nav
          className={`custom ${scrolled ? "scrolled" : ""}`}
          ref={navRef}
          role="navigation"
          aria-label="Primary"
        >
          {/* Brand */}
          <Link to="/" className="logo-container" aria-label="Tech Minds Academy Home">
            <img src={Logo} width={64} height={64} alt="Tech Minds Academy logo" />
            <span>
              <span className="logo-text">
                Tech Minds Academy
                {/* scalloped verification badge */}
                <span className="verify-badge" role="img" aria-label="Verified account" title="Verified">
                  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    {/* scalloped blob */}
                    <path
                      fill="#1DA1F2"
                      d="M22 12c0 .9-.7 1.6-1.6 1.8.2.9-.2 1.8-1 2.3.3.8.1 1.8-.6 2.4-.7.6-1.6.8-2.4.6-.5.8-1.4 1.2-2.3 1-.2.9-.9 1.6-1.8 1.6s-1.6-.7-1.8-1.6c-.9.2-1.8-.2-2.3-1-.8.3-1.8.1-2.4-.6-.6-.7-.8-1.6-.6-2.4-.8-.5-1.2-1.4-1-2.3-.9-.2-1.6-.9-1.6-1.8s.7-1.6 1.6-1.8c-.2-.9.2-1.8 1-2.3-.3-.8-.1-1.8.6-2.4.7-.6 1.6-.8 2.4-.6.5-.8 1.4-1.2 2.3-1 .2-.9.9-1.6 1.8-1.6s1.6.7 1.8 1.6c.9-.2 1.8.2 2.3 1 .8-.3 1.8-.1 2.4.6.6.7.8 1.6.6 2.4.8.5 1.2 1.4 1 2.3.9.2 1.6.9 1.6 1.8z"
                    />
                    {/* check */}
                    <path
                      d="M9.2 12.7l1.9 1.9 3.9-3.9"
                      fill="none"
                      stroke="#fff"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </span>
              <span className="logo-sub">School of the Geeks</span>
            </span>
          </Link>

          {/* Desktop links + Programs dropdown */}
          <div className="nav-links" aria-label="Main">
            <NavLinkExact to="/">Home</NavLinkExact>
            <NavLinkPrefix to="/facilities">Facilities</NavLinkPrefix>

            {/* Programs (dropdown) */}
            <div className="dropdown">
              <span className="nav-link dropdown-btn" tabIndex={0} aria-haspopup="true" aria-expanded="false">
                Programs ▾
              </span>
              <div className="dropdown-menu" role="menu" aria-label="Programs">
                <Link to="/programs/software-engineering/web-development" className="dropdown-item" role="menuitem">
                  Web Development
                </Link>
                <Link to="/programs/software-engineering/app-development" className="dropdown-item" role="menuitem">
                  App Development
                </Link>
                <Link to="/programs/data-science" className="dropdown-item" role="menuitem">
                  Data Science
                </Link>
                <Link to="/programs/cloud-computing" className="dropdown-item" role="menuitem">
                  Cloud Computing
                </Link>
                <Link to="/programs/digital-marketing" className="dropdown-item" role="menuitem">
                  Digital Marketing
                </Link>
                <Link to="/programs/coding-for-kids-engineering" className="dropdown-item" role="menuitem">
                  Coding for Kids Engineering
                </Link>
              </div>
            </div>

            <NavLinkPrefix to="/contact">Contact</NavLinkPrefix>
            <Link to="/application" className="cta-button">Apply Now</Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="mobile-menu-button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>

          {/* Mobile menu with Programs accordion */}
          <div className={`mobile-menu ${open ? "open" : ""}`}>
            <NavLinkExact to="/">Home</NavLinkExact>
            <NavLinkPrefix to="/facilities">Facilities</NavLinkPrefix>

            <div className="mobile-group">
              <button
                type="button"
                className="mobile-accordion-btn"
                onClick={() => setMobileProgramsOpen((v) => !v)}
                aria-expanded={mobileProgramsOpen}
                aria-controls="mobile-programs"
              >
                Programs
                <span>{mobileProgramsOpen ? "▴" : "▾"}</span>
              </button>
              {mobileProgramsOpen && (
                <div id="mobile-programs" className="mobile-submenu">
                  <Link to="/programs/software-engineering/web-development">Web Development</Link>
                  <Link to="/programs/software-engineering/app-development">App Development</Link>
                  <Link to="/programs/data-science">Data Science</Link>
                  <Link to="/programs/cloud-computing">Cloud Computing</Link>
                  <Link to="/programs/digital-marketing">Digital Marketing</Link>
                  <Link to="/programs/coding-for-kids-engineering">Coding for Kids Engineering</Link>
                  <Link to="/programs">View all Programs →</Link>
                </div>
              )}
            </div>

            <NavLinkPrefix to="/contact">Contact</NavLinkPrefix>
            <Link to="/application" className="cta-button mobile-cta-button">Apply Now</Link>
          </div>
        </nav>
      </div>
    </>
  );
}

/* -------- Helpers for aria-current handling -------- */
function useAriaCurrent(to, mode) {
  const { pathname } = useLocation();
  if (mode === "exact") return pathname === to ? "page" : undefined;
  return pathname.startsWith(to) ? "page" : undefined;
}
function NavLinkExact({ to, children }) {
  const aria = useAriaCurrent(to, "exact");
  return (
    <Link to={to} className="nav-link" aria-current={aria}>
      {children}
    </Link>
  );
}
function NavLinkPrefix({ to, children }) {
  const aria = useAriaCurrent(to, "prefix");
  return (
    <Link to={to} className="nav-link" aria-current={aria}>
      {children}
    </Link>
  );
}
