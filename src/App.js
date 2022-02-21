import './App.css';
import axios from 'axios'
import React, { useState, useEffect } from 'react';
import HeaderComponent from './components/HeaderComponent.js';
import NewsComponent from './components/NewsComponent.js';


const apiKey = process.env.REACT_APP_API_KEY;

function App() {

  const [newsArray,setNewsArray] = useState([]);
  const [newsResults,setNewsResults] = useState();
  const [category,setCategory] = useState('general');

  const setNewsCategory = (text) => {
    setCategory(text)
  }


  const newsApiURL = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${apiKey}&category=${category}`
  

  const newsApi = async() => {
    try {
      const news = await axios.get(newsApiURL);
      setNewsArray(news.data.articles);
      setNewsResults(news.data.totalResults);
      console.log(news.data);
    } catch(e) {
      console.log(e.message);
    }
  }

  useEffect(() => {
    newsApi()
  },[newsResults,category]);


  return (
    <div className="App">
      <HeaderComponent setNewsCategory = {setNewsCategory}/>
      <NewsComponent newsItems={newsArray} />
    </div>
  );
}

export default App;
