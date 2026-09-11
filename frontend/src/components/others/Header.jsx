const Header = ({ setUser , setLoggedInUser, data}) => {
  const handleLogOut = () =>{
    setUser(null);
    localStorage.setItem("loggedInUser","")
    setLoggedInUser(null);
  }
  return (
    <div className="flex items-start justify-between">
      <h1 className="text-2xl font-medium">
        Hello, <br />{" "}
        <span className="text-3xl font-semibold">{data.name}</span>{" "}
      </h1>
      <button
        className="bg-red-500 text-white rounded-md p-2 px-5 font-medium text-lg"
        onClick={handleLogOut}
      >
        Logout
      </button>
    </div>
  );
};

export default Header;
