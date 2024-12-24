import { useEffect, useState } from "react";

export default function ExperiencesCard({ content }) {
  const [skills, setSkills] = useState("");
  useEffect(() => {
    const mergedStr = content.skills.join(", ");
    setSkills(mergedStr);
  }, [content.skills]);
  return (
    <div className="flex flex-col justify-center items-center lg:flex-row lg:items-start w-[60%] mt-7">
      <div className=" w-[40%] text-center font-semibold">
        {content.timeline}
      </div>
      <div className="w-[60%]">
        <div className=" font-semibold">
          <span className=" text-orange1">{content.role}</span> -{" "}
          {content.place}
        </div>
        <div
          className="text-justify"
          dangerouslySetInnerHTML={{ __html: content.desc }}></div>
        <div className="mt-2 font-bold">{skills}</div>
      </div>
    </div>
  );
}
