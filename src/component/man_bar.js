import React, { Component } from "react";
import ListElement from "./ListElement";
import Home from "./pages/ads";
import Clinics from "./pages/clinics";
import Doctor from "./pages/doctor";
import MeerOurTeam from "./pages/ouer_team";
import ImgSwiper from "./pages/imgSwiper";
import ClientsSay from "./pages/ClientsSay";
import WhatWeDo from "./pages/whatWeDo";
import SirvesType from "./pages/serviesType";
import ClinicList from "./pages/ClinicList";
import Blog from "./pages/Blog";
import Faq from "./pages/faq";
import ReactDOM from 'react-dom';

class Man_bar extends Component{ 
    constructor() {
        super()
        this.state = {
          selelcted: localStorage.getItem('selected')??1,
          check:2
        }
    }
componentDidMount(){
  const index = localStorage.getItem('selected')
  this.setState({selected:index})
}
    animate(){
      var s =document.querySelector('#an');
      var ss =document.querySelector('#ans');
      if(this.state.check == 1){
        this.setState({
          check:2
        })
      s.style='left: -25%';
    }
      else{
        this.setState({
          check:1
        })
        s.style='left: 0';

        
      }
    }

    onClick(ind) {
        { this.setState({ selelcted: ind }) }
        localStorage.setItem('selected', ind);
        console.log(localStorage.getItem('selected'));



      }

    render () {
  const pages = [{ pageName: "ADS",id:1,  route: <Home></Home>,  },{ pageName: "Meer Our Team",id:3, route: <MeerOurTeam/>,  },{ pageName: "Img Swiper",id:4, route: <ImgSwiper/>,  },{ pageName: "What Our Clients Say",id:5, route: <ClientsSay/>,  },{ pageName: "What We Do",id:5, route: <WhatWeDo/>,  },{ pageName: "Serves Type",id:5, route: <SirvesType/>,  }, { pageName: " Doctor list",id:6, route: <Doctor/>,  },  { pageName: " Clinic list",id:7, route: <ClinicList/>,},  { pageName: " Blog",id:7, route: <Blog/>,},{ pageName: " Faq",id:7, route: <Faq/>,}];
  return (
<>
    <div>

    {pages[this.state.selelcted]['route']}
  </div>
    
    <div className="min_bar" id="an">
    <button id="logout" onClick={()=>{
        localStorage.removeItem('token');
        window.location.reload()
      }}>log out</button>
    <button  className="mv_bar" onClick={()=>{
      this.animate()
    }} >
        <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="2vw" height="2vw"><path d="M7,6H23a1,1,0,0,0,0-2H7A1,1,0,0,0,7,6Z"/><path d="M23,11H7a1,1,0,0,0,0,2H23a1,1,0,0,0,0-2Z"/><path d="M23,18H7a1,1,0,0,0,0,2H23a1,1,0,0,0,0-2Z"/><circle cx="2" cy="5" r="2"/><circle cx="2" cy="12" r="2"/><circle cx="2" cy="19" r="2"/></svg>
        </button>
      <ul className="logoAndName">

        <h2>dashboard</h2>
      </ul>
      <ul className="list">

            {pages.map((e,index)=>{ return <span className="list_element"><ListElement onCLick={()=>
                this.onClick(index)
            } name = {e.pageName}></ListElement></span>})}
       
        
      </ul>

    </div>
    </>
  );
};
}

export default Man_bar;
