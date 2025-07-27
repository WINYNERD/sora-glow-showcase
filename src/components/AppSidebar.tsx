import { useState } from "react";
import { useLocation } from "react-router-dom";
import { 
  Home, 
  User, 
  Briefcase, 
  FolderOpen, 
  Brain, 
  Mail,
  Menu,
  X
} from "lucide-react";
import { Button } from "@/components/ui/button";

const AppSidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const location = useLocation();

  const menuItems = [
    { label: "Início", id: "hero", icon: Home, path: "/" },
    { label: "Sobre mim", id: "about", icon: User, path: "#about" },
    { label: "Experiências", id: "experience", icon: Briefcase, path: "#experience" },
    { label: "Projetos", id: "projects", icon: FolderOpen, path: "#projects" },
    { label: "Skills", id: "skills", icon: Brain, path: "#skills" },
    { label: "Contato", id: "contact", icon: Mail, path: "#contact" },
  ];

  const scrollToSection = (sectionId: string) => {
    if (sectionId === "hero") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  const isActive = (sectionId: string) => {
    if (location.pathname !== "/") return false;
    
    if (sectionId === "hero") {
      return window.scrollY < 100;
    }
    
    const element = document.getElementById(sectionId);
    if (!element) return false;
    
    const rect = element.getBoundingClientRect();
    return rect.top <= 100 && rect.bottom >= 100;
  };

  return (
    <div className={`fixed top-0 left-0 h-full z-50 transition-smooth ${
      isCollapsed ? "w-16" : "w-72"
    }`}>
      {/* Background */}
      <div className="absolute inset-0 glass-sidebar"></div>
      
      {/* Content */}
      <div className="relative h-full flex flex-col p-6">
        {/* Toggle Button */}
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="mb-8 self-end hover:bg-primary/10 hover:text-primary"
        >
          {isCollapsed ? <Menu size={20} /> : <X size={20} />}
        </Button>

        {/* Logo/Brand */}
        {!isCollapsed && (
          <div className="mb-12">
            <div className="flex items-center space-x-3 mb-2">
              <div className="w-10 h-10 gradient-primary rounded-2xl flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">A</span>
              </div>
              <div className="min-w-0">
                <h2 className="text-lg font-semibold text-foreground truncate">Anna Machado</h2>
                <p className="text-xs text-muted-foreground truncate">Product Designer</p>
              </div>
            </div>
          </div>
        )}
        
        {/* Collapsed logo */}
        {isCollapsed && (
          <div className="mb-8 flex justify-center">
            <div className="w-10 h-10 gradient-primary rounded-2xl flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">A</span>
            </div>
          </div>
        )}

        {/* Navigation */}
        <nav className="flex-1 space-y-2">
          {menuItems.map((item) => {
            const IconComponent = item.icon;
            const active = isActive(item.id);
            
            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`w-full flex items-center space-x-3 p-3 rounded-2xl transition-smooth group ${
                  active 
                    ? "bg-primary/10 text-primary" 
                    : "text-muted-foreground hover:text-foreground hover:bg-white/5"
                }`}
              >
                <IconComponent 
                  size={20} 
                  className={`${active ? "text-primary" : "group-hover:scale-110"} transition-smooth`}
                />
                {!isCollapsed && (
                  <span className="font-medium truncate">{item.label}</span>
                )}
                
                {/* Active indicator */}
                {active && !isCollapsed && (
                  <div className="ml-auto w-2 h-2 gradient-primary rounded-full"></div>
                )}
              </button>
            );
          })}
        </nav>

        {/* Footer */}
        {!isCollapsed && (
          <div className="mt-8 pt-6 border-t border-border/50">
            <p className="text-xs text-muted-foreground text-center">
              Crafted with ❤️<br />
              & lots of coffee
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AppSidebar;