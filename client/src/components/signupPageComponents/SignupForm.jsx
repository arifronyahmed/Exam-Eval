import { useFormik } from 'formik';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';

function SignupForm() {
  const validationSchema = Yup.object({
    firstName: Yup.string().required('First Name is required'),
    lastName: Yup.string().required('Last Name is required'),
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .required('Password is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Confirm Password is required'),
    agreeToTerms: Yup.boolean().oneOf(
      [true],
      'You must agree to the Terms and Conditions',
    ),
  });

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      agreeToTerms: false,
    },
    validationSchema,
    onSubmit: function (values) {
      fetch('/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      })
        .then((response) => {
          if (response.ok) {
            formik.resetForm();
          }
        })
        .catch((error) => {
          console.error(error);
        });
    },
  });

  return (
    <form className="space-y-6" onSubmit={formik.handleSubmit}>
      <div className="flex space-x-6">
        <div className="flex-1">
          <label className="form-label">First Name:</label>
          <div className="mt-1">
            <input
              type="text"
              className="form-input-title"
              placeholder="Enter your first name"
              id="firstName"
              name="firstName"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.firstName}
            />
            {formik.touched.firstName && formik.errors.firstName ? (
              <div className="text-red-500">{formik.errors.firstName}</div>
            ) : null}
          </div>
        </div>
        <div className="flex-1">
          <label className="form-label">Last Name:</label>
          <div className="mt-1">
            <input
              type="text"
              className="form-input-title"
              placeholder="Enter your Last Name"
              id="lastName"
              name="lastName"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.lastName}
            />
            {formik.touched.lastName && formik.errors.lastName ? (
              <div className="text-red-500">{formik.errors.lastName}</div>
            ) : null}
          </div>
        </div>
      </div>
      <div>
        <label className="form-label">Email</label>
        <div className="mt-1">
          <input
            type="text"
            className="form-input-title"
            placeholder="Enter your email address"
            id="email"
            name="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="text-red-500">{formik.errors.email}</div>
          ) : null}
        </div>
      </div>
      <div>
        <label className="form-label">Password</label>
        <div className="mt-1">
          <input
            type="password"
            className="form-input-title"
            placeholder="Enter your password"
            id="password"
            name="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
          {formik.touched.password && formik.errors.password ? (
            <div className="text-red-500">{formik.errors.password}</div>
          ) : null}
        </div>
      </div>
      <div>
        <label className="form-label">Confirm Password</label>
        <div className="mt-1">
          <input
            type="password"
            className="form-input-title"
            placeholder="Confirm your password"
            id="confirmPassword"
            name="confirmPassword"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.confirmPassword}
          />
          {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
            <div className="text-red-500">{formik.errors.confirmPassword}</div>
          ) : null}
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <input
            type="checkbox"
            id="agreeToTerms"
            name="agreeToTerms"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            checked={formik.values.agreeToTerms}
          />
          <label className="ml-2 block text-sm text-gray-900">
            I agree to the
            <Link
              to="#"
              className="font-medium text-blue-600 hover:text-blue-500"
            >
              Terms and Conditions
            </Link>
          </label>
        </div>
        {formik.touched.agreeToTerms && formik.errors.agreeToTerms ? (
          <div className="text-red-500">{formik.errors.agreeToTerms}</div>
        ) : null}
      </div>
      <div>
        <button
          type="button"
          onClick={formik.handleSubmit}
          className="bg-tealBlue group relative flex w-full justify-center rounded-md border border-transparent px-4 py-2 text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Create an account
        </button>
      </div>
    </form>
  );
}

export default SignupForm;
