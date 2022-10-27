import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

import List from "./components/List/List";
import DataApp from "./components/DataApp/DataApp";

import "./App.css";

function App() {
  const [texts, setTexts] = useState();
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [clickOpenList, setClickOpenList] = useState("");

  const changeIndex = (items) => {
    loadMore((prevIndex) => prevIndex + items);
  };

  const loadMore = () => {
    fetch("https://baconipsum.com/api/?type=meat-and-filler")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setTexts(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  };

  useEffect(() => {
    loadMore();
  }, []);

  if (error) {
    return <div> Error</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className="App">
        <Routes>
          <Route
            path="/nev-project-job/"
            element={
              <DataApp
                texts={texts}
                setClickOpenList={setClickOpenList}
                changeIndex={changeIndex}
              />
            }
          ></Route>
          <Route
            path="/nev-project-job/List"
            element={<List clickOpenList={clickOpenList} />}
          ></Route>
        </Routes>
      </div>
    );
  }
}

export default App;
