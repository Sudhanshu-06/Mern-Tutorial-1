function updateCard(){
     document.getElementById("schoolNameVal").innerText=document.getElementById("schoolName").value;
     
     document.getElementById("studnetNameVal").innerText=document.getElementById("studentName").value;
     
     document.getElementById("dobVal").innerText=document.getElementById("dob").value;
     
     document.getElementById("classVal").innerText=document.getElementById("class").value;
     
     document.getElementById("rollnoVal").innerText=document.getElementById("rollno").value;
     
     document.getElementById("contactnoVal").innerText=document.getElementById("contactno").value;
     
     // console.log(schoolNameTxt,studentNameTxt,doBTxt,classTxt,rollnoTxt,contactNoTxt);
     
}
function printIdCard(){
     window.print();
}

// function clearAll(){
//     document.getElementById("schoolName").value="";
     
//     document.getElementById("studentName").value="";
    
//     document.getElementById("dob").value="";
    
//     document.getElementById("class").value="";
    
//     document.getElementById("rollno").value="";
    
//     document.getElementById("contactno").value="";

// }
