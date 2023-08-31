import Input from "../../Components/Input";
import TextArea from "../../Components/TextArea";
import Button from "../../Components/Button";
import "./styles.css";

const FormContact = () => {
  return (
    <section className="form-contact">
      <h2 className="form-contact--title text-lg text-regular text-center">
        ¿Algo que me quieras preguntar?
      </h2>
      <p className="text-m text-center">
        No dudes en hacerlo. Te estaré dando respuesta lo más pronto posible.
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
