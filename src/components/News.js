import React from 'react'
import "./News.css"


const News = (props) => {
    return (
        <div className='News'>
            <a href={props.link}>
            <div className='flex m-10'>
                <div className='news-text-side'>
                    <h5 className='news-heading'>
                        {props.title}
                    </h5>
                    <p className='news_body py-2'>{props.body}
                    </p>
                    <p className='news-date py-2'>
                        {props.date}
                    </p>
                </div>
                <div className='news_image_side pl-5 rounded'>
                    <img className='h-70 rounded' src={props.imageSrc} alt="Loading..." />
                </div>
            </div>
            </a>
        </div>
        
        // <div className='News'>
        //     <div className='flex m-5'>
        //     <div className='news-text-side'>
        //         <h5 className='news-heading'>
        //             Egypt Today
        //         </h5>
        //         <p className='news_body py-2'>CAIRO – 16 August 2017: Kourtney Kardashian, American reality-show star and sister of the renowned model Kim Kardashian, graced her fans'
        //         </p>
        //         <p className='news-date py-2'>
        //             2024-01-19
        //         </p>
        //     </div>
        //     <div className='news_image_side pl-5 rounded'>
        //         <img className='h-70 rounded' src="https://images.mid-day.com/images/images/2024/jan/aalukondilafamtreeocv_d.png" alt="Loading..." />
        //     </div>
        // </div>
        // </div>
    )
}

export default News
