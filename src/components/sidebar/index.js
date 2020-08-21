import React from 'react';
import { CaretLeftOutlined, NotificationOutlined } from '@ant-design/icons';
import { Button, Menu, Layout, Input } from 'antd';
import './style.less';
export const Sidebar = ({ setShowSidebar }) => {
  const { Sider } = Layout;
  const { Search } = Input;
  return (
    <Sider
      theme="light"
      className="sidebar"
      placement="left"
      width={320}
      onClose={() => {
        setShowSidebar(false);
      }}
      style={{
        overflow: 'auto',
        height: '100vh',
        position: 'fixed',
        left: 0,
      }}
    >
      {/* visible in mobile view only to collapse sidebar */}
      <Button
        className="close-sidebar"
        type="primary"
        icon={<CaretLeftOutlined />}
        onClick={() => {
          setShowSidebar(false);
        }}
      />
      <div className="search-wrapper">
        <div className="search">
          <Search
            size="large"
            placeholder="Search news"
            onSearch={(value) => console.log(value)}
          />
        </div>
      </div>
      <div className="sidebar-nav">
        <header className="major">
          <h2>Topics</h2>
        </header>
        <Menu theme="light" mode="inline">
          <Menu.Item icon={<NotificationOutlined />} onClick={() => {}}>
            Featured
          </Menu.Item>
          <Menu.Item icon={<NotificationOutlined />} onClick={() => {}}>
            Trending
          </Menu.Item>
          <Menu.Item icon={<NotificationOutlined />} onClick={() => {}}>
            People
          </Menu.Item>
          <Menu.Item icon={<NotificationOutlined />} onClick={() => {}}>
            Events
          </Menu.Item>
        </Menu>
      </div>
    </Sider>
  );
};
