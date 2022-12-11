import React, { Component } from 'react';
import Clients_Say from '../../td_file/Clients_Say';
import { addClient,getClients,updateClient,getClient } from '../../url/const';
export class ClientsSay extends Component {


    constructor(){
        super()
        this.state={
          error: null,
          isLoaded: false,
          items: []
        }
      }
    
    
      async  componentDidMount(){
      
      
        const response = await fetch(getClients,{headers:{
          "Authorization":`${localStorage.getItem("token")}`
        }});
          const json = await response.json();
          this.setState({ items: json });
             console.log(this.state.items);
      
             
          }
  render() {
    return (
      <div className='head' id="ans">
                <h1 className='title'>edit page</h1>
<table>
     <tr>  
     <th>ClientsSay</th>
     </tr>
     <tr>
        <td>
            <table>
                <tr>
                    <th>Clients Id</th>
                    <th>Clients name</th>
                    <th>Clients img</th>
                    <th>Clients body</th>
                </tr>

                <tr>
            <td>
              <span className="flex">
                <input id="Clientid" className="input" onChange={((e)=>{

document.querySelector("#updatClient").innerHTML=`<button onClick={updatClient("Clientid","Clientname","Clientimg","Clienttitle",'${getClient()}','${updateClient()}')} class="save">save update</button>`
              }

                )}></input>
              </span>
            </td>
                    <td> <span className='flex'><input id='Clientname' className='input' onChange={e => this.setState({ name: e.target.value })}></input></span> </td>
                    <td> <span className='flex'><input id='Clientimg' className='input' onChange={e => this.setState({ img: e.target.value })}></input></span> </td>
                    <td> <span className='flex'><input id='Clienttitle' className='input' onChange={e => this.setState({ body: e.target.value })}></input></span> </td>
                    {}

                </tr>
            </table>
        </td>
     </tr>     <button className="save" onClick={()=>{
          const body=JSON.stringify({
            body:this.state.body,
            name: this.state.name,
            image:this.state.img,
          })
          const json = fetch(addClient,{
            method:'post',
            headers:{
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
      
              x.innerHTML= 'the comint is added successfully'
              x.className = "showw";
            
              setTimeout(function(){ x.className = x.className.replace("showw", ""); }, 3000);
              window.location.reload() 
      
             
          }
            })
        }}>save</button><div id='updatClient'></div>
</table>




















        <h1 className='title'>home page</h1>
<table>
     <tr>  
     <th>ClientsSay</th>
     </tr>
     <tr>
        <td>
            <table>
                <tr>
                    <th>Clients Id</th>
                    <th>Clients name</th>
                    <th>show</th>
                    <th>remove</th>
                </tr>

                
                {this.state.items.map((e)=>{
                          return <Clients_Say 
                          id={e['_id']} name={e['name']} img={e['image']} body={e['body']}
                           />
                        })}
            </table>
        </td>
     </tr>
</table>
      </div>
    );
  }
}

export default ClientsSay;
