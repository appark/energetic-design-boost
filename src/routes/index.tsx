import { createFileRoute, Link } from "@tanstack/react-router";
import heroHuddle from "@/assets/hero-huddle.jpg";
import staffGm from "@/assets/staff-gm.jpg";
import staffCoach from "@/assets/staff-coach.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Davis Legacy SC — USL League Two & UPSL" },
      {
        name: "description",
        content:
          "Davis Legacy Soccer Club's USL League Two and UPSL pre-professional program — schedule, roster, season format, and technical staff.",
      },
      { property: "og:title", content: "Davis Legacy SC — USL League Two & UPSL" },
      {
        property: "og:description",
        content:
          "The pathway to the professional ranks. Davis Legacy's pre-professional teams compete in USL League Two and the UPSL.",
      },
      { property: "og:image", content: heroHuddle },
      { name: "twitter:image", content: heroHuddle },
    ],
  }),
  component: Index,
});

const stats = [
  { label: "Matches", value: "14", caption: "Regular Season", tone: "crimson" },
  { label: "Format", value: "7/7", caption: "Home & Away", tone: "charcoal" },
  { label: "Tournament", value: "USOC", caption: "U.S. Open Cup Path", tone: "charcoal" },
  { label: "Window", value: "MAY", caption: "Season Kickoff", tone: "accent" },
] as const;

const staff = [
  {
    name: "Mark Torguson",
    role: "General Manager",
    email: "mtorguson@davislegacysoccer.org",
    photo: staffGm,
    bio: "Now in his 23rd year at the club and 10th leading the Davis Legacy pre-professional teams. Has guided the club to three NorCal Premier League titles and the NorCal State Cup.",
  },
  {
    name: 'Oliver "Ollie" Russell',
    role: "Head Coach",
    email: "orussell@davislegacysoccer.org",
    photo: staffCoach,
    bio: "Begins his 4th year at the helm of the USL Two team. Highlighted 2025 with two players selected in the MLS draft while leading the side in the competitive Northern California conference.",
  },
];

function Index() {
  return (
    <div className="bg-brand-offwhite text-brand-charcoal font-sans selection:bg-brand-crimson selection:text-white">
      {/* Sticky Player Interest CTA */}
      <div className="animate-reveal fixed bottom-6 right-6 z-50 [animation-delay:800ms]">
        <a
          href="mailto:mtorguson@davislegacysoccer.org?subject=2026%20Player%20Interest"
          className="group flex items-center gap-3 bg-brand-crimson px-6 py-4 font-bold uppercase tracking-tighter text-white transition-all hover:-translate-y-1 hover:bg-brand-charcoal"
        >
          <span className="font-mono text-xs opacity-70">01</span>
          <span>Player Interest</span>
          <span className="transition-transform group-hover:translate-x-1">→</span>
        </a>
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 z-40 flex items-center justify-between border-b border-brand-charcoal/5 bg-brand-offwhite/90 px-6 py-4 backdrop-blur-md lg:px-12">
        <div className="font-display text-2xl uppercase italic tracking-tighter text-brand-crimson">
          Davis Legacy
        </div>
        <div className="hidden gap-8 font-mono text-[10px] uppercase tracking-widest md:flex">
          <a href="#schedule" className="hover:text-brand-crimson">Schedule</a>
          <a href="#roster" className="hover:text-brand-crimson">Roster</a>
          <a href="#about" className="hover:text-brand-crimson">About</a>
          <a href="#staff" className="hover:text-brand-crimson">Staff</a>
          <Link to="/wpsl" className="hover:text-brand-crimson">WPSL</Link>
        </div>
        <a
          href="mailto:mtorguson@davislegacysoccer.org?subject=2026%20Player%20Interest"
          className="border-b-2 border-brand-charcoal pb-0.5 text-xs font-bold uppercase tracking-widest"
        >
          Join Us
        </a>
      </nav>

      {/* Hero Section */}
      <section className="relative h-[90vh] overflow-hidden bg-brand-charcoal">
        <div className="absolute inset-0 opacity-60">
          <img
            src={heroHuddle}
            alt="Davis Legacy players in red kits huddling on the field at golden hour"
            width={1920}
            height={1080}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal via-brand-charcoal/20 to-transparent" />

        <div className="relative flex h-full flex-col justify-end px-6 pb-20 lg:px-12">
          <div className="animate-reveal max-w-4xl">
            <span className="mb-4 inline-block font-mono text-sm uppercase tracking-[0.3em] text-brand-accent">
              USL League Two // UPSL
            </span>
            <h1 className="text-balance font-display text-7xl uppercase leading-[0.85] tracking-tighter text-white md:text-9xl">
              The Path to <br /> <span className="text-brand-crimson">Pro Excellence</span>
            </h1>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="https://davislegacysoccer.org/usl-schedule/"
                className="bg-white px-8 py-4 font-display text-xl uppercase tracking-wider text-brand-charcoal transition-colors hover:bg-brand-crimson hover:text-white"
              >
                View Schedule
              </a>
              <a
                href="#roster"
                className="border border-white/30 px-8 py-4 font-display text-xl uppercase tracking-wider text-white backdrop-blur-sm transition-colors hover:bg-white/10"
              >
                The Roster
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Season Stats Callout */}
      <section
        id="schedule"
        className="grid grid-cols-2 border-y border-brand-charcoal/10 lg:grid-cols-4"
      >
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

      {/* About / League Section */}
      <section id="about" className="px-6 py-24 lg:px-12">
        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h2 className="font-display text-5xl uppercase leading-none tracking-tighter">
              Competing at the <span className="text-brand-crimson">Highest Level</span>
            </h2>
            <p className="mt-6 text-pretty text-lg text-brand-charcoal/70">
              Our USL League Two and UPSL teams represent the pinnacle of our developmental pyramid,
              providing elite collegiate and pre-professional players a platform to reach the next
              stage of their careers — while maintaining their collegiate eligibility.
            </p>
          </div>
          <div className="space-y-12 lg:col-span-7">
            <div className="border-l-4 border-brand-crimson pl-8">
              <h3 className="font-display text-3xl uppercase tracking-tight">USL League Two</h3>
              <p className="mt-2 text-sm leading-relaxed text-brand-charcoal/80">
                The leader in pre-professional soccer in North America and the defined, proven
                pathway for players to progress to the professional ranks. The regular season runs
                early May to mid-July, with each team playing a 14-match schedule before conference
                and national playoffs lead into the USL League Two Championship.
              </p>
            </div>
            <div className="border-l-4 border-brand-charcoal pl-8">
              <h3 className="font-display text-3xl uppercase tracking-tight">UPSL Premier</h3>
              <p className="mt-2 text-sm leading-relaxed text-brand-charcoal/80">
                The Spring UPSL season runs mid-March to early August, with the Fall season
                beginning in August. Davis Legacy has enjoyed continued success in the UPSL —
                reaching the national quarterfinals twice and claiming five NorCal Conference
                championships.
              </p>
            </div>
            <div className="border-l-4 border-brand-charcoal/30 pl-8">
              <h3 className="font-display text-3xl uppercase tracking-tight">
                Lamar Hunt U.S. Open Cup
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-brand-charcoal/80">
                USL League Two continues to display its elite pool of amateur players in the
                longest-running North American cup competition, with clubs regularly reaching the
                important stages of the tournament.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Roster callout */}
      <section id="roster" className="border-y border-brand-charcoal/10 bg-white px-6 py-20 lg:px-12">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div className="max-w-xl">
            <span className="font-mono text-xs uppercase tracking-widest text-brand-crimson">
              2026 Season
            </span>
            <h2 className="mt-2 font-display text-5xl uppercase leading-none tracking-tighter">
              Roster — Coming Soon
            </h2>
            <p className="mt-4 text-brand-charcoal/70">
              The 2026 USL Two and UPSL roster will be announced ahead of kickoff. Interested
              players should reach out to register their interest.
            </p>
          </div>
          <a
            href="mailto:mtorguson@davislegacysoccer.org?subject=2026%20Player%20Interest"
            className="shrink-0 bg-brand-crimson px-8 py-4 font-display text-xl uppercase tracking-wider text-white transition-colors hover:bg-brand-charcoal"
          >
            2026 Player Interest →
          </a>
        </div>
      </section>

      {/* Staff Bios */}
      <section id="staff" className="bg-brand-charcoal px-6 py-24 text-white lg:px-12">
        <div className="mb-16 flex items-end justify-between">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-brand-accent">
              Technical Department
            </span>
            <h2 className="mt-2 font-display text-6xl uppercase tracking-tighter">Leadership</h2>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {staff.map((member) => (
            <div
              key={member.name}
              className="group flex flex-col overflow-hidden bg-white/[0.03] ring-1 ring-white/10 transition-colors hover:bg-white/[0.06]"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={member.photo}
                  alt={`Portrait of ${member.name}`}
                  width={512}
                  height={512}
                  className="absolute inset-0 h-full w-full object-cover object-top grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal via-brand-charcoal/30 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6">
                  <div className="font-mono text-[10px] uppercase tracking-widest text-brand-accent">
                    {member.role}
                  </div>
                  <h3 className="mt-1 font-display text-4xl uppercase leading-none tracking-tight text-white">
                    {member.name}
                  </h3>
                </div>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <p className="flex-1 text-sm leading-relaxed text-white/60">{member.bio}</p>
                <a
                  href={`mailto:${member.email}`}
                  className="mt-6 inline-flex w-fit items-center gap-2 border-b border-brand-accent pb-0.5 font-mono text-xs uppercase tracking-widest transition-colors hover:text-brand-accent"
                >
                  {member.email} →
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>



      {/* Footer */}
      <footer className="border-t border-brand-charcoal/5 px-6 py-12 lg:px-12">
        <div className="flex flex-col justify-between gap-12 md:flex-row md:items-center">
          <div className="font-display text-4xl uppercase italic tracking-tighter text-brand-crimson">
            Davis Legacy
          </div>
          <div className="font-mono text-xs text-brand-charcoal/40">
            © {new Date().getFullYear()} DAVIS LEGACY SOCCER CLUB. ALL RIGHTS RESERVED.
          </div>
        </div>
      </footer>
    </div>
  );
}
