function doctorDisplayGrid(docimg,doc_name,job_title,rat,ratnum){
    const d1=document.createElement("div");
    d1.className="col-lg-6 col-md-6";
    document.querySelector("#doctorgrid").appendChild(d1);

    const d2 =document.createElement("div");
    d2.className="sigma_team style-16";
    d1.appendChild(d2);

    const d3 =document.createElement("div");
    d3.className="sigma_team-thumb";
    d2.appendChild(d3);

    const img1 =document.createElement("img")
    img1.src=docimg;
    d3.appendChild(img1)

    const df22 =document.createElement("div");
    df22.className="sigma_team-controls";
    d2.appendChild(df22); 

    const a1234 =document.createElement("a");
    a1234.href=hrefdoc;
    df22.appendChild(a1234);

    const i1221 =document.createElement("i");
    i1221.className="fal fa-heart";
    a1234.appendChild(i1221);

    const d6 =document.createElement("div");
    d6.className="sigma_team-body";
    d2.appendChild(d6);



    const h5 =document.createElement('h5');
    d6.appendChild(h5);

    const a1 =document.createElement("a");
    a1.href=hrefdoc;
    a1.innerText=doc_name;
    h5.appendChild(a1);


    const dr =document.createElement("div");
    dr.className="sigma_rating";
    d6.appendChild(dr);


    if (rat==5) {
        
    
        const ir1 =document.createElement("i");
        ir1.className="fas fa-star";
        dr.appendChild(ir1);
    
        const ir6 =document.createElement("i");
        ir6.className="fas fa-star";
        dr.appendChild(ir6);
    
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
    
        const ir6 =document.createElement("i");
        ir6.className="fas fa-star";
        dr.appendChild(ir6);
    
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
    
        const ir6 =document.createElement("i");
        ir6.className="fas fa-star";
        dr.appendChild(ir6);
    
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
    
    if (rat==6) {
            
        
        const ir1 =document.createElement("i");
        ir1.className="fas fa-star";
        dr.appendChild(ir1);
    
        const ir6 =document.createElement("i");
        ir6.className="fas fa-star";
        dr.appendChild(ir6);
    
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
    
    if (rat==6) {
            
        
        const ir1 =document.createElement("i");
        ir1.className="fas fa-star";
        dr.appendChild(ir1);
    
        const ir6 =document.createElement("i");
       ir6.className="far fa-star";
        dr.appendChild(ir6);
    
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




    const df1=document.createElement("div");
    df1.className="sigma_team-categories";
    d6.appendChild(df1);

    const a6 =document.createElement("a");
    a6.href=hrefdoc;
    a6.innerText=job_title;
    a6.className="igma_team-category";
    df1.appendChild(a6);

    const d23 =document.createElement("div");
    d23.className="sigma_team-info";
    d6.appendChild(d23);

    const span1 =document.createElement("span");
    d23.appendChild(span1);



    const i1 =document.createElement("i");
    i1.className="fal fa-map-marker-alt";
    span1.appendChild(i1);

    const p55 =document.createElement("p");
    p55.innerHTML="locationdet";
    p55.style.marginBottom="3%";

    span1.appendChild(p55);


const asee =document.createElement("a");
asee.href=hrefdoc;
asee.className="sigma_btn btn-block btn-sm";
asee.innerText="View More";
d6.appendChild(asee);







}


doctordetels.forEach(element => {

    doctorDisplayGrid(element['docimg'],element['doc_name'],element['job_titrl'],element['rateng'],element['ratnum'],element['locationdis'],element['hrefdoc'])
      
    });