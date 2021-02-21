import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // This is where we fetch the data from newsapi.org
    // one we have it, via the fetch method.
    // we put the data into data using setData(newsarticles)
  }, []);
  return (
    <div className="App">
      <header className="App-header">{data}</header>
    </div>
  );
}

export default App;
