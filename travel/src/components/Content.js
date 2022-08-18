import React from 'react'
import contentData from './Data'

const Content = () => {
    return (
        <div className='card-container'>
            {
                contentData.map((item) => {
                    return (
                        <div className="card" key={item.id}>
                            <img src={item.Image} alt="" className='card-img' />
                            <div class="card-feature">
                                <div class="location-content">
                                    <img src="/location.svg" className='location-logo' alt="" />
                                    <h1 className='location-title'>{item.location}</h1>
                                    <a href={item.googleMapsUrl}>
                                        <span className="google-map">View On Google Maps</span>
                                    </a>
                                </div>
                                <div className="card-description">
                                    <h1 className="title">{item.title}</h1>
                                    <span className="date">{item.startDate} / {item.endDate}</span>
                                    <p className="description">{item.description}</p>
                                </div>
                            </div>
                        </div>

                    )
                })
            }
            <footer>&#9400;CopyRights Aram Istamboulian</footer>
        </div>
    )
}

export default Content;