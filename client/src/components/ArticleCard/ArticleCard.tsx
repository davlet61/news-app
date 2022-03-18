import { Article, HandleSubmitFn } from '../../Types/Types';
import './ArticleCard.css';

const ArticleCard = ({ article }: { article: Article }) => {
  const handlePlay = (e: any) => {
    const msg = new SpeechSynthesisUtterance(article.description);
    window.speechSynthesis.speak(msg);
  };

  const handlePause = (e: any) => {
    window.speechSynthesis.cancel();
  };

  const handleNavigate: HandleSubmitFn = e => {
    window.location.href = article.url;
  };
  const published = article.publishedAt.substring(0, 10);

  return (
    <article className="article">
      <figure className="card">
        <img
          className="card__image"
          src={article.urlToImage}
          alt={article.source.name}
          onClick={handleNavigate}
        />
        <figcaption className="card__caption">
          <h3>{article.title}</h3>
          <p>{article.description}</p>
          <div className="info">
            <p className="info__source">{article.source.name}</p>
            <p className="info__author">{article.author}</p>
            <p className="info__published">{published}</p>
          </div>
        </figcaption>
        <div className="btns">
          <button className="card__btn" onClick={handlePlay}>
            <i className="fa-solid fa-play" />
            Audio
          </button>
          <button className="card__btn" onClick={handlePause}>
            <i className="fa-solid fa-stop" />
            Stop
          </button>
        </div>
      </figure>
    </article>
  );
};
export default ArticleCard;
