import React from 'react';
import { LoadingOutlined } from '@ant-design/icons';
import './style.less';

const Loader = () => {
  // for api calls
  return (
    <div className="loader">
      <LoadingOutlined />
      <h2>Loading</h2>
    </div>
  );
};

export default Loader;
