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
  MessageCircle
} from "lucide-react";

const AppSidebar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const location = useLocation();

  const menuItems = [
    { label: "Início", id: "hero", icon: Home, path: "/" },
    { label: "Sobre mim", id: "about", icon: User, path: "#about" },
    { label: "Projetos", id: "projects", icon: FolderOpen, path: "#projects" },
    { label: "Educação", id: "education", icon: GraduationCap, path: "#education" },
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
      
      // Check if we're near the bottom of the page
      const isNearBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 100;
      if (isNearBottom) {
        setActiveSection("contact");
        return;
      }
      
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          // More lenient detection for better section switching
          if (rect.top <= 200 && rect.bottom >= 100) {
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
                <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">
                  <path d="M17 7.20999C19.989 7.93299 22 9.28099 22 10.826C22 13.131 17.523 15 12 15C6.477 15 2 13.13 2 10.826C2 9.28099 4.011 7.93299 7 7.21099" stroke="white" strokeWidth="1.5"/>
                  <path d="M7 7.729C7.00027 6.47487 7.49858 5.27219 8.38538 4.38539C9.27219 3.49858 10.4749 3.00027 11.729 3H12.271C13.5251 3.00027 14.7278 3.49858 15.6146 4.38539C16.5014 5.27219 16.9997 6.47487 17 7.729C17 7.906 16.946 8.079 16.8 8.18C16.386 8.468 15.19 9 12 9C8.81 9 7.614 8.468 7.2 8.18C7.054 8.08 7 7.906 7 7.729Z" stroke="white" strokeWidth="1.5"/>
                  <circle cx="12" cy="12" r="1" fill="white"/>
                  <circle cx="7" cy="11" r="1" fill="white"/>
                  <circle cx="17" cy="11" r="1" fill="white"/>
                  <path d="M12 21V18M18 20V17M6 20V17" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
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
                href="https://www.linkedin.com/in/machadoanna/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center hover:bg-accent/20 transition-smooth hover-glow group"
              >
                <Linkedin size={18} className="text-accent group-hover:scale-110 transition-transform" />
              </a>
              <a 
                href="https://wa.me/552197356953" 
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