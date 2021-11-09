// import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";

const ContactForm = ({
    name,
    number,
    handleNameChange,
    handleNumberChange,
}) => (
    <>
        <form>
            <label htmlFor="name">
                Name
                <input
                    id={uuidv4()}
                    value={name}
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                    required
                    onChange={handleNameChange}
                />
            </label>
            <label htmlFor="number">
                Number
                <input
                    id={uuidv4()}
                    value={number}
                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
                    required
                    onChange={handleNumberChange}
                />
            </label>

            <button type="submit">Add contact</button>
        </form>
    </>
);

ContactForm.propTypes = {};

ContactForm.defaultProps = {
    name: "",
    number: "",
};
export default ContactForm;
