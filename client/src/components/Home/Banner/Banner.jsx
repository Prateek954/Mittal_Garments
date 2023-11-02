import "./Banner.scss";
import BannerImg from "../../../assets/banner.png"
const Banner = () => {
    return (
        <>
            <div className="banner-bg">
                <div className="content">
                    <div className="text-content">
                        <h1>SALES</h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Nostrum libero cupiditate eveniet velit, sit repellat.
                        </p>
                        <div className="ctas">
                            Explore
                        </div>
                    </div>
                    <img src={BannerImg} alt="" />
                </div>
            </div>
        </>
    );
};

export default Banner;
