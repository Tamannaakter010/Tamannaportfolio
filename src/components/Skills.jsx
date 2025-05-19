import { useState } from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaPython,
  FaGithub,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiDaisyui,
  SiExpress,
  SiMongodb,
  SiJavascript,
  SiTypescript,
  SiBootstrap,
  SiFirebase,
  SiVercel,
} from "react-icons/si";
import { DiScrum } from "react-icons/di";
import { TbApi } from "react-icons/tb";
import { GiArtificialIntelligence } from "react-icons/gi";

const skills = [
  {
    name: "Expertise",
    list: [
      { name: "HTML", icon: <FaHtml5 className="text-3xl text-orange-500" /> },
      { name: "CSS", icon: <FaCss3Alt className="text-3xl text-blue-500" /> },
      { name: "React.js", icon: <FaReact className="text-3xl text-blue-400" /> },
      { name: "Tailwind", icon: <SiTailwindcss className="text-3xl text-cyan-400" /> },
      { name: "DaisyUI", icon: <SiDaisyui className="text-3xl text-purple-500" /> },
    ],
  },
  {
    name: "Comfortable",
    list: [
      { name: "Node", icon: <FaNodeJs className="text-3xl text-green-600" /> },
      { name: "Express", icon: <SiExpress className="text-3xl text-gray-400" /> },
      { name: "CRUD", icon: <DiScrum className="text-3xl text-yellow-500" /> },
      { name: "MongoDB", icon: <SiMongodb className="text-3xl text-green-500" /> },
      { name: "ES6", icon: <SiJavascript className="text-3xl text-yellow-400" /> },
      { name: "REST API", icon: <TbApi className="text-3xl text-blue-600" /> },
     
    ],
  },
  {
    name: "Familiar",
    list: [
      { name: "TypeScript", icon: <SiTypescript className="text-3xl text-blue-600" /> },
      { name: "Bootstrap", icon: <SiBootstrap className="text-3xl text-purple-600" /> },
      { name: "Python", icon: <FaPython className="text-3xl text-blue-500" /> },
      { name: "Machine Learning", icon: <GiArtificialIntelligence className="text-3xl text-pink-500" /> },
      { name: "C", icon: <span className="text-3xl text-blue-800 font-bold">C</span> },
     
    ],
  },
  {
    name: "Hosting",
    list: [
      { name: "GitHub", icon: <FaGithub className="text-3xl text-gray-400" /> },
      { name: "Firebase", icon: <SiFirebase className="text-3xl text-yellow-500" /> },
      { name: "Vercel", icon: <SiVercel className="text-3xl text-black dark:text-white" /> },
    ],
  },
];

const Skills = () => {
  const [selectedSkill, setSelectedSkill] = useState(null);

  const handleSkillClick = (skillName) => {
    setSelectedSkill(skillName);
    setTimeout(() => {
      setSelectedSkill(null);
    }, 2000); // Hide the skill name after 2 seconds
  };

  return (
    <div className="bg-black min-h-screen text-white flex flex-col items-center justify-center">
      <h2 className="text-2xl font-bold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-500">
        MY Skills
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 p-6 w-full max-w-4xl">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="card bg-gray-900 text-white shadow-lg rounded-xl p-6 hover:scale-105 hover:shadow-2xl transition-transform duration-300"
          >
            <div className="card-body text-center">
            <h2 className="card-title text-lg font-bold mb-4 justify-center hover:bg-gray-500 hover:rounded-sm transition-all duration-200">
  {skill.name}
</h2>
              <div className="flex flex-wrap justify-center gap-4">
                {skill.list.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col items-center justify-center p-2 hover:scale-110 transition-transform duration-300 cursor-pointer"
                    onClick={() => handleSkillClick(item.name)}
                  >
                    {item.icon}
                    {selectedSkill === item.name && (
                      <p className="text-sm text-gray-300 mt-2 animate-fade-in">{item.name}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;