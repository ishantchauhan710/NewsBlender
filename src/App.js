import './App.css';
import axios from 'axios'
import React, { useState, useEffect } from 'react';
import HeaderComponent from './components/HeaderComponent.js';
import NewsComponent from './components/NewsComponent.js';
import SearchNewsComponent from './components/SearchNewsComponent.js';



const apiKey = process.env.REACT_APP_API_KEY;

function App() {

  const [newsArray,setNewsArray] = useState([]);
  const [newsResults,setNewsResults] = useState();
  const [category,setCategory] = useState('General');

  const [searchQuery,setSearchQuery] = useState('');


  const setNewsCategory = (text) => {
    setCategory(text)
  }



  const newsApiURL = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${apiKey}&category=${category}`
  const newsApiURLWithSearchQuery = `https://newsapi.org/v2/everything?q=${searchQuery}&apiKey=${apiKey}`
  
  const searchNews = (searchNewsQuery) => {
    console.log(searchNewsQuery);
    if(searchNewsQuery==='') {
      setSearchQuery('');
    } else {
      setSearchQuery(searchNewsQuery)
    }
  }


  useEffect(() => {
    newsApi()
  },[newsResults,category,searchQuery]);
  

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
    
      //console.log(news.data);
    } catch(e) {
      console.log(e.message);
    }
  }



  return (
    <div className="App">
      <HeaderComponent setNewsCategory = {setNewsCategory} category = {category}/>
      <SearchNewsComponent searchFunction = {searchNews} />
      <NewsComponent newsItems={newsArray} />
    </div>
  );
}

export default App;
