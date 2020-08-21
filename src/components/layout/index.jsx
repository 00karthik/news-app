import React, { useContext } from 'react';
import { Layout } from 'antd';

import './style.less';
import { Sidebar } from '../sidebar';
import Header from '../header';
import { store } from '../../store';

const { Content } = Layout;

const AppLayout = ({ children }) => {
  // using context api to prevent props drilling
  const globalState = useContext(store);
  const { state } = globalState;

  return (
    <Layout>
      {/*  sidebar */}
      {state.showSidebar && <Sidebar />}

      <Layout className="site-layout">
        {/* main content */}
        <Header />
        <Content style={{ margin: '24px 0', overflow: 'hidden' }}>
          <div className="site-layout-background" style={{ padding: '24 0' }}>
            {/* children components are shown directly */}
            {children}
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default AppLayout;
