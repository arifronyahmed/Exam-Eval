import { useEffect } from 'react';
import {
  FaMobileScreen,
  FaEnvelope,
  FaFacebook,
  FaSquareTwitter,
  FaInstagram,
} from 'react-icons/fa6';

function Footer() {
  // const [cmsFooterPageData, setCmsFooterPageData] = useState({});

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch(
  //         'http://localhost:1337/api/home-page?populate=deep',
  //         {
  //           method: 'GET',
  //           headers: {
  //             'Content-type': 'application/json',
  //           },
  //         },
  //       );
  //       if (!response.ok) {
  //         throw new Error('Network response was not ok');
  //       }

  //       const data = await response.json();
  //       setCmsHomePageData(data);
  //     } catch (error) {
  //       console.error('Error fetching CMS data:', error.message);
  //     }
  //   };

  //   fetchData();
  // }, []);
  return (
    <footer className=" mt-16 bg-darkishGreen text-pinkishWhite">
      <div className="container mx-auto max-w-6xl px-5 pb-10 pt-12">
        <div className="flex flex-col justify-between space-y-24 md:flex-row md:space-y-0">
          <div className="mt-10 space-y-6">
            <div className="flex items-center space-x-3 md:-mt-10">
              <FaMobileScreen size={30} />
              <div>+33-758001515</div>
            </div>
            <div className="flex items-center space-x-3">
              <FaEnvelope size={30} />
              <p className="uppercase">example@pro-arena.com</p>
            </div>
          </div>
          <div className="flex flex-col space-y-10 text-xl md:flex-row md:space-x-20 md:space-y-0 md:text-base">
            <div className="flex flex-col space-y-3">
              <a href="#">something</a>
            </div>
            <div className="flex flex-col space-y-3">
              <a href="#">Contact Us</a>
              <a href="#">Terms</a>
              <a href="#">Privacy</a>
            </div>
          </div>
          <div className="flex justify-center space-x-6">
            <div>
              <a href="https://www.facebook.com/">
                <FaFacebook size={70} />
              </a>
            </div>
            <div>
              <a href="https://twitter.com/">
                <FaSquareTwitter size={70} />
              </a>
            </div>
            <div>
              <a href="https://www.instagram.com/">
                <FaInstagram size={70} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
