// ========== UIElement ========== \\
import { PrimaryButton } from "../UIElement/element";

const Footer = () => {
  return (
    <div className="w-full bg-[#13183F] p-8">
      <div className="container flex items-center justify-between m-auto px-5">
        <h2 className="text-[white] text-3xl font-semibold">skilled</h2>
        <PrimaryButton background="linear-gradient(180deg, #4851FF 0%, #F02AA6 100%);">
          Get Started
        </PrimaryButton>
      </div>
    </div>
  );
};

export default Footer;
