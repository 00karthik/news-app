import React, { useContext } from 'react';
import './style.less';
import { Button, Dropdown, Menu } from 'antd';
import { MenuOutlined, CaretDownOutlined } from '@ant-design/icons';
import Languages from '../../constants/languages';
import { store } from '../../store';
import { CHANGE_LANG, TOGGLE_SIDEBAR } from '../../constants/actions';

const Header = () => {
  // get global store using context hook
  const globalState = useContext(store);
  const { state, dispatch } = globalState;
  const menu = (
    <Menu>
      {/* language array is parsed from gnews.io */}
      {Languages.map((el) => (
        <Menu.Item
          key={el.value}
          onClick={(val) => {
            dispatch({
              type: CHANGE_LANG,
              data: val.key,
            });
          }}
        >
          <span>{el.label}</span>
        </Menu.Item>
      ))}
    </Menu>
  );
  return (
    <header id="header">
      {/* button apppears only if sidebar is collapsed */}
      {!state.showSidebar && (
        <Button
          className="drawer-handle"
          icon={<MenuOutlined />}
          onClick={() => {
            dispatch({
              type: TOGGLE_SIDEBAR,
              data: true,
            });
          }}
        />
      )}

      <a href="index.html" className="logo">
        <strong>News</strong> by Karthik
      </a>
      <Dropdown overlay={menu} placement="bottomRight" trigger="click">
        <Button className="lang-dropdown" type="primary">
          {state.lang}
          <CaretDownOutlined />
        </Button>
      </Dropdown>
    </header>
  );
};

export default Header;
