import React from "react";

const Card = ({ image, title, text, buttonText, buttonLink }) => {
    return (
<div className="container mt-5">
            <div className="row text-center">
                <div className=" mb-4">
                    <div className="card h-100">
                        <img src={image} className="card-img-top" alt="Card 1" />
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text">{text}</p>
                        </div>
                        <div className="card-footer">
                            <a href={buttonLink} className="btn btn-primary">{buttonText}</a>
                        </div>
                    </div>
                </div>
            </div>
</div>            
    );
};

export default Card;
