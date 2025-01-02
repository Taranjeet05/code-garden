import PropTypes from "prop-types";
import MenuItem from "./menu-item";

const MenuList = ({ list = [] }) => {
  return (
    <ul>
      {list && list.length
        ? list.map((listItem, index) => (
            <MenuItem key={index} item={listItem} />
          ))
        : null}
    </ul>
  );
};

MenuList.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      to: PropTypes.string.isRequired,
      children: PropTypes.array, // Nested menu items
    })
  ),
};

export default MenuList;
