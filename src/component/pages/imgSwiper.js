import React, { Component } from 'react';
import Img_Swiper from '../../td_file/Img_swiper';
import { getSwipers,addSwiper } from '../../url/const';

export class ImgSwiper extends Component {
  constructor(){
    super()
    this.state={
      error: null,
      isLoaded: false,
      items: []
    }
  }


  async  componentDidMount(){
  
  
    const response = await fetch(getSwipers,{headers:{
      "Authorization":`${localStorage.getItem("token")}`
    }});
      const json = await response.json();
      this.setState({ items: json });
         console.log(this.state.items);
  
         
      }
  render() {
    return (
      <div className='head' id="ans">
        <h1 className='title'>home page</h1>
        <table>
        <tr>

    <th>Img swiper Id</th>
    <th>Img swiper link</th>
    <th>remove</th>

  </tr>

  {this.state.items.map((e)=>{
                          return <Img_Swiper 
                          id={e['_id']} link={e['image']}
                           />
                        })}
        <tr>

        <td>

                    </td>
        </tr>

</table>


<h1 className='title'>edit page</h1>
        <table>
        <tr>

    <th>Img swiper link</th>

  </tr>
        <tr>
        <td> <span className='flex'><input  className='input'  onChange={e => this.setState({ link: e.target.value })}></input></span> </td>
        </tr>
        <button className="save" onClick={()=>{
          const body=JSON.stringify({
            image:this.state.link,

          })

          console.log(body);

      const json = fetch(addSwiper,{
        method:'post',
        headers: {
          'Content-Type': 'application/json',

            "Authorization":`${localStorage.getItem("token")}`

      },
        body:body,}).then((res)=>{
        console.log(res.status);
        if (res.status==400) {
          var x = document.getElementById("snackbar");
          x.innerHTML= 'failed please make sur that every field is fill '
          x.className = "showError";
        
          setTimeout(function(){ x.className = x.className.replace("showError", ""); }, 3000);
          
         
      }else if(res.status==404){
          var x = document.getElementById("snackbar");
          x.innerHTML= 'failed to connect'
          
          x.className = "showError";
        
          setTimeout(function(){ x.className = x.className.replace("showError", ""); }, 3000);  
      }else{
        var x = document.getElementById("snackbar");

        x.innerHTML= 'the image is added successfully'
        x.className = "showw";
      
        setTimeout(function(){ x.className = x.className.replace("showw", ""); }, 3000);
        window.location.reload() 

       
    }
      })
        }}>save</button>
</table>


      </div>
    );
  }
}

export default ImgSwiper;
