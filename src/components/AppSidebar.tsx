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
  X,
  BookOpen,
  PenTool
} from "lucide-react";
import { Button } from "@/components/ui/button";

const AppSidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const location = useLocation();

  const menuItems = [
    { label: "Início", id: "hero", icon: Home, path: "/" },
    { label: "Sobre mim", id: "about", icon: User, path: "#about" },
    { label: "Experiências", id: "experience", icon: Briefcase, path: "#experience" },
    { label: "Educação", id: "education", icon: BookOpen, path: "#education" },
    { label: "Projetos", id: "projects", icon: FolderOpen, path: "#projects" },
    { label: "Skills", id: "skills", icon: Brain, path: "#skills" },
    { label: "Devaneios", id: "blog", icon: PenTool, path: "#blog" },
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
    <>
      {/* Mobile overlay */}
      {!isCollapsed && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setIsCollapsed(true)}
        />
      )}
      
      <div 
        className={`fixed top-0 left-0 h-full z-50 transition-smooth ${
          isCollapsed ? "w-16 -translate-x-full lg:translate-x-0" : "w-72"
        }`}
        style={{ '--sidebar-width': isCollapsed ? '64px' : '288px' } as React.CSSProperties}
      >
        {/* Background */}
        <div className="absolute inset-0 glass-sidebar"></div>
        
        {/* Content */}
        <div className={`relative h-full flex flex-col ${isCollapsed ? "p-2" : "p-6"}`}>
          {/* Toggle Button */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsCollapsed(!isCollapsed)}
            className={`${isCollapsed ? "mb-4" : "mb-8"} self-end hover:bg-primary/10 hover:text-primary hover-glow`}
          >
            {isCollapsed ? <Menu size={16} /> : <X size={20} />}
          </Button>

          {/* Logo/Brand */}
          {!isCollapsed && (
            <div className="mb-12">
              <div className="flex items-center space-x-3 mb-2">
                <div className="w-10 h-10 gradient-primary rounded-2xl flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-lg">A</span>
                </div>
                <div className="min-w-0">
                  <h2 className="text-lg font-semibold text-sidebar-foreground truncate">Anna Machado</h2>
                  <p className="text-xs text-muted-foreground truncate">Product Designer</p>
                </div>
              </div>
            </div>
          )}
          
          {/* Collapsed logo */}
          {isCollapsed && (
            <div className="mb-4 flex justify-center">
              <div className="w-8 h-8 gradient-primary rounded-xl flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">A</span>
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
                  className={`w-full flex items-center transition-smooth group hover-glow relative ${
                    isCollapsed ? "justify-center p-2" : "space-x-3 p-3"
                  } rounded-xl ${
                    active 
                      ? "bg-sidebar-accent text-sidebar-primary" 
                      : "text-sidebar-foreground hover:text-sidebar-primary hover:bg-sidebar-accent/50"
                  }`}
                  title={isCollapsed ? item.label : undefined}
                >
                  <IconComponent 
                    size={isCollapsed ? 18 : 20} 
                    className={`${active ? "text-sidebar-primary" : ""} transition-smooth flex-shrink-0`}
                  />
                  {!isCollapsed && (
                    <span className="font-medium truncate">{item.label}</span>
                  )}
                  
                  {/* Active indicator */}
                  {active && (
                    <div className={`${isCollapsed ? "absolute -right-1 top-1/2 -translate-y-1/2 w-1 h-6" : "ml-auto w-2 h-2"} gradient-primary rounded-full`}></div>
                  )}
                </button>
              );
            })}
          </nav>

          {/* Footer */}
          {!isCollapsed && (
            <div className="mt-8 pt-6 border-t border-sidebar-border">
              <p className="text-xs text-muted-foreground text-center">
                Crafted with ❤️<br />
                & lots of coffee
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default AppSidebar;