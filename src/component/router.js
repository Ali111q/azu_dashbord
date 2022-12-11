import React, { Component } from 'react';
import {  BrowserRouter, Routes,Route,useNavigate} from 'react-router-dom';
import Home from './home';
import Login from './login';
export class MyRouter extends Component {
    componentDidMount(){
        this.props.history.push("/login"); 

    }
  render() {
    return (    
      <></>

    );
  }
}

export default MyRouter;
