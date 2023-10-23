import {Link} from 'react-router-dom';

const Menu = () => {
    return (<ul className="menu">
          <li><Link to="/repertoire">Repertoire</Link></li>
        <li><Link to="/tickets">My tickets</Link></li>
        <li><Link to="/contact">Contact</Link></li>
    </ul>)
}

export default Menu;