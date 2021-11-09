import PropTypes from 'prop-types';
import ContactItem from './ContactItem';

const ContactList = ({ contacts }) => {
  return contacts.length > 0 ? (
    <ul className="nameList">
      {contacts.map(({ id, name, number }) => (
        <li className="nameItem" key={id}>
          <ContactItem name={name} number={number} id={id} />
        </li>
      ))}
    </ul>
  ) : (
    <>
      <p>No contacts</p>
    </>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    }).isRequired,
  ),
};

export default ContactList;
