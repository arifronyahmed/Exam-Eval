import { useEffect, useState } from 'react';
import {
  FaMobileScreen,
  FaEnvelope,
  FaFacebook,
  FaSquareTwitter,
  FaInstagram,
} from 'react-icons/fa6';
import { Link } from 'react-router-dom';

function Footer() {
  const [cmsFooterData, setCmsFooterData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'http://localhost:1337/api/footer?populate=deep',
          {
            method: 'GET',
            headers: {
              'Content-type': 'application/json',
            },
          },
        );
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        setCmsFooterData(data);
      } catch (error) {
        console.error('Error fetching CMS data:', error.message);
      }
    };

    fetchData();
  }, []);

  const { telephone, email } =
    cmsFooterData.data?.attributes?.footerContact || {};

  const navigationLinks =
    cmsFooterData.data?.attributes?.navigation?.link || [];

  return (
    <footer className="bg-darkishGreen text-pinkishWhite ">
      <div className="container mx-auto max-w-6xl px-5 pt-4 pb-2 md:pb-10 md:pt-12">
        <div className="flex flex-col justify-between md:space-y-24 md:flex-row  space-y-10">
          <div className="md:mt-10 space-y-2 md:space-y-6">
            <div className="flex items-center space-x-3 md:mt-10">
              <FaMobileScreen size={30} />
              <div>{telephone}</div>
            </div>
            <div className="flex items-center space-x-3">
              <FaEnvelope size={30} />
              <p className="uppercase">{email}</p>
            </div>
          </div>
          <div className="flex flex-col space-y-4 text-base md:flex-row md:space-x-20 md:space-y-0 md:text-xl">
            <div className="flex flex-col space-y-3">
              {navigationLinks.map((item) => (
                <Link key={item.id} to={item.url}>
                  {item.title}
                </Link>
              ))}
            </div>
            <div className="flex flex-col space-y-3">
              <Link to="#">Contact Us</Link>
              <Link to="#">Terms</Link>
              <Link to="#">Privacy</Link>
            </div>
          </div>
          <div className="flex justify-center space-x-6">
            <div>
              <Link to="https://www.facebook.com/">
                <FaFacebook size={70} />
              </Link>
            </div>
            <div>
              <Link to="https://twitter.com/">
                <FaSquareTwitter size={70} />
              </Link>
            </div>
            <div>
              <Link to="https://www.instagram.com/">
                <FaInstagram size={70} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
