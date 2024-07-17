import { useState } from "react";

const Overview = ({isDarkMode}) => {

    const [overviewCard, setOverviewCards] = useState([
        {
            id: 1,
            img: "./src/assets/images/icon-facebook.svg",
            page: "page views",
            views: 87,
            imgUpDown: "./src/assets/images/icon-up.svg",
            pre: 3,
        },
        {
            id: 2,
            img: "./src/assets/images/icon-facebook.svg",
            page: " Likes",
            views: 52,
            imgUpDown: "./src/assets/images/icon-down.svg",
            pre: 2,
        },
        {
            id: 3,
            img: "./src/assets/images/icon-instagram.svg",
            page: " Likes",
            views: 5462,
            imgUpDown: "./src/assets/images/icon-up.svg",
            pre: 2257,
        },
        {
            id: 4,
            img: "./src/assets/images/icon-instagram.svg",
            page: "profile views",
            views: "52K",
            imgUpDown: "./src/assets/images/icon-up.svg",
            pre: 1375,
        },
        {
            id: 5,
            img: "./src/assets/images/icon-twitter.svg",
            page: "Retweets",
            views: 117,
            imgUpDown: "./src/assets/images/icon-up.svg",
            pre: 303,
        },
        {
            id: 6,
            img: "./src/assets/images/icon-twitter.svg",
            page: "Retweets",
            views: 507,
            imgUpDown: "./src/assets/images/icon-up.svg",
            pre: 553,
        },
        {
            id: 7,
            img: "./src/assets/images/icon-youtube.svg",
            page: "likes",
            views: 107,
            imgUpDown: "./src/assets/images/icon-down.svg",
            pre: 19,
        },
        {
            id: 8,
            img: "./src/assets/images/icon-youtube.svg",
            page: "Total views",
            views: 1407,
            imgUpDown: "./src/assets/images/icon-down.svg",
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