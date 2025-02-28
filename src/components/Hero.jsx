import { useThemeContext } from "../context/Theme";
import { Download } from "lucide-react";
import { Typewriter } from "react-simple-typewriter";
import { cv, img1 } from "../assets/image";

export default function Hero() {
  const [theme] = useThemeContext();

  return (
    <section
      className={`pt-20 flex flex-row items-center justify-center lg:justify-between px-8 lg:px-20 py-16 transition-all ${
        theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      }`}
      id="about"
    >
      {/* Left Content */}
      <div className="max-w-2xl">
        <p className="text-sm font-semibold text-gray-600 dark:text-gray-400">
          Welcome to my portfolio website!
        </p>
        <h1 className="text-2xl md:text-4xl font-bold mt-2">
          Hello, my name is{" "}
          <span
            className={`${
              theme === "dark" ? "text-blue-400" : "text-blue-600"
            }`}
          >
            Subhashree Lenka
          </span>{" "}
          <br />
          I' m a{" "}
          <span
            className={`${
              theme === "dark" ? "text-blue-400" : "text-blue-600"
            }`}
          >
            <Typewriter
              words={["Full Stack Web Developer", "Frontend Web Developer"]}
              loop={0} // Infinite loop
              cursor
              cursorStyle="_"
              typeSpeed={80}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </span>
        </h1>
        <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 mt-4">
          A passionate MERN Stack Developer, Crafting seamless and powerful web
          applications with a passion for the MERN stack—where code meets
          creativity!
        </p>

        {/* Buttons */}
        <div className="mt-6 flex gap-4">
          <a
            href={cv}
            download="Subhashree_Lenka_Resume.pdf"
            target="_blank"
            className={`flex items-center gap-2 px-6 py-3 rounded-full shadow-md transition-all ${
              theme === "dark"
                ? "bg-gray-700 text-white hover:bg-gray-600"
                : "bg-gray-200 text-gray-800 hover:bg-gray-300"
            }`}
          >
            <Download className="w-5 h-5" />
            Download Resume
          </a>
        </div>
      </div>

      {/* Right Illustration */}
      <div className="mt-10 lg:mt-0 hidden lg:block">
        <img src={img1} alt="Illustration" className="w-full max-w-md" />
      </div>
    </section>
  );
}
