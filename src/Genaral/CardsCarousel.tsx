"use client";

import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import {
  ChevronLeft,
  ChevronRight,
  Phone,
  MessageCircle,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import { useCallback } from "react";
import { Link } from "react-router-dom";
import { phone_number, whatsapp_number } from "./secret";

const CardCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "center",
      skipSnaps: false,
      containScroll: "trimSnaps",
    },
    [
      Autoplay({
        delay: 4500,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
      }),
    ]
  );

  const scrollPrev = useCallback(() => {
    emblaApi?.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext();
  }, [emblaApi]);

  const cards = [
    {
      number: "01",
      title: "Love & Relationship Guidance",
      shortTitle: "Love & Relationships",
      desc: "Thoughtful guidance for relationship concerns, misunderstandings, emotional connection and harmony in your love life.",
      img: "https://i.pinimg.com/736x/5e/74/25/5e7425172b397ad5e9f4073db1410636.jpg"
    },
    {
      number: "02",
      title: "Spiritual Reading",
      shortTitle: "Spiritual Reading",
      desc: "Explore traditional spiritual insights for love, marriage, career, finances and important life decisions.",
      img: "https://i.pinimg.com/736x/89/7f/ab/897fab251dd39b6b5ff06a7e097a5a46.jpg"
    },
    {
      number: "03",
      title: "Business Guidance",
      shortTitle: "Business & Career",
      desc: "Guidance for business challenges, career decisions, growth opportunities and creating a positive direction.",
      img: "https://i.pinimg.com/736x/0a/51/03/0a51033f2bba92f3b24fb5a7108415a4.jpg"
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#f7f3eb] py-16 md:py-24">

      {/* ======================================== */}
      {/* BACKGROUND DECORATION */}
      {/* ======================================== */}

      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-[#c9a45b]/8 blur-3xl" />

      <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-[#8b1e1e]/5 blur-3xl" />

      <div className="absolute top-20 right-10 hidden lg:block w-28 h-28 rounded-full border border-[#c9a45b]/20" />

      <div className="absolute bottom-20 left-10 hidden lg:block w-20 h-20 rounded-full border border-[#c9a45b]/20" />

      {/* ======================================== */}
      {/* SECTION HEADING */}
      {/* ======================================== */}

      <div className="relative z-10 max-w-3xl mx-auto px-5 text-center mb-10 md:mb-14">

        <div className="flex items-center justify-center gap-2 mb-4">

          <Sparkles className="w-4 h-4 text-[#b28535]" />

          <span className="open-sans text-xs md:text-sm font-bold tracking-[0.22em] text-[#96702f]">
            PERSONALIZED GUIDANCE
          </span>

          <Sparkles className="w-4 h-4 text-[#b28535]" />

        </div>

        <h2 className="montserrat text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#291911] leading-tight">
          Guidance For Your
          <span className="block text-[#8b1e1e]">
            Important Life Decisions
          </span>
        </h2>

        <div className="flex items-center justify-center gap-3 my-5">

          <span className="w-16 h-[2px] bg-[#c9a45b]" />

          <span className="w-2 h-2 rotate-45 bg-[#c9a45b]" />

          <span className="w-16 h-[2px] bg-[#c9a45b]" />

        </div>

        <p className="open-sans text-base md:text-lg leading-7 text-[#6d5e52]">
          Explore traditional astrology and spiritual guidance for
          relationships, personal growth, career and life.
        </p>

      </div>

      {/* ======================================== */}
      {/* CAROUSEL */}
      {/* ======================================== */}

      <div className="relative z-10 w-full overflow-hidden" ref={emblaRef}>

        <div className="flex items-stretch">

          {cards.map((card) => (
            <div
              key={card.number}
              className="flex-[0_0_92%] sm:flex-[0_0_70%] md:flex-[0_0_46%] lg:flex-[0_0_34%] px-3 md:px-4"
            >

              {/* CARD */}
              <article className="group relative h-full min-h-[530px] bg-white rounded-[28px] overflow-hidden border border-[#e3d7c5] shadow-[0_12px_40px_rgba(52,35,22,0.10)] hover:shadow-[0_20px_55px_rgba(52,35,22,0.17)] transition-all duration-500">

                {/* -------------------------------- */}
                {/* IMAGE */}
                {/* -------------------------------- */}

                <div className="relative h-60 md:h-64 overflow-hidden">

                  <img
                    src={card.img}
                    alt={card.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />

                  {/* Image overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#20120d]/75 via-[#20120d]/10 to-transparent" />

                  {/* Number */}
                  <div className="absolute top-4 left-4 w-10 h-10 rounded-full bg-[#20120d]/80 backdrop-blur-md border border-[#e0bd68]/50 flex items-center justify-center">
                    <span className="text-xs font-bold text-[#f1d58b]">
                      {card.number}
                    </span>
                  </div>

                  {/* Category */}
                  <div className="absolute bottom-4 left-5">

                    <span className="px-3 py-1.5 rounded-full bg-[#20120d]/75 backdrop-blur-md border border-[#e0bd68]/30 text-xs font-semibold text-[#f4dda0]">
                      {card.shortTitle}
                    </span>

                  </div>

                </div>

                {/* -------------------------------- */}
                {/* CONTENT */}
                {/* -------------------------------- */}

                <div className="p-6 md:p-7 flex flex-col h-[266px]">

                  <div className="flex items-center gap-2 mb-3">

                    <span className="w-7 h-px bg-[#c9a45b]" />

                    <span className="text-[10px] tracking-[0.18em] font-bold text-[#a37a32]">
                      TRADITIONAL GUIDANCE
                    </span>

                  </div>

                  <h3 className="montserrat text-xl md:text-2xl font-extrabold text-[#2d1b12] leading-snug">
                    {card.title}
                  </h3>

                  <p className="open-sans mt-3 text-sm md:text-[15px] leading-6 text-[#716257]">
                    {card.desc}
                  </p>

                  {/* Bottom actions */}
                  <div className="mt-auto flex items-center justify-between gap-3">

                    <Link
                      to="/services"
                      className="inline-flex items-center gap-1.5 text-sm font-bold text-[#8b1e1e] hover:text-[#b17c29] transition-colors"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>

                    <a
                      href={`tel:${phone_number}`}
                      className="w-10 h-10 rounded-full bg-[#f5ede0] flex items-center justify-center text-[#8b1e1e] hover:bg-[#8b1e1e] hover:text-white transition-all"
                      aria-label="Call for consultation"
                    >
                      <Phone className="w-4 h-4" />
                    </a>

                  </div>

                </div>

              </article>

            </div>
          ))}

        </div>
      </div>

      {/* ======================================== */}
      {/* NAVIGATION */}
      {/* ======================================== */}

      <div className="relative z-20 flex items-center justify-center gap-3 mt-8">

        <button
          onClick={scrollPrev}
          aria-label="Previous service"
          className="w-11 h-11 rounded-full bg-white border border-[#dfd2bf] text-[#6f4a24] flex items-center justify-center shadow-md hover:bg-[#20120d] hover:text-[#f1d58b] hover:border-[#20120d] transition-all"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <div className="px-4 text-xs font-semibold text-[#8b7766]">
          Explore Our Guidance
        </div>

        <button
          onClick={scrollNext}
          aria-label="Next service"
          className="w-11 h-11 rounded-full bg-white border border-[#dfd2bf] text-[#6f4a24] flex items-center justify-center shadow-md hover:bg-[#20120d] hover:text-[#f1d58b] hover:border-[#20120d] transition-all"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

      </div>

      {/* ======================================== */}
      {/* BOTTOM CTA */}
      {/* ======================================== */}

      <div className="relative z-10 max-w-4xl mx-auto px-5 mt-12">

        <div className="rounded-2xl bg-[#20120d] border border-[#c9a45b]/20 px-6 py-6 md:px-8 flex flex-col sm:flex-row items-center justify-between gap-5">

          <div className="text-center sm:text-left">

            <p className="montserrat text-base md:text-lg font-bold text-[#fff6e5]">
              Need personal guidance?
            </p>

            <p className="text-xs md:text-sm text-[#bcae9e] mt-1">
              Speak directly with an experienced astrologer.
            </p>

          </div>

          <div className="flex gap-3 shrink-0">

            <a
              href={`tel:${phone_number}`}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#8b1e1e] text-white text-sm font-bold hover:bg-[#a22727] transition-all"
            >
              <Phone className="w-4 h-4" />
              Call Now
            </a>

            <a
              href={`https://wa.me/91${whatsapp_number}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-[#c9a45b]/50 text-[#f0d68f] text-sm font-bold hover:bg-[#c9a45b]/10 transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </a>

          </div>

        </div>

      </div>

    </section>
  );
};

export default CardCarousel;
