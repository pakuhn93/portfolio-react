import Navigation from "./Navigation";
import './header.css';

export default function Header(){
    return (
        <header>
            <p id="header-title">Paul Kuhn</p>
            <Navigation />
        </header>
    );
}