import "./css/Header.css";
import Navigation from "./Navigation";

function Header() {
    return(
        <header>
            <h1><img src="images/GymPro-logoresize.jpg"></img>  GymPro</h1>
            <Navigation />
        </header>
    );
};

export default Header;