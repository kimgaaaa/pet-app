import {Routes, Route} from 'react-router-dom';
import MainPage from './page/MainPage.js';
import AboutPage from './page/AboutPage.js';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import QuickButton from './components/QuickButton';
import SignUpForm from './page/SignUpForm';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
         <Route path="/" element={<MainPage />} />
         <Route path="/about" element={<AboutPage />} />
         <Route path="/signup" element={<SignUpForm />} />
      </Routes>
      <Footer />
      <QuickButton />
    </div>
  );
}

export default App;
