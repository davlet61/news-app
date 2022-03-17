import NewsList from '../NewsList/NewsList';
import image from '../../assets/news.jpg';

const Search = () => {
  return (
    <section
      style={{
        background: `url(${image}) center center/cover no-repeat`,
        opacity: 0.9,
      }}
    >
      <NewsList />
    </section>
  );
};
export default Search;
