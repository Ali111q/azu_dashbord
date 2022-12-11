import React, { Component } from 'react';
import { getBlogs,addBlog,updateBlog,getBlog } from '../../url/const';
import Blogs from '../../td_file/blog';
export class Blog extends Component {

    constructor(){
        super()
        this.state={
          num:1,
          fields:[1],
          spic:[],
          error: null,
          isLoaded: false,
          items: [],
          
    
        }
      }
     
    async  componentDidMount(){
      
      
      const response = await fetch(getBlogs,{headers:{
        "Authorization":`${localStorage.getItem("token")}`
      }});
        const json = await response.json();
        this.setState({ items: json });
           console.log(json);
    
           
        }
  render() {
    return (
        <div className='head' id="ans">
                    <h1 className='title'>blog page</h1>
        <table>
        <tr>
            <th>document Id</th>
            <th>title</th>
            <th>img</th>
            <th>source</th>
            <th>wirtten By</th>
            <th>date</th>



        </tr>
        <tr>

                    <td> <span className='flex'> <input className="input" id='blogid' onChange={((e)=>{

document.querySelector("#updatblog").innerHTML=`<button onClick={updatBlog('blogid','blogtitle','blogimg','blogsource','blogwritter','blogdate','blogbpdy','${getBlog()}','${updateBlog()}')} class="save">save update</button>`
              }

                )} ></input></span> </td>
                    <td> <span className='flex'><input id='blogtitle'  className='input' onChange={e => this.setState({ title: e.target.value })}></input></span> </td>
                    <td> <span className='flex'><input id='blogimg' className='input' onChange={e => this.setState({ img: e.target.value })}></input></span> </td>
                    <td> <span className='flex'><input  id='blogsource' className='input' onChange={e => this.setState({ source: e.target.value })}></input></span> </td>
                    <td> <span className='flex'><input id='blogwritter'  className='input' onChange={e => this.setState({ writter: e.target.value })}></input></span> </td>
                    <td> <span className='flex'><input id='blogdate' type={"datetime-local"}  className='input'  onChange={e => this.setState({ date: e.target.value })}></input></span> </td>


        </tr>
        </table>
        <table>
        <tr>
            <th>
                body
            </th>
        </tr>
        <tr>
        <td> <span className='flex'><textarea id='blogbpdy'  onChange={e => this.setState({ body: e.target.value })} className='input1'></textarea></span> </td>

        </tr>
        <button className="save" onClick={()=>{
          const body=JSON.stringify({
            
            body:this.state.body,
            title:this.state.title,
            image:this.state.img,
            writter: this.state.writter,
            source: this.state.source,
            date: this.state.date,
          })


          console.log(body);

      const json = fetch(addBlog,{
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

        x.innerHTML= 'the blog is added successfully'
        x.className = "showw";
      
        setTimeout(function(){ x.className = x.className.replace("showw", ""); }, 3000);
        window.location.reload() 

       
    }
      })
        }}>Add blog</button><div id='updatblog'></div>
        </table>


        <h1 className='title'>blog page</h1>
        <table>
        <tr>
            <th>Id</th>
            <th>title</th>
            <th>more information</th>
            <th>remove</th>


        </tr>

        {this.state.items.map((e)=>{
            return <Blogs id={e['_id']} title={e['title']} body={e['body']} img={e['image']} source={e['source']} wirtten_By={e["writter"]} date={e["date"].toString().split('T')[0]} />
        })}

        </table>


         </div>
    );
  }
}

export default Blog;
