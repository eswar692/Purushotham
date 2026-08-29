import {
  ArrowRight,
  MessageCircle,
  Phone,
  Sparkles,
} from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  business_name,
  person_name,
  phone_number,
  whatsapp_number,
} from "./secret";

export default function ProblemGrid() {
  const items = [
    {
      title: "Relationship Guidance",
      img: "https://i.pinimg.com/736x/64/f2/c0/64f2c022c60b2138e37148c32b859ad7.jpg",
      desc: "Thoughtful guidance for relationship concerns, communication and harmony.",
    },
    {
      title: "Partner Harmony",
      img: "https://i.pinimg.com/736x/66/5b/59/665b598c7bc1684e8b421ff67a0dabd3.jpg",
      desc: "Guidance focused on understanding, trust and emotional connection.",
    },
    {
      title: "Couple Harmony",
      img: "https://i.pinimg.com/1200x/7d/28/3e/7d283e6401a3df9c6d268263a7a960b0.jpg",
      desc: "Traditional guidance for closeness, communication and mutual understanding.",
    },
    {
      title: "Love Guidance",
      img: "https://i.pinimg.com/736x/78/da/83/78da83ed7841917877d35e668c66b864.jpg",
      desc: "Personalized guidance for love, communication and relationship concerns.",
    },
    {
      title: "Marriage Guidance",
      img: "https://i.pinimg.com/736x/5d/a3/5c/5da35c351423d9b066f03c47aab8c74b.jpg",
      desc: "Traditional guidance for marriage, communication and family harmony.",
    },
    {
      title: "Vastu Guidance",
      img: "https://i.pinimg.com/736x/50/11/6a/50116aec7d278f787dae6de669d39e6b.jpg",
      desc: "Traditional Vastu guidance for balanced homes and workspaces.",
    },
    {
      title: "Career Guidance",
      img: "https://i.pinimg.com/736x/35/47/48/354748471cbad482eccf036d1db1a86c.jpg",
      desc: "Guidance for career decisions, confidence and personal growth.",
    },
    {
      title: "Family Harmony",
      img: "https://i.pinimg.com/736x/9a/ab/ac/9aabac56c514a27cbcc112b5fc220642.jpg",
      desc: "Supportive guidance for family relationships and misunderstandings.",
    },
    {
      title: "Breakup Support",
      img: "https://i.pinimg.com/736x/f9/83/a2/f983a2bb11d4e8058f3d65aa178c13d4.jpg",
      desc: "Compassionate guidance for separation and difficult relationship periods.",
    },
    {
      title: "Positive Energy",
      img: "https://i0.wp.com/www.royalperspectives.com/wp-content/uploads/2023/08/what-do-your-enemies-hate-about-you-the-most-2-354-1574696841-0_dblbig.jpg?fit=1200%2C797&ssl=1",
      desc: "Traditional practices focused on positivity, peace and personal wellbeing.",
    },
    {
      title: "Couples Guidance",
      img: "https://i.pinimg.com/736x/52/08/b9/5208b9f29d6163bb20c66768a3e03969.jpg",
      desc: "Guidance for couples seeking understanding, harmony and family wellbeing.",
    },
    {
      title: "Puja & Mantras",
      img: "https://i.pinimg.com/736x/43/8a/12/438a12dde5f045a8a6a4a25b1b1cccce.jpg",
      desc: "Traditional pujas, mantras and spiritual practices for personal guidance.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#f7f3eb] py-16 md:py-24 px-5">

      {/* ---------------------------------------- */}
      {/* BACKGROUND DECORATION */}
      {/* ---------------------------------------- */}

      <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-[#c9a45b]/10 blur-3xl" />

      <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-[#8b1e1e]/5 blur-3xl" />

      <div className="absolute top-1/3 left-10 hidden xl:block w-20 h-20 rounded-full border border-[#c9a45b]/20" />

      <div className="absolute bottom-20 right-10 hidden xl:block w-28 h-28 rounded-full border border-[#c9a45b]/15" />

      <div className="relative z-10 max-w-[1400px] mx-auto">

        {/* ======================================== */}
        {/* HEADING */}
        {/* ======================================== */}

        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">

          {/* Label */}
          <div className="flex items-center justify-center gap-2 mb-4">

            <Sparkles className="w-4 h-4 text-[#b28535]" />

            <span className="open-sans text-xs md:text-sm font-bold tracking-[0.22em] text-[#96702f]">
              AREAS OF GUIDANCE
            </span>

            <Sparkles className="w-4 h-4 text-[#b28535]" />

          </div>

          {/* Heading */}
          <h2 className="montserrat text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#2b1a12] leading-tight">

            Find Guidance For
            <span className="block text-[#8b1e1e]">
              What Matters Most
            </span>

          </h2>

          {/* Divider */}
          <div className="flex items-center justify-center gap-3 my-5">

            <span className="w-16 h-[2px] bg-[#c9a45b]" />

            <span className="w-2 h-2 rotate-45 bg-[#c9a45b]" />

            <span className="w-16 h-[2px] bg-[#c9a45b]" />

          </div>

          <p className="open-sans text-base md:text-lg leading-7 text-[#6c5d51]">
            {person_name} offers traditional astrology and spiritual guidance
            for relationships, marriage, family, career and other important
            areas of life.
          </p>

          {/* Tradition tags */}
          <div className="flex flex-wrap justify-center gap-2 mt-5">

            {[
              "Hindu Tradition",
              "Muslim Tradition",
              "Christian Tradition",
              "All Individuals Welcome",
            ].map((item) => (
              <span
                key={item}
                className="px-3 py-1.5 rounded-full bg-white border border-[#dfd2bf] text-xs md:text-sm font-semibold text-[#695548]"
              >
                {item}
              </span>
            ))}

          </div>

        </div>

        {/* ======================================== */}
        {/* SERVICE GRID */}
        {/* ======================================== */}

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 md:gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.08 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.06,
              },
            },
          }}
        >

          {items.map((it, idx) => (
            <motion.article
              key={idx}
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
              transition={{ duration: 0.5 }}
              className="group relative bg-white rounded-2xl overflow-hidden border border-[#e5dac9] shadow-[0_8px_30px_rgba(52,35,22,0.07)] hover:shadow-[0_18px_45px_rgba(52,35,22,0.14)] hover:-translate-y-1.5 transition-all duration-300"
            >

              {/* -------------------------------- */}
              {/* IMAGE */}
              {/* -------------------------------- */}

              <div className="relative h-52 overflow-hidden">

                <img
                  src={it.img}
                  alt={it.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />

                {/* Image overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#20120d]/70 via-transparent to-transparent" />

                {/* Number */}
                <div className="absolute top-3 left-3 w-8 h-8 rounded-full bg-[#20120d]/75 backdrop-blur-sm border border-[#e1bf70]/50 flex items-center justify-center">

                  <span className="text-[11px] font-bold text-[#f0d58b]">
                    {String(idx + 1).padStart(2, "0")}
                  </span>

                </div>

                {/* Image title */}
                <div className="absolute bottom-3 left-4 right-4">

                  <span className="inline-block px-3 py-1 rounded-full bg-[#20120d]/75 backdrop-blur-md border border-[#e1bf70]/30 text-xs font-semibold text-[#f5dda0]">
                    {it.title}
                  </span>

                </div>

              </div>

              {/* -------------------------------- */}
              {/* CONTENT */}
              {/* -------------------------------- */}

              <div className="p-5">

                <h3 className="montserrat text-lg font-bold text-[#2e1c13]">
                  {it.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-[#75675c] min-h-[72px]">
                  {it.desc}
                </p>

                {/* Explore */}
                <Link
                  to="/services"
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-[#8b1e1e] hover:text-[#b07b27] transition-colors"
                >
                  Explore Guidance
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>

              </div>

            </motion.article>
          ))}

        </motion.div>

        {/* ======================================== */}
        {/* BOTTOM CTA */}
        {/* ======================================== */}

        <div className="mt-14 md:mt-16 relative overflow-hidden rounded-3xl bg-[#20120d] px-6 py-9 md:px-10 md:py-10">

          {/* Decorative glow */}
          <div className="absolute -right-20 -top-20 w-64 h-64 rounded-full bg-[#c9a45b]/10 blur-3xl" />

          <div className="relative flex flex-col lg:flex-row items-center justify-between gap-7">

            <div className="text-center lg:text-left">

              <div className="flex items-center justify-center lg:justify-start gap-2 mb-2">

                <Sparkles className="w-4 h-4 text-[#e0bd6a]" />

                <span className="text-xs font-bold tracking-[0.2em] text-[#d8b568]">
                  PERSONAL CONSULTATION
                </span>

              </div>

              <h3 className="montserrat text-2xl md:text-3xl font-extrabold text-[#fff7e8]">
                Not sure which guidance you need?
              </h3>

              <p className="mt-2 text-sm md:text-base text-[#cbbcaf]">
                Speak directly with {person_name} and discuss your situation
                personally.
              </p>

            </div>

            <div className="flex flex-col sm:flex-row gap-3 shrink-0">

              <a
                href={`tel:${phone_number}`}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#8b1e1e] text-white montserrat font-bold shadow-lg hover:bg-[#a32727] hover:-translate-y-0.5 transition-all"
              >
                <Phone className="w-5 h-5" />
                Call Now
              </a>

              <a
                href={`https://wa.me/91${whatsapp_number}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border border-[#c9a45b]/50 text-[#f1d58e] montserrat font-bold hover:bg-[#c9a45b]/10 transition-all"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp
              </a>

            </div>

          </div>

        </div>

        {/* ======================================== */}
        {/* BRAND NOTE */}
        {/* ======================================== */}

        <div className="mt-8 flex items-center justify-center gap-2 text-center">

          <span className="w-8 h-px bg-[#c9a45b]/50" />

          <p className="text-xs md:text-sm text-[#85766a]">
            Traditional guidance • Personal attention • {business_name}
          </p>

          <span className="w-8 h-px bg-[#c9a45b]/50" />

        </div>

      </div>
    </section>
  );
}

