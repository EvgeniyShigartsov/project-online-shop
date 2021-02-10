import React from 'react'
import PropTypes from 'prop-types'
import Pages from './Pages.jsx'
import Banner from './Banner.jsx'
import Modal from './Modal.jsx'

export const MainPage = () => {
    const bannerURL = 'https://e7.pngegg.com/pngimages/638/645/png-clipart-logo-banner-brand-product-design-mechanics-tool-trailer-text-logo.png'
    return (
        <div>
            <Banner bannerURL={bannerURL} />
            <Modal />
            <Pages />
        </div>
    )
}
export default MainPage
MainPage.propTypes = {
    carsArr: PropTypes.array,
}
