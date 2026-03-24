import { MapPin, Phone, Clock, Mail } from "lucide-react";
import FadeContent from "@/components/FadeContent";

const ContactSection = () => (
  <section id="contact" className="py-32 bg-card">
    <div className="container mx-auto px-6">
      <FadeContent blur duration={800}>
        <div className="text-center mb-20">
          <p className="font-body text-xs uppercase tracking-[0.4em] text-primary mb-4">Bize Ulaşın</p>
          <h2 className="font-display text-5xl md:text-7xl font-light text-foreground">İletişim</h2>
        </div>
      </FadeContent>
      <FadeContent blur duration={800} delay={200}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 max-w-5xl mx-auto text-center">
          {[
            { icon: MapPin, title: "Mağaza", lines: ["Nişantaşı, Abdi İpekçi Cad.", "No: 42, Şişli / İstanbul"] },
            { icon: Phone, title: "Telefon", lines: ["+90 (212) 555 19 68"] },
            { icon: Mail, title: "E-posta", lines: ["info@cologne.com.tr"] },
            { icon: Clock, title: "Çalışma Saatleri", lines: ["Pazartesi - Cumartesi", "10:00 — 20:00"] },
          ].map(({ icon: Icon, title, lines }, i) => (
            <div key={i} className="flex flex-col items-center gap-4">
              <div className="w-12 h-12 border border-primary/30 flex items-center justify-center">
                <Icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-display text-xl font-light text-foreground">{title}</h3>
              <div className="font-body text-sm text-muted-foreground leading-relaxed">
                {lines.map((line, j) => (
                  <p key={j}>{line}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </FadeContent>
    </div>
  </section>
);

export default ContactSection;
