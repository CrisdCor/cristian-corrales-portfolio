import Input from "../../Components/Input";
import TextArea from "../../Components/TextArea";
import Button from "../../Components/Button";
import "./styles.css";

const FormContact = () => {
  return (
    <section className="form-contact">
      <p className="text-m text-center">
        Si lo prefieres, también puedes contactarme diligenciando el siguiente
        formulario.
      </p>
      <form className="form-contact__form" action="">
        <Input />
        <TextArea />
        <Button />
      </form>
    </section>
  );
};

export default FormContact;
