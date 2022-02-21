import React from 'react'

const NewsCardComponent = ({news}) => {

  const date = Date(news.publishedAt).toString().split(" ");
  const hour = parseInt(date[4].substring(0,2));
  const time = hour > 12 ? true : false;


  return (
    <div className='news-card'>

            <div className='news-img'>
                <img alt={news.title} src={news.urlToImage ? news.urlToImage : "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1200px-No_image_available.svg.png"} />
            </div>
            
            <div className='news-content'>
                <span className='news-title'>{news.title}</span>
                <span className='news-author'>By {news.author? news.author : "unknown"} | {date[0]} , {date[2]} {date[1]} {date[3]} at {time ? `${hour-12}:${date[4].substring(3,5)} pm` : `${hour}:${date[4].substring(3,5)} am`}</span>
                <span className='news-description'>{news.description}</span>
                <span className='news-url'><a href={news.url}>Read More</a></span>
            </div>

        </div>

  )
}

export default NewsCardComponent