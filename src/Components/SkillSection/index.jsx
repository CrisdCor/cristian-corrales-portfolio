import CardSkills from "../CardSkills";
import IconHTML from "../../assets/Icons/IconHtml5.svg";
import IconCSS from "../../assets/Icons/IconCss3.svg";
import IconJS from "../../assets/Icons/IconJavaScript.svg";
import IconReact from "../../assets/Icons/IconReact.svg";
import IconFigma from "../../assets/Icons/IconFigma.svg";

import "./styles.css";

const SkillSection = () => {
  const skillsData = [
    { icon: IconHTML, title: "HTML", projects: 6 },
    { icon: IconCSS, title: "CSS", projects: 6 },
    { icon: IconJS, title: "JavaScript", projects: 3 },
    { icon: IconReact, title: "React", projects: 2 },
    { icon: IconFigma, title: "Figma", projects: 3 },
  ];

  return (
    <section className="skills-section">
      <h2 className="text-left text-lg">03. Habilidades</h2>
      <div className="line-decoration">
        <span className="line-decoration--line"></span>
        <span className="line-decoration--circle"></span>
        <span className="line-decoration--circle"></span>
        <span className="line-decoration--circle"></span>
      </div>
      <div className="skills-section__cards">
        <div className="cards__overflow cards__overflow--left"></div>
        <div className="card__carrete-wrap">
          <div className="cards__carrete">
            {skillsData.map((skill, index) => (
              <CardSkills key={index} skillData={skill} />
            ))}
          </div>
          {/* <div className="cards__carrete">
            {skillsData.map((skill, index) => (
              <CardSkills key={index} skillData={skill} />
            ))}
          </div> */}
        </div>
        <div className="cards__overflow cards__overflow--right"></div>
      </div>
    </section>
  );
};

export default SkillSection;
