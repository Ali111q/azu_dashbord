var teamdb =[

    {
        'imgl':"assets/img/home-2/255x255.jpg",
        'ame':"qabel",
        'jobtit':"team leader",
        'flink':"#",
        'ilink':"#",
        'tlink':"#"
    },    {
        'imgl':"assets/img/home-2/255x255.jpg",
        'ame':"qabel",
        'jobtit':"team leader",
        'flink':"#",
        'ilink':"#",
        'tlink':"#"
    },    {
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

   function biogNews(img_ink, history, by, supject_tip, titel) {
    const div1 = document.createElement("div");
    div1.className = "col-lg-4 col-md-6";
  
    const arrticle = document.createElement("article");
    arrticle.className = "sigma_post style-15";
  
    const div2 = document.createElement("div");
    div2.className = "sigma_post-thumb";
  
    const a1 = document.createElement("a");
    a1.innerHTML.href = "sigma_post-thumb";
  
    const img1 = document.createElement("img");
    img1.src = img_ink;
    img1.alt = "img";
  
    document.getElementById("myDIV").appendChild(div1);
    div1.appendChild(arrticle);
    arrticle.appendChild(div2);
    div2.appendChild(a1);
    a1.appendChild(img1);
  
    const div3 = document.createElement("div");
    div3.className = "sigma_post-body";
    arrticle.appendChild(div3);
  
    const div4 = document.createElement("div");
    div4.className = "sigma_post-content";
    div3.appendChild(div4);
  
    const a2 = document.createElement("a");
    a2.className = "btn-link";
    a2.innerHTML.href = "blog-details.html";
    div3.appendChild(a2);
  
  
    const div5 = document.createElement("div");
    div5.className = "sigma_post-meta is-absolute";
    div4.appendChild(div5);
  
    const a3 = document.createElement("a");
    a3.innerHTML = history;
    a3.className = "sigma_post-date";
    a3.href = "blog-details.html";
    div5.appendChild(a3);
  
    const div6 = document.createElement("div");
    div6.className = "sigma_post-meta";
    div4.appendChild(div6);
  
    const ul1 = document.createElement("ul");
    div6.appendChild(ul1);
  
    const li1 = document.createElement("li");
    ul1.appendChild(li1);
  
    const a4 = document.createElement("a")
    a4.href = "blog-details.html";
    a4.innerHTML = `by ${by}`;
    li1.appendChild(a4);
  
    const i1 = document.createElement("i")
    i1.className = "fal fa-user";
    i1.id = "fal_fa-folder-open";
    a4.appendChild(i1);
  
  
  
    const li2 = document.createElement("li");
    ul1.appendChild(li2);
  
    const a5 = document.createElement("a")
    a5.href = "blog-details.html";
    a5.innerHTML = supject_tip;
    li2.appendChild(a5);
  
    const i2 = document.createElement("i")
    i2.className = "fal fa-folder-open";
    i2.id = "fal_fa-folder-open";
    a5.appendChild(i2);
  
  
    const h5 = document.createElement("h5");
    div4.appendChild(h5);
  
    const a6 = document.createElement("a");
    a6.innerHTML = titel;
    a6.href = "blog-details.html";
    h5.appendChild(a6);
  
    const a7 = document.createElement("a");
    a7.className = "btn-link";
    a7.innerHTML = "Read more ";
    a7.href = "blog-details.html";
    div3.appendChild(a7)
  
  
  };
  
  var info = {
    'img_ink': "https://www.cancer.gov/sites/g/files/xnrzdm211/files/styles/cgov_article/public/cgov_image/media_image/2022-04/CGOV-15849_Cytokine-Factories-Edit_040622_V1a.jpg?h=6f89a57d&itok=OIqbUsjh",
    'history': "April 7, 2022,",
    'by': "  NCI Staff",
    'sorslink': "https://www.nature.com/articles/s41586-021-03843-2",
    'titel': "Implanted “Drug Factories” Deliver Cancer Treatment Directly to Tumors",
    "sup": "sup",
    'body': "Researchers have developed tiny “drug factories” that can be implanted near tumors in the abdominal cavity to fight cancer, a new study in mice shows. The drug factories, which produce an immune-boostingmolecule called interleukin-2 (IL-2), eliminated tumors in mouse models of ovarian and colorectalcancer.Clinical testing of this approach in people with ovarian cancer is expected to start later this year,said the study’s senior investigator, Omid Veiseh, Ph.D., a bioengineer at Rice University."
  
  
  };



  biogNews(info['img_ink'], info['history'], info['by'], info['sup'], info['titel'])





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
        

        
      ]

function home2show (titelshow,titel,body,imglink){

  document.querySelector("#titelshow").innerText=titelshow;

const div222 =document.createElement("div");
div222.className="col-md-4 col-sm-6"
document.querySelector("#servistip26734576235").appendChild(div222);

const div22233 =document.createElement("div");
div22233.className="sigma_service style-18"
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

home2show(element ['titelshow'],element['title'],element['body'],element['imglink']);

});