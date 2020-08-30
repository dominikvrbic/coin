import React from "react";

interface Props {
  data: any;
}

export const Currency = (props: Props) => {
  const { data } = props;
  console.log(data);
  return <div></div>;
};
