import { IoHome, IoCallSharp } from 'react-icons/io5';
import {
  FaCar,
  FaBusSimple,
  FaFacebook,
  FaSquareTwitter,
  FaInstagram,
} from 'react-icons/fa6';

import { IoMdMail } from 'react-icons/io';
import ContactForm from './ContactForm';

function NosCordoneeSection() {
  return (
    <div className="container mx-auto my-20 flex max-w-7xl flex-col md:flex-row">
      <div className="flex-1">
        <div className=" mb-8 flex flex-col">
          <h4 className="contact-icon-title">
            NOS COORDONNÉES
          </h4>
          <div className="contact-icon-item">
            <IoHome size={30} className="mr-6 text-peach" />
            <h5 className="contact-icon-text">
              79, Bd de la Paix – 64000 Pau
            </h5>
          </div>
          <div className="contact-icon-item">
            <IoMdMail size={30} className="mr-6 text-peach" />
            <h5 className="contact-icon-text">
              contact@pro-arena.com
            </h5>
          </div>
          <div className="contact-icon-item">
            <IoCallSharp size={30} className="mr-6 text-peach" />
            <h5 className="contact-icon-text">0758301041</h5>
          </div>
        </div>
        {/* *************************** */}
        <div className="mx-4 mt-10 flex flex-col md:mt-8">
          <h4 className="contact-icon-title">
            Acces
          </h4>
          <div className="contact-icon-item">
            <FaCar size={30} className="mr-6 text-peach" />
            <h5 className="contact-icon-text">parking</h5>
          </div>
          <div className="contact-icon-item">
            <FaBusSimple size={30} className="mr-6 text-peach" />
            <h5 className="contact-icon-text">Transportation</h5>
          </div>
        </div>
        <div className="mt-8 flex flex-col">
          <h4 className="contact-icon-title">Social Media</h4>
          <div className="mt-8 flex flex-row">
            <FaFacebook size={30} className="mr-6 text-peach" />
            <FaSquareTwitter size={30} className="mr-6 text-peach" />
            <FaInstagram size={30} className="mr-6 text-peach" />
          </div>
        </div>
      </div>

      {/* ****************************************************** */}
      <section className="flex-1 mt-20">
        <h4 className="contact-icon-title">Contact Us</h4>
        <ContactForm />
      </section>
    </div>
  );
}

export default NosCordoneeSection;
