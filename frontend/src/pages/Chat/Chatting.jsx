// ── Chatting.jsx ──────────────────────────────────────────────────────────────
// Main Anonymous Chat page.
// Manages state and transitions: Lobby → Finding → AnonChat ↔ FriendChat.
//
// State design (mirroring the HTML reference exactly):
//   • anonState   – persistent anon chat: connected, name, interests, messages[]
//   • friendMsgs  – per-friend message history: { [name]: message[] }
//   • currentView – 'lobby' | 'finding' | 'anon' | 'friend'
//   • activeFriend – name of the friend whose chat is open, or null

import { useCallback, useEffect, useRef, useState } from "react";
import ChatSidebar  from "./components/ChatSidebar";
import LobbyView    from "./components/LobbyView";
import FindingView  from "./components/FindingView";
import ChatView     from "./components/ChatView";

// ── Constants ─────────────────────────────────────────────────────────────────

const ANON_NAMES = [
    "@Anon[Mumbai]", "@Anon[Pune]", "@Anon[Delhi]",
    "@Anon[Blr]",    "@Anon[Hyd]", "@Anon[Chennai]",
];

const FAKE_MESSAGES = [
    "Hey! How's it going?",
    "Did you see the new hackathon announcement?",
    "Which dept are you from?",
    "I love this anonymous chat idea lol",
    "Are you participating in the cultural fest?",
    "What's your major?",
    "Have you been to any events this semester?",
    "This platform is actually pretty cool ngl",
];

// ── Helpers ───────────────────────────────────────────────────────────────────

function nowTime() {
    const d = new Date();
    return (
        d.getHours().toString().padStart(2, "0") +
        ":" +
        d.getMinutes().toString().padStart(2, "0")
    );
}

function randomFrom(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

// ── Chatting ──────────────────────────────────────────────────────────────────
export default function Chatting() {

    // ── View ──────────────────────────────────────────────────────────────────
    // 'lobby' | 'finding' | 'anon' | 'friend'
    const [currentView, setCurrentView] = useState("lobby");

    // ── Lobby config ─────────────────────────────────────────────────────────
    const [selectedInterests, setSelectedInterests] = useState([]);
    const [selectedMatch,     setSelectedMatch]     = useState("Any Year");
    const [selectedGender,    setSelectedGender]    = useState("both");

    // ── Anon chat state ───────────────────────────────────────────────────────
    const [anonConnected,  setAnonConnected]  = useState(false);
    const [anonName,       setAnonName]       = useState("");
    const [anonInterests,  setAnonInterests]  = useState("");
    const [anonMessages,   setAnonMessages]   = useState([]);
    const [anonFriendAdded,setAnonFriendAdded]= useState(false);

    // ── Sidebar current-chat label ────────────────────────────────────────────
    const [currentChatLabel, setCurrentChatLabel] = useState("Anonymous Match");
    const [currentChatSub,   setCurrentChatSub]   = useState("Not connected");

    // ── Friend chat state ─────────────────────────────────────────────────────
    // friendMsgs: { [friendName]: message[] }
    const [friendMsgs,     setFriendMsgs]     = useState({});
    const [activeFriend,   setActiveFriend]   = useState(null); // null = anon/lobby active

    // ── Timer ref ─────────────────────────────────────────────────────────────
    const findTimer = useRef(null);

    // Cleanup timers on unmount
    useEffect(() => () => clearTimeout(findTimer.current), []);

    // ═════════════════════════════════════════════════════════════════════════
    // Lobby handlers
    // ═════════════════════════════════════════════════════════════════════════

    function handleToggleInterest(tag) {
        setSelectedInterests((prev) =>
            prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
        );
    }

    // ═════════════════════════════════════════════════════════════════════════
    // Anonymous chat flow  (Lobby → Finding → AnonChat)
    // ═════════════════════════════════════════════════════════════════════════

    function startAnonymousChat() {
        setCurrentView("finding");
        setActiveFriend(null);
        const delay = 2000 + Math.random() * 2000;
        findTimer.current = setTimeout(connectToAnon, delay);
    }

    function cancelFind() {
        clearTimeout(findTimer.current);
        if (anonConnected) {
            // Go back to existing anon chat
            setActiveFriend(null);
            setCurrentView("anon");
        } else {
            setActiveFriend(null);
            setCurrentView("lobby");
        }
    }

    const connectToAnon = useCallback(() => {
        const name      = randomFrom(ANON_NAMES);
        const interests = selectedInterests.length
            ? selectedInterests.slice(0, 2).join(", ")
            : "General";

        const systemMsg = {
            type: "system",
            text: `You are now chatting with ${name}. Say hi! 👋`,
        };

        setAnonConnected(true);
        setAnonName(name);
        setAnonInterests(interests);
        setAnonMessages([systemMsg]);
        setAnonFriendAdded(false);
        setCurrentChatLabel(name);
        setCurrentChatSub(interests);
        setActiveFriend(null);
        setCurrentView("anon");

        // Simulate their first message
        findTimer.current = setTimeout(() => {
            const fake = randomFrom(FAKE_MESSAGES);
            setAnonMessages((prev) => [
                ...prev,
                { type: "them", text: fake, time: nowTime() },
            ]);
        }, 1800);
    }, [selectedInterests]);

    // Clicking the current-chat sidebar item
    function handleReturnToAnon() {
        if (anonConnected) {
            setActiveFriend(null);
            setCurrentView("anon");
        } else {
            setActiveFriend(null);
            setCurrentView("lobby");
        }
    }

    // ═════════════════════════════════════════════════════════════════════════
    // Friend chat flow
    // ═════════════════════════════════════════════════════════════════════════

    function handleFriendSelect(name) {
        setActiveFriend(name);
        setCurrentView("friend");

        // Init friend message history if it doesn't exist yet
        if (!friendMsgs[name]) {
            const initMsg = {
                type: "system",
                text: `You are now chatting with ${name}.`,
            };
            setFriendMsgs((prev) => ({ ...prev, [name]: [initMsg] }));

            // Fake reply after a short delay
            findTimer.current = setTimeout(() => {
                const fake = randomFrom(FAKE_MESSAGES);
                setFriendMsgs((prev) => ({
                    ...prev,
                    [name]: [
                        ...(prev[name] || []),
                        { type: "them", text: fake, time: nowTime() },
                    ],
                }));
            }, 1200);
        }
    }

    // ═════════════════════════════════════════════════════════════════════════
    // Shared chat actions (Skip / End / Send / AddFriend)
    // ═════════════════════════════════════════════════════════════════════════

    function handleSkip() {
        // Only valid in anon chat
        setAnonMessages((prev) => [
            ...prev,
            { type: "system", text: "You skipped. Finding next match..." },
        ]);
        setAnonConnected(false);
        setCurrentChatLabel("Searching...");
        setCurrentChatSub("Finding match");
        setActiveFriend(null);
        setCurrentView("finding");
        findTimer.current = setTimeout(connectToAnon, 2000 + Math.random() * 1500);
    }

    function handleEnd() {
        if (currentView === "anon") {
            setAnonMessages((prev) => [
                ...prev,
                { type: "system", text: "Chat ended." },
            ]);
            setTimeout(() => {
                setAnonConnected(false);
                setAnonMessages([]);
                setCurrentChatLabel("Anonymous Match");
                setCurrentChatSub("Not connected");
                setActiveFriend(null);
                setCurrentView("lobby");
            }, 800);
        } else {
            // Ending from friend chat — just go back to lobby, anon state untouched
            setActiveFriend(null);
            setCurrentView("lobby");
        }
    }

    function handleSend(text) {
        const msg = { type: "me", text, time: nowTime() };

        if (currentView === "anon") {
            setAnonMessages((prev) => [...prev, msg]);
            findTimer.current = setTimeout(() => {
                const fake = randomFrom(FAKE_MESSAGES);
                setAnonMessages((prev) => [
                    ...prev,
                    { type: "them", text: fake, time: nowTime() },
                ]);
            }, 1200 + Math.random() * 800);

        } else if (currentView === "friend" && activeFriend) {
            const name = activeFriend;
            setFriendMsgs((prev) => ({
                ...prev,
                [name]: [...(prev[name] || []), msg],
            }));
            findTimer.current = setTimeout(() => {
                const fake = randomFrom(FAKE_MESSAGES);
                setFriendMsgs((prev) => ({
                    ...prev,
                    [name]: [
                        ...(prev[name] || []),
                        { type: "them", text: fake, time: nowTime() },
                    ],
                }));
            }, 1200 + Math.random() * 800);
        }
    }

    function handleAddFriend() {
        setAnonFriendAdded(true);
        setAnonMessages((prev) => [
            ...prev,
            { type: "system", text: `${anonName} added to friends! 🎉` },
        ]);
    }

    // ═════════════════════════════════════════════════════════════════════════
    // Derived values for ChatView
    // ═════════════════════════════════════════════════════════════════════════

    const isAnonView   = currentView === "anon";
    const isFriendView = currentView === "friend";
    const isChatView   = isAnonView || isFriendView;

    const chatPeer = isAnonView
        ? { name: anonName, interests: `Interests: ${anonInterests}` }
        : { name: activeFriend || "", interests: "Friend • Direct Message" };

    const chatMessages = isAnonView
        ? anonMessages
        : (activeFriend ? (friendMsgs[activeFriend] || []) : []);

    // ═════════════════════════════════════════════════════════════════════════
    // Render
    // ═════════════════════════════════════════════════════════════════════════

    return (
        <div className="flex h-screen w-full overflow-hidden bg-retro-yellow font-display text-black">

            {/* ── Left Sidebar ── */}
            <ChatSidebar
                currentChatLabel={currentChatLabel}
                currentChatSub={currentChatSub}
                activeFriend={activeFriend}
                onReturnToAnon={handleReturnToAnon}
                onFriendSelect={handleFriendSelect}
            />

            {/* ── Main Area ── */}
            <main className="flex-1 flex flex-col overflow-hidden">

                {/* Top Bar */}
                <div
                    className="bg-white border-b-3 border-black px-6 flex items-center justify-between flex-shrink-0"
                    style={{ minHeight: "73px" }}
                >
                    <div>
                        <p className="text-xs font-black uppercase tracking-widest text-black/30">Anonymous</p>
                        <h1 className="text-2xl font-black uppercase tracking-tighter leading-none">
                            Campus Chat 💬
                        </h1>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="flex items-center gap-2 bg-retro-green border-3 border-black px-3 py-1.5 shadow-retro-sm">
                            <div className="w-2 h-2 bg-white rounded-full pulse" />
                            <span className="font-black uppercase text-xs text-white">847 Online</span>
                        </div>
                        <button className="relative w-10 h-10 bg-retro-yellow border-3 border-black flex items-center justify-center shadow-retro hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all">
                            <span className="material-symbols-outlined text-xl">notifications</span>
                            <div className="absolute -top-2 -right-2 w-5 h-5 bg-retro-red border-2 border-black flex items-center justify-center rounded-full">
                                <span className="text-white text-xs font-black">3</span>
                            </div>
                        </button>
                    </div>
                </div>

                {/* ── View Router ── */}
                {currentView === "lobby" && (
                    <LobbyView
                        selectedInterests={selectedInterests}
                        selectedMatch={selectedMatch}
                        selectedGender={selectedGender}
                        onToggleInterest={handleToggleInterest}
                        onSetMatch={setSelectedMatch}
                        onSetGender={setSelectedGender}
                        onStartChat={startAnonymousChat}
                    />
                )}

                {currentView === "finding" && (
                    <FindingView
                        selectedInterests={selectedInterests}
                        onCancel={cancelFind}
                    />
                )}

                {isChatView && (
                    <ChatView
                        peer={chatMessages.length > 0 ? chatPeer : chatPeer}
                        messages={chatMessages}
                        showAddFriend={isAnonView}
                        friendAdded={anonFriendAdded}
                        onSend={handleSend}
                        onSkip={isAnonView ? handleSkip : undefined}
                        onEnd={handleEnd}
                        onAddFriend={handleAddFriend}
                    />
                )}
            </main>
        </div>
    );
}