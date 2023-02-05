// ========== Layout ========== \\
import HeadPage from "../layout/head.layout";
import Container from "../layout/container.layout";

// ========== Components ========== \\
import Navigation from "../components/navigation";
import Footer from "../components/footer";
import CourseCard from "../components/courseCard";
import Hero from "../components/hero";

// ========== Icons ========== \\
import animation from "../public/icons/icon-animation.svg";
import business from "../public/icons/icon-business.svg";
import crypto from "../public/icons/icon-crypto.svg";
import design from "../public/icons/icon-design.svg";
import photography from "../public/icons/icon-photography.svg";

export default function Home() {
  const courseData = [
    {
      title: "Animation",
      text: "Learn the latest animation techniques to create stunning motion design and captivate your audience.",
      icon: animation,
      href: "###",
    },
    {
      title: "Design",
      text: "Create beautiful, usable interfaces to help shape the future of how the web looks.",
      icon: design,
      href: "###",
    },
    {
      title: "Photography",
      text: "Explore critical fundamentals like lighting, composition, and focus to capture exceptional photos.",
      icon: photography,
      href: "###",
    },
    {
      title: "Crypto",
      text: "All you need to know to get started investing in crypto. Go from beginner to advanced with this 54 hour course.",
      icon: crypto,
      href: "###",
    },
    {
      title: "Business",
      text: "A step-by-step playbook to help you start, scale, and sustain your business without outside investment.",
      icon: business,
      href: "###",
    },
  ];
  return (
    <>
      <HeadPage title="Skilled" description="skill for you" />
      <header>
        <Navigation />
      </header>
      <main className="w-full">
        <Container style="container m-auto">
          <Hero
            title="Maximize skill, minimize budget"
            text="Our modern courses across a range of in-demand skills will give you
                    the knowledge you need to live the life you want."
            buttonTitle="Get Started"
            buttonColor="linear-gradient(180deg, #FF6F48 0%, #F02AA6 100%)"
            image="/images/image-hero-mobile.png"
          />
        </Container>
        <Container style="bg-gradient-to-t from-[#F0F1FF] to-[white] h-full">
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-20 container m-auto">
            <div className="w-full h-full bg-gradient-to-t from-[#F02AA6] to-[#FF6F48] rounded-xl px-8 py-9">
              <h3 className="text-white font-bold text-4xl w-full lg:w-3/4 leading-[3.5rem]">
                Check out our most popular courses!
              </h3>
            </div>
            {courseData.map((el, index) => {
              return <CourseCard key={index} data={el} />;
            })}
          </div>
        </Container>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
