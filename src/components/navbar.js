import { Link } from 'react-router-dom';

function Navbar() {
  const councilTitle =
    'https://www.thecouncilcafe.com/uploads/b/ef4d1240-67df-11ea-a332-9138c5299095/6fbbd500-760b-11ea-8383-138c5a7b2cdd.jpg?width=2400';

  return (
    <div className="navbar">
      <img src={councilTitle} className="title" />
      <div className="category">
        <li>
          <Link to="/Home">HOME</Link>
        </li>
        <li>
          <Link to="iya-eba">IYA EBA</Link>
        </li>
      </div>
    </div>
  );
}

export default Navbar;
