import React from "react";
import { ArrowUp, Github, Linkedin } from "lucide-react";

export function Footer() {
  const scrollToTop = (e) => {
    e.preventDefault();
    if (window.lenisInstance) {
      window.lenisInstance.scrollTo(0, { duration: 1.1 });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className="footer-style2">
      <div className="container footer-grid-inner">
        {/* Left: Brand Identity */}
        <div className="footer-col-left">
          <a href="#home" className="footer-logo-link" onClick={scrollToTop}>
            <span className="logo-box">SJ<span className="accent-dot">.</span></span>
            <span className="logo-name">SAI JASHWANTH</span>
          </a>
          <span className="footer-headline-tag">
            Software Engineer · Java · Full-Stack Development
          </span>
        </div>

        {/* Center: Social Links */}
        <div className="footer-col-center">
          <a
            href="https://github.com/jashwanth7636"
            target="_blank"
            rel="noreferrer"
            className="footer-social-link"
          >
            <Github size={14} />
            <span>GITHUB</span>
          </a>
          <a
            href="https://www.linkedin.com/in/sai-jashwanth-015743305"
            target="_blank"
            rel="noreferrer"
            className="footer-social-link"
          >
            <Linkedin size={14} />
            <span>LINKEDIN</span>
          </a>
        </div>

        {/* Right: Copyright & Back to Top */}
        <div className="footer-col-right">
          <span className="copyright-text">
            © {new Date().getFullYear()} SAI JASHWANTH. ALL RIGHTS RESERVED.
          </span>
          <button
            className="btn-back-to-top"
            onClick={scrollToTop}
            aria-label="Back to top of page"
          >
            <span>BACK TO TOP</span>
            <ArrowUp size={13} />
          </button>
        </div>
      </div>
    </footer>
  );
}
