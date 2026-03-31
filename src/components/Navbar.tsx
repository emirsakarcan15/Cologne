import { Link, useLocation } from "react-router-dom";
import ShinyText from "@/components/ShinyText";

const Navbar = () => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="container mx-auto flex items-center justify-between py-5 px-6">
        <Link to="/" className="font-display text-3xl font-light tracking-[0.15em] text-foreground">
          <ShinyText text="COLOGNE" speed={4} shineColor="hsl(40, 60%, 70%)" color="hsl(40, 20%, 90%)" />
        </Link>
        <div className="hidden md:flex items-center gap-10 font-body text-xs font-medium tracking-[0.25em] uppercase text-muted-foreground">
          <Link to="/" className={`hover:text-primary transition-colors duration-300 ${isActive("/") ? "text-primary" : ""}`}>
            Ana Sayfa
          </Link>
          <Link to="/products" className={`hover:text-primary transition-colors duration-300 ${isActive("/products") ? "text-primary" : ""}`}>
            Parfümler
          </Link>
          <Link to="/about" className={`hover:text-primary transition-colors duration-300 ${isActive("/about") ? "text-primary" : ""}`}>
            Hakkımızda
          </Link>
        </div>
        <Link
          to="/products"
          className="border border-primary text-primary px-6 py-2.5 font-body text-xs font-medium tracking-[0.2em] uppercase hover:bg-primary hover:text-primary-foreground transition-all duration-300"
        >
          Keşfet
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
