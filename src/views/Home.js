import React from "react";
import { useSelector } from "react-redux";

const Home = () => {
  const data = useSelector((state) => state.cart);
  console.log(data);

  return (
    <div>
      <h2 className="mt-4 text-info text-center">Home</h2>
    </div>
  );
};

export default Home;
