import { Link } from "react-router-dom";
// import demo2 from "../../assets/images/demo2.PNG";

const Header = () => {
  return (
    <div className="header-container">
      <div className="header-title">
        <h1 className="text-7xl font-semibold">Welcome to our<br/> Food World</h1>
  
        <p className="mt-4 text-lg">Whether you&apos;re seeking a romantic dinner by the beach, a family gathering,<br/> or a memorable dining experience with friends, Cox&apos;s Restuarant</p>
        
        <Link to="/generator">
          <button className="">Read More </button>
        </Link>
      </div>
      <div className="header-img glowing">
        {/* <img src={demo2} alt="" /> */}
      </div>
    </div>
  );
};

export default Header;
