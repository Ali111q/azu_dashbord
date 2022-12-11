
import React, { Component } from 'react';
import Man_bar from './man_bar';
import Header from './Header';
import { useEffect } from 'react';
import {useNavigate} from'react-router-dom'


export function  Home()  {
  const navigate = useNavigate()
  useEffect(() => {
 !localStorage.getItem('token')? navigate('/login'):console.log();
 } );
    return(
    <div className="App">
      <Header></Header>
      <Man_bar/>
    </div>
    )

}
export default Home;