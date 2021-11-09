import PropTypes from "prop-types";

const ContactList = ({ contacts }) => {
    return contacts.length > 0 ? (
        <ul className="nameList">
            {contacts.map((contact) => (
                <li className="nameItem" key={contact.id}></li>
            ))}
        </ul>
    ) : (
        <>
            <p>No contacts</p>
        </>
    );
};

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ContactList;
