// ── ChatSidebar ──────────────────────────────────────────────────────────────
// Left sidebar for the chat page.
// Props:
//   currentChatLabel  – anon match name shown in the "Current Chat" slot
//   currentChatSub    – subtitle (interests / status) for the current chat
//   activeFriend      – name of the friend whose chat is open, or null
//   onReturnToAnon    – called when current-chat item is clicked
//   onFriendSelect    – called with friend.name when a friend item is clicked

const FRIENDS = [
    { name: "Priya S.",  lastMsg: "Hey what's up!",             online: true,  unread: 2 },
    { name: "Arjun D.",  lastMsg: "Did you see the hackathon?",  online: true,  unread: 0 },
    { name: "Sneha R.",  lastMsg: "Online",                      online: true,  unread: 0 },
    { name: "Karan M.",  lastMsg: "Last seen 2h ago",            online: false, unread: 0 },
    { name: "Tanya B.",  lastMsg: "Last seen yesterday",         online: false, unread: 0 },
    { name: "Vikram S.", lastMsg: "Last seen 3 days ago",        online: false, unread: 0 },
];

const onlineCount = FRIENDS.filter((f) => f.online).length;

// ── FriendItem ────────────────────────────────────────────────────────────────
function FriendItem({ friend, isActive, onSelect }) {
    return (
        <div
            onClick={() => onSelect(friend.name)}
            className={`friend-item flex items-center gap-3 px-3 py-2.5 border-3 ${
                isActive ? "active border-black" : "border-transparent"
            }`}
        >
            {/* Avatar */}
            <div className="relative flex-shrink-0">
                <div className="w-9 h-9 rounded-full border-3 border-black bg-retro-yellow flex items-center justify-center">
                    <span className="material-symbols-outlined text-lg">person</span>
                </div>
                <div
                    className={`absolute -bottom-0.5 -right-0.5 w-3 h-3 border-2 border-black rounded-full ${
                        friend.online ? "bg-retro-green pulse" : "bg-black/20"
                    }`}
                />
            </div>

            {/* Info */}
            <div className="flex-1 min-w-0">
                <p className="font-black uppercase text-xs leading-none">{friend.name}</p>
                <p className="text-xs font-bold text-black/40 truncate">{friend.lastMsg}</p>
            </div>

            {/* Unread badge */}
            {friend.unread > 0 && (
                <div className="bg-retro-red border-2 border-black w-5 h-5 flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-black text-xs">{friend.unread}</span>
                </div>
            )}
        </div>
    );
}

// ── ChatSidebar ───────────────────────────────────────────────────────────────
export default function ChatSidebar({
    currentChatLabel,
    currentChatSub,
    activeFriend,
    onReturnToAnon,
    onFriendSelect,
}) {
    // current-chat-item is active when no friend chat is open
    const anonItemActive = activeFriend === null;

    return (
        <aside className="w-64 flex-shrink-0 bg-white border-r-3 border-black flex flex-col h-full overflow-hidden stripe-bg">

            {/* ── Logo ── */}
            <div
                className="border-b-3 border-black bg-retro-yellow flex items-center justify-between px-5 gap-3 flex-shrink-0"
                style={{ minHeight: "73px" }}
            >
                <div className="w-10 h-10 bg-black border-3 border-black flex items-center justify-center flex-shrink-0 shadow-retro-sm">
                    <span className="material-symbols-outlined text-retro-yellow text-2xl">hub</span>
                </div>
                <div className="flex-1">
                    <span className="font-black uppercase tracking-tighter text-lg leading-none block">
                        Campus<span className="text-white bg-black px-1">Connect</span>
                    </span>
                    <span className="text-xs font-black text-black/50 uppercase tracking-widest">Chat Hub</span>
                </div>
                <div className="w-3 h-3 bg-black border-2 border-black rounded-full flex-shrink-0 pulse" />
            </div>

            {/* ── Ticker ── */}
            <div className="border-b-3 border-black overflow-hidden bg-retro-red py-1.5 flex-shrink-0">
                <div className="ticker">
                    <span className="text-white font-black uppercase text-xs mx-3">
                        Chat • Connect • Anonymous • Discover • Friends • Campus •&nbsp;
                        Chat • Connect • Anonymous • Discover • Friends • Campus •&nbsp;
                    </span>
                    <span className="text-white font-black uppercase text-xs mx-3">
                        Chat • Connect • Anonymous • Discover • Friends • Campus •&nbsp;
                        Chat • Connect • Anonymous • Discover • Friends • Campus •&nbsp;
                    </span>
                </div>
            </div>

            {/* ── Current Chat ── */}
            <div className="px-4 pt-4 pb-1 flex-shrink-0">
                <span className="text-xs font-black uppercase tracking-widest text-black/30">Current Chat</span>
            </div>
            <div className="px-3 flex-shrink-0">
                <div
                    onClick={onReturnToAnon}
                    title="Return to anonymous chat"
                    className={`friend-item flex items-center gap-3 px-3 py-3 border-3 ${
                        anonItemActive ? "active border-black shadow-retro-sm" : "border-black shadow-retro-sm"
                    }`}
                >
                    <div className="w-9 h-9 bg-black border-3 border-black flex items-center justify-center flex-shrink-0">
                        <span className="material-symbols-outlined text-retro-yellow text-xl">masks</span>
                    </div>
                    <div className="flex-1 min-w-0">
                        <p className="font-black uppercase text-sm leading-none">{currentChatLabel}</p>
                        <p className="text-xs font-bold text-black/50 truncate mt-0.5">{currentChatSub}</p>
                    </div>
                </div>
            </div>

            {/* ── Friends Label ── */}
            <div className="px-4 pt-4 pb-1 flex-shrink-0 border-t-3 border-black mt-3">
                <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase tracking-widest text-black/30">Friends Online</span>
                    <div className="flex items-center gap-1">
                        <div className="w-2 h-2 bg-retro-green rounded-full pulse" />
                        <span className="text-xs font-black text-retro-green">{onlineCount} online</span>
                    </div>
                </div>
            </div>

            {/* ── Friends List ── */}
            <div className="flex-1 overflow-y-auto retro-scroll min-h-0 px-3 flex flex-col gap-1 pb-2">
                {FRIENDS.map((friend) => (
                    <FriendItem
                        key={friend.name}
                        friend={friend}
                        isActive={activeFriend === friend.name}
                        onSelect={onFriendSelect}
                    />
                ))}
            </div>

            {/* ── Footer ── */}
            <div className="border-t-3 border-black flex-shrink-0">

                {/* Settings link
                <a
                    href="/settings"
                    className="flex items-center gap-3 px-4 py-3 border-b-3 border-black hover:bg-retro-yellow transition-colors"
                >
                    <div className="w-9 h-9 bg-white border-3 border-black flex items-center justify-center flex-shrink-0 shadow-retro-sm">
                        <span className="material-symbols-outlined text-black text-xl">settings</span>
                    </div>
                    <span className="font-black uppercase text-sm">Settings</span>
                    <span className="material-symbols-outlined text-black/30 text-base ml-auto">open_in_new</span>
                </a> */}

                {/* Profile card */}

                {/* <ProfileCard/> */}
                <div className="p-3 bg-white">
                    <div className="bg-retro-yellow border-3 border-black p-3 shadow-retro">
                        <div className="flex items-center gap-3">
                            <div className="relative flex-shrink-0">
                                <div className="w-11 h-11 rounded-full border-3 border-black bg-white flex items-center justify-center shadow-retro-sm">
                                    <span className="material-symbols-outlined text-2xl">person</span>
                                </div>
                                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-retro-green border-2 border-black rounded-full pulse" />
                            </div>
                            <div className="flex-1 min-w-0">
                                <p className="font-black uppercase text-sm leading-none">Jackie Chen</p>
                                <p className="text-xs font-bold text-black/60 mt-0.5">2nd Year • CS</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </aside>
    );
}
