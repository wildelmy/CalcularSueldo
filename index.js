const sueldoMin= 16000;
const sueldoMax= 20000;
const HrsRef= 40;
let totalHrs;

const input = document.getElementById("user-input");
const bnt = document.getElementById("calculate");
const value_hrs = document.getElementById("value_hrs");
const sueldoTotal = document.getElementById("sueldo");

bnt.addEventListener("click", function() {
    totalHrs = Number(input.value.trim());
    
    if(totalHrs <= HrsRef){
        let honorarios= totalHrs * sueldoMin;
        
        value_hrs.innerText= sueldoMin
        sueldoTotal.innerText= honorarios
       
    }else{
        let honorarios= totalHrs * sueldoMax;
       
        value_hrs.innerText= sueldoMax
        sueldoTotal.innerText= honorarios
    }
});