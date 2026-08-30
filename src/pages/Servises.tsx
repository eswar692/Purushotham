import {
  Phone,
  MessageCircle,
  Sparkles,
  ArrowRight,
} from "lucide-react";

import {
  phone_number,
  whatsapp_number,
  business_name,
} from "../Genaral/secret";

const services = [
  {
    name: "Love Problems",
    short: "Love & Relationships",
    desc: "Guidance for lost love, misunderstandings, emotional concerns, and building healthier relationships.",
    img: "https://i.pinimg.com/736x/e8/91/e8/e891e8ff7fdef71d225d4eb0ffc88d45.jpg",
  },
  {
    name: "Marriage Issues",
    short: "Marriage Guidance",
    desc: "Traditional guidance for compatibility, communication, married-life concerns, and relationship harmony.",
    img: "https://i.pinimg.com/1200x/5c/e9/ab/5ce9ab9d0a7220e4c76b07afe1bd165c.jpg",
  },
  {
    name: "Court Cases",
    short: "Legal Matters",
    desc: "Traditional astrological guidance for people navigating legal concerns, disputes, and difficult situations.",
    img: "https://i.pinimg.com/736x/72/3b/91/723b91a840e8c25bc48dd9229fbf9346.jpg",
  },
  {
    name: "Finance Problems",
    short: "Financial Guidance",
    desc: "Guidance for financial decisions, business concerns, investments, and working toward greater stability.",
    img: "https://i.pinimg.com/736x/b2/52/c6/b252c6de7017f650f1bc359376c67614.jpg",
  },
  {
    name: "Education Guidance",
    short: "Education & Studies",
    desc: "Personalized guidance for students seeking better focus, confidence, educational direction, and higher studies.",
    img: "https://i.pinimg.com/736x/9b/9b/85/9b9b85cb47685834c67847e58dad4a1d.jpg",
  },
  {
    name: "Career Growth",
    short: "Career Guidance",
    desc: "Guidance for career decisions, job opportunities, professional growth, workplace challenges, and new directions.",
    img: "https://i.pinimg.com/736x/51/3a/68/513a68831469aa23ffda70e7ab9fcc90.jpg",
  },
  {
    name: "Future Predictions",
    short: "Horoscope Reading",
    desc: "Personalized horoscope readings offering traditional insights into important areas and future possibilities.",
    img: "https://i.pinimg.com/736x/28/c2/ce/28c2ce0800375da2317f4792e196e86e.jpg",
  },
];


const reverse = services.reverse()

export default function Services() {
  return (
    <main className="relative overflow-hidden bg-[#f7f3eb]">

      {/* ================================================= */}
      {/* HERO */}
      {/* ================================================= */}

      <section className="relative bg-[#21140e] py-16 md:py-24 px-5 overflow-hidden">

        {/* Decorative glow */}

        <div className="absolute -top-60 -right-60 w-[650px] h-[650px] rounded-full bg-[#c9a45b]/10 blur-3xl" />

        <div className="absolute -bottom-60 -left-60 w-[650px] h-[650px] rounded-full bg-[#8b1e1e]/10 blur-3xl" />

        <div className="relative z-10 max-w-4xl mx-auto text-center">

          <div className="flex items-center justify-center gap-2 mb-5">

            <Sparkles className="w-4 h-4 text-[#dfbd6b]" />

            <span className="text-xs md:text-sm font-bold tracking-[0.22em] text-[#d5b260]">
              OUR SERVICES
            </span>

            <Sparkles className="w-4 h-4 text-[#dfbd6b]" />

          </div>

          <h1 className="montserrat text-4xl md:text-6xl font-extrabold text-[#fff8e9] leading-tight">

            Traditional Guidance
            <span className="block text-[#e1be68]">
              For Life's Important Moments
            </span>

          </h1>

          <div className="flex items-center justify-center gap-3 my-6">

            <span className="w-20 h-px bg-[#c9a45b]" />

            <span className="w-2 h-2 rotate-45 bg-[#c9a45b]" />

            <span className="w-20 h-px bg-[#c9a45b]" />

          </div>

          <p className="open-sans text-base md:text-lg leading-8 text-[#c8b9aa] max-w-2xl mx-auto">
            Explore our range of personalized astrology and spiritual
            guidance services for relationships, marriage, career,
            family, business, and personal concerns.
          </p>

        </div>

      </section>

      {/* ================================================= */}
      {/* SERVICES */}
      {/* ================================================= */}

      <section className="relative py-14 md:py-20 px-5">

        {/* Soft background glow */}

        <div className="absolute top-20 left-0 w-80 h-80 rounded-full bg-[#c9a45b]/5 blur-3xl pointer-events-none" />

        <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-[#8b1e1e]/5 blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-[1200px] mx-auto">

          {/* Section intro */}

          <div className="text-center max-w-2xl mx-auto mb-12">

            <p className="text-xs font-bold tracking-[0.2em] text-[#96702f]">
              AREAS OF GUIDANCE
            </p>

            <h2 className="montserrat mt-3 text-3xl md:text-4xl font-extrabold text-[#291911]">
              How We Can Help
            </h2>

            <div className="flex items-center justify-center gap-3 my-5">

              <span className="w-14 h-px bg-[#c9a45b]" />

              <span className="w-2 h-2 rotate-45 bg-[#c9a45b]" />

              <span className="w-14 h-px bg-[#c9a45b]" />

            </div>

          </div>

          {/* ================================================= */}
          {/* SERVICE GRID */}
          {/* ================================================= */}

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">

            {reverse
            .map((service, index) => (

              <article
                key={index}
                className="group relative overflow-hidden rounded-[26px] bg-white border border-[#e1d6c6] shadow-[0_12px_40px_rgba(52,35,22,0.08)] hover:shadow-[0_20px_55px_rgba(52,35,22,0.15)] hover:-translate-y-2 transition-all duration-500"
              >

                {/* Image */}

                <div className="relative h-64 overflow-hidden">

                  <img
                    src={service.img}
                    alt={service.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />

                  {/* Image overlay */}

                  <div className="absolute inset-0 bg-gradient-to-t from-[#21140e]/80 via-[#21140e]/10 to-transparent" />

                  {/* Number */}

                  <div className="absolute top-4 left-4 w-9 h-9 rounded-full bg-[#21140e]/85 backdrop-blur-sm border border-[#dfbd6b]/40 flex items-center justify-center">

                    <span className="text-xs font-bold text-[#e1c26f]">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                  </div>

                  {/* Image title */}

                  <div className="absolute bottom-5 left-5 right-5">

                    <p className="text-[9px] tracking-[0.18em] font-bold text-[#e1c26f]">
                      {service.short.toUpperCase()}
                    </p>

                    <h3 className="mt-1 montserrat text-xl font-extrabold text-white">
                      {service.name}
                    </h3>

                  </div>

                </div>

                {/* Content */}

                <div className="p-6">

                  <p className="open-sans text-sm leading-7 text-[#6d6056] min-h-[84px]">
                    {service.desc}
                  </p>

                  {/* Divider */}

                  <div className="h-px bg-[#ece4d8] my-5" />

                  {/* Actions */}

                  <div className="grid grid-cols-2 gap-3">

                    {/* Call */}

                    <a
                      href={`tel:${phone_number}`}
                      className="flex items-center justify-center gap-2 py-3 rounded-xl bg-[#8b1e1e] text-white text-sm font-bold hover:bg-[#a32727] hover:-translate-y-0.5 transition-all shadow-sm"
                    >

                      <Phone className="w-4 h-4" />

                      Call

                    </a>

                    {/* WhatsApp */}

                    <a
                      href={`https://wa.me/${whatsapp_number}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 py-3 rounded-xl border border-[#315d3c]/25 bg-[#315d3c]/5 text-[#315d3c] text-sm font-bold hover:bg-[#315d3c] hover:text-white transition-all"
                    >

                      <MessageCircle className="w-4 h-4" />

                      WhatsApp

                    </a>

                  </div>

                </div>

                {/* Bottom gold line */}

                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#8b1e1e] via-[#c9a45b] to-[#8b1e1e] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              </article>

            ))}

          </div>

        </div>

      </section>

      {/* ================================================= */}
      {/* CONSULTATION CTA */}
      {/* ================================================= */}

      <section className="relative bg-[#21140e] py-14 md:py-18 px-5 overflow-hidden">

        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[500px] h-[300px] rounded-full bg-[#c9a45b]/8 blur-3xl" />

        <div className="relative z-10 max-w-4xl mx-auto text-center">

          <div className="flex justify-center mb-4">

            <div className="w-12 h-12 rounded-full border border-[#c9a45b]/30 bg-[#c9a45b]/10 flex items-center justify-center">

              <Sparkles className="w-5 h-5 text-[#dfbd6b]" />

            </div>

          </div>

          <p className="text-[10px] tracking-[0.2em] font-bold text-[#c9a45b]">
            {business_name}
          </p>

          <h2 className="montserrat mt-3 text-2xl md:text-4xl font-extrabold text-[#fff8e9]">
            Looking For Personal Guidance?
          </h2>

          <p className="mt-3 text-sm md:text-base text-[#bcae9e] max-w-xl mx-auto leading-7">
            Choose a convenient way to connect and discuss your concerns
            privately.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-3 mt-7">

            <a
              href={`tel:${phone_number}`}
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-[#8b1e1e] text-white font-bold hover:bg-[#a32727] hover:-translate-y-0.5 transition-all shadow-lg"
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
              Chat on WhatsApp
              <ArrowRight className="w-4 h-4" />
            </a>

          </div>

        </div>

      </section>

    </main>
  );
}
