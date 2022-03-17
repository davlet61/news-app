import { v4 } from 'uuid';
import { News } from '../../Types/Types';
import ArticleCard from '../ArticleCard/ArticleCard';

const Articles = ({ news }: { news: News }) => {
  return (
    <section>
      {news.articles.map(e => (
        <ArticleCard key={v4()} article={e} />
      ))}
    </section>
  );
};
export default Articles;
