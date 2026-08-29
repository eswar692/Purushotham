
import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import {
  ChevronLeft,
  ChevronRight,
  Phone,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import { business_name, person_name, phone_number } from "./secret";

export default function Carousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      skipSnaps: false,
    },
    []
  );

  const [selectedIndex, setSelectedIndex] = useState(0);

  const slides = [
    {
      id: 1,
      img: "https://i.pinimg.com/736x/9e/1f/9e/9e1f9ee154cdc86962a0747c081cb109.jpg"
    },
    {
      id: 2,
      img: "https://i.pinimg.com/736x/7a/8d/9f/7a8d9f56634bf50b55e371c60defb1ce.jpg"
    },
    {
      id: 3,
      img: "https://i.pinimg.com/1200x/f1/8e/c5/f18ec5f77c36d2bd82804180365c7608.jpg",
    },
    {
      id: 4,
      img: "https://i.pinimg.com/736x/8d/95/ff/8d95fff806cac0d2308fcd7e60d4dab2.jpg",
    },
    {
      id: 5,
      img: "https://i.pinimg.com/736x/5f/93/38/5f9338bbf17b820c59383734c03302b8.jpg",
    },
    {
      id: 6,
      img: "https://i.pinimg.com/736x/0b/ea/85/0bea85319c7aad2be9a17715c0726a20.jpg",
    },
    {
      id: 7,
      img: "https://i.pinimg.com/736x/62/b3/58/62b358e267e59d97cad63c49de2f8b44.jpg",
    },
    {
      id: 8,
      img: "https://i.pinimg.com/736x/e5/15/02/e51502ea14aa82845d23f7cefe17e766.jpg",
    },
  ];

  /* ---------------------------------------- */
  /* AUTOPLAY */
  /* ---------------------------------------- */

  useEffect(() => {
    if (!emblaApi) return;

    const autoplay = setInterval(() => {
      emblaApi.scrollNext();
    }, 4500);

    return () => clearInterval(autoplay);
  }, [emblaApi]);

  /* ---------------------------------------- */
  /* ACTIVE SLIDE */
  /* ---------------------------------------- */

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    onSelect();

    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi]);

  const scrollPrev = useCallback(() => {
    emblaApi?.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext();
  }, [emblaApi]);

  return (
    <section className="relative w-full bg-[#1c100b]">

      {/* ---------------------------------------- */}
      {/* CAROUSEL */}
      {/* ---------------------------------------- */}

      <div
        ref={emblaRef}
        className="overflow-hidden w-full"
      >
        <div className="flex">

          {slides.map((slide) => (
            <div
              key={slide.id}
              className="relative flex-[0_0_100%] min-w-0 h-[72vh] min-h-[560px] md:h-[78vh] md:min-h-[650px] overflow-hidden"
            >

              {/* IMAGE */}
              <img
                src={slide.img}
                alt={`${business_name} astrology consultation`}
                className="absolute inset-0 w-full h-full object-cover scale-[1.02]"
              />

              {/* ---------------------------------------- */}
              {/* IMAGE OVERLAY */}
              {/* ---------------------------------------- */}

              <div className="absolute inset-0 bg-black/45" />

              <div className="absolute inset-0 bg-gradient-to-r from-[#170c07]/90 via-[#1c100b]/45 to-transparent" />

              <div className="absolute inset-0 bg-gradient-to-t from-[#170c07]/80 via-transparent to-black/20" />

              {/* Gold glow */}
              <div className="absolute -left-24 top-1/3 w-72 h-72 rounded-full bg-[#d0a54d]/10 blur-3xl" />

              {/* ---------------------------------------- */}
              {/* CONTENT */}
              {/* ---------------------------------------- */}

              <div className="relative z-10 h-full max-w-[1400px] mx-auto px-5 md:px-10 flex items-center">

                <div className="max-w-3xl pt-10 md:pt-0">

                  {/* Small Label */}
                  <div className="flex items-center gap-2 mb-5">
                    <div className="flex items-center justify-center w-9 h-9 rounded-full border border-[#e1bd69]/60 bg-[#1c100b]/50 backdrop-blur-sm">
                      <Sparkles className="w-4 h-4 text-[#e5c46f]" />
                    </div>

                    <span className="open-sans text-xs md:text-sm font-bold tracking-[0.22em] text-[#e6c878]">
                      TRADITIONAL ASTROLOGY
                    </span>
                  </div>

                  {/* Business Name */}
                  <h1 className="montserrat font-extrabold text-4xl sm:text-5xl md:text-7xl leading-[1.05] tracking-tight text-[#fff8e9] drop-shadow-2xl">
                    {business_name}
                  </h1>

                  {/* Gold line */}
                  <div className="flex items-center gap-3 my-5">
                    <span className="w-16 md:w-24 h-[2px] bg-[#d4ad58]" />
                    <span className="w-2 h-2 rotate-45 bg-[#d4ad58]" />
                  </div>

                  {/* Pandit */}
                  <h2 className="montserrat text-xl sm:text-2xl md:text-4xl font-bold text-[#f1d58b]">
                    Pandit{" "}
                    <span className="text-white">
                      {person_name}
                    </span>
                  </h2>

                  {/* Description */}
                  <p className="open-sans mt-5 text-base sm:text-lg md:text-xl leading-8 text-[#eee4d7] max-w-2xl">
                    Traditional guidance for relationships, marriage,
                    career, family and important life decisions.
                  </p>

                  <p className="hidden sm:block open-sans mt-2 text-sm md:text-base leading-7 text-[#cfc1b2] max-w-2xl">
                    Personalized astrology consultations with an emphasis on
                    traditional wisdom, clarity and thoughtful guidance.
                  </p>

                  {/* ---------------------------------------- */}
                  {/* CTA BUTTONS */}
                  {/* ---------------------------------------- */}

                  <div className="flex flex-col sm:flex-row gap-3 mt-7">

                    <a
                      href={`tel:${phone_number}`}
                      className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#8b1e1e] text-white montserrat font-bold shadow-xl hover:bg-[#a32727] hover:-translate-y-0.5 transition-all"
                    >
                      <Phone className="w-5 h-5" />
                      Call for Consultation
                    </a>

                    <Link
                      to="/services"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#fff8ea]/10 backdrop-blur-md border border-[#e0c477]/50 text-[#f6df9b] montserrat font-bold hover:bg-[#fff8ea]/20 transition-all"
                    >
                      Explore Services
                      <ArrowRight className="w-5 h-5" />
                    </Link>

                  </div>

                </div>
              </div>

              {/* ---------------------------------------- */}
              {/* SINCE 1956 BADGE */}
              {/* ---------------------------------------- */}

              <div className="absolute hidden md:flex right-10 top-10 z-20 w-28 h-28 rounded-full border border-[#e0bf6c]/60 bg-[#1b0e09]/60 backdrop-blur-md items-center justify-center text-center shadow-2xl">

                <div>
                  <p className="text-[9px] tracking-[0.2em] text-[#bfa05c]">
                    TRUSTED
                  </p>

                  <p className="montserrat text-2xl font-extrabold text-[#f2d587]">
                    1956
                  </p>

                  <p className="text-[9px] tracking-[0.15em] text-[#bfa05c]">
                    ONWARDS
                  </p>
                </div>

              </div>

            </div>
          ))}
        </div>
      </div>

      {/* ---------------------------------------- */}
      {/* LEFT BUTTON */}
      {/* ---------------------------------------- */}

      <button
        onClick={scrollPrev}
        aria-label="Previous slide"
        className="absolute z-30 left-3 md:left-6 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#1c100b]/70 backdrop-blur-md border border-[#e0bf6c]/40 text-[#f0d48a] flex items-center justify-center shadow-xl hover:bg-[#8b1e1e] hover:border-[#8b1e1e] transition-all"
      >
        <ChevronLeft
          className="w-5 h-5 md:w-6 md:h-6"
          strokeWidth={2}
        />
      </button>

      {/* ---------------------------------------- */}
      {/* RIGHT BUTTON */}
      {/* ---------------------------------------- */}

      <button
        onClick={scrollNext}
        aria-label="Next slide"
        className="absolute z-30 right-3 md:right-6 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#1c100b]/70 backdrop-blur-md border border-[#e0bf6c]/40 text-[#f0d48a] flex items-center justify-center shadow-xl hover:bg-[#8b1e1e] hover:border-[#8b1e1e] transition-all"
      >
        <ChevronRight
          className="w-5 h-5 md:w-6 md:h-6"
          strokeWidth={2}
        />
      </button>

      {/* ---------------------------------------- */}
      {/* SLIDE INDICATOR */}
      {/* ---------------------------------------- */}

      <div className="absolute z-30 bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2">

        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => emblaApi?.scrollTo(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              selectedIndex === index
                ? "w-8 bg-[#e1bf69]"
                : "w-2 bg-white/50 hover:bg-white/80"
            }`}
          />
        ))}

      </div>

      {/* ---------------------------------------- */}
      {/* SLIDE COUNTER */}
      {/* ---------------------------------------- */}

      <div className="absolute bottom-6 right-5 md:right-10 z-30 hidden sm:flex items-center gap-2 text-xs text-[#ead7aa]">
        <span className="font-bold">
          {String(selectedIndex + 1).padStart(2, "0")}
        </span>

        <span className="w-8 h-px bg-[#d4ad58]/50" />

        <span className="text-[#a99b8b]">
          {String(slides.length).padStart(2, "0")}
        </span>
      </div>

    </section>
  );
}

