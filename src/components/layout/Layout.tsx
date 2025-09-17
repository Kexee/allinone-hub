import { useState } from "react";
import { Sidebar } from "./SideBar";
import { ConversationList } from "./ConversationList";
import { ChatArea } from "./ChatArea";
import { ContactPanel } from "./ContactPanel";

export function OmnichannelLayout() {
    const [selectedConversation, setSelectedConversation] = useState<string | null>(null);
    const [showContactPanel, setShowContactPanel] = useState(false);

    return (
        <div className="flex h-screen w-full bg-background">
            {/* Left Sidebar - Navigation */}
            <Sidebar />

            {/* Middle Panel - Conversation List */}
            <div className="w-80 border-r border-border bg-card">
                <ConversationList
                    selectedConversation={selectedConversation}
                    onSelectConversation={setSelectedConversation}
                />
            </div>

            {/* Main Chat Area */}
            <div className="flex-1 flex">
                <div className={`flex-1 ${showContactPanel ? 'border-r border-border' : ''}`}>
                    <ChatArea
                        conversationId={selectedConversation}
                        onToggleContactPanel={() => setShowContactPanel(!showContactPanel)}
                    />
                </div>

                {/* Right Panel - Contact Information */}
                {showContactPanel && (
                    <div className="w-80 bg-card">
                        <ContactPanel />
                    </div>
                )}
            </div>
        </div>
    );
}