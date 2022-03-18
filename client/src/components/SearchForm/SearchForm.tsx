import { useEffect, useState } from 'react';
import { v4 } from 'uuid';
import { HandleChangeFn, HandleSubmitFn, AddNewsFn } from '../../Types/Types';
import './SearchForm.css';

const SearchForm = ({ addNews }: { addNews: AddNewsFn }) => {
  const RECENT_SEARCH = 'recent.search';
  const [keyword, setKeyword] = useState<string>('');
  const [recentSearch, setRecentSearch] = useState<string[]>([]);

  const handleChange: HandleChangeFn = e => {
    setKeyword(e.target.value);
  };

  useEffect(() => {
    localStorage.setItem(RECENT_SEARCH, JSON.stringify([...recentSearch]));
  }, [recentSearch]);

  const fetchNews = async (input: string) => {
    try {
      const data = await fetch(
        `http://localhost:3001/api/news?search=${input}`,
      );
      const fetchedNews = await data.json();

      addNews(fetchedNews);
    } catch (error: any) {
      return error.message;
    }
  };

  const handleSubmit: HandleSubmitFn = async e => {
    e.preventDefault();
    if (keyword !== '') {
      setRecentSearch(previousState => {
        const filteredSearch = previousState.filter(el => el !== keyword);
        return [keyword, ...filteredSearch].slice(0, 5);
      });
    }
    fetchNews(keyword);
    setKeyword('');
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        className="form__input"
        type="text"
        name="text"
        value={keyword}
        onChange={handleChange}
        placeholder="Search..."
        list="recent"
      />
      <datalist id="recent" className="form__datalist">
        {recentSearch.map(item => (
          <option key={v4()}>{item}</option>
        ))}
      </datalist>
      <button type="submit" className="form__btn">
        <i className="fa-solid fa-magnifying-glass" />
      </button>
    </form>
  );
};

export default SearchForm;
