import {createContext, useState} from 'react'
import {Routes, Route} from 'react-router-dom';
import MainPage from './page/MainPage.js';
import AboutPage from './page/AboutPage.js';
import AboutPage1 from './page/AboutPage1.js';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import QuickButton from './components/QuickButton';
import SignUpForm from './page/SignUpForm';
import data from './data/data.js';
import UploadPage from './components/UploadPage.js';
import ProductPage from './components/ProductPage.js';
import Login from './components/Login.js';
import { AccessTokenProvider } from './components/AccessTokenContext.js';

const DataContext=createContext();

function App() {
  let [petdata]=useState(data);
  //console.log(petdata);

  return (
    <AccessTokenProvider>
      <DataContext.Provider value={{petdata}}>
        <div className="App">
          <Header />
          <Routes>
             <Route path="/" element={<MainPage />} />
             <Route path="/about" element={<AboutPage />} />
             <Route path="/about/:id" element={<AboutPage1 />} />
             <Route path="/signup" element={<SignUpForm />} />
             <Route path="/uploadpage" element={<UploadPage />} />
             <Route path="/products/:id" element={<ProductPage />} />
             <Route path="/login" element={<Login />} />
          </Routes>
          <Footer />
          <QuickButton />
        </div>
      </DataContext.Provider>
    </AccessTokenProvider>
    
  );
}

export default App;
export {DataContext}
