function doctor_details(doc_name,jobtit,rating,location,docimg,Overview,subdet,sub1,sub2,sub3,sub4,sub5,sub6){

    document.querySelector("#docimg").src=docimg;

    document.querySelector("#name").innerHTML=doc_name;
    
    document.querySelector("#rating").innerHTML=rating;

    document.querySelector("#jobtit").innerHTML=jobtit;

    document.querySelector("#overviw").innerHTML=Overview;

    document.querySelector("#subdet").innerHTML=subdet;

    document.querySelector("#sub1").innerHTML=sub1;

    document.querySelector("#sub2").innerHTML=sub2;

    document.querySelector("#sub3").innerHTML=sub3;

    document.querySelector("#sub4").innerHTML=sub4;

    document.querySelector("#sub5").innerHTML=sub5;

    document.querySelector("#sub6").innerHTML=sub6;

    document.querySelector("#img").src=location;

}

doctor_details(clinicdetels[0]['doc_name'],clinicdetels[0]['job_titrl'],clinicdetels[0]['rating'],clinicdetels[0]['location'],clinicdetels[0]['docimg'],clinicdetels[0]['Overview'],clinicdetels[0]['subdet'],clinicdetels[0]['sub1'],clinicdetels[0]['sub2'],clinicdetels[0]['sub3'],clinicdetels[0]['sub4'],clinicdetels[0]['sub5'],clinicdetels[0]['sub6']);


