import React, { Component } from "react";
import Spic_field from "../spic_field";
import { DR_getAllDr,DR_addDr,DR_updateDoctor,DR_id_getDoctor  } from "../../url/const";
import Dr_list from "../../td_file/Dr_list";

export class Doctor extends Component {
  constructor(){
    super()
    this.state={
      num:1,
      fields:[1],
      error: null,
      isLoaded: false,
      items: [],
      spic:[1],
      is_male:false
      

    }
  }
 
async  componentDidMount(){
  
  
  const response = await fetch(DR_getAllDr,{headers:{
    "Authorization":`${localStorage.getItem("token")}`
  }});
    const json = await response.json();
    this.setState({ items: json });
       console.log(json);

       
    }


  render() {

   const addFild=()=> {
 this.state.fields.push(this.state.fields.length+1)
      // const td = document.createElement("tr");
      // td.innerHTML = ` <td> <span class="flex"><input id='hi${this.state.num}' class='input'></span> </td>`;
      // this.setState({num:this.state.num+1})
      // document.querySelector("#hear").appendChild(td);

  this.setState({
    num:this.state.num+1
  })
    console.log(this.state.fields);
    }
    return (
      <div className="head" id="ans">
        
        <h1 className="title">DR list</h1>
        <table>
          <tr>
            <th>DR Id</th>
            <th>DR name</th>
            <th>DR title</th>
            <th>DR img</th>

          </tr>
          <tr>
            <td>
              <span className="flex">
                <input className="input" id='thisstateid' onChange={((e)=>{
                  console.log(DR_id_getDoctor())

document.querySelector("#updatdoc").innerHTML=`<button onClick={updatdoc("thisstateid","thisstatespic","thisstatebody","non","thisstatetitle","thisstatelocation","thisstatename","thisstateimg","thisstateratting","thisstaterattingNumber","${DR_id_getDoctor()}","${DR_updateDoctor()}")} class="save">save update</button>`
              }

                )} ></input>
              </span>
            </td>

            <td>
              <span className="flex">
                <input id="thisstatename" className="input" onChange={e => this.setState({ name: e.target.value })}></input>
              </span>
            </td>

            <td>
              <span className="flex">
                <input className="input" id="thisstatetitle" onChange={e => this.setState({ title: e.target.value })}></input>
              </span>
            </td>

            <td>
              <span className="flex">
                <input className="input" id="thisstateimg" onChange={e => this.setState({ img: e.target.value })}></input>
              </span>
            </td>


          </tr>

          <tr>
            <th>DR location</th>
            <th>is male</th>
            <th>ratting num</th>
            <th>ratting</th>
          </tr>
          <tr>
          <td>
              <span className="flex">
                <input className="input" id="thisstatelocation" onChange={e => this.setState({ location: e.target.value })}></input>
              </span>
            </td>

            <td>
              <span className="flex">
                <input  id="_checkbox" type={'checkbox'} onChange={(e) => {
                document.querySelector("#updatdoc").innerHTML=`<button onClick={updatdoc("thisstateid","thisstatespic","thisstatebody","${this.state.is_male}","thisstatetitle","thisstatelocation","thisstatename","thisstateimg","thisstateratting","thisstaterattingNumber","${DR_id_getDoctor()}","${DR_updateDoctor()}")} class="save">save update</button>`;
                this.setState({ is_male: e.target.checked  })
}}></input>
                <label for="_checkbox">
  <div id="tick_mark"></div>
</label>
             
              </span>
            </td>

            <td>
              <span className="flex">
                <input className="input" id="thisstaterattingNumber" type={"number"} onChange={e => this.setState({ rattingNumber: e.target.value })}></input>
              </span>
            </td>

            <td>
              <span className="flex">
                <input className="input" id="thisstateratting" min="1" max="5" type={"number"} onChange={e => this.setState({ ratting: e.target.value })}></input>
              </span>

            </td>
          </tr>

          <tr>
            <th>specialties</th>
            <th>body</th>
          </tr>
          <tr>
            <td>
            <table>
              <span className="flex1">
                <div id="hear">
                  <tr>
                    <th>
                      <button
                        className="add_but"
                        onClick={() => {
                          addFild();
                        }}
                      >
                        add fild
                      </button>
                    </th>
                  </tr>

                  <input id="thisstatespic" value={this.state.fields}></input>
                  {this.state.fields.map((e,index)=>{
                          return <tr> <td> <span class="flex"><input id={`input_num${e}`}  className='input' onChange={(val)=>{
                         this.state.spic[index]? this.state.spic[index]=val.target.value:   this.state.spic.push(val.target.value)
                            
                       document.getElementById("thisstatespic").value=this.state.fields;
                       console.log(document.getElementById("thisstatespic").value);
                          }}/></span>
                           </td>
                          </tr>
                  })}
                </div>
              </span>
              </table>
            </td>
            <td>
              <span className="flex">
              <input id="thisstatebody" className="input" onChange={e => {this.setState({ body: e.target.value })
                    console.log(this.state.body);}}></input>
              </span>
            </td>
          </tr>
                  <button className="save" onClick={()=>{  
          var body=JSON.stringify({
                      id:this.state.id,
                      Specialties: this.state.spic,
                      body:this.state.body??this.state.items.body,
                      isMale:this.state.is_male,
                      jobTitle:this.state.title,
                      location:this.state.location,
                      name: this.state.name,
                      profileImage:this.state.img,
                      ratting: this.state.ratting <= 0 ||this.state.ratting >= 6 ? "":this.state.ratting,
                      rattingNumber:this.state.rattingNumber
          })
 const json = fetch(DR_addDr,{
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

        x.innerHTML= 'the doctor is added successfully'
        x.className = "showw";
      
        setTimeout(function(){ x.className = x.className.replace("showw", "");        
        window.location.reload();}, 1000);


       
    }
      })
      
        }}>Add Doctor</button><div id="updatdoc"></div>
        </table>


        <h1 className="title">DR list</h1>
        <table>
          <tr>
            <th>Id</th>
            <th>name</th>
            <th>title</th>
            <th>is male</th>
            <th>more information</th>
            <th>remove</th>
          </tr>
          {this.state.items.map((e)=>{
                          return <Dr_list 
                          id={e['_id']} name={e['name']} title={e['jobTitle']} img={e['profileImage']} location={e["location"]} is_male={e["isMale"]} R_num={e['rattingNumber']}  ratting={e['ratting']} specialties={e['Specialties']} body={e['body']}
                           />
                        })}
        </table>

       
      </div>
      
    );
  }
}

export default Doctor;
