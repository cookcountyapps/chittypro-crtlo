import {
  Building,
  MessageSquare,
  FileText,
  Bot,
  Scale,
  Crown,
  Home,
  LogOut,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarFooter,
} from "@/components/ui/sidebar";
import { useAuth } from "@/hooks/useAuth";
import { Badge } from "@/components/ui/badge";
import { useLocation } from "wouter";

export function AppSidebar() {
  const { user } = useAuth();
  const [location, setLocation] = useLocation();
  const isPremium = user?.subscriptionStatus === "active";

  const mainItems = [
    {
      title: "Dashboard",
      url: "/",
      icon: Home,
    },
    {
      title: "Property Verification",
      url: "/properties",
      icon: Building,
    },
    {
      title: "RTLO Q&A",
      url: "/rtlo-qa",
      icon: MessageSquare,
    },
    {
      title: "Document Generator",
      url: "/documents",
      icon: FileText,
    },
  ];

  const premiumItems = [
    {
      title: "AI Lease Analysis",
      url: "/ai-analysis",
      icon: Bot,
      premium: true,
    },
  ];

  const supportItems = [
    {
      title: "Legal Aid Directory",
      url: "/legal-aid",
      icon: Scale,
    },
  ];

  return (
    <Sidebar data-testid="app-sidebar">
      <SidebarContent>
        {/* Main Navigation */}
        <SidebarGroup>
          <SidebarGroupLabel>Main</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {mainItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton 
                    asChild
                    isActive={location === item.url}
                    data-testid={`sidebar-${item.url.slice(1) || 'home'}`}
                  >
                    <button onClick={() => setLocation(item.url)}>
                      <item.icon />
                      <span>{item.title}</span>
                    </button>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Premium Features */}
        <SidebarGroup>
          <SidebarGroupLabel>Premium</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {premiumItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton 
                    asChild
                    isActive={location === item.url}
                    data-testid={`sidebar-${item.url.slice(1)}`}
                  >
                    <button onClick={() => setLocation(item.url)}>
                      <item.icon />
                      <span>{item.title}</span>
                      {!isPremium && (
                        <Badge variant="secondary" className="ml-auto text-xs">
                          <Crown className="w-3 h-3 mr-1" />
                          Pro
                        </Badge>
                      )}
                    </button>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}

              {!isPremium && (
                <SidebarMenuItem>
                  <SidebarMenuButton 
                    asChild
                    data-testid="sidebar-subscribe"
                  >
                    <button onClick={() => setLocation("/subscribe")}>
                      <Crown />
                      <span>Upgrade to Premium</span>
                      <Badge className="ml-auto text-xs">$29/mo</Badge>
                    </button>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              )}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Support */}
        <SidebarGroup>
          <SidebarGroupLabel>Support</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {supportItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton 
                    asChild
                    isActive={location === item.url}
                    data-testid={`sidebar-${item.url.slice(1)}`}
                  >
                    <button onClick={() => setLocation(item.url)}>
                      <item.icon />
                      <span>{item.title}</span>
                    </button>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <div className="flex items-center space-x-3 p-2">
                <div className="bg-primary/10 w-8 h-8 rounded-full flex items-center justify-center">
                  <span className="text-xs font-semibold text-primary">
                    {user?.firstName?.charAt(0) || user?.email?.charAt(0) || "U"}
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-medium text-foreground truncate">
                    {user?.firstName || user?.email?.split('@')[0] || "User"}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {isPremium ? "Premium" : "Free Plan"}
                  </div>
                </div>
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton asChild data-testid="sidebar-logout">
              <button onClick={() => window.location.href = "/api/logout"}>
                <LogOut />
                <span>Log Out</span>
              </button>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
