
import {
  ArrowRight,
  Heart,
  Sparkles,
  Phone,
  ShieldCheck,
} from "lucide-react";
import { Link } from "react-router-dom";
import { business_name, person_name, phone_number } from "./secret";

const AllReligion = () => {
  return (
    <section className="relative overflow-hidden bg-[#faf8f3] py-16 md:py-24 px-5">

      {/* ---------------------------------------- */}
      {/* DECORATIVE BACKGROUND */}
      {/* ---------------------------------------- */}

      <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-[#d2aa55]/10 blur-3xl" />

      <div className="absolute -bottom-40 -right-32 w-96 h-96 rounded-full bg-[#8b1e1e]/5 blur-3xl" />

      {/* Decorative circles */}
      <div className="absolute top-20 right-[8%] hidden lg:block w-24 h-24 rounded-full border border-[#c9a45b]/20" />
      <div className="absolute bottom-16 left-[7%] hidden lg:block w-16 h-16 rounded-full border border-[#c9a45b]/20" />

      <div className="relative z-10 max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

        {/* ======================================== */}
        {/* LEFT CONTENT */}
        {/* ======================================== */}

        <div className="text-center lg:text-left">

          {/* Small Label */}
          <div className="flex items-center justify-center lg:justify-start gap-2 mb-5">

            <div className="w-9 h-9 rounded-full bg-[#20120d] flex items-center justify-center shadow-md">
              <Sparkles className="w-4 h-4 text-[#e2bd69]" />
            </div>

            <span className="open-sans text-xs md:text-sm font-bold tracking-[0.2em] text-[#9b722c]">
              SPIRITUAL GUIDANCE FOR EVERYONE
            </span>

          </div>

          {/* Main Title */}
          <h1 className="montserrat text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] text-[#291911]">

            Guidance Beyond
            <br />

            <span className="text-[#8b1e1e]">
              Boundaries
            </span>

          </h1>

          {/* Gold divider */}
          <div className="flex items-center justify-center lg:justify-start gap-3 my-6">

            <span className="w-20 h-[2px] bg-[#c9a45b]" />

            <span className="w-2 h-2 rotate-45 bg-[#c9a45b]" />

          </div>

          {/* Religion / Traditions */}
          <div className="inline-flex flex-wrap items-center justify-center lg:justify-start gap-2 mb-5">

            {["Hindu", "Muslim", "Christian"].map((item) => (
              <span
                key={item}
                className="px-4 py-2 rounded-full bg-white border border-[#dfd1bc] text-[#5c4536] text-sm font-semibold shadow-sm"
              >
                {item}
              </span>
            ))}

            <span className="text-[#9c7a45] font-semibold">
              • All Traditions
            </span>

          </div>

          {/* Name */}
          <h2 className="montserrat text-2xl md:text-3xl font-bold text-[#2d1b12]">
            {person_name}
          </h2>

          <p className="mt-1 text-sm font-semibold tracking-wide text-[#a17a38]">
            TRADITIONAL ASTROLOGY GUIDANCE
          </p>

          {/* Description */}
          <p className="mt-6 text-base md:text-lg leading-8 text-[#66584d] max-w-2xl mx-auto lg:mx-0">
            With deep spiritual knowledge across various traditions,{" "}
            <span className="font-semibold text-[#8b1e1e]">
              {person_name}
            </span>{" "}
            provides thoughtful guidance for love, relationships, marriage,
            family, career, business and personal challenges.
          </p>

          {/* Trust points */}
          <div className="mt-7 flex flex-wrap justify-center lg:justify-start gap-x-6 gap-y-3">

            <div className="flex items-center gap-2 text-sm text-[#66584d]">
              <ShieldCheck className="w-4 h-4 text-[#a77b2e]" />
              Personal Guidance
            </div>

            <div className="flex items-center gap-2 text-sm text-[#66584d]">
              <Heart className="w-4 h-4 text-[#a77b2e]" />
              Relationship Support
            </div>

            <div className="flex items-center gap-2 text-sm text-[#66584d]">
              <Sparkles className="w-4 h-4 text-[#a77b2e]" />
              Traditional Wisdom
            </div>

          </div>

          {/* CTA */}
          <div className="mt-8 flex flex-col sm:flex-row justify-center lg:justify-start gap-3">

            <a
              href={`tel:${phone_number}`}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#8b1e1e] text-white montserrat font-bold shadow-lg hover:bg-[#711717] hover:-translate-y-0.5 transition-all"
            >
              <Phone className="w-5 h-5" />
              Talk to Guruji
            </a>

            <Link
              to="/services"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border border-[#c9a45b] text-[#76531e] montserrat font-bold hover:bg-[#f4ecdc] transition-all"
            >
              View Services
              <ArrowRight className="w-5 h-5" />
            </Link>

          </div>

        </div>

        {/* ======================================== */}
        {/* RIGHT IMAGE COMPOSITION */}
        {/* ======================================== */}

        <div className="relative flex justify-center lg:justify-end">

          {/* Main decorative circle */}
          <div className="absolute w-[340px] h-[340px] md:w-[460px] md:h-[460px] rounded-full border border-[#c9a45b]/25" />

          <div className="absolute w-[280px] h-[280px] md:w-[390px] md:h-[390px] rounded-full border border-[#c9a45b]/15" />

          {/* Background glow */}
          <div className="absolute w-72 h-72 bg-[#d0a54d]/15 rounded-full blur-3xl" />

          {/* Image composition */}
          <div className="relative w-full max-w-[540px] h-[430px] md:h-[500px]">

            {/* Main image */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-52 h-64 md:w-64 md:h-80 z-20">

              <div className="absolute -inset-2 rounded-[28px] border border-[#c9a45b]/50" />

              <img
                src="https://i.pinimg.com/1200x/bd/97/40/bd97409df623fa54bddffa46c0997733.jpg"
                alt="Spiritual astrology guidance"
                className="relative w-full h-full object-cover rounded-[24px] shadow-2xl"
              />

              {/* Image overlay */}
              <div className="absolute inset-0 rounded-[24px] bg-gradient-to-t from-[#20120d]/40 to-transparent" />

            </div>

            {/* Top left image */}
            <div className="absolute left-2 md:left-5 top-5 md:top-10 w-36 h-36 md:w-44 md:h-44 z-10 rotate-[-5deg]">

              <img
                src="https://i.pinimg.com/1200x/f5/82/da/f582dab7a0f7f26ba5184b24cb7bcf04.jpg"
                alt="Traditional spiritual guidance"
                className="w-full h-full object-cover rounded-2xl border-4 border-[#faf8f3] shadow-xl"
              />

            </div>

            {/* Bottom right image */}
            <div className="absolute right-2 md:right-5 bottom-5 md:bottom-10 w-36 h-36 md:w-44 md:h-44 z-10 rotate-[5deg]">

              <img
                src="https://i.pinimg.com/736x/1f/64/18/1f64185a8bb1984e8cb57884460f6b58.jpg"
                alt="Astrology consultation"
                className="w-full h-full object-cover rounded-2xl border-4 border-[#faf8f3] shadow-xl"
              />

            </div>

            {/* Since badge */}
            <div className="absolute right-0 md:right-2 top-1/2 -translate-y-1/2 z-30 hidden sm:flex w-24 h-24 rounded-full bg-[#20120d] border-2 border-[#d3ad5c] items-center justify-center text-center shadow-2xl">

              <div>
                <p className="text-[8px] tracking-[0.18em] text-[#c6a45b]">
                  TRUSTED
                </p>

                <p className="montserrat text-xl font-extrabold text-[#f1d486]">
                  1956
                </p>

                <p className="text-[8px] tracking-[0.15em] text-[#c6a45b]">
                  ONWARDS
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>

      {/* ======================================== */}
      {/* BOTTOM BRAND STRIP */}
      {/* ======================================== */}

      <div className="relative z-10 max-w-[1400px] mx-auto mt-14">

        <div className="h-px bg-gradient-to-r from-transparent via-[#c9a45b]/30 to-transparent" />

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-2 text-center">

          <Sparkles className="w-4 h-4 text-[#bd9340]" />

          <p className="text-sm text-[#76675a]">
            {business_name}
            <span className="mx-2 text-[#b69452]">•</span>
            Traditional guidance with respect for every individual
          </p>

        </div>

      </div>

    </section>
  );
};

export default AllReligion;

