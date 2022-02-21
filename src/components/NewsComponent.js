import React from 'react'

const NewsComponent = () => {
  return (
    <div className='news-container'>

        <div className='news-card'>

            <div className='news-img'>
                <img alt="News" src="https://images.indianexpress.com/2013/01/Bajrang-dal.jpg" />
            </div>
            
            <div className='news-content'>
                <span className='news-title'>Hrithik Roshan's rumoured girlfriend Saba Azad joins actor for family lunch, pic surfaces</span>
                <span className='news-author'>By Ishant Chauhan | DD/MM/YYYY</span>
                <span className='news-description'>Andhra Pradesh Industries and IT Minister Mekapati Goutham Reddy passed away aged 50 on Monday after suffering a heart attack. Reddy was shifted to Apollo Hospitals in Hyderabad, where the doctors declared him brought dead, the hospital said in a release. "CPR was done for more than 90 minutes. Despite our best efforts, he could not be revived," it added.</span>
                <span className='news-url'><a href="#">Read More</a></span>
            </div>

        </div>

    </div>
  )
}

export default NewsComponent