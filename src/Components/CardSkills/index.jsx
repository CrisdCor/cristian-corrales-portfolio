import "./styles.css";

const CardSkills = ({ skillData }) => {
  const { icon, title, projects } = skillData;

  return (
    <div className="skills-card">
      <figure className="skills-card__icon">
        <img src={icon} alt="" />
      </figure>
      <div className="skills-card__text">
        <h2 className="skills-card__text--title text-m">{title}</h2>
        <p className="skills-card__text--text text-m">
          Proyectos realizados: {projects}
        </p>
      </div>
    </div>
  );
};

export default CardSkills;
