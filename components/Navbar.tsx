const Navbar = () => { 
    return (
      <nav className="w-full h-12 bg-gray-800 flex items-center px-4 justify-between">
        <h1 className="text-white text-lg font-semibold">Welcome To Chatty</h1>
        <h1 className="text-white cursor-pointer">Light/Dark</h1>
      </nav>
    );
 }

export default Navbar;