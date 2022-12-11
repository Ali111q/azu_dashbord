import React, { Component } from 'react';
import { deleteSwiper } from '../url/const';

export function Img_Swiper({id,link}) {
    

    return (
        <>



        <tr id={id}>
        <td><span className="flex">
          <button onClick={async () => {
  if ("clipboard" in navigator) {
    await navigator.clipboard.writeText(id);
  } else {
    document.execCommand("copy", true, id);
  }
}} className="flexbuton">
  <svg id="id-card-pass-svgrepo-com" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 508 508">
  <circle id="Ellipse_1" data-name="Ellipse 1" cx="254" cy="254" r="254" fill="#324a5e"/>
  <path id="Path_1" data-name="Path 1" d="M354.4,451.2H153.6A17.073,17.073,0,0,1,136.4,434V136.4a17.073,17.073,0,0,1,17.2-17.2H354.8A17.073,17.073,0,0,1,372,136.4V434A17.415,17.415,0,0,1,354.4,451.2Z" fill="#fff"/>
  <rect id="Rectangle_1" data-name="Rectangle 1" width="192.4" height="190" transform="translate(157.6 167.2)" fill="#84dbff"/>
  <g id="Group_1" data-name="Group 1">
    <rect id="Rectangle_2" data-name="Rectangle 2" width="169.2" height="13.6" transform="translate(169.6 376.8)" fill="#e6e9ee"/>
    <rect id="Rectangle_3" data-name="Rectangle 3" width="169.2" height="13.6" transform="translate(169.6 408.4)" fill="#e6e9ee"/>
  </g>
  <path id="Path_2" data-name="Path 2" d="M288.4,148.8H219.6a7.17,7.17,0,0,1-7.2-7.2h0a7.17,7.17,0,0,1,7.2-7.2h69.2a7.17,7.17,0,0,1,7.2,7.2h0A7.268,7.268,0,0,1,288.4,148.8Z" fill="#324a5e"/>
  <rect id="Rectangle_4" data-name="Rectangle 4" width="58.4" height="84.8" transform="translate(224.8 56.8)" fill="#5ba0ff"/>
  <path id="Path_3" data-name="Path 3" d="M298,313.6a109.836,109.836,0,0,0-10.8-14.4l-.4-4c6.4-2.8,7.6-19.6,7.6-19.6,10.8,1.6,10.8-18.8,10.8-18.8,1.6-15.6-8-10-8-10,8.8-6.8,8-17.6,8-17.6,12.8-28.8-13.6-30.4-13.6-30.4-1.6-25.6-40-22.4-40-22.4-39.2-2-45.2,37.6-45.2,37.6-2,15.6,9.6,32.8,9.6,32.8-12.8-4.4-8.8,6.8-8.8,6.8,6.8,31.6,12.4,21.2,12.4,21.2-2,8,6.4,16,6.4,16l-.4,4.8c-3.2,1.2-14,17.2-14,17.2-4.8-.4-54,19.2-54,19.2v25.2H350V336.4C335.2,329.2,298,313.6,298,313.6Z" fill="#54c0eb"/>
  <circle id="Ellipse_2" data-name="Ellipse 2" cx="16.8" cy="16.8" r="16.8" transform="translate(237.2 67.6)" fill="#fff"/>
  <ellipse id="Ellipse_3" data-name="Ellipse 3" cx="7.2" cy="3.2" rx="7.2" ry="3.2" transform="translate(240.707 80.857) rotate(-41.729)" fill="#e6e9ee"/>
</svg>

</button></span>
        </td>
        <td> <span className='flex'><img src={link}></img></span> </td>
        <td>
              <span className="rem">
                <button  onClick={ async()=>{
                     const response = await fetch(deleteSwiper(id),{
                        method:'delete',
                        headers: {
                          'Content-Type': 'application/json',
                            "Authorization":`${localStorage.getItem("token")}`
                
                      },
                     }).then((res)=>{
                      if (res.status==400) {
                     var x = document.getElementById("snackbar");
                     x.innerHTML= 'failed please  '
                     x.className = "showError";
                   
                     setTimeout(function(){ x.className = x.className.replace("showError", ""); }, 3000);
                     
                    
                 }else if(res.status==404){
                     var x = document.getElementById("snackbar");
                     x.innerHTML= 'failed to connect'
                     
                     x.className = "showError";
                   
                     setTimeout(function(){ x.className = x.className.replace("showError", ""); }, 3000);  
                 }else{
                   var x = document.getElementById("snackbar");
                   x.innerHTML= 'the item has been removed successfully'
                   x.className = "showw";
                   document.getElementById(id).remove();              
                   setTimeout(function(){ x.className = x.className.replace("showw", ""); }, 3000);
                 
                  
                 }
                     });

                }}><svg xmlns="http://www.w3.org/2000/svg" fill="#000000" viewBox="0 0 26 26" width="2vw" height="2vw"><path d="M 11 -0.03125 C 10.164063 -0.03125 9.34375 0.132813 8.75 0.71875 C 8.15625 1.304688 7.96875 2.136719 7.96875 3 L 4 3 C 3.449219 3 3 3.449219 3 4 L 2 4 L 2 6 L 24 6 L 24 4 L 23 4 C 23 3.449219 22.550781 3 22 3 L 18.03125 3 C 18.03125 2.136719 17.84375 1.304688 17.25 0.71875 C 16.65625 0.132813 15.835938 -0.03125 15 -0.03125 Z M 11 2.03125 L 15 2.03125 C 15.546875 2.03125 15.71875 2.160156 15.78125 2.21875 C 15.84375 2.277344 15.96875 2.441406 15.96875 3 L 10.03125 3 C 10.03125 2.441406 10.15625 2.277344 10.21875 2.21875 C 10.28125 2.160156 10.453125 2.03125 11 2.03125 Z M 4 7 L 4 23 C 4 24.652344 5.347656 26 7 26 L 19 26 C 20.652344 26 22 24.652344 22 23 L 22 7 Z M 8 10 L 10 10 L 10 22 L 8 22 Z M 12 10 L 14 10 L 14 22 L 12 22 Z M 16 10 L 18 10 L 18 22 L 16 22 Z"/></svg></button>
              </span>
            </td>
        </tr>
        </>

    );
    
}
export default Img_Swiper