import { Link } from 'react-router-dom';

export default function Project({ name, webpage }){
    return (
        <section id={name}>
            <Link to={webpage} className='project'>PROJECT: {name.slice(0, name.length-4).replace(/-/g, ' ')}</Link>
            <img src={`../src/assets/images/${name}`} alt={name} height='250px' />
        </section>
    );
}