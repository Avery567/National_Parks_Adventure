
import {Link} from "react-router-dom";
import LogIn from './LogIn';
import SignUp from './SignUp';
import Search from './Search';

function Header ({ onLogin }) {
    return (
        <>
            <Search />
            <p>National Parks Adventure</p> 
            <LogIn onLogin={onLogin} />
            <SignUp onLogin={onLogin} />
        <Link to="/contactus">
            <button>Contact Us</button>
        </Link>
        </>
    )}

export default Header;
