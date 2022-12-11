import React, { Component } from 'react';
import { addFaq,getFaqs,updateFaq,getFaq } from '../../url/const';
import Tr_faq from '../../td_file/Faq';
export class Faq extends Component {

      constructor(){
        super()
        this.state={
          num:1,
          fields:[1],
          error: null,
          isLoaded: false,
          items: [],
          List:[],
        }
      }



    async  componentDidMount(){
  
  
        const response = await fetch(getFaqs,{headers:{
          "Authorization":`${localStorage.getItem("token")}`
        }});
          const json = await response.json();
          this.setState({ items: json });
             console.log(this.state.items);
      
             
          }
  render() {

    const addFild=()=> {
      this.state.fields.push(this.state.fields.length+1)
       this.setState({
         num:this.state.num+1
       })
         console.log(this.state.fields);
         }
    return (
      <div className='head' id="ans">
        <h1 className='title'>faq page</h1>

            <table>
                <tr>
                    <th> Id</th>
                    <th>title</th>
                    <th>show</th>
                    <th>remove</th>
                </tr>
                {this.state.items.map((e)=>{
                          return <Tr_faq 
                          id={e['_id']}  list={e['list']} title={e['title']} 
                           />
                        })}


</table>




<h1 className='title'>edit page</h1>

            <table>
                <tr>
                    <th>Id</th>
                
                  </tr>
                  <tr>
                  <td>
              <span className="flex">
                <input id="Faqid" className="input" onChange={((e)=>{document.querySelector("#ourFaq").innerHTML=`<button onClick={updatfaq('${getFaq()}','${updateFaq()}',)} class="save">save update</button>`})}></input>
              </span>
            </td>
                  </tr>

                  <tr>
                    <th>title</th>
                
                  </tr>
                  <tr>
                  <td>
              <span className="flex">
                <input id="Faqtitle" className="input" onChange={e => {this.setState({ title: e.target.value })}}></input>
              </span>
            </td>
                  </tr>


                      <button
                        className="add_Q"
                        onClick={() => {
                          addFild();
                        }}
                      >
                        add fild
                      </button>


                  <input id="this_Q" value={this.state.fields}></input>
                  {this.state.fields.map((e,index)=>{
                          return<span class="flex">
                            <textarea id={`input_Q${e}`}  className='inputt' onChange={(val)=>{
                              this.state.List[index]? this.state.List[index]['qu']=val.target.value:    this.state.List.push({qu:val.target.value,Ans:''})
                              document.getElementById("this_Q").value=this.state.fields;
                              console.log(this.state.fields);
                              document.getElementById(`input_A${e}`).readOnly=false;
                          }}></textarea>
                          <textarea id={`input_A${e}`} readOnly={true}  className='input1t'onChange={(val)=>{
                              this.state.List[index]? this.state.List[index]['answer']=val.target.value:   this.state.List[index]['answer']=val.target.value
                            
                              document.getElementById("this_Q").value=this.state.fields;
                              console.log(this.state.List);
                          }}
                          ></textarea>                          
                          </span>
                        
                  })}

                


<tr>
     <button className="save" onClick={()=>{
          const body=JSON.stringify({
            title:this.state.title,
            list:this.state.List
          })


          console.log(body);

      const json = fetch(addFaq,{
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
             }}>save</button><div id='ourFaq'></div></tr>
            </table>


      </div>
    );
  }
}

export default Faq;
