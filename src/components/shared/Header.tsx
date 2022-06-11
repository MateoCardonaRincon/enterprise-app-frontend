import Login from "./Login";

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-9">
            <h3>Don Raul's Hardware Store</h3>
          </div>
          <div className="col-3">
            <Login />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
