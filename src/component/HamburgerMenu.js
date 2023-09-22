import React from "react";
import { useState } from "react";
import { slide as Menu } from "react-burger-menu";
// import "react-burger-menu/build/styles.css";

const HamburgerMenu = () => {
  const menuList = ["HOME", "ABOUT ME", , "SKILL", "PROJECTS", "ARCHIVING"];

  const [menuOpen, setMenuOpen] = useState(false);

  const handleStateChange = (state) => {
    setMenuOpen(state.isOpen);
  };
  return (
    <div className="hamburger-menu">
      <Menu
        isOpen={menuOpen}
        onStateChange={handleStateChange}
        right // 메뉴를 오른쪽에 표시합니다.
        className={"my-custom-menu"} // 커스텀 클래스 추가
      >
        <ul className="menu-list">
          {menuList.map((item) => (
            <li>
              <a href={`#${item}`}>{item}</a>
            </li>
          ))}
        </ul>
      </Menu>
    </div>
  );
};

export default HamburgerMenu;
