import React, { useState } from 'react';
import './style.less';
import { Button, Dropdown, Menu } from 'antd';
import { MenuOutlined, CaretDownOutlined } from '@ant-design/icons';
import Languages from '../../constants/languages';

const Header = ({ setShowSidebar, showSidebar }) => {
  // find default Language from browser
  const [defaultLang, setDefaultLang] = useState(
    navigator.language || navigator.userLanguage
      ? (navigator.language || navigator.userLanguage).split('-')[0]
      : 'en'
  );
  const menu = (
    <Menu>
      {Languages.map((el) => (
        <Menu.Item
          key={el.value}
          onClick={(val) => {
            setDefaultLang(val.key);
          }}
        >
          <span>{el.label}</span>
        </Menu.Item>
      ))}
    </Menu>
  );
  return (
    <header id="header">
      {!showSidebar && (
        <Button
          className="drawer-handle"
          icon={<MenuOutlined />}
          onClick={() => {
            setShowSidebar(true);
          }}
        />
      )}

      <a href="index.html" className="logo">
        <strong>News</strong> by Karthik
      </a>
      <Dropdown overlay={menu} placement="bottomRight" trigger="click">
        <Button className="lang-dropdown" type="primary">
          {defaultLang}
          <CaretDownOutlined />
        </Button>
      </Dropdown>
    </header>
  );
};

export default Header;
