import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Filter, ArrowUpDown, Plus } from "lucide-react";

interface Conversation {
  id: string;
  contact: {
    name: string;
    avatar?: string;
    email: string;
  };
  lastMessage: {
    content: string;
    timestamp: string;
    from: 'user' | 'agent';
  };
  channel: {
    type: 'whatsapp' | 'email' | 'web' | 'facebook';
    name: string;
  };
  status: 'open' | 'pending' | 'resolved';
  unread: number;
  priority: 'high' | 'medium' | 'low';
  assignedTo?: string;
}

const mockConversations: Conversation[] = [
  {
    id: "1",
    contact: {
      name: "Klaus Crawley",
      avatar: "/avatars/klaus.jpg",
      email: "kcrawley6@driftburner.inc"
    },
    lastMessage: {
      content: "Hi, I need some help setting up my new device.",
      timestamp: "3 min ago",
      from: "user"
    },
    channel: {
      type: "web",
      name: "Paperlayer Web"
    },
    status: "open",
    unread: 2,
    priority: "high",
    assignedTo: "Mathew M"
  },
  {
    id: "2",
    contact: {
      name: "Candice Matherson",
      avatar: "/avatars/candice.jpg",
      email: "cmatherson@example.com"
    },
    lastMessage: {
      content: "Hey 👋 How many I help you?",
      timestamp: "5 min ago",
      from: "agent"
    },
    channel: {
      type: "email",
      name: "Paperlayer Email Support"
    },
    status: "pending",
    unread: 0,
    priority: "medium"
  },
  {
    id: "3",
    contact: {
      name: "Coreen Mewett",
      avatar: "/avatars/coreen.jpg",
      email: "cmewett@example.com"
    },
    lastMessage: {
      content: "I'm sorry to hear that. Please change...",
      timestamp: "8 min ago",
      from: "user"
    },
    channel: {
      type: "facebook",
      name: "Paperlayer Facebook"
    },
    status: "open",
    unread: 1,
    priority: "low"
  },
  {
    id: "4",
    contact: {
      name: "Quent Dalliston",
      avatar: "/avatars/quent.jpg",
      email: "qdalliston@example.com"
    },
    lastMessage: {
      content: "Sure! Can you please provide me wi...",
      timestamp: "12 min ago",
      from: "agent"
    },
    channel: {
      type: "whatsapp",
      name: "Paperlayer WhatsApp"
    },
    status: "resolved",
    unread: 0,
    priority: "medium"
  }
];

interface ConversationListProps {
  selectedConversation: string | null;
  onSelectConversation: (id: string) => void;
}

export function ConversationList({ selectedConversation, onSelectConversation }: ConversationListProps) {
  const getChannelColor = (type: string) => {
    switch (type) {
      case 'whatsapp': return 'bg-green-500';
      case 'email': return 'bg-blue-500';
      case 'facebook': return 'bg-blue-600';
      case 'web': return 'bg-purple-500';
      default: return 'bg-gray-500';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'text-red-500';
      case 'medium': return 'text-yellow-500';
      case 'low': return 'text-green-500';
      default: return 'text-gray-500';
    }
  };

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="p-4 border-b border-border">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-foreground">Conversations</h2>
          <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
            <Plus className="h-4 w-4" />
          </Button>
        </div>

        {/* Filters */}
        <div className="flex items-center gap-2">
          <Button size="sm" variant="secondary" className="gap-2 h-8">
            <Filter className="h-3 w-3" />
            Mine
            <Badge variant="secondary" className="text-xs px-1.5 py-0">11</Badge>
          </Button>
          <Button size="sm" variant="ghost" className="gap-2 h-8">
            Unassigned
            <Badge variant="secondary" className="text-xs px-1.5 py-0">6</Badge>
          </Button>
          <Button size="sm" variant="ghost" className="gap-2 h-8">
            All
            <Badge variant="secondary" className="text-xs px-1.5 py-0">19</Badge>
          </Button>
          <Button size="sm" variant="ghost" className="h-8 w-8 p-0 ml-auto">
            <ArrowUpDown className="h-3 w-3" />
          </Button>
        </div>
      </div>

      {/* Conversation List */}
      <div className="flex-1 overflow-y-auto">
        {mockConversations.map((conversation) => (
          <button
            key={conversation.id}
            onClick={() => onSelectConversation(conversation.id)}
            className={cn(
              "w-full p-4 border-b border-border text-left hover:bg-muted/50 transition-smooth",
              selectedConversation === conversation.id && "bg-muted border-l-4 border-l-primary"
            )}
          >
            <div className="flex items-start gap-3">
              {/* Avatar */}
              <div className="relative">
                <Avatar className="h-10 w-10">
                  <AvatarImage src={conversation.contact.avatar} alt={conversation.contact.name} />
                  <AvatarFallback className="bg-primary text-primary-foreground text-sm">
                    {conversation.contact.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                {/* Channel indicator */}
                <div className={cn(
                  "absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-card flex items-center justify-center",
                  getChannelColor(conversation.channel.type)
                )}>
                  <div className="w-2 h-2 bg-white rounded-full" />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="font-medium text-foreground truncate">
                    {conversation.contact.name}
                  </h3>
                  <div className="flex items-center gap-2">
                    {conversation.unread > 0 && (
                      <Badge variant="default" className="h-5 w-5 p-0 text-xs rounded-full">
                        {conversation.unread}
                      </Badge>
                    )}
                    <span className="text-xs text-muted-foreground">
                      {conversation.lastMessage.timestamp}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs text-muted-foreground">
                    {conversation.channel.name}
                  </span>
                  <div className={cn("w-1 h-1 rounded-full", getPriorityColor(conversation.priority))} />
                </div>

                <p className="text-sm text-muted-foreground truncate">
                  {conversation.lastMessage.content}
                </p>

                {/* Tags */}
                <div className="flex items-center gap-2 mt-2">
                  <Badge
                    variant={conversation.status === 'open' ? 'destructive' : 'secondary'}
                    className="text-xs"
                  >
                    {conversation.status}
                  </Badge>
                  {conversation.assignedTo && (
                    <Badge variant="outline" className="text-xs">
                      {conversation.assignedTo}
                    </Badge>
                  )}
                </div>
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}