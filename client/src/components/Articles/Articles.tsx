import { v4 } from 'uuid';
import { News } from '../../Types/Types';
import ArticleCard from '../ArticleCard/ArticleCard';
import './Articles.css';

const Articles = ({ news }: { news: News }) => {
  return (
    <section className="section">
      {news.articles.map(e => (
        <ArticleCard key={v4()} article={e} />
      ))}
    </section>
  );
};
export default Articles;
