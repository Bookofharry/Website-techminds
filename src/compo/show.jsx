// Example: TechMindsMarqueeShowcase.jsx
import Marquee from "./Marque";
import r1 from "../assets/rachael.jpg";
import r2 from "../assets/instructor.jpeg";
import r3 from "../assets/class.jpeg";
import r4 from "../assets/testimonials.jpeg";

const Chip = ({ img, text }) => (
  <div className="marquee-pill">
    {img && <img src={img} alt="" />}
    <span>{text}</span>
  </div>
);

export default function TechMindsMarqueeShowcase() {
  const row1 = [
    <Chip img={r1} text="Coding for Kids" />,
    <Chip img={r2} text="Data Science" />,
    <Chip img={r3} text="Digital Marketing" />,
    <Chip img={r4} text="Software Engineering" />,
    <Chip text="Web Development" />,
    <Chip text="App Development" />,
  ];

  const row2 = [
    <Chip text="Hands-on Projects" />,
    <Chip text="Mentorship" />,
    <Chip text="Career Support" />,
    <Chip text="Abuja • Bwari" />,
    <Chip text="Tech Minds Academy" />,
  ];

  return (
    <div className="w-full bg-[#001f54] text-white py-10 relative overflow-hidden">
      {/* Subtle navy gradient accents */}
      <div className="pointer-events-none absolute inset-0 opacity-30"
           style={{
             background:
               "radial-gradient(600px 200px at 10% 10%, rgba(37,99,235,.45), transparent 60%)," +
               "radial-gradient(600px 200px at 90% 80%, rgba(14,165,166,.35), transparent 60%)",
           }}
      />
      <div className="max-w-6xl mx-auto px-4 space-y-6 relative">
        <Marquee
          items={row1}
          direction="left"
          speed={90}
          gap="1rem"
          gradientWidth="80px"
          className="text-base md:text-lg"
        />
        <Marquee
          items={row2}
          direction="right"
          speed={70}
          gap="1rem"
          gradientWidth="80px"
          className="text-base md:text-lg opacity-90"
        />
      </div>
    </div>
  );
}
