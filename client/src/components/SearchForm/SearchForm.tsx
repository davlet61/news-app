import { useEffect, useState } from 'react';
import { v4 } from 'uuid';
import {
  HandleChangeFn,
  HandleSubmitFn,
  AddNewsFn,
  News,
} from '../../Types/Types';

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
      const fetchedNews: News[] = await data.json();
      addNews(fetchedNews[0]);
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
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="text"
          value={keyword}
          onChange={handleChange}
          placeholder="Search..."
          list="recent"
        />
        <datalist id="recent">
          {recentSearch.map(item => (
            <option key={v4()}>{item}</option>
          ))}
        </datalist>
        <button type="submit" className="btn">
          Search
        </button>
      </form>
      {/* {githubContext.users.length > 0 && (
        <button
          className='btn btn-light btn-block'
          onClick={githubContext.clearUsers}
        >
          Clear
        </button>
      )} */}
    </div>
  );
};

export default SearchForm;
