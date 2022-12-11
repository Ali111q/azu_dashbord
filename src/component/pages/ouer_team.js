import React, { Component } from 'react';
import MeerOur_Team from '../../td_file/MeerOur_Team';
import { addTeam,getTeams,updateTeam,getTeam } from '../../url/const';

export class MeerOurTeam extends Component {

    constructor(){
        super()
        this.state={
          error: null,
          isLoaded: false,
          items: [],
          id:1
        }
      }



    async  componentDidMount(){
  
  
        const response = await fetch(getTeams,{headers:{
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
        <h2 className='dataname'>meer our team</h2>

            <table>
                <tr>
                    <th> Id</th>
                    <th> name</th>
                    <th> img</th>
                    <th>title</th>
                    <th>remove</th>
                </tr>
                {this.state.items.map((e)=>{
                          return <MeerOur_Team 
                          id={e['_id']} name={e['name']} img={e['image']} title={e['title']} 
                           />
                        })}


</table>




<h1 className='title'>edit page</h1>
<table>
     <tr>  
     <th>meer our team</th>
     </tr>
     <tr>
        <td>
            <table>
                <tr>
                    <th>Id</th>
                    <th>name</th>
                    <th>img</th>
                    <th>title</th>
                </tr>

                <tr>
            <td>
              <span className="flex">
                <input id="teamid" className="input" onChange={((e)=>{

document.querySelector("#ourteam").innerHTML=`<button onClick={updatteam("teamid","teamname","teamimg","teamtitle",'${getTeam()}','${updateTeam()}')} class="save">save update</button>`
              }

                )}></input>
              </span>
            </td>
                    <td> <span className='flex'><input id='teamname' className='input' onChange={e => this.setState({ name: e.target.value })}></input></span> </td>
                    <td> <span className='flex'><input id='teamimg' className='input' onChange={e => this.setState({ img: e.target.value })}></input></span> </td>
                    <td> <span className='flex'><input id='teamtitle' className='input' onChange={e => this.setState({ title: e.target.value })}></input></span> </td>
                    {}

                </tr>


            </table>
        </td>
     </tr>
     <button className="save" onClick={()=>{
          const body=JSON.stringify({
            name:this.state.name,
            image:this.state.img,
            title:this.state.title,
            location:'none'
          })


          console.log(body);

      const json = fetch(addTeam,{
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

        x.innerHTML= 'the item is added successfully'
        x.className = "showw";
      
        setTimeout(function(){ x.className = x.className.replace("showw", ""); }, 3000);
        window.location.reload() 

       
    }
      })
             }}>save</button><div id='ourteam'></div>

</table>
      </div>
    );
  }
}

export default MeerOurTeam;
