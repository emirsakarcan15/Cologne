import { Link } from "react-router-dom";
import SpotlightCard from "@/components/SpotlightCard";
import FadeContent from "@/components/FadeContent";
import perfume1 from "@/assets/perfume-1.jpg";
import perfume2 from "@/assets/perfume-2.jpg";
import perfume3 from "@/assets/perfume-3.jpg";

const featured = [
  { name: "Or Noir", category: "Eau de Parfum", image: perfume1, price: "₺2.450" },
  { name: "Bleu Profond", category: "Eau de Toilette", image: perfume2, price: "₺1.890" },
  { name: "Rose Éternelle", category: "Eau de Parfum", image: perfume3, price: "₺2.150" },
];

const FeaturedSection = () => (
  <section className="py-32 bg-card">
    <div className="container mx-auto px-6">
      <FadeContent blur duration={800}>
        <div className="text-center mb-20">
          <p className="font-body text-xs uppercase tracking-[0.4em] text-primary mb-4">Koleksiyon</p>
          <h2 className="font-display text-5xl md:text-7xl font-light text-foreground">Öne Çıkanlar</h2>
        </div>
      </FadeContent>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {featured.map((item, i) => (
          <FadeContent key={i} blur duration={800} delay={i * 150}>
            <SpotlightCard
              className="bg-secondary border-border rounded-none p-0 overflow-hidden group cursor-pointer"
              spotlightColor="rgba(191, 155, 48, 0.40)"
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  loading="lazy"
                  width={800}
                  height={1024}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-6 text-center">
                <p className="font-body text-xs uppercase tracking-[0.3em] text-muted-foreground mb-2">{item.category}</p>
                <h3 className="font-display text-2xl font-light text-foreground mb-2">{item.name}</h3>
                <p className="font-display text-lg text-primary">{item.price}</p>
              </div>
            </SpotlightCard>
          </FadeContent>
        ))}
      </div>
      <FadeContent blur duration={800} delay={500}>
        <div className="text-center mt-16">
          <Link
            to="/products"
            className="inline-block border border-primary text-primary px-10 py-4 font-body text-xs font-medium tracking-[0.3em] uppercase hover:bg-primary hover:text-primary-foreground transition-all duration-500"
          >
            Tüm Parfümleri Gör
          </Link>
        </div>
      </FadeContent>
    </div>
  </section>
);

export default FeaturedSection;
