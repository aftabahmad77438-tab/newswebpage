
import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Navbarblock from './components/Navbarblock';

function App() {
  const [category,setcategory]=useState('general');
  return (
      <>
      
      
      
    <Navbar setcategory={setcategory}/>
      <h3 className='text-center'> Latest <span className="badge text-bg-danger ">News</span> </h3>
    <Navbarblock category={category}/>
      
      
      
      
      </>

  );
}

export default App;
