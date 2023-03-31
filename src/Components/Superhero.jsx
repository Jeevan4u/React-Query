import React, { useState, useEffect } from "react";
import API from "../Api/API";
const Superhero = () => {
  const [isLoading, setIsLoading] = useState(false);

  const [data, setData] = useState([]);

  const fetchSuperHero = async () => {
    try {
      setIsLoading(true);
      const res = await API.get("/SuperHeros");
      setIsLoading(false);
      setData(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchSuperHero();
  }, []);
  console.log(data);

  return (
    <div>
      {isLoading ? (
        "Loading...."
      ) : (
        <div>
          {data?.map((items) => (
            <h1 key={items.id}>{items.name}</h1>
          ))}
        </div>
      )}
    </div>
  );
};

export default Superhero;
