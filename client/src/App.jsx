import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/shared/Navbar';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import BlogsPage from './pages/BlogsPage';
import BlogDetailsPage from './pages/BlogDetailsPage';
import ContactPage from './pages/ContactPage';
import PageNotFound from './pages/PageNotFound';
import Plannings from './pages/Plannings';
import Footer from './components/shared/Footer';
import { AuthProvider } from './contexts/AuthContext';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <>
          <Navbar />
          <Routes>
            <Route index element={<HomePage />} />
            <Route path="/plannings" element={<Plannings />} />
            <Route path="/contacts" element={<ContactPage />} />
            <Route path="/blogs" element={<BlogsPage />} />
            <Route path="/blogs/:id" element={<BlogDetailsPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
          <Footer />
        </>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
