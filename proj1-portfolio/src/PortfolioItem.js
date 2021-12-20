import React from "react";
import PortfolioModal from "./PortfolioModal";

const PortfolioItem = ({ img_src = "assets/img/portfolio/submarine.png", img_alt = "...", target_modal_id = "portfolioModal6", modal_tite = "Submarine"}) => (
    // Portfolio Item
    <div className="col-md-6 col-lg-4 mb-5">
        <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target={"#" + target_modal_id}>
            <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x"></i></div>
            </div>
            <img className="img-fluid" src={img_src} alt={img_alt} />
        </div>
        {/* <!-- Portfolio Modals--> */}
        <PortfolioModal img_src={img_src} target_modal_id={target_modal_id} modal_tite={modal_tite} ></PortfolioModal>
    </div>
)

export default PortfolioItem