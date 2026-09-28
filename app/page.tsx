import Link from "next/link";

const modules = [
  {
    title: "Airspace event dashboard",
    body: "Timeline of simulated injections with zone, severity, and drill-down into audit context.",
  },
  {
    title: "Detection confidence",
    body: "A transparent scoring band tied to scenario severity — for training watchstanders, not live fire control.",
  },
  {
    title: "Response coordination",
    body: "Escalation ladder and workflow steps with owners, dual-control gates, and comms templates.",
  },
  {
    title: "Compliance audit log",
    body: "Structured entries with compliance tags you can export into a GRC review cycle.",
  },
];

export default function HomePage() {
  return (
    <div className="space-y-12">
      <section className="panel overflow-hidden p-6 sm:p-10">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400/90">
          Critical-site airspace safety · simulation
        </p>
        <div className="mt-3 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-white sm:text-5xl">
              Coordinate detection, alerting, and response on a training grid.
            </h1>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-400 sm:text-base">
              InterceptorGrid is a command-center MVP for enterprises evaluating how
              a safety-first grid would watch simulated airspace events, score
              detection confidence, escalate with policy gates, and keep an
              immutable-style audit trail. It does not claim operational authority
              over real airspace.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/command" className="btn-grid">
                Open command simulator
              </Link>
              <Link
                href="/dashboard"
                className="rounded-full border border-cyan-800/60 px-6 py-2.5 text-sm font-semibold text-cyan-100 hover:border-cyan-500/50"
              >
                View event dashboard
              </Link>
            </div>
          </div>
          <figure className="rounded-2xl border border-cyan-800/40 bg-slate-950/80 p-4">
            <figcaption className="mb-3 flex justify-between text-[11px] uppercase tracking-[0.16em] text-cyan-200/70">
              <span>Training plot</span>
              <span>Injected scenario</span>
            </figcaption>
            <svg viewBox="0 0 360 200" className="h-auto w-full" role="img" aria-label="Simulated airspace grid with one injected track">
              <rect width="360" height="200" rx="12" fill="#020617" />
              <g stroke="#164e63" strokeWidth="1">
                {[40, 80, 120, 160].map((y) => (
                  <line key={y} x1="16" y1={y} x2="344" y2={y} />
                ))}
                {[60, 120, 180, 240, 300].map((x) => (
                  <line key={x} x1={x} y1="16" x2={x} y2="184" />
                ))}
              </g>
              <circle cx="96" cy="128" r="8" fill="#22d3ee" />
              <path d="M96 128 C140 90, 210 70, 268 54" stroke="#67e8f9" strokeWidth="2" fill="none" />
              <circle cx="268" cy="54" r="5" fill="#f59e0b" />
              <text x="20" y="24" fill="#67e8f9" fontSize="10" fontFamily="ui-sans-serif, system-ui">ZONE B · drill</text>
            </svg>
          </figure>
        </div>
      </section>

      <section className="grid gap-6 sm:grid-cols-2">
        {modules.map((c) => (
          <article key={c.title} className="panel p-5">
            <h2 className="text-sm font-semibold text-cyan-100">{c.title}</h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-400">{c.body}</p>
          </article>
        ))}
      </section>

      <section className="panel border-amber-900/40 bg-amber-950/20 p-6 sm:p-8">
        <h2 className="text-lg font-semibold text-amber-50">Honest scope</h2>
        <p className="mt-2 max-w-3xl text-sm text-amber-100/80">
          Built for critical infrastructure, defense-adjacent training ranges,
          and regulated sites that need a credible coordination UX before they
          wire real sensors or authorized counter-UAS programs. Events you see
          in the simulator are injected scenarios. There is no live sensor feed
          and no claimed intercept rate. See{" "}
          <Link href="/pricing" className="font-medium text-cyan-300 underline-offset-2 hover:underline">
            enterprise evaluation
          </Link>{" "}
          for packaging notes.
        </p>
      </section>
    </div>
  );
}
