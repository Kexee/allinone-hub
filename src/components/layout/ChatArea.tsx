import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { 
  MoreHorizontal, 
  Info, 
  Archive, 
  UserPlus,
  Paperclip,
  Mic,
  Send,
  Smile,
  Languages,
  Bot,
  Phone,
  Video,
  Search
} from "lucide-react";
import { ChatMessage } from "@/components/chat/ChatMessage";
import { MessageInput } from "@/components/chat/MessageInput";

interface ChatAreaProps {
  conversationId: string | null;
  onToggleContactPanel: () => void;
}

const mockMessages = [
  {
    id: "1",
    content: "Hi, I need some help setting up my new device.",
    timestamp: "Jan 15, 12:32 PM",
    sender: {
      name: "Klaus Crawley",
      avatar: "/avatars/klaus.jpg",
      type: "user" as const
    },
    status: "delivered" as const
  },
  {
    id: "2",
    content: "No problem! Can you please tell me the make and model of your device and what specifically you need help with?",
    timestamp: "Jan 15, 12:32 PM",
    sender: {
      name: "Mathew M",
      avatar: "/avatars/mathew.jpg",
      type: "agent" as const
    },
    status: "read" as const
  },
  {
    id: "3",
    content: "Mathew M self-assigned this conversation",
    timestamp: "Jan 15, 12:32 PM",
    sender: {
      name: "System",
      type: "system" as const
    },
    status: "system" as const
  },
  {
    id: "4",
    content: "Mathew M set the priority to high",
    timestamp: "Jan 15, 12:32 PM",
    sender: {
      name: "System",
      type: "system" as const
    },
    status: "system" as const
  },
  {
    id: "5",
    content: "@Ben Nugent Can we use Captain here to automate these queries?",
    timestamp: "Jan 16, 2:16 PM",
    sender: {
      name: "Klaus Crawley",
      avatar: "/avatars/klaus.jpg",
      type: "user" as const
    },
    status: "delivered" as const
  }
];

export function ChatArea({ conversationId, onToggleContactPanel }: ChatAreaProps) {
  const [showAIAssist, setShowAIAssist] = useState(false);

  if (!conversationId) {
    return (
      <div className="flex items-center justify-center h-full bg-background">
        <div className="text-center">
          <h3 className="text-lg font-medium text-foreground mb-2">Select a conversation</h3>
          <p className="text-muted-foreground">Choose a conversation from the list to start chatting</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full bg-background">
      {/* Chat Header */}
      <div className="flex items-center justify-between p-4 border-b border-border bg-card">
        <div className="flex items-center gap-3">
          <Avatar className="h-8 w-8">
            <AvatarImage src="/avatars/klaus.jpg" alt="Klaus Crawley" />
            <AvatarFallback className="bg-primary text-primary-foreground text-sm">KC</AvatarFallback>
          </Avatar>
          <div>
            <h3 className="font-medium text-foreground">Klaus Crawley</h3>
            <div className="flex items-center gap-2">
              <span className="text-xs text-muted-foreground">Paperlayer Web</span>
              <span className="text-xs text-muted-foreground">•</span>
              <span className="text-xs text-green-500">Online</span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {/* Action Buttons */}
          <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
            <Search className="h-4 w-4" />
          </Button>
          <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
            <Phone className="h-4 w-4" />
          </Button>
          <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
            <Video className="h-4 w-4" />
          </Button>
          
          {/* Contact Panel Toggle */}
          <Button 
            size="sm" 
            variant="ghost" 
            onClick={onToggleContactPanel}
            className="gap-2 h-8"
          >
            <Info className="h-4 w-4" />
            <span className="hidden sm:inline">Contact</span>
          </Button>

          {/* More Actions */}
          <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {mockMessages.map((message) => (
          <ChatMessage key={message.id} message={message} />
        ))}
      </div>

      {/* AI Assistant Bar */}
      {showAIAssist && (
        <div className="p-3 bg-muted/50 border-t border-border">
          <div className="flex items-center gap-2 text-sm">
            <Bot className="h-4 w-4 text-primary" />
            <span className="text-muted-foreground">AI Assistant is analyzing this conversation...</span>
            <Button size="sm" variant="ghost" onClick={() => setShowAIAssist(false)}>
              ×
            </Button>
          </div>
        </div>
      )}

      {/* Message Input */}
      <div className="p-4 border-t border-border bg-card">
        <MessageInput onToggleAI={() => setShowAIAssist(!showAIAssist)} />
      </div>
    </div>
  );
}