import ContactForm from '../components/contactPageComponents/ContactForm';

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
        <div className="mx-auto flex h-60 max-w-7xl items-center text-white">
          <h1 className="main-title w-1/2">UNE QUESTION ? Contactez-nous</h1>
        </div>
      </div>

      <section>
        <div className="mx-auto max-w-md overflow-hidden rounded-md bg-pinkishWhite shadow-lg">
          <div className="px-6 py-8">
            <h2 className="text-center text-3xl font-extrabold text-darkishGreen">
              Contact Us
            </h2>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}

export default ContactPage;
