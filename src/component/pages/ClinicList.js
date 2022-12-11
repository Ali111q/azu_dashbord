import React, { Component } from "react";
import Spic_field from "../spic_field";
import { Clinic_List } from "../../td_file/ClinicList";
import { getClinics,addClinic,updateClinic,getClinic } from "../../url/const";

export class ClinicList extends Component {
  constructor(){
    super()
    this.state={
      num:1,
      fields:[1],
      error: null,
      isLoaded: false,
      items: [],
      id:'',
      spic:[1],
      value:1
    }
  }


 
async  componentDidMount(){
  
  
  const response = await fetch(getClinics,{headers:{
    "Authorization":`${localStorage.getItem("token")}`
  }});
    const json = await response.json();
    this.setState({ items: json });
       console.log(this.state.items);  
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
        
        <h1 className="title">Clinic list</h1>
        <table>
          <tr>
            <th>Clinic Id</th>
            <th>Clinic name</th>
            <th>Clinic title</th>
            <th>Clinic img</th>

          </tr>
          <tr>
            <td>
              <span className="flex">
                <input id="stateid" className="input" onChange={((e)=>{

document.querySelector("#pdatdoc").innerHTML=`<button onClick={updatclinic("stateid","statespic","statebody","statetitle","statelocation","statename","stateimg","stateratting","staterattingNumber",'${getClinic()}','${updateClinic()}')} class="save">save update</button>`
              }

                )}></input>
              </span>
            </td>

            <td>
              <span className="flex">
                <input className="input" id="statename" onChange={e => this.setState({ name: e.target.value })}></input>
              </span>
            </td>

            <td>
              <span className="flex">
                <input className="input" id="statetitle" onChange={e => this.setState({ title: e.target.value })}></input>
              </span>
            </td>

            <td>
              <span className="flex">
                <input className="input" id="stateimg" onChange={e => this.setState({ img: e.target.value })}></input>
              </span>
            </td>


          </tr>

          <tr>
            <th>Clinic location</th>
            <th>ratting num</th>
            <th>ratting</th>
          </tr>
          <tr>
          <td>
              <span className="flex">
                <input className="input" id="statelocation" onChange={e => this.setState({ location: e.target.value })}></input>
              </span>
            </td>



            <td>
              <span className="flex">
                <input className="input" id="staterattingNumber" type={"number"} onChange={e => this.setState({ rattingNumber: e.target.value })}></input>
              </span>
            </td>

            <td>
              <span className="flex">
                <input className="input" id="stateratting" type={"number"}  onChange={e => this.setState({ ratting: e.target.value })}></input>
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
                  <input id="thisstatespic1" value={this.state.fields}></input>
                  {this.state.fields.map((e,index)=>{
                          return <tr> <td> <span class="flex"><input id={`input_num1${e}`}  className='input' onChange={(val)=>{
                         this.state.spic[index]? this.state.spic[index]=val.target.value:   this.state.spic.push(val.target.value)
                            
                       document.getElementById("thisstatespic1").value=this.state.fields;
                       console.log(document.getElementById("thisstatespic1").value);
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
              <input className="input" id="statebody" onChange={e => {this.setState({ body: e.target.value })
                    console.log(this.state.body);}}></input>
              </span>
            </td>
          </tr>
                  <button className="save" onClick={()=>{

                      const body=JSON.stringify({


                    Specialties:this.state.spic ==[1]? this.state.items.Specialties:this.state.spic,
                    body:this.state.body,
                    type:this.state.title,
                    location:this.state.location,
                    clinicImage:this.state.img,
                    clinicName:this.state.name,
                    ratting:this.state.ratting,
                    rattingNumber:this.state.rattingNumber,
            
                      })
            
                      const json = fetch(addClinic,{
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
                  
                          x.innerHTML= 'the Clinic is added successfully'
                          x.className = "showw";
                        
                          setTimeout(function(){ x.className = x.className.replace("showw", ""); }, 3000);
                          window.location.reload() 
                  
                         
                      }
                        })
                    }}>Add Clinic</button><div id="pdatdoc"></div>
        </table>


        <h1 className="title">Clinic list</h1>
        <table>
          <tr>
            <th> Id</th>
            <th> name</th>
            <th> title</th>
            <th> more information</th>


            <th>remove</th>
          </tr>
          {this.state.items.map((e)=>{
                          return <Clinic_List 
                          id={e['_id']} name={e['clinicName']} title={e['type']} img={e['clinicImage']} location={e["location"]}  R_num={e['rattingNumber']}  ratting={e['ratting']} specialties={e['Specialties']} body={e['body']}
                           />
                        })}

        </table>

       
      </div>
      
    );
  }
}


export default ClinicList;
