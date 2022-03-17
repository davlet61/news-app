import { useState } from 'react';
import { News, AddNewsFn } from '../../Types/Types';
import Articles from '../Article/Articles';
import SearchForm from '../SearchForm/SearchForm';

const NewsList = () => {
  let [news, setNews] = useState<News>({
    status: 'ok',
    totalResults: 0,
    articles: [],
  });

  const addNews: AddNewsFn = data => {
    setNews(data);
  };

  return (
    <>
      <SearchForm addNews={addNews} />
      <Articles news={news} />
    </>
  );
};
export default NewsList;
