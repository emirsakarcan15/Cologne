import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="py-12 bg-background border-t border-border">
    <div className="container mx-auto px-6">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <Link to="/" className="font-display text-2xl font-light tracking-[0.15em] text-foreground">
          COLOGNE
        </Link>
        <div className="flex items-center gap-8 font-body text-xs tracking-[0.2em] uppercase text-muted-foreground">
          <Link to="/" className="hover:text-primary transition-colors">Ana Sayfa</Link>
          <Link to="/products" className="hover:text-primary transition-colors">Parfümler</Link>
        </div>
        <p className="font-body text-xs text-muted-foreground">
          © 2024 Cologne. Tüm hakları saklıdır.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
