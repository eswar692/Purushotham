import {
  Quote,
  Star,
  MapPin,
  Sparkles,
  MessageCircle,
} from "lucide-react";
import { person_name, whatsapp_number } from "./secret";

const testimonials = [
  {
    name: "Arjun Verma",
    location: "Mumbai",
    image: "https://astrologerdeepaksharma.in/images/client-2.png",
    text: `${person_name} Ji gave me advice on business-related issues. I sought his advice when I was in the midst of a significant loss; his remedies are effective and yield results quickly.`,
  },
  {
    name: "Mala Kapoor",
    location: "Goa",
    image: "https://astrologerdeepaksharma.in/images/client-1.png",
    text: `I'm appreciative of Pandith ${person_name}. For me, his prophecies come true. The fact that he is constantly there to lead me makes me feel lucky. It was great for me.`,
  },
  {
    name: "Pratha Kumari",
    location: "Delhi",
    image: "https://astrologerdeepaksharma.in/images/client-2.png",
    text: "My kids abruptly stopped paying attention to me. I sought his advice when I started to feel concerned. He offered solutions that improved my kids’ behavior and brought peace at home.",
  },
  {
    name: "Ravi Singh",
    location: "Bangalore",
    image:
      "https://i.pinimg.com/736x/a7/99/d0/a799d0592bae082bbd34c3ce9476491b.jpg",
    text: "I was having relationship issues with my spouse. I sought his advice, and he provided me with remedies that helped me resolve my issues and brought harmony to my relationship.",
  },
  {
    name: "Sneha Nair",
    location: "Kochi",
    image:
      "https://i.pinimg.com/736x/19/c8/c7/19c8c789aec27508fee721babf82597e.jpg",
    text: `I was struggling with career growth. ${person_name} Ji gave me clear guidance and after following his remedies, I found new opportunities at work.`,
  },
  {
    name: "Karan Mehta",
    location: "Ahmedabad",
    image:
      "https://i.pinimg.com/736x/7e/46/c6/7e46c6d2798eff446b365c5246f4c9ca.jpg",
    text: `I faced unexpected financial hurdles. With ${person_name} Ji's guidance, my situation turned around and I regained stability.`,
  },
  {
    name: "Divya Sharma",
    location: "Jaipur",
    image:
      "https://i.pinimg.com/736x/ad/14/bf/ad14bf9ce76a0751060657d57e177ca4.jpg",
    text: "I felt mentally low and anxious. His positive energy and remedies gave me peace of mind and restored my confidence.",
  },
  {
    name: "Vikram Chauhan",
    location: "Chandigarh",
    image:
      "https://i.pinimg.com/1200x/0e/1b/49/0e1b4984c22ff810051677b8c7a29e7d.jpg",
    text: `Family disputes were creating stress at home. ${person_name} Ji gave me practical solutions and now harmony has returned to my family life.`,
  },
  {
    name: "Neha Reddy",
    location: "Hyderabad",
    image:
      "https://i.pinimg.com/736x/50/90/f6/5090f6123b7570102d14d6dbac939756.jpg",
    text: "My marriage was being delayed. With his remedies and pujas, within months my marriage got fixed happily.",
  },
  {
    name: "Rahul Bansal",
    location: "Lucknow",
    image:
      "https://i.pinimg.com/736x/c4/d8/f8/c4d8f8f64e1f00a5ca02253f5ecc27d0.jpg",
    text: `I had constant health issues. Following ${person_name} Ji’s guidance, my health improved steadily and I feel much stronger now.`,
  },
  {
    name: "Pooja Iyer",
    location: "Chennai",
    image:
      "https://i.pinimg.com/736x/56/2e/eb/562eeb2796c005cfb01a6cfd79094dc9.jpg",
    text: `I was worried about my job abroad visa getting rejected. ${person_name} Ji guided me with remedies, and finally my visa got approved without obstacles.`,
  },
  {
    name: "Siddharth Joshi",
    location: "Pune",
    image:
      "https://i.pinimg.com/736x/28/6b/03/286b03b2ad1c09bf52cbcc99a4dabba4.jpg",
    text: `I had constant misunderstandings with my partner. With ${person_name} Ji's support, our bond became stronger and filled with love again.`,
  },
];

export default function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-[#21140e] py-16 md:py-24 px-5">

      {/* ======================================== */}
      {/* BACKGROUND DECORATION */}
      {/* ======================================== */}

      <div className="absolute -top-52 -right-52 w-[600px] h-[600px] rounded-full bg-[#c9a45b]/8 blur-3xl" />

      <div className="absolute -bottom-52 -left-52 w-[600px] h-[600px] rounded-full bg-[#8b1e1e]/10 blur-3xl" />

      <div className="absolute top-24 left-[5%] hidden lg:block w-28 h-28 rounded-full border border-[#c9a45b]/15" />

      <div className="absolute bottom-24 right-[5%] hidden lg:block w-20 h-20 rounded-full border border-[#c9a45b]/15" />

      <div className="relative z-10 max-w-[1400px] mx-auto">

        {/* ======================================== */}
        {/* HEADER */}
        {/* ======================================== */}

        <div className="max-w-3xl mx-auto text-center">

          <div className="flex items-center justify-center gap-2 mb-4">

            <Sparkles className="w-4 h-4 text-[#dfbd6b]" />

            <span className="text-xs md:text-sm font-bold tracking-[0.22em] text-[#d5b260]">
              CLIENT EXPERIENCES
            </span>

            <Sparkles className="w-4 h-4 text-[#dfbd6b]" />

          </div>

          <h2 className="montserrat text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#fff8e9] leading-tight">

            Words From People
            <span className="block text-[#e1be68]">
              We've Guided
            </span>

          </h2>

          <div className="flex items-center justify-center gap-3 my-6">

            <span className="w-16 h-px bg-[#c9a45b]" />

            <span className="w-2 h-2 rotate-45 bg-[#c9a45b]" />

            <span className="w-16 h-px bg-[#c9a45b]" />

          </div>

          <p className="open-sans text-sm md:text-base leading-7 text-[#c8b9aa]">
            Read experiences shared by people who sought personal,
            relationship, family, career and spiritual guidance.
          </p>

        </div>

        {/* ======================================== */}
        {/* TESTIMONIAL GRID */}
        {/* ======================================== */}

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">

          {testimonials.map((testimonial, index) => (
            <article
              key={`${testimonial.name}-${index}`}
              className={`group relative overflow-hidden rounded-[26px] border border-[#d2b56d]/15 bg-[#faf7f0] p-6 md:p-7 shadow-[0_15px_45px_rgba(0,0,0,0.20)] hover:-translate-y-2 hover:border-[#d2b56d]/40 hover:shadow-[0_22px_55px_rgba(0,0,0,0.28)] transition-all duration-500 ${
                index === 0
                  ? "lg:col-span-2"
                  : ""
              }`}
            >

              {/* Gold top line */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#c9a45b] to-transparent opacity-70" />

              {/* Large Quote */}
              <div className="absolute top-5 right-6">

                <Quote
                  className="w-12 h-12 text-[#d7c49c]/45 group-hover:text-[#c9a45b]/50 transition-colors"
                  strokeWidth={1.5}
                />

              </div>

              {/* ================================= */}
              {/* USER */}
              {/* ================================= */}

              <div className="flex items-center gap-4">

                <div className="relative shrink-0">

                  <div className="w-16 h-16 rounded-full p-[2px] bg-[#c9a45b]">

                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      loading="lazy"
                      className="w-full h-full rounded-full object-cover"
                    />

                  </div>

                  {/* Online indicator */}
                  <div className="absolute bottom-0 right-0 w-4 h-4 rounded-full bg-[#8b1e1e] border-2 border-[#faf7f0]" />

                </div>

                <div>

                  <h3 className="montserrat text-base font-extrabold text-[#2c1a11]">
                    {testimonial.name}
                  </h3>

                  <div className="flex items-center gap-1 mt-1">

                    <MapPin className="w-3 h-3 text-[#a27a32]" />

                    <span className="text-xs text-[#85766a]">
                      {testimonial.location}
                    </span>

                  </div>

                </div>

              </div>

              {/* ================================= */}
              {/* STARS */}
              {/* ================================= */}

              <div className="flex items-center gap-0.5 mt-5">

                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className="w-3.5 h-3.5 fill-[#c49b48] text-[#c49b48]"
                  />
                ))}

              </div>

              {/* ================================= */}
              {/* TEXT */}
              {/* ================================= */}

              <p
                className={`mt-4 open-sans text-[14px] leading-7 text-[#62564c] ${
                  index === 0
                    ? "lg:text-[15px] lg:leading-8"
                    : ""
                }`}
              >
                “{testimonial.text}”
              </p>

              {/* ================================= */}
              {/* FOOTER */}
              {/* ================================= */}

              <div className="mt-6 pt-4 border-t border-[#e4d9c8] flex items-center justify-between">

                <span className="text-[9px] tracking-[0.18em] font-bold text-[#a17a37]">
                  VERIFIED EXPERIENCE
                </span>

                <span className="w-7 h-[2px] bg-[#c9a45b]" />

              </div>

            </article>
          ))}

        </div>

        {/* ======================================== */}
        {/* BOTTOM CTA */}
        {/* ======================================== */}

        <div className="mt-12 flex justify-center">

          <div className="flex flex-col sm:flex-row items-center gap-5 bg-[#2b1a12] border border-[#c9a45b]/20 rounded-2xl px-6 md:px-8 py-5 shadow-xl">

            <div className="text-center sm:text-left">

              <p className="montserrat text-base font-bold text-[#fff8e9]">
                Looking for personal guidance?
              </p>

              <p className="text-xs text-[#b9aa9b] mt-1">
                Speak with us privately about your concerns.
              </p>

            </div>

            <a
              href={`https://wa.me/${whatsapp_number}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#8b1e1e] text-white text-sm font-bold hover:bg-[#a42828] hover:-translate-y-0.5 transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              Start a Conversation
            </a>

          </div>

        </div>

      </div>

    </section>
  );
}
