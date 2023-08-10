import CardSkills from "../CardSkills";
import IconHTML from "../../assets/Icons/IconHTML.png";
import IconCSS from "../../assets/Icons/IconCSS.png";
import IconJS from "../../assets/Icons/IconJavaScript.png";
import IconReact from "../../assets/Icons/IconReact.png";
import IconFigma from "../../assets/Icons/IconFigma.png";

import "./styles.css";

const SkillSection = () => {
  const skillsData = [
    { icon: IconHTML, title: "HTML", text: 6 },
    { icon: IconCSS, title: "CSS", text: 6 },
    { icon: IconJS, title: "JavaScript", text: 3 },
    { icon: IconReact, title: "React", text: 2 },
    { icon: IconFigma, title: "Figma", text: 3 },
  ];

  return (
    <section className="skills-section">
      <h2 className="text-center text-lg">03. Habilidades</h2>
      <div className="line-decoration">
        <span className="line-decoration--line"></span>
        <span className="line-decoration--circle"></span>
        <span className="line-decoration--circle"></span>
        <span className="line-decoration--circle"></span>
      </div>
      <div className="skills-section__cards">
        {skillsData.map((skill, index) => (
          <CardSkills key={index} skillData={skill} />
        ))}
      </div>
    </section>
  );
};

export default SkillSection;
