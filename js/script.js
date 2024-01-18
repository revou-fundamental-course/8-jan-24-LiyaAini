function hasilLuas(){
    let sisi=document.getElementById("sisi").value;
    sisi=Number(sisi);
    let hasilLuas=sisi*sisi;
    document.getElementById("hasilLuas").value=hasilLuas;
    
}
function hasilKeliling(){
    let sisi=document.getElementById("sisi").value;
    sisi=Number(sisi);
    let hasilKeliling=sisi*4;
    document.getElementById("hasilKeliling").value=hasilKeliling;  
}
function reset(){
    document.getElementById("sisi").value ="";
    document.getElementById("hasilLuas").value = "";
    document.getElementById("hasilKeliling").value = "";
}