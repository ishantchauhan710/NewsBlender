import React from 'react'
import NewsCardComponent from './NewsCardComponent.js';

const NewsComponent = ({newsItems}) => {
  return (
    <div className='news-container'>

        {newsItems.map((newsItem) => (
            <NewsCardComponent key={newsItem.title} news={newsItem} />
        ))};
        
    </div>
  )
}

export default NewsComponent