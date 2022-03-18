import NewsList from '../NewsList/NewsList';
import image from '../../assets/news.jpg';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

const Search = () => {
  return (
    <>
      <Navbar />
      <section
        style={{
          background: `url(${image}) center center/cover no-repeat`,
          opacity: 0.9,
        }}
      >
        <NewsList />
      </section>
      <Footer />
    </>
  );
};
export default Search;
