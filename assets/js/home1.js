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

  var docbord=[
    {
      'name':"name",
    'job_title':"titel",
    'location':"location",
    'imglink':"assets/img/home-1/348x350.jpg"
  },
    {
      'name':"name",
      'titjob_titlele':"titel",
      'location':"location",
      'imglink':"assets/img/home-1/348x350.jpg"},
      {
        'name':"name",
        'titjob_titlele':"titel",
        'location':"location",
        'imglink':"assets/img/home-1/348x350.jpg"},
        {
          'name':"name",
          'job_title':"titel",
          'location':"location",
          'imglink':"assets/img/home-1/348x350.jpg"},
          {
            'name':"name",
            'job_title':"titel",
            'location':"location",
            'imglink':"assets/img/home-1/348x350.jpg"},
            {
              'name':"name",
              'job_title':"titel",
              'location':"location",
              'imglink':"assets/img/home-1/348x350.jpg"},
              {
                'name':"name",
                'job_title':"titel",
                'location':"location",
                'imglink':"assets/img/home-1/348x350.jpg"},
                {
                  'name':"name",
                  'job_title':"titel",
                  'location':"location",
                  'imglink':"assets/img/home-1/348x350.jpg"},
          {    'name':"name",
            'job_title':"titel",
            'location':"location",
            'imglink':"assets/img/home-1/348x350.jpg"}
          
        ]
  
  
  function creatdocbord(name,job_title,location,imglink){



    const d3 =document.createElement("div");
    d3.className="sigma_team style-14";
    document.querySelector(".sigma_team-slider-2").appendChild(d3);
  
  
  
    const d4 =document.createElement("div");
    d4.className="sigma_team-thumb";
    d3.appendChild(d4);
  
     const img1 =document.createElement("img");
    img1.src=imglink;
    img1.alt="document";
    d4.appendChild(img1)
   
  
    const d5 =document.createElement("div");
    d5.className="sigma_team-body";
    d3.appendChild(d5);
  
    const h522 =document.createElement("h5");
    
    d5.appendChild(h522);
  
   const a22=document.createElement("a");
    a22.innerHTML=name;
    a22.href="#";
    h522.appendChild(a22);
  
    const p22=document.createElement("div");
    p22.className="sigma_team-categories";
    d5.appendChild(p22);
  
   const a222 =document.createElement("a");
    a222.innerText=job_title;
    a222.className="sigma_team-category"
    a222.href="#"
    p22.appendChild(a222)
  
  
    const d6 =document.createElement("div");
    d6.className="sigma_team-info";
    d5.appendChild(d6);  
  
    const span =document.createElement("span");
    span.innerText=location;
    d6.appendChild(span);
   
  
  
  
  
  
    const i1234 =document.createElement("i");
    i1234.className="fal fa-map-marker-alt";
    span.appendChild(i1234);
  
  
  }
  docbord.forEach(element => {
      creatdocbord(element['name'],element['titjob_titlele'],element['location'],element['imglink']);
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
  
  
  
  function col_lg(img_ink, history, by, sorslink, titel, body) {
    const add = document.getElementById("addpost");
    const a1 = document.createElement("a");
    a1.className = "gallery-thumb";
    add.appendChild(a1);
  
    const img1 = document.createElement("img");
    img1.src = img_ink;
    img1.alt = "post";
    a1.appendChild(img1);
  
    const df = document.createElement("div");
    df.className = "sigma_post-details-meta";
    add.appendChild(df);
  
    const spAo = document.createElement("span");
    spAo.innerHTML = by;
    df.appendChild(spAo);
  
    const iola = document.createElement("i");
    iola.className = "far fa-user";
    spAo.appendChild(iola);
  
    const sthan = document.createElement("span");
    sthan.innerHTML = `by  ${by}`;
    df.appendChild(sthan);
  
    const ithan = document.createElement("i");
    ithan.innerHTML = history;
    iola.className = "far fa-calendar-alt";
    sthan.appendChild(ithan);
  
    const h1 = document.createElement("h2");
    h1.innerHTML = titel
    h1.className = "entry-title";
    add.appendChild(h1);
  
    const pola = document.createElement("p");
    pola.innerHTML = body;
    add.appendChild(pola);
  
    const blockquote = document.createElement("blockquote");
    add.appendChild(blockquote);
  
    const a3 = document.createElement("a");
    a3.innerHTML = " Read more";
    a3.href = sorslink;
    blockquote.appendChild(a3);
  
  
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
  

 
 
    /////--------------------------------------------------------------------
  var serviscap =[
    {
    'title':"titel",
    'body':"titel",
    'imglink':"assets/img/home-1/300x240.jpg"
  },
    {
      'title':"titel",
      'body':"titel",
      'imglink':"assets/img/home-1/300x240.jpg"},
      {
        'title':"titel",
        'body':"titel",
        'imglink':"assets/img/home-1/300x240.jpg"},
        {
          'title':"titel",
          'body':"titel",
          'imglink':"assets/img/home-1/300x240.jpg"},
          {
            'title':"titel",
            'body':"titel",
            'imglink':"assets/img/home-1/300x240.jpg"},
            {
              'title':"titel",
              'body':"titel",
              'imglink':"assets/img/home-1/300x240.jpg"}
  ]
  
  
  
  
    function displayserves(titel,body,imglink){
  
      const div122 =document.createElement("div");
      div122.className="col-lg-4 col-md-6";
      document.querySelector("#displayserves").appendChild(div122);
  
      const div222 =document.createElement("div");
      div222.className="sigma_service style-17"
      div122.appendChild(div222);
  
      const div322 =document.createElement("div");
      div322.className="sigma_service-thumb"
      div222.appendChild(div322);
  
      const img122=document.createElement("img");
      img122.src=imglink;
      img122.alt="img";
      div322.appendChild(img122);
  
  
      const momdiv =document.createElement("div");
      momdiv.className="sigma_service-body";
      div222.appendChild(momdiv);
  
      const h522 =document.createElement("h5");
      momdiv.appendChild(h522);
  
      const a22=document.createElement("a");
      a22.innerHTML=titel;
      a22.href="service-details.html";
      h522.appendChild(a22);
      
  
      const p22=document.createElement("p");
      p22.innerHTML=body;
      momdiv.appendChild(p22);
  
      const a222 =document.createElement("a");
      a222.innerText="Read more";
      a222.className="btn-link primary-color"
      a222.href="service-details.html"
      momdiv.appendChild(a222)
  
  
      const i122 =document.createElement("i");
      i122.className="fal fa-arrow-right";
      a222.appendChild(i122);
    };
  
    serviscap.forEach(element => {
      displayserves(element['title'],element['body'],element['imglink']);
  
      
    });
  
  
  
  
    var servistip =[
      {
      'title':"titel",
      'body':"body",
      'imglink':"flaticon-stethoscope"
    },
      {
        'title':"titel",
        'body':"body",
        'imglink':"flaticon-pills"},
        {
          'title':"titel",
          'body':"body",
          'imglink':"flaticon-medicine"},
          {
            'title':"titel",
            'body':"body",
            'imglink':"flaticon-hospital-bed"},
            
  
            
          ]
    
  function servistip_first (titel,body,imglink){
  
    const div222 =document.createElement("div");
    div222.className="col-lg-3 col-md-4 col-sm-6"
    document.querySelector("#servistip26734576235").appendChild(div222);
  
    const div22233 =document.createElement("div");
    div22233.className="sigma_service style-16"
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
  
    const a222 =document.createElement("a");
    a222.innerText="Read more";
    a222.className="btn-link primary-color"
    a222.href="service-details.html"
    momdiv.appendChild(a222)
  
  
    const i122 =document.createElement("i");
    i122.className="far fa-long-arrow-alt-right";
    a222.appendChild(i122);
  
  }        
  
  servistip.forEach(element => {
    
  servistip_first(element['title'],element['body'],element['imglink']);
  
  });
  
  
  //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  
  function mtha5rshow(imgsrc1,imgsrc11,imgsrc111,imgsrc1111){
    document.querySelector("#imgmtha5r1").src=imgsrc1;
    
    document.querySelector("#imgmtha5r2").src=imgsrc11;
  
    document.querySelector("#imgmtha5r3").src=imgsrc111;
  
    document.querySelector("#imgmtha5r4").src=imgsrc1111;
  
  
  }
  
  
  mtha5rshow("assets/img/home-1/150x100.png","assets/img/home-1/150x100.png","assets/img/home-1/150x100.png","assets/img/home-1/150x100.png")
  