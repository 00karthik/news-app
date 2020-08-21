import React from 'react';
import Moment from 'moment';
import './style.less';
import { Button, Row, Col, Divider } from 'antd';

const MainPost = ({ article }) => {
  // main article
  return (
    <Row id="banner">
      <Col className="content" xs={24} sm={24} md={24} lg={12} xl={12}>
        <header>
          <h1>{article.title}</h1>
        </header>
        <p>{article.description}</p>
        <a
          className="website"
          href={article.source.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          {article.source.name}
        </a>
        <p className="date">
          {Moment(article.publishedAt).format('DD/MM/YYYY')}
        </p>
        <Button
          type="default"
          size="large"
          className="read-more"
          onClick={() => window.open(article.url, '_blank')}
        >
          Read More
        </Button>
      </Col>
      <Col className="image" xs={24} sm={24} md={24} lg={12} xl={12}>
        <img
          src={
            article.image ||
            'http://meltandmould.co.in/wp-content/uploads/2018/05/newspaper-example-of-random-text.jpg'
          }
          alt="News"
          className="img"
        />
      </Col>
      <Divider />
    </Row>
  );
};
export default MainPost;
