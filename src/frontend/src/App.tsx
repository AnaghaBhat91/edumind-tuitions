import {
  BarChart2,
  BookOpen,
  Calendar,
  Clock,
  FileText,
  GraduationCap,
  Handshake,
  MapPin,
  Menu,
  Phone,
  Trophy,
  Users,
  X,
} from "lucide-react";
import { useState } from "react";

const GRADES = [1, 2, 3, 4, 5, 6, 7, 8];

const BOARDS = [
  {
    id: "cbse",
    emoji: "📚",
    title: "CBSE",
    subtitle: "Central Board of Secondary Education",
    bg: "bg-teal-900/70 border-teal-600/40 hover:border-teal-400/60",
    pill: "bg-teal-600/30 text-teal-300",
  },
  {
    id: "icse",
    emoji: "📖",
    title: "ICSE",
    subtitle: "Indian Certificate of Secondary Education",
    bg: "bg-amber-900/60 border-amber-600/40 hover:border-amber-400/60",
    pill: "bg-amber-600/30 text-amber-300",
  },
  {
    id: "state",
    emoji: "🏫",
    title: "State Board",
    subtitle: "Karnataka State Board",
    bg: "bg-indigo-900/60 border-indigo-600/40 hover:border-indigo-400/60",
    pill: "bg-indigo-600/30 text-indigo-300",
  },
];

const WHY_US = [
  { icon: GraduationCap, title: "Expert Tutor", desc: "10+ Years Experience" },
  { icon: Users, title: "300+ Students", desc: "Successfully Taught" },
  { icon: Trophy, title: "All 3 Boards", desc: "CBSE, ICSE & State" },
  { icon: FileText, title: "Study Materials", desc: "Provided Free" },
  { icon: BarChart2, title: "Progress Tracking", desc: "Regular Tests" },
  { icon: Handshake, title: "Small Batches", desc: "Personal Attention" },
];

const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#grades", label: "Grades" },
  { href: "#boards", label: "Boards" },
  { href: "#schedule", label: "Timings" },
  { href: "#contact", label: "Contact" },
];

export default function App() {
  const year = new Date().getFullYear();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground font-body">
      {/* ── STICKY TOP NAVBAR ── */}
      <header
        className="bg-card border-b border-border sticky top-0 z-50 shadow-subtle"
        data-ocid="header"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between gap-4">
          {/* Logo */}
          <a
            href="#top"
            className="flex items-center gap-3 shrink-0"
            data-ocid="header.logo_link"
          >
            <span className="w-10 h-10 rounded-full bg-accent flex items-center justify-center shadow-md">
              <span className="font-kannada font-bold text-xl text-accent-foreground leading-none">
                ಕ
              </span>
            </span>
            <span className="font-display font-bold text-base leading-tight text-foreground tracking-tight">
              EduMind <span className="text-primary">Tuitions</span>
            </span>
          </a>

          {/* Desktop nav */}
          <nav
            className="hidden md:flex items-center gap-6"
            aria-label="Main navigation"
          >
            {NAV_LINKS.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-smooth"
                data-ocid={`nav.${label.toLowerCase()}_link`}
              >
                {label}
              </a>
            ))}
          </nav>

          {/* Right side: phone pill + hamburger */}
          <div className="flex items-center gap-3">
            <a
              href="tel:8792664384"
              className="hidden sm:inline-flex items-center gap-2 bg-accent text-accent-foreground text-sm font-bold px-4 py-2 rounded-full transition-smooth hover:brightness-110"
              data-ocid="header.call_button"
            >
              <Phone className="w-3.5 h-3.5" />
              87926 64384
            </a>
            <button
              type="button"
              className="md:hidden p-2 rounded-lg text-muted-foreground hover:text-foreground transition-smooth"
              aria-label="Toggle menu"
              onClick={() => setMenuOpen((v) => !v)}
              data-ocid="header.menu_toggle"
            >
              {menuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile dropdown nav */}
        {menuOpen && (
          <div
            className="md:hidden bg-card border-t border-border px-4 py-3 flex flex-col gap-2"
            data-ocid="header.mobile_nav"
          >
            {NAV_LINKS.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                className="text-sm font-medium text-muted-foreground hover:text-foreground py-2 border-b border-border/50 transition-smooth last:border-0"
                data-ocid={`mobile_nav.${label.toLowerCase()}_link`}
              >
                {label}
              </a>
            ))}
            <a
              href="tel:8792664384"
              className="mt-2 gold-pill justify-center text-sm"
              data-ocid="mobile_nav.call_button"
            >
              <Phone className="w-4 h-4" /> 87926 64384
            </a>
          </div>
        )}
      </header>

      {/* ── HERO ── */}
      <section
        id="top"
        className="relative overflow-hidden py-20 sm:py-32"
        style={{
          background:
            "linear-gradient(160deg, oklch(0.18 0.06 35) 0%, oklch(0.12 0.04 30) 50%, oklch(0.16 0.055 38) 100%)",
        }}
        data-ocid="hero.section"
      >
        {/* Decorative radial glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 70% 60% at 50% 30%, oklch(0.67 0.18 42 / 0.12) 0%, transparent 70%)",
          }}
        />

        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 text-center">
          {/* Big ಕ circle */}
          <div className="mx-auto w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-accent flex items-center justify-center mb-6 shadow-card-glow">
            <span className="font-kannada font-black text-4xl sm:text-5xl text-accent-foreground leading-none">
              ಕ
            </span>
          </div>

          <h1 className="font-display font-black text-5xl sm:text-6xl md:text-7xl text-foreground uppercase tracking-tight leading-none mb-4 animate-fade-up">
            Kannada <span className="text-primary">Tuition</span>
          </h1>

          <p className="text-cream text-sm sm:text-base tracking-[0.25em] uppercase mb-8 font-medium opacity-80">
            Nurturing the Language of Our Roots
          </p>

          {/* Amber banner */}
          <div
            className="rounded-lg px-5 py-3 mb-8 font-kannada text-base sm:text-lg font-bold text-accent-foreground"
            style={{
              background:
                "linear-gradient(90deg, oklch(0.67 0.18 42), oklch(0.72 0.19 55))",
            }}
          >
            ನಾಡ ಭಾಷೆ · ನಮ್ಮ ಹೆಮ್ಮೆ · Our Language, Our Pride
          </div>

          <a
            href="tel:8792664384"
            className="gold-pill text-base sm:text-lg mx-auto"
            data-ocid="hero.call_button"
          >
            <Phone className="w-5 h-5" />📞 Call for Free Demo
          </a>
        </div>
      </section>

      {/* ── GRADES OFFERED ── */}
      <section
        id="grades"
        className="py-16 sm:py-24 bg-background"
        data-ocid="grades.section"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="section-heading text-3xl sm:text-4xl text-foreground mb-3">
              <span className="section-heading-underline pb-2">
                Grades Offered
              </span>
            </h2>
            <p className="text-muted-foreground text-sm mt-4">
              Kannada for every level — from beginners to advanced learners
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
            {GRADES.map((grade, i) => (
              <div
                key={grade}
                className="orange-border-card p-5 text-center shadow-card-glow"
                data-ocid={`grades.item.${i + 1}`}
              >
                <p className="font-display font-black text-2xl text-foreground leading-none mb-1">
                  Grade {grade}
                </p>
                <p className="text-muted-foreground text-xs tracking-wide uppercase mt-1">
                  CBSE · ICSE · State
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BOARDS COVERED ── */}
      <section
        id="boards"
        className="py-16 sm:py-24"
        style={{ background: "oklch(0.16 0.045 33)" }}
        data-ocid="boards.section"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="section-heading text-3xl sm:text-4xl text-foreground mb-2">
              <span className="section-heading-underline pb-2">
                Boards Covered
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {BOARDS.map((board, i) => (
              <div
                key={board.id}
                className={`rounded-xl border p-7 text-center transition-smooth shadow-card-glow ${board.bg}`}
                data-ocid={`boards.item.${i + 1}`}
              >
                <div className="text-4xl mb-3">{board.emoji}</div>
                <p className="font-display font-black text-2xl text-foreground mb-1">
                  {board.title}
                </p>
                <p className="text-muted-foreground text-sm">
                  {board.subtitle}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section
        id="why-us"
        className="py-16 sm:py-24 bg-background"
        data-ocid="why_us.section"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="section-heading text-3xl sm:text-4xl text-foreground mb-2">
              <span className="section-heading-underline pb-2">
                Why Choose Us
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {WHY_US.map(({ icon: Icon, title, desc }, i) => (
              <div
                key={title}
                className="orange-border-card p-6 flex items-start gap-4 shadow-card-glow"
                data-ocid={`why_us.item.${i + 1}`}
              >
                <span className="shrink-0 w-11 h-11 rounded-full bg-primary/15 border border-primary/30 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-primary" />
                </span>
                <div>
                  <p className="font-display font-bold text-base text-foreground mb-0.5">
                    {title}
                  </p>
                  <p className="text-muted-foreground text-sm">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CLASS SCHEDULE ── */}
      <section
        id="schedule"
        className="py-16 sm:py-24"
        style={{ background: "oklch(0.16 0.045 33)" }}
        data-ocid="schedule.section"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="section-heading text-3xl sm:text-4xl text-foreground mb-2">
              <span className="section-heading-underline pb-2">
                Class Schedule
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div
              className="orange-border-card p-7 flex items-start gap-4 shadow-card-glow"
              data-ocid="schedule.item.1"
            >
              <span className="shrink-0 w-12 h-12 rounded-full bg-primary/15 border border-primary/30 flex items-center justify-center">
                <Clock className="w-5 h-5 text-primary" />
              </span>
              <div>
                <p className="font-display font-black text-xl text-foreground mb-1">
                  Weekday Classes
                </p>
                <p className="text-accent font-semibold text-sm mb-1">
                  Mon – Fri
                </p>
                <p className="text-muted-foreground text-sm">
                  Call for timings
                </p>
              </div>
            </div>

            <div
              className="orange-border-card p-7 flex items-start gap-4 shadow-card-glow"
              data-ocid="schedule.item.2"
            >
              <span className="shrink-0 w-12 h-12 rounded-full bg-accent/15 border border-accent/30 flex items-center justify-center">
                <Calendar className="w-5 h-5 text-accent" />
              </span>
              <div>
                <p className="font-display font-black text-xl text-foreground mb-1">
                  Weekend Classes
                </p>
                <p className="text-accent font-semibold text-sm mb-1">
                  Sat – Sun
                </p>
                <p className="text-muted-foreground text-sm">
                  Call for timings
                </p>
              </div>
            </div>
          </div>

          <p className="text-center text-muted-foreground text-xs mt-6">
            Batches fill up fast — enquire early to reserve your seat.
          </p>
        </div>
      </section>

      {/* ── YOUR TUTOR ── */}
      <section
        id="about"
        className="py-16 sm:py-24 bg-background"
        data-ocid="tutor.section"
      >
        <div className="max-w-xl mx-auto px-4 sm:px-6 text-center">
          <div className="mb-10">
            <h2 className="section-heading text-3xl sm:text-4xl text-foreground mb-2">
              <span className="section-heading-underline pb-2">Your Tutor</span>
            </h2>
          </div>

          <div
            className="orange-border-card p-8 sm:p-10 shadow-card-glow"
            data-ocid="tutor.card"
          >
            {/* Avatar */}
            <div className="mx-auto w-24 h-24 rounded-full bg-accent/20 border-2 border-accent/50 flex items-center justify-center mb-5 shadow-md">
              <span className="font-display font-black text-3xl text-accent leading-none">
                VB
              </span>
            </div>

            <h3 className="font-display font-black text-2xl sm:text-3xl text-foreground mb-1">
              Vasundhara Bhat
            </h3>
            <p className="font-kannada text-accent font-bold text-lg mb-2">
              ವಸುಂಧರಾ ಭಟ್
            </p>
            <p className="text-muted-foreground text-sm mb-6">
              Kannada Language Expert
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3">
              <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-semibold bg-primary text-primary-foreground">
                10+ Years Experience
              </span>
              <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-semibold bg-accent text-accent-foreground">
                300+ Students Tutored
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA / CONTACT ── */}
      <section
        id="contact"
        className="py-16 sm:py-24 relative overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.62 0.18 42) 0%, oklch(0.70 0.19 55) 100%)",
        }}
        data-ocid="contact.section"
      >
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-display font-black text-3xl sm:text-4xl text-accent-foreground uppercase mb-3">
            Ready to Start Learning Kannada?
          </h2>
          <p className="font-kannada text-accent-foreground/80 text-base sm:text-lg mb-2">
            ಕನ್ನಡ ಕಲಿಯಿರಿ
          </p>
          <p className="text-accent-foreground/70 text-sm tracking-wide mb-8">
            Call for Demo Class · Bengaluru · Flexible Timings
          </p>

          {/* Big phone button */}
          <a
            href="tel:8792664384"
            className="inline-flex items-center gap-3 bg-accent-foreground text-accent font-black text-2xl sm:text-3xl px-8 py-4 rounded-full shadow-xl transition-smooth hover:brightness-95 mx-auto mb-4"
            data-ocid="contact.phone_link"
          >
            <Phone className="w-7 h-7" />
            87926 64384
          </a>

          <p className="text-accent-foreground/70 text-xs mt-3">
            First demo class is absolutely free · Limited seats available
          </p>

          <div className="mt-4 flex items-center justify-center gap-1.5 text-accent-foreground/80 text-sm">
            <MapPin className="w-4 h-4 shrink-0" />
            <span>Bengaluru, Karnataka</span>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer
        className="bg-card border-t border-border py-5"
        data-ocid="footer"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-muted-foreground">
          <div>
            <p>© {year} EduMind Tuitions · All Rights Reserved</p>
            <p className="mt-0.5">Bengaluru, Karnataka</p>
          </div>
        </div>
      </footer>

      {/* ── STICKY BOTTOM BAR ── */}
      <div
        className="fixed bottom-0 left-0 right-0 z-50 bg-card border-t border-border shadow-subtle"
        data-ocid="sticky_bottom_bar"
      >
        <div className="max-w-5xl mx-auto px-4 py-2.5 flex items-center justify-between gap-4">
          <div className="min-w-0">
            <p className="font-kannada text-foreground font-semibold text-sm truncate">
              ವಸುಂಧರಾ ಭಟ್
            </p>
            <p className="font-kannada text-muted-foreground text-xs truncate">
              ಕನ್ನಡ ಶಿಕ್ಷಕಿ
            </p>
          </div>
          <a
            href="tel:8792664384"
            className="gold-pill text-sm shrink-0 py-2 px-5"
            data-ocid="sticky_bar.free_demo_button"
          >
            <Phone className="w-4 h-4" />
            FREE DEMO
          </a>
        </div>
      </div>
    </div>
  );
}
