
import { Menu, X, Phone, Sparkles, ChevronRight } from "lucide-react";
import { useState } from "react";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
import { business_name, person_name, phone_number } from "./secret";

const Header = () => {
  return (
    <header className="w-full bg-[#faf8f3] text-[#24170f] sticky top-0 z-50 shadow-[0_4px_25px_rgba(0,0,0,0.08)]">
      <TopBar />
      <MainHeader />
      <ScrollingMarquee />
    </header>
  );
};

export default Header;

/* -------------------------------------------------- */
/* TOP BAR */
/* -------------------------------------------------- */

const TopBar = () => (
  <div className="bg-[#20120d] text-[#f6d98b]">
    <div className="max-w-[1400px] mx-auto px-4 md:px-8 py-2 flex items-center justify-between gap-4">
      <div className="flex items-center gap-2 min-w-0">
        <Sparkles className="w-4 h-4 shrink-0 text-[#e8bd62]" />

        <p className="open-sans text-xs md:text-sm truncate">
          <span className="font-semibold">{person_name}</span>
          <span className="hidden sm:inline">
            {" "}• Trusted Astrology Guidance Since 1956
          </span>
        </p>
      </div>

      <a
        href={`tel:${phone_number}`}
        className="flex items-center gap-2 shrink-0 text-xs md:text-sm font-semibold hover:text-white transition-colors"
      >
        <Phone className="w-4 h-4" />
        <span className="hidden sm:inline">Talk to Guruji</span>
        <span className="sm:hidden">Call</span>
      </a>
    </div>
  </div>
);

/* -------------------------------------------------- */
/* MAIN HEADER */
/* -------------------------------------------------- */

const MainHeader = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-[#faf8f3]">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        <div className="min-h-[88px] md:min-h-[108px] flex items-center justify-between gap-5">
          
          {/* BRAND */}
          <Link
            to="/"
            className="flex items-center gap-3 md:gap-4 group min-w-0"
          >
            <div className="relative shrink-0">
              <div className="absolute inset-0 rounded-2xl bg-[#d4a84f] blur-md opacity-20 group-hover:opacity-40 transition-opacity" />

              <img
                src="https://i.pinimg.com/736x/2d/27/c3/2d27c37a42b775a7e44d9e2af9672953.jpg"
                alt="Chamundeswari Astrology Logo"
                className="relative w-14 h-14 md:w-[76px] md:h-[76px] rounded-2xl object-cover border border-[#d8b66a] shadow-lg"
              />
            </div>

            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <h1 className="montserrat font-extrabold text-lg sm:text-xl md:text-3xl tracking-tight text-[#2b1a12] truncate">
                  {business_name}
                </h1>
              </div>

              <div className="flex items-center gap-2 mt-1">
                <span className="h-px w-6 md:w-10 bg-[#c99b3b]" />

                <p className="open-sans text-[10px] sm:text-xs md:text-sm font-semibold tracking-wide text-[#80633a]">
                  TRADITION • WISDOM • GUIDANCE
                </p>
              </div>

              <p className="hidden sm:block open-sans text-xs md:text-sm text-[#74675e] mt-1">
                Traditional guidance for love, marriage, career & life
              </p>
            </div>
          </Link>

          {/* DESKTOP NAVIGATION */}
          <nav className="hidden lg:flex items-center gap-2">
            {["Home", "About", "Services", "Contact"].map((item) => (
              <Link
                key={item}
                to={`/${item.toLowerCase()}`}
                className="px-4 py-3 rounded-xl montserrat text-sm font-semibold text-[#49352b] hover:bg-[#f1e7d3] hover:text-[#9b6817] transition-all duration-200"
              >
                {item}
              </Link>
            ))}

            {/* CTA */}
            <a
              href={`tel:${phone_number}`}
              className="ml-3 flex items-center gap-2 px-5 py-3 rounded-xl bg-[#8b1e1e] text-white montserrat text-sm font-bold shadow-lg shadow-red-900/15 hover:bg-[#711616] hover:-translate-y-0.5 transition-all"
            >
              <Phone className="w-4 h-4" />
              Consult Now
            </a>
          </nav>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            className="lg:hidden shrink-0 w-11 h-11 rounded-xl border border-[#d8c8aa] bg-white flex items-center justify-center text-[#6f4018] shadow-sm hover:bg-[#f7efe1] transition"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {open && <MobileNav setOpen={setOpen} />}
    </div>
  );
};

/* -------------------------------------------------- */
/* MOBILE NAVIGATION */
/* -------------------------------------------------- */

const MobileNav = ({
  setOpen,
}: {
  setOpen: (open: boolean) => void;
}) => (
  <div className="fixed inset-0 z-[100] bg-[#faf8f3] flex flex-col">
    
    {/* Mobile Header */}
    <div className="px-5 py-5 border-b border-[#e8dfd0] flex items-center justify-between">
      <div className="flex items-center gap-3">
        <img
          src="https://i.pinimg.com/736x/3d/e1/f9/3de1f95bebee24bac17e12b23ea11248.jpg"
          alt="Logo"
          className="w-12 h-12 rounded-xl object-cover border border-[#d8b66a]"
        />

        <div>
          <h2 className="montserrat font-bold text-lg text-[#2b1a12]">
            {business_name}
          </h2>
          <p className="open-sans text-xs text-[#80633a]">
            Since 1956
          </p>
        </div>
      </div>

      <button
        onClick={() => setOpen(false)}
        aria-label="Close menu"
        className="w-11 h-11 rounded-xl bg-[#20120d] text-[#f6d98b] flex items-center justify-center"
      >
        <X className="w-6 h-6" />
      </button>
    </div>

    {/* Mobile Links */}
    <div className="flex-1 px-5 py-8">
      <p className="open-sans text-xs font-bold tracking-[0.2em] text-[#a17a35] mb-5">
        EXPLORE
      </p>

      <nav className="flex flex-col">
        {["Home", "About", "Services", "Contact"].map((item, index) => (
          <Link
            key={item}
            to={`/${item.toLowerCase()}`}
            onClick={() => setOpen(false)}
            className="group flex items-center justify-between py-5 border-b border-[#e9e0d2]"
          >
            <div className="flex items-center gap-4">
              <span className="text-xs font-bold text-[#b18a49]">
                0{index + 1}
              </span>

              <span className="montserrat text-xl font-semibold text-[#35231a] group-hover:text-[#9b6817] transition-colors">
                {item}
              </span>
            </div>

            <ChevronRight className="w-5 h-5 text-[#bda77e] group-hover:text-[#9b6817] group-hover:translate-x-1 transition-all" />
          </Link>
        ))}
      </nav>

      {/* Mobile CTA */}
      <a
        href={`tel:${phone_number}`}
        className="mt-8 flex items-center justify-center gap-3 w-full py-4 rounded-xl bg-[#8b1e1e] text-white montserrat font-bold shadow-xl"
      >
        <Phone className="w-5 h-5" />
        Call for Consultation
      </a>
    </div>

    {/* Bottom Trust Section */}
    <div className="px-5 py-6 bg-[#20120d] text-[#f6d98b]">
      <div className="flex items-center gap-3">
        <Sparkles className="w-5 h-5 shrink-0" />

        <p className="open-sans text-sm leading-6">
          Guidance for love, marriage, career, family and important life
          decisions.
        </p>
      </div>
    </div>
  </div>
);

/* -------------------------------------------------- */
/* SCROLLING MESSAGE */
/* -------------------------------------------------- */

const ScrollingMarquee = () => (
  <div className="overflow-hidden bg-[#8b1e1e] border-t border-[#a73535]">
    <Marquee
      speed={45}
      gradient={false}
      className="whitespace-nowrap py-2.5"
    >
      <span className="open-sans text-xs md:text-sm font-semibold text-[#fff4d6] tracking-wide">
        ✦ Love & Relationship Guidance
        <span className="mx-8 text-[#e5bd67]">•</span>

        wife Husband Issues
        <span className="mx-8 text-[#e5bd67]">•</span>

        Career & Business Predictions
        <span className="mx-8 text-[#e5bd67]">•</span>

        Horoscope Consultation
        <span className="mx-8 text-[#e5bd67]">•</span>

        Spiritual Guidance
        <span className="mx-8 text-[#e5bd67]">•</span>

         Black Magic Removal
        <span className="mx-8 text-[#e5bd67]">•</span>

         Ex-Love Back
        <span className="mx-8 text-[#e5bd67]">•</span>

         Vashikarana
        <span className="mx-8 text-[#e5bd67]">•</span>

        Trusted Guidance Since 1956
        <span className="mx-8 text-[#e5bd67]">✦</span>
      </span>
    </Marquee>
  </div>
);
