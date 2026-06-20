import React, { lazy, Suspense } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
const Index = lazy(() => import("./pages/Index.tsx"));
const NotFound = lazy(() => import("./pages/NotFound.tsx"));
const BlogPage = lazy(() => import("./pages/BlogPage.tsx"));
const AboutPage = lazy(() => import("./pages/AboutPage.tsx"));
const AdmissionsPage = lazy(() => import("./pages/AdmissionsPage.tsx"));
const ProgramsPage = lazy(() => import("./pages/ProgramsPage.tsx"));
const ContactPage = lazy(() => import("./pages/ContactPage.tsx"));
const PortalPage = lazy(() => import("./pages/PortalPage.tsx"));
const GalleryPage = lazy(() => import("./pages/GalleryPage.tsx"));
const CommunityPage = lazy(() => import("./pages/SkyViewCommunity.tsx"));
import { ScrollToTop } from "./components/ScrollToTop.tsx";
import { WhatsAppWidget } from "./components/brainchild/WhatsAppWidget.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <WhatsAppWidget />
        <Suspense fallback={<div className="min-h-screen grid place-items-center">Loading…</div>}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/programs" element={<ProgramsPage />} />
            <Route path="/admissions" element={<AdmissionsPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/community" element={<CommunityPage />} />

            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
