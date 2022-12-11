import React, { Component } from "react";
import { deleteServies,getServies,updateServies } from "../url/const";
import'../css/flaticon/flaticon.css'
export function Sirves_Type({ id, title, img, body ,firstImages,firstTitle,firstBody,secondImages,secondTitle,secondBody,thirdTitle,thirdBody,fourthTitle,fourthBody,perks,firstPerkBody,secondPerk,firstPerkCircle,secondPerkCircle,fifth}) {
var type
  if ( img == 1 ) {
    type="flaticon-doctor-1"
  }

  else if ( img == 2 ) {
    type="flaticon-heartbeat"
  }

  else if ( img == 3 ) {
    type="flaticon-medical-record"
  }

  else if ( img == 4 ) {
    type="flaticon-pharmacy"
  }

  else if ( img == 5 ) {
    type="flaticon-pills"
  }

  else if ( img == 6 ) {
    type="flaticon-stethoscope"
  }else{
    type="flaticon-stethoscope"

  }
    return (
    
    <>
        <div id={id} class="sigma_service">
          <button
          onClick={() => {


            const div = document.createElement("div");
            div.className = "ans1";
            
            div.innerHTML = `
            <style>
            .dr_body{
                                width:60%;
                                direction: ltr;
                                height: fit-content;
                                max-height: 70vh;
                                word-break: break-all;
                                padding:5% 20% 5% 20%;
                                overflow-y: scroll;
                                overflow-x:hidden ;
                            }
                            .firest_con ,.second_con,.Perksbody ,#firstImagesimg{
                                width: 100%;
                                height: fit-content;
                                overflow: hidden;
                            }
                            .firest_con img ,.second_con img ,#firstImagesimg img{
                                width: 100%;
                            }
                            .firest_con ul{
                                width: 100%;
                                display: flex;
                                justify-content: space-between;
                            }
                            .firest_con ul img,#firest_conulimg{
                                width: 32%;
                            }
                            #firest_conulimg img{
                              width: 100%;
          
          
                            }
                            .divspac{
                                width: 100%;
                                height: 2vw;
                            }
                            .h1_dashbordfont{
                                color:#005963;
                                word-wrap:break-word ;
                                font-size: 2vw;
                              }
                            .h1_input_dashbordfont{
                              
                              background-color: transparent;
                              box-shadow: rgba(50, 50, 105, 0.15) 0px 2px 5px 0px, rgba(0, 0, 0, 0.05) 0px 1px 1px 0px;                    color:#005963;
                              word-wrap:break-word ;
                              font-size: 2vw;
                              border: 0;
                              padding: 4%;
                              resize: vertical;
                              border-radius: 0.5vw;
                              margin: 2%;
                              width: 88%;
          
          
                              }
                              .p_input_dashbordfont{
                                  background-color: transparent;
                                  box-shadow: rgba(50, 50, 105, 0.15) 0px 2px 5px 0px, rgba(0, 0, 0, 0.05) 0px 1px 1px 0px;                        color:#005963;
                                  word-wrap:break-word ;
                                  font-size: 1vw;
                                  border: 0;
                                  padding: 4%;
                                  resize: vertical;
                                  border-radius: 0.5vw;
                                  margin: 2%;
                                  width: 88%;
                                  }
                                  .secondbodyproctext{
                                      word-wrap:break-word ;
                                      font-size: 1vw;
                                      border: 0;
                                      padding: 4%;
                                      resize: vertical;
                                      border-radius: 0.5vw;
                                      margin-top: 1vw;
                                      height: 40vh;
                                      resize: none;
                                      background-color: transparent;
                                      border: 0;
                                  }
                                  .firstImagestext{
                                      width: 92%;
                                      word-wrap:break-word ;
                                      font-size: 1vw;
                                      border: 0;
                                      padding: 4%;
                                      resize: vertical;
                                      border-radius: 0.5vw;
                                      margin-top: 1vw;
                                      height: 45vh;
                                      resize: none;
                                      background-color: transparent;
                                      border: 0;
          
                                  }
                                  .firstImagestextw{
                                      width: 92%;
                                      word-wrap:break-word ;
                                      font-size: 1vw;
                                      border: 0;
                                      padding: 4%;
                                      resize: vertical;
                                      border-radius: 0.5vw;
                                      margin-top: 1vw;
                                      height: 20vh;
                                      resize: none;
                                      background-color: transparent;
                                      border: 0;
          
                                  }
                            .p_dashbordfont{
                                color:#005963;
                                word-wrap:break-word ;
                                font-size: 1vw;
                            }
                            .Perks{
                                width: 100%;
                                height: fit-content;
                                display: flex;
                                justify-content: space-between;
          
                            }
                            .divspan1{
                              display: flex;
                              justify-content: center;
                              align-content: center;
                              margin-bottom: 3vw;
                              padding: 2%;
                              width: 96%;
                              border-radius: 1vw;
                              height: fit-content;
                              box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 3vw -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
                              overflow: hidden;
                            }
                            .divspan{
                                padding: 2%;
                                width: 45%;
                                border-radius: 1vw;
                                height: fit-content;
                                box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 3vw -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
                                overflow: hidden;
                            }
                            .svg_cont{
                                width: fit-content;
                                height: fit-content;
                                border-radius: 1vw;
                                background-color: #006a75;
                                padding: 1vw;
                            }
                            .secondbodyproc{
                                width: 100%;
                                height: fit-content;
                                display: flex;
                                justify-content: space-between;
          
                                
                            }
                            .secondbodyproc img,#secondbodyprocimg{
                                width: 50%;
                                height: fit-content;
          
                            }
                            #secondbodyprocimg img{
                              width: 100%;
                              height: fit-content;
          
                          }
                            .secondbod_yproc{
                                width: 100%;
                                height: fit-content;
                                display: flex;
                                justify-content: flex-start;
          
          
          
                                
                            }
                            .secondbod_yproc img{
                                width: 40%;
                                height: fit-content;
          
                            }
                            .sigma_service{
                              box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 3vw -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;  margin-top: 3vh;
                              border-radius: 1vw;
                              background-color: transparent;
                              border: 0;
                              width:90%;
                              margin: 3%;
                              padding:2%;
                              word-break: break-all;
                          
                            }
                            .sigma_service_flex{
                              display: flex;
                              justify-content: flex-start;
                              width: 100%;
                            }
                            .sigma_service-thumb{
                              width: 15%;
                              overflow: hidden;
                              height: fit-content;
                            }
                            .sigma_service-thumb i{
                              font-size: 4vw;
                            }
                            .sigma_service-body{
                              width: 75%;
                            }
                            .sigma_service-body h5{
                              color:  rgb(16, 144, 167);
                              font-size: 1vw;
                              width: fit-content;
                              padding-left: 3%;
                              padding-bottom: 1%;
                            }
                            .sigma_service-body p{
                              width: fit-content;
                              font-size: 1vw;
                            }.secondbodyproc_body{
                              width: 50%;
                              height: fit-content;
                            }
                            #alllah{
                              display: flex;
          
          
                            }
                          
          </style>
          
            <div className='body_riv'>
            <button id="back_but" onClick={document.querySelector('.ans1').remove()}>X</button>
            </div>
          
            <div class="dr_body" >
            <div class="sigma_service" id="sigma_service" onClick={input("sigma_service","${title.replaceAll(' ', '@@')}","${body.replaceAll(' ', '@@')}","${img}")}>
                  <div class="sigma_service_flex">
                    <div class="sigma_service-thumb">
                      <i class="${type}"></i>
                    </div>
                     <div class="sigma_service-body">
                      <h5 id="replaceAll">
                        ${title}
                      </h5>
                      <p id="bodybodybody">${body}</p>
                     </div>
                  </div>
              </div>
            <div class="divspan1" ><h1 class="h1_dashbordfont" >Id=${id}</h1> </div>
          
          
            
          
          
            <div class="firest_con">
            <div class="divimg23345" id="firstImagesimg" onClick={img("divimg23345","firstImagestext","${firstImages[0]}","firstImages0")}><img id="firstImages0" value="${firstImages[0]}" src="${firstImages[0]}" alt=""></div>
                <ul>
                <div class="divim1" id="firest_conulimg" onClick={img("divim1","firstImagestextw","${firstImages[1]}","firstImages1")}><img id="firstImages1" value="${firstImages[1]}" src="${firstImages[1]}" alt=""></div>
                <div class="divim2" id="firest_conulimg" onClick={img("divim2","firstImagestextw","${firstImages[2]}","firstImages2")}><img id="firstImages2" value="${firstImages[2]}" src="${firstImages[2]}" alt=""></div>
                <div class="divim3" id="firest_conulimg" onClick={img("divim3","firstImagestextw","${firstImages[3]}","firstImages3")}><img id="firstImages3" value="${firstImages[3]}" src="${firstImages[3]}" alt=""></div>
          
                </ul>
                <div class="divspan111" onClick={textarea("divspan111","h1_input_dashbordfont","${firstTitle.replaceAll(' ', '@@')}","firstTitle")}><h1 id="firstTitle" value="${firstTitle}" class="h1_dashbordfont">${firstTitle}</h1></div>
                <div class="divspan111b" onClick={textarea("divspan111b","p_input_dashbordfont","${firstBody.replaceAll(' ', '@@')}","firstBody")}><p value="${firstBody}" id="firstBody" class="p_dashbordfont">${firstBody}</p></div>
          
                    
                </p>
            </div>
            <div class="divspac"></div>
            <div class="second_con">
          
            <div class="divspan1111" onClick={textarea("divspan1111","h1_input_dashbordfont","${secondTitle.replaceAll(' ', '@@')}","secondTitle")}><h1 id="secondTitle" class="h1_dashbordfont" value="${secondTitle}">${secondTitle}</h1></div>
            <div class="divspan1111b" onClick={textarea("divspan1111b","p_input_dashbordfont","${secondBody.replaceAll(' ', '@@')}","secondBody")}><p id="secondBody" value="${secondBody}" class="h1_dashbordfont">${secondBody}</p></div>
          
                <div class="divspac"></div>
                <div class="d22ivimg23345" id="firstImagesimg" onClick={img("d22ivimg23345","firstImagestext","${secondImages}","secondImages")}><img id="secondImages" value="${secondImages}" src="${secondImages}" alt=""></div>
          
          
          
            </div>
            <div class="divspac"></div>
            <div class="third">
          
            <div class="divspan11111" onClick={textarea("divspan11111","h1_input_dashbordfont","${thirdTitle.replaceAll(' ', '@@')}","thirdTitle")}><h1 id="thirdTitle" class="h1_dashbordfont" value="${thirdTitle}">${thirdTitle}</h1></div>
            <div class="divspan11111b" onClick={textarea("divspan11111b","p_input_dashbordfont","${thirdBody.replaceAll(' ', '@@')}","thirdBody")}><p id="thirdBody" value="${thirdBody}" class="h1_dashbordfont">${thirdBody}</p></div>
          
          
            </div>
            <div class="divspac"></div>
          
          
            <div class="third">
          
            <div class="divspan1111113" onClick={textarea("divspan1111113","h1_input_dashbordfont","${fourthTitle.replaceAll(' ', '@@')}","fourthTitle")}><h1 id="fourthTitle" value="${fourthTitle}" class="h1_dashbordfont">${fourthTitle}</h1></div>
            <div class="divspan1111113b" onClick={textarea("divspan1111113b","p_input_dashbordfont","${fourthBody.replaceAll(' ', '@@')}","fourthBody")}><p id="fourthBody" value="${fourthBody}" class="h1_dashbordfont">${fourthBody}</p></div>
          
            </div>
            <div class="divspac"></div>
          
            <h1 class="h1_dashbordfont">Perks</h1>
            <div class="divspac"></div>
          
            <div class="Perks">
                
          
                <div class="divspan">
                    <div class="svg_cont">
                        <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="3vw" height="3vw"><path d="M12,12A6,6,0,1,0,6,6,6.006,6.006,0,0,0,12,12ZM12,2A4,4,0,1,1,8,6,4,4,0,0,1,12,2Z"/><path d="M12,14a9.01,9.01,0,0,0-9,9,1,1,0,0,0,2,0,7,7,0,0,1,14,0,1,1,0,0,0,2,0A9.01,9.01,0,0,0,12,14Z"/></svg>
                    </div>
                    <div class="divspac"></div>
          
                    <div class="divspan22" onClick={textarea("divspan22","h1_input_dashbordfont","${perks[0]['title'].replaceAll(' ', '@@')}","perks0t")}><h1 id="perks0t" value="${perks[0]['title']}" class="h1_dashbordfont">${perks[0]['title']}</h1></div>
          
                              <div class="divspac"></div>
                    <div class="divspan22b" onClick={textarea("divspan22b","p_input_dashbordfont","${perks[0]['body'].replaceAll(' ', '@@')}","perks0b")}><p id="perks0b" class="h1_dashbordfont" value="${perks[0]['body']}">${perks[0]['body']}</p></div>
                  
                </div>
                
                <div class="divspan">
                    <div class="svg_cont">
                        <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="3vw" height="3vw"><path d="M12,12A6,6,0,1,0,6,6,6.006,6.006,0,0,0,12,12ZM12,2A4,4,0,1,1,8,6,4,4,0,0,1,12,2Z"/><path d="M12,14a9.01,9.01,0,0,0-9,9,1,1,0,0,0,2,0,7,7,0,0,1,14,0,1,1,0,0,0,2,0A9.01,9.01,0,0,0,12,14Z"/></svg>
                    </div>
                    <div class="divspac"></div>
          
                    <div class="divspan222" onClick={textarea("divspan222","h1_input_dashbordfont","${perks[1]['title'].replaceAll(' ', '@@')}","perks1t")}><h1 id="perks1t" value="${perks[1]['title']}" class="h1_dashbordfont">${perks[1]['title']}</h1></div>
          
                    <div class="divspac"></div>
          <div class="divspan222b" onClick={textarea("divspan222b","p_input_dashbordfont","${perks[1]['body'].replaceAll(' ', '@@')}","perks1b")}><p id="perks1b" value="${perks[1]['body']}" class="h1_dashbordfont">${perks[1]['body']}</p></div>
          
          
                </div>
          
            </div>
            <div class="divspac"></div>
            <div class="divspac"></div>
          
            <div class="divspan2223bbbbb" onClick={textarea("divspan2223bbbbb","p_input_dashbordfont","${firstPerkBody.replaceAll(' ', '@@')}","firstPerkBody")}><p id="firstPerkBody" value="${firstPerkBody}" class="h1_dashbordfont">${firstPerkBody}</p></div>
          
            
            <div class="divspac"></div>
          
          
            <div class="secondbodyproc">
                <div class="secondbodyproc_body">
                    <div class="divspac"></div>
                    <div class="divspan2223b" onClick={textarea("divspan2223b","p_input_dashbordfont","${secondPerk['body'].replaceAll(' ', '@@')}","secondPerkbody")}><p id="secondPerkbody" value="${secondPerk['body']}" class="h1_dashbordfont">${secondPerk['body']}</p></div>
          
                    <div class="divspac"></div>
          
                    <div id="alllah">
                    <span>
                    <div class="divspan224" onClick={textarea("divspan224","h1_input_dashbordfont","${firstPerkCircle['title'].replaceAll(' ', '@@')}-","firstPerkCircle")}><h1 id="firstPerkCircle" value="${firstPerkCircle['title']}" class="h1_dashbordfont">${firstPerkCircle['title']}</h1></div>
                    <div class="divspan224p" onClick={textarea("divspan224p","p_input_dashbordfont","${firstPerkCircle['per']}-","firstPerkCirclePER")}><p id="firstPerkCirclePER" value=${firstPerkCircle['per']} class="h1_dashbordfont">${firstPerkCircle['per']}</p></div>
                    </span>
          
                    <span>
          
                        <div class="divspan24" onClick={textarea("divspan24","h1_input_dashbordfont","${secondPerkCircle['title'].replaceAll(' ', '@@')}-","secondPerkCirclet")}><h1 id="secondPerkCirclet" value="${secondPerkCircle['title']}" class="h1_dashbordfont">${secondPerkCircle['title']}</h1></div>
                        <div class="divspan2277777774p" onClick={textarea("divspan2277777774p","p_input_dashbordfont","${secondPerkCircle['per']}-","secondPerkCirclePER")}><p id="secondPerkCirclePER" value="${secondPerkCircle['per']}" class="h1_dashbordfont">${secondPerkCircle['per']}</p></div>
                        </span>
          
                    </div>
                </div>
                <div class="divimg24" id="secondbodyprocimg" onClick={img("divimg24","secondbodyproctext","${secondPerk['img']}","secondPerkimg")}><img id="secondPerkimg" src="${secondPerk['img']}" value="${secondPerk['img']}" alt=""></div>
          
                
            </div>
            
          
          
          
          
          
          
            <div class="divspac"></div>
            <div class="divspac"></div>
          
          
            <div class="secondbod_yproc">
            <div class="divimg245" id="secondbodyprocimg" onClick={img("divimg245","secondbodyproctext","${fifth['img']}","fifthimg")}><img id="fifthimg" value="${fifth['img']}" src="${fifth['img']}" alt=""></div>
          
                <div class="divspan553b" onClick={textarea("divspan553b","p_input_dashbordfont","${fifth['body1'].replaceAll(' ', '@@')}","fifthbody1")}><p id="fifthbody1" value="${fifth['body1']}" class="h1_dashbordfont">${fifth['body1']}</p></div>
          
            </div>
            <div class="divspac"></div>
            <div class="divspac"></div>
          
            <div class="divspan5553b" onClick={textarea("divspan5553b","p_input_dashbordfont","${fifth['body2'].replaceAll(' ', '@@')}","fifthbody2")}><p id="fifthbody2" class="h1_dashbordfont" value="${fifth['body2']}" >${fifth['body2']}</p></div>
            <div class="divspac"></div>
            <div class="divspac"></div>
            <div class="divspan1" onClick={kasem("${id}",'${getServies()}','${updateServies()}')} id="idIdid"><h1 class="h1_dashbordfont" >update</h1> </div>
          
          
          </div>
            
          `;
            document.querySelector("#ans").appendChild(div);
            document.getElementById("back_but").style.cssText = `
            background-color: black;
            font-size: 1.8vw;
            width: 2vw;
            height: 2vw;
            color: #eee;
            border: 0;
            border-radius: 1vw;
            
            `;
            
          
            
            }}
          
          
          
          className="sigma_service_flex">
          <div class="sigma_service-thumb">
          <i class={type}></i>
          </div>
          <div class="sigma_service-body">
            <h5>
              {title}
            </h5>
            <p>{body}</p>
          </div> 
          </button>
          <button id="removeiteme" onClick={ ()=>{
                 const response =fetch(deleteServies(id),{
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
            }}>X</button>
         
        </div>
    </>
  );
}
export default Sirves_Type;





