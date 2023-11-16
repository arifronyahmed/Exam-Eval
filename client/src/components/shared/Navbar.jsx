import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [cmsHeaderData, setCmsHeaderData] = useState({});

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
    <nav className="container relative mx-auto bg-darkishGreen p-6 text-pinkishWhite">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-20">
          <Link to="/" className="text-2xl font-bold">
            Pro Arena
          </Link>
          <div>
            <ul className="space-x-8 font-bold lg:flex">
              {navigationLinks.map((navItem) => (
                <li key={navItem.id}>
                  <Link to={navItem.url}>{navItem.title}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="items-center space-x-6 font-bold lg:flex">
          <Link to="/login">Login</Link>
          <Link to="/signup">Sign up</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
