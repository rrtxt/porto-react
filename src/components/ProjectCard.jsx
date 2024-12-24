import { Icon } from "@iconify/react/dist/iconify.js";
import { useEffect, useState } from "react";

export default function ProjectCard({ content }) {
  const [roles, setRoles] = useState("");
  const [techs, setTechs] = useState("");
  useEffect(() => {
    const rolesStr =
      content.role.length > 1 ? content.role.join(", ") : content.role[0];

    const techStr =
      content.tech.length > 1 ? content.tech.join(", ") : content.tech[0];

    setRoles(rolesStr);
    setTechs(techStr);
  }, [content.role, content.tech]);
  return (
    <div className="w-[70%] flex justify-evenly items-center mb-72">
      {/* <div className="flex justify-center items-center">
        <h1 className="text-9xl">1</h1>
      </div> */}
      <div className="w-[50%]">
        <h1 className="text-2xl font-semibold text-orange1">
          {content.title} <span className=" text-white">({content.year})</span>
        </h1>
        <p
          dangerouslySetInnerHTML={{ __html: content.desc }}
          className="text-justify mb-1"></p>
        <div className="border-y-2 py-3 font-semibold">
          My Role :<div>{roles}</div>
        </div>
        <div className="py-3 font-semibold">
          Tech Stack:
          <div className="flex justify-start items-center gap-5">
            <div>{techs}</div>
          </div>
        </div>
        {content.git && (
          <div className="w-20 flex justify-center items-center p-1 rounded-lg bg-black">
            <a
              href={content.git}
              className="flex justify-start items-center font-semibold text-lg gap-1">
              Git
              <Icon
                icon="mdi:github"
                width="32"
                height="32"
                style={{ color: "#fff" }}
              />
            </a>
          </div>
        )}
      </div>
      <div>
        <img width={450} height={200} src={content.doc} alt={content.title} />
      </div>
    </div>
  );
}