import React from 'react';
import Moment from 'moment';
import './style.less';
import { Button, Row, Col, Divider } from 'antd';

const MainPost = () => {
  const data = {
    title: 'This Tiny Router Could be the Next Big Thing',
    desc:
      'It seems like only yesterday that the Linksys WRT54G and the various open source firmware replacements for it were the pinnacle of home router hacking.',
    link:
      'https://hackaday.com/2019/02/01/this-tiny-router-could-be-the-next-big-thing/',
    website: 'https://hackaday.com',
    source: 'Hackaday',
    date: 'Fri, 01 Feb 2019 09:00:00 GMT',
    image:
      'https://lh5.googleusercontent.com/proxy/IBqrCuhBM7bQOO6kXY_pnkM3D3OEta9U3v4O_ieACE_Xq9hQTB7SvHEgmpzdyxK2uARoQBJijHdOE3HWdmckMROCd4itXCVh9-rXpgdQn2hhmw=-c',
  };
  return (
    <Row id="banner">
      <Col className="content" xs={24} sm={24} md={24} lg={12} xl={12}>
        <header>
          <h1>{data.title}</h1>
        </header>
        <p>{data.desc}</p>
        <a
          className="website"
          href={data.website}
          target="_blank"
          rel="noopener noreferrer"
        >
          {data.website}
        </a>
        <p className="date">{Moment(data.date).format('DD/MM/YYYY')}</p>
        <Button type="default" size="large" className="read-more">
          Read More
        </Button>
      </Col>
      <Col className="image object" xs={24} sm={24} md={24} lg={12} xl={12}>
        <img src={data.image} alt="News" />
      </Col>
      <Divider />
    </Row>
  );
};
export default MainPost;
