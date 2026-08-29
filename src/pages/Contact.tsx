import {
  MessageCircle,
  Phone,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Clock3,
  UserRound,
} from "lucide-react";

import Form from "../Genaral/Form";

import {
  person_name,
  business_name,
  phone_number,
  whatsapp_number,
} from "../Genaral/secret";

export default function Contact() {
  return (
    <main className="relative overflow-hidden bg-[#f7f3eb]">

      {/* ================================================= */}
      {/* HERO / INTRO */}
      {/* ================================================= */}

      <section className="relative overflow-hidden bg-[#21140e] py-16 md:py-24 px-5">

        {/* Background glow */}

        <div className="absolute -top-52 -right-52 w-[600px] h-[600px] rounded-full bg-[#c9a45b]/10 blur-3xl" />

        <div className="absolute -bottom-52 -left-52 w-[600px] h-[600px] rounded-full bg-[#8b1e1e]/10 blur-3xl" />

        <div className="relative z-10 max-w-4xl mx-auto text-center">

          <div className="flex items-center justify-center gap-2 mb-5">

            <Sparkles className="w-4 h-4 text-[#dfbd6b]" />

            <span className="text-xs md:text-sm font-bold tracking-[0.22em] text-[#d5b260]">
              PERSONAL CONSULTATION
            </span>

            <Sparkles className="w-4 h-4 text-[#dfbd6b]" />

          </div>

          <h1 className="montserrat text-4xl md:text-6xl font-extrabold text-[#fff8e9] leading-tight">

            Let's Talk About
            <span className="block text-[#e1be68]">
              What Matters To You
            </span>

          </h1>

          <div className="flex items-center justify-center gap-3 my-6">

            <span className="w-20 h-px bg-[#c9a45b]" />

            <span className="w-2 h-2 rotate-45 bg-[#c9a45b]" />

            <span className="w-20 h-px bg-[#c9a45b]" />

          </div>

          <p className="open-sans text-base md:text-lg leading-8 text-[#c8b9aa] max-w-2xl mx-auto">
            Connect with{" "}
            <span className="font-bold text-[#e1c26f]">
              {person_name}
            </span>{" "}
            for a private consultation and traditional guidance for your
            personal concerns.
          </p>

        </div>

      </section>

      {/* ================================================= */}
      {/* CONTACT + FORM */}
      {/* ================================================= */}

      <section className="relative py-12 md:py-20 px-5">

        <div className="max-w-[1150px] mx-auto grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-7 items-stretch">

          {/* ============================================= */}
          {/* CONTACT INFORMATION */}
          {/* ============================================= */}

          <div className="relative overflow-hidden rounded-[30px] bg-[#21140e] p-7 md:p-9 shadow-[0_20px_60px_rgba(45,27,18,0.18)]">

            {/* Glow */}

            <div className="absolute -top-32 -right-32 w-72 h-72 rounded-full bg-[#c9a45b]/10 blur-3xl" />

            <div className="relative">

              <div className="w-14 h-14 rounded-2xl bg-[#c9a45b]/10 border border-[#c9a45b]/30 flex items-center justify-center">

                <Phone className="w-7 h-7 text-[#dfbd6b]" />

              </div>

              <p className="mt-6 text-[10px] tracking-[0.2em] font-bold text-[#c9a45b]">
                GET IN TOUCH
              </p>

              <h2 className="mt-2 montserrat text-2xl md:text-3xl font-extrabold text-[#fff7e7]">
                We're Here To Listen
              </h2>

              <p className="mt-4 text-sm leading-7 text-[#c5b5a5]">
                Tell us what you're looking for and we'll help you choose
                the right way to connect.
              </p>

              {/* ================================= */}
              {/* CONTACT OPTIONS */}
              {/* ================================= */}

              <div className="mt-8 space-y-3">

                {/* Phone */}

                <a
                  href={`tel:${phone_number}`}
                  className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 hover:bg-white/10 transition-all"
                >

                  <div className="w-11 h-11 rounded-xl bg-[#8b1e1e] flex items-center justify-center shrink-0">

                    <Phone className="w-5 h-5 text-white" />

                  </div>

                  <div className="flex-1">

                    <p className="text-[9px] tracking-[0.15em] font-bold text-[#c9a45b]">
                      PHONE
                    </p>

                    <p className="mt-1 text-sm font-semibold text-white">
                      {phone_number}
                    </p>

                  </div>

                  <ArrowRight className="w-4 h-4 text-[#8f8173] group-hover:text-[#e1c26f] group-hover:translate-x-1 transition-all" />

                </a>

                {/* WhatsApp */}

                <a
                  href={`https://wa.me/${whatsapp_number}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 hover:bg-white/10 transition-all"
                >

                  <div className="w-11 h-11 rounded-xl bg-[#315d3c] flex items-center justify-center shrink-0">

                    <MessageCircle className="w-5 h-5 text-white" />

                  </div>

                  <div className="flex-1">

                    <p className="text-[9px] tracking-[0.15em] font-bold text-[#c9a45b]">
                      WHATSAPP
                    </p>

                    <p className="mt-1 text-sm font-semibold text-white">
                      {whatsapp_number}
                    </p>

                  </div>

                  <ArrowRight className="w-4 h-4 text-[#8f8173] group-hover:text-[#e1c26f] group-hover:translate-x-1 transition-all" />

                </a>

              </div>

              {/* ================================= */}
              {/* TRUST POINTS */}
              {/* ================================= */}

              <div className="mt-8 pt-6 border-t border-white/10 space-y-4">

                <div className="flex items-center gap-3">

                  <ShieldCheck className="w-5 h-5 text-[#d3b35f]" />

                  <span className="text-sm text-[#cbbcaf]">
                    Personal and respectful consultation
                  </span>

                </div>

                <div className="flex items-center gap-3">

                  <UserRound className="w-5 h-5 text-[#d3b35f]" />

                  <span className="text-sm text-[#cbbcaf]">
                    Guidance tailored to your concerns
                  </span>

                </div>

                <div className="flex items-center gap-3">

                  <Clock3 className="w-5 h-5 text-[#d3b35f]" />

                  <span className="text-sm text-[#cbbcaf]">
                    Appointment-based consultations
                  </span>

                </div>

              </div>

            </div>

          </div>

          {/* ============================================= */}
          {/* FORM */}
          {/* ============================================= */}

          <div className="relative rounded-[30px] bg-white border border-[#e0d5c5] p-6 md:p-9 shadow-[0_20px_60px_rgba(52,35,22,0.10)]">

            <div className="text-center mb-7">

              <div className="inline-flex items-center gap-2 rounded-full bg-[#f2e9da] px-4 py-2">

                <Sparkles className="w-4 h-4 text-[#9a702d]" />

                <span className="text-xs font-bold tracking-[0.12em] text-[#8b1e1e]">
                  BOOK A CONSULTATION
                </span>

              </div>

              <h2 className="montserrat mt-5 text-2xl md:text-3xl font-extrabold text-[#291911]">
                Tell Us How We Can Help
              </h2>

              <p className="mt-2 text-sm text-[#817367]">
                Fill in your details and we'll get back to you.
              </p>

            </div>

            {/* Existing form */}

            <div className="contact-form">

              <Form />

            </div>

          </div>

        </div>

      </section>

      {/* ================================================= */}
      {/* SERVICES STRIP */}
      {/* ================================================= */}

      <section className="relative bg-[#f0e8db] border-y border-[#dfd2c0] py-14 px-5">

        <div className="max-w-[1100px] mx-auto text-center">

          <p className="text-xs font-bold tracking-[0.2em] text-[#96702f]">
            AREAS OF GUIDANCE
          </p>

          <h2 className="montserrat mt-3 text-2xl md:text-4xl font-extrabold text-[#291911]">
            Guidance For Important Areas Of Life
          </h2>

          <div className="flex items-center justify-center gap-3 my-5">

            <span className="w-12 h-px bg-[#c9a45b]" />

            <span className="w-2 h-2 rotate-45 bg-[#c9a45b]" />

            <span className="w-12 h-px bg-[#c9a45b]" />

          </div>

          <div className="flex flex-wrap justify-center gap-3 mt-7">

            {[
              "Love & Relationships",
              "Marriage",
              "Family",
              "Career",
              "Business",
              "Vastu",
              "Personal Guidance",
            ].map((item) => (

              <span
                key={item}
                className="px-4 py-2.5 rounded-full bg-white border border-[#dfd3c2] text-sm font-semibold text-[#5f5045] shadow-sm"
              >
                {item}
              </span>

            ))}

          </div>

        </div>

      </section>

      {/* ================================================= */}
      {/* FINAL CTA */}
      {/* ================================================= */}

      <section className="relative bg-[#21140e] py-14 px-5 overflow-hidden">

        <div className="absolute inset-0 bg-gradient-to-r from-[#21140e] via-[#2b1711] to-[#21140e]" />

        <div className="relative z-10 max-w-4xl mx-auto text-center">

          <p className="text-xs font-bold tracking-[0.2em] text-[#c9a45b]">
            {business_name}
          </p>

          <h2 className="montserrat mt-3 text-2xl md:text-4xl font-extrabold text-[#fff8e9]">
            Ready To Start A Conversation?
          </h2>

          <p className="mt-3 text-sm md:text-base text-[#bcae9e]">
            Reach out directly by phone or WhatsApp.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-3 mt-7">

            <a
              href={`tel:${phone_number}`}
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-[#8b1e1e] text-white font-bold hover:bg-[#a32727] hover:-translate-y-0.5 transition-all"
            >
              <Phone className="w-5 h-5" />
              Call Now
            </a>

            <a
              href={`https://wa.me/${whatsapp_number}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl border border-[#c9a45b]/40 text-[#e3c675] font-bold hover:bg-[#c9a45b]/10 transition-all"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp
            </a>

          </div>

        </div>

      </section>

    </main>
  );
}
