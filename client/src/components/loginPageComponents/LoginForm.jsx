import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { useAuthContext } from '../../context/AuthContext';
import { setToken } from '../../helpers';

function LoginForm() {
  const { setUser } = useAuthContext();
  const navigate = useNavigate();

  const validationSchema = Yup.object({
    email: Yup.string()
      .email('Adresse e-mail invalide')
      .required("L'adresse e-mail est requise"),
    password: Yup.string().required('Le mot de passe est requis'),
  });

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema,
    onSubmit: async (values) => {
      try {
        const response = await fetch(
          'http://localhost:3001/api/v1/auth/login',
          {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(values),
          },
        );

        console.log(response);
        if (response.ok) {
          const data = await response.json();
          console.log(data);
          setToken(data.token);

          setUser({
            email: data.email,
          });
          navigate('/booking')
          formik.resetForm();
        }
      } catch (error) {
        console.log(error);
      }
    },
  });

  return (
    <form className="mt-8 space-y-6" onSubmit={formik.handleSubmit}>
      <div>
        <label className="form-label">E-mail</label>
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
        <label className="form-label">Mot de passe</label>
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
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <input
            type="checkbox"
            className="accent-tealBlue"
            id="rememberMe"
            name="rememberMe"
            checked={formik.values.rememberMe}
            onChange={formik.handleChange}
          />
          <label
            className="ml-2 block text-sm text-gray-600"
            htmlFor="rememberMe"
          >
            Se souvenir de moi
          </label>
        </div>
      </div>
      <div>
        <button
          type="submit"
          className="btn-primary relative flex w-full justify-center"
        >
          Se connecter
        </button>
      </div>
    </form>
  );
}

export default LoginForm;
