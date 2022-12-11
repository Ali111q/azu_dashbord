var home2showdt =[
  {
    'titelshow':"any",
  'title':"titel",
  'body':"body",
  'imglink':"flaticon-stethoscope"
},
  {
    'titelshow':"any",
    'title':"titel",
    'body':"body",
    'imglink':"flaticon-pills"},
    {
      'titelshow':"any",
      'title':"titel",
      'body':"body",
      'imglink':"flaticon-medicine"},
      {
        'titelshow':"any",
        'title':"titel",
        'body':"body",
        'imglink':"flaticon-hospital-bed"},
        {
          'titelshow':"any",
        'title':"titel",
        'body':"body",
        'imglink':"flaticon-medical-record"
      },
          {
            'titelshow':"any",
            'title':"titel",
            'body':"body",
            'imglink':"flaticon-pills"}
      
        

        
      ]

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

function home2show (titel,body,imglink){


const div222 =document.createElement("div");
div222.className="col-md-4 col-sm-6"
document.querySelector("#servistip26734576235").appendChild(div222);

const div22233 =document.createElement("div");
div22233.className="sigma_service style-18 has-bg"
div222.appendChild(div22233);


const div322 =document.createElement("div");
div322.className="sigma_service-thumb"
div22233.appendChild(div322);

const img122=document.createElement("i");
img122.className=imglink;
div322.appendChild(img122);


const momdiv =document.createElement("div");
momdiv.className="sigma_service-body";
div22233.appendChild(momdiv);

const h522 =document.createElement("h5");
momdiv.appendChild(h522);

const a22=document.createElement("a");
a22.innerHTML=titel;
a22.href="service-details.html";
h522.appendChild(a22);


const p22=document.createElement("p");
p22.innerHTML=body;
momdiv.appendChild(p22);



}        

home2showdt.forEach(element => {

home2show(element['title'],element['body'],element['imglink']);

});


 function sigma_instagram_slider (img_src,harf){
  const a =document.createElement("a");
  a.href=harf;
  document.querySelector("#instagram-slider").appendChild(a)

  const img =document.createElement("img");
  img.src=img_src;
  a.appendChild(img);
 }
 sigma_instagram.forEach( ee=> {
     sigma_instagram_slider (ee['imgsrc'],ee['harf']);
 });
