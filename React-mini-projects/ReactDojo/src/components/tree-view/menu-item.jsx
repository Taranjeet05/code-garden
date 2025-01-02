import PropTypes from "prop-types";
import MenuList from "./menu-list";
import { useState } from "react";

const MenuItem = ({ item }) => {
  const [displayCurrentChildren, setDisplayCurrentChildren] = useState({});

  function handleToggleChildren(getCurrentLable) {
    setDisplayCurrentChildren({
      ...displayCurrentChildren,
      [getCurrentLable]: !displayCurrentChildren[getCurrentLable],
    });
  }

  return (
    <li>
      <div>
        <p>{item.label}</p>
        {item && item.children && item.children.length ? (
          <span onClick={() => handleToggleChildren(item.label)}>+</span>
        ) : null}
      </div>
      {item && item.children && item.children.length > 0 ? (
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
