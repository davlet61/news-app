import { createContext, useState, useEffect, ReactNode } from 'react';
import { News, Context } from '../Types/Types';

const NewsContext = createContext<Context>({} as Context);

export const NewsProvider = ({ children }: { children: ReactNode }) => {
  // const [isLoading, setIsLoading] = useState(true)
  const [keyword, setKeyword] = useState<string>('');
  const [news, setNews] = useState<News>({
    status: 'ok',
    totalResults: 0,
    articles: [],
  });

  useEffect(() => {
    fetchFeedback(keyword);
  }, [keyword]);

  // Fetch news
  const fetchFeedback = async (keyword: string) => {
    const response = await fetch(
      `http://localhost:3001/api/news?search=${keyword}`,
    );
    const data = await response.json();

    setNews(data);
  };

  return (
    <NewsContext.Provider
      value={{
        keyword,
        news,
        setKeyword,
        setNews,
      }}
    >
      {children}
    </NewsContext.Provider>
  );
};

export default NewsContext;
