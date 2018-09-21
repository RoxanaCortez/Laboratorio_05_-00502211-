let bisiesto = function(anio){
    if(anio%4==0 && anio%100!=0 || anio%400==0 ){
        console.log("El año es bisiesto");
    }
    else{
        console.log("El año no es bisiesto");
    }
}