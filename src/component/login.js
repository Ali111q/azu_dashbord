import React, { Component } from 'react';
import { getLogins } from '../url/const';
import App from '../App';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useEffect } from 'react';
 function Login ()  {
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');

 
const navigate=useNavigate()

function login(e,p){
  return new Promise((res,rej)=>{
    try {
      var url = "http://azu-app.com/api/login";
      var xhr = new XMLHttpRequest();
  xhr.open("POST", url);
  
  xhr.setRequestHeader("Accept", "application/json");
   var data = `{
   "email":"${e}",
    "password":"${p}"
  }`;
  
  xhr.send(data)
  xhr.onload=function (){
    if(xhr.status==200){
      var rs= JSON.parse( xhr.response)
      localStorage.setItem("token",`${rs.token}`)
      return res( true)
    }else{ 
      
      return res( false)
    }
    }
    } catch (error) {
      console.log(error);
    }
  })

  
 }


 useEffect(() => {
localStorage.getItem('token')? navigate('/'):console.log();
} );

 return(
  <div className='login'>

      <div className='stop' id='login'>
      <svg id='loginanspan2' xmlns="http://www.w3.org/2000/svg" width="80%" viewBox="0 0 301.656 395.542">
            <g id="Group_6546" data-name="Group 6546" transdiv="translate(-568.29 -440.649)">
              <g id="Group_6545" data-name="Group 6545" transform="translate(584.292 440.649)">
                <path id="Path_7203" data-name="Path 7203" d="M408.633,158.951c4.069,21.764-13.54,37.833-33.56,31.893-9.641-2.86-17.841-8.449-26.064-13.979-5.02-3.375-10.015-6.78-15.785-8.854a16.148,16.148,0,0,0-13.291.9,32.154,32.154,0,0,0-16.521,37.106c2.643,9.5,8.258,17.043,15.3,23.723,9.629,9.136,20.552,16.561,31.562,23.833,17.708,11.7,32.489,26.218,43.653,44.3,1.955,3.165,3.217,4.2,6.244.9,10.095-11,22.425-19.422,33.959-28.758a141.546,141.546,0,0,0,18.188-17.529,49.189,49.189,0,0,0,9.521-16.6c5.254-15.679-.691-30.941-15.093-39.087-5.873-3.322-11.734-3.715-17.807-.5-6.035,3.2-11.34,7.423-16.732,11.53-6.286,4.789-12.716,9.329-20.075,12.372-17.314,7.16-34.026-2.054-37.119-20.5a30.159,30.159,0,0,1-.275-9.794c1.265,1.975,2.5,3.965,3.8,5.921,7.034,10.649,16.919,13.439,28.581,8.173,6.592-2.978,12.163-7.472,17.871-11.77,5.128-3.862,10.236-7.741,15.99-10.665,10.486-5.331,21.062-5.791,31.717-.565,22.324,10.95,32.612,34.961,25.367,58.728-4.092,13.427-12.23,24.124-22.3,33.463a196.858,196.858,0,0,1-19.279,16.348c-26.869,19.137-45.707,44.517-59.587,74.808-1.86-9.738-2.083-19.207.85-28.159,6.354-19.393.876-35.149-12.913-49.112a172.928,172.928,0,0,0-26.486-21.363c-13.823-9.363-27.547-18.826-38.527-31.682-18.6-21.779-19.129-49.985-1.164-69.541,14.425-15.7,31.657-18.42,50.046-7.666,6.167,3.605,12.009,7.758,18.088,11.517a68.182,68.182,0,0,0,9.191,4.925c13.231,5.584,22.437,2.452,29.774-9.9.734-1.234,1.565-2.409,2.878-4.418" transform="translate(-244.216 -126.788)" fill="#f7227f"/>
                <path id="Path_7204" data-name="Path 7204" d="M248,275.932c.4-4.724.69-9.484,1.247-14.211.349-2.955,1.015-6.365,4.84-6.236,3.959.134,3.877,3.557,4.105,6.579,1.523,20.19,3.88,40.225,13.723,58.433,6.619,12.243,16.48,21.455,28.269,28.624a29.571,29.571,0,0,0,8.115,3.29c10.851,2.7,17.4-2.478,18.092-13.612.569-9.18-2.506-16.491-9.785-22.086-4.4-3.377-8.421-7.132-10.893-12.2-3.146-6.461-1.779-12.918,3.263-16.207,2.554-1.667,4.736-2.066,5.991,1.492,2.519,7.131,7.761,11.835,13.973,15.706,21.583,13.447,36.548,31.976,43.356,56.712,3.225,11.715,1.644,22.2-8.14,30.448-8.266,6.973-17.077,7.447-25.178.713-10.513-8.736-22.062-15.583-34.265-21.709-34.535-17.334-51.1-46.9-55.752-84.177-.476-3.812-.645-7.664-.961-11.554" transform="translate(-247.999 -116.189)" fill="#0199ec"/>
                <path id="Path_7205" data-name="Path 7205" d="M504.813,276.987c-2.834,42.939-19.436,77.423-60.4,96.509a135.438,135.438,0,0,0-31.5,20.891c-4.957,4.3-10.121,4.6-15.845,2.816a26.188,26.188,0,0,1-17.5-30.94c5.174-22,16.293-40.3,34.664-53.849q5.974-4.407,12.136-8.557c5.166-3.464,9.388-7.736,11.333-13.733,1.406-4.335,3.6-3.817,6.462-1.661,4.869,3.664,5.972,10.686,2.542,16.908-2.806,5.091-7.149,8.785-11.589,12.358-8.656,6.966-10.3,16.1-7.8,26.269,1.526,6.2,5.708,9.055,12.092,9.027,6.527-.029,12.052-2.807,17.272-6.367,19.836-13.528,30.309-32.772,34.433-56.009a218.018,218.018,0,0,0,3.438-28.348c.136-3.009.118-6.472,3.988-6.752,4.272-.31,4.478,3.367,5.03,6.5a109.321,109.321,0,0,1,1.241,14.938" transform="translate(-234.803 -116.184)" fill="#0199ec"/>
                <path id="Path_7211" data-name="Path 7211" d="M374.764,165.664c-10.334-.174-18.112-8.363-17.9-18.851.2-10.273,8.462-18.059,18.946-17.863,10.319.194,18.025,8.376,17.82,18.92-.2,10.493-8.135,17.974-18.862,17.794" transform="translate(-237.023 -128.947)" fill="#f5237e"/>
                <path id="Path_7213" data-name="Path 7213" d="M292.069,332.088c-13.344-9.429-22.833-21.385-24.92-38.188-.97-7.8-2.748-15.525-2.331-23.458.082-1.559-.6-3.935,1.217-4.382,2.229-.549,2.675,2.064,3.4,3.566a59.617,59.617,0,0,1,5.005,16.213c.244,1.443.477,2.894.838,4.311.335,1.311,1.108,2.546,2.578,2.417,1.777-.157,1.492-1.758,1.508-3.009.048-3.813-1.6-7.529-.554-12.425a17.509,17.509,0,0,1,5.779,12.818,200.792,200.792,0,0,0,2.7,24.543,89.445,89.445,0,0,0,4.774,17.593" transform="translate(-246.31 -115.13)" fill="#0595eb"/>
                <path id="Path_7214" data-name="Path 7214" d="M451.187,332.135c8.422-16.641,5.318-35.021,10.881-51.691a4.577,4.577,0,0,1,3-2.984c1.029,3.866-.458,7.5-.6,11.145-.06,1.493-.943,3.748,1.439,4.047,2.045.257,2.479-1.74,2.815-3.413,1.443-7.192,2.887-14.389,6.431-20.93a21.94,21.94,0,0,1,1.973-2.629c10.112,13.646-6.639,57.3-25.934,66.456" transform="translate(-227.512 -115.161)" fill="#0595eb"/>
              </g>
              <g id="Group_6548" data-name="Group 6548" transform="translate(568.522 739.431)">
                <path id="Path_7215" data-name="Path 7215" d="M46.377-126.2H23.8l-4.241,12.6H6.17l21.871-61.288H42.51l21.7,61.288H50.327ZM42.8-136.766l-7.651-24.116-7.9,24.116Zm98.953,23.16H94.063v-10.811L125.7-164.041H94.853v-10.852h46.818v10.27l-32.058,40.207h32.141Zm71.3-23.617v-37.671h13.014v37.671q0,9.771-3.035,15.218-5.655,9.979-21.58,9.979T179.836-122q-3.035-5.447-3.035-15.218v-37.671h13.014v37.671q0,6.32,1.5,9.231,2.328,5.156,10.145,5.156,7.775,0,10.1-5.156Q213.058-130.9,213.058-137.223Z" transform="translate(33.101 174.894)" fill="#2a2d37"/>
              </g>
            </g>
            <path id="Path_54412" data-name="Path 54412" d="M-426.118-45.257l.383,2.628.561-2.368,3.942-13.908h2.217L-415.167-45l.548,2.409.424-2.683L-411.1-58.9h2.642l-4.832,19.931h-2.4L-419.794-53.5l-.315-1.519-.315,1.519-4.257,14.524h-2.4L-431.895-58.9h2.628Zm26.323,6.557a6.471,6.471,0,0,1-4.9-1.978,7.341,7.341,0,0,1-1.889-5.291v-.465a8.888,8.888,0,0,1,.842-3.935,6.568,6.568,0,0,1,2.354-2.71,5.92,5.92,0,0,1,3.278-.979,5.547,5.547,0,0,1,4.49,1.9,8.238,8.238,0,0,1,1.6,5.448v1.054h-10.034a5.264,5.264,0,0,0,1.28,3.539,4.023,4.023,0,0,0,3.114,1.348,4.41,4.41,0,0,0,2.272-.548,5.708,5.708,0,0,0,1.629-1.451l1.547,1.2A6.22,6.22,0,0,1-399.795-38.7Zm-.315-13.278a3.378,3.378,0,0,0-2.573,1.116,5.423,5.423,0,0,0-1.287,3.128h7.419v-.192a4.824,4.824,0,0,0-1.04-2.991A3.18,3.18,0,0,0-400.11-51.978Zm31.018,6.68a7.333,7.333,0,0,1-2.334,4.88,7.649,7.649,0,0,1-5.222,1.718,7.023,7.023,0,0,1-5.66-2.532,10.188,10.188,0,0,1-2.129-6.776v-1.916a11.354,11.354,0,0,1,.992-4.887,7.411,7.411,0,0,1,2.813-3.237,7.832,7.832,0,0,1,4.216-1.129,7.2,7.2,0,0,1,5.092,1.773,7.421,7.421,0,0,1,2.231,4.907h-2.642a5.7,5.7,0,0,0-1.485-3.45,4.5,4.5,0,0,0-3.2-1.068,4.7,4.7,0,0,0-3.949,1.862,8.541,8.541,0,0,0-1.43,5.3v1.93a8.78,8.78,0,0,0,1.355,5.161,4.38,4.38,0,0,0,3.792,1.916,5.058,5.058,0,0,0,3.361-.992,5.507,5.507,0,0,0,1.554-3.456Zm12.333,6.324a5.312,5.312,0,0,1-.356-1.561A5.65,5.65,0,0,1-361.33-38.7a5.228,5.228,0,0,1-3.593-1.239,4.008,4.008,0,0,1-1.4-3.142,4.187,4.187,0,0,1,1.759-3.593,8.293,8.293,0,0,1,4.948-1.28h2.464v-1.164a2.844,2.844,0,0,0-.794-2.115,3.191,3.191,0,0,0-2.341-.787,3.693,3.693,0,0,0-2.272.684,2.017,2.017,0,0,0-.917,1.656h-2.546a3.5,3.5,0,0,1,.787-2.142,5.371,5.371,0,0,1,2.135-1.636,7.184,7.184,0,0,1,2.964-.6,5.855,5.855,0,0,1,4.011,1.28,4.617,4.617,0,0,1,1.506,3.525v6.817a8.334,8.334,0,0,0,.52,3.244v.219Zm-4.2-1.93a4.451,4.451,0,0,0,2.259-.616,3.726,3.726,0,0,0,1.547-1.6v-3.039h-1.985q-4.654,0-4.654,2.724A2.305,2.305,0,0,0-363-41.575,3.052,3.052,0,0,0-360.96-40.9Zm17.467-10.609a7.588,7.588,0,0,0-1.246-.1,3.337,3.337,0,0,0-3.381,2.122v10.513h-2.532V-53.785h2.464l.041,1.711a3.943,3.943,0,0,1,3.532-1.985,2.587,2.587,0,0,1,1.122.192ZM-335.02-38.7a6.472,6.472,0,0,1-4.9-1.978,7.342,7.342,0,0,1-1.889-5.291v-.465a8.888,8.888,0,0,1,.842-3.935,6.567,6.567,0,0,1,2.354-2.71,5.919,5.919,0,0,1,3.278-.979,5.547,5.547,0,0,1,4.49,1.9,8.238,8.238,0,0,1,1.6,5.448v1.054h-10.034A5.265,5.265,0,0,0-338-42.116a4.023,4.023,0,0,0,3.114,1.348,4.41,4.41,0,0,0,2.272-.548,5.708,5.708,0,0,0,1.629-1.451l1.547,1.2A6.219,6.219,0,0,1-335.02-38.7Zm-.315-13.278a3.378,3.378,0,0,0-2.573,1.116,5.422,5.422,0,0,0-1.287,3.128h7.419v-.192a4.824,4.824,0,0,0-1.04-2.991A3.18,3.18,0,0,0-335.335-51.978Zm27.35,4.2h-8.364v8.8h-2.628V-58.9h12.347v2.163h-9.719v6.817h8.364Zm3.148,1.259a8.75,8.75,0,0,1,.856-3.915,6.383,6.383,0,0,1,2.382-2.683,6.484,6.484,0,0,1,3.484-.945,6.246,6.246,0,0,1,4.894,2.094,8.058,8.058,0,0,1,1.868,5.571v.178a8.823,8.823,0,0,1-.828,3.881,6.287,6.287,0,0,1-2.368,2.676,6.558,6.558,0,0,1-3.538.958,6.231,6.231,0,0,1-4.88-2.094,8.017,8.017,0,0,1-1.869-5.544Zm2.546.3a6.337,6.337,0,0,0,1.143,3.956,3.658,3.658,0,0,0,3.059,1.492,3.636,3.636,0,0,0,3.066-1.513,6.929,6.929,0,0,0,1.136-4.237,6.326,6.326,0,0,0-1.157-3.949,3.677,3.677,0,0,0-3.073-1.513,3.636,3.636,0,0,0-3.025,1.492A6.877,6.877,0,0,0-302.291-46.216Zm21.272-5.3a7.59,7.59,0,0,0-1.246-.1,3.337,3.337,0,0,0-3.381,2.122v10.513h-2.532V-53.785h2.464l.041,1.711a3.943,3.943,0,0,1,3.532-1.985,2.587,2.587,0,0,1,1.123.192Zm15.742,2.615,5.2-10.006h2.984l-6.872,12.5v7.433h-2.628v-7.433l-6.872-12.5h3.012Zm8.8,2.382a8.747,8.747,0,0,1,.856-3.915,6.382,6.382,0,0,1,2.382-2.683,6.484,6.484,0,0,1,3.484-.945,6.246,6.246,0,0,1,4.894,2.094,8.057,8.057,0,0,1,1.869,5.571v.178a8.824,8.824,0,0,1-.828,3.881,6.288,6.288,0,0,1-2.368,2.676,6.558,6.558,0,0,1-3.538.958,6.231,6.231,0,0,1-4.88-2.094,8.017,8.017,0,0,1-1.868-5.544Zm2.546.3a6.337,6.337,0,0,0,1.143,3.956,3.658,3.658,0,0,0,3.06,1.492,3.636,3.636,0,0,0,3.066-1.513,6.929,6.929,0,0,0,1.136-4.237,6.325,6.325,0,0,0-1.157-3.949,3.677,3.677,0,0,0-3.073-1.513,3.636,3.636,0,0,0-3.025,1.492A6.877,6.877,0,0,0-253.929-46.216Zm23.257,5.777a5.379,5.379,0,0,1-4.339,1.738,4.6,4.6,0,0,1-3.607-1.376,5.955,5.955,0,0,1-1.253-4.072v-9.637h2.532v9.568q0,3.367,2.738,3.367,2.9,0,3.86-2.163V-53.785h2.532v14.811h-2.409Zm13.47-11.074a7.591,7.591,0,0,0-1.246-.1,3.337,3.337,0,0,0-3.381,2.122v10.513h-2.532V-53.785h2.464l.041,1.711a3.943,3.943,0,0,1,3.532-1.985,2.588,2.588,0,0,1,1.123.192Zm24.982,12.539h-2.642v-9.212H-204.91v9.212h-2.628V-58.9h2.628v8.569h10.048V-58.9h2.642Zm10.417.274a6.472,6.472,0,0,1-4.9-1.978,7.342,7.342,0,0,1-1.889-5.291v-.465a8.889,8.889,0,0,1,.842-3.935,6.568,6.568,0,0,1,2.354-2.71,5.92,5.92,0,0,1,3.279-.979,5.547,5.547,0,0,1,4.49,1.9,8.238,8.238,0,0,1,1.6,5.448v1.054h-10.034a5.265,5.265,0,0,0,1.28,3.539,4.023,4.023,0,0,0,3.114,1.348,4.41,4.41,0,0,0,2.272-.548,5.709,5.709,0,0,0,1.629-1.451l1.547,1.2A6.22,6.22,0,0,1-181.8-38.7Zm-.315-13.278a3.378,3.378,0,0,0-2.573,1.116,5.423,5.423,0,0,0-1.287,3.128h7.419v-.192a4.824,4.824,0,0,0-1.04-2.991A3.181,3.181,0,0,0-182.118-51.978Zm18.165,13a5.318,5.318,0,0,1-.356-1.561,5.65,5.65,0,0,1-4.216,1.834,5.228,5.228,0,0,1-3.593-1.239,4.008,4.008,0,0,1-1.4-3.142,4.187,4.187,0,0,1,1.759-3.593,8.293,8.293,0,0,1,4.948-1.28h2.464v-1.164a2.844,2.844,0,0,0-.794-2.115,3.191,3.191,0,0,0-2.341-.787,3.693,3.693,0,0,0-2.272.684,2.017,2.017,0,0,0-.917,1.656h-2.546a3.5,3.5,0,0,1,.787-2.142,5.373,5.373,0,0,1,2.135-1.636,7.184,7.184,0,0,1,2.964-.6,5.855,5.855,0,0,1,4.011,1.28,4.617,4.617,0,0,1,1.506,3.525v6.817a8.334,8.334,0,0,0,.52,3.244v.219Zm-4.2-1.93a4.45,4.45,0,0,0,2.259-.616,3.726,3.726,0,0,0,1.547-1.6v-3.039h-1.985q-4.654,0-4.654,2.724a2.305,2.305,0,0,0,.794,1.862A3.052,3.052,0,0,0-168.156-40.9Zm13.059,1.93h-2.532V-60h2.532Zm7.488-18.4v3.586h2.765v1.957h-2.765v9.185a2.051,2.051,0,0,0,.37,1.335,1.557,1.557,0,0,0,1.259.445,6.13,6.13,0,0,0,1.2-.164v2.053a7.342,7.342,0,0,1-1.944.274,3.154,3.154,0,0,1-2.56-1.027,4.41,4.41,0,0,1-.863-2.916v-9.185h-2.7v-1.957h2.7v-3.586Zm8.254,5.38a5.384,5.384,0,0,1,4.38-2.067q4.7,0,4.736,5.3v9.787h-2.532v-9.8a3.41,3.41,0,0,0-.732-2.368,2.935,2.935,0,0,0-2.238-.767,3.655,3.655,0,0,0-2.163.657,4.462,4.462,0,0,0-1.451,1.725v10.554h-2.532V-60h2.532Z" transform="translate(431.895 434.242)" fill="#0199ec"/>
          </svg>



      <input required={true} type={"email"} onChange={e => setEmail(e.target.value )}></input>
      <input required={true} type={"password"} onChange={e => setPassword( e.target.value )}></input>
      <button onClick={async()=>{
     await login(email,password).then((e)=>{e?navigate('/',{ replace: true }):console.log('fef');})
    
      }
        }>Log in</button>
      </div>
      <div className='loginan'>
                    <svg id='loginanspan1' xmlns="http://www.w3.org/2000/svg" width="80%" viewBox="0 0 301.656 395.542">
            <g id="Group_6546" data-name="Group 6546" transform="translate(-568.29 -440.649)">
              <g id="Group_6545" data-name="Group 6545" transform="translate(584.292 440.649)">
                <path id="Path_7203" data-name="Path 7203" d="M408.633,158.951c4.069,21.764-13.54,37.833-33.56,31.893-9.641-2.86-17.841-8.449-26.064-13.979-5.02-3.375-10.015-6.78-15.785-8.854a16.148,16.148,0,0,0-13.291.9,32.154,32.154,0,0,0-16.521,37.106c2.643,9.5,8.258,17.043,15.3,23.723,9.629,9.136,20.552,16.561,31.562,23.833,17.708,11.7,32.489,26.218,43.653,44.3,1.955,3.165,3.217,4.2,6.244.9,10.095-11,22.425-19.422,33.959-28.758a141.546,141.546,0,0,0,18.188-17.529,49.189,49.189,0,0,0,9.521-16.6c5.254-15.679-.691-30.941-15.093-39.087-5.873-3.322-11.734-3.715-17.807-.5-6.035,3.2-11.34,7.423-16.732,11.53-6.286,4.789-12.716,9.329-20.075,12.372-17.314,7.16-34.026-2.054-37.119-20.5a30.159,30.159,0,0,1-.275-9.794c1.265,1.975,2.5,3.965,3.8,5.921,7.034,10.649,16.919,13.439,28.581,8.173,6.592-2.978,12.163-7.472,17.871-11.77,5.128-3.862,10.236-7.741,15.99-10.665,10.486-5.331,21.062-5.791,31.717-.565,22.324,10.95,32.612,34.961,25.367,58.728-4.092,13.427-12.23,24.124-22.3,33.463a196.858,196.858,0,0,1-19.279,16.348c-26.869,19.137-45.707,44.517-59.587,74.808-1.86-9.738-2.083-19.207.85-28.159,6.354-19.393.876-35.149-12.913-49.112a172.928,172.928,0,0,0-26.486-21.363c-13.823-9.363-27.547-18.826-38.527-31.682-18.6-21.779-19.129-49.985-1.164-69.541,14.425-15.7,31.657-18.42,50.046-7.666,6.167,3.605,12.009,7.758,18.088,11.517a68.182,68.182,0,0,0,9.191,4.925c13.231,5.584,22.437,2.452,29.774-9.9.734-1.234,1.565-2.409,2.878-4.418" transform="translate(-244.216 -126.788)" fill="#f7227f"/>
                <path id="Path_7204" data-name="Path 7204" d="M248,275.932c.4-4.724.69-9.484,1.247-14.211.349-2.955,1.015-6.365,4.84-6.236,3.959.134,3.877,3.557,4.105,6.579,1.523,20.19,3.88,40.225,13.723,58.433,6.619,12.243,16.48,21.455,28.269,28.624a29.571,29.571,0,0,0,8.115,3.29c10.851,2.7,17.4-2.478,18.092-13.612.569-9.18-2.506-16.491-9.785-22.086-4.4-3.377-8.421-7.132-10.893-12.2-3.146-6.461-1.779-12.918,3.263-16.207,2.554-1.667,4.736-2.066,5.991,1.492,2.519,7.131,7.761,11.835,13.973,15.706,21.583,13.447,36.548,31.976,43.356,56.712,3.225,11.715,1.644,22.2-8.14,30.448-8.266,6.973-17.077,7.447-25.178.713-10.513-8.736-22.062-15.583-34.265-21.709-34.535-17.334-51.1-46.9-55.752-84.177-.476-3.812-.645-7.664-.961-11.554" transform="translate(-247.999 -116.189)" fill="#0199ec"/>
                <path id="Path_7205" data-name="Path 7205" d="M504.813,276.987c-2.834,42.939-19.436,77.423-60.4,96.509a135.438,135.438,0,0,0-31.5,20.891c-4.957,4.3-10.121,4.6-15.845,2.816a26.188,26.188,0,0,1-17.5-30.94c5.174-22,16.293-40.3,34.664-53.849q5.974-4.407,12.136-8.557c5.166-3.464,9.388-7.736,11.333-13.733,1.406-4.335,3.6-3.817,6.462-1.661,4.869,3.664,5.972,10.686,2.542,16.908-2.806,5.091-7.149,8.785-11.589,12.358-8.656,6.966-10.3,16.1-7.8,26.269,1.526,6.2,5.708,9.055,12.092,9.027,6.527-.029,12.052-2.807,17.272-6.367,19.836-13.528,30.309-32.772,34.433-56.009a218.018,218.018,0,0,0,3.438-28.348c.136-3.009.118-6.472,3.988-6.752,4.272-.31,4.478,3.367,5.03,6.5a109.321,109.321,0,0,1,1.241,14.938" transform="translate(-234.803 -116.184)" fill="#0199ec"/>
                <path id="Path_7211" data-name="Path 7211" d="M374.764,165.664c-10.334-.174-18.112-8.363-17.9-18.851.2-10.273,8.462-18.059,18.946-17.863,10.319.194,18.025,8.376,17.82,18.92-.2,10.493-8.135,17.974-18.862,17.794" transform="translate(-237.023 -128.947)" fill="#f5237e"/>
                <path id="Path_7213" data-name="Path 7213" d="M292.069,332.088c-13.344-9.429-22.833-21.385-24.92-38.188-.97-7.8-2.748-15.525-2.331-23.458.082-1.559-.6-3.935,1.217-4.382,2.229-.549,2.675,2.064,3.4,3.566a59.617,59.617,0,0,1,5.005,16.213c.244,1.443.477,2.894.838,4.311.335,1.311,1.108,2.546,2.578,2.417,1.777-.157,1.492-1.758,1.508-3.009.048-3.813-1.6-7.529-.554-12.425a17.509,17.509,0,0,1,5.779,12.818,200.792,200.792,0,0,0,2.7,24.543,89.445,89.445,0,0,0,4.774,17.593" transform="translate(-246.31 -115.13)" fill="#0595eb"/>
                <path id="Path_7214" data-name="Path 7214" d="M451.187,332.135c8.422-16.641,5.318-35.021,10.881-51.691a4.577,4.577,0,0,1,3-2.984c1.029,3.866-.458,7.5-.6,11.145-.06,1.493-.943,3.748,1.439,4.047,2.045.257,2.479-1.74,2.815-3.413,1.443-7.192,2.887-14.389,6.431-20.93a21.94,21.94,0,0,1,1.973-2.629c10.112,13.646-6.639,57.3-25.934,66.456" transform="translate(-227.512 -115.161)" fill="#0595eb"/>
              </g>
              <g id="Group_6548" data-name="Group 6548" transform="translate(568.522 739.431)">
                <path id="Path_7215" data-name="Path 7215" d="M46.377-126.2H23.8l-4.241,12.6H6.17l21.871-61.288H42.51l21.7,61.288H50.327ZM42.8-136.766l-7.651-24.116-7.9,24.116Zm98.953,23.16H94.063v-10.811L125.7-164.041H94.853v-10.852h46.818v10.27l-32.058,40.207h32.141Zm71.3-23.617v-37.671h13.014v37.671q0,9.771-3.035,15.218-5.655,9.979-21.58,9.979T179.836-122q-3.035-5.447-3.035-15.218v-37.671h13.014v37.671q0,6.32,1.5,9.231,2.328,5.156,10.145,5.156,7.775,0,10.1-5.156Q213.058-130.9,213.058-137.223Z" transform="translate(33.101 174.894)" fill="#2a2d37"/>
              </g>
            </g>
            <path id="Path_54412" data-name="Path 54412" d="M-426.118-45.257l.383,2.628.561-2.368,3.942-13.908h2.217L-415.167-45l.548,2.409.424-2.683L-411.1-58.9h2.642l-4.832,19.931h-2.4L-419.794-53.5l-.315-1.519-.315,1.519-4.257,14.524h-2.4L-431.895-58.9h2.628Zm26.323,6.557a6.471,6.471,0,0,1-4.9-1.978,7.341,7.341,0,0,1-1.889-5.291v-.465a8.888,8.888,0,0,1,.842-3.935,6.568,6.568,0,0,1,2.354-2.71,5.92,5.92,0,0,1,3.278-.979,5.547,5.547,0,0,1,4.49,1.9,8.238,8.238,0,0,1,1.6,5.448v1.054h-10.034a5.264,5.264,0,0,0,1.28,3.539,4.023,4.023,0,0,0,3.114,1.348,4.41,4.41,0,0,0,2.272-.548,5.708,5.708,0,0,0,1.629-1.451l1.547,1.2A6.22,6.22,0,0,1-399.795-38.7Zm-.315-13.278a3.378,3.378,0,0,0-2.573,1.116,5.423,5.423,0,0,0-1.287,3.128h7.419v-.192a4.824,4.824,0,0,0-1.04-2.991A3.18,3.18,0,0,0-400.11-51.978Zm31.018,6.68a7.333,7.333,0,0,1-2.334,4.88,7.649,7.649,0,0,1-5.222,1.718,7.023,7.023,0,0,1-5.66-2.532,10.188,10.188,0,0,1-2.129-6.776v-1.916a11.354,11.354,0,0,1,.992-4.887,7.411,7.411,0,0,1,2.813-3.237,7.832,7.832,0,0,1,4.216-1.129,7.2,7.2,0,0,1,5.092,1.773,7.421,7.421,0,0,1,2.231,4.907h-2.642a5.7,5.7,0,0,0-1.485-3.45,4.5,4.5,0,0,0-3.2-1.068,4.7,4.7,0,0,0-3.949,1.862,8.541,8.541,0,0,0-1.43,5.3v1.93a8.78,8.78,0,0,0,1.355,5.161,4.38,4.38,0,0,0,3.792,1.916,5.058,5.058,0,0,0,3.361-.992,5.507,5.507,0,0,0,1.554-3.456Zm12.333,6.324a5.312,5.312,0,0,1-.356-1.561A5.65,5.65,0,0,1-361.33-38.7a5.228,5.228,0,0,1-3.593-1.239,4.008,4.008,0,0,1-1.4-3.142,4.187,4.187,0,0,1,1.759-3.593,8.293,8.293,0,0,1,4.948-1.28h2.464v-1.164a2.844,2.844,0,0,0-.794-2.115,3.191,3.191,0,0,0-2.341-.787,3.693,3.693,0,0,0-2.272.684,2.017,2.017,0,0,0-.917,1.656h-2.546a3.5,3.5,0,0,1,.787-2.142,5.371,5.371,0,0,1,2.135-1.636,7.184,7.184,0,0,1,2.964-.6,5.855,5.855,0,0,1,4.011,1.28,4.617,4.617,0,0,1,1.506,3.525v6.817a8.334,8.334,0,0,0,.52,3.244v.219Zm-4.2-1.93a4.451,4.451,0,0,0,2.259-.616,3.726,3.726,0,0,0,1.547-1.6v-3.039h-1.985q-4.654,0-4.654,2.724A2.305,2.305,0,0,0-363-41.575,3.052,3.052,0,0,0-360.96-40.9Zm17.467-10.609a7.588,7.588,0,0,0-1.246-.1,3.337,3.337,0,0,0-3.381,2.122v10.513h-2.532V-53.785h2.464l.041,1.711a3.943,3.943,0,0,1,3.532-1.985,2.587,2.587,0,0,1,1.122.192ZM-335.02-38.7a6.472,6.472,0,0,1-4.9-1.978,7.342,7.342,0,0,1-1.889-5.291v-.465a8.888,8.888,0,0,1,.842-3.935,6.567,6.567,0,0,1,2.354-2.71,5.919,5.919,0,0,1,3.278-.979,5.547,5.547,0,0,1,4.49,1.9,8.238,8.238,0,0,1,1.6,5.448v1.054h-10.034A5.265,5.265,0,0,0-338-42.116a4.023,4.023,0,0,0,3.114,1.348,4.41,4.41,0,0,0,2.272-.548,5.708,5.708,0,0,0,1.629-1.451l1.547,1.2A6.219,6.219,0,0,1-335.02-38.7Zm-.315-13.278a3.378,3.378,0,0,0-2.573,1.116,5.422,5.422,0,0,0-1.287,3.128h7.419v-.192a4.824,4.824,0,0,0-1.04-2.991A3.18,3.18,0,0,0-335.335-51.978Zm27.35,4.2h-8.364v8.8h-2.628V-58.9h12.347v2.163h-9.719v6.817h8.364Zm3.148,1.259a8.75,8.75,0,0,1,.856-3.915,6.383,6.383,0,0,1,2.382-2.683,6.484,6.484,0,0,1,3.484-.945,6.246,6.246,0,0,1,4.894,2.094,8.058,8.058,0,0,1,1.868,5.571v.178a8.823,8.823,0,0,1-.828,3.881,6.287,6.287,0,0,1-2.368,2.676,6.558,6.558,0,0,1-3.538.958,6.231,6.231,0,0,1-4.88-2.094,8.017,8.017,0,0,1-1.869-5.544Zm2.546.3a6.337,6.337,0,0,0,1.143,3.956,3.658,3.658,0,0,0,3.059,1.492,3.636,3.636,0,0,0,3.066-1.513,6.929,6.929,0,0,0,1.136-4.237,6.326,6.326,0,0,0-1.157-3.949,3.677,3.677,0,0,0-3.073-1.513,3.636,3.636,0,0,0-3.025,1.492A6.877,6.877,0,0,0-302.291-46.216Zm21.272-5.3a7.59,7.59,0,0,0-1.246-.1,3.337,3.337,0,0,0-3.381,2.122v10.513h-2.532V-53.785h2.464l.041,1.711a3.943,3.943,0,0,1,3.532-1.985,2.587,2.587,0,0,1,1.123.192Zm15.742,2.615,5.2-10.006h2.984l-6.872,12.5v7.433h-2.628v-7.433l-6.872-12.5h3.012Zm8.8,2.382a8.747,8.747,0,0,1,.856-3.915,6.382,6.382,0,0,1,2.382-2.683,6.484,6.484,0,0,1,3.484-.945,6.246,6.246,0,0,1,4.894,2.094,8.057,8.057,0,0,1,1.869,5.571v.178a8.824,8.824,0,0,1-.828,3.881,6.288,6.288,0,0,1-2.368,2.676,6.558,6.558,0,0,1-3.538.958,6.231,6.231,0,0,1-4.88-2.094,8.017,8.017,0,0,1-1.868-5.544Zm2.546.3a6.337,6.337,0,0,0,1.143,3.956,3.658,3.658,0,0,0,3.06,1.492,3.636,3.636,0,0,0,3.066-1.513,6.929,6.929,0,0,0,1.136-4.237,6.325,6.325,0,0,0-1.157-3.949,3.677,3.677,0,0,0-3.073-1.513,3.636,3.636,0,0,0-3.025,1.492A6.877,6.877,0,0,0-253.929-46.216Zm23.257,5.777a5.379,5.379,0,0,1-4.339,1.738,4.6,4.6,0,0,1-3.607-1.376,5.955,5.955,0,0,1-1.253-4.072v-9.637h2.532v9.568q0,3.367,2.738,3.367,2.9,0,3.86-2.163V-53.785h2.532v14.811h-2.409Zm13.47-11.074a7.591,7.591,0,0,0-1.246-.1,3.337,3.337,0,0,0-3.381,2.122v10.513h-2.532V-53.785h2.464l.041,1.711a3.943,3.943,0,0,1,3.532-1.985,2.588,2.588,0,0,1,1.123.192Zm24.982,12.539h-2.642v-9.212H-204.91v9.212h-2.628V-58.9h2.628v8.569h10.048V-58.9h2.642Zm10.417.274a6.472,6.472,0,0,1-4.9-1.978,7.342,7.342,0,0,1-1.889-5.291v-.465a8.889,8.889,0,0,1,.842-3.935,6.568,6.568,0,0,1,2.354-2.71,5.92,5.92,0,0,1,3.279-.979,5.547,5.547,0,0,1,4.49,1.9,8.238,8.238,0,0,1,1.6,5.448v1.054h-10.034a5.265,5.265,0,0,0,1.28,3.539,4.023,4.023,0,0,0,3.114,1.348,4.41,4.41,0,0,0,2.272-.548,5.709,5.709,0,0,0,1.629-1.451l1.547,1.2A6.22,6.22,0,0,1-181.8-38.7Zm-.315-13.278a3.378,3.378,0,0,0-2.573,1.116,5.423,5.423,0,0,0-1.287,3.128h7.419v-.192a4.824,4.824,0,0,0-1.04-2.991A3.181,3.181,0,0,0-182.118-51.978Zm18.165,13a5.318,5.318,0,0,1-.356-1.561,5.65,5.65,0,0,1-4.216,1.834,5.228,5.228,0,0,1-3.593-1.239,4.008,4.008,0,0,1-1.4-3.142,4.187,4.187,0,0,1,1.759-3.593,8.293,8.293,0,0,1,4.948-1.28h2.464v-1.164a2.844,2.844,0,0,0-.794-2.115,3.191,3.191,0,0,0-2.341-.787,3.693,3.693,0,0,0-2.272.684,2.017,2.017,0,0,0-.917,1.656h-2.546a3.5,3.5,0,0,1,.787-2.142,5.373,5.373,0,0,1,2.135-1.636,7.184,7.184,0,0,1,2.964-.6,5.855,5.855,0,0,1,4.011,1.28,4.617,4.617,0,0,1,1.506,3.525v6.817a8.334,8.334,0,0,0,.52,3.244v.219Zm-4.2-1.93a4.45,4.45,0,0,0,2.259-.616,3.726,3.726,0,0,0,1.547-1.6v-3.039h-1.985q-4.654,0-4.654,2.724a2.305,2.305,0,0,0,.794,1.862A3.052,3.052,0,0,0-168.156-40.9Zm13.059,1.93h-2.532V-60h2.532Zm7.488-18.4v3.586h2.765v1.957h-2.765v9.185a2.051,2.051,0,0,0,.37,1.335,1.557,1.557,0,0,0,1.259.445,6.13,6.13,0,0,0,1.2-.164v2.053a7.342,7.342,0,0,1-1.944.274,3.154,3.154,0,0,1-2.56-1.027,4.41,4.41,0,0,1-.863-2.916v-9.185h-2.7v-1.957h2.7v-3.586Zm8.254,5.38a5.384,5.384,0,0,1,4.38-2.067q4.7,0,4.736,5.3v9.787h-2.532v-9.8a3.41,3.41,0,0,0-.732-2.368,2.935,2.935,0,0,0-2.238-.767,3.655,3.655,0,0,0-2.163.657,4.462,4.462,0,0,0-1.451,1.725v10.554h-2.532V-60h2.532Z" transform="translate(431.895 434.242)" fill="#0199ec"/>
          </svg>
          <span id='loginanspan'></span>

          </div>
      </div>
    )
  }
  // this.state.Email==this.state.userEmail && this.state.Pas==this.state.userPas


export default Login;