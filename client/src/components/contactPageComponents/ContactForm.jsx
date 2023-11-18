import { useFormik } from 'formik';
import * as Yup from 'yup';

function ContactForm() {
  const { values, errors, handleChange, handleSubmit, touched } = useFormik({
    initialValues: {
      name: '',
      email: '',
      messageText: '',
    },

    validationSchema: Yup.object({
      name: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .required('Required'),

      email: Yup.string().email('Invalid email address').required('Required'),

      messageText: Yup.string()
        .max(100, 'Maximum caracter support')
        .required('Required'),
    }),
  });

  return (
    <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-700"
        >
          Name
        </label>
        <div className="mt-1">
          <input
            id="name"
            type="text"
            className="block w-full rounded-md border-gray-300 shadow-sm"
            placeholder="Your Name"
            onChange={handleChange}
            value={values.name}
          />
          {touched.name && errors.name ? <div>{errors.name}</div> : null}
        </div>
      </div>
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700"
        >
          Email
        </label>
        <div className="mt-1">
          <input
            id="email"
            type="email"
            className="block w-full rounded-md border-gray-300 shadow-sm "
            placeholder="Your Email"
            onChange={handleChange}
            value={values.email}
          />
          {touched.email && errors.email ? <div>{errors.email}</div> : null}
        </div>
      </div>
      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-gray-700"
        >
          Message
        </label>
        <div className="mt-1">
          <textarea
            id="messageText"
            rows="4"
            className="block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            placeholder="Your Message"
            onChange={handleChange}
            value={values.messageText}
          ></textarea>
          {touched.messageText && errors.messageText ? (
            <div>{errors.messageText}</div>
          ) : null}
        </div>
      </div>
      <div>
        <button
          type="submit"
          className="flex w-full justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white"
        >
          Send Message
        </button>
      </div>
    </form>
  );
}

export default ContactForm;
