import React, { useState } from "react";
const Social = ({isDarkMode}) => {

const [cards, setCars] = useState([
    {
        id: 1,
        name: "@nathanf",
        socialImg:require("./src/assets/images/icon-facebook.svg").default,
        count: 1987,
        followers: "followers",
        today: 12,
        countImg: require("./src/assets/images/icon-up.svg").default
    },
    {
        id: 2,
        name: "@nathanf",
        socialImg: require("./src/assets/images/icon-twitter.svg").default,
        count: 1044,
        followers: "followers",
        today: 99,
        countImg: require("./src/assets/images/icon-up.svg").default
    },
    {
        id: 3,
        name: "@realnathanf",
        socialImg: require("./src/assets/images/icon-instagram.svg").default,
        count: "11k",
        followers: "followers",
        today: 1099,
        countImg: require("./src/assets/images/icon-up.svg").default
    },
    {
        id: 4,
        name: "Nathan F.",
        socialImg: require("./src/assets/images/icon-youtube.svg").default,
        count: 8239,
        followers: "subscribers",
        today: 144,
        countImg: require("./src/assets/images/icon-down.svg").default
    },
]);

    return (
        <div className={`social-section ${isDarkMode ? "dark-mode" : "light-mode"}`}>
            {cards.map((card, index) => 
                <div className="card" key={index}>
                    <div className="card__username">
                        <img src={card.socialImg} alt="social" />
                        <p>{card.name}</p>
                    </div>
                    <div className="card__followers">
                        <h1>{card.count}</h1>
                        <p>{card.followers}</p>
                    </div>
                    <div className="card__count">
                        <img src={card.countImg} alt="icon" /> 
                        <p className="last-p">{card.today} Today</p>
                    </div>   
                </div>
            )}
        </div>
    );
}
 
export default Social;