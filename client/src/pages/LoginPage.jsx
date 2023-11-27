import { Link } from 'react-router-dom';

function LoginPage() {
  const backgroundImageUrl =
    'https://images.unsplash.com/photo-1599586120429-48281b6f0ece?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
  return (
    <section
      className="flex h-screen items-center justify-center bg-gray-800 bg-cover bg-center bg-blend-multiply"
      style={{ backgroundImage: `url(${backgroundImageUrl})` }}
    >
      <div className="w-full max-w-md">
        <div className="form-backdrop-style bg-gray/50 flex h-full flex-col justify-center">
          <h2 className="blog-title mb-6 text-center text-2xl font-extrabold uppercase">
            Connectez-vous à votre compte
          </h2>
          <p className="text-center text-sm text-gray-600">
            Ou{' '}
            <Link
              to="/signup"
              className="font-medium text-blue-600 hover:text-blue-500"
            >
              créez un compte
            </Link>
          </p>

          <form className="mt-8 space-y-6">
            <div>
              <label className="form-label">E-mail</label>
              <div className="mt-1">
                <input
                  type="text"
                  className="form-input-title"
                  placeholder="Entrez votre adresse e-mail"
                />
              </div>
            </div>
            <div>
              <label className="form-label">Mot de passe</label>
              <div className="mt-1">
                <input
                  type="password"
                  className="form-input-title"
                  placeholder="Entrez votre mot de passe"
                />
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input type="checkbox" className="accent-tealBlue" />
                <label className="ml-2 block text-sm text-gray-600">
                  Se souvenir de moi
                </label>
              </div>
              <div className="text-sm">
                <Link
                  to="#"
                  className="font-medium text-blue-600 hover:text-blue-500"
                >
                  Mot de passe oublié ?
                </Link>
              </div>
            </div>
            <div>
              <button className="btn-primary relative flex w-full justify-center">
                Se connecter
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default LoginPage;
