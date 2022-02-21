import './App.css';
import axios from 'axios'
import React, { useState, useEffect } from 'react';
import HeaderComponent from './components/HeaderComponent.js';
import NewsComponent from './components/NewsComponent.js';
import SearchNewsComponent from './components/SearchNewsComponent.js';
import FooterComponent from './components/FooterComponent.js';




const apiKey = process.env.REACT_APP_API_KEY;

function App() {

  const [newsArray,setNewsArray] = useState([]);
  const [newsResults,setNewsResults] = useState();
  const [category,setCategory] = useState('General');
  const [searchQuery,setSearchQuery] = useState('');
  const [loadMore,setLoadMore] = useState(5);


  const setNewsCategory = (text) => {
    setCategory(text)
  }


  const newsApiURL = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${apiKey}&category=${category}&pageSize=${loadMore}`
  const newsApiURLWithSearchQuery = `https://newsapi.org/v2/everything?q=${searchQuery}&apiKey=${apiKey}&pageSize=${loadMore}`
  
  const searchNews = (searchNewsQuery) => {
    if(searchNewsQuery==='') {
      setSearchQuery('');
    } else {
      setSearchQuery(searchNewsQuery)
    }
  }


  useEffect(() => {
    newsApi()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[newsResults,category,searchQuery,loadMore]);
  

  const newsApi = async() => {
    try {

      if(searchQuery==='') {
        const news = await axios.get(newsApiURL);
        setNewsArray(news.data.articles);
        setNewsResults(news.data.totalResults);
      } else {
        const news = await axios.get(newsApiURLWithSearchQuery);
        setNewsArray(news.data.articles);
        setNewsResults(news.data.totalResults);
      }
    
    } catch(e) {
      console.log(e.message);
    }
  }



  return (
    <div className="App">
      <HeaderComponent setNewsCategory = {setNewsCategory} category = {category}/>
      <SearchNewsComponent searchFunction = {searchNews} />
      <NewsComponent newsItems={newsArray} />
      
      {
        loadMore<=newsResults && (
          <>
            <hr className='hr-divider' />
            <div className='blend-more-news-container'>
            <button onClick={() => setLoadMore(loadMore+5)} className='button-blend-more-news'> Load More </button>
            </div>
            </>
        )
      }

      <FooterComponent />

    </div>
  )
}

export default App;
