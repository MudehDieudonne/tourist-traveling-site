import { Link } from "react-router-dom";
import './Header.css'

const Header = () => {
    return (
        <header>
            <nav className="navContact">
                <ol className="nav-contact">
                    <li><img src="./src/images/icons8-incoming-call-50.png" alt="callicon" />+239 223 873 112</li>
                    <li> <img src="./src/images/icons8-composing-mail-50.png" alt="massageicons" /> email@somthin</li>
                </ol>
                <div className="nav-socials">
                    <img src="./src/images/socials/icons8-facebook-24.png" alt="facebook" />
                    <img src="./src/images/socials/icons8-linkedin-24.png" alt="linkin" />
                    <img src="./src/images/socials/icons8-twitter-24.png" alt="teiter" />
                </div>
            </nav>
            <nav className="navbar">
                <div className="navitem">
                    <img src="src/images/logo.jpeg" className="logoimg" alt="" />
                    <Link to='/'>Home</Link>
                    <Link to='./About'> About </Link>
                    <Link to='./TourPakage'> TourPakage</Link>
                    <Link to='./Galery'> Gallery </Link>
                    <Link to='./Blog'> Blog </Link>
                    <Link to='./Contact'>Contact Us</Link>
                </div>
                <button className="">sign in</button>
            </nav>
        </header>
    )
}

export default Header