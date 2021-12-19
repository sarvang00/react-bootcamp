import React from "react";
import PortfolioItem from "./PortfolioItem";

const PortfolioSection = () => {
    return (
        // <!-- Portfolio Section-->
        <section className="page-section portfolio" id="portfolio">
            <div className="container">
                {/* <!-- Portfolio Section Heading--> */}
                <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Portfolio</h2>
                {/* <!-- Icon Divider--> */}
                <div className="divider-custom">
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                    <div className="divider-custom-line"></div>
                </div>
                {/* <!-- Portfolio Grid Items--> */}
                <div className="row justify-content-center">
                    {/* <!-- Portfolio Item 1--> */}
                    <PortfolioItem img_src="assets/img/portfolio/cabin.png"></PortfolioItem>
                    {/* <!-- Portfolio Item 2--> */}
                    <PortfolioItem img_src="assets/img/portfolio/cake.png"></PortfolioItem>
                    {/* <!-- Portfolio Item 3--> */}
                    <PortfolioItem img_src="assets/img/portfolio/circus.png"></PortfolioItem>
                    {/* <!-- Portfolio Item 4--> */}
                    <PortfolioItem img_src="assets/img/portfolio/game.png"></PortfolioItem>
                    {/* <!-- Portfolio Item 5--> */}
                    <PortfolioItem img_src="assets/img/portfolio/safe.png"></PortfolioItem>
                    {/* <!-- Portfolio Item 6--> */}
                    <PortfolioItem img_src="assets/img/portfolio/submarine.png"></PortfolioItem>
                </div>
            </div>
        </section>
    )
}

export default PortfolioSection