// ── ChatView ──────────────────────────────────────────────────────────────────
// Active chat view: topbar, scrollable message list, and input bar.
// Props:
//   peer          – { name, interests } displayed in topbar
//   messages      – message array [{ type:'me'|'them'|'system', text, time }]
//   showAddFriend – show "Add Friend" button (true for anon chat only)
//   friendAdded   – whether friend has been added (disables the button)
//   onSend        – called with trimmed text string
//   onSkip        – skip to next match (anon only; pass undefined to hide Skip)
//   onEnd         – end/leave chat
//   onAddFriend   – add friend action

import { useEffect, useRef, useState } from "react";

// ── Helpers ────────────────────────────────────────────────────────────────────
function nowTime() {
    const d = new Date();
    return (
        d.getHours().toString().padStart(2, "0") +
        ":" +
        d.getMinutes().toString().padStart(2, "0")
    );
}

// ── Message Bubbles ────────────────────────────────────────────────────────────
function MyMessage({ text, time }) {
    return (
        <div className="msg-in flex justify-end">
            <div className="bubble-me px-4 py-2.5 max-w-xs font-bold text-sm leading-snug">
                {text}
                <p className="text-xs opacity-50 mt-1 text-right font-bold">{time}</p>
            </div>
        </div>
    );
}

function TheirMessage({ text, time }) {
    return (
        <div className="msg-in flex justify-start">
            <div className="bubble-them px-4 py-2.5 max-w-xs font-bold text-sm leading-snug shadow-retro-sm">
                {text}
                <p className="text-xs opacity-40 mt-1 font-bold">{time}</p>
            </div>
        </div>
    );
}

function SystemMessage({ text }) {
    return (
        <div className="msg-in flex justify-center">
            <div className="bubble-system px-4 py-2 font-black uppercase text-center shadow-retro-sm">
                {text}
            </div>
        </div>
    );
}

// ── ChatView ──────────────────────────────────────────────────────────────────
export default function ChatView({
    peer,
    messages,
    showAddFriend,
    friendAdded,
    onSend,
    onSkip,
    onEnd,
    onAddFriend,
}) {
    const [inputText,    setInputText]    = useState("");
    const textareaRef    = useRef(null);
    const messagesEndRef = useRef(null);

    // Auto-scroll on new messages
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    // Reset input when switching chats
    useEffect(() => {
        setInputText("");
        if (textareaRef.current) {
            textareaRef.current.value = "";
            textareaRef.current.style.height = "auto";
        }
    }, [peer.name]);

    function handleInput(e) {
        const ta = e.target;
        ta.style.height = "auto";
        ta.style.height = Math.min(ta.scrollHeight, 120) + "px";
        setInputText(ta.value);
    }

    function handleKeyDown(e) {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            submitMessage();
        }
        if (e.key === "Escape") onEnd();
    }

    function submitMessage() {
        const text = inputText.trim();
        if (!text) return;
        onSend(text);
        setInputText("");
        if (textareaRef.current) {
            textareaRef.current.value = "";
            textareaRef.current.style.height = "auto";
        }
    }

    return (
        <div className="flex-1 flex flex-col overflow-hidden bg-retro-yellow">

            {/* ── Chat Topbar ── */}
            <div className="bg-white border-b-3 border-black px-5 py-3 flex items-center gap-4 flex-shrink-0">
                <div className="w-10 h-10 bg-black border-3 border-black flex items-center justify-center flex-shrink-0 shadow-retro-sm">
                    <span className="material-symbols-outlined text-retro-yellow text-xl">masks</span>
                </div>

                <div className="flex-1">
                    <p className="font-black uppercase text-sm leading-none">{peer.name}</p>
                    <div className="flex items-center gap-2 mt-0.5">
                        <div className="w-2 h-2 bg-retro-green rounded-full pulse" />
                        <span className="text-xs font-bold text-black/50 uppercase">{peer.interests}</span>
                    </div>
                </div>

                <div className="flex gap-2">
                    {/* Skip — only shown for anon chat */}
                    {onSkip && (
                        <button
                            onClick={onSkip}
                            className="bg-retro-yellow border-3 border-black px-4 py-2 font-black uppercase text-xs shadow-retro hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all flex items-center gap-1"
                        >
                            <span className="material-symbols-outlined text-base">skip_next</span> Skip
                        </button>
                    )}

                    {/* End */}
                    <button
                        onClick={onEnd}
                        className="bg-retro-red border-3 border-black px-4 py-2 font-black uppercase text-xs shadow-retro text-white hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all flex items-center gap-1"
                    >
                        <span className="material-symbols-outlined text-base">call_end</span> End
                    </button>

                    {/* Add Friend — only for anon chat */}
                    {showAddFriend && !friendAdded && (
                        <button
                            onClick={onAddFriend}
                            className="bg-retro-green border-3 border-black px-4 py-2 font-black uppercase text-xs shadow-retro text-white hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all flex items-center gap-1"
                        >
                            <span className="material-symbols-outlined text-base">person_add</span> Add
                        </button>
                    )}
                    {showAddFriend && friendAdded && (
                        <div className="bg-black border-3 border-black px-4 py-2 flex items-center gap-1">
                            <span className="material-symbols-outlined text-retro-yellow text-base">check</span>
                            <span className="font-black uppercase text-xs text-retro-yellow">Added!</span>
                        </div>
                    )}
                </div>
            </div>

            {/* ── Messages ── */}
            <div className="flex-1 overflow-y-auto retro-scroll p-5 flex flex-col gap-3">
                {messages.map((msg, i) => {
                    if (msg.type === "me")     return <MyMessage     key={i} text={msg.text} time={msg.time} />;
                    if (msg.type === "them")   return <TheirMessage  key={i} text={msg.text} time={msg.time} />;
                    if (msg.type === "system") return <SystemMessage key={i} text={msg.text} />;
                    return null;
                })}
                <div ref={messagesEndRef} />
            </div>

            {/* ── Input Bar ── */}
            <div className="border-t-3 border-black bg-white flex items-end gap-0 flex-shrink-0">
                {/* ESC / SKIP pills */}
                <div className="flex border-r-3 border-black flex-shrink-0">
                    <button
                        onClick={onEnd}
                        className="bg-black text-white font-black uppercase text-xs px-4 py-4 hover:bg-retro-red transition-colors"
                    >
                        ESC
                    </button>
                    {onSkip && (
                        <button
                            onClick={onSkip}
                            className="bg-retro-red text-white font-black uppercase text-xs px-4 py-4 border-l-3 border-black hover:opacity-80 transition-opacity"
                        >
                            SKIP
                        </button>
                    )}
                </div>

                <textarea
                    ref={textareaRef}
                    className="msg-input"
                    rows={1}
                    placeholder="Send a message..."
                    value={inputText}
                    onChange={handleInput}
                    onKeyDown={handleKeyDown}
                />

                <button
                    onClick={submitMessage}
                    className="bg-black border-l-3 border-black px-5 py-4 flex-shrink-0 hover:bg-retro-yellow transition-colors group"
                >
                    <span className="material-symbols-outlined text-retro-yellow group-hover:text-black text-2xl">
                        send
                    </span>
                </button>
            </div>
        </div>
    );
}
