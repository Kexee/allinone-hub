import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { 
  Send, 
  Paperclip, 
  Mic, 
  Smile, 
  Bot,
  Bold,
  Italic,
  List,
  Code,
  Link,
  AtSign
} from "lucide-react";

interface MessageInputProps {
  onToggleAI: () => void;
}

export function MessageInput({ onToggleAI }: MessageInputProps) {
  const [message, setMessage] = useState("");
  const [isRecording, setIsRecording] = useState(false);

  const handleSend = () => {
    if (message.trim()) {
      // Here you would handle sending the message
      console.log("Sending message:", message);
      setMessage("");
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="space-y-3">
      {/* Formatting Toolbar */}
      <div className="flex items-center gap-1">
        <Button size="sm" variant="ghost" className="h-7 w-7 p-0">
          <Bold className="h-3 w-3" />
        </Button>
        <Button size="sm" variant="ghost" className="h-7 w-7 p-0">
          <Italic className="h-3 w-3" />
        </Button>
        <div className="w-px h-4 bg-border mx-1" />
        <Button size="sm" variant="ghost" className="h-7 w-7 p-0">
          <List className="h-3 w-3" />
        </Button>
        <Button size="sm" variant="ghost" className="h-7 w-7 p-0">
          <Code className="h-3 w-3" />
        </Button>
        <Button size="sm" variant="ghost" className="h-7 w-7 p-0">
          <Link className="h-3 w-3" />
        </Button>
        <div className="w-px h-4 bg-border mx-1" />
        <Button size="sm" variant="ghost" className="h-7 w-7 p-0">
          <AtSign className="h-3 w-3" />
        </Button>
      </div>

      {/* Message Input Area */}
      <div className="flex items-end gap-2">
        {/* Attachment Button */}
        <Button size="sm" variant="ghost" className="h-9 w-9 p-0 flex-shrink-0">
          <Paperclip className="h-4 w-4" />
        </Button>

        {/* Text Input */}
        <div className="flex-1 relative">
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Type your message... Use '/' for quick actions"
            className="w-full min-h-[36px] max-h-32 px-3 py-2 pr-20 bg-input border border-border rounded-md resize-none text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent"
            rows={1}
            style={{ 
              height: 'auto',
              minHeight: '36px'
            }}
            onInput={(e) => {
              const target = e.target as HTMLTextAreaElement;
              target.style.height = 'auto';
              target.style.height = `${Math.min(target.scrollHeight, 128)}px`;
            }}
          />
          
          {/* Emoji Button */}
          <Button 
            size="sm" 
            variant="ghost" 
            className="absolute right-2 top-1.5 h-6 w-6 p-0"
          >
            <Smile className="h-4 w-4" />
          </Button>
        </div>

        {/* Voice/Send Button */}
        {message.trim() ? (
          <Button 
            size="sm" 
            onClick={handleSend}
            className="h-9 w-9 p-0 flex-shrink-0"
          >
            <Send className="h-4 w-4" />
          </Button>
        ) : (
          <Button 
            size="sm" 
            variant="ghost"
            onClick={() => setIsRecording(!isRecording)}
            className={cn(
              "h-9 w-9 p-0 flex-shrink-0",
              isRecording && "text-red-500"
            )}
          >
            <Mic className="h-4 w-4" />
          </Button>
        )}

        {/* AI Assistant Button */}
        <Button 
          size="sm" 
          variant="outline"
          onClick={onToggleAI}
          className="h-9 w-9 p-0 flex-shrink-0"
        >
          <Bot className="h-4 w-4" />
        </Button>
      </div>

      {/* Quick Actions */}
      <div className="text-xs text-muted-foreground">
        <span>Shift + enter for new line. Start with '/' to select a Canned Response.</span>
      </div>
    </div>
  );
}