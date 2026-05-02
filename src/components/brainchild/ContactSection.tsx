import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send, CheckCircle2, AlertCircle } from 'lucide-react';

export default function ContactSection() {
  // Status states: idle, sending, success, error
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');

    const formData = new FormData(e.currentTarget);
    const body = {
      user_name: String(formData.get('user_name') || ''),
      user_email: String(formData.get('user_email') || ''),
      child_name: String(formData.get('child_name') || ''),
      user_phone: String(formData.get('user_phone') || ''),
      message: String(formData.get('message') || ''),
    };

    try {
      const response = await fetch(import.meta.env.VITE_API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('success');
        (e.target as HTMLFormElement).reset();
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        console.error(data);
        setStatus('error');
      }
    } catch (error) {
      console.error("Submission error:", error);
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="bg-[#FFF5F7] py-24 px-6 md:px-12 lg:px-24 overflow-hidden relative">
      <div className="max-w-[1400px] mx-auto relative z-10">

        {/* Header Section */}
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-[11px] font-black tracking-[0.4em] uppercase text-primary mb-6 block"
          >
            Get In Touch
          </motion.span>
          <h2 className="text-5xl md:text-8xl font-heading font-black text-slate-900 leading-[0.85] tracking-tighter">
            Contact <span className="text-primary italic font-light">Us.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

          {/* Info Column */}
          <div className="lg:col-span-5 space-y-12">
            <div>
              <h3 className="text-3xl font-black text-slate-900 mb-8 tracking-tight">Reach Us Directly</h3>
              <div className="space-y-8">
                <ContactDetail
                  icon={<Phone className="w-5 h-5 text-blue-500" />}
                  label="Phone"
                  lines={["+234 706 117 5897", "+234 706 117 5897"]}
                />
                <ContactDetail
                  icon={<Mail className="w-5 h-5 text-rose-500" />}
                  label="Email"
                  lines={["info@brainchildintschools.com"]}
                />
                <ContactDetail
                  icon={<MapPin className="w-5 h-5 text-emerald-500" />}
                  label="Address"
                  lines={["No. 8 D.C Onyekwelu Street, Beside LomaLinda Estate, Enugu"]}
                />
              </div>
            </div>

            <div className="p-10 bg-white rounded-[2.5rem] border border-slate-100 shadow-xl shadow-primary/5">
              <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-4">School Hours</h4>
              <p className="text-slate-600 font-medium leading-relaxed">
                <span className="text-slate-900 font-black">Pre-school & KG:</span> 7:30am – 1:00pm daily<br />
                <span className="text-slate-900 font-black">Elementary 1-6:</span> 7:30am – 3:00pm (Mon-Thu)
              </p>
            </div>
          </div>

          {/* Form Column */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-[3.5rem] p-8 md:p-14 shadow-2xl shadow-primary/5 border border-white">
              <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <InputField label="Parent's Name" name="user_name" placeholder="e.g. Mrs. Okonkwo" required />
                <InputField label="Child's Name" name="child_name" placeholder="e.g. Chioma" />
                <InputField label="Email Address" name="user_email" type="email" placeholder="parent@email.com" required />
                <InputField label="Phone Number" name="user_phone" placeholder="+234 xxx xxx xxxx" required />

                <div className="md:col-span-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-3 block ml-2">Message</label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    placeholder="Tell us about your child's age, interests, or any questions you have..."
                    className="w-full bg-slate-50 border border-slate-100 rounded-3xl p-6 text-slate-900 text-sm focus:outline-none focus:ring-4 focus:ring-primary/10 focus:bg-white transition-all resize-none"
                  />
                </div>

                <div className="md:col-span-2">
                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className={`w-full py-7 rounded-[2rem] font-black uppercase text-[11px] tracking-[0.3em] transition-all flex items-center justify-center gap-3 shadow-xl ${status === 'success' ? 'bg-emerald-500 text-white' :
                        status === 'error' ? 'bg-rose-500 text-white' :
                          'bg-slate-900 text-white hover:bg-primary hover:-translate-y-1 shadow-slate-900/10 hover:shadow-primary/20'
                      }`}
                  >
                    {status === 'idle' && <><Send size={16} /> Send Message</>}
                    {status === 'sending' && "Processing..."}
                    {status === 'success' && <><CheckCircle2 size={16} /> Message Sent!</>}
                    {status === 'error' && <><AlertCircle size={16} /> Failed to Send</>}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Sub-components for cleaner code
function ContactDetail({ icon, label, lines }: { icon: React.ReactNode, label: string, lines: string[] }) {
  return (
    <div className="flex gap-6 group">
      <div className="w-14 h-14 rounded-2xl bg-white border border-slate-100 shadow-sm flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-500">
        {icon}
      </div>
      <div>
        <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 block mb-1">{label}</span>
        {lines.map((line, i) => (
          <p key={i} className="text-slate-900 font-bold text-base leading-tight">{line}</p>
        ))}
      </div>
    </div>
  );
}

function InputField({ label, ...props }: React.ComponentProps<'input'> & { label: string }) {
  return (
    <div>
      <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-3 block ml-2">{label}</label>
      <input
        {...props}
        className="w-full bg-slate-50 border border-slate-100 rounded-[1.5rem] p-6 text-slate-900 text-sm focus:outline-none focus:ring-4 focus:ring-primary/10 focus:bg-white transition-all"
      />
    </div>
  );
}