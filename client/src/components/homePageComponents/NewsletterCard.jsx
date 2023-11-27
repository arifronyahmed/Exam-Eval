import { useFormik } from 'formik';
import * as Yup from 'yup';
import { FaEnvelope } from 'react-icons/fa6';
import { useState } from 'react';

function NewsletterCard({ newsletterCard }) {
  const [loading, setLoading] = useState(false);

  const submitForm = async (values, formik) => {
    try {
      const response = await fetch('http://localhost:3001/api/v1/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        formik.resetForm();
        setLoading(false);
      } else {
        const responseData = await response.json();
        if (responseData.message) {
          formik.setFieldError('email', responseData.message);
        }
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .required('Email address is required')
        .email('Invalid email address'),
    }),
    onSubmit: async function (values) {
      setLoading(true);
      await submitForm(values, formik);
      setLoading(false); 
    },
  });

  return (
    <section className="bg-darkishGreen">
      <div className="mx-auto max-w-screen-xl px-4 py-8 lg:px-6 lg:py-16">
        <div className="mx-auto max-w-screen-md sm:text-center">
          <h2 className="main-title mb-4 text-3xl font-bold tracking-widest sm:text-4xl">
            {newsletterCard.newsletterTitle}
          </h2>
          <p className="mx-auto mb-8 max-w-2xl font-light text-gray-500 sm:text-xl md:mb-12">
            {newsletterCard.newsletterText}
          </p>
          <form onSubmit={formik.handleSubmit}>
            <div className="mx-auto mb-3 max-w-screen-sm items-center space-y-4 sm:flex sm:space-y-0">
              <div className="relative w-full">
                <label
                  htmlFor="email"
                  className="mb-2 hidden text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  {newsletterCard.placeholderText}
                </label>
                <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <div>
                    <FaEnvelope />
                  </div>
                </div>
                <input
                  className="focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-full border border-gray-300 bg-gray-50 p-3 pl-10 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 "
                  placeholder={newsletterCard.placeholderText}
                  type="email"
                  id="email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                />
                {formik.touched.email && formik.errors.email ? (
                  <div className="text-red-700">{formik.errors.email}</div>
                ) : null}
              </div>
              <button
                type="submit"
                className="btn-primary ml-5 px-4 py-3"
                disabled={loading}
              >
                {loading ? 'Subscribing...' : 'Subscribe'}
              </button>
            </div>
            <div className="mx-auto max-w-screen-sm text-left text-sm text-gray-500">
              {newsletterCard.policyText}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default NewsletterCard;
