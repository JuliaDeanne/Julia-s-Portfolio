import { Outlet,Link} from "react-router-dom";
import brand from '../images/brand.png';

const NavBar = () => {
    return (
        <>
        
       
        <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
        
        {/*Navbar Brand*/}
        <Link to ="AboutMe" className="nav-link" aria-current="page" href="/">
        <a className="navbar-brand offset-lg-8" >
        {/* <img src=" "   width="30" height="30" className="d-inline-block align-top" alt="logo"/> */}
             JULIA </a>
            
         </Link> 
         {/*Responsiveness*/}
         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
         <span className="navbar-toggler-icon"></span>
         </button>

        {/*Creating Nav bar*/}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav offset-sm-6" >
                <li className="nav-item offset-sm-3">
                    <Link to ="AboutMe" className="nav-link" aria-current="page" onClick={() => this.setState({isOpen: false})}>
                        About
                    </Link>
                </li>
                
                <li className="nav-item offset-sm-3">
                    <Link to ="Resume" className="nav-link" onClick={() => this.setState({isOpen: false})}>
                        Resume
                    </Link>
                </li>
                <li className="nav-item offset-sm-3">
                    <Link to ="Projects" className="nav-link" onClick={() => this.setState({isOpen: false})}>
                        Projects
                    </Link>
                </li>
                <li className="nav-item offset-sm-3">
                    <Link to ="Contact" className="nav-link" onClick={() => this.setState({isOpen: false})}>
                        Contact
                    </Link>
                </li>
            </ul>
        </div>
        </div>
    </nav>
    <Outlet />
    


           
        </>
       
    )
}

export default NavBar;