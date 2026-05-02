import { motion, AnimatePresence } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { FiX, FiSend, FiPhone, FiCalendar, FiFileText, FiUser, FiChevronRight } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

// ─── Types ────────────────────────────────────────────────────────────────────
interface Message {
    id: string;
    type: "user" | "bot";
    text: string;
    links?: Array<{ label: string; path: string }>;
    timestamp: Date;
}
interface BotResponse {
    text: string;
    links?: Array<{ label: string; path: string }>;
}

// ─── School data ──────────────────────────────────────────────────────────────
const schoolInfo = {
    name: "Brain Child Nursery and Primary School",
    phone: "+234 706 117 5897",
    email: "info@kaylaschool.com",
    address: "No. 8 D.C Onyekwelu Street, Beside LomaLinda Estate, Enugu",
    programs: ["Pre-School (Ages 1½–2)", "Nursery 1–3 (Ages 2½–5)", "Lower Grade (Ages 5½–8)", "Upper Grade (Ages 8½–11)"],
    facilities: ["Air-conditioned classrooms", "Well-stocked library", "Internet-connected computer lab", "Mini science lab", "Music & dance studio", "Attractive playground"],
};

// ─── Bot logic ────────────────────────────────────────────────────────────────
const generateBotResponse = (userMessage: string): BotResponse => {
    const m = userMessage.toLowerCase().trim();
    if (m.match(/^(hi|hello|hey)\b/i)) return { text: `Welcome to ${schoolInfo.name}! I'm here to help with programs, admissions, facilities, or contact info. What would you like to know?`, links: [{ label: "Programs", path: "/programs" }, { label: "Admissions", path: "/admissions" }] };
    if (m.match(/(admiss|enroll|apply|register|join)/i)) return { text: `Our admissions process is simple:\n\n1. Initial enquiry\n2. Application form\n3. Assessment\n4. Offer letter\n5. Orientation\n\nContact our admissions team to get started!`, links: [{ label: "Apply now", path: "/admissions" }, { label: "Contact us", path: "/contact" }] };
    if (m.match(/(program|curriculum|class|grade|offer)/i)) return { text: `We offer four comprehensive programs:\n\n${schoolInfo.programs.map((p) => `• ${p}`).join("\n")}`, links: [{ label: "View programs", path: "/programs" }] };
    if (m.match(/(facilit|campus|lab|playground|library)/i)) return { text: `Our campus features world-class facilities:\n\n${schoolInfo.facilities.map((f) => `• ${f}`).join("\n")}`, links: [{ label: "See gallery", path: "/gallery" }] };
    if (m.match(/(fee|cost|tuition|price|payment)/i)) return { text: `Fees vary by age group and program. Our admissions team will provide a detailed fee structure tailored to your child's program.`, links: [{ label: "Admissions", path: "/admissions" }, { label: "Contact us", path: "/contact" }] };
    if (m.match(/(contact|phone|email|address|location|where)/i)) return { text: `You can reach us at:\n\n📞 ${schoolInfo.phone}\n✉️ ${schoolInfo.email}\n📍 ${schoolInfo.address}`, links: [{ label: "Contact page", path: "/contact" }] };
    if (m.match(/(visit|tour|schedule|book)/i)) return { text: `We'd love to show you around! Book a campus visit and see our facilities firsthand. Our staff will give you a personalised tour.`, links: [{ label: "Book visit", path: "/contact" }] };
    return { text: `I can help with admissions, programs, facilities, fees, and contact info. Or tap "Continue on WhatsApp" to chat with a real staff member.`, links: [{ label: "Home", path: "/" }] };
};

const suggestedQuestions = ["Tell me about admissions", "What programs do you offer?", "About the facilities", "How much are the fees?", "Contact information"];

// ─── Hooks ────────────────────────────────────────────────────────────────────
function useIsMobile() {
    const [v, setV] = useState(() => window.innerWidth < 640);
    useEffect(() => { const h = () => setV(window.innerWidth < 640); window.addEventListener("resize", h); return () => window.removeEventListener("resize", h); }, []);
    return v;
}

const fmt = (d: Date) => d.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

// ─── Design tokens ────────────────────────────────────────────────────────────
const G = {
    p: "#22c55e",
    d: "#16a34a",
    dk: "#15803d",
    header: "#064e3b",
    bubble: "#f0fdf4",
    userBubble: "#dcfce7",
    border: "#bbf7d0",
    text: "#14532d",
};

// ─── WhatsApp icon path ───────────────────────────────────────────────────────
const WA_PATH = "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.272-.099-.47-.148-.67.15-.23.381-.921 1.226-1.129 1.433-.206.207-.412.233-.71.066-.299-.149-1.263-.465-2.403-1.485-.889-.79-1.49-1.771-1.667-2.07-.18-.299-.02-.461.135-.611.135-.134.297-.331.446-.497.149-.166.198-.287.297-.478.099-.191.05-.358-.025-.477-.075-.118-.669-1.611-.916-2.206-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.946 1.347l-.355.202-.368-.074-1.585-.316 1.595 4.318.007.282-.26.423a9.84 9.84 0 003.285 6.052 9.855 9.855 0 004.872 1.68h.005c.554 0 1.092-.043 1.614-.135.499-.087 1.323-.413 1.833-1.12.342-.528.602-1.431.723-2.471.06-.719.051-1.612-.131-2.288-.167-.627-.45-1.215-.9-1.582-.451-.368-.954-.579-1.487-.614-.533-.035-1.116.135-1.522.36-.406.225-.844.577-1.155.923";

export function WhatsAppWidget(): JSX.Element {
    const navigate = useNavigate();
    const isMobile = useIsMobile();
    const [isOpen, setIsOpen] = useState(false);
    const [inputValue, setInputValue] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const [pulseKey, setPulseKey] = useState(0);
    const [handoffOpen, setHandoffOpen] = useState(false);
    const [handoffName, setHandoffName] = useState("");
    const [handoffPhone, setHandoffPhone] = useState("");
    const [handoffNote, setHandoffNote] = useState("");
    const messagesEndRef = useRef<HTMLDivElement | null>(null);
    const inputRef = useRef<HTMLInputElement | null>(null);
    const STORAGE_KEY = "bc_chat_v2";
    const phoneNumber = "2347061175897";

    const defaultWelcome: Message = {
        id: "welcome", type: "bot",
        text: `Hello! 👋 Welcome to ${schoolInfo.name}.\n\nI'm here to help with any questions about admissions, programs, or facilities. How can I help you today?`,
        links: [{ label: "Programs", path: "/programs" }, { label: "Admissions", path: "/admissions" }],
        timestamp: new Date(),
    };

    const [messages, setMessages] = useState<Message[]>(() => {
        try {
            const raw = localStorage.getItem(STORAGE_KEY);
            if (raw) {
                const arr = JSON.parse(raw) as Record<string, unknown>[];
                if (Array.isArray(arr)) return arr.map((m) => ({
                    id: String(m.id ?? Date.now()), type: m.type === "bot" ? "bot" : ("user" as const),
                    text: String(m.text ?? ""),
                    links: Array.isArray(m.links) ? (m.links as Record<string, unknown>[]).map((l) => ({ label: String(l.label ?? ""), path: String(l.path ?? "/") })) : undefined,
                    timestamp: new Date(String(m.timestamp ?? Date.now())),
                }));
            }
        } catch (_) { /* noop */ }
        return [defaultWelcome];
    });

    useEffect(() => { try { localStorage.setItem(STORAGE_KEY, JSON.stringify(messages)); } catch (_) { /* noop */ } }, [messages]);
    useEffect(() => { messagesEndRef.current?.scrollIntoView({ behavior: "smooth" }); }, [messages, isTyping]);
    useEffect(() => { if (isOpen) setTimeout(() => inputRef.current?.focus(), 320); }, [isOpen]);

    useEffect(() => {
        if (isOpen) return;
        const t = setInterval(() => setPulseKey((k) => k + 1), 6000);
        return () => clearInterval(t);
    }, [isOpen]);

    const send = (text = inputValue) => {
        const t = text.trim();
        if (!t) return;
        setMessages((s) => [...s, { id: Date.now().toString(), type: "user", text: t, timestamp: new Date() }]);
        setInputValue("");
        setIsTyping(true);
        setTimeout(() => {
            const r = generateBotResponse(t);
            setMessages((s) => [...s, { id: (Date.now() + 1).toString(), type: "bot", text: r.text, links: r.links, timestamp: new Date() }]);
            setIsTyping(false);
        }, 750);
    };

    const addBotMsg = (text: string, links?: Array<{ label: string; path: string }>) =>
        setMessages((s) => [...s, { id: (Date.now() + 2).toString(), type: "bot", text, links, timestamp: new Date() }]);

    const handleSubmitHandoff = () => {
        const summary = `HUMAN HANDOFF\nName: ${handoffName}\nPhone: ${handoffPhone}\nMessage: ${handoffNote}`;
        setMessages((s) => [...s,
            { id: Date.now().toString(), type: "user", text: `Requesting human support...`, timestamp: new Date() },
            { id: (Date.now() + 1).toString(), type: "bot", text: `Got it! A staff member will reach out to you soon at ${handoffPhone}. We'll continue on WhatsApp.`, timestamp: new Date() },
        ]);
        setHandoffOpen(false);
        window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(summary)}`, "_blank");
    };

    const handleNav = (path: string) => { navigate(path); setIsOpen(false); };

    const panelW = isMobile ? "calc(100vw - 2rem)" : "22rem";
    const panelBottom = isMobile ? "5rem" : "5.25rem";
    const panelRight = isMobile ? "1rem" : "0";
    const panelLeft = isMobile ? "1rem" : "auto";

    const actionBtns = [
        { icon: <FiPhone size={13} />, label: "Call", action: () => window.open(`tel:+${phoneNumber}`) },
        { icon: <FiCalendar size={13} />, label: "Book visit", action: () => addBotMsg("We'd love to show you around! Contact us to schedule a campus tour.", [{ label: "Contact us", path: "/contact" }]) },
        { icon: <FiFileText size={13} />, label: "Brochure", action: () => addBotMsg("Request a digital brochure via WhatsApp or pick one up at the office.", [{ label: "Contact us", path: "/contact" }]) },
        { icon: <FiUser size={13} />, label: "Staff", action: () => setHandoffOpen(true) },
    ];

    return (
        <div style={{ position: "fixed", bottom: "1.5rem", right: "1.5rem", zIndex: 9999 }}>

            {/* Panel */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 18, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 18, scale: 0.95 }}
                        transition={{ type: "spring", stiffness: 380, damping: 28 }}
                        style={{
                            position: "fixed", bottom: panelBottom, right: panelRight, left: panelLeft,
                            width: panelW, maxHeight: isMobile ? "calc(100dvh - 7rem)" : "640px",
                            background: "#ffffff",
                            borderRadius: 20,
                            overflow: "hidden",
                            display: "flex", flexDirection: "column",
                            boxShadow: "0 24px 64px rgba(0,0,0,0.14), 0 4px 16px rgba(0,0,0,0.08)",
                            border: "1px solid rgba(0,0,0,0.055)",
                        }}
                    >
                        {/* ── Header ─────────────────────────────────────── */}
                        <div style={{
                            background: "linear-gradient(160deg, #064e3b 0%, #065f46 100%)",
                            padding: "1rem 1rem 0.875rem",
                            flexShrink: 0,
                        }}>
                            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                                    <div style={{ position: "relative", flexShrink: 0 }}>
                                        <div style={{
                                            width: 44, height: 44, borderRadius: "50%",
                                            background: "linear-gradient(135deg, #22c55e, #15803d)",
                                            display: "flex", alignItems: "center", justifyContent: "center",
                                            border: "2.5px solid rgba(255,255,255,0.18)",
                                        }}>
                                            <svg width="22" height="22" fill="white" viewBox="0 0 24 24"><path d={WA_PATH} /></svg>
                                        </div>
                                        <span style={{ position: "absolute", bottom: 1, right: 1, width: 10, height: 10, borderRadius: "50%", background: "#4ade80", border: "2px solid #064e3b" }} />
                                    </div>
                                    <div>
                                        <div style={{ color: "#fff", fontWeight: 600, fontSize: "0.875rem", letterSpacing: "-0.01em" }}>Brain Child Support</div>
                                        <div style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.68rem", marginTop: 2, display: "flex", alignItems: "center", gap: 5 }}>
                                            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#4ade80", display: "inline-block" }} />
                                            Online · replies instantly
                                        </div>
                                    </div>
                                </div>
                                <button onClick={() => setIsOpen(false)} style={{
                                    width: 30, height: 30, borderRadius: "50%", border: "none",
                                    background: "rgba(255,255,255,0.1)", cursor: "pointer",
                                    display: "flex", alignItems: "center", justifyContent: "center",
                                    color: "rgba(255,255,255,0.75)", transition: "background 0.15s",
                                }}
                                    onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.2)")}
                                    onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.1)")}
                                ><FiX size={16} /></button>
                            </div>
                        </div>

                        {/* ── Messages ───────────────────────────────────── */}
                        <div style={{ flex: 1, overflowY: "auto", padding: "1rem", background: "#f6fef9", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                            {messages.map((msg, idx) => {
                                const showTime = idx === messages.length - 1 || messages[idx + 1]?.type !== msg.type;
                                const isUser = msg.type === "user";
                                return (
                                    <motion.div key={msg.id}
                                        initial={{ opacity: 0, y: 8, scale: 0.97 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        transition={{ duration: 0.2, ease: "easeOut" }}
                                        style={{ display: "flex", flexDirection: "column", alignItems: isUser ? "flex-end" : "flex-start" }}>
                                        <div style={{
                                            maxWidth: "80%",
                                            padding: "0.575rem 0.8rem",
                                            borderRadius: isUser ? "16px 16px 4px 16px" : "16px 16px 16px 4px",
                                            fontSize: "0.8125rem", lineHeight: 1.6,
                                            whiteSpace: "pre-wrap", wordBreak: "break-word",
                                            background: isUser ? G.userBubble : "#ffffff",
                                            color: isUser ? G.text : "#1c1c1e",
                                            boxShadow: isUser ? "none" : "0 1px 3px rgba(0,0,0,0.06)",
                                            border: isUser ? "none" : `1px solid ${G.border}`,
                                        }}>
                                            {msg.text}
                                            {msg.links && (
                                                <div style={{ marginTop: "0.5rem", display: "flex", flexWrap: "wrap", gap: "0.3rem" }}>
                                                    {msg.links.map((l, i) => (
                                                        <button key={i} onClick={() => handleNav(l.path)} style={{
                                                            fontSize: "0.68rem", background: G.dk, color: "#fff",
                                                            border: "none", borderRadius: 6, padding: "0.22rem 0.55rem",
                                                            cursor: "pointer", fontWeight: 600,
                                                            display: "flex", alignItems: "center", gap: 3,
                                                            transition: "background 0.15s",
                                                        }}
                                                            onMouseEnter={(e) => (e.currentTarget.style.background = G.header)}
                                                            onMouseLeave={(e) => (e.currentTarget.style.background = G.dk)}
                                                        >{l.label}<FiChevronRight size={9} /></button>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                        {showTime && (
                                            <span style={{ fontSize: "0.6rem", color: "#9ca3af", marginTop: 3, paddingLeft: isUser ? 0 : 4, paddingRight: isUser ? 4 : 0 }}>
                                                {fmt(msg.timestamp)}
                                            </span>
                                        )}
                                    </motion.div>
                                );
                            })}

                            <AnimatePresence>
                                {isTyping && (
                                    <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
                                        <div style={{ display: "inline-flex", background: "#fff", border: `1px solid ${G.border}`, borderRadius: "16px 16px 16px 4px", padding: "0.6rem 0.875rem", boxShadow: "0 1px 3px rgba(0,0,0,0.06)" }}>
                                            <div style={{ display: "flex", gap: 4, alignItems: "center" }}>
                                                {[0, 1, 2].map((i) => (
                                                    <motion.span key={i} animate={{ y: [0, -4, 0] }} transition={{ delay: i * 0.14, repeat: Infinity, duration: 0.65, ease: "easeInOut" }}
                                                        style={{ width: 6, height: 6, borderRadius: "50%", background: G.d, display: "block" }} />
                                                ))}
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                            <div ref={messagesEndRef} />
                        </div>

                        {/* ── Suggested ─────────────────────────────────── */}
                        {messages.length < 5 && (
                            <div style={{ padding: "0.6rem 0.875rem 0.5rem", background: "#fff", borderTop: `1px solid ${G.border}`, flexShrink: 0 }}>
                                <p style={{ fontSize: "0.62rem", color: "#9ca3af", marginBottom: "0.4rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.07em" }}>Quick questions</p>
                                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.3rem" }}>
                                    {suggestedQuestions.map((q) => (
                                        <button key={q} onClick={() => send(q)} style={{
                                            fontSize: "0.695rem", padding: "0.28rem 0.6rem",
                                            background: G.bubble, color: G.dk,
                                            border: `1px solid ${G.border}`, borderRadius: 100,
                                            cursor: "pointer", fontWeight: 500, transition: "all 0.15s",
                                        }}
                                            onMouseEnter={(e) => { e.currentTarget.style.background = G.border; e.currentTarget.style.borderColor = G.d; }}
                                            onMouseLeave={(e) => { e.currentTarget.style.background = G.bubble; e.currentTarget.style.borderColor = G.border; }}
                                        >{q}</button>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* ── Footer ────────────────────────────────────── */}
                        <div style={{ padding: "0.75rem", background: "#fff", borderTop: `1px solid ${G.border}`, flexShrink: 0, position: "relative" }}>
                            {/* Input row */}
                            <div style={{ display: "flex", gap: "0.5rem", marginBottom: "0.6rem", alignItems: "center" }}>
                                <input ref={inputRef} value={inputValue}
                                    onChange={(e) => setInputValue(e.target.value)}
                                    onKeyDown={(e) => e.key === "Enter" && send()}
                                    placeholder="Type a message…"
                                    style={{
                                        flex: 1, border: `1.5px solid ${G.border}`,
                                        borderRadius: 100, padding: "0.5rem 1rem",
                                        fontSize: "0.8125rem", outline: "none",
                                        background: G.bubble, color: "#1c1c1e",
                                        transition: "border-color 0.15s",
                                    }}
                                    onFocus={(e) => (e.currentTarget.style.borderColor = G.d)}
                                    onBlur={(e) => (e.currentTarget.style.borderColor = G.border)}
                                />
                                <motion.button onClick={() => send()} disabled={!inputValue.trim()}
                                    whileTap={inputValue.trim() ? { scale: 0.88 } : {}}
                                    style={{
                                        width: 38, height: 38, borderRadius: "50%", border: "none", flexShrink: 0,
                                        background: inputValue.trim() ? "linear-gradient(135deg, #22c55e, #15803d)" : "#e5e7eb",
                                        color: inputValue.trim() ? "#fff" : "#9ca3af",
                                        cursor: inputValue.trim() ? "pointer" : "default",
                                        display: "flex", alignItems: "center", justifyContent: "center",
                                        transition: "background 0.2s",
                                    }}>
                                    <FiSend size={15} />
                                </motion.button>
                            </div>

                            {/* Action buttons */}
                            <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "0.375rem", marginBottom: "0.6rem" }}>
                                {actionBtns.map(({ icon, label, action }) => (
                                    <button key={label} onClick={action} style={{
                                        display: "flex", flexDirection: "column", alignItems: "center",
                                        gap: 4, padding: "0.5rem 0.2rem",
                                        border: `1.5px solid ${G.border}`, borderRadius: 10,
                                        background: "#fff", color: G.dk,
                                        cursor: "pointer", fontSize: "0.61rem",
                                        fontWeight: 600, transition: "all 0.15s",
                                        letterSpacing: "-0.01em",
                                    }}
                                        onMouseEnter={(e) => { e.currentTarget.style.background = G.bubble; e.currentTarget.style.borderColor = G.d; }}
                                        onMouseLeave={(e) => { e.currentTarget.style.background = "#fff"; e.currentTarget.style.borderColor = G.border; }}
                                    >
                                        <span style={{ color: G.d, display: "flex" }}>{icon}</span>
                                        {label}
                                    </button>
                                ))}
                            </div>

                            {/* WhatsApp CTA */}
                            <button onClick={() => {
                                const text = messages.map((m) => `${m.type === "user" ? "Me" : "Support"}: ${m.text}`).join("\n---\n");
                                window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`, "_blank");
                            }} style={{
                                width: "100%",
                                background: "linear-gradient(135deg, #22c55e 0%, #16a34a 55%, #15803d 100%)",
                                color: "#fff", border: "none", borderRadius: 10,
                                padding: "0.575rem 0", fontSize: "0.8125rem", fontWeight: 700,
                                cursor: "pointer", display: "flex", alignItems: "center",
                                justifyContent: "center", gap: 7, letterSpacing: "-0.01em",
                                transition: "opacity 0.15s",
                            }}
                                onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.9")}
                                onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
                            >
                                <svg width="16" height="16" fill="white" viewBox="0 0 24 24"><path d={WA_PATH} /></svg>
                                Continue on WhatsApp
                            </button>

                            {/* Handoff modal */}
                            <AnimatePresence>
                                {handoffOpen && (
                                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                                        style={{ position: "absolute", inset: 0, background: "rgba(3,26,17,0.6)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 10, backdropFilter: "blur(6px)", borderRadius: "0 0 20px 20px" }}>
                                        <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }} transition={{ type: "spring", stiffness: 420, damping: 26 }}
                                            style={{ width: "86%", background: "#fff", borderRadius: 16, padding: "1.25rem", boxShadow: "0 20px 50px rgba(0,0,0,0.22)" }}>
                                            <h4 style={{ margin: "0 0 0.875rem", fontSize: "0.875rem", color: G.header, fontWeight: 700 }}>Request staff support</h4>
                                            {([
                                                { val: handoffName, set: setHandoffName, ph: "Your name", type: "text" },
                                                { val: handoffPhone, set: setHandoffPhone, ph: "Phone / WhatsApp number", type: "tel" },
                                            ] as { val: string; set: React.Dispatch<React.SetStateAction<string>>; ph: string; type: string }[]).map(({ val, set, ph, type }) => (
                                                <input key={ph} type={type} value={val} onChange={(e) => set(e.target.value)} placeholder={ph}
                                                    style={{ width: "100%", border: `1.5px solid ${G.border}`, borderRadius: 8, padding: "0.45rem 0.7rem", marginBottom: "0.5rem", fontSize: "0.8rem", boxSizing: "border-box", outline: "none", color: "#1c1c1e", background: G.bubble }} />
                                            ))}
                                            <textarea value={handoffNote} onChange={(e) => setHandoffNote(e.target.value)} placeholder="Brief message (optional)"
                                                style={{ width: "100%", border: `1.5px solid ${G.border}`, borderRadius: 8, padding: "0.45rem 0.7rem", marginBottom: "0.75rem", fontSize: "0.8rem", resize: "vertical", minHeight: "3rem", boxSizing: "border-box", outline: "none", color: "#1c1c1e", background: G.bubble }} />
                                            <div style={{ display: "flex", gap: "0.5rem", justifyContent: "flex-end" }}>
                                                <button onClick={() => setHandoffOpen(false)} style={{ padding: "0.45rem 1rem", borderRadius: 8, border: `1.5px solid ${G.border}`, background: "#fff", cursor: "pointer", fontSize: "0.8rem", color: "#6b7280", fontWeight: 500 }}>Cancel</button>
                                                <button onClick={handleSubmitHandoff} style={{ padding: "0.45rem 1rem", borderRadius: 8, border: "none", background: "linear-gradient(135deg, #22c55e, #15803d)", color: "#fff", cursor: "pointer", fontSize: "0.8rem", fontWeight: 700 }}>Send request</button>
                                            </div>
                                        </motion.div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Unread badge */}
            {!isOpen && (
                <div style={{ position: "absolute", top: -4, right: -4, width: 18, height: 18, borderRadius: "50%", background: "#ef4444", color: "#fff", fontSize: "0.6rem", fontWeight: 800, display: "flex", alignItems: "center", justifyContent: "center", border: "2.5px solid #fff", zIndex: 1, pointerEvents: "none" }}>
                    1
                </div>
            )}

            {/* FAB */}
            <motion.button onClick={() => setIsOpen((s) => !s)}
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.91 }}
                style={{
                    width: 58, height: 58, borderRadius: "50%", border: "none",
                    background: "linear-gradient(135deg, #22c55e 0%, #15803d 100%)",
                    color: "#fff", cursor: "pointer",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    boxShadow: "0 4px 20px rgba(34,197,94,0.42), 0 2px 8px rgba(0,0,0,0.12)",
                    position: "relative",
                }}>
                {/* Ripple */}
                {!isOpen && (
                    <motion.span key={pulseKey}
                        initial={{ scale: 1, opacity: 0.45 }}
                        animate={{ scale: 2, opacity: 0 }}
                        transition={{ duration: 1.1, ease: "easeOut" }}
                        style={{ position: "absolute", inset: 0, borderRadius: "50%", background: "#22c55e", pointerEvents: "none" }}
                    />
                )}
                <AnimatePresence mode="wait">
                    {isOpen ? (
                        <motion.span key="close" initial={{ rotate: -45, opacity: 0, scale: 0.7 }} animate={{ rotate: 0, opacity: 1, scale: 1 }} exit={{ rotate: 45, opacity: 0, scale: 0.7 }} transition={{ duration: 0.16 }} style={{ display: "flex" }}>
                            <FiX size={24} />
                        </motion.span>
                    ) : (
                        <motion.span key="whatsapp" initial={{ rotate: 45, opacity: 0, scale: 0.7 }} animate={{ rotate: 0, opacity: 1, scale: 1 }} exit={{ rotate: -45, opacity: 0, scale: 0.7 }} transition={{ duration: 0.16 }} style={{ display: "flex" }}>
                            <svg width="28" height="28" fill="white" viewBox="0 0 24 24"><path d={WA_PATH} /></svg>
                        </motion.span>
                    )}
                </AnimatePresence>
            </motion.button>
        </div>
    );
}