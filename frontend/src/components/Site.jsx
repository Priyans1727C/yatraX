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



function Footer() {
  return (
   <footer className="border-t border-border/60 bg-cream-deep/30">
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} Yatrax Mobility. Crafted in India.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-foreground">Privacy</a>
          <a href="#" className="hover:text-foreground">Terms</a>
          <a href="#" className="hover:text-foreground">Contact</a>
        </div>
      </div>
    </footer>
  );
}


export {Nav, Footer};