import axios from "axios";
import React, { useEffect, useState } from "react";
import "./styles.css";

function AxioxApp() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/1")
      .then((result) => {
        console.log(result.data);
        setPosts([result.data]);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      {posts.map((data) => {
        return (
          <div key={data.id}>
            <h4>{data.title}</h4>
            <p>{data.body}</p>
          </div>
        );
      })}
    </div>
  );
}

export default AxioxApp;
