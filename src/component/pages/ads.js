import React, { Component } from 'react';
import { updateAd,getAds,getAd } from '../../url/const';
import Ads from '../../td_file/ads';
export class Home extends Component {
  constructor(){
    super()
    this.state={
      error: null,
      isLoaded: false,
      items: []
    }
  }


  async  componentDidMount(){
  
  
    const response = await fetch(getAds,{headers:{
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

    <th>key</th>
    <th>value</th>

  </tr>
                  
  {this.state.items.map((e)=>{
                          return <Ads 
                          title={e['title']} body={e['body']} img={e['img']} firstIconTitle={e['firstIconTitle']} firstIconBody={e['firstIconBody']} secondIconTitle={e['secondIconTitle']} secondIconBody={e['secondIconBody']} numbers={e['numbers']} 
                           />
                        })}



</table>












<h1 className='title'>edit page</h1>
        <table>
        <tr>

    <th>ADS iformation key</th>
    <th>ADS iformation value</th>
    {/* <th>What Our Clients Say</th>
    <th>meer our team</th>
    <th>sub block</th>
    <th>what we do</th>
    <th>img swiper</th>
    <th> services type</th> */}
  </tr>


  

        <tr>
          <td> <span className='flex'>ADS title</span> </td>
          <td> <span className='flex'><input  className='input'  onChange={(e)=>{this.setState({title:e.target.value})}} ></input></span> </td>
        </tr>
        <tr>
        <td> <span className='flex'>ADS body</span> </td>
          <td> <span className='flex'><input  className='input' onChange={(e)=>{this.setState({body:e.target.value})}}></input></span> </td>
        </tr>
        <tr>
        <td> <span className='flex'>ADS img</span> </td>
          <td> <span className='flex'><input  className='input' onChange={(e)=>{this.setState({image:e.target.value})}}></input></span> </td>
        </tr>
        <tr>
        <td> <span className='flex'>first icon img</span> </td>
          <td> <span className='flex'><input  className='input' onChange={(e)=>{this.setState({firstIcon:e.target.value})}}></input></span> </td>
        </tr>
        <tr>
        <td> <span className='flex'>first icon title</span> </td>
          <td> <span className='flex'><input  className='input' onChange={(e)=>{this.setState({firstIconTitle:e.target.value})}}></input></span> </td>
        </tr>
        <tr>
        <td> <span className='flex'>first icon body</span> </td>
          <td> <span className='flex'><input  className='input' onChange={(e)=>{this.setState({firstIconBody:e.target.value})}}></input></span> </td>
        </tr>
        <tr>
        <td> <span className='flex'>second icon img</span> </td>
          <td> <span className='flex'><input  className='input' onChange={(e)=>{this.setState({secondIcon:e.target.value})}}></input></span> </td>
        </tr>
        <tr>
        <td> <span className='flex'>second icon title</span> </td>
          <td> <span className='flex'><input  className='input' onChange={(e)=>{this.setState({secondIconTitle:e.target.value})}} ></input></span> </td>
        </tr>
        <tr>
        <td> <span className='flex'>second icon title</span> </td>
          <td> <span className='flex'><input  className='input' onChange={(e)=>{this.setState({secondIconBody:e.target.value})}} ></input></span> </td>
        </tr>

        <tr>
          <td> <span className='flex'>num 1 title</span> </td>
          <td> <span className='flex'><input  className='input' onChange={(e)=>{this.setState({firstNumberTitle:e.target.value})}}></input></span> </td>
        </tr>
        <tr>
          <td> <span className='flex'>num 1 any</span> </td>
          <td> <span className='flex'><input  className='input' onChange={(e)=>{this.setState({firstNumber:e.target.value})}}></input></span> </td>
        </tr>
        <tr>
          <td> <span className='flex'>num 2 title</span> </td>
          <td> <span className='flex'><input  className='input' onChange={(e)=>{this.setState({secondNumberTitle:e.target.value})}}></input></span> </td>
        </tr>
        <tr>
          <td> <span className='flex'>num 2 any</span> </td>
          <td> <span className='flex'><input  className='input' onChange={(e)=>{this.setState({secondNumber:e.target.value})}}></input></span> </td>
        </tr>

<tr>
          <td> <span className='flex'>num 3 title</span> </td>
          <td> <span className='flex'><input  className='input' onChange={(e)=>{this.setState({thirdNumberTitle:e.target.value})}}></input></span> </td>
        </tr>
        <tr>
          <td> <span className='flex'>num 3 any</span> </td>
          <td> <span className='flex'><input  className='input' onChange={(e)=>{this.setState({thirdNumber:e.target.value})}}></input></span> </td>
        </tr>

        <tr>
          <td> <span className='flex'>num 4 title</span> </td>
          <td> <span className='flex'><input  className='input' onChange={(e)=>{this.setState({fourthNumberTitle:e.target.value})}}></input></span> </td>
        </tr>
        <tr>
          <td> <span className='flex'>num 4 any</span> </td>
          <td> <span className='flex'><input  className='input' onChange={(e)=>{this.setState({fourthNumber:e.target.value})}} ></input></span> </td>
        </tr>
        <button className="save" onClick={async()=>{
    var idd ="633627812883e7b4e138a032"
    var link =getAd(idd); 
 
    var xml = new XMLHttpRequest(); 
    var defaultData;

    xml.open("GET", link); 
     
    xml.setRequestHeader("Content-Type", "application/json"); 
    xml.setRequestHeader("Authorization",`${localStorage.getItem("token")}`)

     
    xml.onreadystatechange = function () { 
       if (xml.readyState === 4) { 
          console.log(xml.status); 
          
          defaultData= JSON.parse( xml.response) 
       }}; 
     
    
     
    xml.send();

xml.onloadend = ()=>{
    console.log(defaultData);

    var xhr = new XMLHttpRequest(); 

var url =updateAd(idd); 


xhr.open("PATCH", url); 
 
xhr.setRequestHeader("Content-Type", "application/json");
xhr.setRequestHeader("Authorization",`${localStorage.getItem("token")}`)
 
xhr.onreadystatechange = function () { 
   if (xhr.readyState === 4) { 
      console.log(xhr.status); 
      console.log(xhr.responseText); 
   }};

 
   var data =JSON.stringify({ 
    "title":this.state.title==null||""?defaultData.title:this.state.title,
    "body": this.state.body==null||""?defaultData.body:this.state.body,
    "firstIconBody": this.state.firstIconBody==null||""?defaultData.firstIconBody:this.state.firstIconBody,
    "firstIconTitle": this.state.firstIconTitle==null||""?defaultData.firstIconTitle:this.state.firstIconTitle,
    "img": this.state.image==null||""?defaultData.img:this.state.image,
    "secondIconBody": this.state.secondIconBody==null||""?defaultData.secondIconBody:this.state.secondIconBody,
    "secondIconTitle": this.state.secondIconTitle==null||""?defaultData.secondIconTitle:this.state.secondIconTitle,
    "numbers": [ 
              { 
                  "title": this.state.firstNumberTitle==null||""?defaultData.numbers[0]['title']:this.state.firstNumberTitle, 
                  "number": this.state.firstNumber==null||""?defaultData.numbers[0]['number']:this.state.firstNumber, 
              },
              { 
                  "title": this.state.secondNumberTitle==null||""?defaultData.numbers[1]['title']:this.state.secondNumberTitle, 
                  "number": this.state.secondNumber==null||""?defaultData.numbers[1]['number']:this.state.secondNumber,
              },
              { 
                "title": this.state.thirdNumberTitle==null||""?defaultData.numbers[2]['title']:this.state.thirdNumberTitle, 
                "number": this.state.thirdNumber==null||""?defaultData.numbers[2]['number']:this.state.thirdNumber, 
              },
              {
                "title": this.state.fourthNumberTitle==null||""?defaultData.numbers[3]['title']:this.state.fourthNumberTitle,
                "number": this.state.fourthNumber==null||""?defaultData.numbers[3]['number']:this.state.fourthNumber,
              } 
          ] 
  }); 
 
xhr.send(data);

}
        }}>save</button>


</table>

      </div>
    );
  }
}

export default Home;




