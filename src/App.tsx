import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const response = await fetch(
      `https://newsapi.org/v2/everything?q=bitcoin&apiKey=${process.env.REACT_APP_API_KEY}`
    );
    const data = await response.json();
    console.log("data" + JSON.stringify(data));
    setData(data.articles);
  };
  return (
    <div className="App">
      {data ? (
        data.map((article: any) => (
          <div style={{ marginTop: "30px", fontSize: "16px" }}>
            {article.title}
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
