import React from "react";
import Navbar from "./Navbar.jsx";
import Jumbotron from "./Jumbotron.jsx";
import Card from "./Card.jsx";

//create your first component
const Home = () => {
    const cardData = [
        {
            image: "https://oyster.ignimgs.com/mediawiki/apis.ign.com/lethal-company/7/79/Lethal-company-coil-head.jpg?width=640",
            title: "Card Title 1",
            text: "Some quick example text for the first card.",
            buttonText: "Find out more!",
            buttonLink: "#"
        },
        {
            image: "https://oyster.ignimgs.com/mediawiki/apis.ign.com/lethal-company/b/b5/Lethal-company-baboon-hawk_%281%29.jpg?width=640",
            title: "Card Title 2",
            text: "Some quick example text for the second card.",
            buttonText: "Find out more!",
            buttonLink: "#"
        },
        {
            image: "https://oyster.ignimgs.com/mediawiki/apis.ign.com/lethal-company/6/6e/Lethal-company-bracken-close.jpg?width=640",
            title: "Card Title 3",
            text: "Some quick example text for the third card.",
            buttonText: "Find out more!",
            buttonLink: "#"
        },
        {
            image: "https://oyster.ignimgs.com/mediawiki/apis.ign.com/lethal-company/b/bf/Lethal-company-spider.jpg?width=640",
            title: "Card Title 4",
            text: "Some quick example text for the fourth card.",
            buttonText: "Find out more!",
            buttonLink: "#"
        }
    ];

	return (
		<>
		 <Navbar />
		 <Jumbotron />
		 <div className="container my-5">
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
                {cardData.map((card, index) => (
                    <Card
                        key={index}
                        image={card.image}
                        title={card.title}
                        text={card.text}
                        buttonText={card.buttonText}
                        buttonLink={card.buttonLink}
                    />
                ))}
            </div>
        </div>
		</>
	);
};

export default Home;