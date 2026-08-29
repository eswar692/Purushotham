import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Sparkles,
  Award,
  ShieldCheck,
} from "lucide-react";
import { business_name } from "./secret";

const images = [
  "cert-1 (1).png",
  "cert-2.png",
  "https://allproblemsolutionastro.com/images/Award-2.jpg",
  "https://allproblemsolutionastro.com/images/Award-3.jpg",
  "IMG-20250926-WA0012.jpg",
  "IMG-20250926-WA0013.jpg",
  "IMG-20250926-WA0015.jpg",
  "IMG-20250926-WA0016.jpg",
  "IMG-20250926-WA0017.jpg",
  "IMG-20250926-WA0018.jpg",
  "IMG-20250926-WA0019.jpg",
  "IMG-20250926-WA0020.jpg",
  "IMG-20250926-WA0022.jpg",
  "IMG-20250926-WA0024.jpg",
  "IMG-20250926-WA0026.jpg",
  "IMG-20250926-WA0030.jpg",
  "IMG-20250926-WA0032.jpg",
  "IMG-20250926-WA0034.jpg",
  "IMG-20250926-WA0035.jpg",
  "IMG-20250926-WA0036.jpg",
  "IMG-20250926-WA0037.jpg",
  "IMG-20250926-WA0039.jpg",
  "IMG-20250926-WA0029.jpg",
  "IMG-20250926-WA0034.jpg",
  "IMG-20250926-WA0035.jpg",
  "IMG-20250926-WA0039.jpg",
  "IMG-20250926-WA0040.jpg",
  "WhatsApp Image 2025-09-26 at 09.59.53_c3c0d491.jpg",
];

const ImageGrid = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const selectedImage =
    selectedIndex !== null ? images[selectedIndex] : null;

  /* ---------------------------------------- */
  /* KEYBOARD CONTROLS */
  /* ---------------------------------------- */

  useEffect(() => {
    if (selectedIndex === null) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedIndex(null);
      }

      if (event.key === "ArrowRight") {
        setSelectedIndex((current) =>
          current === null
            ? 0
            : (current + 1) % images.length
        );
      }

      if (event.key === "ArrowLeft") {
        setSelectedIndex((current) =>
          current === null
            ? images.length - 1
            : (current - 1 + images.length) % images.length
        );
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedIndex]);

  /* ---------------------------------------- */
  /* BODY SCROLL LOCK */
  /* ---------------------------------------- */

  useEffect(() => {
    if (selectedIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedIndex]);

  const nextImage = () => {
    setSelectedIndex((current) =>
      current === null
        ? 0
        : (current + 1) % images.length
    );
  };

  const previousImage = () => {
    setSelectedIndex((current) =>
      current === null
        ? images.length - 1
        : (current - 1 + images.length) % images.length
    );
  };

  return (
    <section className="relative overflow-hidden bg-[#f7f3eb] py-16 md:py-24 px-5">

      {/* ======================================== */}
      {/* BACKGROUND DECORATION */}
      {/* ======================================== */}

      <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-[#c9a45b]/10 blur-3xl" />

      <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-[#8b1e1e]/5 blur-3xl" />

      <div className="absolute top-20 left-[5%] hidden lg:block w-24 h-24 rounded-full border border-[#c9a45b]/20" />

      <div className="absolute bottom-20 right-[6%] hidden lg:block w-32 h-32 rounded-full border border-[#c9a45b]/15" />

      <div className="relative z-10 max-w-[1400px] mx-auto">

        {/* ======================================== */}
        {/* HEADER */}
        {/* ======================================== */}

        <div className="text-center max-w-3xl mx-auto mb-12">

          {/* Label */}
          <div className="flex items-center justify-center gap-2 mb-4">

            <Sparkles className="w-4 h-4 text-[#b28535]" />

            <span className="open-sans text-xs md:text-sm font-bold tracking-[0.22em] text-[#96702f]">
              RECOGNITION &amp; EXPERIENCE
            </span>

            <Sparkles className="w-4 h-4 text-[#b28535]" />

          </div>

          {/* Heading */}
          <h1 className="montserrat text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#291911] leading-tight">

            Our Journey of
            <span className="block text-[#8b1e1e]">
              Trust &amp; Recognition
            </span>

          </h1>

          {/* Divider */}
          <div className="flex items-center justify-center gap-3 my-5">

            <span className="w-16 h-[2px] bg-[#c9a45b]" />

            <span className="w-2 h-2 rotate-45 bg-[#c9a45b]" />

            <span className="w-16 h-[2px] bg-[#c9a45b]" />

          </div>

          <p className="open-sans text-base md:text-lg leading-7 text-[#6d5e52]">
            Explore certificates, awards and memorable moments associated
            with <span className="font-semibold text-[#8b1e1e]">
              {business_name}
            </span>.
          </p>

          {/* Trust points */}
          <div className="flex flex-wrap justify-center gap-3 mt-6">

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#e2d6c4] text-sm text-[#625246] shadow-sm">
              <ShieldCheck className="w-4 h-4 text-[#a77c31]" />
              Experienced Guidance
            </div>

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#e2d6c4] text-sm text-[#625246] shadow-sm">
              <Award className="w-4 h-4 text-[#a77c31]" />
              Certificates &amp; Awards
            </div>

          </div>

        </div>

        {/* ======================================== */}
        {/* IMAGE GRID */}
        {/* ======================================== */}

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.045,
              },
            },
          }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6"
        >

          {images.map((src, index) => (
            <motion.button
              key={`${src}-${index}`}
              type="button"
              onClick={() => setSelectedIndex(index)}
              variants={{
                hidden: {
                  opacity: 0,
                  y: 25,
                },
                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
              transition={{ duration: 0.45 }}
              className="group relative text-left bg-white p-2 rounded-2xl border border-[#e1d5c3] shadow-[0_8px_25px_rgba(55,38,24,0.08)] hover:shadow-[0_16px_40px_rgba(55,38,24,0.16)] hover:-translate-y-1 transition-all duration-300"
            >

              {/* Image */}
              <div className="relative h-44 sm:h-48 md:h-56 overflow-hidden rounded-xl bg-[#eee7dc]">

                <img
                  src={src}
                  alt={`${business_name} recognition ${index + 1}`}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />

                {/* Dark hover */}
                <div className="absolute inset-0 bg-[#20120d]/0 group-hover:bg-[#20120d]/35 transition-all duration-300" />

                {/* Zoom icon */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">

                  <div className="w-11 h-11 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-xl">
                    <Maximize2 className="w-5 h-5 text-[#6e431d]" />
                  </div>

                </div>

                {/* Number */}
                <div className="absolute top-2.5 left-2.5 w-8 h-8 rounded-full bg-[#20120d]/75 backdrop-blur-sm border border-[#e2c77b]/50 flex items-center justify-center">

                  <span className="text-[10px] font-bold text-[#f2d88e]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                </div>

              </div>

              {/* Bottom caption */}
              <div className="px-2 pt-3 pb-1 flex items-center justify-between gap-2">

                <span className="text-xs font-semibold text-[#66564a]">
                  {index < 4 ? "Recognition" : "Gallery"}
                </span>

                <span className="text-[10px] uppercase tracking-wider text-[#ae853e]">
                  View
                </span>

              </div>

            </motion.button>
          ))}

        </motion.div>

        {/* ======================================== */}
        {/* BOTTOM NOTE */}
        {/* ======================================== */}

        <div className="mt-10 flex items-center justify-center gap-3">

          <span className="w-12 h-px bg-[#c9a45b]/50" />

          <p className="text-xs md:text-sm text-[#827367] text-center">
            Click any image to view it in full size
          </p>

          <span className="w-12 h-px bg-[#c9a45b]/50" />

        </div>

      </div>

      {/* ======================================== */}
      {/* LIGHTBOX */}
      {/* ======================================== */}

      <AnimatePresence>
        {selectedImage && selectedIndex !== null && (
          <motion.div
            className="fixed inset-0 z-[200] bg-[#120a07]/95 backdrop-blur-md flex items-center justify-center p-4 md:p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedIndex(null)}
          >

            {/* Top bar */}
            <div
              className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-4 md:px-8 py-4"
              onClick={(e) => e.stopPropagation()}
            >

              <div className="flex items-center gap-3">

                <Sparkles className="w-5 h-5 text-[#e0bd69]" />

                <span className="hidden sm:block montserrat text-sm font-semibold text-[#ead7aa]">
                  {business_name}
                </span>

              </div>

              <div className="flex items-center gap-4">

                <span className="text-xs md:text-sm text-[#cbbca8]">
                  {selectedIndex + 1} / {images.length}
                </span>

                <button
                  type="button"
                  onClick={() => setSelectedIndex(null)}
                  aria-label="Close image"
                  className="w-10 h-10 rounded-full bg-white/10 border border-white/20 text-white flex items-center justify-center hover:bg-[#8b1e1e] transition"
                >
                  <X className="w-5 h-5" />
                </button>

              </div>

            </div>

            {/* Previous */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                previousImage();
              }}
              aria-label="Previous image"
              className="absolute left-3 md:left-8 z-20 w-11 h-11 md:w-13 md:h-13 rounded-full bg-white/10 border border-white/20 text-white flex items-center justify-center backdrop-blur-sm hover:bg-[#8b1e1e] transition"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Image */}
            <motion.img
              key={selectedImage}
              src={selectedImage}
              alt={`${business_name} selected gallery image`}
              className="max-w-[88vw] max-h-[82vh] object-contain rounded-xl shadow-2xl"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
            />

            {/* Next */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              aria-label="Next image"
              className="absolute right-3 md:right-8 z-20 w-11 h-11 md:w-13 md:h-13 rounded-full bg-white/10 border border-white/20 text-white flex items-center justify-center backdrop-blur-sm hover:bg-[#8b1e1e] transition"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Bottom info */}
            <div className="absolute bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 text-center">

              <p className="text-xs text-[#c8b9a6]">
                Use ← → to navigate
                <span className="mx-2">•</span>
                ESC to close
              </p>

            </div>

          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
};

export default ImageGrid;
