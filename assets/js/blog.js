function imgpost(titel,img,body,date,by,coment,harf){


    const mom =document.createElement("art1icle");
    mom.className="sigma_post style-7";
    document.querySelector("#post-container").appendChild(mom);

    const d1=document.createElement("div");
    d1.className="sigma_post-thumb";
    mom.appendChild(d1);

    const a1 =document.createElement("a");
    a1.href=harf;
    d1.appendChild(a1);

    const img1=document.createElement("img");
    img1.src=img;
    a1.appendChild(img1);

    const d2 =document.createElement("div");
    d2.className="sigma_post-body";
    mom.appendChild(d2);

    const d21 =document.createElement("div");
    d21.className="sigma_post-content";
    d2.appendChild(d21);

    const h5 =document.createElement('h5');
    d21.appendChild(h5);

    const a2 =document.createElement("a");

    a2.innerText=titel;
    h5.appendChild(a2);

    const p1 =document.createElement('p1');
    p1.innerText=body;
    d21.appendChild(p1);

    const d22 =document.createElement("div");
    d22.classNam="sigma_post-meta";
    d2.appendChild(d22);

    const ul1 =document.createElement("ul");
    ul1.id="disfix"
    d22.appendChild(ul1);


    const li1 =document.createElement("li");
    li1.id="disfixs"
    li1.className="author";
    ul1.appendChild(li1);
    const li2 =document.createElement("li");
    li2.id="disfixs"
    ul1.appendChild(li2);
    const li3 =document.createElement("li");
    li3.id="disfixs"
    ul1.appendChild(li3);



    const i1 =document.createElement("i");
    i1.className="fal fa-user-circle";
    li1.appendChild(i1);
    const a3 =document.createElement("a");
    a3.innerText=`.  ${by}`;
    li1.appendChild(a3);

    const i2 =document.createElement("i");
    i2.className="fal fa-calendar-alt";
    li2.appendChild(i2);
    const a31 =document.createElement("a");
    a31.innerText=`. on ${date}`;
    li2.appendChild(a31);

    const i3 =document.createElement("i");
    i3.className="fal fa-comment-dots";
    li3.appendChild(i3);
    const a32 =document.createElement("a");
    a32.innerText=`.  ${coment}`;
    li3.appendChild(a32);


    

}

imgpost("any","assets/img/blog-standard/730x415.jpg","anyewifwiohfuhfuhweuwhfiuehwfiuehfiuhwefuhuifhweiufhwiufhwiufhiu hfiwehfiuwhfiuwehfiuwehfihfiuwehfiuhefiufhiuehiuwehfiuwfieuhfeiuh","any","any","2313","#")



function vidpost(titel,img,body,date,by,coment,harf){


    const mom =document.createElement("art1icle");
    mom.className="sigma_post post-format-video style-7";
    document.querySelector("#post-container").appendChild(mom);

    const d1=document.createElement("div");
    d1.className="sigma_post-thumb";
    mom.appendChild(d1);

    const a1 =document.createElement("a");
    a1.href=harf;
    d1.appendChild(a1);

    const img1=document.createElement("img");
    img1.src=img;
    a1.appendChild(img1);

    const a12 =document.createElement("a");
    a12.className="sigma_video-btn popup-video"
    a12.href=harf;
    d1.appendChild(a12);

    const vid=document.createElement("i");
    vid.className="far fa-play";
    a12.appendChild(vid);

    const d2 =document.createElement("div");
    d2.className="sigma_post-body";
    mom.appendChild(d2);

    const d21 =document.createElement("div");
    d21.className="sigma_post-content";
    d2.appendChild(d21);

    const h5 =document.createElement('h5');
    d21.appendChild(h5);

    const a2 =document.createElement("a");

    a2.innerText=titel;
    h5.appendChild(a2);

    const p1 =document.createElement('p1');
    p1.innerText=body;
    d21.appendChild(p1);

    const d22 =document.createElement("div");
    d22.classNam="sigma_post-meta";
    d2.appendChild(d22);

    const ul1 =document.createElement("ul");
    ul1.id="disfix"
    d22.appendChild(ul1);

    const li1 =document.createElement("li");
    li1.id="disfixs"
    li1.className="author";
    ul1.appendChild(li1);
    const li2 =document.createElement("li");
    li2.id="disfixs"
    ul1.appendChild(li2);
    const li3 =document.createElement("li");
    li3.id="disfixs"
    ul1.appendChild(li3);


    const i1 =document.createElement("i");
    i1.className="fal fa-user-circle";
    li1.appendChild(i1);
    const a3 =document.createElement("a");
    a3.innerText=`.  ${by}`;
    li1.appendChild(a3);

    const i2 =document.createElement("i");
    i2.className="fal fa-calendar-alt";
    li2.appendChild(i2);
    const a31 =document.createElement("a");
    a31.innerText=`. on ${date}`;
    li2.appendChild(a31);

    const i3 =document.createElement("i");
    i3.className="fal fa-comment-dots";
    li3.appendChild(i3);
    const a32 =document.createElement("a");
    a32.innerText=`.  ${coment}`;
    li3.appendChild(a32);


    

}

vidpost("any","assets/img/blog-standard/730x415.jpg","anyewifwiohfuhfuhweuwhfiuehwfiuehfiuhwefuhuifhweiufhwiufhwiufhiu hfiwehfiuwhfiuwehfiuwehfihfiuwehfiuhefiufhiuehiuwehfiuwfieuhfeiuh","any","any","2313","http://www.youtube.com/watch?v=TKnufs85hXk")


function linkedpost (titel,href,linktit){

    const mom =document.createElement("art1icle");
    mom.className="sigma_post post-format-link style-7";
    document.querySelector("#post-container").appendChild(mom);

    const d2 =document.createElement("div");
    d2.className="sigma_post-body";
    mom.appendChild(d2);

    const d21 =document.createElement("div");
    d21.className="sigma_post-content";
    d2.appendChild(d21);

    const h5 =document.createElement('h5');
    h5.innerText=titel;
    d21.appendChild(h5);

    const d5 =document.createElement("div");
    d5.className="sigma_post-meta";
    d21.appendChild(d5);

    const a43 =document.createElement("a");
    a43.href=href;
    d5.appendChild(a43);

    const i1 =document.createElement("i");
    i1.className="fal fa-link";
    a43.appendChild(i1);

    const p =document.createElement("p");
    p.innerText=linktit;
    p.style.marginTop="3%"
    a43.appendChild(p);



}


 linkedpost ("any","assets/img/blog-standard/730x415.jpg",'linktit')