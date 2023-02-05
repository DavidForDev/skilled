import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const CourseCard = ({ data }) => {
  const { title, text, icon, href } = data;

  const cardRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.to(cardRef.current, {
      duration: 1,
      opacity: 1,
      scrollTrigger: {
        trigger: cardRef.current,
        start: "top 45%",
      },
      onComplete() {
        ScrollTrigger.refresh(true);
      },
    });

    return () => tl.kill();
  }, []);

  return (
    <div
      ref={cardRef}
      className="bg-[#FFFFFF] p-8 py-12 rounded-xl relative w-full cursor-pointer shadow-sm opacity-0 duration-500"
    >
      <Image
        src={icon}
        width={50}
        height={50}
        alt="svg"
        className="absolute top-[-30px]"
      />
      <div className="flex flex-col gap-6 justify-between h-full">
        <div className="flex flex-col gap-4">
          <h3 className="text-[#13183F] text-xl font-extrabold">{title}</h3>
          <p className="text-[#83869A] leading-6 w-2/3">{text}</p>
        </div>
        <a href={href} className="text-[#F74780] hover:opacity-70">
          Get Started
        </a>
      </div>
    </div>
  );
};

export default CourseCard;
