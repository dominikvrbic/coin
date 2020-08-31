import React from 'react';
import { Table } from '../components/Table';
import { css } from 'emotion';

interface Props { }
const home = css({
  display: 'flex',
  justifyContent: 'center',
  width: '90%',
});

const Home = (props: Props) => {
  return (
    <div className={home}>
      <Table />
    </div>
  );
};
export default Home;