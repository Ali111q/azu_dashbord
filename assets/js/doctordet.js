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

doctor_details(doctordetels[0]['doc_name'],doctordetels[0]['job_titrl'],doctordetels[0]['rating'],doctordetels[0]['location'],doctordetels[0]['docimg'],doctordetels[0]['Overview'],doctordetels[0]['subdet'],doctordetels[0]['sub1'],doctordetels[0]['sub2'],doctordetels[0]['sub3'],doctordetels[0]['sub4'],doctordetels[0]['sub5'],doctordetels[0]['sub6']);


