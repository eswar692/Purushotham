import {
  Heart,
  Phone,
  Scale,
  Users,
  MessageCircle,
  Sparkles,
  ArrowRight,
  CalendarDays,
  Award,
  CheckCircle2,
  BriefcaseBusiness,
} from "lucide-react";
import Carousel from "../Genaral/Carousel";
import { motion } from "framer-motion";
import Testimonials from "../Genaral/Testimonial";
import FAQ from "../Genaral/FAQ";
import CardCarousel from "../Genaral/CardsCarousel";
import { business_name, person_name, phone_number, whatsapp_number } from "../Genaral/secret";
import ProblemGrid from "../Genaral/ProblemGrid";
import { Link } from "react-router-dom";
import GoogleMapSection from "../Genaral/MapComponent";
import GurujiVideo from "../Genaral/gurujivideo";

const Home = () => {
  return (
    <div
      className="flex flex-col w-full h-full 
     bg-gradient-to-tr from-purple-700 via-violet-800 to-fuchsia-900

"
    >
      <Carousel />
      <GurujiVideo/>
      <ProblemGrid/>
        <GoogleMapSection/>
      <CardCarousel />
      <Problems />
      <AboutAstrologer />
      <AstrologyServices />
      <AstrologyServicesModern />
      <AllServicesModern />
    
      <HomeLastDesign />
      <Testimonials />
      <FAQ />
    </div>
  );
};

export default Home;



const Problems = () => {
  const problems = [
    {
      number: "01",
      title: "Love & Relationship",
      desc: "Personalized guidance for love, relationships, communication and emotional concerns.",
      img: "https://i.pinimg.com/736x/c1/c6/b0/c1c6b0802f639e3c06614a04eafd10dd.jpg"
    },
    {
      number: "02",
      title: "Marriage Guidance",
      desc: "Thoughtful guidance for marriage concerns, misunderstandings, communication and family harmony.",
      img: "https://i.pinimg.com/1200x/fa/67/7f/fa677fb036bc9c22b696224c3fb0ea40.jpg"
    },
    {
      number: "03",
      title: "Relationship Guidance",
      desc: "Traditional guidance for emotional connection, relationship concerns and personal harmony.",
      img: "https://i.pinimg.com/736x/93/d5/4e/93d54e5cc8d5a78c539789f7cc87db05.jpg"
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#20120d] py-16 md:py-20 px-5">

      {/* ======================================== */}
      {/* BACKGROUND */}
      {/* ======================================== */}

      <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-[#c9a45b]/10 blur-3xl" />

      <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-[#8b1e1e]/15 blur-3xl" />

      <div className="absolute top-20 left-[8%] hidden lg:block w-24 h-24 rounded-full border border-[#c9a45b]/15" />

      <div className="absolute bottom-20 right-[8%] hidden lg:block w-20 h-20 rounded-full border border-[#c9a45b]/15" />

      <motion.div
        className="relative z-10 max-w-[1250px] mx-auto"
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.7 }}
      >

        {/* ======================================== */}
        {/* HEADING */}
        {/* ======================================== */}

        <div className="text-center max-w-3xl mx-auto mb-11">

          <div className="flex items-center justify-center gap-2 mb-4">

            <Sparkles className="w-4 h-4 text-[#dfbd6b]" />

            <span className="open-sans text-xs md:text-sm font-bold tracking-[0.22em] text-[#d5b260]">
              COMMON AREAS OF CONCERN
            </span>

            <Sparkles className="w-4 h-4 text-[#dfbd6b]" />

          </div>

          <h2 className="montserrat text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#fff8e9] leading-tight">
            When Life Feels
            <span className="block text-[#e1be68]">
              Uncertain
            </span>
          </h2>

          <div className="flex items-center justify-center gap-3 my-5">

            <span className="w-16 h-px bg-[#c9a45b]" />

            <span className="w-2 h-2 rotate-45 bg-[#c9a45b]" />

            <span className="w-16 h-px bg-[#c9a45b]" />

          </div>

          <p className="open-sans text-sm md:text-base leading-7 text-[#c9bbad]">
            {person_name} offers traditional astrology guidance for some of
            life's most personal relationship and marriage concerns.
          </p>

        </div>

        {/* ======================================== */}
        {/* CARDS */}
        {/* ======================================== */}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-7">

          {problems.map((problem, index) => (
            <motion.article
              key={problem.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.55,
                delay: index * 0.1,
              }}
              whileHover={{ y: -7 }}
              className="group relative bg-[#faf8f3] rounded-3xl overflow-hidden border border-[#c9a45b]/20 shadow-2xl"
            >

              {/* IMAGE */}
              <div className="relative h-60 overflow-hidden">

                <img
                  src={problem.img}
                  alt={problem.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#20120d]/75 via-transparent to-transparent" />

                {/* Number */}
                <div className="absolute top-4 left-4 w-10 h-10 rounded-full bg-[#20120d]/80 backdrop-blur-md border border-[#dfbd6b]/50 flex items-center justify-center">
                  <span className="text-xs font-bold text-[#f1d58b]">
                    {problem.number}
                  </span>
                </div>

                {/* Bottom image title */}
                <div className="absolute bottom-4 left-5 right-5">

                  <span className="inline-block px-3 py-1.5 rounded-full bg-[#20120d]/75 backdrop-blur-md border border-[#dfbd6b]/30 text-xs font-semibold text-[#f5dda0]">
                    Traditional Guidance
                  </span>

                </div>

              </div>

              {/* CONTENT */}
              <div className="p-6">

                <h3 className="montserrat text-xl md:text-2xl font-extrabold text-[#2c1a11]">
                  {problem.title}
                </h3>

                <p className="open-sans mt-3 text-sm leading-6 text-[#6e6055]">
                  {problem.desc}
                </p>

                <div className="mt-5 pt-4 border-t border-[#e5dac8] flex items-center justify-between">

                  <Link
                    to="/services"
                    className="inline-flex items-center gap-1.5 text-sm font-bold text-[#8b1e1e] hover:text-[#b17d2b] transition-colors"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>

                  <a
                    href={`https://wa.me/91${whatsapp_number}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Chat about ${problem.title}`}
                    className="w-10 h-10 rounded-full bg-[#efe5d4] flex items-center justify-center text-[#8b1e1e] hover:bg-[#8b1e1e] hover:text-white transition-all"
                  >
                    <MessageCircle className="w-4 h-4" />
                  </a>

                </div>

              </div>

            </motion.article>
          ))}

        </div>

        {/* ======================================== */}
        {/* BOTTOM CTA */}
        {/* ======================================== */}

        <div className="mt-10 md:mt-12 text-center">

          <p className="text-sm text-[#a99b8e] mb-4">
            Not sure which type of guidance is right for you?
          </p>

          <Link
            to="/services"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#8b1e1e] text-white montserrat font-bold shadow-xl hover:bg-[#a32626] hover:-translate-y-0.5 transition-all"
          >
            Explore All Services
            <ArrowRight className="w-5 h-5" />
          </Link>

        </div>

        {/* Brand line */}
        <div className="mt-10 flex items-center justify-center gap-3">

          <span className="w-10 h-px bg-[#c9a45b]/40" />

          <span className="text-xs tracking-wider text-[#907f70]">
            {business_name}
          </span>

          <span className="w-10 h-px bg-[#c9a45b]/40" />

        </div>

      </motion.div>
    </section>
  );
};




const AboutAstrologer = () => {
  return (
    <section className="relative overflow-hidden bg-[#faf8f3] py-16 md:py-24 px-5">

      {/* ======================================== */}
      {/* BACKGROUND DECORATION */}
      {/* ======================================== */}

      <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-[#c9a45b]/10 blur-3xl" />

      <div className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full bg-[#8b1e1e]/5 blur-3xl" />

      <div className="absolute top-20 right-[8%] hidden lg:block w-28 h-28 rounded-full border border-[#c9a45b]/20" />

      <div className="absolute bottom-20 left-[7%] hidden lg:block w-20 h-20 rounded-full border border-[#c9a45b]/20" />

      <div className="relative z-10 max-w-[1300px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

        {/* ======================================== */}
        {/* IMAGE SIDE */}
        {/* ======================================== */}

        <div className="relative flex justify-center lg:justify-start order-2 lg:order-1">

          {/* Decorative circle */}
          <div className="absolute w-[350px] h-[350px] md:w-[470px] md:h-[470px] rounded-full border border-[#c9a45b]/20" />

          <div className="absolute w-[290px] h-[290px] md:w-[400px] md:h-[400px] rounded-full border border-[#c9a45b]/15" />

          {/* Image frame */}
          <div className="relative w-[290px] sm:w-[350px] md:w-[420px] h-[420px] md:h-[520px]">

            {/* Gold frame */}
            <div className="absolute -inset-2 rounded-[30px] border border-[#c9a45b]/50" />

            {/* Main image */}
            <div className="relative w-full h-full overflow-hidden rounded-[28px] bg-[#eee5d6] shadow-[0_25px_70px_rgba(45,27,18,0.18)]">

              <img
                src="https://i.pinimg.com/736x/0b/08/17/0b0817d8ff18867dc12e9c13155eff3f.jpg"
                alt={`${person_name} - Astrologer`}
                className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#20120d]/55 via-transparent to-transparent" />

            </div>

            {/* ================================= */}
            {/* EXPERIENCE BADGE */}
            {/* ================================= */}

            <div className="absolute -right-5 md:-right-10 top-12 md:top-16 z-20 w-24 h-24 md:w-28 md:h-28 rounded-full bg-[#20120d] border-2 border-[#d5b15d] shadow-2xl flex items-center justify-center text-center">

              <div>
                <p className="text-[8px] md:text-[9px] tracking-[0.18em] text-[#c7a35b]">
                  GUIDANCE SINCE
                </p>

                <p className="montserrat text-xl md:text-2xl font-extrabold text-[#f1d486]">
                  1956
                </p>

                <p className="text-[8px] tracking-[0.15em] text-[#c7a35b]">
                  TRADITION
                </p>
              </div>

            </div>

            {/* ================================= */}
            {/* NAME CARD */}
            {/* ================================= */}

            <div className="absolute -bottom-5 left-5 md:left-8 right-5 md:right-8 z-20 rounded-2xl bg-white/95 backdrop-blur-md border border-[#e1d4c1] shadow-xl px-5 py-4">

              <p className="text-[10px] tracking-[0.18em] font-bold text-[#a27a32]">
                TRADITIONAL ASTROLOGY
              </p>

              <h3 className="montserrat mt-1 text-lg md:text-xl font-extrabold text-[#2b1a12]">
                {person_name}
              </h3>

            </div>

          </div>
        </div>

        {/* ======================================== */}
        {/* CONTENT SIDE */}
        {/* ======================================== */}

        <div className="order-1 lg:order-2 text-center lg:text-left">

          {/* Label */}
          <div className="flex items-center justify-center lg:justify-start gap-2 mb-5">

            <Sparkles className="w-4 h-4 text-[#b28535]" />

            <span className="open-sans text-xs md:text-sm font-bold tracking-[0.22em] text-[#96702f]">
              MEET YOUR ASTROLOGER
            </span>

          </div>

          {/* Heading */}
          <h2 className="montserrat text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#291911] leading-[1.1]">

            Traditional Wisdom.
            <span className="block text-[#8b1e1e]">
              Personal Guidance.
            </span>

          </h2>

          {/* Divider */}
          <div className="flex items-center justify-center lg:justify-start gap-3 my-6">

            <span className="w-20 h-[2px] bg-[#c9a45b]" />

            <span className="w-2 h-2 rotate-45 bg-[#c9a45b]" />

          </div>

          {/* Name */}
          <h3 className="montserrat text-2xl md:text-3xl font-bold text-[#352219]">
            {person_name}
          </h3>

          <p className="mt-1 text-sm font-semibold tracking-wide text-[#a17a38]">
            {business_name}
          </p>

          {/* Paragraph 1 */}
          <p className="mt-6 open-sans text-base md:text-lg leading-8 text-[#65574c]">
            {person_name} offers traditional spiritual and astrological
            guidance based on years of learning, experience and knowledge
            passed down through generations.
          </p>

          {/* Paragraph 2 */}
          <p className="mt-4 open-sans text-base md:text-lg leading-8 text-[#65574c]">
            His approach focuses on understanding each individual's concerns
            and offering personalized guidance across relationships, marriage,
            career, family and important personal decisions.
          </p>

          {/* ======================================== */}
          {/* EXPERIENCE POINTS */}
          {/* ======================================== */}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-7 text-left">

            <div className="flex items-center gap-3 p-3 rounded-xl bg-white border border-[#e5dac9]">

              <div className="w-9 h-9 rounded-lg bg-[#f3eadb] flex items-center justify-center shrink-0">
                <CalendarDays className="w-4 h-4 text-[#a5792d]" />
              </div>

              <div>
                <p className="text-xs text-[#88796d]">
                  Established Tradition
                </p>

                <p className="text-sm font-bold text-[#3b281c]">
                  Since 1956
                </p>
              </div>

            </div>

            <div className="flex items-center gap-3 p-3 rounded-xl bg-white border border-[#e5dac9]">

              <div className="w-9 h-9 rounded-lg bg-[#f3eadb] flex items-center justify-center shrink-0">
                <Award className="w-4 h-4 text-[#a5792d]" />
              </div>

              <div>
                <p className="text-xs text-[#88796d]">
                  Approach
                </p>

                <p className="text-sm font-bold text-[#3b281c]">
                  Traditional Guidance
                </p>
              </div>

            </div>

          </div>

          {/* Trust points */}
          <div className="mt-6 flex flex-wrap justify-center lg:justify-start gap-x-6 gap-y-3">

            {[
              "Personal Attention",
              "Private Consultation",
              "Online Guidance",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-2 text-sm text-[#67584d]"
              >
                <CheckCircle2 className="w-4 h-4 text-[#a77c31]" />
                {item}
              </div>
            ))}

          </div>

          {/* ======================================== */}
          {/* CTA */}
          {/* ======================================== */}

          <div className="mt-8 flex flex-col sm:flex-row justify-center lg:justify-start gap-3">

            <a
              href={`tel:${phone_number}`}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#8b1e1e] text-white montserrat font-bold shadow-lg hover:bg-[#a32727] hover:-translate-y-0.5 transition-all"
            >
              <Phone className="w-5 h-5" />
              Talk to Guruji
            </a>

            <Link
              to="/about"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border border-[#c9a45b] text-[#76531e] montserrat font-bold hover:bg-[#f4ecdc] transition-all"
            >
              Know More
              <ArrowRight className="w-5 h-5" />
            </Link>

          </div>

        </div>

      </div>

    </section>
  );
};






const AstrologyServices = () => {
  const services = [
    {
      number: "01",
      title: "Breakup Support",
      desc: "Personalized spiritual guidance for navigating separation, emotions and relationship challenges.",
      img: "https://i.pinimg.com/736x/1c/77/2c/1c772cd72354da24308771d64fc70d02.jpg",
    },
    {
      number: "02",
      title: "Relationship Disputes",
      desc: "Guidance for communication, misunderstandings, emotional concerns and relationship harmony.",
      img: "https://i.pinimg.com/736x/a9/63/0d/a9630de48cbdf2fe602f0707e7e5a490.jpg",
    },
    {
      number: "03",
      title: "Love Guidance",
      desc: "Traditional spiritual guidance for love, emotional connection and relationship concerns.",
      img: "https://i.pinimg.com/736x/04/f5/8b/04f58b8fa673e305280ffbefc464ed74.jpg",
    },
    {
      number: "04",
      title: "Family Harmony",
      desc: "Guidance for family relationships, communication, misunderstandings and a peaceful home.",
      img: "https://i.pinimg.com/1200x/65/90/34/6590344e50ed6a28c5baf17159f702fd.jpg",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#faf8f3] py-16 md:py-24 px-5">

      {/* ======================================== */}
      {/* BACKGROUND */}
      {/* ======================================== */}

      <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-[#c9a45b]/10 blur-3xl" />

      <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-[#8b1e1e]/5 blur-3xl" />

      <div className="absolute top-24 left-[5%] hidden lg:block w-20 h-20 rounded-full border border-[#c9a45b]/20" />

      <div className="absolute bottom-24 right-[5%] hidden lg:block w-28 h-28 rounded-full border border-[#c9a45b]/15" />

      <div className="relative z-10 max-w-[1400px] mx-auto">

        {/* ======================================== */}
        {/* HEADING */}
        {/* ======================================== */}

        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-14">

          <div className="flex items-center justify-center gap-2 mb-4">

            <Sparkles className="w-4 h-4 text-[#b28535]" />

            <span className="open-sans text-xs md:text-sm font-bold tracking-[0.22em] text-[#96702f]">
              FEATURED GUIDANCE
            </span>

            <Sparkles className="w-4 h-4 text-[#b28535]" />

          </div>

          <h2 className="montserrat text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#291911] leading-tight">

            Explore Our
            <span className="block text-[#8b1e1e]">
              Astrology Services
            </span>

          </h2>

          <div className="flex items-center justify-center gap-3 my-5">

            <span className="w-16 h-[2px] bg-[#c9a45b]" />

            <span className="w-2 h-2 rotate-45 bg-[#c9a45b]" />

            <span className="w-16 h-[2px] bg-[#c9a45b]" />

          </div>

          <p className="open-sans text-base md:text-lg leading-7 text-[#6d5e52]">
            Traditional guidance for relationships, love, marriage, family
            and important personal concerns.
          </p>

        </div>

        {/* ======================================== */}
        {/* SERVICE GRID */}
        {/* ======================================== */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">

          {services.map((service) => (
            <article
              key={service.number}
              className="group relative bg-white rounded-3xl overflow-hidden border border-[#e4d8c7] shadow-[0_10px_35px_rgba(52,35,22,0.08)] hover:shadow-[0_18px_50px_rgba(52,35,22,0.15)] hover:-translate-y-1.5 transition-all duration-500"
            >

              {/* ================================= */}
              {/* IMAGE */}
              {/* ================================= */}

              <div className="relative h-56 overflow-hidden">

                <img
                  src={service.img}
                  alt={service.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#20120d]/75 via-transparent to-transparent" />

                {/* Number */}
                <div className="absolute top-4 left-4 w-10 h-10 rounded-full bg-[#20120d]/80 backdrop-blur-md border border-[#dfbd6b]/50 flex items-center justify-center">

                  <span className="text-xs font-bold text-[#f0d48b]">
                    {service.number}
                  </span>

                </div>

                {/* Image title */}
                <div className="absolute bottom-4 left-5 right-5">

                  <h3 className="montserrat text-xl font-extrabold text-white drop-shadow-lg">
                    {service.title}
                  </h3>

                </div>

              </div>

              {/* ================================= */}
              {/* CONTENT */}
              {/* ================================= */}

              <div className="p-5 md:p-6">

                <div className="flex items-center gap-2 mb-3">

                  <span className="w-7 h-px bg-[#c9a45b]" />

                  <span className="text-[10px] tracking-[0.18em] font-bold text-[#a27a32]">
                    PERSONAL GUIDANCE
                  </span>

                </div>

                <p className="open-sans text-sm leading-6 text-[#6e6055] min-h-[84px]">
                  {service.desc}
                </p>

                {/* CTA */}
                <a
                  href={`tel:${phone_number}`}
                  className="mt-5 flex items-center justify-center gap-2 w-full px-5 py-3 rounded-xl bg-[#8b1e1e] text-white montserrat text-sm font-bold shadow-md hover:bg-[#a22727] hover:-translate-y-0.5 transition-all"
                >
                  <Phone className="w-4 h-4" />
                  Call for Consultation
                </a>

              </div>

            </article>
          ))}

        </div>

        {/* ======================================== */}
        {/* VIEW ALL */}
        {/* ======================================== */}

        <div className="mt-10 text-center">

          <Link
            to="/services"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border border-[#c9a45b] text-[#76531e] montserrat font-bold hover:bg-[#f3eadb] transition-all"
          >
            View All Services
            <ArrowRight className="w-5 h-5" />
          </Link>

        </div>

        {/* ======================================== */}
        {/* BOTTOM NOTE */}
        {/* ======================================== */}

        <div className="mt-9 flex items-center justify-center gap-3">

          <span className="w-10 h-px bg-[#c9a45b]/40" />

          <p className="text-xs md:text-sm text-[#827367] text-center">
            Personal attention • Traditional approach • Online consultation
          </p>

          <span className="w-10 h-px bg-[#c9a45b]/40" />

        </div>

      </div>
    </section>
  );
};




/* ================================================= */
/* FEATURED ASTROLOGY SERVICES */
/* ================================================= */

export const AstrologyServicesModern = () => {
 const services = [
  {
    number: "01",
    title: "Special Puja Services",
    img: "https://i.pinimg.com/1200x/4c/4a/43/4c4a43499945c9f5c1ccd9dc0e15a971.jpg",
    desc: "Traditional puja services performed with spiritual practices for peace, positivity, family wellbeing and personal intentions.",
  },
  {
    number: "02",
    title: "Puja for Relationship Harmony",
    img: "https://i.pinimg.com/736x/96/f1/9f/96f19fa6d9440b424e8fc70a8037f2ae.jpg",
    desc: "Traditional spiritual rituals focused on harmony, understanding and positive energy within relationships and families.",
  },
  {
    number: "03",
    title: "Marriage Puja & Guidance",
    img: "https://i.pinimg.com/736x/c8/13/09/c81309cd0a21428927aba1d0dedd38a0.jpg",
    desc: "Spiritual guidance and traditional puja practices for marriage-related concerns, compatibility and family harmony.",
  },
  {
    number: "04",
    title: "Negative Energy Remedies",
    img: "https://i.pinimg.com/736x/98/73/8c/98738cc8a4f4028d0ceda31dd72cd0cc.jpg",
    desc: "Traditional spiritual practices, mantras and puja rituals intended to promote positivity, peace and a balanced environment.",
  },
  {
    number: "05",
    title: "Vastu Puja",
    img: "https://i.pinimg.com/736x/00/69/2d/00692db76616a2674a0592ce54b4e467.jpg",
    desc: "Traditional Vastu-based guidance and puja practices for creating a peaceful and balanced home or workspace.",
  },
  {
    number: "06",
    title: "Mantra & Spiritual Practices",
    img: "https://i.pinimg.com/736x/72/11/32/72113244762784cc052a2719b21f4d84.jpg",
    desc: "Traditional mantra practices and spiritual guidance personalized around your concerns, intentions and daily wellbeing.",
  },
  {
    number: "07",
    title: "Family Peace Puja",
    img: "https://i.pinimg.com/1200x/97/dd/c2/97ddc2ac19acfe096937bf64bed547fe.jpg",
    desc: "Traditional puja and spiritual practices for promoting peace, understanding and a positive atmosphere within the family.",
  },
  {
    number: "08",
    title: "Prosperity & Business Puja",
    img: "https://i.pinimg.com/736x/84/dd/e6/84dde6e4a1641f19a2f53577ec4b9f4c.jpg",
    desc: "Traditional spiritual practices for business, prosperity, new beginnings and creating a positive direction.",
  },
];

  return (
    <section className="relative overflow-hidden bg-[#faf8f3] py-16 md:py-24 px-5">

      {/* Background */}
      <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-[#c9a45b]/10 blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-[#8b1e1e]/5 blur-3xl" />

      <div className="relative z-10 max-w-[1400px] mx-auto">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">

          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-4 h-4 text-[#b28535]" />

            <span className="text-xs md:text-sm font-bold tracking-[0.22em] text-[#96702f]">
              FEATURED GUIDANCE
            </span>

            <Sparkles className="w-4 h-4 text-[#b28535]" />
          </div>

          <h2 className="montserrat text-3xl md:text-5xl font-extrabold text-[#291911]">
            Astrology Guidance For
            <span className="block text-[#8b1e1e]">
              What Matters Most
            </span>
          </h2>

          <div className="flex items-center justify-center gap-3 my-5">
            <span className="w-16 h-[2px] bg-[#c9a45b]" />
            <span className="w-2 h-2 rotate-45 bg-[#c9a45b]" />
            <span className="w-16 h-[2px] bg-[#c9a45b]" />
          </div>

          <p className="open-sans text-base md:text-lg leading-7 text-[#6d5e52]">
            Explore personalized traditional guidance for love, relationships,
            marriage and family concerns.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">

          {services.map((service) => (
            <article
              key={service.number}
              className="group bg-white rounded-3xl overflow-hidden border border-[#e4d8c7] shadow-[0_10px_35px_rgba(52,35,22,0.08)] hover:shadow-[0_20px_50px_rgba(52,35,22,0.15)] hover:-translate-y-2 transition-all duration-500"
            >

              {/* Image */}
              <div className="relative h-56 overflow-hidden">

                <img
                  src={service.img}
                  alt={service.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#20120d]/80 via-transparent to-transparent" />

                <div className="absolute top-4 left-4 w-9 h-9 rounded-full bg-[#20120d]/80 backdrop-blur-md border border-[#e0bd68]/50 flex items-center justify-center">
                  <span className="text-[11px] font-bold text-[#f1d58b]">
                    {service.number}
                  </span>
                </div>

                <h3 className="absolute bottom-4 left-5 right-5 montserrat text-xl font-extrabold text-white drop-shadow-lg">
                  {service.title}
                </h3>
              </div>

              {/* Content */}
              <div className="p-5">

                <p className="open-sans text-sm leading-6 text-[#6e6055] min-h-[72px]">
                  {service.desc}
                </p>

                <a
                  href={`tel:${phone_number}`}
                  className="mt-5 flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-[#8b1e1e] text-white text-sm font-bold hover:bg-[#a22727] transition-all"
                >
                  <Phone className="w-4 h-4" />
                  Call for Consultation
                </a>

              </div>
            </article>
          ))}

        </div>

        <div className="mt-10 text-center">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border border-[#c9a45b] text-[#76531e] font-bold hover:bg-[#f3eadb] transition-all"
          >
            View All Services
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

      </div>
    </section>
  );
};


/* ================================================= */
/* ALL SERVICES */
/* ================================================= */

export const AllServicesModern = () => {
  const services = [
    {
      title: "Love & Relationship",
      icon: Heart,
      desc: "Guidance for love, relationships, communication and emotional concerns.",
    },
    {
      title: "Legal Matters",
      icon: Scale,
      desc: "Traditional spiritual guidance for people facing legal and court-related concerns.",
    },
    {
      title: "Family Harmony",
      icon: Users,
      desc: "Guidance for family relationships, communication and harmony at home.",
    },
    {
      title: "Business Guidance",
      icon: BriefcaseBusiness,
      desc: "Guidance for business decisions, career challenges, growth and opportunities.",
    },
    {
      title: "Couples & Family",
      icon: Users,
      desc: "Personalized guidance for couples and families navigating personal concerns.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#20120d] py-16 md:py-24 px-5">

      {/* Decorative background */}
      <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-[#c9a45b]/10 blur-3xl" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full bg-[#8b1e1e]/15 blur-3xl" />

      <div className="relative z-10 max-w-[1250px] mx-auto">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">

          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-4 h-4 text-[#dfbd6b]" />

            <span className="text-xs md:text-sm font-bold tracking-[0.22em] text-[#d5b260]">
              AREAS OF GUIDANCE
            </span>

            <Sparkles className="w-4 h-4 text-[#dfbd6b]" />
          </div>

          <h2 className="montserrat text-3xl md:text-5xl font-extrabold text-[#fff8e9]">
            Explore More
            <span className="block text-[#e1be68]">
              Guidance Areas
            </span>
          </h2>

          <div className="flex items-center justify-center gap-3 my-5">
            <span className="w-16 h-px bg-[#c9a45b]" />
            <span className="w-2 h-2 rotate-45 bg-[#c9a45b]" />
            <span className="w-16 h-px bg-[#c9a45b]" />
          </div>

          <p className="text-sm md:text-base leading-7 text-[#c9bbad]">
            Traditional guidance across personal, family, career and
            important life matters.
          </p>

        </div>

        {/* Service cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">

          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <article
                key={service.title}
                className="group relative bg-[#faf8f3] rounded-2xl p-6 border border-[#c9a45b]/15 hover:border-[#c9a45b]/40 shadow-xl hover:-translate-y-1.5 transition-all duration-300"
              >

                <div className="flex items-start justify-between">

                  <div className="w-14 h-14 rounded-xl bg-[#f0e5d2] flex items-center justify-center">
                    <Icon className="w-7 h-7 text-[#8b1e1e]" />
                  </div>

                  <span className="text-xs font-bold text-[#b08a42]">
                    0{index + 1}
                  </span>

                </div>

                <h3 className="mt-5 montserrat text-xl font-bold text-[#2d1b12]">
                  {service.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-[#716257]">
                  {service.desc}
                </p>

                <a
                  href={`tel:${phone_number}`}
                  className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#8b1e1e] hover:text-[#b07c29] transition-colors"
                >
                  Talk to us
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>

              </article>
            );
          })}

        </div>

      </div>
    </section>
  );
};


/* ================================================= */
/* FINAL HOME CTA */
/* ================================================= */

export function HomeLastDesign() {
  return (
    <section className="relative overflow-hidden bg-[#faf8f3] py-16 md:py-24 px-5">

      {/* Background */}
      <div className="absolute -top-40 right-0 w-96 h-96 rounded-full bg-[#c9a45b]/10 blur-3xl" />
      <div className="absolute -bottom-40 left-0 w-96 h-96 rounded-full bg-[#8b1e1e]/5 blur-3xl" />

      <div className="relative z-10 max-w-[1200px] mx-auto">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* IMAGE */}
          <div className="flex justify-center">

            <div className="relative">

              {/* Decorative rings */}
              <div className="absolute -inset-8 rounded-full border border-[#c9a45b]/20" />
              <div className="absolute -inset-16 rounded-full border border-[#c9a45b]/10" />

              <img
                src="https://i.pinimg.com/736x/00/1d/bb/001dbb9f0f876f5b467b2c74d8fcf23b.jpg"
                alt={person_name}
                className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full object-cover border-8 border-white shadow-[0_25px_70px_rgba(45,27,18,0.18)]"
              />

              {/* Badge */}
              <div className="absolute bottom-2 right-0 md:right-[-15px] w-24 h-24 rounded-full bg-[#20120d] border-2 border-[#d3ad5c] shadow-2xl flex items-center justify-center text-center">

                <div>
                  <p className="text-[8px] tracking-[0.15em] text-[#c9a45b]">
                    TRUSTED
                  </p>

                  <p className="montserrat text-xl font-extrabold text-[#f1d486]">
                    1956
                  </p>

                  <p className="text-[8px] tracking-[0.12em] text-[#c9a45b]">
                    ONWARDS
                  </p>
                </div>

              </div>

            </div>
          </div>

          {/* CONTENT */}
          <div className="text-center lg:text-left">

            <div className="flex items-center justify-center lg:justify-start gap-2 mb-4">

              <Sparkles className="w-4 h-4 text-[#b28535]" />

              <span className="text-xs font-bold tracking-[0.22em] text-[#96702f]">
                PERSONAL CONSULTATION
              </span>

            </div>

            <h2 className="montserrat text-3xl md:text-5xl font-extrabold text-[#291911] leading-tight">

              Need Clarity For
              <span className="block text-[#8b1e1e]">
                Your Next Step?
              </span>

            </h2>

            <div className="flex items-center justify-center lg:justify-start gap-3 my-6">
              <span className="w-20 h-[2px] bg-[#c9a45b]" />
              <span className="w-2 h-2 rotate-45 bg-[#c9a45b]" />
            </div>

            <p className="open-sans text-base md:text-lg leading-8 text-[#65574c]">
              Connect with{" "}
              <span className="font-bold text-[#8b1e1e]">
                {person_name}
              </span>{" "}
              for traditional astrology and spiritual guidance relating to
              love, relationships, marriage, family, career and personal
              concerns.
            </p>

            <p className="mt-4 text-sm leading-6 text-[#817367]">
              Personal attention • Traditional approach • Online consultation
            </p>

            {/* CTA */}
            <div className="mt-8 flex flex-col sm:flex-row justify-center lg:justify-start gap-3">

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
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border border-[#c9a45b] text-[#76531e] montserrat font-bold hover:bg-[#f3eadb] transition-all"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp
              </a>

            </div>

            {/* Business name */}
            <p className="mt-8 text-xs tracking-[0.16em] font-semibold text-[#9a866f]">
              {business_name}
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}
