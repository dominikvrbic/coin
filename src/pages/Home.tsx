import React from "react";
import { Table } from "../components/Table";



interface Props {
  data: any
}

export const Home = (props: Props) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { data } = props;
  return <>
    <Table data={data} />
  </>
};
