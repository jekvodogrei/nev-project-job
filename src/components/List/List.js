import React from "react";
import { Link } from "react-router-dom";

import { P, Button } from "./List.styled";

const List = function ({ clickOpenList }) {
  return (
    <div>
      <P>{clickOpenList}</P>

      <Link to="/nev-project-job/">
        <Button>Back</Button>
      </Link>
    </div>
  );
};

export default List;
