import SignupForm from '../components/signupPageComponents/SignupForm';

function SignupPage() {
  const backgroundImageUrl =
    'https://images.unsplash.com/photo-1642506539188-e8c357d521d6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
  return (
    <div
      className="flex min-h-screen flex-col justify-center bg-gray-800 bg-cover bg-center bg-blend-multiply"
      style={{ backgroundImage: `url(${backgroundImageUrl})` }}
    >
      <div className="mt-8 w-full sm:mx-auto sm:max-w-md">
        <div className="rounded-md bg-pinkishWhite px-8 py-12 shadow-md sm:rounded-lg">
          <h2 className="mb-6 text-center text-3xl font-extrabold uppercase text-darkishGreen">
            Créer un compte
          </h2>
          <SignupForm />
        </div>
      </div>
    </div>
  );
}

export default SignupPage;
