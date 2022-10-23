import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

import List from "./components/List/List";
import DataApp from "./components/DataApp/DataApp";

import "./App.css";

const LS_KEY = "reader_item_index";

function App() {
  const [clickOpenList, setClickOpenList] = useState("");
  const [items, setItems] = useState(() => {
    const savedState = localStorage.getItem(LS_KEY);
    return savedState ? Number(savedState) : 0;
  });
  useEffect(() => {
    document.title = clickOpenList;
  });

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  const changeIndex = (items) => {
    loadMore((prevIndex) => prevIndex + items);
  };

  const loadMore = () => {
    fetch("https://baconipsum.com/api/?type=meat-and-filler")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
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
            path="/"
            element={
              <DataApp
                items={items}
                setItems={setItems}
                clickOpenList={clickOpenList}
                setClickOpenList={setClickOpenList}
                changeIndex={changeIndex}
              />
            }
          ></Route>
          <Route
            path="/List"
            element={<List clickOpenList={clickOpenList} />}
          ></Route>
        </Routes>
      </div>
    );
  }
}

export default App;
