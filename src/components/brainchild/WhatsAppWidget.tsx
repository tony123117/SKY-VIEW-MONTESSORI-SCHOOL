import { motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { FiMessageCircle, FiX, FiSend } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

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

const schoolInfo = {
    name: "Brain Child Nursery and Primary School",
    phone: "+234 706 117 5897",
    email: "info@kaylaschool.com",
    address: "No. 8 D.C Onyekwelu Street, Beside LomaLinda Estate, Enugu",
    programs: [
        "Pre-School (Ages 1½ – 2)",
        "Nursery 1–3 (Ages 2½ – 5)",
        "Lower Grade (Ages 5½ – 8)",
        "Upper Grade (Ages 8½ – 11)",
    ],
    facilities: [
        "Air-conditioned classrooms",
        "Well-stocked library",
        "Internet-connected computer lab",
        "Mini science lab",
        "Music & dance studio",
        "Attractive playground",
        "Sports equipment area",
    ],
    values: ["Compassion", "Excellence", "Innovation"],
    extras: [
        "Extra-curricular activities (Culinary, Drama, Dance, Swimming, etc.)",
        "Play-based learning for early years",
        "STEM activities",
        "Arts & music",
        "Physical education",
    ],
};

const generateBotResponse = (userMessage: string): BotResponse => {
    const message = userMessage.toLowerCase().trim();

    if (message.match(/^(hi|hello|hey)\b/i)) {
        return {
            text: `👋 Welcome to ${schoolInfo.name}! Ask me about programs, admissions, facilities, or contact info.`,
            links: [
                { label: "📚 Programs", path: "/programs" },
                { label: "🎓 Admissions", path: "/admissions" },
            ],
        };
    }

    if (message.match(/(admiss|enroll|apply|register|join|process)/i)) {
        return {
            text: `🎓 Admissions: enquiry → apply → assessment → offer → orientation. Contact admissions for specifics.`,
            links: [
                { label: "📝 Apply", path: "/admissions" },
                { label: "📞 Contact", path: "/contact" },
            ],
        };
    }

    if (message.match(/(program|curriculum|class|grade|offer)/i)) {
        return {
            text: `📚 Programs:\n${schoolInfo.programs.map((p) => `• ${p}`).join("\n")}`,
            links: [{ label: "🎓 Programs", path: "/programs" }],
        };
    }

    if (message.match(/(facilit|campus|lab|playground|library)/i)) {
        return {
            text: `🏫 Facilities:\n${schoolInfo.facilities.map((f) => `• ${f}`).join("\n")}`,
            links: [{ label: "📸 Gallery", path: "/gallery" }],
        };
    }

    if (message.match(/(fee|cost|tuition|price|payment)/i)) {
        return {
            text: `💰 Fees vary by program and age group. Contact admissions for current fee structure.`,
            links: [
                { label: "🎓 Admissions", path: "/admissions" },
                { label: "📞 Contact", path: "/contact" },
            ],
        };
    }

    if (message.match(/(contact|phone|email|address|location)/i)) {
        return {
            text: `📞 Contact:\nPhone: ${schoolInfo.phone}\nEmail: ${schoolInfo.email}\nAddress: ${schoolInfo.address}`,
            links: [{ label: "📞 Contact", path: "/contact" }],
        };
    }

    return {
        text: `🤔 I can help with admissions, programs, facilities, fees, and contact info. If you'd like, continue on WhatsApp for a personal reply.`,
        links: [{ label: "🏠 Home", path: "/" }],
    };
};

const suggestedQuestions = [
    "Tell me about admissions",
    "What programs do you offer?",
    "About facilities",
    "How much are the fees?",
    "Contact information",
];

export function WhatsAppWidget(): JSX.Element {
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);
    const STORAGE_KEY = "bc_chat_messages_v1";

    const defaultWelcome: Message = {
        id: "welcome",
        type: "bot",
        text: `👋 Welcome to ${schoolInfo.name}! How can I help you today?`,
        links: [
            { label: "📚 Programs", path: "/programs" },
            { label: "🎓 Admissions", path: "/admissions" },
        ],
        timestamp: new Date(),
    };

    const [messages, setMessages] = useState<Message[]>(() => {
        try {
            const raw = localStorage.getItem(STORAGE_KEY);
            if (raw) {
                const parsedRaw = JSON.parse(raw) as unknown;
                if (Array.isArray(parsedRaw)) {
                    const parsed = parsedRaw.map((item) => {
                        const m = item as Record<string, unknown>;
                        const linksVal = m.links;
                        const links = Array.isArray(linksVal)
                            ? (linksVal as unknown[]).map((l) => {
                                const li = l as Record<string, unknown>;
                                return {
                                    label: String(li.label ?? ""),
                                    path: String(li.path ?? "/"),
                                };
                            })
                            : undefined;

                        return {
                            id: String(m.id ?? Date.now()),
                            type: m.type === "bot" ? "bot" : "user",
                            text: String(m.text ?? ""),
                            links,
                            timestamp: new Date(String(m.timestamp ?? Date.now())),
                        } as Message;
                    });
                    return parsed;
                }
            }
        } catch (e) {
            // ignore and fallback
        }
        return [defaultWelcome];
    });
    const [inputValue, setInputValue] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement | null>(null);

    const phoneNumber = "2347061175897";
    const displayPhone = "+234 706 117 5897";

    useEffect(() => {
        const prevTitle = document.title;
        const prevDesc = document.querySelector('meta[name="description"]')?.getAttribute("content");

        document.title = `${schoolInfo.name} — Chat Assistant`;

        let descTag = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
        if (!descTag) {
            descTag = document.createElement("meta");
            descTag.name = "description";
            document.head.appendChild(descTag);
        }
        descTag.content = "Chat with Brain Child: admissions, programs, fees, facilities, and contact information.";

        return () => {
            document.title = prevTitle;
            if (descTag) descTag.content = prevDesc ?? "";
        };
    }, []);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    // persist messages to localStorage
    useEffect(() => {
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(messages));
        } catch (e) {
            // ignore
        }
    }, [messages]);

    // Extra widget states for human handoff
    const [handoffOpen, setHandoffOpen] = useState(false);
    const [handoffName, setHandoffName] = useState("");
    const [handoffPhone, setHandoffPhone] = useState("");
    const [handoffNote, setHandoffNote] = useState("");

    const handleSendMessage = (text = inputValue) => {
        if (!text.trim()) return;
        // store user message
        const userMessage: Message = { id: Date.now().toString(), type: "user", text, timestamp: new Date() };
        setMessages((s) => [...s, userMessage]);
        setInputValue("");
        setIsTyping(true);

        setTimeout(() => {
            const resp = generateBotResponse(text);
            const botMessage: Message = { id: (Date.now() + 1).toString(), type: "bot", text: resp.text, links: resp.links, timestamp: new Date() };
            setMessages((s) => [...s, botMessage]);
            setIsTyping(false);
        }, 700);
    };

    const handleCallSchool = () => {
        // open phone dialer
        window.open(`tel:+${phoneNumber}`);
    };

    const handleRequestBrochure = () => {
        const resp = {
            text: `📄 We've emailed a digital brochure to you if you provided an email. You can also pick one up at the school office or request it via WhatsApp.`,
            links: [{ label: "📞 Contact", path: "/contact" }],
        } as BotResponse;
        const botMessage: Message = { id: (Date.now() + 2).toString(), type: "bot", text: resp.text, links: resp.links, timestamp: new Date() };
        setMessages((s) => [...s, botMessage]);
    };

    const handleBookVisit = () => {
        const resp = generateBotResponse("book visit");
        const botMessage: Message = { id: (Date.now() + 3).toString(), type: "bot", text: resp.text, links: resp.links, timestamp: new Date() };
        setMessages((s) => [...s, botMessage]);
    };

    const handleOpenHandoff = () => {
        setHandoffOpen(true);
    };

    const handleSubmitHandoff = () => {
        const summary = `HUMAN HANDOFF REQUEST\nName: ${handoffName}\nPhone: ${handoffPhone}\nNote: ${handoffNote}`;
        const userMessage: Message = { id: Date.now().toString(), type: "user", text: `Request human: ${summary}`, timestamp: new Date() };
        const botMessage: Message = { id: (Date.now() + 1).toString(), type: "bot", text: `Thanks — I've noted your request. A staff member will reach out shortly. You can also continue on WhatsApp.`, timestamp: new Date() };
        setMessages((s) => [...s, userMessage, botMessage]);
        setHandoffOpen(false);

        // open WhatsApp for staff handoff with details
        const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(summary)}`;
        window.open(whatsappURL, "_blank");
    };

    const handleNavigate = (path: string) => {
        navigate(path);
        setIsOpen(false);
    };

    const handleSendToWhatsApp = () => {
        const conversationText = messages.map((m) => `${m.type === "user" ? "You" : "Support"}: ${m.text}`).join("\n---\n");
        const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(conversationText)}`;
        window.open(whatsappURL, "_blank");
    };

    return (
        <div className="fixed bottom-6 right-6 z-40 font-heading">
            <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={isOpen ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 20, scale: 0.95 }}
                transition={{ duration: 0.25 }}
                className={`absolute bottom-20 right-0 w-96 max-h-[600px] bg-white rounded-2xl shadow-2xl border border-gray-200 flex flex-col ${isOpen ? "pointer-events-auto" : "pointer-events-none"}`}>
                <div className="bg-gradient-to-r from-[#3B82F6] to-[#2563EB] text-white p-4 rounded-t-2xl flex justify-between items-center">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center"><FiMessageCircle size={20} /></div>
                        <div>
                            <div className="font-bold text-sm">Brain Child Assistant</div>
                            <div className="text-xs text-white/90">Always online</div>
                        </div>
                    </div>
                    <button onClick={() => setIsOpen(false)} className="p-1 rounded-full hover:bg-white/20"><FiX size={18} /></button>
                </div>

                <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
                    {messages.map((msg) => (
                        <motion.div key={msg.id} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} className={`flex ${msg.type === "user" ? "justify-end" : "justify-start"}`}>
                            <div className={`max-w-[75%] rounded-lg p-3 text-sm whitespace-pre-wrap ${msg.type === "user" ? "bg-[#3B82F6] text-white rounded-br-none" : "bg-white text-gray-800 border border-gray-200 rounded-bl-none"}`}>
                                {msg.text}
                                {msg.links && (
                                    <div className="mt-2 flex flex-wrap gap-2">
                                        {msg.links.map((l, i) => (
                                            <button key={i} onClick={() => handleNavigate(l.path)} className="text-xs bg-[#3B82F6] hover:bg-[#2563EB] text-white px-2 py-1 rounded font-semibold">{l.label}</button>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    ))}

                    {isTyping && (
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex justify-start">
                            <div className="bg-white border border-gray-200 rounded-lg rounded-bl-none p-3">
                                <div className="flex gap-1.5">{[1, 2, 3].map((i) => (<motion.div key={i} animate={{ y: [0, -6, 0] }} transition={{ delay: i * 0.12, repeat: Infinity }} className="w-2 h-2 bg-gray-400 rounded-full" />))}</div>
                            </div>
                        </motion.div>
                    )}
                    <div ref={messagesEndRef} />
                </div>

                {messages.length < 6 && (
                    <div className="px-4 pt-2 pb-3 bg-white border-t border-gray-200">
                        <p className="text-xs text-gray-600 mb-2 font-semibold">Quick Questions</p>
                        <div className="grid grid-cols-2 gap-2">{suggestedQuestions.map((q, i) => (<button key={i} onClick={() => handleSendMessage(q)} className="text-xs bg-blue-50 hover:bg-blue-100 text-blue-700 px-2 py-1.5 rounded border border-blue-200">{q}</button>))}</div>
                    </div>
                )}

                <div className="p-4 border-t border-gray-200 bg-white rounded-b-2xl">
                    <div className="flex gap-2 mb-3">
                        <input value={inputValue} onChange={(e) => setInputValue(e.target.value)} onKeyDown={(e) => e.key === "Enter" && handleSendMessage()} placeholder="Ask me anything..." className="flex-1 border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#3B82F6]" />
                        <button onClick={() => handleSendMessage()} disabled={!inputValue.trim()} className="bg-[#3B82F6] hover:bg-[#2563EB] disabled:bg-gray-300 text-white p-2 rounded-lg"><FiSend size={16} /></button>
                    </div>

                    <div className="flex gap-2 mb-3">
                        <button onClick={handleCallSchool} className="flex-1 text-sm border border-gray-200 px-3 py-2 rounded-lg bg-white hover:bg-blue-50">📞 Call School</button>
                        <button onClick={handleBookVisit} className="flex-1 text-sm border border-gray-200 px-3 py-2 rounded-lg bg-white hover:bg-blue-50">📅 Book Visit</button>
                        <button onClick={handleRequestBrochure} className="flex-1 text-sm border border-gray-200 px-3 py-2 rounded-lg bg-white hover:bg-blue-50">📄 Brochure</button>
                        <button onClick={handleOpenHandoff} className="flex-1 text-sm border border-gray-200 px-3 py-2 rounded-lg bg-white hover:bg-blue-50">👤 Speak to Human</button>
                    </div>

                    <button onClick={handleSendToWhatsApp} className="w-full bg-gradient-to-r from-[#3B82F6] to-[#2563EB] text-white font-semibold py-2 rounded-lg text-sm">📱 Continue on WhatsApp</button>

                    {handoffOpen && (
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                            <div className="w-80 bg-white rounded-xl p-4 shadow-lg">
                                <h4 className="font-bold mb-2">Request Human Support</h4>
                                <input value={handoffName} onChange={(e) => setHandoffName(e.target.value)} placeholder="Your name" className="w-full border border-gray-200 rounded px-2 py-1 mb-2" />
                                <input value={handoffPhone} onChange={(e) => setHandoffPhone(e.target.value)} placeholder="Phone or WhatsApp number" className="w-full border border-gray-200 rounded px-2 py-1 mb-2" />
                                <textarea value={handoffNote} onChange={(e) => setHandoffNote(e.target.value)} placeholder="Short message" className="w-full border border-gray-200 rounded px-2 py-1 mb-2" />
                                <div className="flex gap-2 justify-end">
                                    <button onClick={() => setHandoffOpen(false)} className="px-3 py-1 rounded border">Cancel</button>
                                    <button onClick={handleSubmitHandoff} className="px-3 py-1 rounded bg-blue-600 text-white">Send</button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </motion.div>

            <motion.button onClick={() => setIsOpen((s) => !s)} whileTap={{ scale: 0.95 }} whileHover={{ scale: 1.06 }} className="relative w-16 h-16 bg-gradient-to-br from-[#3B82F6] to-[#2563EB] text-white rounded-full shadow-lg flex items-center justify-center">
                <motion.div animate={isOpen ? { rotate: 45 } : { rotate: 0 }} className="absolute"><svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.272-.099-.47-.148-.67.15-.23.381-.921 1.226-1.129 1.433-.206.207-.412.233-.71.066-.299-.149-1.263-.465-2.403-1.485-.889-.79-1.49-1.771-1.667-2.07-.18-.299-.02-.461.135-.611.135-.134.297-.331.446-.497.149-.166.198-.287.297-.478.099-.191.05-.358-.025-.477-.075-.118-.669-1.611-.916-2.206-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.946 1.347l-.355.202-.368-.074-1.585-.316 1.595 4.318.007.282-.26.423a9.84 9.84 0 003.285 6.052 9.855 9.855 0 004.872 1.68h.005c.554 0 1.092-.043 1.614-.135.499-.087 1.323-.413 1.833-1.12.342-.528.602-1.431.723-2.471.06-.719.051-1.612-.131-2.288-.167-.627-.45-1.215-.9-1.582-.451-.368-.954-.579-1.487-.614-.533-.035-1.116.135-1.522.36-.406.225-.844.577-1.155.923" /></svg></motion.div>
            </motion.button>
        </div>
    );
}
