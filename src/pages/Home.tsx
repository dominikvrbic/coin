import React from "react";
import { css } from "emotion";
import { Table } from "../components/Table";

interface Props {}

const home = css({
  display: "flex",
  justifyContent: "center",
  width: "90%",
});

const Home = (props: Props) => {
  return (
    <div className={home}>
      <Table />
    </div>
  );
};

export default Home;
