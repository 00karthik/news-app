import React, { useContext } from 'react';
import { CaretLeftOutlined } from '@ant-design/icons';
import { Button, Menu, Layout, Input } from 'antd';
import './style.less';
import Topics from '../../constants/topics';
import { useHistory } from 'react-router-dom';
import { store } from '../../store';
import { TOGGLE_SIDEBAR } from '../../constants/actions';
import Weather from '../weather';
export const Sidebar = () => {
  const { Sider } = Layout;
  const { Search } = Input;
  const history = useHistory();

  const globalState = useContext(store);
  const { dispatch } = globalState;

  return (
    <Sider
      theme="light"
      className="sidebar"
      placement="left"
      width={320}
      onClose={() => {
        dispatch({
          type: TOGGLE_SIDEBAR,
          data: false,
        });
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
          dispatch({
            type: TOGGLE_SIDEBAR,
            data: false,
          });
        }}
      />
      <div className="search-wrapper">
        <div className="search">
          <Search
            size="large"
            placeholder="Search news"
            onSearch={(value) => history.push(`/${value}`)}
            onBlur={(e) => history.push(`/${e.target.value}`)}
          />
        </div>
      </div>
      <div className="sidebar-nav">
        <header className="major">
          <h2>Topics</h2>
        </header>
        <Menu
          theme="light"
          mode="inline"
          className="topics"
          onClick={(item) => {
            history.push(`/${item.key}`);
          }}
        >
          {Topics.map((topic) => (
            <Menu.Item key={topic}>{topic}</Menu.Item>
          ))}
        </Menu>
      </div>
      <div className="weather-wrapper">
        <Weather />
      </div>
    </Sider>
  );
};
