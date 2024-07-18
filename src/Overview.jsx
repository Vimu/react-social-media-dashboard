import { useState } from "react";

const Overview = ({isDarkMode}) => {

    const [overviewCard, setOverviewCards] = useState([
        {
            id: 1,
            img: require( "./src/assets/images/icon-facebook.svg").default,
            page: "page views",
            views: 87,
            imgUpDown: require("./src/assets/images/icon-up.svg").default,
            pre: 3,
        },
        {
            id: 2,
            img: require("./src/assets/images/icon-facebook.svg").default,
            page: " Likes",
            views: 52,
            imgUpDown: require("./src/assets/images/icon-down.svg").default,
            pre: 2,
        },
        {
            id: 3,
            img: require("./src/assets/images/icon-instagram.svg").default,
            page: " Likes",
            views: 5462,
            imgUpDown: require("./src/assets/images/icon-up.svg").default,
            pre: 2257,
        },
        {
            id: 4,
            img: require("./src/assets/images/icon-instagram.svg").default,
            page: "profile views",
            views: "52K",
            imgUpDown: require("./src/assets/images/icon-up.svg").default,
            pre: 1375,
        },
        {
            id: 5,
            img: require("./src/assets/images/icon-twitter.svg").default,
            page: "Retweets",
            views: 117,
            imgUpDown: require("./src/assets/images/icon-up.svg").default,
            pre: 303,
        },
        {
            id: 6,
            img: require("./src/assets/images/icon-twitter.svg").default,
            page: "Retweets",
            views: 507,
            imgUpDown: require("./src/assets/images/icon-up.svg").default,
            pre: 553,
        },
        {
            id: 7,
            img: require("./src/assets/images/icon-youtube.svg").default,
            page: "likes",
            views: 107,
            imgUpDown: require("./src/assets/images/icon-down.svg").default,
            pre: 19,
        },
        {
            id: 8,
            img: require("./src/assets/images/icon-youtube.svg").default,
            page: "Total views",
            views: 1407,
            imgUpDown: require("./src/assets/images/icon-down.svg").default,
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