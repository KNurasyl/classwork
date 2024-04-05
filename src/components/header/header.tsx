import "./header.css";
import { logoPng } from "./header.data";

export const Header = () => {
    return (
        <header className={"header"}>
            <img className={"logo"} src={logoPng} alt={"logo"} />
        </header>
    );
};