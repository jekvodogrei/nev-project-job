import { Link } from "react-router-dom";
import { Buttons } from "../Buttons/Buttons";

import { LiData } from "./DataApp.styled";

const linkStyle = { textDecoration: "none", color: "black" };

const DataApp = ({
  items,
  setItems,
  clickOpenList,
  setClickOpenList,
  changeIndex,
}) => {
  return (
    <div>
      <nav>
        <ul>
          {items.map((item) => {
            return (
              <LiData
                key={item}
                onClick={(e) => {
                  setClickOpenList(clickOpenList + item);
                }}
              >
                <Link to="List" item={item} style={linkStyle}>
                  {item.slice(0, item.indexOf("."))}...
                </Link>
              </LiData>
            );
          })}
          {/* <p>{clickOpen}</p> */}
        </ul>
      </nav>

      <Buttons changeIndex={changeIndex} />
    </div>
  );
};

export default DataApp;
