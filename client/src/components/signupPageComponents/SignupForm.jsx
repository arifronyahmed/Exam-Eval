import { useFormik } from 'formik';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';

function SignupForm() {
  const validationSchema = Yup.object({
    firstName: Yup.string().required('Le prénom est requis'),
    lastName: Yup.string().required('Le nom de famille est requis'),
    email: Yup.string()
      .email('Adresse e-mail invalide')
      .required("L'adresse e-mail est requise"),
    password: Yup.string()
      .min(6, 'Le mot de passe doit contenir au moins 6 caractères')
      .required('Le mot de passe est requis'),
    confirmPassword: Yup.string()
      .oneOf(
        [Yup.ref('password'), null],
        'Les mots de passe doivent correspondre',
      )
      .required('La confirmation du mot de passe est requise'),
    agreeToTerms: Yup.boolean().oneOf(
      [true],
      "Vous devez accepter les conditions générales d'utilisation",
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
          <label className="form-label">Prénom :</label>
          <div className="mt-1">
            <input
              type="text"
              className="form-input-title"
              placeholder="Entrez votre prénom"
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
          <label className="form-label">Nom de famille :</label>
          <div className="mt-1">
            <input
              type="text"
              className="form-input-title"
              placeholder="Entrez votre nom de famille"
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
        <label className="form-label">Adresse e-mail :</label>
        <div className="mt-1">
          <input
            type="text"
            className="form-input-title"
            placeholder="Entrez votre adresse e-mail"
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
        <label className="form-label">Mot de passe :</label>
        <div className="mt-1">
          <input
            type="password"
            className="form-input-title"
            placeholder="Entrez votre mot de passe"
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
        <label className="form-label">Confirmez le mot de passe :</label>
        <div className="mt-1">
          <input
            type="password"
            className="form-input-title"
            placeholder="Confirmez votre mot de passe"
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
          <label className="form-label ml-2 block text-sm">
            J'accepte les{' '}
            <Link
              to="#"
              className="font-medium text-blue-600 hover:text-blue-500"
            >
              conditions générales d'utilisation
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
          className="btn-primary relative flex w-full justify-center"
        >
          Créer un compte
        </button>
      </div>
    </form>
  );
}

export default SignupForm;
