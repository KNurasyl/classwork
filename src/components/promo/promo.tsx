import "./promo.css";
import { Carousel } from 'antd';
import { contentStyle } from "./promo.data";

export const Promo = () => {
    return (
        <div className={"promo"}>
            <Carousel autoplay style={{height: "300px"}}>
                <div>
                    <h3 style={contentStyle}>Официальное Заявление Starbucks</h3>
                </div>
                <div>
                    <h3 style={contentStyle}>Факты о Starbucks в регионе Middle East</h3>
                </div>
                <div>
                    <h3 style={contentStyle}>Доставка Starbucks®</h3>
                </div>
            </Carousel>
        </div>
    )
};