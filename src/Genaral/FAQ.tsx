import { useState } from "react";
import {
  Plus,
  Minus,
  MessageCircle,
  Phone,
  Sparkles,
  HelpCircle,
} from "lucide-react";
import {
  person_name,
  phone_number,
  whatsapp_number,
} from "./secret";

const faqs = [
  {
    question: `Can We Meet Astrologer ${person_name}?`,
    answer: `Yes, personal meetings are available with prior appointment. You can contact us on WhatsApp to check availability and arrange a suitable time.`,
    type: "appointment",
  },
  {
    question: "Is Telephonic Consultation Available?",
    answer: `Yes. Telephonic consultations are available, allowing you to connect from anywhere. You can call us directly to discuss consultation availability.`,
    type: "phone",
  },
  {
    question: "What Kind Of Astrology Services Are Available?",
    answer:
      "We provide traditional guidance relating to Vastu, horoscope reading, career, marriage, relationships, family and business matters.",
    type: "service",
  },
  {
    question: "What Kind Of Products Are Available?",
    answer:
      "Depending on your requirements, astrological and spiritual products such as gemstones, yantras and related traditional items may be available.",
    type: "products",
  },
  {
    question: "Do You Offer Astrology Courses?",
    answer:
      "Yes. Astrology learning courses may be available for people interested in learning traditional astrology at different levels.",
    type: "course",
  },
  {
    question: "What Is Covered In The Astrology Course?",
    answer:
      "Course topics can include horoscope reading, fundamentals of astrology, palmistry basics and traditional predictive methods.",
    type: "course",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex((current) =>
      current === index ? null : index
    );
  };

  return (
    <section className="relative overflow-hidden bg-[#f7f3eb] py-16 md:py-24 px-5">

      {/* ======================================== */}
      {/* BACKGROUND */}
      {/* ======================================== */}

      <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-[#c9a45b]/10 blur-3xl" />

      <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-[#8b1e1e]/5 blur-3xl" />

      <div className="absolute top-24 left-[5%] hidden lg:block w-24 h-24 rounded-full border border-[#c9a45b]/15" />

      <div className="relative z-10 max-w-[1200px] mx-auto">

        {/* ======================================== */}
        {/* HEADER */}
        {/* ======================================== */}

        <div className="text-center max-w-3xl mx-auto mb-12">

          <div className="flex items-center justify-center gap-2 mb-4">

            <Sparkles className="w-4 h-4 text-[#b28535]" />

            <span className="text-xs md:text-sm font-bold tracking-[0.22em] text-[#96702f]">
              NEED TO KNOW
            </span>

            <Sparkles className="w-4 h-4 text-[#b28535]" />

          </div>

          <h2 className="montserrat text-3xl md:text-5xl font-extrabold text-[#291911] leading-tight">
            Frequently Asked
            <span className="block text-[#8b1e1e]">
              Questions
            </span>
          </h2>

          <div className="flex items-center justify-center gap-3 my-5">

            <span className="w-16 h-[2px] bg-[#c9a45b]" />

            <span className="w-2 h-2 rotate-45 bg-[#c9a45b]" />

            <span className="w-16 h-[2px] bg-[#c9a45b]" />

          </div>

          <p className="open-sans text-base md:text-lg leading-7 text-[#6d5e52]">
            Find quick answers about consultations, services, courses
            and appointments.
          </p>

        </div>

        {/* ======================================== */}
        {/* MAIN FAQ LAYOUT */}
        {/* ======================================== */}

        <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.6fr] gap-8 lg:gap-12 items-start">

          {/* ================================= */}
          {/* LEFT INFO PANEL */}
          {/* ================================= */}

          <div className="lg:sticky lg:top-8">

            <div className="relative overflow-hidden rounded-3xl bg-[#21140e] p-7 md:p-8 shadow-2xl">

              {/* Glow */}
              <div className="absolute -top-20 -right-20 w-48 h-48 rounded-full bg-[#c9a45b]/15 blur-3xl" />

              <div className="relative">

                <div className="w-14 h-14 rounded-2xl bg-[#c9a45b]/15 border border-[#c9a45b]/30 flex items-center justify-center">

                  <HelpCircle className="w-7 h-7 text-[#e1c26f]" />

                </div>

                <h3 className="montserrat mt-6 text-2xl font-extrabold text-[#fff7e7]">
                  Still Have Questions?
                </h3>

                <p className="open-sans mt-3 text-sm leading-6 text-[#c4b5a5]">
                  If you cannot find the information you're looking for,
                  speak with us directly about your consultation.
                </p>

                {/* Appointment */}
                <div className="mt-7 pt-6 border-t border-white/10">

                  <p className="text-[10px] tracking-[0.18em] font-bold text-[#c9a45b]">
                    PERSONAL CONSULTATION
                  </p>

                  <p className="montserrat mt-2 text-lg font-bold text-white">
                    {person_name}
                  </p>

                </div>

                {/* Buttons */}
                <div className="mt-6 space-y-3">

                  <a
                    href={`tel:${phone_number}`}
                    className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-[#8b1e1e] text-white text-sm font-bold hover:bg-[#a32727] transition-all"
                  >
                    <Phone className="w-4 h-4" />
                    Call Us
                  </a>

                  <a
                    href={`https://wa.me/${whatsapp_number}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-3 rounded-xl border border-[#c9a45b]/40 text-[#e3c675] text-sm font-bold hover:bg-[#c9a45b]/10 transition-all"
                  >
                    <MessageCircle className="w-4 h-4" />
                    WhatsApp Us
                  </a>

                </div>

              </div>

            </div>

          </div>

          {/* ================================= */}
          {/* FAQ ACCORDION */}
          {/* ================================= */}

          <div className="space-y-3">

            {faqs.map((faq, index) => {

              const isOpen = openIndex === index;

              return (
                <div
                  key={index}
                  className={`group rounded-2xl border overflow-hidden transition-all duration-300 ${
                    isOpen
                      ? "bg-white border-[#c9a45b]/50 shadow-[0_10px_35px_rgba(52,35,22,0.10)]"
                      : "bg-white/80 border-[#e2d7c6] hover:border-[#c9a45b]/40"
                  }`}
                >

                  {/* Question */}
                  <button
                    type="button"
                    onClick={() => toggleFAQ(index)}
                    aria-expanded={isOpen}
                    className="w-full flex items-center gap-4 px-5 md:px-6 py-5 text-left"
                  >

                    {/* Number */}
                    <span
                      className={`shrink-0 w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                        isOpen
                          ? "bg-[#8b1e1e] text-white"
                          : "bg-[#f0e7d8] text-[#98702e]"
                      }`}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    {/* Question */}
                    <span
                      className={`flex-1 montserrat text-sm md:text-base font-bold transition-colors ${
                        isOpen
                          ? "text-[#8b1e1e]"
                          : "text-[#302017]"
                      }`}
                    >
                      {faq.question}
                    </span>

                    {/* Icon */}
                    <span
                      className={`shrink-0 w-9 h-9 rounded-full flex items-center justify-center transition-all ${
                        isOpen
                          ? "bg-[#8b1e1e] text-white"
                          : "bg-[#f5efe5] text-[#8b1e1e]"
                      }`}
                    >
                      {isOpen ? (
                        <Minus className="w-4 h-4" />
                      ) : (
                        <Plus className="w-4 h-4" />
                      )}
                    </span>

                  </button>

                  {/* Answer */}
                  <div
                    className={`grid transition-[grid-template-rows] duration-300 ${
                      isOpen
                        ? "grid-rows-[1fr]"
                        : "grid-rows-[0fr]"
                    }`}
                  >

                    <div className="overflow-hidden">

                      <div className="px-5 md:px-6 pb-5 md:pl-[76px] md:pr-16">

                        <div className="h-px bg-[#e9dfd0] mb-4" />

                        <p className="open-sans text-sm md:text-[15px] leading-7 text-[#6c5d51]">
                          {faq.answer}
                        </p>

                        {/* Contact-specific action */}
                        {faq.type === "appointment" && (
                          <a
                            href={`https://wa.me/${whatsapp_number}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 mt-4 text-sm font-bold text-[#8b1e1e] hover:text-[#b17d2b] transition-colors"
                          >
                            <MessageCircle className="w-4 h-4" />
                            Ask About Appointments
                          </a>
                        )}

                        {faq.type === "phone" && (
                          <a
                            href={`tel:${phone_number}`}
                            className="inline-flex items-center gap-2 mt-4 text-sm font-bold text-[#8b1e1e] hover:text-[#b17d2b] transition-colors"
                          >
                            <Phone className="w-4 h-4" />
                            Call for Consultation
                          </a>
                        )}

                      </div>

                    </div>

                  </div>

                </div>
              );
            })}

          </div>

        </div>

      </div>
    </section>
  );
}
