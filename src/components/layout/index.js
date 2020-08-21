import React, { useState } from 'react';
import { Layout, Button } from 'antd';
import { MenuOutlined } from '@ant-design/icons';

import './style.less';
import { Sidebar } from '../sidebar';

const { Content } = Layout;

const AppLayout = ({ children }) => {
  const [showSidebar, setShowSidebar] = useState(true);
  return (
    <Layout>
      {/* visible in mobile view only to open sidebar */}
      {!showSidebar && (
        <Button
          className="drawer-handle"
          icon={<MenuOutlined />}
          onClick={() => {
            setShowSidebar(true);
          }}
        />
      )}
      {/*  sidebar */}
      {showSidebar && (
        <Sidebar setShowSidebar={setShowSidebar} showSidebar={showSidebar} />
      )}

      <Layout className="site-layout">
        {/* main content */}
        <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
          <div
            className="site-layout-background"
            style={{ padding: 24, textAlign: 'center' }}
          >
            {/* children components are shown directly */}
            {children}
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default AppLayout;
