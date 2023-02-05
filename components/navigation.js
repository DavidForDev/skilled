import { useEffect, useRef } from "react";
import gsap from "gsap";

// ========== UIElement ========== \\
import { PrimaryButton } from "../UIElement/element";

// ========== hooks ========== \\
import { useScrollData } from "../hooks/useScrollData.hook";

const Navigation = () => {
  const navRef = useRef(null);
  const { scrollDirection } = useScrollData();

  useEffect(() => {
    const tl = gsap.timeline();

    tl.to(navRef.current, { delay: 0.5, opacity: 1, duration: 0.5 });

    return () => tl.kill();
  }, []);

  return (
    <nav
      ref={navRef}
      className="w-full p-5 flex justify-between items-center container m-auto opacity-0 fixed left-0 right-0 bg-white z-10"
      style={
        !scrollDirection
          ? { transform: "translateY(-140px)", transition: "0.2s" }
          : { transform: "translateY(0px)", transition: "0.2s" }
      }
    >
      <h2 className="text-[#13183F] text-3xl font-extrabold">skilled</h2>
      <PrimaryButton background="#13183F">Get Started</PrimaryButton>
    </nav>
  );
};

export default Navigation;
