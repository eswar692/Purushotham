import {
  ArrowRight,
  Clock,
  MapPin,
  Phone,
  Sparkles,
  Star,
} from "lucide-react";

import {
  person_name,
  phone_number,
} from "../Genaral/secret";

export default function KannadaAstrologerModern() {
  const problems = [
    "ಸ್ತ್ರೀ-ಪುರುಷ ವಶೀಕರಣ",
    "ಮದುವೆ ವಿಳಂಬ",
    "ಸಂತಾನದೋಷ",
    "ಡೈವೋರ್ಸ್ ಸಮಸ್ಯೆ",
    "ಕೋರ್ಟ್ ಕೇಸ್",
    "ಆರ್ಥಿಕ ಸಮಸ್ಯೆ",
    "ಗಂಡ-ಹೆಂಡತಿ ಸಮಸ್ಯೆ",
    "ಕುಟುಂಬ ಸಮಸ್ಯೆ",
  ];

  const services = [
    "ಜ್ಯೋತಿಷ್ಯ",
    "ಹಸ್ತ ರೇಖೆ",
    "ವಾಸ್ತು",
    "ಆಧ್ಯಾತ್ಮಿಕ ಮಾರ್ಗದರ್ಶನ",
  ];

  return (
    <section className="relative overflow-hidden bg-[#100817] py-16 md:py-24 px-4 sm:px-6">

      {/* Background Glow */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-fuchsia-600/20 blur-[120px]" />

      <div className="absolute top-1/3 -right-40 w-[500px] h-[500px] rounded-full bg-amber-500/15 blur-[120px]" />

      <div className="absolute -bottom-40 left-1/3 w-[500px] h-[500px] rounded-full bg-purple-700/20 blur-[120px]" />

      {/* Pattern */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative max-w-6xl mx-auto">

        {/* ============================= */}
        {/* TOP BADGE */}
        {/* ============================= */}

        <div className="flex justify-center mb-6">

          <div className="inline-flex items-center gap-2 rounded-full border border-amber-300/20 bg-white/[0.06] backdrop-blur-xl px-5 py-2 shadow-xl">

            <Sparkles className="w-4 h-4 text-amber-300" />

            <span
              className="text-xs sm:text-sm font-bold tracking-[0.15em] text-amber-200"
              style={{
                fontFamily: "'Noto Sans Kannada', sans-serif",
              }}
            >
              ವಿಶೇಷ ಜ್ಯೋತಿಷ್ಯ ಮಾರ್ಗದರ್ಶನ
            </span>

          </div>

        </div>

        {/* ============================= */}
        {/* HEADING */}
        {/* ============================= */}

        <div className="text-center max-w-4xl mx-auto">

          <h2
            className="text-4xl sm:text-5xl md:text-7xl font-black leading-tight text-white"
            style={{
              fontFamily: "'Noto Sans Kannada', sans-serif",
            }}
          >
            ಕೇರಳದ ಮಾಂತ್ರಿಕ
          </h2>

          <h3
            className="mt-2 text-3xl sm:text-4xl md:text-6xl font-black bg-gradient-to-r from-amber-200 via-yellow-400 to-orange-400 bg-clip-text text-transparent"
            style={{
              fontFamily: "'Noto Sans Kannada', sans-serif",
            }}
          >
            ಜ್ಯೋತಿಷ್ಯರು
          </h3>

          <p
            className="mt-5 text-xl sm:text-2xl md:text-3xl font-bold text-white/90"
            style={{
              fontFamily: "'Noto Sans Kannada', sans-serif",
            }}
          >
            {person_name}
          </p>

          {/* Gold Divider */}
          <div className="flex items-center justify-center gap-3 my-6">

            <span className="w-16 md:w-24 h-px bg-gradient-to-r from-transparent to-amber-400" />

            <Star className="w-4 h-4 fill-amber-400 text-amber-400" />

            <span className="w-16 md:w-24 h-px bg-gradient-to-l from-transparent to-amber-400" />

          </div>

          <p className="text-sm md:text-lg text-white/60 max-w-2xl mx-auto">
            Traditional astrology, spiritual guidance and personalized
            solutions for life's important concerns.
          </p>

        </div>

        {/* ============================= */}
        {/* MAIN CARDS */}
        {/* ============================= */}

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-6 items-stretch">

          {/* ============================= */}
          {/* PROFILE CARD */}
          {/* ============================= */}

          <div className="relative overflow-hidden rounded-[30px] border border-white/10 bg-gradient-to-br from-white/[0.10] to-white/[0.03] backdrop-blur-xl p-7 md:p-9 shadow-2xl">

            <div className="absolute -top-20 -right-20 w-56 h-56 rounded-full bg-amber-400/10 blur-3xl" />

            <div className="relative">

              {/* Icon */}
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-300 to-orange-500 flex items-center justify-center shadow-lg shadow-orange-500/20">

                <Sparkles className="w-8 h-8 text-[#24120a]" />

              </div>

              <p className="mt-7 text-xs tracking-[0.2em] text-amber-300 font-bold">
                ASTROLOGER
              </p>

              <h3
                className="mt-2 text-3xl md:text-4xl font-black text-white"
                style={{
                  fontFamily: "'Noto Sans Kannada', sans-serif",
                }}
              >
                {person_name}
              </h3>

              <p className="mt-3 text-sm leading-6 text-white/60">
                Traditional spiritual and astrological guidance with
                personalized consultation.
              </p>

              {/* Phone */}
              <a
                href={`tel:${phone_number}`}
                className="mt-7 flex items-center gap-4 rounded-2xl bg-white/[0.06] border border-white/10 p-4 hover:bg-white/[0.10] transition"
              >

                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-fuchsia-500 to-purple-600 flex items-center justify-center shrink-0">

                  <Phone className="w-5 h-5 text-white" />

                </div>

                <div>

                  <p className="text-xs text-white/50">
                    CONSULTATION
                  </p>

                  <p className="text-lg font-bold text-white tracking-wide">
                    {phone_number}
                  </p>

                </div>

              </a>

              {/* CTA */}
              <a
                href={`tel:${phone_number}`}
                className="mt-5 flex items-center justify-center gap-2 w-full rounded-2xl bg-gradient-to-r from-amber-400 via-orange-400 to-red-500 py-3.5 text-sm font-black text-[#24120a] shadow-lg shadow-orange-500/20 hover:scale-[1.02] transition"
              >

                <Phone className="w-4 h-4" />

                ಸಂಪರ್ಕಿಸಿ

                <ArrowRight className="w-4 h-4" />

              </a>

            </div>

          </div>

          {/* ============================= */}
          {/* INFORMATION CARD */}
          {/* ============================= */}

          <div className="rounded-[30px] border border-white/10 bg-white/[0.045] backdrop-blur-xl p-7 md:p-9 shadow-2xl">

            <div
              className="text-base sm:text-lg md:text-xl leading-[1.9] text-white/75"
              style={{
                fontFamily: "'Noto Sans Kannada', sans-serif",
              }}
            >

              <p>
                ಚಿತ್ರದುರ್ಗದಲ್ಲಿ ಖಾಯಂಯಾಗಿ ನೆಲೆಸಿದ್ದಾರೆ. ಹಸ್ತ, ರಾಶಿ,
                ಮುಖ ಲಕ್ಷಣ, ಜಾತಕ ಮತ್ತು ಕುಂಡಲಿ ಆಧಾರದ ಮೇಲೆ
                ಜೀವನದ ಪ್ರಮುಖ ವಿಷಯಗಳ ಕುರಿತು ಮಾರ್ಗದರ್ಶನ ನೀಡುತ್ತಾರೆ.
              </p>

              {/* Problems */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-7">

                {problems.map((item) => (

                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-xl border border-amber-300/10 bg-amber-300/[0.04] px-4 py-3"
                  >

                    <span className="w-2 h-2 rounded-full bg-amber-400 shrink-0" />

                    <p className="text-sm md:text-base text-white">
                      {item}
                    </p>

                  </div>

                ))}

              </div>

              {/* Highlight */}
              <div className="rounded-2xl border border-fuchsia-400/20 bg-gradient-to-r from-fuchsia-500/[0.08] to-purple-500/[0.08] p-5 text-center">

                <Sparkles className="w-5 h-5 text-amber-300 mx-auto mb-3" />

                <p>
                  ನಿಮ್ಮ ಯಾವುದೇ ಸಮಸ್ಯೆಗಳ ಕುರಿತು ವೈಯಕ್ತಿಕ
                  ಆಧ್ಯಾತ್ಮಿಕ ಮಾರ್ಗದರ್ಶನಕ್ಕಾಗಿ ಸಂಪರ್ಕಿಸಿ.
                </p>

              </div>

            </div>

          </div>

        </div>

        {/* ============================= */}
        {/* SERVICES */}
        {/* ============================= */}

        <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-3">

          {services.map((item) => (

            <div
              key={item}
              className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-4 text-center hover:bg-white/[0.08] transition"
            >

              <p
                className="text-sm md:text-base font-semibold text-white/70"
                style={{
                  fontFamily: "'Noto Sans Kannada', sans-serif",
                }}
              >
                {item}
              </p>

            </div>

          ))}

        </div>

        {/* ============================= */}
        {/* LOCATION + TIME */}
        {/* ============================= */}

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">

          {/* Location */}

          <div className="rounded-2xl border border-white/10 bg-white/[0.045] p-5 flex items-start gap-4">

            <div className="w-11 h-11 rounded-xl bg-purple-500/15 flex items-center justify-center shrink-0">

              <MapPin className="w-5 h-5 text-fuchsia-300" />

            </div>

            <div>

              <p className="text-xs tracking-widest text-white/40 font-bold">
                ADDRESS
              </p>

              <p
                className="mt-2 text-sm md:text-base leading-6 text-white/70"
                style={{
                  fontFamily: "'Noto Sans Kannada', sans-serif",
                }}
              >
                ಸರ್ಕಾರಿ ಆಸ್ಪತ್ರೆ ಕೆಳಗೆ, ಚರ್ಚ್ ರಸ್ತೆ,
                ವಾಸವಿ ಲ್ಯಾಬ್ ಹತ್ತಿರ,
                ಮಂಜುನಾಥ ಫ್ಲೋರ್ ಮಿಲ್ ಪಕ್ಕ,
                ಚಿತ್ರದುರ್ಗ.
              </p>

            </div>

          </div>

          {/* Timing */}

          <div className="rounded-2xl border border-white/10 bg-white/[0.045] p-5 flex items-start gap-4">

            <div className="w-11 h-11 rounded-xl bg-amber-400/10 flex items-center justify-center shrink-0">

              <Clock className="w-5 h-5 text-amber-300" />

            </div>

            <div>

              <p className="text-xs tracking-widest text-white/40 font-bold">
                CONSULTATION HOURS
              </p>

              <p
                className="mt-2 text-sm md:text-base text-white/70"
                style={{
                  fontFamily: "'Noto Sans Kannada', sans-serif",
                }}
              >
                ಬೆಳಿಗ್ಗೆ 8:00 ರಿಂದ ರಾತ್ರಿ 8:00 ರವರೆಗೆ
              </p>

            </div>

          </div>

        </div>

        {/* Bottom */}

        <div className="text-center mt-8">

          <p
            className="text-xs md:text-sm text-white/35"
            style={{
              fontFamily: "'Noto Sans Kannada', sans-serif",
            }}
          >
            ಬರುವ ಮುನ್ನ ಕರೆ ಮಾಡಿ
          </p>

        </div>

      </div>

    </section>
  );
}