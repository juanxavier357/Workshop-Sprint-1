import { NavLink } from 'react-router-dom'
import './Header.scss'

function Header() {

    return (
        <>
            <nav className="navigation__bar">
                <div className="navigation__bar--logo">
                    <img src="/pestanas.jpg" alt="Me gustan tus pestañas" width="200px" height="100px" />
                    <h1>Workshop Sprint 1</h1>
                </div>
                <ul className="navigation__bar--items">
                    <li>
                        <NavLink to="/" className="pestana">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/productdetail" className="pestana">Product Detail</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" className="pestana">About</NavLink>
                    </li>
                    <button className="navigation__bar--menu"><img src="/menu.png" alt="Menu" width="40px" height="40px" /></button>
                </ul>
            </nav>
        </>
    )
}

export default Header