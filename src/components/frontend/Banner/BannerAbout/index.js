import React from 'react'

const BannerAbout = () => {
    return (
        <>
            <div className="banner-wrapper has_background">
                <img src="FE/assets/images/banner-for-all2.jpg" className="img-responsive attachment-1920x447 size-1920x447" alt="img" />
                <div className="banner-wrapper-inner">
                    <h1 className="page-title">About</h1>
                    <div role="navigation" aria-label="Breadcrumbs" className="breadcrumb-trail breadcrumbs">
                        <ul className="trail-items breadcrumb">
                            <li className="trail-item trail-begin"><a href="index-2.html"><span>Home</span></a></li>
                            <li className="trail-item trail-end active"><span>About</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        </>
    )
}

export default BannerAbout
