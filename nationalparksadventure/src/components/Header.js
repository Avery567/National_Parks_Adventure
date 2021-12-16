
import {Link} from "react-router-dom";
import LogIn from './LogIn';
import SignUp from './SignUp';
import Search from './Search';

function Header ({ onLogin, search, handleSearch }) {
    return (
        <div class="my-header">
            <h1><Link to="/">National Parks Adventure</Link></h1>
            <span><button><Link to="/dashboard">My Dashboard</Link></button></span>
            <span><Search search={search} handleSearch={handleSearch}/></span>
            <span><LogIn onLogin={onLogin} /></span>
            <span><SignUp onLogin={onLogin} /></span>
            <span><Link to="/contactus"><button>Contact Us</button></Link></span>
        </div>

    )}

export default Header;
