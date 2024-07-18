import React, { useState } from "react";
import fbIcon from "./assets/images/icon-facebook.svg";
import twitterIcon from "./assets/images/icon-twitter.svg";
import instaIcon from "./assets/images/icon-instagram.svg";
import youtubeIcon from "./assets/images/icon-youtube.svg";

import upIcon from "./assets/images/icon-up.svg";
import downIcon from "./assets/images/icon-down.svg";



const Social = ({isDarkMode}) => {

const [cards, setCars] = useState([
    {
        id: 1,
        name: "@nathanf",
        socialImg: fbIcon,
        count: 1987,
        followers: "followers",
        today: 12,
        countImg: upIcon
    },
    {
        id: 2,
        name: "@nathanf",
        socialImg: twitterIcon,
        count: 1044,
        followers: "followers",
        today: 99,
        countImg:upIcon
    },
    {
        id: 3,
        name: "@realnathanf",
        socialImg: instaIcon,
        count: "11k",
        followers: "followers",
        today: 1099,
        countImg: upIcon
    },
    {
        id: 4,
        name: "Nathan F.",
        socialImg: youtubeIcon,
        count: 8239,
        followers: "subscribers",
        today: 144,
        countImg: downIcon
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