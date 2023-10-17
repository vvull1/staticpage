import React from 'react';
import { AiOutlineBell,AiOutlineSearch,AiOutlineWindows } from "react-icons/ai";

function Header() {
  return (
    <header className="bg-primary text-white py-4">
      <div className="container" style={{ height: "25px" }}>
        <div className="row">
          <div className="col-8" >
            <h2>R7 System</h2>
          </div>
          <div className="col-4 text-end">
            <h2><AiOutlineSearch style={{ marginRight: "15px" }}/>
            <AiOutlineBell style={{ marginRight: "15px" }}/>
            <AiOutlineWindows/></h2>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
