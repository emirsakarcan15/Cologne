import heroImg from "@/assets/cologne-hero.jpg";
import BlurText from "@/components/BlurText";

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center overflow-hidden">
    <div className="absolute inset-0">
      <img src={heroImg} alt="Cologne lüks parfüm koleksiyonu" className="w-full h-full object-cover" width={1920} height={1080} />
      <div className="absolute inset-0 bg-background/50" />
    </div>
    <div className="relative container mx-auto px-6 py-32 text-center">
      <p className="font-body text-xs uppercase tracking-[0.5em] text-primary mb-6 animate-fade-in-up">
        Est. 1968
      </p>
      <h1 className="font-display text-7xl md:text-9xl lg:text-[10rem] font-light text-foreground leading-none mb-8">
        <BlurText text="Cologne" delay={100} animateBy="letters" className="justify-center" />
      </h1>
      <p className="font-display text-xl md:text-2xl text-foreground/70 italic mb-12 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
        Zarafet ve lüksün buluştuğu eşsiz kokular
      </p>
      <a
        href="#about"
        className="inline-block border border-foreground/30 text-foreground px-12 py-4 font-body text-xs font-medium tracking-[0.3em] uppercase hover:border-primary hover:text-primary transition-all duration-500 animate-fade-in-up"
        style={{ animationDelay: "0.6s" }}
      >
        Hikayemizi Keşfedin
      </a>
    </div>
  </section>
);

export default HeroSection;
