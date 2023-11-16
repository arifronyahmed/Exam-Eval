import SignupForm from '../components/signupPageComponents/SignupForm';

function SignupPage() {
  return (
    <div className="flex min-h-screen flex-col justify-center bg-gray-100 py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="text-darkishGreen mt-6 text-center text-3xl font-extrabold uppercase">
          Create an account
        </h2>
      </div>
      <div className="mt-8 w-full sm:mx-auto sm:max-w-md">
        <div className="bg-white px-4 py-8 shadow sm:rounded-lg sm:px-10">
          <SignupForm />
        </div>
      </div>
    </div>
  );
}

export default SignupPage;
