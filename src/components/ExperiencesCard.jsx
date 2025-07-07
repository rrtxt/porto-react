import { useEffect, useState } from "react";

export default function ExperiencesCard({ content }) {
  const [skills, setSkills] = useState("");
  // const [jobdescs, setJobdescs] = useState([]);
  useEffect(() => {
    const mergedStr = content.skills.join(", ");
    setSkills(mergedStr);
  }, [content.skills]);
  return (
    <div className="flex flex-col justify-center items-center w-[100%] mt-8 text-xs md:text-base">
      <div className=" w-[60%] text-left font-medium text-md mb-1">
        {content.timeline}
      </div>
      <div className="w-[60%]">
        <div className="font-semibold mb-1">
          <span className=" text-orange1 text-2xl">{content.role}</span>
          {" - "}
          <span className="">{content.place}</span>
        </div>
        <p className="text-justify mb-1">{content.intro}</p>
        <div>
          {/* <span className="text-orange1">Job Description:</span> */}
          <ul className="list-disc ml-5">
            {content.jobdesc.map((job, i) => (
              <li key={i} className="text-justify mb-1">
                <span dangerouslySetInnerHTML={{ __html: job }}></span>
              </li>
            ))}
          </ul>
        </div>
        {/* <div
          className="text-justify"
          dangerouslySetInnerHTML={{ __html: content.desc }}></div> */}
        {/* <div className="mt-2 font-bold">{skills}</div> */}
      </div>
    </div>
  );
}
