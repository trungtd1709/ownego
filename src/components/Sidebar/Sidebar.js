import React, { useState } from "react";
import "./style.css";
import { stores } from "../../sample-data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const Sidebar = (props) => {
  const { onChangeStore } = props;
  const [isVisible, setIsVisible] = useState(false);

  const toggleSidebar = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className={`sidebar ${isVisible ? "show" : "hide"}`}>
      <div className="header">
        {isVisible ? (
          <span style={{ color: "white", fontSize: "20px", fontWeight: "600" }}>
            Milk tea store
          </span>
        ) : null}
        <div onClick={toggleSidebar}>
          <FontAwesomeIcon color="white" icon={isVisible ? faTimes : faBars} />
        </div>
      </div>
      {isVisible ? (
        <ul>
          {stores.map((store, key) => (
            <li
              key={key}
              onClick={() => {
                onChangeStore(stores[key]);
              }}
            >
              <div
                style={{
                  height: "25px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white",
                  fontSize: "18px",
                  cursor: "pointer"
                }}
              >
                {store.name}
              </div>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
};

export default Sidebar;
