import { Link } from "react-router-dom";
import { Buttons } from "../Buttons/Buttons";

import { LiData } from "./DataApp.styled";

const linkStyle = { textDecoration: "none", color: "black" };

const DataApp = ({ texts, setClickOpenList, changeIndex }) => {
  return (
    <div>
      <nav>
        <ul>
          {texts.map((text) => {
            return (
              <LiData
                key={text}
                onClick={(e) => {
                  setClickOpenList(text);
                }}
              >
                <Link to="List" item={text} style={linkStyle}>
                  {text.slice(0, text.indexOf("."))}...
                </Link>
              </LiData>
            );
          })}
        </ul>
      </nav>

      <Buttons changeIndex={changeIndex} />
    </div>
  );
};

export default DataApp;
