import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Mail,
  Phone,
  MapPin,
  Globe,
  // Calendar,
  User,
  Building,
  Plus,
  Edit,
  MessageSquare,
  // FileText,
  Clock,
  Star
} from "lucide-react";

export function ContactPanel() {
  return (
    <div className="h-full p-4 space-y-6 overflow-y-auto">
      {/* Contact Header */}
      <div className="text-center">
        <Avatar className="h-16 w-16 mx-auto mb-3">
          <AvatarImage src="/avatars/klaus.jpg" alt="Klaus Crawley" />
          <AvatarFallback className="bg-primary text-primary-foreground text-lg">KC</AvatarFallback>
        </Avatar>
        <h3 className="font-semibold text-foreground">Klaus Crawley</h3>
        <p className="text-sm text-muted-foreground">Founder, Drift Burner</p>
        <div className="flex items-center justify-center gap-2 mt-2">
          <div className="w-2 h-2 bg-green-500 rounded-full" />
          <span className="text-xs text-green-500">Online</span>
        </div>
      </div>

      {/* Contact Actions */}
      <div className="flex gap-2">
        <Button size="sm" className="flex-1 gap-2">
          <MessageSquare className="h-4 w-4" />
          Message
        </Button>
        <Button size="sm" variant="outline" className="gap-2">
          <Edit className="h-4 w-4" />
          Edit
        </Button>
      </div>

      {/* Contact Information */}
      <div className="space-y-4">
        <div>
          <h4 className="text-sm font-medium text-foreground mb-3">Contact Information</h4>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <Mail className="h-4 w-4 text-muted-foreground" />
              <div>
                <p className="text-sm text-foreground">kcrawley6@driftburner.inc</p>
                <p className="text-xs text-muted-foreground">Primary email</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="h-4 w-4 text-muted-foreground" />
              <div>
                <p className="text-sm text-foreground">+14155552398</p>
                <p className="text-xs text-muted-foreground">Mobile</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Building className="h-4 w-4 text-muted-foreground" />
              <div>
                <p className="text-sm text-foreground">Drift Burner</p>
                <p className="text-xs text-muted-foreground">Company</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="h-4 w-4 text-muted-foreground" />
              <div>
                <p className="text-sm text-foreground">San Francisco, United States 🇺🇸</p>
                <p className="text-xs text-muted-foreground">Location</p>
              </div>
            </div>
          </div>
        </div>

        <Separator />

        {/* Social Links */}
        <div>
          <h4 className="text-sm font-medium text-foreground mb-3">Social Profiles</h4>
          <div className="flex gap-2">
            <Button size="sm" variant="outline" className="h-8 w-8 p-0">
              <Globe className="h-4 w-4" />
            </Button>
            <Button size="sm" variant="outline" className="h-8 w-8 p-0">
              📱
            </Button>
            <Button size="sm" variant="outline" className="h-8 w-8 p-0">
              💼
            </Button>
          </div>
        </div>

        <Separator />

        {/* Conversation Actions */}
        <div>
          <h4 className="text-sm font-medium text-foreground mb-3 flex items-center justify-between">
            Conversation Actions
            <Button size="sm" variant="ghost" className="h-6 w-6 p-0">
              <Plus className="h-3 w-3" />
            </Button>
          </h4>
          <div className="space-y-2">
            <Button size="sm" variant="ghost" className="w-full justify-start gap-2 h-8">
              <MessageSquare className="h-3 w-3" />
              Add to queue
            </Button>
            <Button size="sm" variant="ghost" className="w-full justify-start gap-2 h-8">
              <User className="h-3 w-3" />
              Assign to agent
            </Button>
            <Button size="sm" variant="ghost" className="w-full justify-start gap-2 h-8">
              <Star className="h-3 w-3" />
              Mark as priority
            </Button>
          </div>
        </div>

        <Separator />

        {/* Conversation Participants */}
        <div>
          <h4 className="text-sm font-medium text-foreground mb-3 flex items-center justify-between">
            Conversation participants
            <Button size="sm" variant="ghost" className="h-6 w-6 p-0">
              <Plus className="h-3 w-3" />
            </Button>
          </h4>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Avatar className="h-6 w-6">
                <AvatarImage src="/avatars/mathew.jpg" alt="Mathew M" />
                <AvatarFallback className="bg-primary text-primary-foreground text-xs">MM</AvatarFallback>
              </Avatar>
              <span className="text-sm text-foreground">Mathew M</span>
              <Badge variant="secondary" className="text-xs ml-auto">Agent</Badge>
            </div>
          </div>
        </div>

        <Separator />

        {/* Previous Conversations */}
        <div>
          <h4 className="text-sm font-medium text-foreground mb-3 flex items-center justify-between">
            Previous Conversations
            <Button size="sm" variant="ghost" className="h-6 w-6 p-0">
              <Plus className="h-3 w-3" />
            </Button>
          </h4>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-muted-foreground" />
              <div className="flex-1">
                <p className="text-xs text-foreground">Device setup issue</p>
                <p className="text-xs text-muted-foreground">2 days ago</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-muted-foreground" />
              <div className="flex-1">
                <p className="text-xs text-foreground">Billing inquiry</p>
                <p className="text-xs text-muted-foreground">1 week ago</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}