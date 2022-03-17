import { useState } from 'react';
import { News, AddNewsFn, initialNews } from '../../Types/Types';
import Articles from '../Articles/Articles';
import SearchForm from '../SearchForm/SearchForm';

const NewsList = () => {
  let [news, setNews] = useState<News>(initialNews);

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
