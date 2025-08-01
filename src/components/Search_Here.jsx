import { useState } from 'react';
import { CiSearch } from 'react-icons/ci';
import { FaSearch } from 'react-icons/fa';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const [searchedText, setSearchedText] = useState('');

  const handleSearch = () => {
    if (query.trim() === '') return;

    setSearchedText(query);
    setQuery(''); 
  };

  return (
    <div className="w-full max-w-md  mt-[120px]">
      <h2 className="text-P text-lg font-semibold mb-1">Search Here</h2>
      <div className="h-1 w-full bg-gray-200 mb-3">
        <div className="h-1 w-16 bg-P"></div>
      </div>

      <div className="flex shadow-md rounded-md overflow-hidden px-[20px] py-[12px]">
        <input
          type="text"
          placeholder="Search...."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full px-4 py-2 outline-none text-gray-700 placeholder-gray-400"
        />
        <button
          onClick={handleSearch}
          className="px-4 text-P hover:bg-opacity-90 transition"
        >
          <FaSearch size={20} />
        </button>
      </div>

      {searchedText && (
        <div className="text-sm text-gray-600 italic text-center">
          Searching for: <span className="font-medium text-P">{searchedText}</span>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
