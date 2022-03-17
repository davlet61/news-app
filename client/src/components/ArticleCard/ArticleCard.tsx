import { Article } from '../../Types/Types';
import './ArticleCard.css';

const ArticleCard = ({ article }: { article: Article }) => {
  return (
    <article className="article">
      <figure className="card">
        <img
          className="card__image"
          src={article.urlToImage}
          alt={article.source.name}
        />
        <figcaption className="card__caption">
          <h3>{article.title}</h3>
          <p>{article.description}</p>
        </figcaption>
      </figure>
    </article>
  );
};
export default ArticleCard;
