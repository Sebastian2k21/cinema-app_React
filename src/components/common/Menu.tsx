import { Fragment, useContext } from 'react';
import {Link} from 'react-router-dom';
import { ListFormat } from 'typescript';
import { UserContext } from './UserContext';

const Menu = () => {
    const { user } = useContext(UserContext);

    return (<ul className="menu">
        { user == null ?
        <li><Link to="/login">Login</Link></li> :
        <Fragment>
             <li className='username'>{user}</li>
           <li><Link to="/logout">Logout</Link></li> 
        </Fragment>
       
        }
          <li><Link to="/repertoire">Repertoire</Link></li>
        <li><Link to="/tickets">My tickets</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        
    </ul>)
}

export default Menu;