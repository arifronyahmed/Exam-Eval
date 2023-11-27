function App() {
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleNavItemClick = () => {
    // Set toggleMenu to false when a navigation item is clicked
    setToggleMenu(false);
  };

  return (
    <div className="app">
      <nav>
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto flex w-5/6 justify-between">
            {/* Primary menu and logo */}
            <div className="my-12 flex items-center gap-16">
              {/* logo */}
              <div>
                <a
                  href="/"
                  className="flex items-center gap-1 font-bold text-gray-700"
                >
                  <span>Paper.io</span>
                </a>
              </div>
              {/* primary */}
              <div className="hidden gap-8 lg:flex">
                <a href="#" className="">
                  Home
                </a>
                <a href="#">Benefits</a>
                <a href="#">Our Classes</a>
                <a href="#">Contact Us</a>
              </div>
            </div>
            {/* secondary */}
            <div className="flex gap-6">
              <div className="xs:flex hidden items-center gap-10">
                <div className="hidden items-center gap-2 lg:flex"></div>
                <div>
                  <button className="rounded-full border-2 border-solid border-gray-300 px-4 py-2 hover:bg-gray-700 hover:text-gray-100">
                    Free Trial
                  </button>
                </div>
              </div>
              {/* Mobile navigation toggle */}
              <div className="flex items-center lg:hidden">
                <button onClick={() => setToggleMenu(!toggleMenu)}>
                  <FaBars className="h-6" />
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* mobile navigation */}
        <div
          className={`fixed z-40 flex w-full origin-top flex-col gap-12 overflow-hidden bg-gray-100  duration-700 lg:hidden ${
            !toggleMenu ? 'h-0' : 'h-full'
          }`}
        >
          <div className="px-8">
            <div className="flex flex-col gap-8 font-bold tracking-wider">
              <a
                href="#"
                className="border-l-4 border-gray-600"
                onClick={handleNavItemClick}
              >
                Features
              </a>
              <a href="#" onClick={handleNavItemClick}>
                Pricing
              </a>
              <a href="#" onClick={handleNavItemClick}>
                Download
              </a>
              <a href="#" onClick={handleNavItemClick}>
                Classic
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}