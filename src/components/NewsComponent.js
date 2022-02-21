import React from 'react'
import NewsCardComponent from './NewsCardComponent.js';

const NewsComponent = ({newsItems}) => {
  return (
    <div className='news-container'>

        {newsItems.map((newsItem) => (
            <NewsCardComponent news={newsItem} />
        ))};
        
    </div>
  )
}

export default NewsComponent