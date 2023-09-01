import "./styles.css";

const Input = ({textPlaceHolder}) => {
  return (
    <input
      className="inputs text-m"
      type="email"
      placeholder={textPlaceHolder}
    />
  );
};

export default Input;
