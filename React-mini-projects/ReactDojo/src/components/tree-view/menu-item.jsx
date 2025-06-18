import PropTypes from "prop-types";
import MenuList from "./menu-list";
import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

const MenuItem = ({ item }) => {
  const [displayCurrentChildren, setDisplayCurrentChildren] = useState({});

  function handleToggleChildren(getCurrentLable) {
    setDisplayCurrentChildren({
      ...displayCurrentChildren,
      [getCurrentLable]: !displayCurrentChildren[getCurrentLable],
    });
  }

  return (
    <li className="mb-2">
      <div className="flex items-center gap-3 cursor-pointer">
        <p className="text-lg">{item.label}</p>
        {item && item.children && item.children.length ? (
          <span
            onClick={() => handleToggleChildren(item.label)}
            className="text-xl"
          >
            {displayCurrentChildren[item.label] ? <FaMinus /> : <FaPlus />}
          </span>
        ) : null}
      </div>
      {item &&
      item.children &&
      item.children.length > 0 &&
      displayCurrentChildren[item.label] ? (
        <MenuList list={item.children} />
      ) : null}
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
