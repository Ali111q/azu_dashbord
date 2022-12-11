import './App.css';
import {  BrowserRouter, Routes,Route} from 'react-router-dom'
import Home from './component/home';


function Appp(e){
  if(e=true){
      return(
        <BrowserRouter>
      <Routes>
        <Route path='/home' element={<Home/>}/>
      </Routes>
      </BrowserRouter>
  );
  }else{
    return (
      <>
      </>

    );
  }

}

export default Appp;