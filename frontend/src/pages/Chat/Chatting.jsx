
import {  useEffect, useRef, useState } from "react";
import ChatSidebar  from "./components/ChatSidebar";
import LobbyView    from "./components/LobbyView";
import FindingView  from "./components/FindingView";
import ChatView     from "./components/ChatView";
import socket from "../../lib/socket"; // ← real socket instance
import Topbar from "../../components/Topbar";

// ── Helpers ───────────────────────────────────────────────────────────────────

function nowTime() {
    const d = new Date();
    return (
        d.getHours().toString().padStart(2, "0") +
        ":" +
        d.getMinutes().toString().padStart(2, "0")
    );
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
    const [anonConnected,   setAnonConnected]   = useState(false);
    const [anonName,        setAnonName]        = useState("");
    const [myHandle,        setMyHandle]        = useState("");
    const [anonInterests,   setAnonInterests]   = useState("");
    const [anonMessages,    setAnonMessages]    = useState([]);
    const [anonFriendAdded, setAnonFriendAdded] = useState(false);

    // ── Sidebar current-chat label ────────────────────────────────────────────
    const [currentChatLabel, setCurrentChatLabel] = useState("Anonymous Match");
    const [currentChatSub,   setCurrentChatSub]   = useState("Not connected");

    // ── Friend chat state ─────────────────────────────────────────────────────
    const [friendMsgs,   setFriendMsgs]   = useState({});
    const [activeFriend, setActiveFriend] = useState(null);

    const findTimer = useRef(null);

    // ═════════════════════════════════════════════════════════════════════════
    // Socket setup — connect once on mount, cleanup on unmount
    // ═════════════════════════════════════════════════════════════════════════

    useEffect(() => {
        // ── anon:waiting ─────────────────────────────────────────────────────
        socket.on("anon:waiting", () => {
            setCurrentView("finding");
        });

        // ── anon:matched ─────────────────────────────────────────────────────
        socket.on("anon:matched", ({ partnerHandle, myHandle, interests }) => {
            const interestLabel = interests?.length
                ? interests.join(", ")
                : "General";

            const systemMsg = {
                type: "system",
                text: `You are now chatting with ${partnerHandle}. Say hi! 👋`,
            };

            setAnonConnected(true);
            setAnonName(partnerHandle);
            setMyHandle(myHandle);
            setAnonInterests(interestLabel);
            setAnonMessages([systemMsg]);
            setAnonFriendAdded(false);
            setCurrentChatLabel(partnerHandle);
            setCurrentChatSub(interestLabel);
            setActiveFriend(null);
            setCurrentView("anon");
        });

        // ── anon:message (incoming from partner) ─────────────────────────────
        socket.on("anon:message", ({ content, from, timestamp }) => {
            setAnonMessages((prev) => [
                ...prev,
                { type: "them", text: content, time: nowTime() },
            ]);
        });

        // ── anon:message:sent (echo back to sender) ───────────────────────────
        socket.on("anon:message:sent", ({ content }) => {
            setAnonMessages((prev) => [
                ...prev,
                { type: "me", text: content, time: nowTime() },
            ]);
        });

        // ── anon:partner-left ─────────────────────────────────────────────────
        socket.on("anon:partner-left", ({ message }) => {
            setAnonMessages((prev) => [
                ...prev,
                { type: "system", text: message || "Your partner has left." },
            ]);
            setAnonConnected(false);
            setCurrentChatLabel("Anonymous Match");
            setCurrentChatSub("Not connected");
        });

        // ── anon:ended ────────────────────────────────────────────────────────
        socket.on("anon:ended", () => {
            setAnonConnected(false);
            setAnonMessages([]);
            setCurrentChatLabel("Anonymous Match");
            setCurrentChatSub("Not connected");
            setActiveFriend(null);
            setCurrentView("lobby");
        });

        // ── anon:friend-request:sent ──────────────────────────────────────────
        socket.on("anon:friend-request:sent", ({ success, message }) => {
            if (success) {
                setAnonFriendAdded(true);
                setAnonMessages((prev) => [
                    ...prev,
                    { type: "system", text: "Friend request sent! 🎉" },
                ]);
            }
        });

        // ── anon:error ────────────────────────────────────────────────────────
        socket.on("anon:error", ({ message }) => {
            setAnonMessages((prev) => [
                ...prev,
                { type: "system", text: `Error: ${message}` },
            ]);
        });

        // ── dm:message ────────────────────────────────────────────────────────
        socket.on("dm:message", (msg) => {
            const friendId = msg.sender._id;
            const friendName = msg.sender.username;
            setFriendMsgs((prev) => ({
                ...prev,
                [friendName]: [
                    ...(prev[friendName] || []),
                    {
                        type: "them",
                        text: msg.content,
                        time: nowTime(),
                    },
                ],
            }));
        });

        // cleanup listeners on unmount (but don't disconnect socket)
        return () => {
            socket.off("anon:waiting");
            socket.off("anon:matched");
            socket.off("anon:message");
            socket.off("anon:message:sent");
            socket.off("anon:partner-left");
            socket.off("anon:ended");
            socket.off("anon:friend-request:sent");
            socket.off("anon:error");
            socket.off("dm:message");
            clearTimeout(findTimer.current);
        };
    }, []);

    // ═════════════════════════════════════════════════════════════════════════
    // Lobby handlers
    // ═════════════════════════════════════════════════════════════════════════

    function handleToggleInterest(tag) {
        setSelectedInterests((prev) =>
            prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
        );
    }

    // ═════════════════════════════════════════════════════════════════════════
    // Anonymous chat flow
    // ═════════════════════════════════════════════════════════════════════════

    function startAnonymousChat() {
        setCurrentView("finding");
        setActiveFriend(null);
        // emit to backend — backend will respond with anon:waiting or anon:matched
        socket.emit("anon:join", { interests: selectedInterests });
    }

    function cancelFind() {
        socket.emit("anon:leave");
        if (anonConnected) {
            setActiveFriend(null);
            setCurrentView("anon");
        } else {
            setActiveFriend(null);
            setCurrentView("lobby");
        }
    }

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

    function handleFriendSelect(friend) {
        // friend = { id, name } object from your sidebar
        setActiveFriend(friend);
        setCurrentView("friend");

        // fetch DM history via socket
        socket.emit("dm:history", { friendId: friend.id, page: 1 });

        socket.once("dm:history", ({ messages }) => {
            const formatted = messages.map((m) => ({
                type: m.sender._id === friend.id ? "them" : "me",
                text: m.content,
                time: nowTime(),
            }));
            setFriendMsgs((prev) => ({ ...prev, [friend.name]: formatted }));
        });
    }

    // ═════════════════════════════════════════════════════════════════════════
    // Shared chat actions
    // ═════════════════════════════════════════════════════════════════════════

    function handleSkip() {
        setAnonMessages((prev) => [
            ...prev,
            { type: "system", text: "You skipped. Finding next match..." },
        ]);
        setAnonConnected(false);
        setCurrentChatLabel("Searching...");
        setCurrentChatSub("Finding match");
        setActiveFriend(null);
        setCurrentView("finding");
        // backend will respond with anon:waiting or anon:matched
        socket.emit("anon:skip", { interests: selectedInterests });
    }

    function handleEnd() {
        if (currentView === "anon") {
            socket.emit("anon:leave");
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
            setActiveFriend(null);
            setCurrentView("lobby");
        }
    }

    function handleSend(text) {
        if (currentView === "anon") {
            // emit to socket — anon:message:sent will echo back
            socket.emit("anon:message", { content: text });

        } else if (currentView === "friend" && activeFriend) {
            const msg = { type: "me", text, time: nowTime() };
            setFriendMsgs((prev) => ({
                ...prev,
                [activeFriend.name]: [...(prev[activeFriend.name] || []), msg],
            }));
            // send via DM socket
            socket.emit("dm:send", {
                receiverId: activeFriend.id,
                content: text,
            });
        }
    }

    function handleAddFriend() {
        socket.emit("anon:friend-request");
        // response handled by anon:friend-request:sent listener above
    }

    // ═════════════════════════════════════════════════════════════════════════
    // Derived values for ChatView
    // ═════════════════════════════════════════════════════════════════════════

    const isAnonView   = currentView === "anon";
    const isFriendView = currentView === "friend";
    const isChatView   = isAnonView || isFriendView;

    const chatPeer = isAnonView
        ? { name: anonName, interests: `Interests: ${anonInterests}` }
        : { name: activeFriend?.name || "", interests: "Friend • Direct Message" };

    const chatMessages = isAnonView
        ? anonMessages
        : (activeFriend ? (friendMsgs[activeFriend.name] || []) : []);

    // ═════════════════════════════════════════════════════════════════════════
    // Render
    // ═════════════════════════════════════════════════════════════════════════

    return (
        <div className="flex h-full w-full overflow-hidden">

            {/* ── Chat-Specific Left Sidebar (Friend List) ── */}
            <ChatSidebar
                currentChatLabel={currentChatLabel}
                currentChatSub={currentChatSub}
                activeFriend={activeFriend}
                onReturnToAnon={handleReturnToAnon}
                onFriendSelect={handleFriendSelect}
            />

            {/* ── Chat Main View Area ── */}
            <div className="flex-1 flex flex-col overflow-hidden">
                {/* ── Local Topbar ── */}
                <Topbar
                    subtitle="Anonymous"
                    title="Campus Chat 💬"
                    extra={
                        <div className="flex items-center gap-3">
                            <div className="flex items-center gap-2 bg-retro-green border-3 border-black px-3 py-1.5 shadow-retro-sm">
                                <div className="w-2 h-2 bg-white rounded-full pulse" />
                                <span className="font-black uppercase text-xs text-white">{847} Online</span>
                            </div>
                        </div>
                    }
                />

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
                        peer={chatPeer}
                        messages={chatMessages}
                        showAddFriend={isAnonView}
                        friendAdded={anonFriendAdded}
                        onSend={handleSend}
                        onSkip={isAnonView ? handleSkip : undefined}
                        onEnd={handleEnd}
                        onAddFriend={handleAddFriend}
                    />
                )}
            </div>
        </div>
    );
}