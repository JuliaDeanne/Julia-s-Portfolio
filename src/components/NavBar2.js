import { Outlet,Link} from "react-router-dom";

const NavBar2 = () => {
    return (
        <>
        
       
        <nav className="navbar sticky-top  navbar-expand-lg bg-dark navbar-dark">
        <div classNameName="container-fluid">
        {/*Nav bar logo*/}
       
        <Link to ="AboutMe" classNameName="nav-link" aria-current="page">
        <a className="navbar-brand offset-lg-10" href="about">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png" width="30" height="30" className="d-inline-block align-top" alt="logo"/>
            &nbsp;JDGB  </a>
         </Link> 
       
        {/*Creating Nav bar*/}
        <div classNameName="collapse navbar-collapse" id="navbarNav">
            <ul classNameName="navbar-nav offset-sm-6"  >
                <li classNameName="nav-item active">
                    <Link to ="AboutMe" classNameName="nav-link" aria-current="page">
                        About
                    </Link>
                </li>
                
                <li classNameName="nav-item offset-sm-3">
                    <Link to ="Resume" classNameName="nav-link" aria-current="page">
                        Resume
                    </Link>
                </li>
                <li classNameName="nav-item offset-sm-3">
                    <Link to ="Projects" classNameName="nav-link" aria-current="page">
                        Projects
                    </Link>
                </li>
                <li classNameName="nav-item offset-sm-3">
                    <Link to ="Contact" classNameName="nav-link" aria-current="page">
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

export default NavBar2;