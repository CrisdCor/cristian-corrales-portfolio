import "./styles.css";

const TextArea = ({textPlaceHolder}) => {
  return (
    <textarea
      className="textarea text-m"
      id=""
      placeholder={textPlaceHolder}
      name=""
      maxLength="250"
    ></textarea>
  );
};

export default TextArea;
