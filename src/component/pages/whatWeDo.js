import React, { Component } from 'react';
import What_WeDo from '../../td_file/What_WeDo';
import { addDo,getDos,updateDo,getDo } from '../../url/const';
export class WhatWeDo extends Component {




    constructor(){
        super()
        this.state={
          error: null,
          isLoaded: false,
          items: []
        }
      }
    
    
      async  componentDidMount(){
      
      
        const response = await fetch(getDos,{headers:{
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
     <th>WhatWeDo</th>
     </tr>
     <tr>
        <td>
            <table>
                <tr>
                    <th>block Id</th>
                    <th> title</th>
                    <th> show </th>
                    <th>remove</th>
                </tr>

                {this.state.items.map((e)=>{
                          return <What_WeDo 
                          id={e['_id']} title={e['title']} img={e['image']} body={e['body']}
                           />
                        })}
            </table>
        </td>
     </tr>
</table>




<h1 className='title'>edit page</h1>
<table>
     <tr>  
     <th>WhatWeDo</th>
     </tr>
     <tr>
        <td>
            <table>
                <tr>
                    <th>block Id</th>
                    <th> title</th>
                    <th> img</th>
                    <th> body</th>
                </tr>

                <tr>
            <td>
              <span className="flex">
                <input id="Doid" className="input" onChange={((e)=>{

document.querySelector("#updatDo").innerHTML=`<button onClick={updatDo("Doid","Doname","Doimg","Dotitle",'${getDo()}','${updateDo()}')} class="save">save update</button>`
              }

                )}></input>
              </span>
            </td>
                    <td> <span className='flex'><input id='Doname' className='input' onChange={e => this.setState({ title: e.target.value })}></input></span> </td>
                    <td> <span className='flex'><input id='Doimg' className='input' onChange={e => this.setState({ img: e.target.value })}></input></span> </td>
                    <td> <span className='flex'><input id='Dotitle' className='input' onChange={e => this.setState({ body: e.target.value })}></input></span> </td>
                    {}

                </tr>
            </table>
        </td>
     </tr>
     <button className="save" onClick={()=>{
          const body=JSON.stringify({
            body:this.state.body,
            image:this.state.img,
            title: this.state.title,
          })

          console.log(body);

      const json = fetch(addDo,{
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

        x.innerHTML= 'the item is added successfully'
        x.className = "showw";
      
        setTimeout(function(){ x.className = x.className.replace("showw", ""); }, 3000);
        window.location.reload()
    }
      })
        }}>save</button><div id='updatDo'></div>

</table>

      </div>
    );
  }
}

export default WhatWeDo;