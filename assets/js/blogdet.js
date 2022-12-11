function blog_detels(by,date,img1,firsttop,t1body,t12body,hent,secondtop,t2body,img2,therdtop,t3body,t32body,href){
    document.querySelector("#img1").src=img1;

    document.querySelector("#by1").innerHTML=by;

    document.querySelector("#date1").innerHTML=date;

    document.querySelector("#firsttop").innerHTML=firsttop;

    document.querySelector("#t1body").innerHTML=t1body;

    document.querySelector("#t12body").innerHTML=t12body;

    document.querySelector("#hent").innerHTML=hent;

    document.querySelector("#secondtop").innerHTML=secondtop;

    document.querySelector("#t2body").innerHTML=t2body;

    document.querySelector("#img2").src=img2;

    document.querySelector("#therdtop").innerHTML=therdtop;

    document.querySelector("#t3body").innerHTML=t3body;

    document.querySelector("#t32body").innerHTML=t32body;

    document.querySelector("#sources").href=href;

}

blog_detels('by','date','assets/img/blog-details/800x400.jpg','firsttop','t1body','t12body','hent','secondtop','t2body','assets/img/blog-details/800x400.jpg','therdtop','t3body','t32body','#');



function  Recent_News (img,titel,hrefdoc,dat){
const d1 =document.createElement("div");
d1.className="sigma_recent-post";
document.querySelector("#Recent-News").appendChild(d1);


const d4 =document.createElement("a");
d4.className="recent-post-image";
d1.appendChild(d4);

const img1 =document.createElement("img");
img1.src=img;
d4.appendChild(img1)

const d2 =document.createElement("div");
d2.className="recent-post-descr";
d1.appendChild(d2);

const h5 =document.createElement('h6');
d2.appendChild(h5);

const a1 =document.createElement("a");
a1.href=hrefdoc;
a1.innerText=titel;
h5.appendChild(a1);

const a1234 =document.createElement("a");
a1234.href=hrefdoc;
d2.appendChild(a1234);

const i1221 =document.createElement("i");
i1221.className="far fa-calendar-alt mr-2";
i1221.innerHTML=dat;
a1234.appendChild(i1221);




}

Recent_News ("assets/img/blog-details/80x80.jpg","titel","hrefdoc","kos omk say")



var commentdb =[

    {
        'img1':"assets/img/blog-details/150.png" ,
        'usname':"ali",
        'date':"15",
        'body':"hi",
        'uuid':"0"
        
    },    {
        'img1':"assets/img/blog-details/150.png" ,
        'usname':"ali",
        'date':"15",
        'body':"hi",
        'uuid':"01"
        
    },    {
        'img1':"assets/img/blog-details/150.png" ,
        'usname':"ali",
        'date':"15",
        'body':"hi",
        'uuid':"02"
        
    },    {
        'img1':"assets/img/blog-details/150.png" ,
        'usname':"ali",
        'date':"15",
        'body':"hi",
        'uuid':"03"
        
    }
]





function display_coment(img1,usname,date,body,uuidr){

    const ul =document.createElement("ul");
    document.querySelector("#coment22").appendChild(ul);

    const d1 =document.createElement("div");
    ul.appendChild(d1);

    const li1 =document.createElement("li");
    li1.className="comment-item";
    d1.appendChild(li1);

    const img =document.createElement("img");
    img.src=img1;
    li1.appendChild(img);

    const d2 =document.createElement("div");
    d2.className="comment-body";
    li1.appendChild(d2);

    const h5 =document.createElement("h5");
    h5.innerText=usname;
    d2.appendChild(h5);

    const span =document.createElement("span");
    span.className="date";
    span.innerText=date;
    d2.appendChild(span);

    const p =document.createElement("p")
    p.innerText=body;
    d2.appendChild(p);

    const a1 =document.createElement("button");

    a1.className="btn-link";
    a1.id=`ujerhfefherb${uuidr}`;
    d2.appendChild(a1);

    const divrep =document.createElement("div");
    divrep.className=`divrep${uuidr}`;
    d1.appendChild(divrep);

    const lidf =document.createElement("li");
    divrep.appendChild(lidf);
    


}







var uuid =0;
$(".sigma_btn-custom").click(function () {

    uuid++;
    var uuidd = uuid +1;
  event.preventDefault();
const bodytxt= document.querySelector("#bodytxt").value;

commentdb.push({    
    'img1':"assets/img/blog-details/150.png" ,
    'usname':"ali",
    'date':"15",
    'body':bodytxt,
    'uuid':`${uuidd}`
})

display_coment( commentdb[0]['img1'],commentdb[0]['usname'],commentdb[0]['date'],bodytxt,uuidd);




})




commentdb.forEach(element => {

    display_coment( element['img1'],element['usname'],element['date'],element['body'],element['uuid'])






 


    document.querySelector(`#ujerhfefherb${element['uuid']}`).addEventListener('click',()=>{
        console.log(element['uuid']);
        console.log(`#ujerhfefherb${element['uuid']}`);

        var uuidrep =element['uuid'];
        replasss( element['img1'],element['usname'],element['date'],element['body'],uuidrep)



})
});