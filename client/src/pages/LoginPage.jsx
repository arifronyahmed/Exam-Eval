import { Link } from 'react-router-dom';

function LoginPage() {
  return (
    <section className="h-screen bg-gray-600 bg-cover bg-center bg-blend-multiply ">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="text-darkishGreen mt-6 text-center text-3xl font-extrabold uppercase">
          Sign in to your account
        </h2>
        <p className="max-w mt-2 text-center text-sm text-gray-600">
          Or
          <Link
            to="/signup"
            className="font-medium text-blue-600 hover:text-blue-500"
          >
            create an account
          </Link>
        </p>
      </div>
      <div className="mt-8 w-full sm:mx-auto sm:max-w-md">
        <div className="bg-white px-4 py-8 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6">
            <div>
              <label className="form-label">Email</label>
              <div className="mt-1">
                <input
                  type="text"
                  className="form-input-title"
                  placeholder="Enter your email address"
                />
              </div>
            </div>
            <div>
              <label className="form-label">Password</label>
              <div className="mt-1">
                <input type="text" className="form-input-title" />
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input type="checkbox" className="accent-tealBlue" />
                <label className="ml-2 block text-sm text-gray-900">
                  Remember Me
                </label>
              </div>
              <div className="text-sm">
                <Link
                  href="#"
                  className="font-medium text-blue-600 hover:text-blue-500"
                >
                  Forgot your password?
                </Link>
              </div>
            </div>
            <div>
              <button className="bg-tealBlue relative flex w-full justify-center rounded-md border border-transparent px-4 py-2 text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default LoginPage;
