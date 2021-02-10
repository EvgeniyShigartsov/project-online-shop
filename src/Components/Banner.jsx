import React from 'react'

export const Banner = (props) => {
    return (
        <div className="banner-wrapper">
            <img className="banner" src={props.bannerURL} alt="banner" />
        </div>
    )
}
export default Banner
