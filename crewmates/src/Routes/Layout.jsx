import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <div className="container">
      <nav className="sidebar">
        <div className="sidebar-header">
            <h2>Crewmate Creator</h2>
        </div>
        <ul className="sidebar-menu">
            <li className="sidebar-item">
                <Link to="/">Home</Link>
            </li>
            <li className="sidebar-item">
                <Link to="/new">Create Crewmate</Link>
            </li>
            <li className="sidebar-item">
                <Link to="/gallery">All Crewmates</Link>
            </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};

export default Layout;
