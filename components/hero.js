import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

// ========== UIElement ========== \\
import { PrimaryButton } from "../UIElement/element";

const Hero = ({ title, text, buttonTitle, buttonColor, image }) => {
  const h2Ref = useRef(null);
  const pRef = useRef(null);
  const btnRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      h2Ref.current,
      { y: "-40px" },
      { delay: 1.5, duration: 1, opacity: 1, y: "0" }
    )
      .fromTo(pRef.current, { y: "-40px" }, { duration: 1, opacity: 1, y: "0" })
      .to(btnRef.current, { duration: 1, opacity: 1, y: "0" })
      .to(imageRef.current, {
        duration: 1,
        opacity: 1,
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top 55%",
        },
        onComplete() {
          ScrollTrigger.refresh(true);
        },
      });

    return () => tl.kill();
  }, []);

  return (
    <div className="flex flex-wrap justify-between items-center w-full gap-8">
      <div className="flex flex-col gap-6 items-start justify-between container max-w-2xl">
        <div className="flex flex-col gap-6">
          <h2
            className="text-6xl lg:text-7xl text-[#13183F] font-extrabold opacity-0"
            ref={h2Ref}
          >
            {title}
          </h2>
          <p className="text-[#83869A] leading-7 text-lg opacity-0" ref={pRef}>
            {text}
          </p>
        </div>
        <PrimaryButton
          background={buttonColor}
          ref={btnRef}
          className="opacity-0"
        >
          {buttonTitle}
        </PrimaryButton>
      </div>
      {image && (
        <img
          src={image}
          alt="hero"
          ref={imageRef}
          className="opacity-0 duration-500"
        />
      )}
    </div>
  );
};

export default Hero;
