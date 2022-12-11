import React, { Component } from 'react';
import Sirves_Type from '../../td_file/Sirves_Type';
import { getServiess,addServies } from '../../url/const';
export class SirvesType extends Component {



    constructor(){
        super()
        this.state={
          error: null,
          isLoaded: false,
          items: []
        }
      }
    
    
      async  componentDidMount(){
      
      
        const response = await fetch(getServiess,{headers:{
          "Authorization":`${localStorage.getItem("token")}`
        }});
          const json = await response.json();
          this.setState({ items: json });
             console.log(this.state.items);
      
             
          }
  render() {
    return (
      <div className='head' id="ans">

        <h1 className='title'>Service</h1>

            <div className="row_sre">
                {this.state.items.map((e)=>{
                          return <Sirves_Type 
                          id={e['_id']} title={e['title']} img={e['type']} body={e['body']} firstImages={e['firstImages']} firstTitle={e['firstTitle']} firstBody={e['firstBody']} secondImages={e['secondImages']} secondTitle={e['secondTitle']} secondBody={e['secondBody']} thirdTitle={e['thirdTitle']} thirdBody={e['thirdBody']} fourthTitle={e['fourthTitle']} fourthBody={e['fourthBody']} perks={e['perks']} firstPerkBody={e['firstPerkBody']} secondPerk={e['secondPerk']} firstPerkCircle={e['firstPerkCircle']} secondPerkCircle={e['secondPerkCircle']} fifth={e['fifth']} 
                           />
                        })}
            </div>

<h1 className='title'>edit page</h1>

     <table className='ADD'>


  <div className="dr_body">
  <div className="sigma_service" id="Ksigma_service">
         <div className="sigma_service_flex">
         <div className="sigma_service-thumb">
         <input type={'number'}  className="h1_input_dashbordfont" onChange={e => this.setState({ type: e.target.value })} />
         </div>
          <div className="sigma_service-body">
           <input type="text"  className="h1_input_dashbordfont" onChange={e => this.setState({ title: e.target.value })}/>
           <textarea className="p_input_dashbordfont" onChange={e => this.setState({ body: e.target.value })}/>
           </div>
       </div>
    </div>

  <div className="firest_con">
    <textarea className="firstImagestext" id="" onChange={e => this.setState({ KfirstImages0: e.target.value })}/>
      <ul>
    <textarea className="firstImagestextw" id="" onChange={e => this.setState({ KfirstImages1: e.target.value })}/>
    <textarea className="firstImagestextw" id=""onChange={e => this.setState({ KfirstImages2: e.target.value })}/>
    <textarea className="firstImagestextw" id="" onChange={e => this.setState({KfirstImages3 : e.target.value })}/>

      </ul>
    <textarea className="h1_input_dashbordfont" id="" onChange={e => this.setState({KfirstTitle : e.target.value })}/>
    <textarea className="p_input_dashbordfont" id="" onChange={e => this.setState({KfirstBody : e.target.value })}/>

          
  </div>
  <div className="divspac"></div>
  <div className="second_con">

    <textarea className="h1_input_dashbordfont" id="" onChange={e => this.setState({KsecondTitle : e.target.value })}/>
    <textarea className="p_input_dashbordfont" id="" onChange={e => this.setState({KsecondBody : e.target.value })}/>

      <div className="divspac"></div>
    <textarea className="firstImagestext" id="" onChange={e => this.setState({KsecondImages : e.target.value })}/>



  </div>
  <div className="divspac"></div>
  <div className="third">

  <textarea className="h1_input_dashbordfont" id="" onChange={e => this.setState({kthirdTitle : e.target.value })}/>
  <textarea className="p_input_dashbordfont" id="" onChange={e => this.setState({kthirdBody : e.target.value })}/>


  </div>
  <div className="divspac"></div>


  <div className="third">

    <textarea className="h1_input_dashbordfont" id="" onChange={e => this.setState({ KfourthTitle: e.target.value })}/>
    <textarea className="p_input_dashbordfont" id="" onChange={e => this.setState({ KfourthBody: e.target.value })}/>

  </div>
  <div className="divspac"></div>

  <h1 className="h1_dashbordfont">Perks</h1>
  <div className="divspac"></div>

  <div className="Perks">
      

      <div className="divspan">
          <div className="svg_cont">
              <svg xmlns="http://www.w3.org/2000/svg" id="KOutline" viewBox="0 0 24 24" width="3vw" height="3vw"><path d="M12,12A6,6,0,1,0,6,6,6.006,6.006,0,0,0,12,12ZM12,2A4,4,0,1,1,8,6,4,4,0,0,1,12,2Z"></path><path d="M12,14a9.01,9.01,0,0,0-9,9,1,1,0,0,0,2,0,7,7,0,0,1,14,0,1,1,0,0,0,2,0A9.01,9.01,0,0,0,12,14Z"></path></svg>
          </div>
          <div className="divspac"></div>

    <textarea className="h1_input_dashbordfont" id="" onChange={e => this.setState({ Kperks0t: e.target.value })}/>

                    <div className="divspac"></div>
    <textarea className="p_input_dashbordfont" id="" onChange={e => this.setState({ Kperks0b: e.target.value })}/>
        
      </div>
      
      <div className="divspan">
          <div className="svg_cont">
              <svg xmlns="http://www.w3.org/2000/svg" id="KOutline" viewBox="0 0 24 24" width="3vw" height="3vw"><path d="M12,12A6,6,0,1,0,6,6,6.006,6.006,0,0,0,12,12ZM12,2A4,4,0,1,1,8,6,4,4,0,0,1,12,2Z"></path><path d="M12,14a9.01,9.01,0,0,0-9,9,1,1,0,0,0,2,0,7,7,0,0,1,14,0,1,1,0,0,0,2,0A9.01,9.01,0,0,0,12,14Z"></path></svg>
          </div>
          <div className="divspac"></div>

    <textarea className="h1_input_dashbordfont" id="" onChange={e => this.setState({ Kperks1t: e.target.value })}/>

          <div className="divspac"></div>
    <textarea className="p_input_dashbordfont" id=""onChange={e => this.setState({ Kperks1b: e.target.value })}/>


      </div>

  </div>
  <div className="divspac"></div>
  <div className="divspac"></div>

    <textarea className="p_input_dashbordfont" id="" onChange={e => this.setState({ KfirstPerkBody: e.target.value })}/>

  
  <div className="divspac"></div>


  <div className="secondbodyproc">
      <div className="secondbodyproc_body">
          <div className="divspac"></div>
    <textarea className="p_input_dashbordfont" id="" onChange={e => this.setState({ KsecondPerkbody: e.target.value })}/>

          <div className="divspac"></div>

          
<div className='persint'>
<span>
<input className="p_input_dashbordfont" id="" onChange={e => this.setState({KfirstPerkCircle : e.target.value })}/>
    <input type={'number'} className="p_input_dashbordfont" id="" onChange={e => this.setState({ KfirstPerkCirclePER: e.target.value })}/>
</span>
<span>
<input className="p_input_dashbordfont" id=""onChange={e => this.setState({ KfirstPerkCircle1: e.target.value })}/>
    <input type={'number'} className="p_input_dashbordfont" id="" onChange={e => this.setState({ KfirstPerkCirclePER1: e.target.value })}/>
</span></div>
<div>


          </div>
      </div>
    <textarea className="secondbodyproctext" id="" onChange={e => this.setState({ KsecondPerkimg: e.target.value })}/>

      
  </div>
  
  <div className="divspac"></div>
  <div className="divspac"></div>


  <div className="secondbod_yproc">
    <textarea className="secondbodyproctext"  onChange={e => this.setState({ fifthimg: e.target.value })}/>

    <textarea className="p_input_dashbordfont" onChange={e => this.setState({ fifthbody1: e.target.value })}/>

  </div>
  <div className="divspac"></div>
  <div className="divspac"></div>
  

    <textarea className="p_input_dashbordfont" onChange={e => this.setState({ fifthbody2: e.target.value })}/>
  <div className="divspac"></div>
  <div className="divspac"></div>


</div>

<button className="save" onClick={()=>{
  console.log(this.state.items)
  

  var body=JSON.stringify({
    body: this.state.body,
    fifth: {
        body1:this.state.fifthbody1,
        body2:this.state.fifthbody2,
        img: this.state.fifthimg,
    },
    firstBody: this.state.KfirstBody,
    firstImages:[ 
      this.state.KfirstImages0,
      this.state.KfirstImages1,
      this.state.KfirstImages2,
      this.state.KfirstImages3,
    ],
    firstPerkBody: this.state.KfirstPerkBody,
    firstPerkCircle:{
    perk: this.state.KfirstPerkCirclePER,
    title: this.state.KfirstPerkCircle,
    },
    firstTitle: this.state.KfirstTitle,
    fourthBody: this.state.KfourthBody,
    fourthTitle: this.state.KfourthTitle,
    perks:[
        {
    body: this.state.Kperks0b,
    image: "image",
    title: this.state.Kperks0t,
        },
        {
          body: this.state.Kperks1b,
          image: "image",
          title: this.state.Kperks1t,
                }
    ],

    secondBody: this.state.KsecondBody,
    secondImages: this.state.KsecondImages,
    secondPerk:{ 
    body: this.state.KsecondPerkbody,
    img: this.state.KsecondPerkimg,
 
    },
    secondPerkCircle:{
    per: this.state.KfirstPerkCirclePER1,
    title: this.state.KfirstPerkCircle1, 
    },

    secondTitle: this.state.KsecondTitle,
    thirdBody: this.state.kthirdBody,
    thirdTitle: this.state.kthirdTitle,
    title: this.state.title,
    type:this.state.type,

  })
  console.log(body);
const json = fetch(addServies,{
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

  setTimeout(function(){ x.className = x.className.replace("showw", ""); }, 3000);

 
}
})
}}> add Service</button>
</table>

      </div>
    );
  }
}

export default SirvesType;