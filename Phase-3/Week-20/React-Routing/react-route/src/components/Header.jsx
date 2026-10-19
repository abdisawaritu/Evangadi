import { Link } from "react-router";

const Header = () => {
  return (
    <>
      <div>
        <ul>
          <li>
            <Link to="/">Home </Link>
          </li>
          <li>
            <Link to="/about">about</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        <br />
        
      </div>
    </>
  );
}

export default Header
