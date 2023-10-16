import {Link} from 'react-router-dom';

const Menu = () => {
    return (<ul className="menu">
        <li>Repertoire</li>
        <li>My tickets</li>
        <li><Link to="/contact">Contact</Link></li>
    </ul>)
}

export default Menu;