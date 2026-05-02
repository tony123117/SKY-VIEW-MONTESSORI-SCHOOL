import { motion } from "framer-motion";
import React from "react";

interface ModalProps {
    open: boolean;
    onClose: () => void;
    title: string;
    image: string;
    bullets: string[];
    description?: string;
}

export default function WhyChooseUsModal({ open, onClose, title, image, bullets, description }: ModalProps) {
    if (!open) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center" role="dialog" aria-modal="true" aria-label={`${title} details`}>
            <div className="absolute inset-0 bg-black/40" onClick={onClose} />
            <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.25 }} className="relative bg-white w-[min(900px,90%)] rounded-2xl shadow-2xl overflow-hidden">
                <div className="md:flex">
                    <div className="md:w-1/2 h-56 md:h-auto">
                        <img src={image} alt={title} className="w-full h-full object-cover" loading="lazy" />
                    </div>
                    <div className="md:w-1/2 p-6">
                        <div className="flex justify-between items-start">
                            <h3 className="text-2xl font-heading font-bold">{title}</h3>
                            <button onClick={onClose} aria-label="Close details" className="ml-4 text-gray-500 hover:text-gray-800">✕</button>
                        </div>
                        {description && <p className="mt-3 text-sm text-slate-600">{description}</p>}
                        <ul className="mt-4 list-disc pl-5 space-y-2 text-sm text-slate-700">
                            {bullets.map((b, i) => (
                                <li key={i}>{b}</li>
                            ))}
                        </ul>
                        <div className="mt-6 flex gap-3">
                            <a href="/brochure.pdf" target="_blank" rel="noreferrer" className="px-4 py-2 rounded bg-blue-600 text-white">Download Brochure</a>
                            <button className="px-4 py-2 rounded border" onClick={onClose}>Close</button>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
