import logo from '../../assets/skyteam.png'

export default function Navbar () {
    return(
        <header className='header'>
            <div className='logoContainer'>
                <img src={logo} alt={logo} className='skyteamLogo'></img>
            </div>
            <nav className='nav'>
                <li>Airlines</li>
                <li>About</li>
                <li>Log In</li>
            </nav>
        </header>
    )
}