import React from "react";

const Card = ({ title = "Card title", btnText = "Button Text", imgUrl = "#", btnUrl = "#", altText = "...",
    cardDesc = "Quick description of card content" }) => {
    return (
        <div className="card" style={{ width: "18rem" }}>
            <img
                src={imgUrl}
                className="card-img-top"
                alt={altText}
            />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">
                    {cardDesc}
                </p>
                <a href={btnUrl} className="btn btn-success">{btnText}</a>
            </div>
        </div>
    )
}

export default Card