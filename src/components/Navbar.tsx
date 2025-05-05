
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container flex justify-between items-center">
        <Link to="/" className="font-heading text-2xl font-bold text-primary">
          Portfolio
        </Link>

        {/* Mobile menu button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </Button>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link 
            to="/" 
            className={`text-base font-medium hover:text-primary transition-colors ${
              isActive('/') ? 'text-primary' : 'text-foreground'
            }`}
          >
            Home
          </Link>
          <Link 
            to="/about" 
            className={`text-base font-medium hover:text-primary transition-colors ${
              isActive('/about') ? 'text-primary' : 'text-foreground'
            }`}
          >
            About
          </Link>
          <Link 
            to="/contact" 
            className={`text-base font-medium hover:text-primary transition-colors ${
              isActive('/contact') ? 'text-primary' : 'text-foreground'
            }`}
          >
            Contact
          </Link>
          <Button asChild>
            <a href="#" target="_blank" rel="noopener noreferrer">
              Resume
            </a>
          </Button>
        </nav>

        {/* Mobile navigation */}
        {isMenuOpen && (
          <div className="md:hidden fixed inset-0 top-16 bg-white z-40 animate-fade-in">
            <nav className="flex flex-col p-8 gap-6">
              <Link 
                to="/" 
                onClick={closeMenu}
                className={`text-lg font-medium hover:text-primary transition-colors ${
                  isActive('/') ? 'text-primary' : 'text-foreground'
                }`}
              >
                Home
              </Link>
              <Link 
                to="/about" 
                onClick={closeMenu}
                className={`text-lg font-medium hover:text-primary transition-colors ${
                  isActive('/about') ? 'text-primary' : 'text-foreground'
                }`}
              >
                About
              </Link>
              <Link 
                to="/contact" 
                onClick={closeMenu}
                className={`text-lg font-medium hover:text-primary transition-colors ${
                  isActive('/contact') ? 'text-primary' : 'text-foreground'
                }`}
              >
                Contact
              </Link>
              <Button asChild className="w-full">
                <a href="#" target="_blank" rel="noopener noreferrer">
                  Resume
                </a>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
