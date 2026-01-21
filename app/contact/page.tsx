"use client";

import * as React from "react";
import { MilliShell } from "@/components/MilliShell";
import emailjs from '@emailjs/browser';

const LINE = "var(--line)";
const BLACK = "var(--black)";
const WHITE = "var(--white)";
const ACCENT = "var(--accent)";

// Simple Success Modal - Fully Responsive
function SuccessModal({ onClose }: { onClose: () => void }) {
  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: 'rgba(0, 0, 0, 0.7)' }}
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-sm p-6 md:p-8"
        style={{ 
          border: `${LINE} solid ${BLACK}`,
          background: ACCENT,
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="text-center">
          <div 
            className="font-black uppercase tracking-tight mb-2 md:mb-3"
            style={{ fontSize: "clamp(1.5rem, 5vw, 2rem)" }}
          >
            SENT!
          </div>
          
          <p className="text-xs md:text-sm opacity-80 mb-4 md:mb-5">
            I&apos;ll reply asap.
          </p>

          <button
            onClick={onClose}
            className="w-full md:w-auto px-5 py-2 font-black text-xs uppercase tracking-[0.22em] hover:opacity-90 transition-opacity"
            style={{
              border: `${LINE} solid ${BLACK}`,
              background: BLACK,
              color: WHITE,
            }}
          >
            CLOSE
          </button>
        </div>
      </div>
    </div>
  );
}

function IconBox({
  label,
  sublabel,
  href,
  children,
  delay = 0,
}: {
  label: string;
  sublabel?: string;
  href: string;
  children: React.ReactNode;
  delay?: number;
}) {
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <a
      href={href}
      target={href.startsWith("mailto:") ? undefined : "_blank"}
      rel={href.startsWith("mailto:") ? undefined : "noreferrer"}
      className="group p-6 md:p-10 transition-all duration-700 ease-out active:translate-y-[1px]"
      style={{ 
        border: `${LINE} solid ${BLACK}`, 
        background: WHITE,
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(20px)",
      }}
    >
      <div className="flex items-center gap-5">
        <div
          className="grid place-items-center h-14 w-14 md:h-16 md:w-16 rounded-2xl"
          style={{ border: `${LINE} solid ${BLACK}`, background: BLACK }}
        >
          {children}
        </div>

        <div className="min-w-0">
          <div className="text-xs md:text-sm font-black uppercase tracking-[0.22em] truncate">
            {label}
          </div>
          {sublabel ? (
            <div className="mt-1 text-xs md:text-sm opacity-70 truncate">
              {sublabel}
            </div>
          ) : null}
        </div>
      </div>
    </a>
  );
}

function GHIcon() {
  return (
    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        fill="white"
        d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.77.6-3.36-1.18-3.36-1.18-.45-1.16-1.1-1.47-1.1-1.47-.9-.62.07-.6.07-.6 1 .07 1.52 1.04 1.52 1.04.89 1.52 2.33 1.08 2.9.83.09-.64.35-1.08.64-1.33-2.21-.25-4.53-1.11-4.53-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.6 9.6 0 0 1 12 6.8c.85 0 1.7.12 2.5.35 1.9-1.29 2.74-1.02 2.74-1.02.56 1.38.21 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.33 4.68-4.55 4.93.36.31.68.92.68 1.86v2.76c0 .27.18.58.69.48A10 10 0 0 0 12 2Z"
      />
    </svg>
  );
}

function LIIcon() {
  return (
    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        fill="white"
        d="M4.98 3.5A2.5 2.5 0 1 1 5 8.5a2.5 2.5 0 0 1-.02-5ZM3.5 21V9h3v12h-3Zm7 0V9h2.9v1.64h.04A3.2 3.2 0 0 1 16.3 9c3.06 0 3.63 2.02 3.63 4.65V21h-3v-6.5c0-1.55-.03-3.55-2.16-3.55-2.16 0-2.5 1.69-2.5 3.44V21h-3Z"
      />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        fill="white"
        d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 4-8 5L4 8V6l8 5 8-5v2Z"
      />
    </svg>
  );
}

function FileIcon() {
  return (
    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        fill="white"
        d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6Zm1 7V3.5L19.5 9H15Z"
      />
    </svg>
  );
}

export default function ContactPage() {
  const [frameVisible, setFrameVisible] = React.useState(false);
  const [leftPanelVisible, setLeftPanelVisible] = React.useState(false);
  const [rightPanelVisible, setRightPanelVisible] = React.useState(false);
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [showSuccessModal, setShowSuccessModal] = React.useState(false);

  // Form state
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [message, setMessage] = React.useState('');

  // Touched state (to show errors only after user interacts)
  const [nameTouched, setNameTouched] = React.useState(false);
  const [emailTouched, setEmailTouched] = React.useState(false);
  const [messageTouched, setMessageTouched] = React.useState(false);

  // Validation functions
  const isValidName = (value: string) => value.trim().length >= 2;
  const isValidEmail = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  const isValidMessage = (value: string) => value.trim().length >= 10;

  // Error messages
  const nameError = nameTouched && !isValidName(name) ? 'Name must be at least 2 characters' : '';
  const emailError = emailTouched && !isValidEmail(email) ? 'Please enter a valid email address' : '';
  const messageError = messageTouched && !isValidMessage(message) ? 'Message must be at least 10 characters' : '';

  // Check if form is valid
  const isFormValid = isValidName(name) && isValidEmail(email) && isValidMessage(message);

  React.useEffect(() => {
    const frameTimer = setTimeout(() => setFrameVisible(true), 100);
    const leftTimer = setTimeout(() => setLeftPanelVisible(true), 400);
    const rightTimer = setTimeout(() => setRightPanelVisible(true), 700);
    
    return () => {
      clearTimeout(frameTimer);
      clearTimeout(leftTimer);
      clearTimeout(rightTimer);
    };
  }, []);

  return (
    <MilliShell topText="SOFTWARE ENGINEER • FRONTEND • FULLSTACK • BUILDING MODERN WEB APPS">
      <div style={{ background: WHITE, color: BLACK }}>
        {showSuccessModal && (
          <SuccessModal onClose={() => setShowSuccessModal(false)} />
        )}

        <div
          className="mt-8 transition-all duration-1000 ease-out"
          style={{ 
            border: `${LINE} solid ${BLACK}`,
            opacity: frameVisible ? 1 : 0,
            transform: frameVisible ? "translateY(0)" : "translateY(30px)",
          }}
        >
          <div className="grid gap-0 md:grid-cols-[1.05fr_0.95fr]">
            <div
              className="p-6 md:p-10 transition-all duration-1000 ease-out"
              style={{
                background: ACCENT,
                borderRight: `${LINE} solid ${BLACK}`,
                opacity: leftPanelVisible ? 1 : 0,
                transform: leftPanelVisible ? "translateX(0)" : "translateX(-20px)",
              }}
            >
              <div
                className="font-black leading-[0.9] tracking-tight"
                style={{ fontSize: "clamp(2.2rem, 4.6vw, 3.6rem)" }}
              >
                CONNECT
                <br />
                WITH ME.
              </div>

              <div className="mt-3 text-xs md:text-sm font-bold uppercase tracking-[0.22em] opacity-80">
                Send a note to connect .
              </div>

              <form
                className="mt-8 space-y-5"
                onSubmit={async (e) => {
                  e.preventDefault();
                  setIsSubmitting(true);
                  
                  const form = e.currentTarget;
                  
                  try {
                    await emailjs.sendForm(
                      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
                      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
                      form,
                      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
                    );
                    
                    setShowSuccessModal(true);
                    form.reset();
                    setName('');
                    setEmail('');
                    setMessage('');
                    setNameTouched(false);
                    setEmailTouched(false);
                    setMessageTouched(false);
                  } catch (error) {
                    window.location.href = `mailto:kds@ncsu.edu?subject=${encodeURIComponent(`Portfolio Contact from ${name}`)}&body=${encodeURIComponent(`From: ${name} (${email})\n\n${message}`)}`;
                  } finally {
                    setIsSubmitting(false);
                  }
                }}
              >
                <div>
                  <label className="block text-[10px] md:text-xs font-black uppercase tracking-[0.28em] opacity-80">
                    Name
                  </label>
                  <input
                    name="from_name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    onBlur={() => setNameTouched(true)}
                    required
                    className="mt-2 w-full px-4 py-3 text-sm md:text-base"
                    placeholder="Your name"
                    style={{ 
                      border: `${LINE} solid ${nameError ? '#dc2626' : BLACK}`, 
                      background: WHITE 
                    }}
                  />
                  {nameError && (
                    <div className="mt-1 text-xs text-red-600">{nameError}</div>
                  )}
                </div>

                <div>
                  <label className="block text-[10px] md:text-xs font-black uppercase tracking-[0.28em] opacity-80">
                    Email address
                  </label>
                  <input
                    name="from_email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onBlur={() => setEmailTouched(true)}
                    required
                    className="mt-2 w-full px-4 py-3 text-sm md:text-base"
                    placeholder="you@email.com"
                    style={{ 
                      border: `${LINE} solid ${emailError ? '#dc2626' : BLACK}`, 
                      background: WHITE 
                    }}
                  />
                  {emailError && (
                    <div className="mt-1 text-xs text-red-600">{emailError}</div>
                  )}
                </div>

                <div>
                  <label className="block text-[10px] md:text-xs font-black uppercase tracking-[0.28em] opacity-80">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onBlur={() => setMessageTouched(true)}
                    required
                    className="mt-2 w-full px-4 py-3 text-sm md:text-base resize-none"
                    style={{
                      border: `${LINE} solid ${messageError ? '#dc2626' : BLACK}`,
                      background: WHITE,
                      minHeight: 150,
                    }}
                  />
                  {messageError && (
                    <div className="mt-1 text-xs text-red-600">{messageError}</div>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting || !isFormValid}
                  className="inline-flex items-center justify-center px-7 py-3 font-black uppercase tracking-[0.22em] active:translate-y-[1px] hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{
                    border: `${LINE} solid ${BLACK}`,
                    background: BLACK,
                    color: WHITE,
                  }}
                >
                  {isSubmitting ? 'SENDING...' : 'SUBMIT'}
                </button>
              </form>
            </div>

            <div 
              className="transition-all duration-1000 ease-out"
              style={{ 
                background: WHITE,
                opacity: rightPanelVisible ? 1 : 0,
                transform: rightPanelVisible ? "translateX(0)" : "translateX(20px)",
              }}
            >
              <div className="p-6 md:p-10">
                <div className="text-[10px] md:text-xs font-black uppercase tracking-[0.28em] opacity-70">
                  QUICK LINKS
                </div>

                <div className="mt-6 grid grid-cols-1 gap-4">
                  <IconBox
                    label="LinkedIn"
                    sublabel="/in/kanchanads"
                    href="https://www.linkedin.com/in/kanchanads"
                    delay={1000}
                  >
                    <LIIcon />
                  </IconBox>

                  <IconBox
                    label="GitHub"
                    sublabel="/Kanchi11"
                    href="https://github.com/Kanchi11"
                    delay={1200}
                  >
                    <GHIcon />
                  </IconBox>

                  <IconBox
                    label="Email"
                    sublabel="kds@ncsu.edu"
                    href="mailto:kds@ncsu.edu"
                    delay={1400}
                  >
                    <MailIcon />
                  </IconBox>

                  <IconBox
                    label="Resume"
                    sublabel="Download PDF"
                    href="/resume.pdf"
                    delay={1600}
                  >
                    <FileIcon />
                  </IconBox>

                  <div 
                    className="text-xs md:text-sm opacity-75 leading-relaxed transition-all duration-700 ease-out"
                    style={{
                      opacity: rightPanelVisible ? 0.75 : 0,
                      transform: rightPanelVisible ? "translateY(0)" : "translateY(10px)",
                      transitionDelay: "1800ms",
                    }}
                  >
                    Prefer LinkedIn? Same. Send a note with the role + team and I&apos;ll reply asap.
                  </div>
                </div>
              </div>

              <div style={{ borderTop: `${LINE} solid ${BLACK}` }}>
                <div className="px-6 md:px-10 py-4 text-[10px] md:text-xs font-black uppercase tracking-[0.28em] opacity-60">
                  COPYRIGHT 2026 © KANCHANA DS
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="h-12 md:h-20" />
      </div>
    </MilliShell>
  );
}