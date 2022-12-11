// ---------------------for creat servies label------------------------
//             =======================================================================================
//          =====              ||                     ||                              ================
//      =====                  ||                     ||                              ================
//    =====                    ||        start        ||                              ================
//      =====                  ||                     ||                              ================
//          =====              ||                     ||                              ================
//             =======================================================================================
function input(div,title,body,id){
         document.querySelector(`#${div}`).innerHTML=`
         <div class="sigma_service_flex">
         <div class="sigma_service-thumb">
         <input  type="number" id='replaceAllreplaceAll' class="h1_input_dashbordfont" value="${id}">
         </div>
          <div class="sigma_service-body">
           <input type="text" id="replaceAll" class="h1_input_dashbordfont" value="${title.replaceAll('@@', ' ')}">
           <textarea class="p_input_dashbordfont" id='bodybodybody'>${body.replaceAll('@@', ' ')}</textarea>
           </div>
       </div>
    `;
    document.querySelector(`#${div}`).removeAttribute('onclick');
}
// ================================================================|  =================
// ===============             ||                     ||           |                   ====== 
// ===============             ||                     ||           |                       ======
// ===============             ||         end         ||           |                          =======
// ===============             ||                     ||           |                       ======
// ===============             ||                     ||           |                   ======
// ================================================================|  ===================
// ---------------------for creat servies image input------------------------
function img(div,com,img,id){
    document.querySelector(`.${div}`).innerHTML=`
    <textarea class="${com}" id='${id}'>${img}</textarea>
`;
document.querySelector(`#${id}`).style.cssText = `
background-image: url("https://aux.iconspalace.com/uploads/2142714024901617698.png");
background-repeat: no-repeat;
background-size: 50%;
background-position: center ;
`;


document.querySelector(`.${div}`).removeAttribute('onclick');
}
// ================================================================|  =================
// ===============             ||                     ||           |                   ====== 
// ===============             ||                     ||           |                       ======
// ===============             ||         end         ||           |                          =======
// ===============             ||                     ||           |                       ======
// ===============             ||                     ||           |                   ======
// ================================================================|  ===================

//             =======================================================================================
//          =====              ||                     ||                              ================
//      =====                  ||                     ||                              ================
//    =====                    ||        start        ||                              ================
//      =====                  ||                     ||                              ================
//          =====              ||                     ||                              ================
//             =======================================================================================
// ---------------------for creat servies text input------------------------

function textarea(div,com,body,id){
         document.querySelector(`.${div}`).innerHTML=`
    <textarea class="${com}" id='${id}'>${body.replaceAll('@@', ' ')}</textarea>
    `;
    document.querySelector(`.${div}`).removeAttribute('onclick');
}
// ================================================================|  =================
// ===============             ||                     ||           |                   ====== 
// ===============             ||                     ||           |                       ======
// ===============             ||         end         ||           |                          =======
// ===============             ||                     ||           |                       ======
// ===============             ||                     ||           |                   ======
// ================================================================|  ===================

//             =======================================================================================
//          =====              ||                     ||                              ================
//      =====                  ||                     ||                              ================
//    =====                    ||        start        ||                              ================
//      =====                  ||                     ||                              ================
//          =====              ||                     ||                              ================
//             =======================================================================================

async function kasem(id,get,up){
    var link = get.replace("undefined",`${id}`); 
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

var url = up.replace("undefined",`${id}`); 


xhr.open("PATCH", url); 
 
xhr.setRequestHeader("Content-Type", "application/json"); 
xhr.setRequestHeader("Authorization",`${localStorage.getItem("token")}`)

xhr.onreadystatechange = function () { 
   if (xhr.readyState === 4) { 
      console.log(xhr.status); 
      console.log(xhr.responseText); 
   }}; 
 
var data = JSON.stringify({ 
    "body": document.getElementById('bodybodybody').value?? defaultData.body,
    'fifth': {
        'body1':document.querySelector(`#fifthbody1`).value?? defaultData.fifth["body1"],
        'body2':document.querySelector(`#fifthbody2`).value?? defaultData.fifth["body2"],
        'img': document.querySelector(`#fifthimg`).value?? defaultData.fifth["img"],
    },
    'firstBody': document.querySelector(`#firstBody`).value?? defaultData.firstBody,

    'firstImages':[ 
 document.querySelector(`#firstImages0`).value?? defaultData.firstImages[0],
 document.querySelector(`#firstImages1`).value?? defaultData.firstImages[1],
 document.querySelector(`#firstImages2`).value?? defaultData.firstImages[2],
 document.querySelector(`#firstImages3`).value?? defaultData.firstImages[3],
    ],
    'firstPerkBody': document.querySelector(`#firstPerkBody`).value?? defaultData.firstPerkBody,
    'firstPerkCircle':{
    'per': document.querySelector(`#firstPerkCirclePER`).value?? defaultData.firstPerkCircle["per"],
    'title': document.querySelector(`#firstPerkCircle`).value?? defaultData.firstPerkCircle['title'],
    },
    'firstTitle': document.querySelector(`#firstTitle`).value?? defaultData.firstTitle,
    'fourthBody': document.querySelector(`#fourthBody`).value?? defaultData.fourthBody,
    'fourthTitle': document.querySelector(`#fourthTitle`).value?? defaultData.fourthTitle,
    'perks':[
        {
    'body': document.querySelector(`#perks0b`).value?? defaultData.perks[0]["body"],
    'image': defaultData.perks[0]['image'],
    'title': document.querySelector(`#perks0t`).value?? defaultData.perks[0]['title'],
        },
        {
            'body': document.querySelector(`#perks1b`).value?? defaultData.perks[1]["body"],
            'image': defaultData.perks[1]['image'],
            'title': document.querySelector(`#perks1t`).value?? defaultData.perks[1]['title'],
                }
    ],

    'secondBody': document.querySelector(`#secondBody`).value?? defaultData.secondBody,
    'secondImages': document.querySelector(`#secondImages`).value?? defaultData.secondImages,
    'secondPerk':{ 
    'body': document.querySelector(`#secondPerkbody`).value?? defaultData.secondPerk['body'],
    'img': document.querySelector(`#secondPerkimg`).value?? defaultData.secondPerk['img'],
 
    },
    'secondPerkCircle':{
    'per': document.querySelector(`#secondPerkCirclePER`).value?? defaultData.secondPerkCircle['per'],
    'title': document.querySelector(`#secondPerkCirclet`).value?? defaultData.secondPerkCircle['title'], 
    },

    'secondTitle': document.querySelector(`#secondTitle`).value?? defaultData.secondTitle,
    'thirdBody': document.querySelector(`#thirdBody`).value?? defaultData.thirdBody,
    'thirdTitle': document.querySelector(`#thirdTitle`).value?? defaultData.thirdTitle,
    'title': document.querySelector(`#replaceAll`).value?? defaultData.title,
    'type': document.querySelector(`#replaceAllreplaceAll`).value?? defaultData.type,

   }); 
 
xhr.send(data);
xhr.onload=function (){
if(xhr.status==404){
   var x = document.getElementById("snackbar");
   x.innerHTML= 'failed to update'
   
   x.className = "showError";
 
   setTimeout(function(){ x.className = x.className.replace("showError", ""); }, 3000);  
}else{
 var x = document.getElementById("snackbar");

 x.innerHTML= 'updated successfully'
 x.className = "showw";

 setTimeout(function(){ x.className = x.className.replace("showw", ""); }, 3000);



}
}
}
}
// ================================================================|  =================
// ===============             ||                     ||           |                   ====== 
// ===============             ||                     ||           |                       ======
// ===============             ||         end         ||           |                          =======
// ===============             ||                     ||           |                       ======
// ===============             ||                     ||           |                   ======
// ================================================================|  ===================

//             =======================================================================================
//          =====              ||                     ||                              ================
//      =====                  ||                     ||                              ================
//    =====                    ||        start        ||                              ================
//      =====                  ||                     ||                              ================
//          =====              ||                     ||                              ================
//             =======================================================================================

async function updatdoc(id,Specialties,body,isMale,jobTitle,location,name,profileImage,ratting,rattingNumber,get,up,){
    var idd =document.querySelector(`#${id}`).value;
    console.log(get.replace("undefined",`${idd}`))

    var link = get.replace("undefined",`${idd}`); 

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

var url = up.replace("undefined",`${idd}`); 
var is;

xhr.open("PATCH", url); 
 
xhr.setRequestHeader("Content-Type", "application/json"); 
xhr.setRequestHeader("Authorization",`${localStorage.getItem("token")}`)
if(isMale=="true"){is=false}if(isMale=="false"){is=true}else{defaultData.isMale}

xhr.onreadystatechange = function () { 
   if (xhr.readyState === 4) { 
      console.log(xhr.status); 
      console.log(xhr.responseText); 
   }};
   var nn =defaultData.Specialties.length;
   var num =document.getElementById("thisstatespic").value.replaceAll(",","");
   var lsnum ;
   if(num> nn){
      lsnum=num
   }else{

      lsnum=nn
   }
var sp =[];
console.log(document.getElementById(`input_num1`).value);
for (let index = 0; index < lsnum.length; index++) {
   if (document.getElementById(`input_num${index+1}`).value=='delete') {
      
   }else{
   sp.push(document.getElementById(`input_num${index+1}`).value==null ||document.getElementById(`input_num${index+1}`).value.length==0? defaultData.Specialties[index] :document.getElementById(`input_num${index+1}`).value)
   }
}
// var newSp =  sp.indexOf('delete')


 

var data = JSON.stringify({
     
    body:document.querySelector(`#thisstatebody`).value.length ==0 ? defaultData.body :document.querySelector(`#thisstatebody`).value,
    isMale:is,
    jobTitle:document.querySelector(`#${jobTitle}`).value.length ==0 ? defaultData.title :document.querySelector(`#${jobTitle}`).value,
    location:document.querySelector(`#${location}`).value.length ==0 ? defaultData.location :document.querySelector(`#${location}`).value,
    name:document.querySelector(`#${name}`).value.length==0 ? defaultData.name :document.querySelector(`#${name}`).value,
    ratting:document.querySelector(`#${ratting}`).value.length==0? defaultData.ratting :document.querySelector(`#${ratting}`).value,
    rattingNumber:document.querySelector(`#${rattingNumber}`).value.length==0? defaultData.rattingNumber :document.querySelector(`#${rattingNumber}`).value,
    profileImage:document.querySelector(`#${profileImage}`).value.length==0? defaultData.profileImage :document.querySelector(`#${profileImage}`).value,
    Specialties:sp

}); 
 
xhr.send(data);
xhr.onload=function (){
   if(xhr.status==404){
      var x = document.getElementById("snackbar");
      x.innerHTML= 'failed to update'
      
      x.className = "showError";
    
      setTimeout(function(){ x.className = x.className.replace("showError", ""); }, 3000);  
   }else{
    var x = document.getElementById("snackbar");
   
    x.innerHTML= 'updated successfully'
    x.className = "showw";
   
    setTimeout(function(){ x.className = x.className.replace("showw", ""); }, 3000);
   
   
   }
   }
}
    
}
// ================================================================|  =================
// ===============             ||                     ||           |                   ====== 
// ===============             ||                     ||           |                       ======
// ===============             ||         end         ||           |                          =======
// ===============             ||                     ||           |                       ======
// ===============             ||                     ||           |                   ======
// ================================================================|  ===================

// --------------------- update clinic ------------------------
//             =======================================================================================
//          =====              ||                     ||                              ================
//      =====                  ||                     ||                              ================
//    =====                    ||        start        ||                              ================
//      =====                  ||                     ||                              ================
//          =====              ||                     ||                              ================
//             =======================================================================================


async function updatclinic(id,Specialties,body,jobTitle,location,name,profileImage,ratting,rattingNumber,get,up){

    console.log(id)
    var idd =document.querySelector(`#${id}`).value;
    var link = get.replace("undefined",`${idd}`); 
 
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

var url = up.replace("undefined",`${idd}`); 
xhr.open("PATCH", url); 
 
xhr.setRequestHeader("Content-Type", "application/json"); 
xhr.setRequestHeader("Authorization",`${localStorage.getItem("token")}`)

xhr.onreadystatechange = function () { 
   if (xhr.readyState === 4) { 
      console.log(xhr.status); 
      console.log(xhr.responseText); 
   }};


   var nn =defaultData.Specialties.length;
   var num =document.getElementById("thisstatespic1").value.replaceAll(",","");
   var lsnum ;
   if(num> nn){
      lsnum=num
   }else{
      lsnum=nn
   }
var sp =[];
console.log(document.getElementById(`input_num11`).value);
for (let index = 0; index < lsnum.length; index++) {
   if (document.getElementById(`input_num1${index+1}`).value=='delete') {
      
   }else{
   sp.push(document.getElementById(`input_num1${index+1}`).value==null ||document.getElementById(`input_num1${index+1}`).value.length==0? defaultData.Specialties[index] :document.getElementById(`input_num1${index+1}`).value)
   }
}
 
var data = JSON.stringify({
    Specialties:sp,
    body:document.querySelector(`#${body}`).value.length ==0 ? defaultData.body :document.querySelector(`#${body}`).value,
    type:document.querySelector(`#${jobTitle}`).value.length ==0 ? defaultData.title :document.querySelector(`#${jobTitle}`).value,
    location:document.querySelector(`#${location}`).value.length ==0 ? defaultData.location :document.querySelector(`#${location}`).value,
    clinicName:document.querySelector(`#${name}`).value.length==0 ? defaultData.name :document.querySelector(`#${name}`).value,
    ratting:document.querySelector(`#${ratting}`).value.length==0? defaultData.ratting :document.querySelector(`#${ratting}`).value,
    rattingNumber:document.querySelector(`#${rattingNumber}`).value.length==0? defaultData.rattingNumber :document.querySelector(`#${rattingNumber}`).value,
    clinicImage:document.querySelector(`#${profileImage}`).value.length==0? defaultData.profileImage :document.querySelector(`#${profileImage}`).value,

}); 
 
xhr.send(data);
xhr.onload=function (){
   if(xhr.status==404){
      var x = document.getElementById("snackbar");
      x.innerHTML= 'failed to update'
      
      x.className = "showError";
    
      setTimeout(function(){ x.className = x.className.replace("showError", ""); }, 3000);  
   }else{
    var x = document.getElementById("snackbar");
   
    x.innerHTML= 'updated successfully'
    x.className = "showw";
   
    setTimeout(function(){ x.className = x.className.replace("showw", ""); }, 3000);
    window.location.reload() 
   
   
   }
   }
}
    
}
// ================================================================|  =================
// ===============             ||                     ||           |                   ====== 
// ===============             ||                     ||           |                       ======
// ===============             ||         end         ||           |                          =======
// ===============             ||                     ||           |                       ======
// ===============             ||                     ||           |                   ======
// ================================================================|  ===================

//             =======================================================================================
//          =====              ||                     ||                              ================
//      =====                  ||                     ||                              ================
//    =====                    ||        start        ||                              ================
//      =====                  ||                     ||                              ================
//          =====              ||                     ||                              ================
//             =======================================================================================


async function updatBlog(id,title,img,blogsource,blogwritter,blogdate,body,get,up){


    console.log(id)
    var idd =document.querySelector(`#${id}`).value;
    var link = get.replace("undefined",`${idd}`); 
 
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

var url = up.replace("undefined",`${idd}`); 


xhr.open("PATCH", url); 
 
xhr.setRequestHeader("Content-Type", "application/json"); 
xhr.setRequestHeader("Authorization",`${localStorage.getItem("token")}`)

xhr.onreadystatechange = function () { 
   if (xhr.readyState === 4) { 
      console.log(xhr.status); 
      console.log(xhr.responseText); 
   }};

 
var data = JSON.stringify({
     
    body:document.querySelector(`#${body}`).value.length ==0 ? defaultData.body :document.querySelector(`#${body}`).value,
    title:document.querySelector(`#${title}`).value.length ==0 ? defaultData.title :document.querySelector(`#${title}`).value,
    image:document.querySelector(`#${img}`).value.length ==0 ? defaultData.img :document.querySelector(`#${img}`).value,
    writter:document.querySelector(`#${blogwritter}`).value.length ==0 ? defaultData.writter :document.querySelector(`#${blogwritter}`).value,
    source:document.querySelector(`#${blogsource}`).value.length ==0 ? defaultData.blogsource :document.querySelector(`#${blogsource}`).value,
    date: document.querySelector(`#${blogdate}`).value.length ==0 ? defaultData.blogdate :document.querySelector(`#${blogdate}`).value,
}); 
 
xhr.send(data);
xhr.onload=function (){
   if(xhr.status==404){
      var x = document.getElementById("snackbar");
      x.innerHTML= 'failed to update'
      
      x.className = "showError";
    
      setTimeout(function(){ x.className = x.className.replace("showError", ""); }, 3000);  
   }else{
    var x = document.getElementById("snackbar");
   
    x.innerHTML= 'updated successfully'
    x.className = "showw";
   
    setTimeout(function(){ x.className = x.className.replace("showw", ""); }, 3000);
    window.location.reload() 
   
   
   }
   }
}
    
}
// ================================================================|  =================
// ===============             ||                     ||           |                   ====== 
// ===============             ||                     ||           |                       ======
// ===============             ||         end         ||           |                          =======
// ===============             ||                     ||           |                       ======
// ===============             ||                     ||           |                   ======
// ================================================================|  ===================

// --------------------- update team ------------------------
//             =======================================================================================
//          =====              ||                     ||                              ================
//      =====                  ||                     ||                              ================
//    =====                    ||        start        ||                              ================
//      =====                  ||                     ||                              ================
//          =====              ||                     ||                              ================
//             =======================================================================================


async function updatteam(id,name,img,title,get,up){


    console.log(id)
    var idd =document.querySelector(`#${id}`).value;
    var link = get.replace("undefined",`${idd}`); 
 
    var xml = new XMLHttpRequest(); 
    var defaultData;

    xml.open("GET", link); 
     
    xml.setRequestHeader("Content-Type", "application/json"); 
    xml.setRequestHeader("Authorization",`${localStorage.getItem("token")}`)
    
    xml.onreadystatechange = function () { 
       if (xml.readyState === 4) { 
          console.log(xml.status); 
          
          defaultData= JSON.parse(xml.response) 
       }}; 
     
    
     
    xml.send();

xml.onloadend = ()=>{
    console.log(defaultData);

    var xhr = new XMLHttpRequest(); 

var url = up.replace("undefined",`${idd}`); 


xhr.open("PATCH", url); 
 
xhr.setRequestHeader("Content-Type", "application/json"); 
xhr.setRequestHeader("Authorization",`${localStorage.getItem("token")}`)

xhr.onreadystatechange = function () { 
   if (xhr.readyState === 4) { 
      console.log(xhr.status); 
      console.log(xhr.responseText); 
   }};

 
var data = JSON.stringify({
     
    title:document.querySelector(`#${title}`).value.length ==0 ? defaultData.title :document.querySelector(`#${title}`).value,
    image:document.querySelector(`#${img}`).value.length ==0 ? defaultData.img :document.querySelector(`#${img}`).value,
    name: document.querySelector(`#${name}`).value.length ==0 ? defaultData.name :document.querySelector(`#${name}`).value,
}); 
 
xhr.send(data);
xhr.onload=function (){
   if(xhr.status==404){
      var x = document.getElementById("snackbar");
      x.innerHTML= 'failed to update'
      
      x.className = "showError";
    
      setTimeout(function(){ x.className = x.className.replace("showError", ""); }, 3000);  
   }else{
    var x = document.getElementById("snackbar");
   
    x.innerHTML= 'updated successfully'
    x.className = "showw";
   
    setTimeout(function(){ x.className = x.className.replace("showw", ""); }, 3000);
    window.location.reload() 
   
   
   }
   }
}
    
}
// ================================================================|  =================
// ===============             ||                     ||           |                   ====== 
// ===============             ||                     ||           |                       ======
// ===============             ||         end         ||           |                          =======
// ===============             ||                     ||           |                       ======
// ===============             ||                     ||           |                   ======
// ================================================================|  ===================




//             =======================================================================================
//          =====              ||                     ||                              ================
//      =====                  ||                     ||                              ================
//    =====                    ||        start        ||                              ================
//      =====                  ||                     ||                              ================
//          =====              ||                     ||                              ================
//             =======================================================================================


async function updatClient(id,name,img,title,get,up){


    console.log(id)
    var idd =document.querySelector(`#${id}`).value;
    var link = get.replace("undefined",`${idd}`); 
 
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

var url = up.replace("undefined",`${idd}`); 


xhr.open("PATCH", url); 
 
xhr.setRequestHeader("Content-Type", "application/json"); 
xhr.setRequestHeader("Authorization",`${localStorage.getItem("token")}`)

xhr.onreadystatechange = function () { 
   if (xhr.readyState === 4) { 
      console.log(xhr.status); 
      console.log(xhr.responseText); 
   }};

 
var data = JSON.stringify({
     
    body:document.querySelector(`#${title}`).value.length ==0 ? defaultData.body :document.querySelector(`#${title}`).value,
    image:document.querySelector(`#${img}`).value.length ==0 ? defaultData.img :document.querySelector(`#${img}`).value,
    name: document.querySelector(`#${name}`).value.length ==0 ? defaultData.name :document.querySelector(`#${name}`).value,
}); 
 
xhr.send(data);
xhr.onload=function (){
   if(xhr.status==404){
      var x = document.getElementById("snackbar");
      x.innerHTML= 'failed to update'
      
      x.className = "showError";
    
      setTimeout(function(){ x.className = x.className.replace("showError", ""); }, 3000);  
   }else{
    var x = document.getElementById("snackbar");
   
    x.innerHTML= 'updated successfully'
    x.className = "showw";
   
    setTimeout(function(){ x.className = x.className.replace("showw", ""); }, 3000);
    window.location.reload() 
   
   
   }
   }
}
    
}
// ================================================================|  =================
// ===============             ||                     ||           |                   ===== 
// ===============             ||                     ||           |                       =====
// ===============             ||         end         ||           |                          =====
// ===============             ||                     ||           |                       =====
// ===============             ||                     ||           |                   =====
// ================================================================|  ===================


//             =======================================================================================
//          =====              ||                     ||                              ================
//      =====                  ||                     ||                              ================
//    =====                    ||        start        ||                              ================
//      =====                  ||                     ||                              ================
//          =====              ||                     ||                              ================
//             =======================================================================================




async function updatDo(id,name,img,title,get,up){
    console.log(id)
    var idd =document.querySelector(`#${id}`).value;
    var link =get.replace("undefined",`${idd}`); 
 
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

var url =up.replace("undefined",`${idd}`); 
xhr.open("PATCH", url); 
 
xhr.setRequestHeader("Content-Type", "application/json"); 
xhr.setRequestHeader("Authorization",`${localStorage.getItem("token")}`)

xhr.onreadystatechange = function () { 
   if (xhr.readyState === 4) { 
      console.log(xhr.status); 
      console.log(xhr.responseText); 
   }};

 
var data = JSON.stringify({
     
    body:document.querySelector(`#${title}`).value.length ==0 ? defaultData.body :document.querySelector(`#${title}`).value,
    image:document.querySelector(`#${img}`).value.length ==0 ? defaultData.img :document.querySelector(`#${img}`).value,
    title: document.querySelector(`#${name}`).value.length ==0 ? defaultData.title :document.querySelector(`#${name}`).value,
}); 
 
xhr.send(data);
xhr.onload=function (){
   if(xhr.status==404){
      var x = document.getElementById("snackbar");
      x.innerHTML= 'failed to update'
      
      x.className = "showError";
    
      setTimeout(function(){ x.className = x.className.replace("showError", ""); }, 3000);  
   }else{
    var x = document.getElementById("snackbar");
   
    x.innerHTML= 'updated successfully'
    x.className = "showw";
   
    setTimeout(function(){ x.className = x.className.replace("showw", ""); }, 3000);
    window.location.reload() 
   
   
   }
   }
}
}




// ================================================================|  =================
// ===============             ||                     ||           |                   ===== 
// ===============             ||                     ||           |                       =====
// ===============             ||         end         ||           |                          =====
// ===============             ||                     ||           |                       =====
// ===============             ||                     ||           |                   =====
// ================================================================|  ===================







//             =======================================================================================
//          =====              ||                     ||                              ================
//      =====                  ||                     ||                              ================
//    =====                    ||        start        ||                              ================
//      =====                  ||                     ||                              ================
//          =====              ||                     ||                              ================
//             =======================================================================================




async function updatfaq(get,up){

   var idd =document.querySelector(`#Faqid`).value;
   var link =get.replace("undefined",`${idd}`); 

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

var url =up.replace("undefined",`${idd}`); 
xhr.open("PATCH", url); 

xhr.setRequestHeader("Content-Type", "application/json"); 
xhr.setRequestHeader("Authorization",`${localStorage.getItem("token")}`)

xhr.onreadystatechange = function () { 
  if (xhr.readyState === 4) {
     console.log(xhr.status); 
     console.log(xhr.responseText); 
  }};

var list=defaultData.list;

var listNumber = document.getElementById('this_Q').value.replaceAll(',','').length
for (let index = 0; index < listNumber; index++) {
   !list[index]? list.push({qu: document.getElementById(`input_Q${index+1}`).value}): document.getElementById(`input_Q${index+1}`).value?list[index].qu = document.getElementById(`input_Q${index+1}`).value:list[index]['qu']
   !list[index]? list.push({answer: document.getElementById(`input_A${index+1}`).value}): document.getElementById(`input_A${index+1}`).value?list[index].answer = document.getElementById(`input_A${index+1}`).value:list[index]['answer']
   
}

var data = JSON.stringify({
    
   title: document.querySelector(`#Faqtitle`).value.length ==0 ? defaultData.title :document.querySelector(`#Faqtitle`).value,
   list:list
}); 

xhr.send(data);
xhr.onload=function (){
  if(xhr.status==404){
     var x = document.getElementById("snackbar");
     x.innerHTML= 'failed to update'
     
     x.className = "showError";
   
     setTimeout(function(){ x.className = x.className.replace("showError", ""); }, 3000);  
  }else{
   var x = document.getElementById("snackbar");
  
   x.innerHTML= 'updated successfully'
   x.className = "showw";
  
   setTimeout(function(){ x.className = x.className.replace("showw", ""); }, 3000);
  
  
  }
  }
}
}




// ================================================================|  =================
// ===============             ||                     ||           |                   ===== 
// ===============             ||                     ||           |                       =====
// ===============             ||         end         ||           |                          =====
// ===============             ||                     ||           |                       =====
// ===============             ||                     ||           |                   =====
// ================================================================|  ===================







// var nn =defaultData.list.length;
// var num =document.getElementById("this_Q").value.replaceAll(",","").length;
// console.log(num);
// console.log(nn);
// var lsnum ;
// if(num > nn){
//    lsnum=num
// }else{
//    lsnum=nn
// }
// console.log(lsnum);

// var list =[];
// console.log(document.getElementById(`input_Q1`).value);
// var e=0;
// for (let index = 0; index < lsnum; index++) {


//  e++
//  console.log(e);
//  if (false) {
    
//  }else{
//  list.push({
//     qu:document.getElementById(`input_Q${e}`).value==null ||
//     document.getElementById(`input_Q${e}`).value.length==0? 
//     defaultData.list[e]["qu"] :document.getElementById(`input_Q${e}`).value,
//     answer:document.getElementById(`input_A${e}`).value==null ||document.getElementById(`input_A${e}`).length==0? defaultData.list[e]["answer"] :document.getElementById(`input_A${e}`).value
//  })
//  }
// }