import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { Languages, Copy, Reply, MoreHorizontal, Check, CheckCheck } from "lucide-react";

interface Message {
  id: string;
  content: string;
  timestamp: string;
  sender: {
    name: string;
    avatar?: string;
    type: 'user' | 'agent' | 'system';
  };
  status: 'sent' | 'delivered' | 'read' | 'system';
}

interface ChatMessageProps {
  message: Message;
}

export function ChatMessage({ message }: ChatMessageProps) {
  const isUser = message.sender.type === 'user';
  const isSystem = message.sender.type === 'system';
  const isAgent = message.sender.type === 'agent';

  if (isSystem) {
    return (
      <div className="flex justify-center">
        <div className="bg-muted px-3 py-1 rounded-full">
          <p className="text-xs text-muted-foreground">{message.content}</p>
        </div>
      </div>
    );
  }

  return (
    <div className={cn(
      "flex gap-3",
      isUser ? "flex-row-reverse" : "flex-row"
    )}>
      {/* Avatar */}
      {!isUser && (
        <Avatar className="h-8 w-8 flex-shrink-0">
          <AvatarImage src={message.sender.avatar} alt={message.sender.name} />
          <AvatarFallback className="bg-primary text-primary-foreground text-xs">
            {message.sender.name.split(' ').map(n => n[0]).join('')}
          </AvatarFallback>
        </Avatar>
      )}

      <div className={cn(
        "flex flex-col max-w-[70%]",
        isUser ? "items-end" : "items-start"
      )}>
        {/* Message Content */}
        <div className={cn(
          "group relative rounded-lg px-4 py-2 break-words",
          isUser 
            ? "chat-bubble-user rounded-br-sm" 
            : "chat-bubble-agent border border-border rounded-bl-sm"
        )}>
          <p className="text-sm leading-relaxed">{message.content}</p>
          
          {/* Hover Actions */}
          <div className={cn(
            "absolute top-1 opacity-0 group-hover:opacity-100 transition-opacity flex gap-1",
            isUser ? "-left-20" : "-right-20"
          )}>
            <Button size="sm" variant="ghost" className="h-6 w-6 p-0 bg-background shadow-sm">
              <Languages className="h-3 w-3" />
            </Button>
            <Button size="sm" variant="ghost" className="h-6 w-6 p-0 bg-background shadow-sm">
              <Copy className="h-3 w-3" />
            </Button>
            <Button size="sm" variant="ghost" className="h-6 w-6 p-0 bg-background shadow-sm">
              <Reply className="h-3 w-3" />
            </Button>
            <Button size="sm" variant="ghost" className="h-6 w-6 p-0 bg-background shadow-sm">
              <MoreHorizontal className="h-3 w-3" />
            </Button>
          </div>
        </div>

        {/* Message Info */}
        <div className={cn(
          "flex items-center gap-2 mt-1 text-xs text-muted-foreground",
          isUser ? "flex-row-reverse" : "flex-row"
        )}>
          <span>{message.timestamp}</span>
          {isUser && (
            <div className="flex items-center">
              {message.status === 'sent' && <Check className="h-3 w-3" />}
              {message.status === 'delivered' && <CheckCheck className="h-3 w-3" />}
              {message.status === 'read' && <CheckCheck className="h-3 w-3 text-primary" />}
            </div>
          )}
          {!isUser && (
            <Badge variant="outline" className="text-xs px-1.5 py-0">
              {message.sender.name}
            </Badge>
          )}
        </div>
      </div>
    </div>
  );
}