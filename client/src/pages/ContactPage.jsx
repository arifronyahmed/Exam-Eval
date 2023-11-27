import ContactMap from '../components/contactPageComponents/ContactMap';
import NosCordoneeSection from '../components/contactPageComponents/NosCordoneeSection';
import { IoTimeSharp } from 'react-icons/io5';

function ContactPage() {
  return (
    <>
      <div
        className="container bg-gray-700 bg-cover bg-center bg-blend-multiply "
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1505484123437-c4ecb3e13bef?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        }}
      >
        <div className="mx-auto flex h-60 max-w-7xl items-center">
          <h1 className="main-title w-1/2 text-6xl font-bold">
            UNE QUESTION ? Contactez-nous
          </h1>
        </div>
      </div>
      <NosCordoneeSection />

      <section className="container mx-auto mb-20 flex max-w-7xl flex-row gap-4">
        <ContactMap />
        <div>
          <div className="flex flex-col ">
            <div className="flex-1">
              <div className="flex flex-col">
                <h4 className="dark-bold-text text-4xl uppercase">
                  <span>
                    <IoTimeSharp size={30} className="mr-6 text-peach" />
                  </span>
                  NOS HORAIRES
                </h4>
                <div className="mt-8 flex flex-col">
                  <h5 className="text-xl font-bold text-slate-600">
                    HORAIRES D’OUVERTURE
                  </h5>
                  <div>
                    <p>
                      <span className="font-bold">du lundi au jeudi :</span>{' '}
                      8h30 – 22h
                    </p>
                  </div>
                  <div>
                    <p>
                      <span className="font-bold">du lundi au jeudi :</span>{' '}
                      8h30 – 22h
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ContactPage;
