import { useEffect, useState } from 'react';
import { v4 } from 'uuid';
import { News, initialNews } from '../../Types/Types';
import ArticleCard from '../ArticleCard/ArticleCard';
import './LatestNews.css';

const LatestNews = () => {
  const [latest, setLatest] = useState<News>(initialNews);

  const fetchNews = async () => {
    try {
      const data = await fetch('http://localhost:3001/api/news?search=');
      const fetchedNews: News[] = await data.json();
      setLatest(fetchedNews[0]);
    } catch (error: any) {
      return error.message;
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  return (
    <section className="section">
      {latest.articles.map(e => (
        <ArticleCard key={v4()} article={e} />
      ))}
    </section>
  );
};
export default LatestNews;
