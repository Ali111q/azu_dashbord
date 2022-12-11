function doctorlist (docimg,hrefdoc,doc_name,job_title,location,exp,work_time,rat,ratnum,Subspecialities){
    const d1 =document.createElement("div");
    d1.className="sigma_team style-17";
    document.querySelector("#cinliclist").appendChild(d1);

    const d2 =document.createElement("div");
    d2.className="row no-gutters";
    d1.appendChild(d2);

    const d3 =document.createElement("div");
    d3.className="col-md-3";
    d2.appendChild(d3);

    const d4 =document.createElement("div");
    d4.className="sigma_team-thumb";
    d3.appendChild(d4);

    const img1 =document.createElement("img")
    img1.src=docimg;
    d4.appendChild(img1)

    const d5 =document.createElement("div");
    
    d5.className="col-md-5 col-sm-6";
    d2.appendChild(d5);

    const d6 =document.createElement("div");
    d6.className="sigma_team-body";
    d5.appendChild(d6);



    const h5 =document.createElement('h5');
    d6.appendChild(h5);

    const a1 =document.createElement("a");
    a1.href=hrefdoc;
    a1.innerText=doc_name;
    h5.appendChild(a1);

    const df1=document.createElement("div");
    df1.className="sigma_team-categories";
    d6.appendChild(df1);

    const a2 =document.createElement("a");
    a2.href=hrefdoc;
    a2.innerText=job_title;
    a2.className="igma_team-category";
    df1.appendChild(a2);

    const p =document.createElement("p");
    p.innerText=Subspecialities;
    d6.appendChild(p);

    const d7 =document.createElement("div");
    d7.className="d-flex align-items-center mt-4";
    d6.appendChild(d7);

    const a233 =document.createElement("a");
    a233.href=hrefdoc;
    a233.innerText="VIEW MORE";
    a233.className="sigma_btn";
    d7.appendChild(a233);

    const df22 =document.createElement("div");
    df22.className="sigma_team-controls ml-3";
    d7.appendChild(df22); 

    const a1234 =document.createElement("a");
    a1234.href=hrefdoc;
    d7.appendChild(a1234);

    const i1221 =document.createElement("i");
    i1221.className="fal fa-heart";
    a1234.appendChild(i1221);



  


    const d212 =document.createElement("div");
    d212.className="col-md-4 col-sm-6";
    d2.appendChild(d212);

    const d22 =document.createElement("div");
    d22.className="sigma_team-footer";
    d212.appendChild(d22);

    const d23 =document.createElement("div");
    d23.className="sigma_team-info";
    d22.appendChild(d23);

    const i1 =document.createElement("i");
    i1.className="fal fa-map-marker-alt";

    const i2 =document.createElement("i");
    i2.className="fal fa-award";

    const i3 =document.createElement("i");
    i3.className="fal fa-calendar";

    const span1 =document.createElement("span");
    d23.appendChild(span1);
    span1.appendChild(i1);
    span1.innerText=location;

    const span2 =document.createElement("span");
    d23.appendChild(span2);
    span2.appendChild(i2);
    span2.innerText=`${exp} Yrs Experience`;

    const span3 =document.createElement("span");
    d23.appendChild(span3);
    span3.appendChild(i3);
    span3.innerText=work_time;

    const dr =document.createElement("div");
    dr.className="sigma_rating";
    d22.appendChild(dr);


    if (rat==5) {
        
    
    const ir1 =document.createElement("i");
    ir1.className="fas fa-star";
    dr.appendChild(ir1);

    const ir2 =document.createElement("i");
    ir2.className="fas fa-star";
    dr.appendChild(ir2);

    const ir3 =document.createElement("i");
    ir3.className="fas fa-star";
    dr.appendChild(ir3);

    const ir4 =document.createElement("i");
    ir4.className="fas fa-star";
    dr.appendChild(ir4);

    const ir5 =document.createElement("i");
    ir5.className="fas fa-star";
    dr.appendChild(ir5);

    const snapr =document.createElement("snap");
    snapr.className="ml-3";
    snapr.innerText=ratnum;
    dr.appendChild(snapr)
    }

if (rat==4) {
        
    
    const ir1 =document.createElement("i");
    ir1.className="fas fa-star";
    dr.appendChild(ir1);

    const ir2 =document.createElement("i");
    ir2.className="fas fa-star";
    dr.appendChild(ir2);

    const ir3 =document.createElement("i");
    ir3.className="fas fa-star";
    dr.appendChild(ir3);

    const ir4 =document.createElement("i");
    ir4.className="fas fa-star";
    dr.appendChild(ir4);

    const ir5 =document.createElement("i");
    ir5.className="far fa-star";
    dr.appendChild(ir5);

    const snapr =document.createElement("snap");
snapr.className="ml-3";
snapr.innerText=ratnum;
dr.appendChild(snapr)

}


if (rat==3) {
        
    
    const ir1 =document.createElement("i");
    ir1.className="fas fa-star";
    dr.appendChild(ir1);

    const ir2 =document.createElement("i");
    ir2.className="fas fa-star";
    dr.appendChild(ir2);

    const ir3 =document.createElement("i");
    ir3.className="fas fa-star";
    dr.appendChild(ir3);

    const ir4 =document.createElement("i");
    ir4.className="far fa-star";
    dr.appendChild(ir4);

    const ir5 =document.createElement("i");
    ir5.className="far fa-star";
    dr.appendChild(ir5);

    const snapr =document.createElement("snap");
snapr.className="ml-3";
snapr.innerText=ratnum;
dr.appendChild(snapr)

}

if (rat==2) {
        
    
    const ir1 =document.createElement("i");
    ir1.className="fas fa-star";
    dr.appendChild(ir1);

    const ir2 =document.createElement("i");
    ir2.className="fas fa-star";
    dr.appendChild(ir2);

    const ir3 =document.createElement("i");
    ir3.className="far fa-star";
    dr.appendChild(ir3);

    const ir4 =document.createElement("i");
    ir4.className="far fa-star";
    dr.appendChild(ir4);

    const ir5 =document.createElement("i");
    ir5.className="far fa-star";
    dr.appendChild(ir5);

    const snapr =document.createElement("snap");
snapr.className="ml-3";
snapr.innerText=ratnum;
dr.appendChild(snapr)

}

if (rat==2) {
        
    
    const ir1 =document.createElement("i");
    ir1.className="fas fa-star";
    dr.appendChild(ir1);

    const ir2 =document.createElement("i");
   ir2.className="far fa-star";
    dr.appendChild(ir2);

    const ir3 =document.createElement("i");
    ir3.className="far fa-star";
    dr.appendChild(ir3);

    const ir4 =document.createElement("i");
    ir4.className="far fa-star";
    dr.appendChild(ir4);

    const ir5 =document.createElement("i");
    ir5.className="far fa-star";
    dr.appendChild(ir5);

    const snapr =document.createElement("snap");
snapr.className="ml-3";
snapr.innerText=ratnum;
dr.appendChild(snapr)

}
 }



 clinicdetels.forEach(element => {


    doctorlist (element['docimg'],element['hrefdoc'],element['doc_name'],element['job_titrl'],element['locationdis'],element['expirence'],element['work_time'],element['rateng'],element['ratnum'],element['Subspecialities'])
    
  });
