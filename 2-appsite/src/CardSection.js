/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Card from "./Card";

const CardSection = () => {
    return (
        <section className="contact bg-success ">
            <div className="container ">
                <h2 className="text-white">
                    We love new friends!
                </h2>
                <div className="row">
                    <div className="col-4">
                        <Card title="LearnCodeOnline" btnText="My LCO App" imgUrl="https://images.pexels.com/photos/3532557/pexels-photo-3532557.jpeg" btnUrl="#" altText="..."
                            cardDesc="Quick description of card content"></Card>
                    </div>
                    <div className="col-4">
                        <Card imgUrl="https://images.pexels.com/photos/3532544/pexels-photo-3532544.jpeg"></Card>
                    </div>
                    <div className="col-4">
                        <Card imgUrl="https://images.pexels.com/photos/2522663/pexels-photo-2522663.jpeg"></Card>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CardSection