import { useState, useMemo } from "react";
import { Navbar } from "@/components/brainchild/Navbar";
import { Footer } from "@/components/brainchild/Footer";
import { AnimatedSection } from "@/components/brainchild/AnimatedSection";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import BrainButton from "@/components/brainchild/BrainButton";

// Import all gallery images (moved into images/ folder)
import img1 from "@/assets/images/544A7170.jpg.jpg";
import img2 from "@/assets/images/544A7178.jpg.jpg";
import img3 from "@/assets/images/544A7188.jpg.jpg";
import img4 from "@/assets/images/544A7218.jpg.jpg";
import img5 from "@/assets/images/544A7241.jpg.jpg";
import img6 from "@/assets/images/544A7290.jpg.jpg";
import img7 from "@/assets/images/544A7328.jpg.jpg";
import img8 from "@/assets/images/544A7353.jpg.jpg";
import img9 from "@/assets/images/544A7364.jpg.jpg";
import playImg from "@/assets/images/play.jpg";
import creativeFun from "@/assets/images/creative.jpeg";
import studentsImg from "@/assets/images/students.jpg";
import kidsImg from "@/assets/images/kids.jpg";
import holdImg from "@/assets/images/hold.jpg";

interface GalleryImage {
    id: string;
    src: string;
    title: string;
    category: string;
    description: string;
}

const galleryImages: GalleryImage[] = [
    { id: "1", src: img1, title: "Classroom Learning", category: "academics", description: "Interactive classroom sessions" },
    { id: "2", src: img2, title: "Creative Workshop", category: "activities", description: "Children exploring creativity" },
    { id: "3", src: img3, title: "Outdoor Play", category: "facilities", description: "Safe and fun outdoor activities" },
    { id: "4", src: img4, title: "Team Building", category: "activities", description: "Collaborative learning experiences" },
    { id: "5", src: img5, title: "Class Activities", category: "academics", description: "Engaging class activities" },
    { id: "6", src: img6, title: "Student Engagement", category: "academics", description: "Passionate learning moments" },
    { id: "7", src: img7, title: "Sports & Recreation", category: "facilities", description: "Active playground activities" },
    { id: "8", src: img8, title: "Group Experience", category: "activities", description: "Together we grow stronger" },
    { id: "9", src: img9, title: "Classroom Moments", category: "academics", description: "Daily learning adventures" },
    { id: "10", src: playImg, title: "Playtime Fun", category: "facilities", description: "Creative outdoor play" },
    { id: "11", src: creativeFun, title: "Arts & Crafts", category: "activities", description: "Artistic expression" },
    { id: "12", src: studentsImg, title: "Student Life", category: "academics", description: "Life at Brain Child" },
    { id: "13", src: kidsImg, title: "Happy Kids", category: "activities", description: "Smiling at success" },
    { id: "14", src: holdImg, title: "Care & Support", category: "facilities", description: "Nurturing environment" },
];

const categories = [
    { value: "all", label: "All Photos" },
    { value: "academics", label: "Academics" },
    { value: "activities", label: "Activities" },
    { value: "facilities", label: "Facilities" },
];

export default function GalleryPage() {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("all");
    const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

    const filteredImages = useMemo(() => {
        return galleryImages.filter((img) => {
            const matchesSearch = img.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                img.description.toLowerCase().includes(searchTerm.toLowerCase());
            const matchesCategory = selectedCategory === "all" || img.category === selectedCategory;
            return matchesSearch && matchesCategory;
        });
    }, [searchTerm, selectedCategory]);

    return (
        <>
            <Navbar />

            {/* Hero Section */}
            <section className="relative bg-gradient-to-r from-pink-500/10 to-blue-500/10 min-h-[40vh] flex items-center justify-center pt-20 pb-12">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <AnimatedSection>
                        <span className="inline-block bg-white/10 backdrop-blur-md text-primary text-xs md:text-sm font-semibold px-4 py-2 rounded-full mb-4 border border-pink-200/50 uppercase tracking-widest">
                            ✨ Visual Moments
                        </span>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-slate-900 mb-4 leading-tight">
                            Our <span className="text-primary italic font-light">Gallery</span>
                        </h1>
                        <p className="text-slate-600 text-lg md:text-xl max-w-2xl mx-auto">
                            Explore unforgettable moments from Brain Child Nursery and Primary School
                        </p>
                    </AnimatedSection>
                </div>
            </section>

            {/* Filters Section */}
            <section className="bg-white sticky top-16 z-40 shadow-sm">
                <div className="max-w-6xl mx-auto px-6 py-8">
                    <AnimatedSection>
                        <div className="space-y-6">
                            {/* Search */}
                            <div className="relative">
                                <Input
                                    type="text"
                                    placeholder="🔍 Search gallery... (e.g., classroom, sports, arts)"
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="w-full px-6 py-3 border-2 border-pink-200 rounded-full focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all text-base"
                                />
                            </div>

                            {/* Category Filter */}
                            <div className="flex flex-wrap gap-3">
                                {categories.map((cat) => (
                                    <button
                                        key={cat.value}
                                        onClick={() => setSelectedCategory(cat.value)}
                                        className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${selectedCategory === cat.value
                                            ? "bg-primary text-white shadow-lg scale-105"
                                            : "bg-gray-100 text-slate-700 hover:bg-gray-200"
                                            }`}
                                    >
                                        {cat.label}
                                    </button>
                                ))}
                            </div>

                            {/* Results Counter */}
                            <p className="text-sm text-slate-600 font-medium">
                                Showing <span className="text-primary font-bold">{filteredImages.length}</span> of{" "}
                                <span className="text-primary font-bold">{galleryImages.length}</span> photos
                            </p>
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* Gallery Grid */}
            <section className="bg-gradient-to-b from-white to-pink-50/30 min-h-[60vh] py-16 md:py-24">
                <div className="max-w-6xl mx-auto px-6">
                    {filteredImages.length > 0 ? (
                        <motion.div
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
                            initial="hidden"
                            animate="visible"
                            variants={{
                                hidden: { opacity: 0 },
                                visible: {
                                    opacity: 1,
                                    transition: {
                                        staggerChildren: 0.1,
                                    },
                                },
                            }}
                        >
                            {filteredImages.map((image, index) => (
                                <motion.div
                                    key={image.id}
                                    variants={{
                                        hidden: { opacity: 0, y: 20 },
                                        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                                    }}
                                    whileHover={{ y: -8 }}
                                    onClick={() => setSelectedImage(image)}
                                    className="group cursor-pointer h-80 overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
                                >
                                    <div className="relative h-full overflow-hidden bg-gray-200">
                                        <img
                                            src={image.src}
                                            alt={image.title}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                        />
                                        {/* Overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-6">
                                            <h3 className="text-white text-xl font-bold mb-2">{image.title}</h3>
                                            <p className="text-white/90 text-sm">{image.description}</p>
                                            <div className="mt-3 inline-block">
                                                <span className="bg-primary/90 text-white text-xs font-semibold px-3 py-1 rounded-full">
                                                    {categories.find((c) => c.value === image.category)?.label}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    ) : (
                        <div className="text-center py-24">
                            <p className="text-2xl text-slate-500 font-semibold mb-4">No photos found</p>
                            <p className="text-slate-400 mb-6">Try adjusting your search or filters</p>
                            <button
                                onClick={() => {
                                    setSearchTerm("");
                                    setSelectedCategory("all");
                                }}
                                className="text-primary font-bold hover:underline"
                            >
                                Clear filters
                            </button>
                        </div>
                    )}
                </div>
            </section>

            {/* Lightbox Modal */}
            {selectedImage && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => setSelectedImage(null)}
                    className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 backdrop-blur-sm"
                >
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="relative max-w-4xl w-full h-[80vh] flex flex-col"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <img
                            src={selectedImage.src}
                            alt={selectedImage.title}
                            className="flex-1 object-contain rounded-lg"
                        />
                        <div className="bg-white/10 backdrop-blur-md text-white p-6 rounded-b-lg">
                            <h2 className="text-2xl font-bold mb-2">{selectedImage.title}</h2>
                            <p className="text-white/80 mb-3">{selectedImage.description}</p>
                            <span className="inline-block bg-primary/80 px-4 py-2 rounded-full text-sm font-semibold">
                                {categories.find((c) => c.value === selectedImage.category)?.label}
                            </span>
                        </div>
                        <button
                            onClick={() => setSelectedImage(null)}
                            className="absolute top-4 right-4 text-white bg-black/50 hover:bg-black/75 rounded-full p-2 transition-all"
                        >
                            ✕
                        </button>
                    </motion.div>
                </motion.div>
            )}

            <Footer />
        </>
    );
}
