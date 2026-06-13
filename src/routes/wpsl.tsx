import { createFileRoute, Link } from "@tanstack/react-router";
import wpslHero from "@/assets/wpsl-hero.jpg";
import wpslPartnership from "@/assets/wpsl-partnership.jpg";

export const Route = createFileRoute("/wpsl")({
  head: () => ({
    meta: [
      { title: "Davis Legacy SC — WPSL & California Storm" },
      {
        name: "description",
        content:
          "Davis Legacy Soccer Club's WPSL partnership with the California Storm — empowering girls and women through elite women's soccer in Northern California.",
      },
      { property: "og:title", content: "Davis Legacy SC — WPSL & California Storm" },
      {
        property: "og:description",
        content:
          "A pathway for women players to pursue high-level soccer. Davis Legacy and California Storm partner to grow the women's game.",
      },
      { property: "og:image", content: wpslHero },
      { name: "twitter:image", content: wpslHero },
    ],
  }),
  component: Wpsl,
});

const stats = [
  { label: "League", value: "WPSL", caption: "Women's Premier Soccer", tone: "crimson" },
  { label: "Teams", value: "II", caption: "Storm & Storm II", tone: "charcoal" },
  { label: "Clubs", value: "100+", caption: "Across North America", tone: "charcoal" },
  { label: "Mission", value: "HER", caption: "Empowering Women", tone: "accent" },
] as const;

const coaches = [
  {
    name: "Jamie Levoy",
    role: "California Storm — Head Coach",
    note: "Executive Director, California Storm",
  },
  {
    name: "David Robertson",
    role: "California Storm II — Co-Head Coach",
    note: "Executive Director, Davis Legacy",
  },
  {
    name: "Jesus Mata",
    role: "California Storm II — Co-Head Coach",
    note: "Davis Legacy Technical Staff",
  },
];

const socials = [
  { label: "Website", href: "https://www.calstormsoccer.com/", handle: "calstormsoccer.com" },
  { label: "Twitter", href: "https://www.twitter.com/calstormsoccer", handle: "@calstormsoccer" },
  { label: "Instagram", href: "https://www.instagram.com/calstormsoccer", handle: "@calstormsoccer" },
  { label: "Facebook", href: "https://www.facebook.com/calstormsoccer", handle: "/calstormsoccer" },
];

function Wpsl() {
  return (
    <div className="bg-brand-offwhite text-brand-charcoal font-sans selection:bg-brand-crimson selection:text-white">
      {/* Sticky Schedule CTA */}
      <div className="animate-reveal fixed bottom-6 right-6 z-50 [animation-delay:800ms]">
        <a
          href="https://www.wpsl.info/"
          target="_blank"
          rel="noreferrer"
          className="group flex items-center gap-3 bg-brand-crimson px-6 py-4 font-bold uppercase tracking-tighter text-white transition-all hover:-translate-y-1 hover:bg-brand-charcoal"
        >
          <span className="font-mono text-xs opacity-70">01</span>
          <span>Schedule & Standings</span>
          <span className="transition-transform group-hover:translate-x-1">→</span>
        </a>
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 z-40 flex items-center justify-between border-b border-brand-charcoal/5 bg-brand-offwhite/90 px-6 py-4 backdrop-blur-md lg:px-12">
        <Link
          to="/"
          className="font-display text-2xl uppercase italic tracking-tighter text-brand-crimson"
        >
          Davis Legacy
        </Link>
        <div className="hidden gap-8 font-mono text-[10px] uppercase tracking-widest md:flex">
          <a href="#partnership" className="hover:text-brand-crimson">Partnership</a>
          <a href="#storm" className="hover:text-brand-crimson">The Storm</a>
          <a href="#staff" className="hover:text-brand-crimson">Staff</a>
          <a href="#connect" className="hover:text-brand-crimson">Connect</a>
        </div>
        <a
          href="https://www.calstormsoccer.com/"
          target="_blank"
          rel="noreferrer"
          className="border-b-2 border-brand-charcoal pb-0.5 text-xs font-bold uppercase tracking-widest"
        >
          Cal Storm
        </a>
      </nav>

      {/* Hero Section */}
      <section className="relative h-[90vh] overflow-hidden bg-brand-charcoal">
        <div className="absolute inset-0 opacity-60">
          <img
            src={wpslHero}
            alt="Women's soccer players competing on the field at golden hour"
            width={1920}
            height={1080}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal via-brand-charcoal/20 to-transparent" />

        <div className="relative flex h-full flex-col justify-end px-6 pb-20 lg:px-12">
          <div className="animate-reveal max-w-4xl">
            <span className="mb-4 inline-block font-mono text-sm uppercase tracking-[0.3em] text-brand-accent">
              WPSL // California Storm
            </span>
            <h1 className="text-balance font-display text-7xl uppercase leading-[0.85] tracking-tighter text-white md:text-9xl">
              Empowering the <br />{" "}
              <span className="text-brand-crimson">Women's Game</span>
            </h1>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="https://www.calstormsoccer.com/"
                target="_blank"
                rel="noreferrer"
                className="bg-white px-8 py-4 font-display text-xl uppercase tracking-wider text-brand-charcoal transition-colors hover:bg-brand-crimson hover:text-white"
              >
                California Storm
              </a>
              <a
                href="#partnership"
                className="border border-white/30 px-8 py-4 font-display text-xl uppercase tracking-wider text-white backdrop-blur-sm transition-colors hover:bg-white/10"
              >
                The Partnership
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Callout */}
      <section className="grid grid-cols-2 border-y border-brand-charcoal/10 lg:grid-cols-4">
        {stats.map((stat, i) => (
          <div
            key={stat.label}
            className={`animate-reveal p-8 lg:p-12 ${
              i < stats.length - 1 ? "border-r border-brand-charcoal/10" : ""
            }`}
            style={{ animationDelay: `${200 + i * 100}ms` }}
          >
            <div className="font-mono text-xs uppercase text-brand-charcoal/50">{stat.label}</div>
            <div
              className={`font-display text-6xl ${
                stat.tone === "crimson"
                  ? "text-brand-crimson"
                  : stat.tone === "accent"
                    ? "text-brand-accent"
                    : "text-brand-charcoal"
              }`}
            >
              {stat.value}
            </div>
            <p className="text-sm font-semibold uppercase tracking-tight">{stat.caption}</p>
          </div>
        ))}
      </section>

      {/* Partnership Section */}
      <section id="partnership" className="px-6 py-24 lg:px-12">
        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <span className="font-mono text-xs uppercase tracking-widest text-brand-crimson">
              The Partnership
            </span>
            <h2 className="mt-2 font-display text-5xl uppercase leading-none tracking-tighter">
              A Home for <span className="text-brand-crimson">Women's Soccer</span>
            </h2>
            <p className="mt-6 text-pretty text-lg text-brand-charcoal/70">
              Davis Legacy Soccer Club and WPSL club California Storm have formed a strategic
              partnership to provide the best soccer environment and development opportunities for
              both organizations.
            </p>
            <p className="mt-4 text-pretty text-brand-charcoal/70">
              The Davis Legacy Soccer Complex is the official home of the California Storm and
              California Storm II — providing accessible training and playing opportunities, access
              to games for Legacy families, and a pathway for Legacy players and alumni to progress
              their game.
            </p>
          </div>
          <div className="lg:col-span-7">
            <div className="overflow-hidden">
              <img
                src={wpslPartnership}
                alt="Two women's soccer players celebrating on the pitch"
                width={1280}
                height={960}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          <blockquote className="border-l-4 border-brand-crimson pl-8">
            <p className="text-sm leading-relaxed text-brand-charcoal/80">
              "We are excited to partner with such a quality club that has a similar mission and
              values as ours. Both of our organizations want to empower girls and women, and Davis
              Legacy has a professional leadership team and the best soccer facilities in Northern
              California. This partnership will allow us to create more opportunities for female
              athletes."
            </p>
            <footer className="mt-4 font-mono text-xs uppercase tracking-widest text-brand-crimson">
              Jamie Levoy — California Storm Executive Director
            </footer>
          </blockquote>
          <blockquote className="border-l-4 border-brand-charcoal pl-8">
            <p className="text-sm leading-relaxed text-brand-charcoal/80">
              "We are very excited to embark on this relationship with the Storm and provide a
              pathway for women players who want to pursue high-level playing opportunities — through
              their senior years of club soccer, through college and beyond. We are honoured to be
              affiliated with such a well respected organization."
            </p>
            <footer className="mt-4 font-mono text-xs uppercase tracking-widest text-brand-charcoal">
              David Robertson — Davis Legacy Executive Director
            </footer>
          </blockquote>
        </div>
      </section>

      {/* About the Storm */}
      <section id="storm" className="border-y border-brand-charcoal/10 bg-white px-6 py-24 lg:px-12">
        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h2 className="font-display text-5xl uppercase leading-none tracking-tighter">
              About the <span className="text-brand-crimson">California Storm</span>
            </h2>
            <p className="mt-6 text-pretty text-lg text-brand-charcoal/70">
              The California Storm of the WPSL is Sacramento's premiere women's soccer club. Their
              mission is to inspire and empower girls by building self-confidence and leadership
              skills through the game of soccer.
            </p>
          </div>
          <div className="space-y-12 lg:col-span-7">
            <div className="border-l-4 border-brand-crimson pl-8">
              <h3 className="font-display text-3xl uppercase tracking-tight">World-Class Roster</h3>
              <p className="mt-2 text-sm leading-relaxed text-brand-charcoal/80">
                Storm players come from many backgrounds — from amateur college standouts to former
                national team players and world-recognized professionals. From Ghana to Greece,
                international players seek a position with the Storm. The storied roster has included
                Brazilian star Sissi and World Cup champions Brandi Chastain, Alex Morgan, Leslie
                Osborne and Julie Foudy.
              </p>
            </div>
            <div className="border-l-4 border-brand-charcoal pl-8">
              <h3 className="font-display text-3xl uppercase tracking-tight">Collegiate Pathway</h3>
              <p className="mt-2 text-sm leading-relaxed text-brand-charcoal/80">
                Outstanding college and post-collegiate athletes choose the Storm year after year to
                stay in shape and build on their skills — including standouts from Stanford, Santa
                Clara, Cal, UC Davis and Sacramento State.
              </p>
            </div>
            <div className="border-l-4 border-brand-charcoal/30 pl-8">
              <h3 className="font-display text-3xl uppercase tracking-tight">The WPSL</h3>
              <p className="mt-2 text-sm leading-relaxed text-brand-charcoal/80">
                The Women's Premier Soccer League is the world's largest women's soccer league, with
                more than 100 clubs competing across North America.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Staff */}
      <section id="staff" className="bg-brand-charcoal px-6 py-24 text-white lg:px-12">
        <div className="mb-16">
          <span className="font-mono text-xs uppercase tracking-widest text-brand-accent">
            Coaching
          </span>
          <h2 className="mt-2 font-display text-6xl uppercase tracking-tighter">Leadership</h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {coaches.map((coach) => (
            <div
              key={coach.name}
              className="flex flex-col bg-white/[0.03] p-8 ring-1 ring-white/10 transition-colors hover:bg-white/[0.06]"
            >
              <div className="font-mono text-[10px] uppercase tracking-widest text-brand-accent">
                {coach.role}
              </div>
              <h3 className="mt-3 font-display text-4xl uppercase leading-none tracking-tight">
                {coach.name}
              </h3>
              <p className="mt-4 text-sm text-white/50">{coach.note}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Connect */}
      <section
        id="connect"
        className="border-y border-brand-charcoal/10 bg-white px-6 py-20 lg:px-12"
      >
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-brand-crimson">
              Follow Along
            </span>
            <h2 className="mt-2 font-display text-5xl uppercase leading-none tracking-tighter">
              Connect with the Storm
            </h2>
          </div>
        </div>
        <div className="mt-12 grid gap-px overflow-hidden border border-brand-charcoal/10 sm:grid-cols-2 lg:grid-cols-4">
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              className="group flex flex-col gap-2 bg-brand-offwhite p-8 transition-colors hover:bg-brand-crimson hover:text-white"
            >
              <span className="font-mono text-xs uppercase tracking-widest text-brand-charcoal/50 group-hover:text-white/70">
                {social.label}
              </span>
              <span className="font-display text-xl uppercase tracking-tight">{social.handle}</span>
            </a>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-brand-charcoal/5 px-6 py-12 lg:px-12">
        <div className="flex flex-col justify-between gap-12 md:flex-row md:items-center">
          <Link
            to="/"
            className="font-display text-4xl uppercase italic tracking-tighter text-brand-crimson"
          >
            Davis Legacy
          </Link>
          <div className="font-mono text-xs text-brand-charcoal/40">
            © {new Date().getFullYear()} DAVIS LEGACY SOCCER CLUB. ALL RIGHTS RESERVED.
          </div>
        </div>
      </footer>
    </div>
  );
}
