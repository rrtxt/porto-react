import { Icon } from "@iconify/react/dist/iconify.js";
import ExperiencesCard from "./components/ExperiencesCard";
import portofolio from "./data/portofolio.json";
import ProjectCard from "./components/ProjectCard";

function App() {
  function scrollToElement(id) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }
  return (
    <>
      <div className="flex justify-center items-center flex-col">
        <header className="w-full bg-blue1/30 sticky top-0 z-50 backdrop-blur-sm shadow-sm">
          <nav>
            <div className="my-5">
              <ul>
                {/* <div id="burgerIcon" className=" md:hidden">
                  <Icon
                    icon="stash:burger-classic"
                    width="48"
                    height="48"
                    style={{ color: "#fff" }}
                  />
                  <Icon
                    icon="charm:cross"
                    width="48"
                    height="48"
                    style={{ color: "#fff" }}
                  />
                </div> */}
                <div className="flex justify-center items-center gap-[10%]">
                  <li>
                    <div
                      className="cursor-pointer"
                      onClick={() => scrollToElement("profile")}>
                      Profile
                    </div>
                  </li>
                  <li>
                    <div
                      className="cursor-pointer"
                      onClick={() => scrollToElement("experiences")}>
                      Experiences
                    </div>
                  </li>
                  <li>
                    <div
                      className="cursor-pointer"
                      onClick={() => scrollToElement("projects")}>
                      Projects
                    </div>
                  </li>
                  <li>
                    <div
                      className="cursor-pointer"
                      onClick={() => scrollToElement("contacts")}>
                      Contacts
                    </div>
                  </li>
                </div>
              </ul>
            </div>
          </nav>
        </header>
        <main className="z-10">
          <div
            id="profile"
            className=" h-screen flex flex-col lg:flex-row justify-center gap-10 items-center">
            <div>
              <img
                id="my-pict"
                src="/image/my-picture.jpg"
                width="200"
                height="300"
                alt="rizfi"
                className="border-solid border-2 border-white rotate-[5deg]"
              />
            </div>
            <div className="w-[50%]">
              <div className=" flex flex-col justify-start items-start gap-5">
                <h2 className=" text-4xl">Backend Developer</h2>
                <div>
                  <h3 className=" font-bold">
                    Hi there, I'm{" "}
                    <span className=" text-orange1">RIZFI FERDIANSYAH</span>
                  </h3>
                  <p className="text-justify">
                    A final-year student at Universitas Airlangga, majoring in
                    Information system. Currently, I am honing my skills in{" "}
                    <span className=" text-orange1">Golang</span> and
                    <span className=" text-orange1"> Node.js</span>, which are
                    essential for creating scalable and efficient web
                    applications. I am eager to apply my knowledge and skills in
                    practical settings, contributing to projects that make a
                    difference while further developing my expertise in web
                    development.
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
                      style={{ color: "#fff" }}
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
                      style={{ color: "#fff" }}
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
                      style={{ color: "#fff" }}
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
