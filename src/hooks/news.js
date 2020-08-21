import { useState, useEffect, useContext } from 'react';
import Axios from 'axios';
import { IpApi, NewsApi } from '../config/apis';
import { useParams } from 'react-router-dom';
import { store } from '../store';
const UseNews = () => {
  // custom hook to get news data
  const [news, setNews] = useState();
  const [status, setStatus] = useState('');
  const [cc, setCc] = useState('');
  const [query, setQuery] = useState();

  const params = useParams();

  const globalState = useContext(store);
  const { state } = globalState;
  const { lang } = state;
  // search keyword is passed via url
  useEffect(() => {
    setQuery(params.id);
  }, [params.id]);

  useEffect(() => {
    if (query) {
      // call news api directly if country code is present
      if (cc) {
        setStatus('loading');
        Axios.get(NewsApi(query, lang, cc))
          .then((response) => {
            setNews(response.data);
            setStatus('success');
          })
          .catch(() => {
            setStatus('error');
          });
      } else {
        //fetch country code
        setStatus('loading');
        Axios.get(IpApi)
          .then((response) => {
            setCc(response.data.YourFuckingCountryCode);
          })
          .catch(() => {
            // if error continue with default country code
            Axios.get(NewsApi(query, lang))
              .then((response) => {
                setNews(response.data);
                setStatus('success');
              })
              .catch(() => {
                setStatus('error');
              });
          });
      }
    }
  }, [query, cc, lang]);
  // return news details
  return { data: news, status };
};

export default UseNews;
