import { Smartphone, Repeat, TrendingUp, Zap, ArrowRight, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
    <div className="container flex h-16 items-center justify-between">
      <span className="font-heading text-xl font-bold tracking-tight">
        North<span className="text-gradient">Studio</span>
      </span>
      <div className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
        <a href="#services" className="hover:text-foreground transition-colors">Services</a>
        <a href="#about" className="hover:text-foreground transition-colors">About</a>
        <a href="#contact" className="hover:text-foreground transition-colors">Contact</a>
      </div>
      <Button variant="hero" size="sm">
        Get in Touch
      </Button>
    </div>
  </nav>
);

const Hero = () => (
  <section className="relative min-h-screen flex items-center pt-16">
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px]" />
    </div>
    <div className="container relative z-10">
      <div className="max-w-3xl mx-auto text-center space-y-8">
        <div className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-1.5 text-sm text-muted-foreground">
          <Zap className="w-3.5 h-3.5 text-primary" />
          Subscription-first mobile apps
        </div>
        <h1 className="font-heading text-5xl md:text-7xl font-bold tracking-tight leading-[1.1]">
          We build apps that{" "}
          <span className="text-gradient">grow revenue</span>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto leading-relaxed">
          North Studio designs, develops, and publishes subscription-based mobile applications on the App Store and Google Play.
        </p>
        <div className="flex items-center justify-center gap-4 pt-4">
          <Button variant="hero" size="lg">
            Start a Project <ArrowRight className="w-4 h-4 ml-1" />
          </Button>
          <Button variant="heroOutline" size="lg">
            View Our Work
          </Button>
        </div>
      </div>
    </div>
  </section>
);

const services = [
  {
    icon: Smartphone,
    title: "App Development",
    description: "Native and cross-platform mobile apps built for iOS and Android with clean architecture.",
  },
  {
    icon: Repeat,
    title: "Subscription Models",
    description: "We design and integrate monetization strategies with in-app subscriptions that convert.",
  },
  {
    icon: TrendingUp,
    title: "Growth & Publishing",
    description: "Full App Store and Google Play publishing, ASO optimization, and analytics setup.",
  },
];

const Services = () => (
  <section id="services" className="py-32">
    <div className="container">
      <div className="text-center mb-16 space-y-4">
        <h2 className="font-heading text-3xl md:text-4xl font-bold">What we do</h2>
        <p className="text-muted-foreground max-w-lg mx-auto">
          End-to-end mobile app services from concept to recurring revenue.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {services.map((s) => (
          <div
            key={s.title}
            className="group rounded-xl border border-border bg-card p-8 space-y-4 hover:border-primary/30 transition-colors"
          >
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
              <s.icon className="w-5 h-5" />
            </div>
            <h3 className="font-heading text-lg font-semibold">{s.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{s.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const About = () => (
  <section id="about" className="py-32 border-t border-border/50">
    <div className="container max-w-3xl mx-auto text-center space-y-6">
      <h2 className="font-heading text-3xl md:text-4xl font-bold">Built for scale</h2>
      <p className="text-muted-foreground leading-relaxed text-lg">
        North Studio LLC specializes in building subscription-based mobile applications
        that generate predictable, recurring revenue. We handle the full lifecycle —
        from product strategy and UI/UX design through development, publishing,
        and post-launch optimization on both major app stores.
      </p>
    </div>
  </section>
);

const Contact = () => (
  <section id="contact" className="py-32 border-t border-border/50">
    <div className="container max-w-2xl mx-auto text-center space-y-8">
      <h2 className="font-heading text-3xl md:text-4xl font-bold">Let's build together</h2>
      <p className="text-muted-foreground">
        Have an app idea or need a subscription strategy? We'd love to hear from you.
      </p>
      <Button variant="hero" size="lg" asChild>
        <a href="mailto:hello@northstudio.dev">
          <Mail className="w-4 h-4 mr-2" /> hello@northstudio.dev
        </a>
      </Button>
    </div>
  </section>
);

const Footer = () => (
  <footer className="border-t border-border/50 py-8">
    <div className="container flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
      <span className="font-heading font-semibold text-foreground">
        North<span className="text-gradient">Studio</span> LLC
      </span>
      <span>© {new Date().getFullYear()} North Studio LLC. All rights reserved.</span>
    </div>
  </footer>
);

const Index = () => (
  <div className="min-h-screen">
    <Navbar />
    <Hero />
    <Services />
    <About />
    <Contact />
    <Footer />
  </div>
);

export default Index;
