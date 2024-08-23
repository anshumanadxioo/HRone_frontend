import React, { useEffect, useState, useCallback } from 'react';
import { FaMagnifyingGlass } from 'react-icons/fa6';

function Searchbar() {
  const [isSearch, setisSearch] = useState(false);
  const [searchValue, setsearchValue] = useState('');
  const [searchResult, setsearchResult] = useState([]);
  const [apiData, setapiData] = useState([]);

  // Debounce function to delay the search execution
  const debounce = (func, delay) => {
    let debounceTimer;
    return function(...args) {
      const context = this;
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(() => func.apply(context, args), delay);
    };
  };

  const handleSearch = (value) => {
    setsearchValue(value);
    setisSearch(true);
  };

  const debouncedSearch = useCallback(debounce(handleSearch, 1000), []);

  const api_url = "https://jsonplaceholder.typicode.com/users";

  const getapiData = async () => {
    try {
      const response = await fetch(api_url);
      const data = await response.json();
      setapiData(data);
    } catch (err) {
      console.log("error occurs while fetching..", err);
    }
  };

  useEffect(() => {
    if (searchValue) {
      const searchResult = apiData.filter((item) =>
        item.name.toLowerCase().startsWith(searchValue.toLowerCase())
      );
      setsearchResult(searchResult);
    } else {
      setsearchResult([]);
      setisSearch(false);
    }
  }, [searchValue, apiData]);

  useEffect(() => {
    getapiData();
  }, []);

  return (
    <div className='relative w-[50vw]'>
      <div className='flex items-center bg-white text-gray-900 px-4 py-2 w-full max-w-md shadow-lg rounded-lg'>
        <FaMagnifyingGlass className='text-gray-500 mt-[3px]' />
        <input
          type='text'
          placeholder='Search for actions, pages, requests, reports, people...'
          className='flex-grow px-2 py-1 text-gray-900 border-none rounded-lg focus:outline-none'
          onChange={(e) => debouncedSearch(e.target.value.toLowerCase())}
        />
      </div>

      {isSearch && (
        <div className='absolute top-[45px] bg-white text-black w-full max-w-md mt-2 rounded-lg shadow-lg z-10 py-4 px-4'>
          {searchResult.length > 0 ? (
            searchResult.map((item, index) => (
              <div
                key={index}
                className='px-4 py-2 font-semibold cursor-pointer hover:bg-lightgreen flex items-start'
                onClick={() => handleSearch(item.name)}
              >
                <img src='/req-raiser.jpg' alt='image' width='40px' height='40px' className='rounded-full' />
                <p className='mt-1 ml-5 font-bold text-xl text-gray-600 hover:text-green-800'>{item.name}</p>
              </div>
            ))
          ) : (
            <div>
                <img src='/nodata.jpg' alt='nodata' width="100px" height="100px"/>
                <p className='text-start text-gray-500'>No results found...</p>

            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Searchbar;

