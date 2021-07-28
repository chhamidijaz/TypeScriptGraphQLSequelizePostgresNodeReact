import "./Home.css";
import GetUsers from "./GetUsers";
import { useState } from "react";
import { Link, useHistory } from "react-router-dom";

function Home() {
  const history = useHistory();
  return (
    <>
      <GetUsers />
      <Link to="/create">
        <button className="button">Create User</button>
      </Link>
    </>
  );
}

export default Home;
