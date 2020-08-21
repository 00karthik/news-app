import React from 'react';
import './style.less';
import AppLayout from '../layout';
import MainPost from '../main-post';
import UseWeather from '../../hooks/weather';
import UseNews from '../../hooks/news';
import Loader from '../loader';
import { FrownOutlined } from '@ant-design/icons';
import { Row } from 'antd';
import NewsCard from '../card';

function App() {
  const weather = UseWeather();

  // const news = UseNews();
  const news = {};

  return (
    <AppLayout>
      {news.status === 'loading' ? <Loader /> : null}
      {/* show first article */}
      {news.status !== 'loading' && news.data && news.data.articles.length ? (
        <div>
          <MainPost article={news.data.articles[0]} />
        </div>
      ) : null}
      {/* if no articles are present */}
      {news.status !== 'loading' && news.data && !news.data.articles.length ? (
        <div className="empty-article">
          <FrownOutlined />
          <h2>No articles to show</h2>
        </div>
      ) : null}
      {news.status !== 'loading' &&
      news.data &&
      news.data.articles.length > 1 ? (
        <Row>
          {news.data.articles.map((el, index) => {
            if (index) {
              //skip first article since its shown above
              return <NewsCard key={index} article={el} />;
            }
            return null;
          })}
        </Row>
      ) : null}
    </AppLayout>
  );
}

export default App;
