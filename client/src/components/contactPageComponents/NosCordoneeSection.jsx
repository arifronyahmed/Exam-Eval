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
    <div className="container mx-auto my-20 flex max-w-7xl flex-row">
      <div className="flex-1">
        <div className="flex flex-col">
          <h4 className="dark-bold-text text-4xl uppercase">NOS COORDONNÉES</h4>
          <div className="mt-8 flex flex-row">
            <IoHome size={30} className="mr-6 text-peach" />
            <h5 className="text-xl text-slate-500">
              79, Bd de la Paix – 64000 Pau
            </h5>
          </div>
          <div className="mt-8 flex flex-row">
            <IoMdMail size={30} className="mr-6 text-peach" />
            <h5 className="text-xl text-slate-500">contact@pro-arena.com</h5>
          </div>
          <div className="mt-8 flex flex-row">
            <IoCallSharp size={30} className="mr-6 text-peach" />
            <h5 className="text-xl text-slate-500">0758301041</h5>
          </div>
        </div>
        {/* *************************** */}
        <div className="mt-8 flex flex-col">
          <h4 className="dark-bold-text text-4xl uppercase">Acces</h4>
          <div className="mt-8 flex flex-row">
            <FaCar size={30} className="mr-6 text-peach" />
            <h5 className="text-xl text-slate-500">parking</h5>
          </div>
          <div className="mt-8 flex flex-row">
            <FaBusSimple size={30} className="mr-6 text-peach" />
            <h5 className="text-xl text-slate-500">Transportation</h5>
          </div>
        </div>
        <div className="mt-8 flex flex-col">
          <h4 className="dark-bold-text text-4xl uppercase">Social Media</h4>
          <div className="mt-8 flex flex-row">
            <FaFacebook size={30} className="mr-6 text-peach" />
            <FaSquareTwitter size={30} className="mr-6 text-peach" />
            <FaInstagram size={30} className="mr-6 text-peach" />
          </div>
        </div>
      </div>

      {/* ****************************************************** */}
      <section className="flex-1">
        <h4 className="dark-bold-text text-4xl uppercase">Contact Us</h4>
        <ContactForm />
      </section>
    </div>
  );
}

export default NosCordoneeSection;
