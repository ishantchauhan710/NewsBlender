import React from 'react'

const NewsCardComponent = ({news}) => {
  return (
    <div className='news-card'>

            <div className='news-img'>
                <img alt={news.title} src={news.urlToImage ? news.urlToImage : "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1200px-No_image_available.svg.png"} />
            </div>
            
            <div className='news-content'>
                <span className='news-title'>{news.title}</span>
                <span className='news-author'>By {news.author? news.author : "unknown"} | {news.publishedAt}</span>
                <span className='news-description'>{news.description}</span>
                <span className='news-url'><a href={news.url}>Read More</a></span>
            </div>

        </div>

  )
}

export default NewsCardComponent