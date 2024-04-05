import { Card } from "antd";
import { coffePng } from "./card.data";

const { Meta } = Card;

type TProps = {
    title: string,
    price: string,
    onClick: VoidFunction
};

export const CustomeCard = ({title, price, onClick}: TProps) => {
    return (
        <Card
            hoverable
            style={{ width: 240 }}
            cover={<img alt={"coffe"} src={coffePng} />}
            onClick={onClick}
        >
            <Meta title={title} description={price} />
        </Card>
    )
};