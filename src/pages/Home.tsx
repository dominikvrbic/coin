import React from "react";
import { Table } from "../components/Table";
import { css } from "emotion";



interface Props {
}
const home = css({
  display: 'flex',
  justifyContent: 'center',
})

export const Home = (props: Props) => {

  return (
    <div className={home}>
      <Table />
    </div>)

};
