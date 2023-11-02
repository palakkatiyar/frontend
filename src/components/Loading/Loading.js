import React, { useEffect, useState } from "react";
import ReactLoading from "react-loading";

function Loader() {
  const [data, setData] = useState([]);
  const [done, setDone] = useState(undefined);

  useEffect(() => {
    setTimeout(() => {
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => response.json())
        .then((json) => {
          console.log(json);
          setData(json);
          setDone(true);
        });
    }, 2000);
  }, []);

  return (
    <div
    style={{
      width: "100vw",
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      
    }}>
      {!done ? (
        <ReactLoading
          type={"bars"}
          color={"black"}
          height={100}
          width={100}
          
        />
      ) : (
        <ul>
          {data.map((post) => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Loader;