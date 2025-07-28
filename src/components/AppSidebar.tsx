import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { 
  Home, 
  User, 
  Briefcase, 
  FolderOpen, 
  Brain, 
  Mail,
  Menu,
  X,
  PenTool,
  GraduationCap,
  Linkedin,
  MessageCircle,
  Zap
} from "lucide-react";

const AppSidebar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const location = useLocation();

  const menuItems = [
    { label: "Início", id: "hero", icon: Home, path: "/" },
    { label: "Sobre mim", id: "about", icon: User, path: "#about" },
    { label: "Experiências", id: "experience", icon: Briefcase, path: "#experience" },
    { label: "Educação", id: "education", icon: GraduationCap, path: "#education" },
    { label: "Projetos", id: "projects", icon: FolderOpen, path: "#projects" },
    { label: "Skills", id: "skills", icon: Brain, path: "#skills" },
    { label: "Devaneios", id: "blog", icon: PenTool, path: "#blog" },
    { label: "Contato", id: "contact", icon: Mail, path: "#contact" },
  ];

  const scrollToSection = (sectionId: string) => {
    setIsMobileMenuOpen(false);
    setActiveSection(sectionId); // Set active section immediately when clicked
    if (sectionId === "hero") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (location.pathname !== "/") return;
      
      const sections = menuItems.map(item => item.id);
      
      if (window.scrollY < 100) {
        setActiveSection("hero");
        return;
      }
      
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial state
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  const isActive = (sectionId: string) => {
    if (location.pathname !== "/") return false;
    return activeSection === sectionId;
  };

  return (
    <>
      {/* Mobile hamburger button */}
      <button 
        className="lg:hidden fixed top-4 left-4 z-50 p-2 glass-card hover-glow"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Mobile overlay */}
       {isMobileMenuOpen && (
         <div 
           className="fixed inset-0 bg-background/80 z-40 lg:hidden"
           onClick={() => setIsMobileMenuOpen(false)}
         />
       )}
      
      <div 
        className={`fixed top-0 left-0 h-full z-50 transition-smooth lg:w-72 w-72 ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
        style={{ '--sidebar-width': '288px' } as React.CSSProperties}
      >
        {/* Background */}
        <div className="absolute inset-0 glass-sidebar"></div>
        
        {/* Content */}
        <div className="relative h-full flex flex-col p-6">
          {/* Logo/Brand */}
          <div className="mb-12 mt-4 lg:mt-0">
            <div className="flex items-center space-x-3 mb-2">
              <div className="w-10 h-10 gradient-primary rounded-2xl flex items-center justify-center">
                <Zap className="text-primary-foreground w-5 h-5" />
              </div>
              <div className="min-w-0">
                <h2 className="text-lg font-semibold text-sidebar-foreground truncate">Anna Machado</h2>
                <p className="text-xs text-muted-foreground truncate">Product Designer</p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 space-y-2">
            {menuItems.map((item) => {
              const IconComponent = item.icon;
              const active = isActive(item.id);
              
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`w-full flex items-center space-x-3 p-3 transition-smooth group hover-glow relative rounded-xl ${
                    active 
                      ? "bg-sidebar-accent text-sidebar-primary" 
                      : "text-sidebar-foreground hover:text-sidebar-primary hover:bg-sidebar-accent/50"
                  }`}
                >
                  <IconComponent 
                    size={20} 
                    className={`${active ? "text-sidebar-primary" : ""} transition-smooth flex-shrink-0`}
                  />
                  <span className="font-medium truncate">{item.label}</span>
                  
                  {/* Active indicator */}
                  {active && (
                    <div className="ml-auto w-2 h-2 gradient-primary rounded-full"></div>
                  )}
                </button>
              );
            })}
          </nav>

          {/* Social Links */}
          <div className="mt-8 pt-6 border-t border-sidebar-border space-y-4">
            <div className="flex justify-center gap-4">
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center hover:bg-accent/20 transition-smooth hover-glow group"
              >
                <Linkedin size={18} className="text-accent group-hover:scale-110 transition-transform" />
              </a>
              <a 
                href="https://wa.me/5511999999999" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-smooth hover-glow group"
              >
                <MessageCircle size={18} className="text-primary group-hover:scale-110 transition-transform" />
              </a>
            </div>
            
            <p className="text-xs text-muted-foreground text-center">
              Feito com ❤️<br />
              e muitos gatinhos
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppSidebar;