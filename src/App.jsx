import { Icon } from "@iconify/react/dist/iconify.js";
import ExperiencesCard from "./components/ExperiencesCard";
import portofolio from "./data/portofolio.json";
import ProjectCard from "./components/ProjectCard";
import { useState } from "react";

function App() {
  const [isBurgerOpened, setIsBurgerOpened] = useState(false);
  function scrollToElement(id) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }

  function openBurger() {
    setIsBurgerOpened(!isBurgerOpened);
  }
  return (
    <>
      <div className="flex justify-center items-center flex-col">
        <header className="w-full sticky top-0 z-50 backdrop-blur-sm shadow-sm">
          <nav>
            <div className="my-5">
              <ul>
                <div className="flex justify-center md:hidden ">
                  {isBurgerOpened ? (
                    <Icon
                      onClick={() => openBurger()}
                      icon="charm:cross"
                      width="48"
                      height="48"
                      style={{ color: "black" }}
                    />
                  ) : (
                    <Icon
                      onClick={() => openBurger()}
                      icon="stash:burger-classic"
                      width="48"
                      height="48"
                      style={{ color: "black" }}
                    />
                  )}
                </div>
                {/* {isBurgerOpened && ( */}
                <div
                  className={`${isBurgerOpened ? "flex" : "hidden"
                    } flex flex-col mt-5 md:flex-row md:mt-none justify-center items-center gap-5 md:gap-[10%] md:flex`}>
                  <li>
                    <button
                      className="cursor-pointer"
                      onClick={() => scrollToElement("profile")}>
                      Profile
                    </button>
                  </li>
                  <li>
                    <button
                      className="cursor-pointer"
                      onClick={() => scrollToElement("experiences")}>
                      Experiences
                    </button>
                  </li>
                  <li>
                    <button
                      className="cursor-pointer"
                      onClick={() => scrollToElement("projects")}>
                      Projects
                    </button>
                  </li>
                  <li>
                    <button
                      className="cursor-pointer"
                      onClick={() => scrollToElement("contacts")}>
                      Contacts
                    </button>
                  </li>
                </div>
                {/* )} */}
              </ul>
            </div>
          </nav>
        </header>
        <main className="z-10">
          <div
            id="profile"
            className="h-screen flex flex-col lg:flex-row justify-center py-24 lg:py-0 gap-10 items-center">
            <div>
              <img
                id="my-pict"
                src="/image/my-picture.jpg"
                width="200"
                height="300"
                alt="rizfi"
                className="border-solid border-2 rounded-lg border-white rotate-[5deg]"
              />
            </div>
            <div className="w-[80%] md:w-[50%]">
              <div className=" flex flex-col justify-start items-start gap-5">
                <h2 className="text-2xl md:text-2xl lg:text-4xl font-bold">
                  Backend Developer and AI Enthusiast
                </h2>
                <div>
                  <h3 className="font-bold">
                    Hi there, I&apos;m{" "}
                    <span className=" text-orange1">RIZFI FERDIANSYAH</span>
                  </h3>
                  <p className="text-justify text-sm md:text-base">
                    Software Engineer with a strong foundation in backend development,
                    cloud-based systems, and applied AI engineering. Experienced in building
                    RESTful APIs and data pipelines using{" "}
                    <span className="text-orange1">Golang</span>,{" "}
                    <span className="text-orange1">Python</span>, and{" "}
                    <span className="text-orange1">PostgreSQL</span>, as well as developing
                    computer vision and NLP applications using{" "}
                    <span className="text-orange1">PyTorch</span> and{" "}
                    <span className="text-orange1">TensorFlow</span>.
                    Alongside backend and AI work, I am actively exploring game development
                    by building game prototypes in{" "}
                    <span className="text-orange1">C++</span> with{" "}
                    <span className="text-orange1">Raylib</span> to understand how gameplay
                    systems are structured.
                    I am also deepening my knowledge in{" "}
                    <span className="text-orange1">
                      Large Language Models (LLMs)
                    </span>{" "}
                    and interactive systems, with a strong interest in how software
                    engineering principles can be applied across games, AI, and user-facing
                    applications.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            id="experiences"
            className="min-h-screen flex flex-col justify-start items-center py-24">
            <h1 className="text-3xl font-bold">Experiences</h1>
            <div className="flex flex-col justify-center items-center">
              {portofolio.experiences.map((content, i) => {
                return <ExperiencesCard key={i} content={content} />;
              })}
            </div>
          </div>
          <div
            id="projects"
            className="min-h-screen flex flex-col justify-start items-center py-24">
            <h1 className=" text-3xl font-bold">Projects</h1>
            <div className="flex flex-col justify-center items-center mt-7">
              {portofolio.projects.map((content, i) => {
                return <ProjectCard key={i} content={content} />;
              })}
            </div>
          </div>
          <div
            id="contacts"
            className="h-screen flex flex-col justify-center items-center py-24">
            <h1 className="text-3xl font-bold">Social Media</h1>
            <div className="mt-7">
              <ul className="flex flex-col justify-center items-start gap-4">
                <li>
                  <a
                    className="flex justify-center items-center gap-2"
                    href="https://www.instagram.com/rizfi_f/">
                    <Icon
                      icon="mdi:instagram"
                      width="48"
                      height="48"
                      style={{ color: "black" }}
                    />
                    <h2 className="text-2xl">Instagram</h2>
                  </a>
                </li>
                <li>
                  <a
                    className=" flex justify-center items-center gap-2"
                    href="https://www.linkedin.com/in/rizfi-ferdiansyah-24909a220/">
                    <Icon
                      icon="uil:linkedin"
                      width="48"
                      height="48"
                      style={{ color: "black" }}
                    />
                    <h2 className="text-2xl">Linkedin</h2>
                  </a>
                </li>
                <li>
                  <a
                    className="flex justify-center items-center gap-2"
                    href="https://github.com/rrtxt">
                    <Icon
                      icon="mdi:github"
                      width="48"
                      height="48"
                      style={{ color: "black" }}
                    />
                    <h2 className="text-2xl">Github</h2>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
