import { Link } from "react-router-dom";
// import { FaUsers, FaPlus } from "react-icons/fa";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <nav className="navbar">
        <Link to="/users">Users</Link>
        <Link to="/add-user">Add User</Link>
      </nav>
      <main className="main-container">{children}</main>
    </>
  );
};

export default Layout;
