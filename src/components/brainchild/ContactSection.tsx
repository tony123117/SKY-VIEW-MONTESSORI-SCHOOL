import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { AnimatedSection } from './AnimatedSection';

export default function ContactSection() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');
    const formData = new FormData(e.currentTarget);
    const form = e.currentTarget;
    const body = {
      user_name: String(formData.get('user_name') || ''),
      user_email: String(formData.get('user_email') || ''),
      child_name: String(formData.get('child_name') || ''),
      user_phone: String(formData.get('user_phone') || ''),
      message: String(formData.get('message') || ''),
    };
    try {
      const res = await fetch('https://brainchild-backend-1pud.vercel.app/api/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });
      if (!res.ok) throw new Error('Network error');
      setStatus('success');
      form.reset();
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      console.error('Submission error:', error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <section
      id="contact"
      className="relative py-24 md:py-32 px-4 md:px-12 lg:px-24 overflow-hidden"
      style={{ backgroundColor: '#FFFFFF' }}
    >
      {/* Subtle top wash */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 50% at 50% 0%, rgba(155,28,44,0.04) 0%, transparent 65%)',
        }}
      />

      {/* Doodle accent — dashed left margin rule */}
      <div
        className="absolute left-0 top-0 bottom-0 w-[3px] pointer-events-none opacity-20"
        style={{
          background:
            'repeating-linear-gradient(180deg, #9B1C2C 0px, #9B1C2C 8px, transparent 8px, transparent 18px)',
        }}
      />
      {/* Corner watermark */}
      <span
        className="absolute top-6 right-8 select-none pointer-events-none opacity-[0.07] text-lg font-bold rotate-[10deg]"
        style={{ fontFamily: "'Schoolbell', cursive", color: '#FF6B9D' }}
      >
        ✉️ Hello!
      </span>

      <div className="relative max-w-7xl mx-auto">

        {/* HEADER */}
        <AnimatedSection className="mb-16 md:mb-20">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="block w-8 h-[2px] rounded-full" style={{ backgroundColor: '#FF6B9D' }} />
                <span
                  className="text-[11px] font-bold tracking-[0.18em] uppercase"
                  style={{ color: '#9B1C2C', fontFamily: 'var(--font-body)' }}
                >
                  Get In Touch
                </span>
              </div>
              <h2
                className="text-4xl md:text-5xl lg:text-[56px] font-bold leading-[1.1]"
                style={{ fontFamily: 'var(--font-heading)', color: '#1F1F1F' }}
              >
                We'd love to{' '}
                <span className="italic font-light" style={{ color: '#9B1C2C' }}>
                  hear from you
                </span>
              </h2>
            </div>
            <div
              className="hidden md:block text-right max-w-xs border-t pt-4"
              style={{ borderColor: '#E5DDE0' }}
            >
              <p className="text-sm leading-relaxed" style={{ color: '#555555', fontFamily: 'var(--font-body)' }}>
                We're here to assist you and answer any questions you may
                have about Skyview Montessori School.
              </p>
            </div>
          </div>
          <div className="mt-8 h-[1px] w-full" style={{ backgroundColor: '#E5DDE0' }} />
        </AnimatedSection>

        {/* BODY */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* LEFT — contact details + hours */}
          <AnimatedSection className="lg:col-span-4 flex flex-col gap-10">

            {/* Contact details */}
            <div className="flex flex-col gap-7">
              <ContactDetail
                icon={<Phone className="w-4 h-4" style={{ color: '#9B1C2C' }} />}
                label="Phone"
                lines={['+234 803 355 5262', '+234 804 084 1601']}
                accent="#9B1C2C"
              />
              <ContactDetail
                icon={<Mail className="w-4 h-4" style={{ color: '#4A9EDB' }} />}
                label="Email"
                lines={['skyviewmontessorischoolenugu@gmail.com']}
                accent="#4A9EDB"
              />
              <ContactDetail
                icon={<MapPin className="w-4 h-4" style={{ color: '#FF6B9D' }} />}
                label="Address"
                lines={['Plot 125/127 Eke Layout, off Orji Udenta Street, near Timber Market, Nike Lake Road, Enugu.']}
                accent="#FF6B9D"
              />
            </div>

            {/* School hours card */}
            <div
              className="rounded-2xl p-7 border"
              style={{
                backgroundColor: '#F8F4F6',
                borderColor: '#E5DDE0',
              }}
            >
              <span
                className="text-[10px] font-bold tracking-[0.18em] uppercase block mb-4"
                style={{ color: '#9B1C2C', fontFamily: 'var(--font-body)' }}
              >
                Office Hours
              </span>
              <div className="flex flex-col gap-3">
                <div className="flex items-start justify-between gap-4">
                  <span className="text-sm font-semibold" style={{ color: '#1F1F1F', fontFamily: 'var(--font-body)' }}>
                    Monday – Friday
                  </span>
                  <span className="text-sm text-right shrink-0" style={{ color: '#555555', fontFamily: 'var(--font-body)' }}>
                    8:00am – 3:00pm
                  </span>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* RIGHT — form */}
          <AnimatedSection className="lg:col-span-8" delay={0.1}>
            <div
              className="rounded-2xl border p-8 md:p-12"
              style={{
                backgroundColor: '#FFFFFF',
                borderColor: '#E5DDE0',
                boxShadow: '0 4px 32px rgba(155,28,44,0.07)',
              }}
            >
              <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-7">
                <InputField label="Parent's Name" name="user_name" placeholder="e.g. Mrs. Okonkwo" required />
                <InputField label="Child's Name" name="child_name" placeholder="e.g. Chioma" />
                <InputField label="Email Address" name="user_email" type="email" placeholder="parent@email.com" required />
                <InputField label="Phone Number" name="user_phone" placeholder="+234 xxx xxx xxxx" required />

                <div className="md:col-span-2">
                  <label
                    className="block text-[10px] font-bold tracking-[0.15em] uppercase mb-2"
                    style={{ color: '#9B1C2C', fontFamily: 'var(--font-body)' }}
                  >
                    Message
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    placeholder="Tell us about your child's age, interests, or any questions you have..."
                    className="w-full rounded-xl p-4 text-sm resize-none transition-all focus:outline-none"
                    style={{
                      backgroundColor: '#F8F4F6',
                      border: '1.5px solid #E5DDE0',
                      color: '#1F1F1F',
                      fontFamily: 'var(--font-body)',
                    }}
                    onFocus={(e) => (e.currentTarget.style.borderColor = '#9B1C2C')}
                    onBlur={(e) => (e.currentTarget.style.borderColor = '#E5DDE0')}
                  />
                </div>

                <div className="md:col-span-2">
                  <motion.button
                    type="submit"
                    disabled={status === 'sending'}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-5 rounded-xl font-bold uppercase text-[11px] tracking-[0.22em] flex items-center justify-center gap-3 transition-colors duration-300"
                    style={{
                      backgroundColor:
                        status === 'success' ? '#4A9EDB'
                          : status === 'error' ? '#C23D4F'
                            : '#9B1C2C',
                      color: '#FFFFFF',
                      fontFamily: 'var(--font-body)',
                      boxShadow: '0 4px 20px rgba(155,28,44,0.25)',
                    }}
                  >
                    {status === 'idle' && <><Send size={15} /> Send Message</>}
                    {status === 'sending' && 'Sending…'}
                    {status === 'success' && <><CheckCircle2 size={15} /> Message Sent!</>}
                    {status === 'error' && <><AlertCircle size={15} /> Failed — Try Again</>}
                  </motion.button>
                </div>
              </form>
            </div>
          </AnimatedSection>

        </div>
      </div>
    </section>
  );
}

function ContactDetail({
  icon, label, lines, accent,
}: {
  icon: React.ReactNode;
  label: string;
  lines: string[];
  accent: string;
}) {
  return (
    <div className="flex gap-5 group items-start">
      <div
        className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-105"
        style={{ backgroundColor: `${accent}14`, border: `1.5px solid ${accent}28` }}
      >
        {icon}
      </div>
      <div>
        <span
          className="text-[10px] font-bold tracking-[0.16em] uppercase block mb-1"
          style={{ color: accent, fontFamily: 'var(--font-body)' }}
        >
          {label}
        </span>
        {lines.map((line, i) => (
          <p key={i} className="text-sm font-semibold leading-snug" style={{ color: '#1F1F1F', fontFamily: 'var(--font-body)' }}>
            {line}
          </p>
        ))}
      </div>
    </div>
  );
}

function InputField({ label, ...props }: React.ComponentProps<'input'> & { label: string }) {
  return (
    <div>
      <label
        className="block text-[10px] font-bold tracking-[0.15em] uppercase mb-2"
        style={{ color: '#9B1C2C', fontFamily: 'var(--font-body)' }}
      >
        {label}
      </label>
      <input
        {...props}
        className="w-full rounded-xl p-4 text-sm transition-all focus:outline-none"
        style={{
          backgroundColor: '#F8F4F6',
          border: '1.5px solid #E5DDE0',
          color: '#1F1F1F',
          fontFamily: 'var(--font-body)',
        }}
        onFocus={(e) => (e.currentTarget.style.borderColor = '#9B1C2C')}
        onBlur={(e) => (e.currentTarget.style.borderColor = '#E5DDE0')}
      />
    </div>
  );
}