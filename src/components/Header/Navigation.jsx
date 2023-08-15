import { Link } from 'react-router-dom';
import './header.css';

export default function(){
    return (
        <section id='header-nav'>
            <Link to='/' className="header-nav">Home</Link>
            <Link to='/about' className="header-nav">About</Link>
            <Link to='/portfolio' className="header-nav">Portfolio</Link>
        </section>
    );
}