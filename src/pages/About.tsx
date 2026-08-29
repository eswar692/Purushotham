import {
  Award,
  BookOpen,
  Heart,
  Sparkles,
  Star,
} from "lucide-react";
import {
  business_name,
  person_name,
} from "../Genaral/secret";

export default function About() {
  return (
    <main className="relative overflow-hidden bg-[#f7f3eb]">

      {/* ================================================= */}
      {/* BACKGROUND DECORATION */}
      {/* ================================================= */}

      <div className="absolute top-0 right-0 w-[450px] h-[450px] rounded-full bg-[#c9a45b]/8 blur-3xl pointer-events-none" />

      <div className="absolute top-[700px] left-0 w-[400px] h-[400px] rounded-full bg-[#8b1e1e]/5 blur-3xl pointer-events-none" />

      {/* ================================================= */}
      {/* ABOUT HERO */}
      {/* ================================================= */}

      <section className="relative py-16 md:py-24 px-5">

        <div className="relative max-w-[1200px] mx-auto">

          {/* Header */}

          <div className="text-center max-w-3xl mx-auto mb-14">

            <div className="flex items-center justify-center gap-2 mb-4">

              <Sparkles className="w-4 h-4 text-[#b28535]" />

              <span className="text-xs md:text-sm font-bold tracking-[0.22em] text-[#96702f]">
                ABOUT US
              </span>

              <Sparkles className="w-4 h-4 text-[#b28535]" />

            </div>

            <h1 className="montserrat text-3xl md:text-5xl font-extrabold text-[#291911] leading-tight">
              Tradition, Experience
              <span className="block text-[#8b1e1e]">
                & Spiritual Guidance
              </span>
            </h1>

            <div className="flex items-center justify-center gap-3 my-5">

              <span className="w-16 h-[2px] bg-[#c9a45b]" />

              <span className="w-2 h-2 rotate-45 bg-[#c9a45b]" />

              <span className="w-16 h-[2px] bg-[#c9a45b]" />

            </div>

            <p className="open-sans text-base md:text-lg leading-7 text-[#6d5e52]">
              Learn more about {person_name} and the traditional approach
              behind {business_name}.
            </p>

          </div>

          {/* ================================================= */}
          {/* MAIN ABOUT CARD */}
          {/* ================================================= */}

          <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-8 items-stretch">

            {/* LEFT PROFILE */}

            <div className="relative overflow-hidden rounded-[30px] bg-[#21140e] p-6 md:p-8 shadow-[0_20px_60px_rgba(40,25,15,0.18)]">

              {/* Glow */}

              <div className="absolute -top-32 -right-32 w-72 h-72 rounded-full bg-[#c9a45b]/10 blur-3xl" />

              <div className="relative">

                {/* Image */}

                <div className="relative mx-auto w-full max-w-[390px]">

                  <div className="absolute -inset-3 rounded-[28px] border border-[#c9a45b]/30" />

                  <div className="relative overflow-hidden rounded-[25px]">

                    <img
                      src="https://i.pinimg.com/736x/c4/cb/8d/c4cb8d795481567caa5070c8a0cb3ab1.jpg"
                      alt={person_name}
                      className="w-full h-[390px] md:h-[440px] object-cover"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#21140e]/80 via-transparent to-transparent" />

                    {/* Name overlay */}

                    <div className="absolute bottom-5 left-5 right-5">

                      <p className="text-[10px] tracking-[0.2em] font-bold text-[#e0bd67]">
                        ASTROLOGY & SPIRITUAL GUIDANCE
                      </p>

                      <h2 className="montserrat mt-2 text-2xl md:text-3xl font-extrabold text-white">
                        {person_name}
                      </h2>

                    </div>

                  </div>

                </div>

                {/* Mini trust row */}

                <div className="grid grid-cols-2 gap-3 mt-7">

                  <div className="rounded-xl border border-[#c9a45b]/20 bg-white/5 p-4 text-center">

                    <Award className="w-5 h-5 mx-auto text-[#d7b965]" />

                    <p className="mt-2 text-[10px] tracking-[0.12em] text-[#bcae9e]">
                      EXPERIENCE
                    </p>

                    <p className="mt-1 font-bold text-white text-sm">
                      Traditional
                    </p>

                  </div>

                  <div className="rounded-xl border border-[#c9a45b]/20 bg-white/5 p-4 text-center">

                    <Heart className="w-5 h-5 mx-auto text-[#d7b965]" />

                    <p className="mt-2 text-[10px] tracking-[0.12em] text-[#bcae9e]">
                      APPROACH
                    </p>

                    <p className="mt-1 font-bold text-white text-sm">
                      Personal
                    </p>

                  </div>

                </div>

              </div>

            </div>

            {/* RIGHT CONTENT */}

            <div className="bg-white rounded-[30px] border border-[#e1d6c6] p-7 md:p-10 shadow-[0_15px_50px_rgba(52,35,22,0.08)]">

              {/* Label */}

              <div className="inline-flex items-center gap-2 rounded-full bg-[#f2e9da] px-4 py-2">

                <BookOpen className="w-4 h-4 text-[#8b1e1e]" />

                <span className="text-xs font-bold tracking-[0.12em] text-[#8b1e1e]">
                  OUR STORY
                </span>

              </div>

              <h2 className="montserrat mt-6 text-3xl md:text-4xl font-extrabold text-[#291911] leading-tight">
                About{" "}
                <span className="text-[#8b1e1e]">
                  {person_name}
                </span>
              </h2>

              <div className="w-16 h-[2px] bg-[#c9a45b] mt-5 mb-6" />

              <div className="space-y-5 open-sans text-[15px] md:text-base leading-7 text-[#65584e]">

                <p>
                  Astrologer{" "}
                  <span className="font-bold text-[#8b1e1e]">
                    {person_name}
                  </span>{" "}
                  is a spiritual guide offering traditional astrology and
                  personalized guidance for people seeking greater clarity
                  in important areas of life.
                </p>

                <p>
                  Through years of learning and experience,{" "}
                  <span className="font-semibold text-[#9a702d]">
                    {person_name}
                  </span>{" "}
                  works with individuals to understand their concerns and
                  provide guidance based on traditional astrological and
                  spiritual practices.
                </p>

                <p>
                  Consultations may cover areas such as relationships,
                  marriage, family matters, career, business, Vastu and
                  other personal concerns.
                </p>

                <p>
                  The focus is on listening carefully to each person's
                  situation and providing thoughtful, personalized guidance
                  in a respectful and supportive environment.
                </p>

              </div>

              {/* ================================================= */}
              {/* HIGHLIGHTS */}
              {/* ================================================= */}

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-8">

                <div className="rounded-2xl bg-[#faf6ee] border border-[#e8ddcd] p-4">

                  <Star className="w-5 h-5 text-[#b28535]" />

                  <p className="mt-3 text-xs font-bold text-[#291911]">
                    Traditional
                  </p>

                  <p className="mt-1 text-xs text-[#817367]">
                    Astrological approach
                  </p>

                </div>

                <div className="rounded-2xl bg-[#faf6ee] border border-[#e8ddcd] p-4">

                  <Heart className="w-5 h-5 text-[#8b1e1e]" />

                  <p className="mt-3 text-xs font-bold text-[#291911]">
                    Personal
                  </p>

                  <p className="mt-1 text-xs text-[#817367]">
                    Individual attention
                  </p>

                </div>

                <div className="rounded-2xl bg-[#faf6ee] border border-[#e8ddcd] p-4">

                  <Sparkles className="w-5 h-5 text-[#b28535]" />

                  <p className="mt-3 text-xs font-bold text-[#291911]">
                    Supportive
                  </p>

                  <p className="mt-1 text-xs text-[#817367]">
                    Guidance with care
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

   
    </main>
  );
}
