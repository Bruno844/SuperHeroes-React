import { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth/context/AuthContext';


export const Navbar = () => {


    const {user, logout} = useContext(AuthContext)
    const navigate = useNavigate()


    const onLogout = () => {
        logout();
        navigate('/login', {
            replace: true //hace que cuando vayas para atras no vuelva a la misma pagina: ej ->login
        });
    }


    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">
            
            <Link 
                className="navbar-brand" 
                to="/"
            >
                Asociations
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        className="nav-item nav-link" 
                        to="/marvel"
                    >
                        Marvel characters
                    </NavLink>

                    <NavLink 
                        className="nav-item nav-link" 
                        to="/dc"
                    >
                        dc characters
                    </NavLink>

                    <NavLink 
                        className="nav-item nav-link" 
                        to="/search"
                    >
                        Search
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">
                   <span className='nav-item nav-link text-primary'>
                        {user?.name}
                   </span>

                   <button className='nav-item nav-link btn btn-outline-primary'
                    onClick={onLogout}
                   >
                        Logout
                   </button>
                </ul>
            </div>
        </nav>
    )
}