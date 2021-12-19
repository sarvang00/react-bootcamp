import React from "react";

const PortfolioItem = ({img_src="assets/img/portfolio/submarine.png", img_alt="..."}) => (
    // Portfolio Item
    <div className="col-md-6 col-lg-4">
        <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal6">
            <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x"></i></div>
            </div>
            <img className="img-fluid" src={img_src} alt={img_alt} />
        </div>
    </div>
)

export default PortfolioItem