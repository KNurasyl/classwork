import { useState } from "react";
import { CustomeCard } from "../../components/card/card";
import { data } from "./main.data";
import "./main.css";

export const Main = () => {
    const [coffees, setCoffees] = useState(data)

    const onClickHandler = (index: number) => {
        const copyState = [...coffees];
        copyState[index].price = "Нет в наличии";
        setCoffees(copyState);
    };

    return (
        <main className={"main"}>
            {
                coffees.map((coffee, index) => (
                    <CustomeCard 
                        key={coffee.title} 
                        title={coffee.title} 
                        price={coffee.price}
                        onClick={() => onClickHandler(index)}
                    />
                ))
            }
        </main>
    )
}