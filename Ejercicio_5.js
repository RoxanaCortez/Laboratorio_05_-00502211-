let circunferencia = function(){
    radio=prompt("Ingrese en radio de una circunferencia: ");
    if(radio<=0){
        console.log("El radio debe ser mayor a cero");
    }
    else{
        let area;
        area = Math.pow(radio,2)* Math.PI;
        console.log("El valor del área es: ", area);
    }
    
}