import React, { useState, useEffect, useRef } from "react";
import { Mail, Github, Linkedin, ArrowUpRight, Copy, CheckCircle2 } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const emailAddress = "bjashwanth7@gmail.com";
const githubUrl = "https://github.com/jashwanth7636";
const linkedinUrl = "https://www.linkedin.com/in/sai-jashwanth-015743305";

export function Contact() {
  const [copied, setCopied] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (prefersReducedMotion) return;

      gsap.fromTo(
        ".contact-card-block",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 78%",
            toggleActions: "play none none none"
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="section-style2 contact-section-style2" ref={sectionRef}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header-row">
          <div className="header-label-group">
            <span className="section-label-num">06 // CONTACT</span>
            <div className="header-divider-line" />
            <span className="header-count-indicator">CHANNELS</span>
          </div>
          <h2 className="section-monumental-heading">LET'S CONNECT.</h2>
        </div>

        {/* Contact Content Grid */}
        <div className="contact-main-grid">
          {/* Left Column: Description & Direct Email Bar */}
          <div className="contact-info-col contact-card-block">
            <p className="contact-lead-sentence">
              Have an opportunity, a project idea, or a reason to collaborate? Feel free to reach out.
            </p>

            <div className="contact-email-box">
              <div className="email-label-row">
                <span className="email-meta-label">DIRECT EMAIL ADDRESS</span>
                <span className="email-status-live">ONLINE</span>
              </div>
              <div className="email-action-row">
                <a
                  href={`mailto:${emailAddress}`}
                  className="email-main-link"
                  aria-label="Send direct email"
                >
                  <Mail size={16} className="accent-icon" />
                  <span>{emailAddress}</span>
                </a>

                <button
                  className="btn-copy-email"
                  onClick={handleCopy}
                  type="button"
                  aria-label="Copy email address to clipboard"
                >
                  {copied ? (
                    <>
                      <CheckCircle2 size={13} className="accent-icon" />
                      <span>COPIED</span>
                    </>
                  ) : (
                    <>
                      <Copy size={13} />
                      <span>COPY</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Verified Professional Profiles */}
          <div className="contact-links-col contact-card-block">
            <div className="contact-links-stack">
              <a
                href={`mailto:${emailAddress}`}
                className="contact-channel-card"
              >
                <div className="channel-left">
                  <Mail size={18} className="channel-icon" />
                  <div className="channel-meta">
                    <span className="channel-title">ELECTRONIC MAIL</span>
                    <span className="channel-desc">{emailAddress}</span>
                  </div>
                </div>
                <ArrowUpRight size={16} className="channel-arrow" />
              </a>

              <a
                href={githubUrl}
                target="_blank"
                rel="noreferrer"
                className="contact-channel-card"
              >
                <div className="channel-left">
                  <Github size={18} className="channel-icon" />
                  <div className="channel-meta">
                    <span className="channel-title">GITHUB</span>
                    <span className="channel-desc">github.com/jashwanth7636</span>
                  </div>
                </div>
                <ArrowUpRight size={16} className="channel-arrow" />
              </a>

              <a
                href={linkedinUrl}
                target="_blank"
                rel="noreferrer"
                className="contact-channel-card"
              >
                <div className="channel-left">
                  <Linkedin size={18} className="channel-icon" />
                  <div className="channel-meta">
                    <span className="channel-title">LINKEDIN</span>
                    <span className="channel-desc">linkedin.com/in/sai-jashwanth-015743305</span>
                  </div>
                </div>
                <ArrowUpRight size={16} className="channel-arrow" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
