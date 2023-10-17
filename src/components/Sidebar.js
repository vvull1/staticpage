import React from "react";
import "./Sidebar.css"; 
import { BiHomeAlt,BiMenu,BiListUl,BiMobileAlt,BiInfoCircle,BiLogoCodepen,BiIdCard,BiCheckSquare } from "react-icons/bi";
import { BsChatSquareText,BsBorderAll} from "react-icons/bs";

function Sidebar() {
  return (
    <aside className="col-md-3 col-lg-2">
      <div className="list-group">
        <li className="list-group-item list-group-item-action">
          <h4>Favorites</h4>
        </li>
        <li className="list-group-item list-group-item-action">
          <BiHomeAlt/>Ad Dashboard
        </li>
        <li className="list-group-item list-group-item-action">
          <BiMenu/>Divisions
        </li>
        <li className="list-group-item list-group-item-action">
          <BiLogoCodepen/>Item Summary
        </li>
        <li className="list-group-item list-group-item-action">
          <h4>Main Menu</h4>
        </li>
        <li className="list-group-item list-group-item-action">
          <BiIdCard/>Item Code
        </li>
        <li className="list-group-item list-group-item-action">
          <BiCheckSquare/>Divisions
        </li>
        <li className="list-group-item list-group-item-action">
          <BsChatSquareText/>Item Groups
        </li>
        <li href="#" className="list-group-item list-group-item-action">
          <BiInfoCircle/>Deal Types
        </li>
        <li className="list-group-item list-group-item-action">
          <BiMobileAlt/>Performances
        </li>
        <li className="list-group-item list-group-item-action">
         <BsBorderAll/>Link Groups
        </li>
        <li className="list-group-item list-group-item-action">
          <BiListUl/>CDM schedule
        </li>
        
      </div>
    </aside>
  );
}

export default Sidebar;
