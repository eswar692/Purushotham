
import { motion } from "framer-motion";
import {
  ChevronRight,
  Phone,
  MessageCircle,
  Sparkles,
  ShieldCheck,
  ArrowUpRight,
} from "lucide-react";
import useInViewOnce from "./InView";
import {
  business_name,
  person_name,
  phone_number,
  whatsapp_number,
} from "./secret";

export default function Footer() {
  const [ref, inView] = useInViewOnce(0.15);

  const services = [
    "Personal Spiritual Guidance",
    "Relationship Guidance",
    "Astrology Consultation",
    "Love & Relationship Guidance",
    "Love Marriage Guidance",
    "Marriage Compatibility Guidance",
  ];

  const whyChoose = [
    "Experienced Astrologer",
    "Traditional Astrology Guidance",
    "Online Consultations",
    "Personalized Guidance",
    "Private & Confidential Consultation",
  ];

  return (
    <footer className="relative overflow-hidden bg-[#1c100b] text-[#f8f1e5] open-sans">

      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-[0.16]"
        style={{
          backgroundImage:
            "url('https://i.pinimg.com/736x/0c/27/a4/0c27a427b4d1939110bf6ba9a8c170f5.jpg')",
        }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[#1c100b]/85" />

      {/* Decorative glow */}
      <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-[#c89538]/10 blur-3xl" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-[#8b1e1e]/10 blur-3xl" />

      {/* Main content */}
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 35 }}
        animate={
          inView
            ? { opacity: 1, y: 0 }
            : { opacity: 0, y: 35 }
        }
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-[1400px] mx-auto px-5 md:px-10 pt-14 pb-10"
      >

        {/* ---------------------------------------- */}
        {/* TOP CTA */}
        {/* ---------------------------------------- */}

        <div className="relative overflow-hidden rounded-3xl border border-[#c9a45b]/30 bg-[#281811]/90 px-6 py-8 md:px-10 md:py-9 mb-12">

          <div className="absolute top-0 right-0 w-48 h-48 rounded-full bg-[#c89538]/10 blur-3xl" />

          <div className="relative flex flex-col md:flex-row items-center justify-between gap-7">

            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                <Sparkles className="w-5 h-5 text-[#e3bb67]" />

                <p className="text-xs tracking-[0.25em] font-bold text-[#d8b66a]">
                  PERSONAL GUIDANCE
                </p>
              </div>

              <h2 className="montserrat text-2xl md:text-3xl font-extrabold text-[#fff8ea]">
                Looking for clarity in life?
              </h2>

              <p className="mt-2 text-sm md:text-base text-[#cfc0ae] max-w-2xl">
                Connect with {person_name} for traditional astrology
                guidance on relationships, marriage, career and important
                life decisions.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 shrink-0">

              <a
                href={`tel:${phone_number}`}
                className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#8b1e1e] text-white font-bold montserrat shadow-lg hover:bg-[#a12626] hover:-translate-y-0.5 transition-all"
              >
                <Phone className="w-5 h-5" />
                Call Now
              </a>

              <a
                href={`https://wa.me/91${whatsapp_number}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border border-[#c9a45b]/50 text-[#f1d58e] font-bold montserrat hover:bg-[#c9a45b]/10 transition-all"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp
              </a>

            </div>
          </div>
        </div>

        {/* ---------------------------------------- */}
        {/* FOOTER GRID */}
        {/* ---------------------------------------- */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">

          {/* ABOUT */}
          <div>
            <div className="flex items-center gap-3 mb-5">

              <img
                src="https://i.pinimg.com/736x/3d/e1/f9/3de1f95bebee24bac17e12b23ea11248.jpg"
                alt={`${business_name} Logo`}
                className="w-14 h-14 rounded-xl object-cover border border-[#c9a45b]/60 shadow-lg"
              />

              <div>
                <h2 className="montserrat font-extrabold text-xl text-[#fff7e8]">
                  {business_name}
                </h2>

                <p className="text-[10px] tracking-[0.18em] text-[#cba85d] font-semibold mt-1">
                  ESTABLISHED 1956
                </p>
              </div>

            </div>

            <p className="text-sm md:text-base leading-7 text-[#c9bbab]">
              Traditional astrology consultations led by{" "}
              <span className="text-[#e1c477] font-semibold">
                {person_name}
              </span>
              , offering personalized guidance for relationships, marriage,
              career, family and life's important decisions.
            </p>

            <div className="mt-5 flex items-center gap-2 text-sm text-[#d6c8b8]">
              <ShieldCheck className="w-5 h-5 text-[#d5ad58]" />
              Private • Personal • Traditional
            </div>
          </div>

          {/* SERVICES */}
          <div>
            <h3 className="montserrat text-xl font-bold text-[#f4d78f] mb-5">
              Our Services
            </h3>

            <ul className="space-y-3">
              {services.map((service, idx) => (
                <li key={idx}>
                  <a
                    href="/services"
                    className="group flex items-start gap-2 text-sm text-[#cbbdaf] hover:text-[#f0d27f] transition-colors"
                  >
                    <ChevronRight className="w-4 h-4 mt-0.5 shrink-0 text-[#b58a3d] group-hover:translate-x-1 transition-transform" />

                    <span>{service}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* WHY CHOOSE */}
          <div>
            <h3 className="montserrat text-xl font-bold text-[#f4d78f] mb-5">
              Why Choose Us?
            </h3>

            <ul className="space-y-3">
              {whyChoose.map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2 text-sm text-[#cbbdaf]"
                >
                  <Sparkles className="w-4 h-4 mt-0.5 shrink-0 text-[#b58a3d]" />

                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-[#c9a45b]/10 border border-[#c9a45b]/20 text-xs text-[#e2c77f]">
              <Sparkles className="w-3.5 h-3.5" />
              Trusted Guidance Since 1956
            </div>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="montserrat text-xl font-bold text-[#f4d78f] mb-5">
              Contact Us
            </h3>

            <div className="space-y-3">

              {/* Phone */}
              <a
                href={`tel:${phone_number}`}
                className="group flex items-center gap-3 p-3.5 rounded-xl bg-[#281811] border border-[#c9a45b]/15 hover:border-[#c9a45b]/40 transition-all"
              >
                <div className="w-10 h-10 rounded-lg bg-[#8b1e1e]/20 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-[#e0bc68]" />
                </div>

                <div>
                  <p className="text-[10px] uppercase tracking-wider text-[#998575]">
                    Call
                  </p>

                  <p className="montserrat text-sm font-semibold text-[#f2e6d2]">
                    {phone_number}
                  </p>
                </div>
              </a>

              {/* WhatsApp */}
              <a
                href={`https://wa.me/91${whatsapp_number}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 p-3.5 rounded-xl bg-[#281811] border border-[#c9a45b]/15 hover:border-[#c9a45b]/40 transition-all"
              >
                <div className="w-10 h-10 rounded-lg bg-[#7a8f45]/20 flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-[#d7c477]" />
                </div>

                <div>
                  <p className="text-[10px] uppercase tracking-wider text-[#998575]">
                    WhatsApp
                  </p>

                  <p className="montserrat text-sm font-semibold text-[#f2e6d2]">
                    +91 {whatsapp_number}
                  </p>
                </div>
              </a>

            </div>

            <p className="mt-5 text-xs leading-5 text-[#998b7e]">
              Consultations available online. Reach out to discuss your
              requirements and schedule a consultation.
            </p>
          </div>
        </div>

        {/* ---------------------------------------- */}
        {/* DIVIDER */}
        {/* ---------------------------------------- */}

        <div className="my-10 h-px bg-gradient-to-r from-transparent via-[#c9a45b]/30 to-transparent" />

        {/* ---------------------------------------- */}
        {/* LEGAL */}
        {/* ---------------------------------------- */}

        <div className="flex flex-col md:flex-row items-center justify-between gap-5">

          <div className="flex flex-wrap items-center justify-center md:justify-start gap-5 text-sm">

            <a
              href="/privacy-policy"
              className="text-[#bcae9f] hover:text-[#f1d17c] transition-colors"
            >
              Privacy Policy
            </a>

            <span className="text-[#59483c]">•</span>

            <a
              href="/terms"
              className="text-[#bcae9f] hover:text-[#f1d17c] transition-colors"
            >
              Terms of Service
            </a>

          </div>

          <p className="text-xs text-[#8e8176] text-center md:text-right">
            © {new Date().getFullYear()} {business_name}. All Rights Reserved.
          </p>

        </div>
      </motion.div>

      {/* ---------------------------------------- */}
      {/* DEVELOPER BAR */}
      {/* ---------------------------------------- */}

      <div className="relative z-20 border-t border-[#c9a45b]/10 bg-[#120a07]">

        <div className="max-w-[1400px] mx-auto px-5 md:px-10 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">

          <p className="text-xs md:text-sm text-[#85776c] text-center sm:text-left">
            Designed & Developed by{" "}
            <a
              href="https://wa.me/918886921826?text=Hello%20Pro%20Daddy%20Agency"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-[#d8b568] hover:text-[#f3d98b] transition-colors"
            >
              Eswar 
            </a>
          </p>

          <a
            href="https://www.astrologercenter.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-1 text-xs text-[#85776c] hover:text-[#d8b568] transition-colors"
          >
            astrologercenter.in
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>

        </div>
      </div>

    </footer>
  );
}

