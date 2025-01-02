import PropTypes from "prop-types";
import MenuList from "./menu-list";

const TreeView = ({ menu = [] }) => {
  return (
    <div className="min-h-screen w-[350px] bg-[#00476E] text-white p-4">
      <h1 className="text-3xl font-bold mb-4 mt-7">Tree View</h1>
      <MenuList list={menu} />
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
