import {
    Car,
    MapPin,
    Radar,
    Hand,
    Sparkles,
    ArrowRight,
    Bus,
    Navigation,
    Gauge,
    ShieldCheck,
    Users,
    Star,
} from "lucide-react";


function Stat({ n, label }) {
  return (<div><p className="font-display text-2xl text-foreground">{n}</p><p className="text-xs">{label}</p></div>);
}

function MiniMap() {
  return (
    <svg viewBox="0 0 400 260" className="absolute inset-0 w-full h-full">
      <defs>
        <linearGradient id="bg" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="oklch(0.92 0.04 80)" />
          <stop offset="100%" stopColor="oklch(0.88 0.05 75)" />
        </linearGradient>
      </defs>
      <rect width="400" height="260" fill="url(#bg)" />
      {/* roads */}
      <path d="M0 200 Q 150 180 250 130 T 400 60" stroke="oklch(0.78 0.03 75)" strokeWidth="18" fill="none" strokeLinecap="round" />
      <path d="M40 0 Q 80 80 160 110 T 320 260" stroke="oklch(0.82 0.03 75)" strokeWidth="14" fill="none" strokeLinecap="round" />
      {/* active route */}
      <path
        d="M60 215 Q 180 190 260 140 T 360 70"
        stroke="oklch(0.65 0.14 45)"
        strokeWidth="4"
        fill="none"
        strokeLinecap="round"
        className="animate-dash"
      />
      {/* pickup */}
      <g>
        <circle cx="60" cy="215" r="10" fill="oklch(0.32 0.05 50)" />
        <circle cx="60" cy="215" r="4" fill="oklch(0.97 0.02 85)" />
      </g>
      {/* drop */}
      <g>
        <circle cx="360" cy="70" r="10" fill="oklch(0.65 0.14 45)" />
        <circle cx="360" cy="70" r="4" fill="oklch(0.97 0.02 85)" />
      </g>
      {/* car icon */}
      <g transform="translate(225 152)">
        <circle r="18" fill="oklch(0.97 0.02 85)" stroke="oklch(0.65 0.14 45)" strokeWidth="2" className="animate-glow" />
        <text textAnchor="middle" dy="5" fontSize="16">🚗</text>
      </g>
    </svg>
  );
}

function Nav() {
  return (
     <header className="absolute top-0 left-0 right-0 z-30">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 font-display text-2xl font-bold tracking-tight">
          <span className="w-9 h-9 rounded-xl bg-primary text-primary-foreground grid place-items-center shadow-cream">Y</span>
          yatrax
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <a href="#" className="hover:text-foreground transition">Ride</a>
          <a href="#" className="hover:text-foreground transition">Transit</a>
          <a href="#" className="hover:text-foreground transition">Drivers</a>
          <a href="#" className="hover:text-foreground transition">Cities</a>
        </nav>
        <button className="rounded-full bg-foreground text-background px-5 py-2.5 text-sm font-semibold hover:bg-foreground/90 transition">
          Open app
        </button>
      </div>
    </header>
  );
}

function VehicleRow({ v, active }) {
  const toneClass = v.tone === "ok" ? "bg-green-500/15 text-green-700" : v.tone === "mid" ? "bg-amber-500/15 text-amber-700" : "bg-red-500/15 text-red-700";
  return (
    <div className={`flex items-center justify-between rounded-xl px-3.5 py-2.5 border ${active ? "border-accent bg-accent/8 ring-2 ring-accent/20" : "border-border/60 bg-background/40"}`}>
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 rounded-lg bg-secondary grid place-items-center">{v.name === "Mini-Bus" ? <Bus className="w-4 h-4" /> : <Car className="w-4 h-4" />}</div>
        <div><p className="text-sm font-semibold">{v.name}</p><p className="text-[11px] text-muted-foreground">{v.eta} • {v.seats}</p></div>
      </div>
      <div className="flex items-center gap-2"><span className={`text-[10px] font-bold px-2 py-1 rounded-full ${toneClass}`}>{v.chance}</span><span className="font-display font-bold text-sm">{v.price}</span></div>
    </div>
  );
}

function MiniFeature({ Icon, title, body }) {
  return (
    <div className="rounded-2xl bg-card p-4 border border-border/60">
      <Icon className="w-5 h-5 text-accent mb-2" />
      <p className="font-semibold text-sm">{title}</p>
      <p className="text-xs text-muted-foreground mt-0.5">{body}</p>
    </div>
  );
}


export {VehicleRow, MiniMap, Stat,  MiniFeature};

