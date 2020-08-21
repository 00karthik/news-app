import React from 'react';
import Moment from 'moment';
import { Card, Col, Row } from 'antd';
import './style.less';

const NewsCard = ({ article }) => {
  // card to display the list of news
  const { Meta } = Card;
  return (
    <Col xs={24} sm={24} md={12} lg={8} xl={8} className="news-card">
      <Card
        cover={
          <img
            alt="example"
            src={
              article.image || // fallback image if image is missing
              'http://meltandmould.co.in/wp-content/uploads/2018/05/newspaper-example-of-random-text.jpg'
            }
          />
        }
        hoverable
        onClick={() => window.open(article.url, '_blank')}
      >
        <Meta title={article.title} description={article.description} />
        <Row justify="space-between">
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
        </Row>
      </Card>
    </Col>
  );
};

export default NewsCard;
