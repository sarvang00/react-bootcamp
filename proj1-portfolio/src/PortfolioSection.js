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
                    <PortfolioItem img_src="assets/img/portfolio/cabin.png" target_modal_id="portfolioModal1" modal_tite="Cabin"></PortfolioItem>
                    {/* <!-- Portfolio Item 2--> */}
                    <PortfolioItem img_src="assets/img/portfolio/cake.png" target_modal_id="portfolioModal2" modal_tite="Cake"></PortfolioItem>
                    {/* <!-- Portfolio Item 3--> */}
                    <PortfolioItem img_src="assets/img/portfolio/circus.png" target_modal_id="portfolioModal3" modal_tite="Circus"></PortfolioItem>
                    {/* <!-- Portfolio Item 4--> */}
                    <PortfolioItem img_src="assets/img/portfolio/game.png" target_modal_id="portfolioModal4" modal_tite="Game"></PortfolioItem>
                    {/* <!-- Portfolio Item 5--> */}
                    <PortfolioItem img_src="assets/img/portfolio/safe.png" target_modal_id="portfolioModal5" modal_tite="Safe"></PortfolioItem>
                    {/* <!-- Portfolio Item 6--> */}
                    <PortfolioItem img_src="assets/img/portfolio/submarine.png" target_modal_id="portfolioModal6" modal_tite="Submarine"></PortfolioItem>
                </div>
            </div>
        </section>
    )
}

export default PortfolioSection