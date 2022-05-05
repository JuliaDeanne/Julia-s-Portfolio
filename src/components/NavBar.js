import { Outlet,Link} from "react-router-dom";

const NavBar = () => {
    return (
        <>
        
       
        <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
        {/* onClick={() => this.setState({isOpen: false})} */}
        {/*Navbar Brand*/}
        <Link to ="/" className="nav-link" aria-current="page">
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
                    <Link to ="/AboutMe" className="nav-link"  aria-current="page" >
                        About
                    </Link>
                </li>
                
                <li className="nav-item offset-sm-3">
                    <Link to ="/Resume" className="nav-link"  >
                        Resume
                    </Link>
                </li>
                <li className="nav-item offset-sm-3">
                    <Link to ="/Projects" className="nav-link"  >
                        Projects
                    </Link>
                </li>
                <li className="nav-item offset-sm-3">
                    <Link to ="/Contact" className="nav-link"  >
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