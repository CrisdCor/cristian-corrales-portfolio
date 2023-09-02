import "./styles.css";

const PersonalSection = () => {
  return (
    <section className="personal-section">
      <div className="personal-section__text">
        <h2 className="personal-section__text--title text-center text-lg">
          01. Personal
        </h2>
        <div className="line-decoration">
          <span className="line-decoration--line"></span>
          <span className="line-decoration--circle"></span>
        </div>
        <p className="personal-section__text--text text-m">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
          soluta cumque itaque aut quos, ducimus quod excepturi totam.
          Recusandae magnam labore commodi doloremque esse distinctio porro
          eveniet laboriosam sapiente ullam. Commodi ipsum aspernatur quod hic.
          Iure perspiciatis, illo sint voluptatem eligendi in. Earum accusantium
          est assumenda quasi incidunt ad aliquam quidem libero maxime
          consequuntur? Sint, repudiandae! Vel veniam odit id. illo sint
          voluptatem eligendi in. libero maxime consequuntur? Sint, repudiandae!
          Vel veniam odit id.
        </p>
      </div>
    </section>
  );
};

export default PersonalSection;
