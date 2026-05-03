import { motion, AnimatePresence } from "framer-motion";
import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  FiX, FiSend, FiPhone, FiCalendar, FiFileText, FiUser,
  FiChevronRight, FiBarChart2, FiUsers, FiMessageCircle,
} from "react-icons/fi";
import { useNavigate } from "react-router-dom";

// ─── Constants ────────────────────────────────────────────────────────────────
const PHONE_NUMBER = "2347061175897";
const STORAGE_KEYS = {
  chat: "bc_chat_v3",
  leads: "bc_leads_v2",
  analytics: "bc_analytics_v2",
  profile: "bc_profile_v1",
};

// ─── Types ────────────────────────────────────────────────────────────────────
type MessageType = "user" | "bot";
type LeadCaptureStep = "name" | "age" | "done";
type TabId = "chat" | "leads" | "analytics";
type AgeGroup = "Pre-School" | "Nursery" | "Lower Grade" | "Upper Grade";

interface ChatLink {
  label: string;
  path?: string;
  url?: string;
}

interface Message {
  id: string;
  type: MessageType;
  text: string;
  links?: ChatLink[];
  richType?: "datePicker" | "agePicker" | "rating" | "leadForm" | "handoffForm";
  timestamp: Date;
}

interface Lead {
  name: string;
  ageGroup?: AgeGroup;
  phone?: string;
  note?: string;
  type?: "chat" | "handoff";
  time: string;
}

interface Analytics {
  totalChats: number;
  totalMessages: number;
  handoffs: number;
  tourBookings: number;
  brochureRequests: number;
  openCount: number;
  topTopics: Record<string, number>;
  satisfactionRatings: number[];
}

interface UserProfile {
  name: string | null;
  ageGroup: AgeGroup | null;
}

// ─── School data ──────────────────────────────────────────────────────────────
const SCHOOL = {
  name: "Brain Child Nursery and Primary School",
  phone: "+234 706 117 5897",
  email: "info@brainchildintschools.com",
  address: "No. 8 D.C Onyekwelu Street, Beside LomaLinda Estate, Enugu",
  brochureUrl: "/brochure.pdf",
  programs: [
    "Pre-School (Ages 1½–2)",
    "Nursery 1–3 (Ages 2½–5)",
    "Lower Grade (Ages 5½–8)",
    "Upper Grade (Ages 8½–11)",
  ],
  facilities: [
    "Air-conditioned classrooms",
    "Well-stocked library",
    "Internet-connected computer lab",
    "Mini science lab",
    "Music & dance studio",
    "Attractive playground",
  ],
};

const AGE_GROUPS: { label: string; sublabel: string; val: AgeGroup }[] = [
  { label: "Pre-School", sublabel: "Ages 1½–2", val: "Pre-School" },
  { label: "Nursery", sublabel: "Ages 2½–5", val: "Nursery" },
  { label: "Lower Grade", sublabel: "Ages 5½–8", val: "Lower Grade" },
  { label: "Upper Grade", sublabel: "Ages 8½–11", val: "Upper Grade" },
];

const SUGGESTED_QUESTIONS = [
  "Tell me about admissions",
  "What programs do you offer?",
  "What are the facilities like?",
  "How much are the fees?",
  "How do I book a campus tour?",
];

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

// ─── WhatsApp SVG path ────────────────────────────────────────────────────────
const WA_PATH =
  "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.272-.099-.47-.148-.67.15-.23.381-.921 1.226-1.129 1.433-.206.207-.412.233-.71.066-.299-.149-1.263-.465-2.403-1.485-.889-.79-1.49-1.771-1.667-2.07-.18-.299-.02-.461.135-.611.135-.134.297-.331.446-.497.149-.166.198-.287.297-.478.099-.191.05-.358-.025-.477-.075-.118-.669-1.611-.916-2.206-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.946 1.347l-.355.202-.368-.074-1.585-.316 1.595 4.318.007.282-.26.423a9.84 9.84 0 003.285 6.052 9.855 9.855 0 004.872 1.68h.005c.554 0 1.092-.043 1.614-.135.499-.087 1.323-.413 1.833-1.12.342-.528.602-1.431.723-2.471.06-.719.051-1.612-.131-2.288-.167-.627-.45-1.215-.9-1.582-.451-.368-.954-.579-1.487-.614-.533-.035-1.116.135-1.522.36-.406.225-.844.577-1.155.923";

// ─── Helpers ──────────────────────────────────────────────────────────────────
const fmt = (d: Date) => d.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
const uid = () => `${Date.now()}-${Math.random().toString(36).slice(2)}`;

function findLastIndex<T>(arr: T[], predicate: (item: T) => boolean): number {
  for (let i = arr.length - 1; i >= 0; i--) {
    if (predicate(arr[i])) return i;
  }
  return -1;
}

function useIsMobile() {
  const [v, setV] = useState(() => window.innerWidth < 640);
  useEffect(() => {
    const h = () => setV(window.innerWidth < 640);
    window.addEventListener("resize", h);
    return () => window.removeEventListener("resize", h);
  }, []);
  return v;
}

function loadJson<T>(key: string, fallback: T): T {
  try {
    const raw = localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : fallback;
  } catch {
    return fallback;
  }
}

function trackTopic(text: string, topics: Record<string, number>): Record<string, number> {
  const m = text.toLowerCase();
  const updated = { ...topics };
  if (/(admiss|enroll|apply|register)/.test(m)) updated.admissions = (updated.admissions || 0) + 1;
  else if (/(program|curriculum|class|grade)/.test(m)) updated.programs = (updated.programs || 0) + 1;
  else if (/(fee|cost|tuition|price)/.test(m)) updated.fees = (updated.fees || 0) + 1;
  else if (/(facilit|campus|lab|playground)/.test(m)) updated.facilities = (updated.facilities || 0) + 1;
  else if (/(contact|phone|email|address|location)/.test(m)) updated.contact = (updated.contact || 0) + 1;
  else updated.other = (updated.other || 0) + 1;
  return updated;
}

const DEFAULT_ANALYTICS: Analytics = {
  totalChats: 0, totalMessages: 0, handoffs: 0, tourBookings: 0,
  brochureRequests: 0, openCount: 0,
  topTopics: { admissions: 0, programs: 0, fees: 0, facilities: 0, contact: 0, other: 0 },
  satisfactionRatings: [],
};

// ─── Keyword-based response engine ───────────────────────────────────────────
function getBotReply(text: string, profile: UserProfile): string {
  const m = text.toLowerCase();
  const name = profile.name ? `, ${profile.name}` : "";

  if (/(admiss|enroll|apply|register|how do i join|how to apply)/.test(m))
    return `To apply${name}, visit our school in person at ${SCHOOL.address} or call us at ${SCHOOL.phone}. You can also download our brochure for full admission requirements. We'd love to welcome your child! 😊`;

  if (/(program|curriculum|class|grade|offer|course)/.test(m))
    return `We offer four programs${name}:\n• ${SCHOOL.programs.join("\n• ")}\n\nEach is designed to nurture your child's growth at every stage. Which age group is your child in?`;

  if (/(fee|cost|tuition|price|how much)/.test(m))
    return `Fees vary by program${name}. Please contact us directly at ${SCHOOL.phone} or visit the school for the current fee schedule. We also have a downloadable prospectus with full details! 📄`;

  if (/(facilit|campus|lab|playground|library|computer|music|science)/.test(m))
    return `Our facilities include${name}:\n• ${SCHOOL.facilities.join("\n• ")}\n\nWe believe a great environment is key to great learning! 🏫`;

  if (/(contact|phone|email|address|location|where|find you)/.test(m))
    return `You can reach us${name} at:\n📞 ${SCHOOL.phone}\n📧 ${SCHOOL.email}\n📍 ${SCHOOL.address}\n\nWe're open Mon–Fri, 8am–4pm.`;

  if (/(tour|visit|campus tour|see the school|come around)/.test(m))
    return `We'd love to show you around${name}! Tap the **Visit** button below to pick a date and time for your campus tour. 📅`;

  if (/(brochure|prospectus|pdf|download)/.test(m))
    return `Tap the **Brochure** button below to download our prospectus${name}. It covers programs, fees, and everything you need to know! 📄`;

  if (/(staff|teacher|speak to someone|human|person|talk to)/.test(m))
    return `Of course${name}! Tap the **Staff** button below and a team member will reach out to you via WhatsApp shortly. 👤`;

  if (/(hi|hello|hey|good morning|good afternoon|good evening)/.test(m))
    return `Hello${name}! 👋 Welcome to **${SCHOOL.name}**. How can I help you today? You can ask me about admissions, programs, fees, facilities, or booking a campus tour!`;

  if (/(thank|thanks|thank you)/.test(m))
    return `You're welcome${name}! 😊 Feel free to ask if you have any other questions. We look forward to welcoming your child to Brain Child!`;

  return `Thanks for your message${name}! For the best answer, please call us at **${SCHOOL.phone}** or tap **Staff** below to chat with our team directly. We're happy to help! 😊`;
}

// ─── Sub-components ───────────────────────────────────────────────────────────

function TypingBubble() {
  return (
    <div style={{ display: "flex", alignItems: "flex-start" }}>
      <div style={{
        background: "#fff", border: `1px solid ${G.border}`,
        borderRadius: "16px 16px 16px 4px", padding: "10px 14px",
        boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
        display: "inline-flex", gap: 4, alignItems: "center",
      }}>
        {[0, 1, 2].map((i) => (
          <motion.span key={i}
            animate={{ y: [0, -5, 0] }}
            transition={{ delay: i * 0.14, repeat: Infinity, duration: 0.65, ease: "easeInOut" }}
            style={{ width: 7, height: 7, borderRadius: "50%", background: G.d, display: "block" }}
          />
        ))}
      </div>
    </div>
  );
}

function AgePickerCard({ onSelect }: { onSelect: (val: AgeGroup) => void }) {
  const [selected, setSelected] = useState<AgeGroup | null>(null);
  return (
    <div style={{
      background: "#fff", border: `1px solid ${G.border}`, borderRadius: 12,
      padding: 12, maxWidth: "82%",
    }}>
      <p style={{ fontSize: 12, fontWeight: 700, color: G.header, marginBottom: 8 }}>
        Select your child's age group:
      </p>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 6 }}>
        {AGE_GROUPS.map((g) => (
          <button key={g.val} onClick={() => { setSelected(g.val); onSelect(g.val); }}
            style={{
              background: selected === g.val ? G.userBubble : "#fff",
              border: `1.5px solid ${selected === g.val ? G.d : G.border}`,
              borderRadius: 10, padding: "8px 6px", fontSize: 11, fontWeight: 600,
              color: G.dk, cursor: "pointer", textAlign: "center", lineHeight: 1.4,
              transition: "all 0.15s",
            }}>
            <div>{g.label}</div>
            <div style={{ fontWeight: 400, color: "#9ca3af", fontSize: 10 }}>{g.sublabel}</div>
          </button>
        ))}
      </div>
    </div>
  );
}

function DatePickerCard({ onBook }: { onBook: (date: string, time: string) => void }) {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("9:00 AM");
  const times = ["9:00 AM", "10:00 AM", "11:00 AM", "1:00 PM", "2:00 PM", "3:00 PM"];
  const today = new Date().toISOString().split("T")[0];

  return (
    <div style={{
      background: "#fff", border: `1px solid ${G.border}`, borderRadius: 12,
      padding: 12, maxWidth: "82%",
    }}>
      <p style={{ fontSize: 12, fontWeight: 700, color: G.header, marginBottom: 8 }}>
        📅 Pick a date & time:
      </p>
      <input type="date" min={today} value={date} onChange={(e) => setDate(e.target.value)}
        style={inputStyle} />
      <select value={time} onChange={(e) => setTime(e.target.value)} style={{ ...inputStyle, marginTop: 6 }}>
        {times.map((t) => <option key={t}>{t}</option>)}
      </select>
      <button onClick={() => date && onBook(date, time)}
        style={{
          marginTop: 8, width: "100%",
          background: date ? `linear-gradient(135deg, ${G.p}, ${G.dk})` : "#e5e7eb",
          color: date ? "#fff" : "#9ca3af", border: "none", borderRadius: 8,
          padding: "8px", fontSize: 12, fontWeight: 700,
          cursor: date ? "pointer" : "default", transition: "all 0.2s",
        }}>
        Confirm Visit ✓
      </button>
    </div>
  );
}

function RatingCard({ onRate }: { onRate: (n: number) => void }) {
  const [hovered, setHovered] = useState(0);
  const [rated, setRated] = useState(0);

  return (
    <div style={{
      background: "#fff", border: `1px solid ${G.border}`, borderRadius: 12,
      padding: 12, maxWidth: "82%", textAlign: "center",
    }}>
      <p style={{ fontSize: 12, color: "#6b7280", marginBottom: 8 }}>How's our chat going?</p>
      <div style={{ display: "flex", justifyContent: "center", gap: 6 }}>
        {[1, 2, 3, 4, 5].map((i) => (
          <motion.span key={i}
            whileHover={!rated ? { scale: 1.25 } : {}}
            whileTap={!rated ? { scale: 0.9 } : {}}
            onClick={() => { if (!rated) { setRated(i); onRate(i); } }}
            onMouseEnter={() => !rated && setHovered(i)}
            onMouseLeave={() => !rated && setHovered(0)}
            style={{
              fontSize: 24, cursor: rated ? "default" : "pointer",
              filter: i <= (hovered || rated) ? "grayscale(0)" : "grayscale(1)",
              transition: "filter 0.15s",
            }}>
            ⭐
          </motion.span>
        ))}
      </div>
    </div>
  );
}

function HandoffForm({ onSubmit }: { onSubmit: (phone: string, note: string) => void }) {
  const [phone, setPhone] = useState("");
  const [note, setNote] = useState("");
  return (
    <div style={{
      background: "#fff", border: `1px solid ${G.border}`, borderRadius: 12,
      padding: 12, maxWidth: "82%",
    }}>
      <p style={{ fontSize: 12, fontWeight: 700, color: G.header, marginBottom: 8 }}>
        👤 Connect with a staff member:
      </p>
      <input type="tel" placeholder="Your WhatsApp number" value={phone}
        onChange={(e) => setPhone(e.target.value)} style={inputStyle} />
      <input type="text" placeholder="Brief message (optional)" value={note}
        onChange={(e) => setNote(e.target.value)} style={{ ...inputStyle, marginTop: 6 }} />
      <button onClick={() => phone.trim() && onSubmit(phone.trim(), note.trim())}
        style={{
          marginTop: 8, width: "100%",
          background: `linear-gradient(135deg, ${G.p}, ${G.dk})`,
          color: "#fff", border: "none", borderRadius: 8,
          padding: "8px", fontSize: 12, fontWeight: 700, cursor: "pointer",
        }}>
        Send Request
      </button>
    </div>
  );
}

const inputStyle: React.CSSProperties = {
  width: "100%", border: `1.5px solid ${G.border}`, borderRadius: 8,
  padding: "7px 10px", fontSize: 12, outline: "none",
  background: G.bubble, color: "#1c1c1e", display: "block",
};

// ─── Analytics Tab ────────────────────────────────────────────────────────────
function AnalyticsTab({ analytics, leads }: { analytics: Analytics; leads: Lead[] }) {
  const avg = analytics.satisfactionRatings.length
    ? (analytics.satisfactionRatings.reduce((a, b) => a + b, 0) / analytics.satisfactionRatings.length).toFixed(1)
    : "—";
  const maxTopic = Math.max(...Object.values(analytics.topTopics), 1);

  const StatRow = ({ label, val }: { label: string; val: string | number }) => (
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "5px 0", borderBottom: `1px solid ${G.bubble}` }}>
      <span style={{ fontSize: 12, color: "#6b7280" }}>{label}</span>
      <span style={{ fontSize: 13, fontWeight: 700, color: G.dk }}>{val}</span>
    </div>
  );

  return (
    <div style={{ flex: 1, overflowY: "auto", padding: 14, background: "#f6fef9" }}>
      <div style={cardStyle}>
        <div style={cardTitle}>📊 Overview</div>
        <StatRow label="Total chats" val={analytics.totalChats} />
        <StatRow label="Messages exchanged" val={analytics.totalMessages} />
        <StatRow label="Human handoffs" val={analytics.handoffs} />
        <StatRow label="Tour bookings" val={analytics.tourBookings} />
        <StatRow label="Brochure requests" val={analytics.brochureRequests} />
        <StatRow label="Widget opens" val={analytics.openCount} />
        <StatRow label="Avg satisfaction" val={`${avg} ⭐`} />
      </div>
      <div style={cardStyle}>
        <div style={cardTitle}>🔍 Top Topics</div>
        {Object.entries(analytics.topTopics).map(([k, v]) => (
          <div key={k} style={{ marginBottom: 8 }}>
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: 11, color: "#6b7280", marginBottom: 3 }}>
              <span style={{ textTransform: "capitalize" }}>{k}</span>
              <span style={{ fontWeight: 600 }}>{v}</span>
            </div>
            <div style={{ height: 6, background: G.bubble, borderRadius: 3, overflow: "hidden" }}>
              <motion.div initial={{ width: 0 }} animate={{ width: `${Math.round(v / maxTopic * 100)}%` }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                style={{ height: "100%", background: `linear-gradient(90deg, ${G.p}, ${G.dk})`, borderRadius: 3 }} />
            </div>
          </div>
        ))}
      </div>
      <div style={cardStyle}>
        <div style={cardTitle}>👥 Leads</div>
        <StatRow label="Total captured" val={leads.length} />
        <StatRow label="Last 24 hours" val={leads.filter((l) => Date.now() - new Date(l.time).getTime() < 86400000).length} />
      </div>
    </div>
  );
}

// ─── Leads Tab ────────────────────────────────────────────────────────────────
function LeadsTab({ leads }: { leads: Lead[] }) {
  if (leads.length === 0) {
    return (
      <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", color: "#9ca3af", gap: 8, padding: 24 }}>
        <FiUsers size={32} />
        <p style={{ fontSize: 13 }}>No leads yet.</p>
        <p style={{ fontSize: 11, textAlign: "center" }}>Visitors who share their details appear here.</p>
      </div>
    );
  }
  return (
    <div style={{ flex: 1, overflowY: "auto", padding: 14, background: "#f6fef9" }}>
      {[...leads].reverse().map((l, i) => (
        <div key={i} style={{ ...cardStyle, marginBottom: 8 }}>
          <div style={{ fontWeight: 700, color: G.header, fontSize: 13, marginBottom: 4 }}>{l.name}</div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 5, fontSize: 11, color: "#6b7280", marginBottom: l.phone ? 8 : 0 }}>
            <span>{new Date(l.time).toLocaleDateString("en-NG", { day: "numeric", month: "short", year: "numeric" })}</span>
            {l.ageGroup && <span style={tagStyle}>{l.ageGroup}</span>}
            {l.type && <span style={tagStyle}>{l.type}</span>}
            {l.phone && <span>📞 {l.phone}</span>}
          </div>
          {l.note && <p style={{ fontSize: 11, color: "#6b7280", fontStyle: "italic", marginBottom: 6 }}>"{l.note}"</p>}
          {l.phone && (
            <button onClick={() => window.open(`https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(`Hi ${l.name},`)}`, "_blank")}
              style={{ fontSize: 11, background: G.p, color: "#fff", border: "none", borderRadius: 6, padding: "3px 10px", cursor: "pointer", fontWeight: 600 }}>
              WhatsApp →
            </button>
          )}
        </div>
      ))}
    </div>
  );
}

const cardStyle: React.CSSProperties = {
  background: "#fff", border: `1px solid ${G.border}`, borderRadius: 12, padding: 12, marginBottom: 10,
};
const cardTitle: React.CSSProperties = {
  fontSize: 11, fontWeight: 700, color: G.header, textTransform: "uppercase",
  letterSpacing: "0.05em", marginBottom: 10,
};
const tagStyle: React.CSSProperties = {
  background: G.bubble, border: `1px solid ${G.border}`, borderRadius: 20,
  padding: "2px 8px", fontSize: 10, color: G.dk, fontWeight: 600,
};

// ─── Main Widget ──────────────────────────────────────────────────────────────
export function WhatsAppWidget(): JSX.Element {
  const navigate = useNavigate();
  const isMobile = useIsMobile();
  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<TabId>("chat");
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [pulseKey, setPulseKey] = useState(0);
  const [badgeCount, setBadgeCount] = useState(1);
  const [badgeBump, setBadgeBump] = useState(false);
  const [showNotif, setShowNotif] = useState(false);

  const [leadStep, setLeadStep] = useState<LeadCaptureStep>(() => {
    const saved = loadJson<UserProfile>(STORAGE_KEYS.profile, { name: null, ageGroup: null });
    if (saved.name && saved.ageGroup) return "done";
    if (saved.name) return "age";
    return "name";
  });
  const [leadNameInput, setLeadNameInput] = useState("");
  const [leadCaptureActive, setLeadCaptureActive] = useState(false);

  const [profile, setProfile] = useState<UserProfile>(() =>
    loadJson<UserProfile>(STORAGE_KEYS.profile, { name: null, ageGroup: null })
  );

  const [messages, setMessages] = useState<Message[]>(() =>
    loadJson<Message[]>(STORAGE_KEYS.chat, []).map((m) => ({
      ...m, timestamp: new Date(m.timestamp),
    }))
  );

  const [leads, setLeads] = useState<Lead[]>(() => loadJson<Lead[]>(STORAGE_KEYS.leads, []));
  const [analytics, setAnalytics] = useState<Analytics>(() =>
    loadJson<Analytics>(STORAGE_KEYS.analytics, DEFAULT_ANALYTICS)
  );

  const [ratingShown, setRatingShown] = useState(false);

  useEffect(() => { localStorage.setItem(STORAGE_KEYS.chat, JSON.stringify(messages)); }, [messages]);
  useEffect(() => { localStorage.setItem(STORAGE_KEYS.leads, JSON.stringify(leads)); }, [leads]);
  useEffect(() => { localStorage.setItem(STORAGE_KEYS.analytics, JSON.stringify(analytics)); }, [analytics]);
  useEffect(() => { localStorage.setItem(STORAGE_KEYS.profile, JSON.stringify(profile)); }, [profile]);

  useEffect(() => { messagesEndRef.current?.scrollIntoView({ behavior: "smooth" }); }, [messages, isTyping]);
  useEffect(() => { if (isOpen) setTimeout(() => inputRef.current?.focus(), 320); }, [isOpen]);

  useEffect(() => {
    if (isOpen) return;
    const t = setInterval(() => setPulseKey((k) => k + 1), 6000);
    return () => clearInterval(t);
  }, [isOpen]);

  useEffect(() => {
    const t = setTimeout(() => {
      if (!isOpen) { setShowNotif(true); bumpBadge(); }
    }, 8000);
    return () => clearTimeout(t);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  const bumpBadge = useCallback(() => {
    setBadgeCount((c) => c + 1);
    setBadgeBump(true);
    setTimeout(() => setBadgeBump(false), 400);
  }, []);

  const updateAnalytics = useCallback((patch: Partial<Analytics>) => {
    setAnalytics((a) => ({ ...a, ...patch }));
  }, []);

  const addLead = useCallback((lead: Lead) => {
    setLeads((l) => [...l, lead]);
  }, []);

  const addMessage = useCallback((msg: Omit<Message, "id" | "timestamp">) => {
    setMessages((prev) => [...prev, { ...msg, id: uid(), timestamp: new Date() }]);
  }, []);

  const addBotMessage = useCallback((text: string, links?: ChatLink[], richType?: Message["richType"]) => {
    addMessage({ type: "bot", text, links, richType });
  }, [addMessage]);

  const addUserMessage = useCallback((text: string) => {
    addMessage({ type: "user", text });
    updateAnalytics({ totalMessages: analytics.totalMessages + 1 });
  }, [addMessage, analytics.totalMessages, updateAnalytics]);

  const openPanel = useCallback(() => {
    setIsOpen(true);
    setShowNotif(false);
    setBadgeCount(0);
    updateAnalytics({ openCount: analytics.openCount + 1 });

    if (messages.length === 0) {
      updateAnalytics({ totalChats: analytics.totalChats + 1 });
      setTimeout(() => {
        addBotMessage(`Hello! 👋 Welcome to **${SCHOOL.name}**.\n\nBefore we chat, may I have your name?`);
        setLeadCaptureActive(true);
        setLeadStep("name");
      }, 350);
    }
  }, [messages.length, analytics, updateAnalytics, addBotMessage]);

  const closePanel = useCallback(() => {
    setIsOpen(false);
    if (messages.length > 2 && !ratingShown) {
      setRatingShown(true);
      setTimeout(() => addBotMessage("Before you go — how was your experience? ⭐", undefined, "rating"), 500);
    }
  }, [messages.length, ratingShown, addBotMessage]);

  const submitName = useCallback(() => {
    const name = leadNameInput.trim();
    if (!name) return;
    setProfile((p) => ({ ...p, name }));
    addUserMessage(name);
    setLeadStep("age");
    setTimeout(() => addBotMessage(`Nice to meet you, ${name}! 😊 Which age group does your child fall in?`, undefined, "agePicker"), 600);
  }, [leadNameInput, addUserMessage, addBotMessage]);

  const submitAge = useCallback((ageGroup: AgeGroup) => {
    setProfile((p) => ({ ...p, ageGroup }));
    addUserMessage(ageGroup);
    setLeadCaptureActive(false);
    setLeadStep("done");

    addLead({ name: profile.name ?? "Unknown", ageGroup, type: "chat", time: new Date().toISOString() });

    const prog = SCHOOL.programs.find((p) => p.startsWith(ageGroup)) ?? ageGroup;
    setTimeout(() => addBotMessage(
      `Perfect! 🎉 The **${prog}** program sounds like a great fit.\n\nI'm Brain Child's AI assistant — ask me anything about our admissions, programs, facilities, or fees!`
    ), 600);
  }, [profile, addUserMessage, addBotMessage, addLead]);

  const sendMessage = useCallback((text = inputValue) => {
    const t = text.trim();
    if (!t) return;
    setInputValue("");
    addUserMessage(t);
    setAnalytics((a) => ({ ...a, topTopics: trackTopic(t, a.topTopics) }));

    const reply = getBotReply(t, profile);
    setTimeout(() => {
      addBotMessage(reply);
      const botCount = messages.filter((m) => m.type === "bot").length;
      if (botCount >= 4 && !ratingShown) {
        setRatingShown(true);
        setTimeout(() => addBotMessage("How's our chat going so far?", undefined, "rating"), 1200);
      }
    }, 500);
  }, [inputValue, addUserMessage, profile, messages, ratingShown, addBotMessage]);

  const handleAction = useCallback((type: string) => {
    if (type === "call") {
      addBotMessage(`📞 Reach us at **${SCHOOL.phone}**. Lines open Mon–Fri, 8am–4pm.`);
      window.open(`tel:+${PHONE_NUMBER}`);
    } else if (type === "visit") {
      addBotMessage("Let's schedule your campus tour! Pick a date and time that works for you:", undefined, "datePicker");
    } else if (type === "brochure") {
      setAnalytics((a) => ({ ...a, brochureRequests: a.brochureRequests + 1 }));
      addBotMessage("📄 Here's our digital brochure! You can also collect one at our front office.", [
        { label: "Download Brochure (PDF)", url: SCHOOL.brochureUrl },
      ]);
    } else if (type === "staff") {
      addBotMessage("Fill in your details and a staff member will reach out shortly:", undefined, "handoffForm");
    }
  }, [addBotMessage]);

  const handleTourBook = useCallback((date: string, time: string) => {
    const formatted = new Date(date).toLocaleDateString("en-NG", { weekday: "long", year: "numeric", month: "long", day: "numeric" });
    addUserMessage(`Book visit: ${formatted} at ${time}`);
    setAnalytics((a) => ({ ...a, tourBookings: a.tourBookings + 1 }));
    addBotMessage(
      `✅ Tour request noted for **${formatted} at ${time}**!\n\n${profile.name ? profile.name + ", a" : "A"} staff member will confirm via WhatsApp shortly. We look forward to welcoming you! 🏫`
    );
    const waText = `TOUR BOOKING\nName: ${profile.name ?? "Visitor"}\nAge Group: ${profile.ageGroup ?? "Not specified"}\nDate: ${formatted}\nTime: ${time}`;
    window.open(`https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(waText)}`, "_blank");
  }, [addUserMessage, addBotMessage, profile]);

  const handleHandoff = useCallback((phone: string, note: string) => {
    addUserMessage("Requesting staff support...");
    setAnalytics((a) => ({ ...a, handoffs: a.handoffs + 1 }));
    addLead({ name: profile.name ?? "Unknown", phone, ageGroup: profile.ageGroup ?? undefined, note, type: "handoff", time: new Date().toISOString() });
    addBotMessage(`Got it! A staff member will reach out at **${phone}** shortly. You can also continue on WhatsApp now.`);
    const summary = `HANDOFF REQUEST\nName: ${profile.name ?? "Unknown"}\nPhone: ${phone}\nAge Group: ${profile.ageGroup ?? "Unknown"}\nMessage: ${note || "none"}`;
    window.open(`https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(summary)}`, "_blank");
  }, [addUserMessage, addBotMessage, addLead, profile]);

  const handleRating = useCallback((n: number) => {
    setAnalytics((a) => ({ ...a, satisfactionRatings: [...a.satisfactionRatings, n] }));
    const msgs = ["Thanks for the feedback!", "We'll keep improving!", "Good to know, thanks!", "Great to hear! 😊", "Wonderful! Thank you so much! 🌟"];
    setTimeout(() => addBotMessage(msgs[n - 1] ?? "Thank you! 🙏"), 400);
  }, [addBotMessage]);

  const openWhatsApp = useCallback(() => {
    const history = messages.map((m) => `${m.type === "user" ? "Me" : "Support"}: ${m.text}`).join("\n---\n");
    window.open(`https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(history.slice(0, 1500))}`, "_blank");
  }, [messages]);

  const panelW = isMobile ? "calc(100vw - 2rem)" : "22rem";
  const panelBottom = isMobile ? "5rem" : "5.25rem";
  const panelRight = isMobile ? "1rem" : "0";
  const panelLeft = isMobile ? "1rem" : "auto";

  const TABS: { id: TabId; label: string; icon: React.ReactNode }[] = [
    { id: "chat", label: "Chat", icon: <FiMessageCircle size={12} /> },
    { id: "leads", label: "Leads", icon: <FiUsers size={12} /> },
    { id: "analytics", label: "Stats", icon: <FiBarChart2 size={12} /> },
  ];

  const renderRich = (msg: Message, idx: number) => {
    const isLatestOfType = findLastIndex(messages, (m) => m.richType === msg.richType) === idx;
    if (!isLatestOfType) return null;

    if (msg.richType === "agePicker" && leadStep === "age") {
      return <AgePickerCard onSelect={submitAge} />;
    }
    if (msg.richType === "datePicker") {
      return <DatePickerCard onBook={handleTourBook} />;
    }
    if (msg.richType === "rating") {
      return <RatingCard onRate={handleRating} />;
    }
    if (msg.richType === "handoffForm") {
      return <HandoffForm onSubmit={handleHandoff} />;
    }
    return null;
  };

  return (
    <div style={{ position: "fixed", bottom: "1.5rem", right: "1.5rem", zIndex: 9999 }}>

      <AnimatePresence>
        {showNotif && !isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ type: "spring", stiffness: 400, damping: 28 }}
            style={{
              position: "fixed", bottom: 100, right: 90,
              background: "#fff", border: `1px solid ${G.border}`,
              borderRadius: 12, padding: "10px 14px",
              boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
              display: "flex", alignItems: "center", gap: 10,
              maxWidth: 220, zIndex: 9998,
            }}>
            <span style={{ fontSize: 20 }}>👋</span>
            <p style={{ fontSize: 12, color: G.header, fontWeight: 500, lineHeight: 1.4 }}>
              Hi! Any questions about admissions?
            </p>
            <button onClick={() => setShowNotif(false)}
              style={{ background: "none", border: "none", cursor: "pointer", fontSize: 18, color: "#9ca3af", flexShrink: 0 }}>
              ×
            </button>
          </motion.div>
        )}
      </AnimatePresence>

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
              background: "#fff", borderRadius: 20, overflow: "hidden",
              display: "flex", flexDirection: "column",
              boxShadow: "0 24px 64px rgba(0,0,0,0.14), 0 4px 16px rgba(0,0,0,0.08)",
              border: "1px solid rgba(0,0,0,0.055)",
            }}>

            <div style={{ background: "linear-gradient(160deg, #064e3b 0%, #065f46 100%)", padding: "14px 14px 0", flexShrink: 0 }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
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
                    <div style={{ color: "#fff", fontWeight: 700, fontSize: 14 }}>Brain Child Support</div>
                    <div style={{ color: "rgba(255,255,255,0.6)", fontSize: 11, marginTop: 2, display: "flex", alignItems: "center", gap: 5 }}>
                      <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#4ade80", display: "inline-block" }} />
                      Online · AI-powered
                    </div>
                  </div>
                </div>
                <button onClick={closePanel} style={{
                  width: 30, height: 30, borderRadius: "50%", border: "none",
                  background: "rgba(255,255,255,0.1)", cursor: "pointer",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: "rgba(255,255,255,0.75)", transition: "background 0.15s",
                }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.2)")}
                  onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.1)")}
                ><FiX size={16} /></button>
              </div>

              <div style={{ display: "flex", background: "rgba(255,255,255,0.08)", margin: "10px 0 0", borderRadius: 8, padding: 3, gap: 2 }}>
                {TABS.map((tab) => (
                  <button key={tab.id} onClick={() => setActiveTab(tab.id)}
                    style={{
                      flex: 1, padding: "5px 4px", border: "none",
                      background: activeTab === tab.id ? "rgba(255,255,255,0.18)" : "transparent",
                      color: activeTab === tab.id ? "#fff" : "rgba(255,255,255,0.6)",
                      fontSize: 10, fontWeight: 600, cursor: "pointer", borderRadius: 6,
                      transition: "all 0.15s", display: "flex", alignItems: "center", justifyContent: "center", gap: 4,
                    }}>
                    {tab.icon}{tab.label}
                  </button>
                ))}
              </div>
            </div>

            {activeTab === "chat" && (
              <>
                <div style={{ flex: 1, overflowY: "auto", padding: 14, background: "#f6fef9", display: "flex", flexDirection: "column", gap: 8 }}>
                  {messages.map((msg, idx) => {
                    const isUser = msg.type === "user";
                    const showTime = idx === messages.length - 1 || messages[idx + 1]?.type !== msg.type;
                    const richEl = renderRich(msg, idx);
                    return (
                      <motion.div key={msg.id}
                        initial={{ opacity: 0, y: 8, scale: 0.97 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        style={{ display: "flex", flexDirection: "column", alignItems: isUser ? "flex-end" : "flex-start" }}>
                        <div style={{
                          maxWidth: "82%", padding: "9px 12px",
                          borderRadius: isUser ? "16px 16px 4px 16px" : "16px 16px 16px 4px",
                          fontSize: 13, lineHeight: 1.55, whiteSpace: "pre-wrap", wordBreak: "break-word",
                          background: isUser ? G.userBubble : "#fff",
                          color: isUser ? G.text : "#1c1c1e",
                          boxShadow: isUser ? "none" : "0 1px 3px rgba(0,0,0,0.06)",
                          border: isUser ? "none" : `1px solid ${G.border}`,
                        }}>
                          {msg.text.split(/(\*\*[^*]+\*\*)/).map((part, i) =>
                            part.startsWith("**") && part.endsWith("**")
                              ? <strong key={i}>{part.slice(2, -2)}</strong>
                              : part
                          )}
                          {msg.links && (
                            <div style={{ marginTop: 7, display: "flex", flexWrap: "wrap", gap: 4 }}>
                              {msg.links.map((l, i) => (
                                <button key={i}
                                  onClick={() => l.url ? window.open(l.url, "_blank") : l.path && navigate(l.path)}
                                  style={{
                                    fontSize: 11, background: G.dk, color: "#fff",
                                    border: "none", borderRadius: 6, padding: "3px 9px",
                                    cursor: "pointer", fontWeight: 600, display: "flex", alignItems: "center", gap: 3,
                                  }}>
                                  {l.label}<FiChevronRight size={9} />
                                </button>
                              ))}
                            </div>
                          )}
                        </div>
                        {richEl && <div style={{ marginTop: 4 }}>{richEl}</div>}
                        {showTime && (
                          <span style={{ fontSize: 10, color: "#9ca3af", marginTop: 3, paddingLeft: isUser ? 0 : 4, paddingRight: isUser ? 4 : 0 }}>
                            {fmt(msg.timestamp)}
                          </span>
                        )}
                      </motion.div>
                    );
                  })}

                  {leadCaptureActive && leadStep === "name" && (
                    <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
                      style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
                      <div style={{ background: "#fff", border: `1px solid ${G.border}`, borderRadius: 12, padding: 12, maxWidth: "82%" }}>
                        <input
                          autoFocus
                          placeholder="Your full name"
                          value={leadNameInput}
                          onChange={(e) => setLeadNameInput(e.target.value)}
                          onKeyDown={(e) => e.key === "Enter" && submitName()}
                          style={inputStyle}
                        />
                        <button onClick={submitName}
                          style={{
                            marginTop: 8, width: "100%",
                            background: `linear-gradient(135deg, ${G.p}, ${G.dk})`,
                            color: "#fff", border: "none", borderRadius: 8,
                            padding: "8px", fontSize: 12, fontWeight: 700, cursor: "pointer",
                          }}>
                          Continue →
                        </button>
                      </div>
                    </motion.div>
                  )}

                  <AnimatePresence>
                    {isTyping && (
                      <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
                        <TypingBubble />
                      </motion.div>
                    )}
                  </AnimatePresence>
                  <div ref={messagesEndRef} />
                </div>

                {leadStep === "done" && messages.length < 8 && (
                  <div style={{ padding: "8px 12px 6px", background: "#fff", borderTop: `1px solid ${G.border}`, flexShrink: 0 }}>
                    <p style={{ fontSize: 10, color: "#9ca3af", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.07em", marginBottom: 5 }}>
                      Quick questions
                    </p>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 4 }}>
                      {SUGGESTED_QUESTIONS.map((q) => (
                        <button key={q} onClick={() => sendMessage(q)}
                          style={{
                            fontSize: 11, padding: "4px 10px",
                            background: G.bubble, color: G.dk,
                            border: `1px solid ${G.border}`, borderRadius: 100,
                            cursor: "pointer", fontWeight: 500, transition: "all 0.15s",
                          }}
                          onMouseEnter={(e) => { e.currentTarget.style.background = G.border; }}
                          onMouseLeave={(e) => { e.currentTarget.style.background = G.bubble; }}>
                          {q}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                <div style={{ padding: "10px 12px", background: "#fff", borderTop: `1px solid ${G.border}`, flexShrink: 0 }}>
                  <div style={{ display: "flex", gap: 8, marginBottom: 8, alignItems: "center" }}>
                    <input ref={inputRef} value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      onKeyDown={(e) => e.key === "Enter" && !isTyping && sendMessage()}
                      placeholder={leadStep === "done" ? "Type a message…" : "Complete the form above first"}
                      disabled={leadStep !== "done"}
                      style={{
                        flex: 1, border: `1.5px solid ${G.border}`, borderRadius: 100,
                        padding: "8px 14px", fontSize: 13, outline: "none",
                        background: leadStep !== "done" ? "#f9fafb" : G.bubble,
                        color: "#1c1c1e", transition: "border-color 0.15s",
                        opacity: leadStep !== "done" ? 0.6 : 1,
                      }}
                      onFocus={(e) => (e.currentTarget.style.borderColor = G.d)}
                      onBlur={(e) => (e.currentTarget.style.borderColor = G.border)}
                    />
                    <motion.button onClick={() => sendMessage()} disabled={!inputValue.trim() || isTyping}
                      whileTap={inputValue.trim() ? { scale: 0.88 } : {}}
                      style={{
                        width: 38, height: 38, borderRadius: "50%", border: "none", flexShrink: 0,
                        background: inputValue.trim() && !isTyping ? "linear-gradient(135deg, #22c55e, #15803d)" : "#e5e7eb",
                        color: inputValue.trim() && !isTyping ? "#fff" : "#9ca3af",
                        cursor: inputValue.trim() && !isTyping ? "pointer" : "default",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        transition: "background 0.2s",
                      }}>
                      <FiSend size={15} />
                    </motion.button>
                  </div>

                  <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 5, marginBottom: 8 }}>
                    {[
                      { icon: <FiPhone size={13} />, label: "Call", key: "call" },
                      { icon: <FiCalendar size={13} />, label: "Visit", key: "visit" },
                      { icon: <FiFileText size={13} />, label: "Brochure", key: "brochure" },
                      { icon: <FiUser size={13} />, label: "Staff", key: "staff" },
                    ].map(({ icon, label, key }) => (
                      <button key={key} onClick={() => handleAction(key)}
                        style={{
                          display: "flex", flexDirection: "column", alignItems: "center", gap: 3,
                          padding: "7px 4px", border: `1.5px solid ${G.border}`, borderRadius: 10,
                          background: "#fff", color: G.dk, cursor: "pointer", fontSize: 10,
                          fontWeight: 600, transition: "all 0.15s",
                        }}
                        onMouseEnter={(e) => { e.currentTarget.style.background = G.bubble; e.currentTarget.style.borderColor = G.d; }}
                        onMouseLeave={(e) => { e.currentTarget.style.background = "#fff"; e.currentTarget.style.borderColor = G.border; }}>
                        <span style={{ color: G.d, display: "flex" }}>{icon}</span>
                        {label}
                      </button>
                    ))}
                  </div>

                  <button onClick={openWhatsApp}
                    style={{
                      width: "100%",
                      background: "linear-gradient(135deg, #22c55e 0%, #16a34a 55%, #15803d 100%)",
                      color: "#fff", border: "none", borderRadius: 10,
                      padding: "9px", fontSize: 13, fontWeight: 700, cursor: "pointer",
                      display: "flex", alignItems: "center", justifyContent: "center", gap: 7,
                      transition: "opacity 0.15s",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.9")}
                    onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}>
                    <svg width="16" height="16" fill="white" viewBox="0 0 24 24"><path d={WA_PATH} /></svg>
                    Continue on WhatsApp
                  </button>
                </div>
              </>
            )}

            {activeTab === "leads" && <LeadsTab leads={leads} />}
            {activeTab === "analytics" && <AnalyticsTab analytics={analytics} leads={leads} />}
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {!isOpen && badgeCount > 0 && (
          <motion.div
            key={badgeCount}
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{ scale: badgeBump ? 1.4 : 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ type: "spring", stiffness: 500, damping: 22 }}
            style={{
              position: "absolute", top: -4, right: -4,
              minWidth: 18, height: 18, borderRadius: 9,
              background: "#ef4444", color: "#fff",
              fontSize: 10, fontWeight: 800,
              display: "flex", alignItems: "center", justifyContent: "center",
              border: "2.5px solid #fff", padding: "0 3px", zIndex: 1, pointerEvents: "none",
            }}>
            {badgeCount}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button onClick={isOpen ? closePanel : openPanel}
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