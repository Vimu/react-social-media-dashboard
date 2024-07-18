import { useState } from "react";

import fbImg from "./assets/images/icon-facebook.svg";
import twitterImg from "./assets/images/icon-twitter.svg";
import instaImg from "./assets/images/icon-instagram.svg";
import youtubeImg from "./assets/images/icon-youtube.svg";

import upImg from "./assets/images/icon-up.svg";
import downImg from "./assets/images/icon-down.svg";

const Overview = ({isDarkMode}) => {

    const [overviewCard, setOverviewCards] = useState([
        {
            id: 1,
            img: fbImg,
            page: "page views",
            views: 87,
            imgUpDown: upImg,
            pre: 3,
        },
        {
            id: 2,
            img: fbImg,
            page: " Likes",
            views: 52,
            imgUpDown: downImg,
            pre: 2,
        },
        {
            id: 3,
            img: instaImg,
            page: " Likes",
            views: 5462,
            imgUpDown: upImg,
            pre: 2257,
        },
        {
            id: 4,
            img: instaImg,
            page: "profile views",
            views: "52K",
            imgUpDown: upImg,
            pre: 1375,
        },
        {
            id: 5,
            img: twitterImg,
            page: "Retweets",
            views: 117,
            imgUpDown: upImg,
            pre: 303,
        },
        {
            id: 6,
            img: twitterImg,
            page: "Retweets",
            views: 507,
            imgUpDown: upImg,
            pre: 553,
        },
        {
            id: 7,
            img: youtubeImg,
            page: "likes",
            views: 107,
            imgUpDown: downImg,
            pre: 19,
        },
        {
            id: 8,
            img: youtubeImg,
            page: "Total views",
            views: 1407,
            imgUpDown: downImg,
            pre: 12,
        }
    ]);
    return (
        <div className={`overview ${isDarkMode ? "dark-mode" : "light-mode"}`}>
            <h2 className="overview-title">Overview - Today</h2>
            <div className="overview-grid">
                {overviewCard.map((card, index) => 
                    <div className="overview-card" key={index}>
                        <div className="views-head">
                            <p>{card.page}</p>
                            <img src={card.img} alt="social icon" />
                        </div>
                        <div className="views">
                            <h2>{card.views}</h2>
                            <div className="precentage">
                                <img src={card.imgUpDown} alt="icon up" />
                                <p>{card.pre}%</p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
 
export default Overview;