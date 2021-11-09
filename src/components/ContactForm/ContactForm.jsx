// import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";

const ContactForm = ({ name }) => (
    <>
        <label htmlFor="name"></label>
        <input
            id={uuidv4()}
            value={name}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
        />
        <button type="submit"></button>
    </>
);

ContactForm.propTypes = {};

ContactForm.defaultProps = {};
export default ContactForm;
