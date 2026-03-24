import FadeContent from "@/components/FadeContent";

const AboutSection = () => (
  <section id="about" className="py-32 bg-background">
    <div className="container mx-auto px-6">
      <FadeContent blur duration={800}>
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-body text-xs uppercase tracking-[0.4em] text-primary mb-4">Tarihçe</p>
          <h2 className="font-display text-5xl md:text-7xl font-light text-foreground mb-10">
            Hikayemiz
          </h2>
          <p className="font-body text-base text-muted-foreground leading-loose mb-8">
            1968 yılında Fransa'nın güney sahillerinde küçük bir atölyede doğan Cologne, 
            <span className="text-foreground"> yarım asrı aşkın bir süredir dünyanın en nadide esanslarını </span>
            bir araya getirerek benzersiz kokular yaratıyor.
          </p>
          <p className="font-body text-base text-muted-foreground leading-loose">
            Her parfümümüz, doğanın en seçkin malzemelerinden ilham alarak ustalarımızın 
            ellerinde sanat eserine dönüşür. Geleneksel Fransız parfümcülük sanatını 
            modern zarafetle buluşturan Cologne, kokunun ötesinde bir deneyim sunar.
          </p>
        </div>
      </FadeContent>
      <FadeContent blur duration={800} delay={200}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-20 text-center">
          {[
            { number: "56+", label: "Yıllık Miras" },
            { number: "200+", label: "Eşsiz Koku" },
            { number: "45", label: "Ülke" },
          ].map((stat, i) => (
            <div key={i} className="py-8 border-t border-border">
              <p className="font-display text-5xl font-light text-primary mb-3">{stat.number}</p>
              <p className="font-body text-xs uppercase tracking-[0.3em] text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </FadeContent>
    </div>
  </section>
);

export default AboutSection;
