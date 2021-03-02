import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [data, setData] = useState<any>(null);
  const [search, setSearch] = useState<string>("bitcoin");

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const response = await fetch(
      `https://newsapi.org/v2/everything?q=${search}&apiKey=${process.env.REACT_APP_API_KEY}`
    );
    const data = await response.json();
    console.log("data" + JSON.stringify(data));
    setData(data.articles);
  };
  return (
    <div className="App">
      <input
        type="text"
        onChange={(e) => setSearch(e.target.value)}
        value={search || ""}
      />
      <button onClick={() => fetchData()}>Search</button>
      {data ? (
        data.map((article: any) => (
          <div style={{ marginTop: "30px" }}>
            <h3>{article.title}</h3>
            {article.urlToImage && (
              <img
                src={article.urlToImage}
                alt="no image"
                className="article-img"
              />
            )}
          </div>
        ))
      ) : (
        <div> no data </div>
      )}
    </div>
  );
}

export default App;
