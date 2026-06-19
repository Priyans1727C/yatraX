import MainLayout from "../layouts/MainLayout";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

import {VehicleRow, MiniMap, Stat,  MiniFeature} from "../components/Landing";
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


const vehicles = [
    { name: "Auto", eta: "2 min", price: "₹48", seats: "3 / 4", chance: "High", tone: "ok" },
    { name: "Mini-Bus", eta: "5 min", price: "₹22", seats: "9 / 12", chance: "Medium", tone: "mid" },
    { name: "Sedan", eta: "4 min", price: "₹186", seats: "Private", chance: "Available", tone: "ok" },
    { name: "Shared Cab", eta: "7 min", price: "₹64", seats: "Full", chance: "Full", tone: "no" },
];

const pillars = [
    {
        icon: Radar,
        title: "Dynamic Transport Discovery",
        body: "Surface shared autos and mini-buses actively running corridors that cross your destination — no timetables, just live supply.",
    },
    {
        icon: Hand,
        title: "Live Tracking & Digital Hail",
        body: "Watch approaching vehicles on a live map and raise a digital hand at any intermediate stop. The driver knows, you just board.",
    },
    {
        icon: Sparkles,
        title: "Predictive Intelligence",
        body: "ML-trained seat availability — High Chance, Medium, or Full — predicted from history, never relying on a busy driver.",
    },
];


export default function Home() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 160]);
  const rotX = useTransform(scrollYProgress, [0, 1], [10, 0]);

  return (
    <div className="min-h-screen bg-background text-foreground font-sans overflow-x-hidden">
    
      {/* HERO SECTION */}
      <section ref={ref} className="relative gradient-hero">
        <div className="absolute inset-0 bg-grid opacity-60" />
        <div className="absolute -top-20 -right-20 w-[520px] h-[520px] rounded-full bg-accent/30 blur-3xl animate-glow" />
        <div className="absolute -bottom-32 -left-24 w-[460px] h-[460px] rounded-full bg-secondary/70 blur-3xl animate-glow" />

        <div className="max-w-7xl mx-auto px-6 pt-28 pb-32 grid lg:grid-cols-[1.05fr_1fr] gap-16 items-center relative">
          <motion.div style={{ y: heroY }}>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs font-medium text-foreground/70"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              Live transit intelligence • Now in beta
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.7 }}
              className="font-display mt-6 text-[clamp(2.6rem,6vw,5.4rem)] leading-[0.95] tracking-tight"
            >
              Every ride.
              <br />
              <span className="text-gradient italic">Every route.</span>
              <br />
              One Yatrax.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.7 }}
              className="mt-6 text-lg text-muted-foreground max-w-xl"
            >
              A hybrid hub for India's streets — book private cabs with upfront fares, or
              live-track autos and mini-buses with AI seat predictions and one-tap digital hailing.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mt-9 flex flex-wrap gap-3"
            >
              <button className="group inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3.5 text-sm font-semibold shadow-soft hover:translate-y-[-2px] transition-transform">
                Book a ride
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>
              <button className="inline-flex items-center gap-2 rounded-full glass px-6 py-3.5 text-sm font-semibold hover:bg-card transition">
                <MapPin className="w-4 h-4 text-accent" />
                Track live transit
              </button>
            </motion.div>

            <div className="mt-10 flex items-center gap-6 text-sm text-muted-foreground">
              <Stat n="1.2M" label="Rides hailed" />
              <span className="w-px h-8 bg-border" />
              <Stat n="84" label="Cities" />
              <span className="w-px h-8 bg-border" />
              <Stat n="4.9★" label="Avg rating" />
            </div>
          </motion.div>

          {/* 3D BOOKING CARD */}
          <motion.div
            style={{ rotateX: rotX }}
            className="perspective relative"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotateY: -25 }}
              animate={{ opacity: 1, scale: 1, rotateY: -12 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="preserve-3d animate-float relative mx-auto w-full max-w-md"
            >
              <div className="relative rounded-[2rem] bg-card shadow-soft p-6 border border-border/60">
                {/* mini map */}
                <div className="rounded-2xl overflow-hidden border border-border/70 bg-cream-deep/40 relative h-64">
                  <MiniMap />
                </div>

                <div className="mt-5 flex items-center justify-between">
                  <div>
                    <p className="text-xs text-muted-foreground">Pickup → Drop</p>
                    <p className="font-semibold text-sm">MG Road → Indiranagar</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-muted-foreground">Fare</p>
                    <p className="font-display text-2xl text-gradient font-bold">₹186</p>
                  </div>
                </div>

                <div className="mt-4 space-y-2">
                  {vehicles.map((v, i) => (
                    <VehicleRow key={v.name} v={v} active={i === 0} />
                  ))}
                </div>

                <button className="mt-5 w-full rounded-xl bg-accent text-accent-foreground py-3 font-semibold text-sm hover:brightness-95 transition flex items-center justify-center gap-2">
                  Confirm Auto • ₹48 <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              {/* Floating chips */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
                className="animate-float-2 absolute -left-10 top-10 glass rounded-2xl px-4 py-3 shadow-cream"
              >
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-accent/20 grid place-items-center">
                    <Sparkles className="w-4 h-4 text-accent" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-muted-foreground">AI prediction</p>
                    <p className="text-xs font-semibold">High chance of seat</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 }}
                className="animate-float-2 absolute -right-8 bottom-24 glass rounded-2xl px-4 py-3 shadow-cream"
                style={{ animationDelay: "1.2s" }}
              >
                <div className="flex items-center gap-2">
                  <Bus className="w-5 h-5 text-primary" />
                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-muted-foreground">Mini-bus #B12</p>
                    <p className="text-xs font-semibold">120m away • 2 min</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* marquee */}
        <div className="border-y border-border/60 bg-card/50 backdrop-blur py-4 overflow-hidden">
          <div className="flex gap-12 animate-marquee whitespace-nowrap font-display text-xl text-muted-foreground">
            {Array.from({ length: 2 }).map((_, k) => (
              <div key={k} className="flex gap-12 items-center pr-12">
                {["Bengaluru", "Mumbai", "Delhi", "Pune", "Hyderabad", "Chennai", "Kolkata", "Jaipur", "Ahmedabad", "Kochi"].map((c) => (
                  <span key={c} className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent" /> {c}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PILLARS SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-28">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">Three pillars</p>
            <h2 className="font-display text-4xl md:text-5xl mt-3 tracking-tight">Built for the chaos of <span className="italic text-gradient">Indian streets.</span></h2>
          </div>
          <p className="text-muted-foreground max-w-md">Yatrax doesn't ignore informal transit — it organises it. Discover, track, and predict every shared vehicle on your route.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {pillars.map((p, i) => (
            <motion.div key={p.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ delay: i * 0.1, duration: 0.6 }} className="group relative rounded-3xl bg-card p-7 border border-border shadow-cream overflow-hidden">
              <div className="w-12 h-12 rounded-2xl bg-accent/15 grid place-items-center text-accent mb-5"><p.icon className="w-6 h-6" /></div>
              <h3 className="font-display text-2xl tracking-tight mb-2">{p.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{p.body}</p>
            </motion.div>
          ))}
        </div>
      </section>
       <section className="bg-cream-deep/40 border-y border-border/60 py-28">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-10 items-center">
          <div className="perspective">
            <motion.div
              initial={{ opacity: 0, rotateY: 30 }}
              whileInView={{ opacity: 1, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9 }}
              className="preserve-3d rounded-3xl bg-card p-7 shadow-soft border border-border"
              style={{ transform: "rotateY(-8deg) rotateX(6deg)" }}
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-primary text-primary-foreground grid place-items-center">
                  <Car className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">Private booking</p>
                  <p className="font-semibold">Point-to-point, upfront fare</p>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-3 mb-5">
                {["Auto", "Sedan", "SUV"].map((t) => (
                  <div key={t} className="rounded-xl bg-secondary px-3 py-4 text-center text-sm font-medium border border-border/60">{t}</div>
                ))}
              </div>
              <div className="rounded-2xl bg-cream p-4 border border-border/60">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Estimated fare</span>
                  <span className="font-bold text-gradient text-lg">₹248 – ₹262</span>
                </div>
                <div className="mt-2 h-2 rounded-full bg-secondary overflow-hidden">
                  <div className="h-full w-2/3 bg-accent rounded-full" />
                </div>
              </div>
            </motion.div>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">Two systems, one app</p>
            <h2 className="font-display text-4xl md:text-5xl mt-3 tracking-tight">
              Private comfort meets <em className="text-gradient">public hustle.</em>
            </h2>
            <p className="mt-5 text-muted-foreground max-w-lg">
              Industry-standard ride-hailing for when you want a car of your own. A live transit
              dashboard for when the city moves you instead.
            </p>

            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              <MiniFeature Icon={ShieldCheck} title="Upfront fares" body="No surprises at drop." />
              <MiniFeature Icon={Gauge} title="Live ETAs" body="Realtime GPS, every second." />
              <MiniFeature Icon={Navigation} title="Smart routing" body="Corridors that hit your stop." />
              <MiniFeature Icon={Users} title="Seat predictions" body="ML-trained availability." />
            </div>
          </div>
        </div>
      </section>

          {/* TESTIMONIAL / CTA */}
      <section className="max-w-7xl mx-auto px-6 py-28 grid lg:grid-cols-[1.2fr_1fr] gap-10">
        <div className="rounded-[2rem] gradient-hero p-10 md:p-14 relative overflow-hidden border border-border">
          <div className="absolute -top-24 -right-16 w-72 h-72 rounded-full bg-accent/30 blur-3xl animate-glow" />
          <Star className="w-10 h-10 text-accent fill-accent" />
          <p className="font-display text-2xl md:text-4xl leading-snug mt-6 max-w-2xl">
            "Yatrax found me a mini-bus I didn't even know was running my route. Saved me 40
            minutes and ₹120 in one tap."
          </p>
          <div className="mt-8 flex items-center gap-3">
            <div className="w-11 h-11 rounded-full bg-primary text-primary-foreground grid place-items-center font-bold">A</div>
            <div>
              <p className="font-semibold text-sm">Ananya R.</p>
              <p className="text-xs text-muted-foreground">Daily commuter, Bengaluru</p>
            </div>
          </div>
        </div>

        <div className="rounded-[2rem] bg-primary text-primary-foreground p-10 md:p-14 flex flex-col justify-between shadow-soft">
          <div>
            <h3 className="font-display text-3xl md:text-4xl leading-tight">
              Ready to ride <em className="text-accent">smarter?</em>
            </h3>
            <p className="mt-4 text-primary-foreground/70 text-sm">
              Join the beta and get free rides for your first week. No credit card required.
            </p>
          </div>
          <form className="mt-8 flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="you@example.com"
              className="flex-1 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 px-5 py-3.5 text-sm placeholder:text-primary-foreground/40 focus:outline-none focus:border-accent"
            />
            <button className="rounded-full bg-accent text-accent-foreground px-6 py-3.5 text-sm font-semibold hover:brightness-95 transition">
              Get early access
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}