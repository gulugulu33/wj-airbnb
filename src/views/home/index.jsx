import React, { memo, useEffect, useState } from "react";
import WjRequest from "../../services";

const Home = memo(() => {
  const [highScore, setHighScore] = useState({});

  useEffect(() => {
    WjRequest.get({ url: "/home/highscore" }).then((res) => {
      setHighScore(res);
      console.log(res);
    });
  }, []);

  return (
    <div>
      <h2>{highScore.title}</h2>
      <ul>
        {highScore.list?.map((item) => {
          return <li key={item.id}>{item.name}</li>;
        })}
      </ul>
    </div>
  );
});

export default Home;
