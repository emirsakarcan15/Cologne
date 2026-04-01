import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SpotlightCard from "@/components/SpotlightCard";
import FadeContent from "@/components/FadeContent";
import BlurText from "@/components/BlurText";

import perfume1 from "@/assets/perfume-1.jpg";
import perfume2 from "@/assets/perfume-2.jpg";
import perfume3 from "@/assets/perfume-3.jpg";
import perfume4 from "@/assets/perfume-4.jpg";
import perfume5 from "@/assets/perfume-5.jpg";
import perfume6 from "@/assets/perfume-6.jpg";

const products = [
  {
    name: "Or Noir",
    category: "Eau de Parfum",
    description: "Oud ağacı, amber ve vanilyanın muhteşem uyumu. Gizemli ve çekici.",
    notes: "Üst: Bergamot, Safran · Orta: Oud, Gül · Alt: Amber, Vanilya",
    price: "₺2.450",
    size: "100ml",
    image: perfume1,
    rgba: "rgba(191, 155, 48, 0.38)"
  },
  {
    name: "Bleu Profond",
    category: "Eau de Toilette",
    description: "Okyanus esintisi ve taze notalarla ferahlatan bir deneyim.",
    notes: "Üst: Deniz Tuzu, Limon · Orta: Lavanta, Adaçayı · Alt: Sedir, Misk",
    price: "₺1.890",
    size: "75ml",
    image: perfume2,
    rgba: "rgba(39, 49, 245, 1)"
  },
  {
    name: "Rose Éternelle",
    category: "Eau de Parfum",
    description: "Bulgar gülü ve yasemin ile zamansız bir kadınsı zarafet.",
    notes: "Üst: Armut, Pembe Biber · Orta: Gül, Yasemin · Alt: Paçuli, Misk",
    price: "₺2.150",
    size: "100ml",
    image: perfume3,
    rgba: "rgba(227, 0, 142, 0.88)"
  },
  {
    name: "Mystère Violet",
    category: "Extrait de Parfum",
    description: "İris ve menekşe yapraklarının büyüleyici gizemli buluşması.",
    notes: "Üst: Menekşe, Elemi · Orta: İris, Süsen · Alt: Sandal Ağacı, Tonka",
    price: "₺3.200",
    size: "50ml",
    image: perfume4,
    rgba: "rgba(156, 0, 227, 1)"
  },
  {
    name: "Jardin Vert",
    category: "Eau de Cologne",
    description: "Taze yeşillikler ve narenciye ile enerji dolu bir koku.",
    notes: "Üst: Yeşil Çay, Bergamot · Orta: Yasemin, Bambu · Alt: Vetiver, Misk",
    price: "₺1.650",
    size: "125ml",
    image: perfume5,
    rgba: "rgba(0, 227, 8, 1)"
  },
  {
    name: "Blanc Absolu",
    category: "Eau de Parfum",
    description: "Saf beyaz çiçekler ve temiz notalarla minimalist bir şıklık.",
    notes: "Üst: Aldehit, Limon · Orta: Beyaz Zambak, Müge · Alt: Beyaz Misk, Kaşmir",
    price: "₺2.750",
    size: "100ml",
    image: perfume6,
    rgba: "rgba(255, 255, 255, 255)"
  },
];

const Products = () => (
  <div className="min-h-screen">
    <Navbar />
    <section className="pt-32 pb-20 bg-background">
      <div className="container mx-auto px-6 text-center">
        <p className="font-body text-xs uppercase tracking-[0.5em] text-primary mb-4">Koleksiyon</p>
        <h1 className="font-display text-6xl md:text-8xl font-light text-foreground mb-6">
          <BlurText text="Parfümlerimiz" delay={80} animateBy="letters" className="justify-center" />
        </h1>
        <p className="font-body text-base text-muted-foreground max-w-xl mx-auto">
          Her biri özenle hazırlanmış, eşsiz hikayeler anlatan kokular koleksiyonumuz.
        </p>
      </div>
    </section>

    <section className="pb-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, i) => (
            <FadeContent key={i} blur duration={800} delay={i * 100}>
              <SpotlightCard
                className="bg-card border-border rounded-none p-0 overflow-hidden group h-full"
                spotlightColor={product.rgba}
              >
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    loading="lazy"
                    width={800}
                    height={1024}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-8">
                  <div className="flex items-center justify-between mb-3">
                    <p className="font-body text-xs uppercase tracking-[0.3em] text-primary">{product.category}</p>
                    <p className="font-body text-xs text-muted-foreground">{product.size}</p>
                  </div>
                  <h3 className="font-display text-3xl font-light text-foreground mb-3">{product.name}</h3>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed mb-4">{product.description}</p>
                  <p className="font-body text-xs text-muted-foreground/70 mb-6 italic">{product.notes}</p>
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <span className="font-display text-2xl text-primary">{product.price}</span>
                    <button className="border border-primary/50 text-primary px-6 py-2 font-body text-xs tracking-[0.2em] uppercase hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                      İncele
                    </button>
                  </div>
                </div>
              </SpotlightCard>
            </FadeContent>
          ))}
        </div>
      </div>
    </section>
    <Footer />
  </div>
);

export default Products;
