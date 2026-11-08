import React, { useState, useEffect } from "react";
import { FileText, Menu, X } from "lucide-react";

const navLinks = [
  { label: "HOME", href: "#home" },
  { label: "ABOUT", href: "#about" },
  { label: "PROJECTS", href: "#projects" },
  { label: "SKILLS", href: "#skills" },
  { label: "FOCUS", href: "#focus" },
  { label: "EDUCATION", href: "#education" },
  { label: "CONTACT", href: "#contact" }
];

export function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sectionIds = navLinks.map((l) => l.href.substring(1));
      const scrollPos = window.scrollY + 180;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sectionIds[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileOpen(false);
    const targetId = href.substring(1);
    const targetEl = document.getElementById(targetId);

    if (targetEl) {
      if (window.lenisInstance) {
        window.lenisInstance.scrollTo(targetEl, { offset: -72, duration: 1.0 });
      } else {
        targetEl.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <>
      <header className={`navbar-header ${scrolled ? "scrolled" : ""}`}>
        <div className="container navbar-inner">
          {/* Left: Compact Text Logo SJ with tiny violet accent & name JASHWANTH */}
          <a href="#home" className="nav-brand-lockup" onClick={(e) => handleNavClick(e, "#home")}>
            <span className="brand-sj">
              SJ<span className="accent-dot">.</span>
            </span>
            <span className="brand-name">JASHWANTH</span>
          </a>

          {/* Center: Desktop Navigation Links */}
          <nav className="nav-links-desktop" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const id = link.href.substring(1);
              const isActive = activeSection === id;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  className={`nav-link ${isActive ? "active" : ""}`}
                  onClick={(e) => handleNavClick(e, link.href)}
                >
                  <span className="link-text">{link.label}</span>
                  {isActive && <span className="active-pip" />}
                </a>
              );
            })}
          </nav>

          {/* Right: Compact Outlined Resume Button + Document Icon */}
          <div className="nav-right-cluster">
            <a
              className="btn-resume-nav"
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              aria-label="View Resume PDF"
            >
              <span>RESUME</span>
              <FileText size={13} className="resume-icon" />
            </a>

            {/* Mobile Menu Trigger */}
            <button
              className="mobile-menu-toggle"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              type="button"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer (Rendered outside header to avoid backdrop-filter containing block trap) */}
      <div className={`mobile-nav-panel ${mobileOpen ? "open" : ""}`} aria-hidden={!mobileOpen}>
        <div className="mobile-nav-content">
          <div className="mobile-nav-top">
            <span className="mobile-brand">INDEX // NAVIGATION</span>
            <button
              className="mobile-close"
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
              type="button"
            >
              <X size={18} />
            </button>
          </div>

          <nav className="mobile-links-list">
            {navLinks.map((link, idx) => (
              <a
                key={link.label}
                href={link.href}
                className="mobile-link"
                onClick={(e) => handleNavClick(e, link.href)}
              >
                <span className="mobile-idx">0{idx + 1}</span>
                <span className="mobile-label">{link.label}</span>
              </a>
            ))}
          </nav>

          <div className="mobile-footer-action">
            <a
              className="btn-resume-nav full-width"
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
            >
              <span>VIEW RESUME PDF</span>
              <FileText size={14} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
