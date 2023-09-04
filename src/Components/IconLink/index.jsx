import "./styles.css";

const IconLink = (iconsData) => {
  const {name, url, alt} = iconsData;

  return (
    <a className="icon-link" href={url}>
      <img src={name} alt={alt} />
    </a>
  );
};

export default IconLink;