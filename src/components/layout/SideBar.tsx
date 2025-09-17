import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  MessageSquare,
  Users,
  Settings,
  BarChart3,
  Bot,
  Globe,
  Bell,
  Search,
  Folder,
  Tag
} from "lucide-react";
import { useState } from "react";

const navigationItems = [
  { icon: MessageSquare, label: "Conversations", active: true },
  { icon: Users, label: "Contacts", active: false },
  { icon: Bot, label: "AI Assistants", active: false },
  { icon: BarChart3, label: "Reports", active: false },
  { icon: Settings, label: "Settings", active: false },
];

const organizationItems = [
  { icon: Folder, label: "Inbox", count: 12 },
  { icon: Tag, label: "Priority", count: 3 },
  { icon: Bell, label: "Mentions", count: 2 },
  { icon: Search, label: "Unattended", count: 8 },
];

export function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className={cn(
      "bg-sidebar border-r border-sidebar-border transition-smooth",
      collapsed ? "w-16" : "w-64"
    )}>
      {/* Header */}
      <div className="p-4 border-b border-sidebar-border">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <MessageSquare className="w-4 h-4 text-primary-foreground" />
          </div>
          {!collapsed && (
            <div>
              <h1 className="text-sidebar-foreground font-semibold">OmniChannel</h1>
              <p className="text-xs text-sidebar-foreground/60">Support Hub</p>
            </div>
          )}
        </div>
      </div>

      {/* Search */}
      {!collapsed && (
        <div className="p-4">
          <div className="relative">
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-sidebar-foreground/60" />
            <input
              type="text"
              placeholder="Search..."
              className="w-full pl-9 pr-3 py-2 bg-sidebar-accent border border-sidebar-border rounded-md text-sm text-sidebar-foreground placeholder:text-sidebar-foreground/60 focus:outline-none focus:ring-2 focus:ring-sidebar-ring"
            />
          </div>
        </div>
      )}

      {/* Navigation */}
      <div className="px-2 py-4">
        <nav className="space-y-1">
          {navigationItems.map((item) => (
            <Button
              key={item.label}
              variant={item.active ? "default" : "ghost"}
              size="sm"
              className={cn(
                "w-full justify-start gap-3 h-10",
                item.active
                  ? "bg-primary text-primary-foreground shadow-glow"
                  : "text-sidebar-foreground hover:bg-sidebar-accent"
              )}
            >
              <item.icon className="h-4 w-4 flex-shrink-0" />
              {!collapsed && <span className="truncate">{item.label}</span>}
            </Button>
          ))}
        </nav>
      </div>

      {/* Organization Section */}
      {!collapsed && (
        <div className="px-2 py-4 border-t border-sidebar-border">
          <h3 className="px-2 text-xs font-medium text-sidebar-foreground/60 uppercase tracking-wider mb-2">
            Organization
          </h3>
          <nav className="space-y-1">
            {organizationItems.map((item) => (
              <Button
                key={item.label}
                variant="ghost"
                size="sm"
                className="w-full justify-between h-8 text-sidebar-foreground hover:bg-sidebar-accent"
              >
                <div className="flex items-center gap-2">
                  <item.icon className="h-3 w-3" />
                  <span className="text-sm">{item.label}</span>
                </div>
                {item.count > 0 && (
                  <span className="text-xs bg-primary text-primary-foreground px-1.5 py-0.5 rounded-full">
                    {item.count}
                  </span>
                )}
              </Button>
            ))}
          </nav>
        </div>
      )}

      {/* Language Selector */}
      {!collapsed && (
        <div className="absolute bottom-4 left-4 right-4">
          <Button
            variant="ghost"
            size="sm"
            className="w-full justify-start gap-2 text-sidebar-foreground hover:bg-sidebar-accent"
          >
            <Globe className="h-4 w-4" />
            <span>English</span>
          </Button>
        </div>
      )}

      {/* Collapse Toggle */}
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setCollapsed(!collapsed)}
        className="absolute bottom-20 right-2 w-8 h-8 p-0 text-sidebar-foreground/60 hover:text-sidebar-foreground hover:bg-sidebar-accent"
      >
        <div className={cn("transition-transform", collapsed && "rotate-180")}>
          ←
        </div>
      </Button>
    </div>
  );
}