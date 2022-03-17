import { Article } from '../../Types/Types';
import ArticleContent from '../ArticleContent/ArticleContent';

const ArticleCard = ({ article }: { article: Article }) => {
  return (
    <article>
      <figure>
        <img src={article.urlToImage} alt={article.source.name} />
        <figcaption>{article.title}</figcaption>
      </figure>
      <ArticleContent content={article.content} />
    </article>
  );
};
export default ArticleCard;
