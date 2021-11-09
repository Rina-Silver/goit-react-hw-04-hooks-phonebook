import PropTypes from 'prop-types';

const ContactItem = ({ id, name, number }) => {
  return (
    <>
      <p>
        🙂{name} 📞{number}
      </p>
    </>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default ContactItem;
