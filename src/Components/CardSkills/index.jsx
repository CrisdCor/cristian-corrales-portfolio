import "./styles.css";

const CardSkills = ({ skillData }) => {
  const { icon, title, projects } = skillData;

  return (
      <article className="skills-card">
        <figure className="skills-card__icon">
          <img src={icon} alt="" />
        </figure>
        <hr className="skills-card--division" />
        <div className="skills-card__text">
          <h2 className="skills-card__text--title text-lg text-center">
            {title}
          </h2>
          {/* <p className="skills-card__text--text text-m text-center">
            {projects} proyectos
          </p> */}
        </div>
      </article>
  );
};

export default CardSkills;
