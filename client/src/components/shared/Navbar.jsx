import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaWolfPackBattalion, FaBars } from 'react-icons/fa6';

function Navbar() {
  const [cmsHeaderData, setCmsHeaderData] = useState({});
  const [toggleMenu, setToggleMenu] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'http://localhost:1337/api/header?populate=deep',
        );
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        setCmsHeaderData(data);
      } catch (error) {
        console.error('Error fetching CMS data:', error.message);
      }
    };

    fetchData();
  }, []);

  const navigationLinks =
    cmsHeaderData.data?.attributes?.navigation?.link || [];

  return (
    <div className="nav">
      <nav>
        <div className="mx-auto max-w-7xl">
          <div className="w-6xl mx-auto flex justify-between">
            {/* Primary menu and logo */}
            <div className="my-6 flex items-center gap-16">
              {/* logo */}
              <div>
                <Link
                  to="/"
                  className="flex items-center gap-1 text-4xl font-bold"
                >
                  <FaWolfPackBattalion />
                  <span>Pro-Arena</span>
                </Link>
              </div>
              {/* primary */}
              <div className="hidden gap-8 lg:flex">
                {navigationLinks.map((navItem) => (
                  <Link key={navItem.id} to={navItem.url} className="nav-item">
                    {navItem.title}
                  </Link>
                ))}
              </div>
            </div>
            {/* secondary */}
            <div className="flex gap-6">
              {/* Mobile navigation toggle */}
              <div className="flex items-center lg:hidden">
                <button
                  onClick={() => setToggleMenu(!toggleMenu)}
                  className="text-xxl mr-4"
                >
                  <FaBars size={24} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* mobile navigation */}
        <div
          className={`fixed z-40 flex w-full origin-top flex-col gap-12 overflow-hidden bg-darkishGreen duration-700 lg:hidden ${
            !toggleMenu ? 'h-0' : 'h-full'
          }`}
        >
          <div className="px-6">
            <div className="flex flex-col gap-2 ">
              {navigationLinks.map((navItem) => (
                <Link
                  onClick={() => setToggleMenu(!toggleMenu)}
                  key={navItem.id}
                  to={navItem.url}
                  className="nav-item"
                >
                  {navItem.title}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
