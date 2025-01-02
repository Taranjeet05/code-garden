import PropTypes from "prop-types";
import MenuList from "./menu-list";

const TreeView = ({ menu = [] }) => {
  return (
    <div>
      <div>
        <h1>Tree View</h1>
      </div>
      <div>
        <MenuList list={menu} />
      </div>
    </div>
  );
};

TreeView.propTypes = {
  menu: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      to: PropTypes.string.isRequired,
      children: PropTypes.array, // Nested menu items
    })
  ),
};

export default TreeView;
