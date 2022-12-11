var teamdb =[
  {
      'imgl':"assets/img/home-2/255x255.jpg",
      'ame':"qabel",
      'jobtit':"team leader",
      'flink':"#",
      'ilink':"#",
      'tlink':"#"
  },{
      'imgl':"assets/img/home-2/255x255.jpg",
      'ame':"qabel",
      'jobtit':"team leader",
      'flink':"#",
      'ilink':"#",
      'tlink':"#"
  },{
      'imgl':"assets/img/home-2/255x255.jpg",
      'ame':"qabel",
      'jobtit':"team leader",
      'flink':"#",
      'ilink':"#",
      'tlink':"#"
  
},{
  'imgl':"assets/img/home-2/255x255.jpg",
  'ame':"qabel",
  'jobtit':"team leader",
  'flink':"#",
  'ilink':"#",
  'tlink':"#"
}
]
function ourteam(imgl,ame,jobtit,flink,ilink,tlink){

  const d1 =document.createElement("div");
  d1.className="col-lg-3 col-md-4 col-sm-6"
  document.querySelector("#teamcon").appendChild(d1);

  const d2 =document.createElement("div");
  d2.className="sigma_team style-15";
  d1.appendChild(d2);

  const d3 =document.createElement("div");
  d3.className="sigma_team-thumb";
  d2.appendChild(d3);

  const img1 =document.createElement("img");
  img1.src=imgl
  d3.appendChild(img1);

  const d4 =document.createElement("div");
  d4.className="sigma_team-body";
  d2.appendChild(d4);

  const h522 =document.createElement("h5");
  d4.appendChild(h522);

 const a22=document.createElement("a");
  a22.innerHTML=ame;
  a22.href="#";
  h522.appendChild(a22);

  const p22=document.createElement("div");
  p22.className="sigma_team-categories";
  d4.appendChild(p22);

 const a222 =document.createElement("a");
  a222.innerText=jobtit;
  a222.className="sigma_team-category"
  a222.href="#"
  p22.appendChild(a222);

  const ul1 =document.createElement("ul");
  ul1.className="sigma_social-icons";
  d4.appendChild(ul1);

  const li1 =document.createElement("li");
  ul1.appendChild(li1);
  const li2 =document.createElement("li");
  ul1.appendChild(li2);
  const li3 =document.createElement("li");
  ul1.appendChild(li3);

  const a3 =document.createElement("a");
  a3.href=flink;
  li1.appendChild(a3);

  const i1 =document.createElement("i");
  i1.className="fab fa-facebook-f";
  a3.appendChild(i1);

  const a34 =document.createElement("a");
  a34.href=tlink;
  li2.appendChild(a34);

  const i12 =document.createElement("i");
  i12.className="fab fa-twitter";
  a34.appendChild(i12);

  const a345 =document.createElement("a");
  a345.href=ilink;
  li3.appendChild(a345);

  const i123 =document.createElement("i");
  i123.className="fab fa-instagram";
  a345.appendChild(i123);

}
teamdb.forEach(element => {
  ourteam(element['imgl'],element['ame'],element['jobtit'],element['flink'],element['ilink'],element['tlink'])
});
var sigma_instagram =[
  {
    'imgsrc':"assets/img/home-1/376x430.jpg"
    ,'harf':"#"
  },
  {
    'imgsrc':"assets/img/home-1/376x430.jpg"
    ,'harf':"#"
  },
  {
    'imgsrc':"assets/img/home-1/376x430.jpg"
    ,'harf':"#"
  },
  {
    'imgsrc':"assets/img/home-1/376x430.jpg"
    ,'harf':"#"
  },
  {
    'imgsrc':"assets/img/home-1/376x430.jpg"
    ,'harf':"#"
  },
  {
    'imgsrc':"assets/img/home-1/376x430.jpg"
    ,'harf':"#"
  }
 ]

 function sigma_instagram_slider (img_src,harf){
  const a =document.createElement("a");
  a.href=harf;
  document.querySelector(".sigma_instagram-slider").appendChild(a)

  const img =document.createElement("img");
  img.src=img_src;
  a.appendChild(img);
 }
 sigma_instagram.forEach( ee=> {
     sigma_instagram_slider (ee['imgsrc'],ee['harf']);
 });


 function numedit (had2,had1,hospar3,hospar1,hospar2,hosname,simg,fimg, Customersnum,Years_Practical_Experience,Awesome_Team_Members,Customers, Customersnumtit,Years_Practical_Experiencetit,Awesome_Team_Memberstit,Customerstit){
  const firstnum=document.querySelector("#firstnum");
  firstnum.innerText=Customersnumtit;

  const scendnum=document.querySelector("#scendnum");
  scendnum.innerText=Years_Practical_Experiencetit;

  const terdnum=document.querySelector("#terdnum");
  terdnum.innerText=Awesome_Team_Memberstit;

  const fornum=document.querySelector("#fornum");
  fornum.innerText=Customerstit;


  const ftxt=document.querySelector("#ftex");
  ftxt.innerText=Customersnum;

  const stxt=document.querySelector("#stxt");
  stxt.innerText=Years_Practical_Experience;

  const ttxt=document.querySelector("#ttxt");
  ttxt.innerText=Awesome_Team_Members;

  const ftxtx=document.querySelector("#ftxt");
  ftxtx.innerText=Customers;


  const fimg112=document.querySelector("#fimg");
  fimg112.src=fimg;

  const simg122=document.querySelector("#simg");
  simg122.src=simg;
  const hospar12132=document.querySelector("#hosname");
  hospar12132.innerText=hosname;
  
  const hospar1212=document.querySelector("#hospar1");
  hospar1212.innerText=hospar1;

  const hospar122=document.querySelector("#hospar2");
  hospar122.innerText=hospar2;

  const hospar1232=document.querySelector("#hospar3");
  hospar1232.innerText=hospar3;

  const hospar142=document.querySelector("#had1");
  hospar142.innerText=had1;

  const hospar1242=document.querySelector("#had2");
  hospar1242.innerText=had2;


}
numedit("any","any","any","any","any","any","assets/img/home-1/400x280.jpg","assets/img/home-1/400x280.jpg","111","111","111","111","111","111","111","111")
