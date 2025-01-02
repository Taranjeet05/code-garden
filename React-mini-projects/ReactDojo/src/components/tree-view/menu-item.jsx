import PropTypes from "prop-types";

const MenuItem = ({ item }) => {
  return (
    <li>
      <p>{item.label}</p>
    </li>
  );
};

MenuItem.propTypes = {
  item: PropTypes.shape({
    label: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
    children: PropTypes.array, // Nested menu items
  }).isRequired,
};

export default MenuItem;
